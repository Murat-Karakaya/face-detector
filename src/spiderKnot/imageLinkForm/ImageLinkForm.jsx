import React from "react";

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return(
        <div className="imageForm">
            <p>
                {"This magic robot will detect faces in your app. Give it a try!"}
            </p>
            <div className="formContainer">
                <div className="imagelinkformdiv">
                    <input type="text" onKeyPress={() => event.key === "Enter" && onButtonSubmit()} onChange={onInputChange}/>
                    <div className="btn-container">
                        <button className="cool-btn" onClick={onButtonSubmit}>DETECT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;