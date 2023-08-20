import React, {useState} from "react";

const Signin = ({loadUser, onRouteChange}) => {
    let [password, setPassword] = useState("");
    let [email, setEmail] = useState("");
    let [loading, setLoading] = useState(false);

    const onSubmit = () => {
        if (!email.includes("@") || !password) {
            return;
        }
        setLoading(false)
        fetch("https://face-detector-backend.onrender.com/signin", {
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
                setLoading(false);
                onRouteChange("home page");
            } else {
                alert(data);
                setLoading(false);
            }
        })
        .catch((err) => (alert("Sorry! wrong email or password."), setLoading(false)))
    }
    return(
        <>
        <h2 className="BigFormTitle">Sign In</h2>
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

export default Signin;