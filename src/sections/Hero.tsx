"use client";

import Button from "@/components/Button";
import designExample1Image from "@/assets/images/interface-design.png";
import designExample2Image from "@/assets/images/image-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, stagger, useAnimate } from "framer-motion";
import { useState, useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import SplitType from "split-type";

export default function Hero() {
    const [titleScope, titleAnimate] = useAnimate();
    const [copied, setCopied] = useState(false); // ✅ move it here
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        new SplitType(titleScope.current, {
            types: "lines,words",
            tagName: "span",
        });

        titleAnimate(
            titleScope.current.querySelectorAll(".word"),
            {
                transform: "translateY(0)",
            },
            {
                duration: 0.5,
                delay: stagger(0.2),
            }
        );
    });

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
        rightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
        ]);
        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightPointerScope.current, { x: 200, y: 0 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { x: 0, y: [0, 20, 0] },
                { duration: 0.5 },
            ],
        ]);
    }, []);

    const handleCopyEmail = async (e: React.MouseEvent) => {
        e.preventDefault(); // prevent form submission
        const email = "devanshdixit2743@gmail.com"; // replace with your actual email
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy email: ", err);
        }
    };

    return (
        <section
            id="home"
            className="py-24 overflow-x-clip"
            style={{ cursor: `url(${cursorYouImage.src}), auto` }}
        >
            <div className="container relative">
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    drag
                    className="absolute -left-40 top-16 hidden lg:block"
                >
                    <Image
                        src={designExample1Image}
                        draggable="false"
                        alt="Design example 1 image"
                    />
                </motion.div>
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute left-56 top-96 hidden lg:block"
                >
                    <Pointer name="Interface" />
                </motion.div>
                <motion.div
                    ref={rightDesignScope}
                    initial={{ opacity: 0, x: 100, y: 100 }}
                    drag
                    className="absolute -right-72 -top-16 hidden lg:block"
                >
                    <Image
                        src={designExample2Image}
                        draggable="false"
                        alt="Design example 2 image"
                    />
                </motion.div>
                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, x: 300, y: 100 }}
                    className="absolute right-80 -top-4 hidden lg:block"
                >
                    <Pointer name="Graphics" color="red" />
                </motion.div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full text-neutral-950 font-semibold text-center">
                        ✨ UI/UX & Visual Product Designer
                    </div>
                </div>
                <motion.h1
                    ref={titleScope} // Attach the ref to the h1 element
                    initial={{ opacity: 0 }} // Start hidden
                    animate={{ opacity: 1 }} // Fade in to full opacity
                    className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6"
                >
                    Hello, I am <br /> Devansh Dixit
                </motion.h1>
                <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.5, delay: 1.0 }}
                >
                    <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                        I design intuitive, seamless user experiences that
                        thoughtfully balance functionality, smooth flow, and
                        just the right amount of refined finesse
                    </p>
                </motion.div>
            </div>
            <motion.div
            initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="flex justify-center rounded-full p-2 mt-8 max-w-lg mx-auto"
            >
                {/* <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent px-4 md:flex-1 w-full"
                /> */}
                {/* <Button
                    type="submit"
                    variant="primary"
                    onClick={handleCopyEmail}
                    className="flex items-center justify-center gap-2 whitespace-nowrap px-4 py-2"
                    size="sm"
                >
                    <HiOutlineClipboardCopy className="text-lg" />
                    {copied ? "Email Copied!" : "Copy Email"}
                </Button> */}
                <div className="flex justify-center gap-4 mt-8">
                    {/* First Button – Copy Email */}
                    <Button
                        type="button"
                        onClick={handleCopyEmail}
                        variant="primary"
                        className="flex items-center gap-2 px-4 py-2"
                        size="sm"
                    >
                        <HiOutlineClipboardCopy className="text-lg" />
                        <span>{copied ? "Email Copied!" : "Copy Email"}</span>
                    </Button>

                    {/* Second Button – View Resume */}
                    <a
                        href="https://www.linkedin.com/in/devanshdixit27/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <Button
                            type="button"
                            variant="secondary"
                            className="flex items-center gap-2 px-4 py-2"
                            size="sm"
                        >
                            <FaLinkedin className="text-lg" />
                            <span>LinkedIn</span>
                        </Button>
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
