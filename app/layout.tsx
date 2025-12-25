import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProviderWrapper } from "@/components/providers/LanguageProviderWrapper";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Rizal's Portfolio",
    description: "Web Developer & IT Specialist Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
            >
                <LanguageProviderWrapper>{children}</LanguageProviderWrapper>
            </body>
        </html>
    );
}
