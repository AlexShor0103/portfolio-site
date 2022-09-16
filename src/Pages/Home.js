import React from "react";

function Home() {
    return(
        <div>
            <h1>This is the Home Page</h1>
            <ul>
                <li>
                    <a href="/portfolio-site/About"> about</a>
                </li>
                <li>
                    <a href="/portfolio-site/Resume"> Resume</a>
                </li>
                <li>
                    <a href="/portfolio-site/Projects"> Projects</a>
                </li>
            </ul>
        </div>
    )
}

export default Home;