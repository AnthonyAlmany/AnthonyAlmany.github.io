import React from 'react'

import { frontStack, backStack, otherStack } from '../ListStacks'
import "../style/languages.css"


function Languages() {

    return (
        <div className="skills-component" id="languages">

            <div className="languages-component flex-center-column">

                <div className="languages-title flex-center">
                    <h1>- Tech Stack -</h1>
                </div>


                <div className="language-card flex-column">
                    <div className="stack">
                        {frontStack.map((stack, i) => {
                            return (
                                <div key={i} className="card-logo flex-center-column">
                                    <img src={stack.logo} alt={stack.name} width="62px" height="62px"></img>
                                    <h3>{stack.name}</h3>
                                </div>
                            )
                        })}
                    </div>
                    <div className="stack flex-center ">
                        {backStack.map((stack, i) => {
                            return (
                                <div key={i} className="card-logo flex-center-column back">
                                    <img src={stack.logo} alt={stack.name} width="62px" height="62px"></img>
                                    <h3>{stack.name}</h3>
                                </div>
                            )
                        })}
                    </div>
                    <div className="stack ">
                        {otherStack.map((stack, i) => {
                            return (
                                <div key={i} className="card-logo flex-center-column">
                                    <img src={stack.logo} alt={stack.name} width="62px" height="62px"></img>
                                    <h3>{stack.name}</h3>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Languages
