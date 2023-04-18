import React from 'react'
import { motion } from "framer-motion"
import "../style/main.css"

function Main() {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.75, ease: "easeOut", duration: 2 } },

    }


    return (
        <main className="main-section flex-center-column" id="home">
            <div className="main-text"></div>
            <motion.span variants={variants} initial="hidden" animate="visible">
                Anthony Almany
            </motion.span>
            <motion.span variants={variants} initial="hidden" animate="visible" id="small-description">
                - Front End Developer -
            </motion.span>
        </main>
    )
}

export default Main
