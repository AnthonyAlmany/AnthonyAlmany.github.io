import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


import listProjects from '../ListProjects';
import CardProject from './CardProject';
import "../style/projects.css"

function Projects() {

    return (
        <div className="projects-container" id="projects">
            <div className="projects-title flex-center">
                <h1>- Projects -</h1>
            </div>
            <div className="projects">

                {listProjects.map((item, index) => {

                    return (

                        <CardProject
                            key={item.description}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            git={item.git}
                            view={item.view}
                            index={index}
                        />


                    )
                })}


            </div>
        </div>
    )
}

export default Projects
