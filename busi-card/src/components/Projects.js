import React from "react"

export default function Projects(props) {
    return (   
        <div className="proj-container">
            <div className="project">
                <h4 className="proj-name">{props.projectName}</h4>
                <img src={props.image} alt={props.imgAlt} className="proj-img" />
                <p className="proj-desc">{props.description}</p>
            </div>
        </div>   
    )
}