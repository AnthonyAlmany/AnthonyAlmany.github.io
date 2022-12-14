import React from 'react'

import Wave from "./Wave"


function About() {
    return (
            <div className="about" id="about">
                <div className="description-container">
                    <div className="description-title">
                    <h2> &#8220; Hi, I'm Anthony! A front-end developer in Sydney.</h2>
                    </div>
                    <div className="description">
                    <h2>I specialize in React, Typescript, and Visual Development</h2>
                    <h2>With a passion for building responsive products. &#8221;</h2>
                    </div>
           
                </div>
                <div className="picture-container"></div>
                <Wave />
            </div>

    )
}

export default About
