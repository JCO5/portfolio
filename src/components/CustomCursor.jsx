import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    console.log(mousePosition);

    
    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    const variants = {
        default: {
            x: mousePosition.x -16,
            y: mousePosition.y -16
        }


    }
    return (
        <motion.div 
        className='cursor'
        variants={variants}
        animate="default"
        >
        </motion.div>
    );
    }

export default CustomCursor;
