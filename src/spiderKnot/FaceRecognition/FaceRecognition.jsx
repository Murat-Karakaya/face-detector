import React from "react";

const FaceFecognition = ({isInputValid, notDisplayFaceBoundingBox, boundingBox, imageUrl}) => {
    if (imageUrl !== "" && isInputValid) {
        const boxForEachFace = () => {
            return boundingBox.map((object) => {
                return(
                    <div key={String(object.topRow)} className="boundingBox" style={
                        notDisplayFaceBoundingBox ? {display: "none"} :
                        {
                            top: object.topRow,
                            right: object.rightCol,
                            bottom: object.bottomRow,
                            left: object.leftCol,
                        }}></div>
                )
            })

        } 
        return(
            <>
            <div style={{display: "inline-block",  position: "relative"}}>
                <img id="inputImage"  src={imageUrl} alt="face foto" width="300px" height="auto"/>
                {boxForEachFace()}
            </div>
            
            
            </>
        )
    } else {
        if (isInputValid) {
            return(
                <p>You can put your foto's URL above</p>
            ) 
        } else {
            return(
                <p>Face is not found</p>
            ) 
        }

    }

}

export default FaceFecognition;