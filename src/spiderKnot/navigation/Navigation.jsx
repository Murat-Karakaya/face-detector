import React from "react";

const Navigation = ({onRouteChange, route}) => {
    if (route === "home page") {
        return(
            <nav>
                <p onClick={() => onRouteChange("sign in")} className="navbutton">Sign Out</p>
            </nav>
        ); 
    } 
    if (route === "sign in") {
        return(
            <nav>
                <p onClick={() => onRouteChange("register")} className="navbutton">Register</p>
            </nav>
        );
    }
    if (route === "register") {
        return(
            <nav>
                <p onClick={() => onRouteChange("sign in")} className="navbutton">Sign In</p>
            </nav>
        );    
    }
    
}

export default Navigation;