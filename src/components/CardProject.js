

import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { motion } from "framer-motion"


function CardProject({title, description, image, git, view}) {
    return (
        <div className="card">
        <motion.div  className="card-project" whileHover={{ scale: 1.1,zIndex: 2 }}>
        <Card>
            <Card.Img variant="top" src={image}  />
            <Card.Body id="card-body">
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {description}
                </Card.Text>
                <div id="flex-buttons">
                <Button variant="primary" id="button-project"><a href={view} target="_blank" rel="noopener noreferrer"> View Project </a></Button>
                <Button variant="primary" id="button-project"> <a href={git} target="_blank" rel="noopener noreferrer"> View Git </a></Button>
                </div>
       
            </Card.Body>
        </Card>
        </motion.div>
                   </div>
    )
}

export default CardProject


