import React from 'react'
import { motion } from "framer-motion"

function Main() {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.75, ease: "easeOut", duration: 2 } },

    }


    return (
        <div>
            <main className="main-section">
                <motion.h1 style={{ fontSize: "4rem" }} variants={variants} initial="hidden" animate="visible">
                    Anthony Almany
                </motion.h1>
                <motion.h2 variants={variants} initial="hidden" animate="visible">
                    Front End Developer
                </motion.h2>
            </main>
        </div>
    )
}

export default Main
