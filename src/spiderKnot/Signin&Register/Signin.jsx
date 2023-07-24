import React, {useState} from "react";

const Signin = ({loadUser, onRouteChange}) => {
    let [password, setPassword] = useState("");
    let [email, setEmail] = useState("");

    const onSubmit = () => {
        if (!email || !password) {
            return;
        }
        fetch("http://localhost:5172/signin", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(response => response.json())
        .then((data) => {
            if (data.id) {
                loadUser(data);
                onRouteChange("home page");
            } else {
                alert(data);
            }
        });
    }
    return(
        <div className="formContainer">
        <div className="form signIn">
            <p className="formP">Email</p>
            <input 
                className="formInput" 
                type="email" 
                name="email" 
                onKeyPress={() => event.key === "Enter" && onSubmit()}
                onChange={(event) => setEmail(event.target.value)}
            />
            <p className="formP">Password</p>
            <input
                className="formInput" 
                type="password" 
                name="password"
                onKeyPress={() => event.key === "Enter" && onSubmit()} 
                onChange={(event) => setPassword(event.target.value)}
            />
            <div className="SubmitContainer">
                <input onClick={onSubmit} className="cool-btn" type="submit" value="Sign In" /> 
            </div>
            <p className="formparagraf">Don't have an account? <strong onClick={() => onRouteChange("register")}>Register</strong></p>
        </div>
        </div>
    );
 
}

export default Signin;