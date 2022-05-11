import React from 'react'
import './index.css'
import About from './components/About'
import Projects from './components/Projects'
import Info from './components/Info'
import Interests from './components/Interests'

export default function App() {
    return (
        <div>
            <Info />
            <About />
            <Interests />
            <Projects />
        </div>
    )
}
