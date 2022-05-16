import React from 'react'
import './index.css'
import About from './components/About'
import Projects from './components/Projects'
import Info from './components/Info'
import Interests from './components/Interests'
import data from './data'

export default function App() {

    let projectInfo = data.map(proj => {
        return <Projects 
            key = {proj.id}
            {...proj}
        />
    })

    return (
        <div>
            <Info />
            <About />
            <Interests />
            <h2>Projects</h2>
            {projectInfo}
        </div>
    )
}
