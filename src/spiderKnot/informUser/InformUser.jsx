import React, {useEffect} from "react";

const InformUser = ({onRouteChange}) => {
    useEffect(()=> {
        fetch("https://face-detector-backend.onrender.com/")
        .then(response => response.json())
        .catch()
    }, [])

    const marginLeft = {marginLeft: "1em"}

    return(
    
        <>
        <div className="formContainer">
        <div className="form informUsers">
            <h1 style={{fontSize: "2em", textAlign: "center"}}>Face Detector</h1>
            <h2 style={marginLeft}>About</h2>
            <p className="formP">This is a website that shows faces in a foto.
             It has a database and it talks with clarifai-api and face-detector-backend</p>
            
            <h2 style={marginLeft}>Security Recommendation</h2>
            <p className="formP">When you register DON'T use your real name, DON'T use your real email, and I DON'T recomend 
            using a password that you already used on a different site. 
            Altough your password is protected by hash. Your name and email is not. 
            So for those use something silly like: 
            "Unnamed Person" and "i_love_patetos@burger.tomato"</p>

            <h2 style={marginLeft}>Additional Content</h2>
            <p className="formP">You can visit my github account from <a href="https://github.com/Murat-Karakaya" target="_blank">here</a> 
            <br /> OR  <br />
            You can visit the github repository of this site from <a href="https://github.com/Murat-Karakaya/face-detector" target="_blank">here</a></p>
            <div className="SubmitContainer">
                <input onClick={() => onRouteChange("sign in")} className="cool-btn" type="submit" value="Okay" /> 
            </div>
        </div>
        </div>
        </>
    );
 
}

export default InformUser;