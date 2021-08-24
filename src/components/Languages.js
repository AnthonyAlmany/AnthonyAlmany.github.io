import React from 'react'

import htmlLogo from "../style/Logos/HTML.svg"
import cssLogo from "../style/Logos/CSS.svg"
import jsLogo from "../style/Logos/JS.svg"
import reactLogo from "../style/Logos/REACT.svg"


function Languages() {
    return (
        <div className="skills-component" id="languages">

            <div className="languages-component flex-center-column">

                <div className="languages-title flex-center">
                    <h1>What do I speak?</h1>
                </div>
                <div className="language-description flex-center-column">
                    <h2>I have started my journey as developer by learning Html / Css / Js </h2>
                    <h2>then choosed to work on React as front end library.</h2>
                </div>

                <div className="language-card flex-even">
                    <div className="card-logo flex-center-column">
                        <img src={htmlLogo} alt="html" width="72px" height="72px"></img>
                        <h3>HTML</h3>
                    </div>
                    <div className="card-logo flex-center-column">
                        <img src={cssLogo} alt="css" width="72x" height="72px"></img>
                        <h3>CSS</h3>
                    </div>

                    <div className="card-logo flex-center-column">
                        <img src={jsLogo} alt="html" width="72px" height="72px"></img>
                        <h3>JS</h3>
                    </div>
                    <div className="card-logo flex-center-column">
                        <img src={reactLogo} alt="css" width="72x" height="72px"></img>
                        <h3>React</h3>
                    </div>

                </div>
            </div>
            <div className="tools-component flex-center-column">
                <h2>- Dev Tools -</h2>
                <h2 className="dev-list">Bootstrap / Material UI / Sass / React Router / Axios / Github</h2>
            </div>

        </div>
    )
}

export default Languages
