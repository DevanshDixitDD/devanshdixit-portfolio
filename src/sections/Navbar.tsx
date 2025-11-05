"use client";

import Image from "next/image";
import LogoImage from "@/assets/images/personal-logo.svg";
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Approach", href: "#approach" },
    { label: "Projects", href: "#projects" },
    { label: "Tools", href: "#tools" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
                <div className="container max-w-5xl">
                    <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
                        <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 md:pr-2 items-center">
                            <div>
                                <Image
                                    src={LogoImage}
                                    alt="Layers logo"
                                    className="h-9 md:h-auto w-auto"
                                />
                            </div>
                            <div className="lg:flex justify-center items-center hidden">
                                <nav className="flex gap-6 font-medium">
                                    {navLinks.map((link) => (
                                        <a key={link.label} href={link.href}>
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex justify-end gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu md:hidden"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <line
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen && "rotate-45 -translate-y-1"
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="12"
                                        x2="21"
                                        y2="12"
                                        className={twMerge(
                                            isOpen && "opacity-0"
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="18"
                                        x2="21"
                                        y2="18"
                                        className={twMerge(
                                            "origin-left",
                                            isOpen && "-rotate-45 translate-y-1"
                                        )}
                                    ></line>
                                </svg>
                                <a target="_blank" href="https://drive.google.com/file/d/14OOjx0X8j1M6p1gAtqbqqC9smJmNW2G2/view">
                                    <Button
                                        variant="secondary"
                                        className="hidden md:inline-flex items-center"
                                    >
                                        Resume
                                    </Button>
                                </a>
                                <a target="_blank" href="https://www.behance.net/devanshdixit4">
                                    <Button
                                        variant="primary"
                                        className="hidden md:inline-flex items-center"
                                    >
                                        Behance
                                    </Button>
                                </a>
                                {/* <button className="border border-white h-12 rounded-full px-6 font-medium">Log In</button>
                        <button>Sign Up</button> */}
                            </div>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        {navLinks.map((link) => (
                                            <a
                                                href={link.href}
                                                key={link.label}
                                                className=""
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                        <a href="https://drive.google.com/file/d/14OOjx0X8j1M6p1gAtqbqqC9smJmNW2G2/view">
                                            <Button variant="secondary">
                                                Resume
                                            </Button>
                                        </a>
                                        <a href="https://www.behance.net/devanshdixit4">
                                            <Button variant="primary">
                                                Behance
                                            </Button>
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[86px md:pb-[98px] lg:px-[130px]"></div>
        </>
    );
}
