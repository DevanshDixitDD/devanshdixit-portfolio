import CallToAction from "@/sections/CallToAction";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import ImageSlider from "@/sections/ImageSlider";
import Integrations from "@/sections/Integrations";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";
import { ProjectsSection } from "@/sections/Project";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero/>
            <LogoTicker/>
            <Introduction/>
            <ProjectsSection/>
            <Features/>
            <ImageSlider/>
            <Integrations/>
            <Faqs/>
            <CallToAction />
            <Footer/>
        </>
    );
}
