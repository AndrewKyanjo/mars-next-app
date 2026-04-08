import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono, Inter } from "next/font/google";
import "./globals.css";
import LiquidEther from "../components/LiquidEther.jsx";
import { cn } from "@/lib/utils";
import { PostHogProvider } from "./PostHogProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const schibstedGrotesk = Schibsted_Grotesk({
    variable: "--font-schibsted-grotesk",
    subsets: ["latin"],
});

const martianMono = Martian_Mono({
    variable: "--font-martian-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Dev Events Centre",
    description: "The Centre for Developer Events in Africa",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={cn(
                "min-h-screen",
                "antialiased",
                schibstedGrotesk.variable,
                martianMono.variable,
                "font-sans",
                inter.variable,
            )}
        >
            <body className="min-h-full flex flex-col bg-black">
                <div
                    style={{
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        position: "fixed",
                        zIndex: -1,
                        overflow: "hidden",
                    }}
                >
                    <LiquidEther
                        colors={["#011627", "#0B3954", "#087E8B", "#BFD7EA"]}
                        mouseForce={12}
                        cursorSize={70}
                        isViscous
                        viscous={30}
                        iterationsViscous={32}
                        iterationsPoisson={32}
                        resolution={0.5}
                        isBounce={false}
                        autoDemo
                        autoSpeed={0.5}
                        autoIntensity={1.6}
                        takeoverDuration={0.25}
                        autoResumeDelay={3000}
                        autoRampDuration={0.6}
                        color0="#5227FF"
                        color1="#FF9FFC"
                        color2="#B19EEF"
                    />
                </div>
                <PostHogProvider>
                    <main className="relative z-10 text-white ">{children}</main>
                </PostHogProvider>
            </body>
        </html>
    );
}
