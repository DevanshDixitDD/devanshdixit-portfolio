"use client";
import smartenLogo from "@/assets/images/smarten-logo.svg";
import caaryaLogo from "@/assets/images/caarya.svg";
import IELTSProficiencyLogo from "@/assets/images/ielts-proficiency.svg";
import SkillsCapitalLogo from "@/assets/images/skills-capital.svg";
import digitalHeroesLogo from "@/assets/images/digital-heroes.svg";
import TechiesLogo from "@/assets/images/Techies.svg";
import Pet5Logo from "@/assets/images/pet5.svg";
import SheenaLogo from "@/assets/images/sheena-seeds.svg";
import Image from "next/image";
import React, { Fragment } from "react";
import { motion } from "framer-motion";

const logos = [
    { name: "Smarten Spaces", image: smartenLogo },
    { name: "Caarya", image: caaryaLogo },
    { name: "IELTS Proficiency", image: IELTSProficiencyLogo },
    { name: "Skills Capital", image: SkillsCapitalLogo },
    { name: "Digital Heroes", image: digitalHeroesLogo },
    { name: "Techies", image: TechiesLogo },
    { name: "Pet5", image: Pet5Logo },
    { name: "Sheena Seeds", image: SheenaLogo },
];

export default function LogoTicker() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container">
                <h3 className="text-center text-white/50 text-xl">
                    Companies Who Trusted Me with Their Design
                </h3>
                <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%, transparent)]">
                    <motion.div
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex flex-none gap-24 pr-24"
                    >
                        {Array.from({ length: 2 }).map((_, index) => (
                            <Fragment key={index}>
                                {logos.map((logo) => (
                                    <Image
                                        src={logo.image}
                                        alt={logo.name}
                                        key={logo.name}
                                    />
                                ))}
                            </Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    ); 
}
