import React from "react";
import {Link} from "react-router-dom";

function ErrorPage() {
    return(
        <div>
            <h1>WOOPS! You (or I) screwed up and got here, so click <Link to="/">here</Link> to go home</h1>
        </div>
    )
}

export default ErrorPage;