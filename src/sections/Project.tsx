import darkSaasLandingPage from "@/assets/images/mockup-1.png";
import lightSaasLandingPage from "@/assets/images/mockup-2.png";
import aiStartupLandingPage from "@/assets/images/mockup-3.png";
import Image from "next/image";
// import CheckCircleIcon from "@/assets/images/check-circle.svg";
// import ArrowUpRightIcon from "@/assets/images/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Cards";

const portfolioProjects = [
   {
        company: "Aevro Tea",
        year: "2022",
        title: "Modern Website Design",
        results: [
            { title: "Enhanced user experience by 40%" },
            { title: "Improved site speed by 50%" },
            { title: "Increased mobile traffic by 35%" },
        ],
        link: "https://www.behance.net/gallery/188807599/Aevro-Tea-Website-UIUX-Design",
        image: darkSaasLandingPage,
    },
    {
        company: "Gourmet Co",
        year: "2021",
        title: "Restaurent Website Design",
        results: [
            { title: "Boosted sales by 20%" },
            { title: "Expanded customer reach by 35%" },
            { title: "Increased brand awareness by 15%" },
        ],
        link: "https://www.behance.net/gallery/201779097/Restaurant-Website-Landing-Page",
        image: lightSaasLandingPage,
    },
    {
        company: "VerseVoyage",
        year: "2023",
        title: "Book Ecommerce Website",
        results: [
            { title: "Enhanced user experience by 40%" },
            { title: "Improved site speed by 50%" },
            { title: "Increased mobile traffic by 35%" },
        ],
        link: "https://www.behance.net/gallery/191629503/VerseVoyage-Book-E-commerce-Website-Dark-UIUX-Design",
        image: aiStartupLandingPage,
    },
];

export const ProjectsSection = () => {
    return (
        <section className="pb-16 lg:py-24">
            <div className="container">
                <div className="flex justify-center">
                    <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-yellow-300 to-pink-400 text-transparent bg-clip-text text-center">
                        Real-world Results
                    </p>
                </div>
                <h2 className="font-serif text-3xl text-center mt-6">
                    Featured Projects
                </h2>
                <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
                    See how I transformed concepts into engaging digital
                    experiences.
                </p>
                <div className="flex flex-col mt-10 md:mt-20 gap-20">
                    {portfolioProjects.map((project) => (
                        <Card
                            key={project.title}
                            className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-32"
                        >
                            <div
                                className="absolute inset-0 -z-10 opacity-5"
                                style={{
                                    backgroundImage: `url(${grainImage.src})`,
                                }}
                            ></div>
                            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                <div className="lg:pb-16">
                            <div className="bg-gradient-to-r from-yellow-300 to-pink-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                                <span>{project.company}</span>
                                <span>&bull;</span>
                                <span>{project.year}</span>
                            </div>
                            <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                                {project.title}
                            </h3>
                            <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                            <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                                {project.results.map((result, index) => (
                                    <li key = {index} className="flex gap-2 text-sm md:text-base text-white/50">
                                        {/* <CheckCircleIcon className="size-5 md:size-6" /> */}
                                        <span>{result.title}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href={project.link}>
                                <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                                    <span>View design</span>
                                    {/* <ArrowUpRightIcon className="size-4" /> */}
                                </button>
                            </a>
                            </div>
                            <div className="relative">
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                            />
                            </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
