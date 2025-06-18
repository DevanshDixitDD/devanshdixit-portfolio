import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
     title: "Devansh Dixit | UI/UX & Product Designer",
    description: "Devansh Dixit is a UI/UX, Product, and Visual Designer with expertise in creating intuitive, seamless user experiences.",
    icons: {
        icon: "/favicon.ico", // Ensure this path matches where the favicon is located
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
