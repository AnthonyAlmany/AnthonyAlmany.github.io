import React from 'react'

import htmlLogo from "../style/Logos/HTML.svg"
import cssLogo from "../style/Logos/CSS.svg"
import jsLogo from "../style/Logos/JS.svg"
import reactLogo from "../style/Logos/REACT.svg"


function Languages() {
    return (
        <div className="skills-component" id="languages">

            <div className="languages-component flex-center-column">

                <div className="languages-title">
                    <h1>What do I speak?</h1>
                </div>
                <div className="language-description">
                    <h4>I have started my journey as developer by learning the trio Html / Css / Js </h4>
                    <h4>then choosed to work on React as front end library.</h4>
                </div>

                <div className="language-card">
                    <div className="card-logo">
                        <img src={htmlLogo} alt="html" width="72px" height="72px"></img>
                        <h4>HTML</h4>
                    </div>
                    <div className="card-logo">
                        <img src={cssLogo} alt="css" width="72x" height="72px"></img>
                        <h4>CSS</h4>
                    </div>

                    <div className="card-logo">
                        <img src={jsLogo} alt="html" width="72px" height="72px"></img>
                        <h4>JS</h4>
                    </div>
                    <div className="card-logo">
                        <img src={reactLogo} alt="css" width="72x" height="72px"></img>
                        <h4>React</h4>
                    </div>

                </div>
            </div>
            <div className="tools-component flex-center-column">
                <h4>- Dev Tools -</h4>
                <h4 className="dev-list">Bootstrap / Material UI / Sass / React Router / Axios / Github</h4>
            </div>

        </div>
    )
}

export default Languages
