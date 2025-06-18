import Tag from "@/components/Tag";
import figmaIcon from "@/assets/images/figma-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import adobeIcon from "@/assets/images/adobe-logo.svg";
import miroIcon from "@/assets/images/miro-logo.svg";
import framerIcon from "@/assets/images/framer-logo.svg";
import webflowIcon from "@/assets/images/webflow-logo.svg";
import IntegrationsColumn from "@/components/IntegrationsColumn";

const integrations = [
    {
        name: "Figma",
        icon: figmaIcon,
        description: "My go-to tool for UI design, prototyping, and teamwork.",
    },
    {
        name: "Notion",
        icon: notionIcon,
        description: "I use Notion to organize design docs, ideas, and tasks.",
    },
    {
        name: "Adobe",
        icon: adobeIcon,
        description: "Essential for visual design, editing, and brand assets.",
    },
    {
        name: "Miro",
        icon: miroIcon,
        description: "Great for mapping user flows and collaborative planning.",
    },
    {
        name: "Framer",
        icon: framerIcon,
        description: "I prototype responsive, interactive layouts with Framer.",
    },
    {
        name: "Webflow",
        icon: webflowIcon,
        description: "Ideal for bringing high-fidelity designs to live sites.",
    },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section id="tools" className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <Tag>Tools</Tag>
                        <h2 className="text-6xl font-medium mt-6">
                            My design{" "}
                            <span className="text-yellow-400">stack</span>
                        </h2>
                        <p className="text-white/50 mt-4 text-lg">
                             I design with tools like Figma, Adobe Creative Suite, and Notion — making my workflow smooth, collaborative, and efficient.
                        </p>
                    </div>
                    <div>
                        <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black,_10%,black_90%,transparent)]">
                            <IntegrationsColumn integrations={integrations} />
                            <IntegrationsColumn
                                integrations={integrations.slice().reverse()}
                                reverse
                                className="hidden md:flex"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
