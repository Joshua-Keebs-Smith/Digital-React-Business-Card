import React from "react"
import josh from "../images/josh-headshot.jpg"

export default function Info() {
    return (
        <div className="info">
            <img 
                src={josh} 
                alt="Joshua" 
            />
            <div className="info-container">
                <h1 className="info--name">
                    Joshua Smith
                </h1>
                <p className="info--text">
                    Frontend Developer
                </p>
                <p className="email--text">
                    joshua_smith2314@yahoo.com
                </p>
                <div className="contact--btns">
                    <a 
                    href="https://www.linkedin.com/in/joshua-smith-a5076718/" 
                    className="link--btn btn">
                        LinkedIn
                    </a>
                    <a
                    href="https://github.com/Joshua-Keebs-Smith" 
                    className="github--btn btn" >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    )
}