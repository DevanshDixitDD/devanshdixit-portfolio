import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const viewport: Viewport = {
    themeColor: "#ffffff",
};

export const metadata: Metadata = {
    title: "Devansh Dixit | UI/UX Designer & Product Strategist",
    description:
        "Devansh Dixit is a UI/UX Designer, Product Strategist, and Visual Storyteller crafting seamless web and mobile experiences. Specializing in user-centered design, design systems, and brand-led digital solutions.",
    icons: {
        icon: "/favicon.ico",
    },
    authors: [{ name: "Devansh Dixit", url: "https://devanshdixit.live" }],
    keywords: [
        "Devansh Dixit",
        "UI/UX Designer India",
        "Product Designer",
        "UX Portfolio",
        "Visual Design",
        "User Interface Designer",
        "Figma Designer",
        "Frontend Designer",
        "Creative Product Designer",
        "Responsive Web Design",
        "Mobile App UI",
        "Web App UX",
        "Design Systems",
        "Brand Design",
        "Freelance Designer India",
        "Remote UI Designer",
        "User Research",
        "Wireframes & Prototypes",
        "Interaction Design",
        "Human-Centered Design",
    ],
    // themeColor: "#ffffff",
    openGraph: {
        title: "Devansh Dixit | UI/UX Designer & Product Strategist",
        description:
            "Explore Devansh Dixit's portfolio – UI/UX design, digital products, and brand experiences that balance functionality with storytelling.",
        url: "https://devanshdixit.live",
        siteName: "Devansh Dixit Portfolio",
        images: [
            {
                url: "https://devanshdixit.live/og-image.png", // replace with your OG image
                width: 1200,
                height: 630,
                alt: "Devansh Dixit – UI/UX & Product Designer",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Devansh Dixit | UI/UX Designer & Product Strategist",
        description:
            "Check out Devansh Dixit's UI/UX and product design portfolio — creative, intuitive, and user-first.",
        creator: "@DevanshDix90156", // optional
        images: ["https://devanshdixit.live/og-image.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white pb-[100px]`}
            >
                {children}
            </body>
        </html>
    );
}
