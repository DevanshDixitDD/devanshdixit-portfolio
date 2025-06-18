import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/chat-gpt.png";
import avatar2 from "@/assets/images/micorsoft-designer.png";
import avatar3 from "@/assets/images/midjourney.png";
import avatar4 from "@/assets/images/firefly-logo.png";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

const features = [
    "Empathy-Led",
    "Detail-Oriented",
    "Figma Flow",
    "Clarity First",
    "Developer Friendly",
    "Storytelling UX",
    "Fast Iteration",
];

export default function Features() {
    return (
        <section id="approach" className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Approach</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6">
                    Making complexity feel{" "}
                    <span className="text-yellow-400">calm</span>
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        title="AI-Enhanced Collaboration"
                        description="I Build Smarter with AI, creating seamless workflows"
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image
                                    src={avatar1}
                                    alt="Avatar 1"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-500 z-30">
                                <Image
                                    src={avatar2}
                                    alt="Avatar 2"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-500 z-20">
                                <Image
                                    src={avatar3}
                                    alt="Avatar 3"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                                    <Image
                                        src={avatar4}
                                        alt="Avatar 4"
                                        className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"
                                    />
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span
                                            className="size-1.5 rounded-full bg-white inline-flex"
                                            key={i}
                                        ></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Interactive Prototyping"
                        description="I craft prototypes that don't just click, they feel intuitive with every tap"
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center">
                                Empathy drives{" "}
                                <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent relative">
                                    <span>creative design</span>
                                    <video
                                        src="/assets/design.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                                    ></video>
                                </span>{" "}
                                that connects
                            </p>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Bringing Brands Alive Seamlessly"
                        description="Bringing brands to life across web and apps with clarity, care, and speed"
                        className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto group"
                    >
                        <div className="aspect-video flex items-center justify-center gap-4">
                            <Key className="w-28 outline outline-2 outline-offset-4 outline-transparent group-hover:outline-yellow-400 transition-all duration-500 group-hover:translate-y-1 ">
                                Brand
                            </Key>
                            <Key className="outline outline-2 outline-offset-4 outline-transparent group-hover:outline-yellow-400 transition-all duration-500 group-hover:translate-y-1 delay-150">
                                Web
                            </Key>
                            <Key className="outline outline-2 outline-offset-4 outline-transparent group-hover:outline-yellow-400 transition-all duration-500 group-hover:translate-y-1 delay-300">
                                App
                            </Key>
                        </div>
                    </FeatureCard>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((features) => (
                        <div
                            key={features}
                            className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
                        >
                            <span className="bg-yellow-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                                &#10038;
                            </span>
                            <span className="font-medium md:text-lg">
                                {features}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
