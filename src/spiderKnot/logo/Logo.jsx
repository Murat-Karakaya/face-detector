import React from "react";
import Tilt from 'react-parallax-tilt';
import robot from "./robot.png"
import "./Logo.css"

const Logo = () => {
    return(
        <Tilt className="parallax-effect" perspective={700}>
        <div className="inner-element">
          <div><img src={robot} alt="robot image"/></div>
        </div>
      </Tilt>
    );
}

export default Logo;