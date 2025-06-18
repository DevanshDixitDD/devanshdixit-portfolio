"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
    const [isHovered, setIsHovered] = useState(false);
    const animation = useRef<AnimationPlaybackControls>();
    const [scope, animate] = useAnimate();

    // useEffect(() => {
    //     animate(
    //         "span",
    //         {
    //             opacity: [0, 1, 1, 1, 0],
    //         },
    //         {
    //             duration: 2,
    //             ease: "easeInOut",
    //             repeat: Infinity,
    //             delay: 1,
    //             repeatDelay: 1,
    //         }
    //     );
    // }, [animate]);
    useEffect(() => {
        animation.current = animate(
            scope.current,
            { x: "-50%" },
            {
                duration: 30,
                ease: "linear",
                repeat: Infinity,
            }
        );
    }, []);

    useEffect(() => {
        if (animation.current) {
            if (isHovered) {
                animation.current.speed = 0.5;
            } else {
                animation.current.speed = 1;
            }
        }
    }, [isHovered]);
    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    ref={scope}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-16">
                            <span className="text-yellow-400 text-7xl">
                                &#10038;
                            </span>
                            <span className="group-hover:text-yellow-400"> 
                                <a href="https://www.behance.net/devanshdixit4">Explore My Work </a>
                                </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
