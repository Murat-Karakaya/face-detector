import React from "react";

const Rank = ({ name, entries }) => {
    return(
        <>
            <h2 style={{textAlign: "center"}}>{`${name}, your current rank is: #${entries}`}</h2>
        </>
    );
}

export default Rank;