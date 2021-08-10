import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import webProject from "../style/main-background.jpg"
import { Card, Button } from 'react-bootstrap';
import { motion } from "framer-motion"


function Projects() {
    return (
        <div className="projects-container" id="projects">
            <div className="projects-title flex-center">
                <h1>My projects</h1>
            </div>
            <div className="projects flex-center">
                
                    <div className="card">
                    <motion.div className="card-project" whileHover={{ scale: 1.1 }}>
                    <Card >
                        <Card.Img variant="top" src={webProject} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </motion.div>
                    </div>
                    <div className="card">
                    <motion.div className="card-project" whileHover={{ scale: 1.1 }}>
                    <Card>
                        <Card.Img variant="top" src={webProject} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </motion.div>
                    </div>
                    <div className="card">
                    <motion.div className="card-project" whileHover={{ scale: 1.1 }}>
                    <Card>
                        <Card.Img variant="top" src={webProject} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </motion.div>
                    </div>

            </div>
        </div>
    )
}

export default Projects
