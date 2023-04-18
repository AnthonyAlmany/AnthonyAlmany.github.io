

import React from 'react'
import gitLogo from "../style/Logos/git.svg"




function CardProject({ title, description, image, git, view, index }) {
    return (
        <div className={index % 2 === 1 ? "card-project flex-reverse" : "card-project"}>
            <div className="image-project">
                <img src={image} alt={title}></img>
            </div>

            <div className='card-description'>
                <h2>{description}</h2>

                <div className="link-buttons flex-center">
                    <div className="button-project flex-center"><a href={view} > Project </a></div>
                    <div> <a href={git} > <img src={gitLogo} alt="git" id="git-logo-link"></img> </a></div>
                </div>
            </div>




        </div>
    )
}

export default CardProject


