"use client";

// import Image from "next/image";
// import logoImage from "../assets/images/personal-logo.svg";
import { FC, useEffect, MouseEvent } from "react";
import Button from "@/components/Button";
import { useInView } from "framer-motion";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation"; 

// const footerLinks = [
//     { href: "#", label: "Linkedin" },
//     { href: "#", label: "Instagram" },
//     { href: "#", label: "Github" },
// ];

// export default function Footer() {
//     return (
//         <section>
//             <div className="container">
//                 <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
//                     <div>
//                         <Image src={logoImage} alt="Layers logo" />
//                     </div>
//                     <nav className="flex gap-6">
//                         {footerLinks.map((link, index) => (
//                             <a key={index} className="text-white/50 text-sm">{link.label}</a>
//                         ))}
//                     </nav>
//                 </div>
//             </div>
//         </section>
//     );
// }

const navItems = [
    {
        href: "#home",
        label: "Home",
    },
    {
        href: "#introduction",
        label: "Introduction",
    },
    {
        href: "#approach",
        label: "Approach",
    },
    {
        href: "#tools",
        label: "Tools",
    },
    {
        href: "#faqs",
        label: "Faqs",
    },
];

const Footer: FC = () => {
    const { scope, entranceAnimation } = useTextRevealAnimation();
    const inView = useInView(scope);


    useEffect(() => {
        if (inView) {
            entranceAnimation();
        }
    }, [inView, entranceAnimation]
    );

    const handleClickNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        const url =  new URL(e.currentTarget.href);
        const hash = url.hash;

        const target = document.querySelector(hash);

        if (!target) return;
        target.scrollIntoView({
            behavior: "smooth",
        });
    }

    return (
        <footer className=" text-white mt-40">
            <div className="container">
                <div className="section">
                    <div className="flex items-center gap-3">
                    <div className="size-3 rounded-full bg-green-400 animate-pulse"></div>
                        {" "}
                        <span className="uppercase">
                            One spot available for the next month
                        </span>
                    </div>
                    <div className="grid md:grid-cols-3 md:items-center">
                        <div className="md:col-span-2">
                    <h2 className="text-4xl md:text-7xl lg:text-8xl mt-8 font-extralight" ref={scope}>
                        Enough talk. Let&apos;s make something great together.
                    </h2>
                    <a target="_blank" href="https://www.behance.net/devanshdixit4">

                            <Button
                                className="mt-8 group"
                                variant="secondary"
                                iconAfter={
                                    <div className="size-6 overflow-hidden">
                                        <div className="w-12 h-16 flex transition-transform duration-300 group-hover/button:-translate-x-1/2">
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
                                                className="feather feather-arrow-up-right"
                                                >
                                                <line
                                                    x1="7"
                                                    y1="17"
                                                    x2="17"
                                                    y2="7"
                                                    ></line>
                                                <polyline points="7 7 17 7 17 17"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                }
                                >
                                See my work
                            </Button>
                                </a>
                    </div>
                    <div>
                    <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                        {navItems.map(({ href, label }) => (
                            <a href={href} key={label} onClick={handleClickNavItem} className="relative font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">
                                {label}
                            </a>
                        ))}
                    </nav>
                    </div>
                    </div>
                </div>
                <p className="py-16 text-white/30 text-sm">
                    Copyright &copy; Devansh Dixit &bull; All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
