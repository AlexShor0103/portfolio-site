import React from "react";
import {Link} from "react-router-dom";
import './Home.css'

function Home() {
    return(
        <div className="TitleBox">
            <div className="TextBox">
                <h1>This is the home page</h1>
                <p className="BiggerBoyText">
                    Here is where I'd like to talk about myself. I am a (aspiring) UX designer (still getting there)!
                    I will definitely add more to this homepage I swear but right now is just setup!!
                </p>
            </div>
            <div className="sampleImg">
                "IMG HERE"
            </div>
        </div>
    )
}

export default Home;