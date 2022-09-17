import React from "react";
import {useNavigate} from "react-router-dom";

function Resume() {
    let navigate = useNavigate();
    return(
        <div>
            <h1>This is the Resume Page</h1>
            {/* <Link to="/">Click to go home</Link> */}
            <button
                onClick={() => {
                    navigate("/UXWork");
                }}
            >
                {" "}
                get home</button>
        </div>
    )
}

export default Resume;