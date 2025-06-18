"use client";
import Tag from "@/components/Tag";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
    {
        question: "What kind of designer are you?",
        answer: "I’m a UI/UX & Product Designer who thrives at the intersection of clarity, creativity, and human behavior. I don't just make things look good — I make them feel right.",
    },
    {
        question: " What tools do you use?",
        answer: "Figma is home base. But I’m fluent in a bunch of others like Photoshop, Adobe XD, Illustrator, and a healthy dose of code when needed (hello HTML, CSS, JS, and React). Basically, whatever helps the idea come to life — I’m in.",
    },
    {
        question: "How do you approach a new project?",
        answer: "Research. Then empathy. Then chaos. Just kidding (sort of). I start by deeply understanding the user and business goals, then move into wireframes, testing, and high-fidelity magic. Every decision is intentional, and backed by either data or strong intuition (or both).",
    },
    {
        question: "Do you code too?",
        answer: "Yup! I have a solid background in front-end development — so I speak dev, collaborate better, and design with feasibility in mind. Pixel-perfect and developer-friendly? That’s the goal.",
    },
    {
        question: "Can we work together?",
        answer: "I’m always open to new projects, creative collaborations, or just vibing over design ideas. If you’ve got something in mind, feel free to reach out via email. Let’s make something awesome together: devanshdixit2743@gmail.com",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState(0); // Placeholder for selected index if needed
    return (
        <section id="faqs" className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>FAQs</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                    Questions? We&apos;ve got{" "}
                    <span className="text-yellow-400">answers</span>
                </h2>
                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <div
                            key={faq.question}
                            className="bg-neutral-900 rounded-2xl border border-white/10 p-6"
                        >
                            <div
                                className="flex justify-between items-center"
                                onClick={() => setSelectedIndex(faqIndex)}
                            >
                                <h3 className="font-medium">{faq.question}</h3>
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
                                    className={twMerge(
                                        "feather feather-plus text-yellow-400 flex flex-shrink-0 transition duration-300",
                                        selectedIndex === faqIndex &&
                                            "rotate-45"
                                    )}
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                            <AnimatePresence>
                                {selectedIndex === faqIndex && (
                                    <motion.div
                                        initial={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        animate={{
                                            height: "auto",
                                            marginTop: 24,
                                        }}
                                        exit={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        className={twMerge(
                                            "overflow-hidden",
                                            selectedIndex !== faqIndex &&
                                                "hidden"
                                        )}
                                    >
                                        <p className="text-white/50">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
