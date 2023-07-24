import React from "react";
import "./Navigation.css"

const Navigation = ({onRouteChange, route}) => {
    if (route === "home page") {
        return(
            <nav style={{display: "flex", justifyContent: "flex-end"}}>
                <p onClick={() => onRouteChange("sign in")} className="navbutton">Sign Out</p>
            </nav>
        ); 
    } else if (route === "sign in") {
        return(
            <h2 className="navTitle">Sign In</h2>
        );
    } else{
        return(
            <h2 className="navTitle">Register</h2>
        );
    }
}

export default Navigation;