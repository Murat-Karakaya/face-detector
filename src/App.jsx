import React, { Component }from 'react';
import './App.css';
import ParticlesBg from 'particles-bg';
import Register from './spiderKnot/Signin&Register/Register';
import Signin from './spiderKnot/Signin&Register/Signin';
import Navigation from './spiderKnot/navigation/Navigation';
import Logo from './spiderKnot/logo/Logo';
import ImageLinkForm from './spiderKnot/imageLinkForm/ImageLinkForm';
import Rank from './spiderKnot/rank/Rank';
import FaceRecognition from './spiderKnot/FaceRecognition/FaceRecognition.jsx';

const initialState = {
  input: "",
  isInputValid: true,
  notDisplayFaceBoundingBox: true,
  box: [{notdisplay: true}],
  route: "sign in",
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: ""
  }  
}

class App extends Component{
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name, 
      email: data.email, 
      entries: data.entries,
      joined: data.joined
    }})
  }

  calculateFaceLocation = (faceBoundingBox) => {
    const image = document.getElementById("inputImage")
    const width = Number(image.width)
    const height = Number(image.height)

    const boundingBoxArray = faceBoundingBox.map((box) => {
      return {
        leftCol: box.left_col * width,
        topRow: box.top_row * height,
        rightCol: width - (box.right_col * width),
        bottomRow: height - (box.bottom_row * height),
      }
    });

    return boundingBoxArray;

  }

  settingBox = (box) => {
    this.setState({notDisplayFaceBoundingBox: false})
    this.setState({box: box})
  }

  onInputChange = (e) => {
    this.setState({input:e.target.value})
    this.setState({isInputValid: true})
    this.state.notDisplayFaceBoundingBox = true
  }

  onButtonSubmit=()=>{
    fetch("http://localhost:5172/imageUrl", {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
          input: this.state.input
      })
      })
      .then(response => response.json())
      .then(response => response.outputs[0].data.regions.map(face => face.region_info.bounding_box))
      .then((d) => {
        this.setState({isInputValid: true})
        this.settingBox(this.calculateFaceLocation(d))
        
        fetch("http://localhost:5172/image", {
          method: "put",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
              id: this.state.user.id
          })
        })
          .then((response) => response.json())
          .then((rank) => {
            this.setState(Object.assign(this.state.user, { entries: rank}))
          })
      })
      .catch(() => this.setState({isInputValid: false}))
  }



  onRouteChange = (order) => {
    if (order === "sign in") {
      this.setState(initialState)
    } else {
      this.setState({route: order})  
    }
    
  }

  render () {
    return (
      <>
        <Navigation onRouteChange={this.onRouteChange} route={this.state.route}/>
        <ParticlesBg type={this.state.route ==="home page" ? "square" : "cobweb"} num={this.state.route ==="home page" ? 7 : 40} color={"#7040f5"} bg={true} />
        {
          this.state.route === "home page"
          ?<>
          <Logo />
          <Rank name={this.state.user.name} entries={this.state.user.entries}/>
          <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}/>
          <div className='faceContainer'>
            <FaceRecognition
              notDisplayFaceBoundingBox={this.state.notDisplayFaceBoundingBox} 
              boundingBox={this.state.box}
              imageUrl={this.state.input}
              isInputValid={this.state.isInputValid}/>
          </div>
          </>
          :(this.state.route === "sign in"
            ?<Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )
        }
      </>
    )
  }
}

export default App