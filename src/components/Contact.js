import React from 'react'
import { Button } from 'react-bootstrap';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import "../style/contact.css"



function Contact() {



  const buttonStyle = {
    color: "white",
    backgroundColor: "#7510F7"
  };
  return (




    <div className="contact flex-center-column">
      <div className="contact-container flex-center">
        <h4>Interested to get in touch and make life more responsive?</h4>
        <motion.div whileHover={{ scale: 1.1 }}>
          <div className="contact-button">
            <Link to="/contact">
              <Button variant="light" style={buttonStyle}>Let's do it!</Button>
            </Link>
          </div>

        </motion.div>
      </div>

    </div>




  )
}

export default Contact
