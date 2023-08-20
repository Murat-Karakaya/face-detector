import React, { useState } from "react";

const Register = ({loadUser, onRouteChange}) => {
    let [password, setPassword] = useState("");
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [loading, setLoading] = useState(false);

    const onRegister = () => {
        if (!name || !email.includes("@") || !password) {
            return;
        }
        setLoading(true)
        fetch("https://face-detector-backend.onrender.com/register", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
        .then(response => response.json())
        .then((data) => {
            if (data.id) {
                loadUser(data);
                setLoading(false);
                onRouteChange("home page");
                return
            }
            alert("An account with that email allready exists");
            setLoading(false);
        })
        .catch((err) => (alert("An account with that email allready exists"), setLoading(false)))
    }
    return(
        <>
        <h2 className="BigFormTitle">Register</h2>
        <div className="formContainer">
        <div className="form register">
            <p className="formP">Name</p>
            <input 
                className="formInput" 
                type="text" 
                name="name"
                onKeyPress={() => event.key === "Enter" && onRegister()}
                onChange={(event) => setName(event.target.value)}
            />
            <p className="formP">Email</p>
            <input 
                className="formInput" 
                type="email" 
                name="email" 
                onKeyPress={() => event.key === "Enter" && onRegister()}
                onChange={(event) => setEmail(event.target.value)}
            />
            <p className="formP">Password</p>
            <input 
                className="formInput" 
                type="password" 
                name="password" 
                onKeyPress={() => event.key === "Enter" && onRegister()}
                onChange={(event) => setPassword(event.target.value)}
            />
            <div className="SubmitContainer">
                <input onClick={onRegister} className="cool-btn" type="submit" value="Register" /> 
            </div>
            <p className="formparagraf">Already have an account? <strong onClick={() => onRouteChange("sign in")}>Sign In</strong></p>
            <div style={{display: loading ? "block" : "none"}}>
                <div className="loading-container">
                    <div className="loading-blue"></div>
                    <div className="loading-pink"></div>
                </div>
                <p className="formparagraf">processing...</p>
            </div>
        </div>
        </div>
        </>
    );
 
}

export default Register;