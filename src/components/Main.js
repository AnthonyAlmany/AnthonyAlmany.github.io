import React from 'react'
import { motion } from "framer-motion"

function Main() {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.75, ease: "easeOut", duration: 2 } },

    }


    return (
        <div>
            <main className="main-section" id="home">
                <motion.span  variants={variants} initial="hidden" animate="visible">
                    Anthony Almany
                </motion.span>
                <motion.span variants={variants} initial="hidden" animate="visible">
                    Front End Developer
                </motion.span>
            </main>
        </div>
    )
}

export default Main
