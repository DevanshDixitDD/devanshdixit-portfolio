"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import logodesign1Image from "@/assets/images/logo-design01.png";
import logodesign2Image from "@/assets/images/logo-design02.png";
import logodesign3Image from "@/assets/images/logo-design03.png";
import webdesign1 from "@/assets/images/web-design01.png";
import webdesign2 from "@/assets/images/web-design02.png";
import webdesign3 from "@/assets/images/web-design03.png";
import appdesign1 from "@/assets/images/app-image-1.png";
import appdesign2 from "@/assets/images/app-image-2.png";
import appdesign3 from "@/assets/images/app-image-3.png";
import coverdesign1 from "@/assets/images/cover-design01.png";
import coverdesign2 from "@/assets/images/cover-design02.png";
import coverdesign3 from "@/assets/images/cover-design03.png";
import graphicdesign1 from "@/assets/images/graphic-design01.png";
import graphicdesign2 from "@/assets/images/graphic-design02.png";
import graphicdesign3 from "@/assets/images/graphic-design03.png";

export default function CallToAction() {
    const [isHovered, setIsHovered] = useState(false);
    const animation = useRef<AnimationPlaybackControls>();
    const [scope, animate] = useAnimate();

    const images = [ logodesign1Image, logodesign2Image, logodesign3Image, webdesign1, webdesign2, webdesign3,appdesign1, appdesign2, appdesign3, coverdesign1, coverdesign2, coverdesign3, graphicdesign1, graphicdesign2, graphicdesign3];

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
    }, [animate, scope]);

    useEffect(() => {
        if (animation.current) {
            animation.current.speed = isHovered ? 0.5 : 1;
        }
    }, [isHovered]);

    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    ref={scope}
                    className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {[...images, ...images].map((src, i) => (
                        <div key={i} className="flex items-center gap-8">
                            <Image
                                src={src}
                                alt={`design-${i}`}
                                width={400}
                                height={600}
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}