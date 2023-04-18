import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"



function Wave() {

    const [element, view] = useInView({ threshold: 0.5, delay: 300 });

    return (
        <div ref={element} className="wave">
            <svg viewBox="10 10 600 248" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <motion.path
                    initial={{ pathLength: 0, }}
                    animate={view && { pathLength: 1 }}
                    transition={{ duration: 1.5 }}
                    d="M4 156.877C12 129.482 35.6 72.9439 66 65.9495C104 57.2065 225 303.759 320 230.318C415 156.877 421 155.128 462 176.111C494.8 192.898 607 67.6981 659 3" stroke="#7510F7" stroke-linejoin="round" />
            </svg>
        </div>
    )
}


export default Wave

// Change direction of animation
// initial={{pathOffest: 1}}
// animate={{pathOffset: 0}}