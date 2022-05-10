import React from "react"
import josh from "../images/josh-headshot.jpg"

export default function Info() {
    return (
        <div className="info">
            <img src={josh} alt="Joshua" />
            <h1 className="info--name">Joshua Smith</h1>
            <p className="info--text">Frontend Developer</p>
            <p className="email--text">joshua_smith2314@yahoo.com</p>
            <div className="contact--btns">
                <button className="email--btn btn">Email</button>   
                <button className="link--btn btn" >LinkedIn</button>  
            </div> 
        </div>
    )
}