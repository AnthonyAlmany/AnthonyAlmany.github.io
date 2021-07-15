import React from 'react'
import { Button } from 'react-bootstrap';
import { motion } from "framer-motion"

function Contact() {



    const buttonStyle = {
        color: "white",
        backgroundColor: "#7510F7"
    };
    return (
        <div className="contact flex-center-column">
            <div className="contact-container flex-center">
                <h4>Interested to get in touch and make life more responsive?</h4>
                <motion.div className="contact-button" whileHover={{ scale: 1.1 }}>
                    <Button variant="light" style={buttonStyle}>Let's do it!</Button>
                </motion.div>
            </div>

        </div>
    )
}

export default Contact
