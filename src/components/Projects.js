import React  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


import listProjects from '../ListProjects';
import CardProject from './CardProject';

function Projects() {

    return (
        <div className="projects-container" id="projects">
            <div className="projects-title flex-center">
                <h1>My projects</h1>
            </div>
            <div className="projects flex-center">
                
                {listProjects.map(item => {
                  
                    return(
                           
                    <CardProject
                    key = {item.description}
                    title = {item.title}
                    description = {item.description}
                    image = {item.image} 
                    />
           

                    )
                })}
          
    
            </div>
        </div>
    )
}

export default Projects
