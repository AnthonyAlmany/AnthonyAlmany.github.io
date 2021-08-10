import React from 'react'

import Wave from "./Wave"


function About() {
    return (
        <div>
            <div className="about" id="about">
                <div className="description-container">
                    <div className="description-title">
                    <h4> &#8220; Hi, I'm Anthony! A front end developer.</h4>
                    </div>
                    <div className="description">
                    <h4>A simple curiosity which became a passion  to build projects from scratch.</h4>
                    <h4>From a simple landing page to more complex Web Apps. &#8221;</h4>
                    </div>
           
                </div>
                <div className="picture-container"></div>
                <Wave />
            </div>
        </div>

    )
}

export default About
