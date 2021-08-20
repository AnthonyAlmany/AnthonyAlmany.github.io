import React from 'react'

import Wave from "./Wave"


function About() {
    return (
            <div className="about" id="about">
                <div className="description-container">
                    <div className="description-title">
                    <h2> &#8220; Hi, I'm Anthony! A front end developer.</h2>
                    </div>
                    <div className="description">
                    <h2>A simple curiosity which became a passion  to build projects from scratch.</h2>
                    <h2>From a simple landing page to more complex Web Apps. &#8221;</h2>
                    </div>
           
                </div>
                <div className="picture-container"></div>
                <Wave />
            </div>

    )
}

export default About
