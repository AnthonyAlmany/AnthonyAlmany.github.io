import React from 'react'

import Wave from "./Wave"
import "../style/about.css"


function About() {
    return (
        <div className="about" id="about">
            <div className="description-container">
                <div className="description-title">
                    <h2>  Hi, I'm Anthony! A front-end developer based in Australia.</h2>
                </div>
                <div className="description">
                    <h2>I develop scalable web based applications using React and Typescript</h2>
                    <h2>With a passion for building responsive products.</h2>
                </div>

            </div>
            <div className="picture-container"></div>
            <Wave />
        </div>

    )
}

export default About
