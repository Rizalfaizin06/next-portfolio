"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { SpotlightContent } from "@/components/sections/spotlight";
import { MainContent } from "./main-content";
import { useLanguage } from "@/contexts/LanguageContext";

export function NavbarDemo() {
    const { language, setLanguage } = useLanguage();
    const navItems = [
        {
            name: "Home",
            link: "#home",
        },
        {
            name: "About",
            link: "#about",
        },
        // {
        //     name: "Skills",
        //     link: "#skills",
        // },
        {
            name: "Projects",
            link: "#projects",
        },
        {
            name: "Awards",
            link: "#awards",
        },
        {
            name: "Experience",
            link: "#experience",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-4 relative z-[70]">
                        {/* Language Toggle */}
                        <button
                            onClick={() =>
                                setLanguage(language === "id" ? "en" : "id")
                            }
                            className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all text-sm font-medium text-neutral-300 hover:text-blue-400 cursor-pointer"
                        >
                            {language === "id" ? "EN" : "ID"}
                        </button>
                        {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
                        <NavbarButton variant="primary">
                            Contact Me
                        </NavbarButton>
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                        <div className="flex w-full flex-col gap-4">
                            {/* Language Toggle */}
                            <button
                                onClick={() => {
                                    setLanguage(
                                        language === "id" ? "en" : "id"
                                    );
                                    setIsMobileMenuOpen(false);
                                }}
                                className="w-full px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all text-sm font-medium text-neutral-300 hover:text-blue-400"
                            >
                                {language === "id"
                                    ? "Switch to English"
                                    : "Ganti ke Bahasa Indonesia"}
                            </button>
                            {/* <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                Login
                            </NavbarButton> */}
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                Contact Me
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
            <MainContent />

            {/* Navbar */}
        </div>
    );
}

// const DummyContent = () => {
//     return (
//         <div>
//             <SpotlightContent />
//             <div className="container mx-auto p-8 pt-5">
//                 <h1 className="mb-4 text-center text-3xl font-bold">
//                     Check the navbar at the top of the container
//                 </h1>
//                 <p className="mb-10 text-center text-sm text-zinc-500">
//                     For demo purpose we have kept the position as{" "}
//                     <span className="font-medium">Sticky</span>. Keep in mind
//                     that this component is{" "}
//                     <span className="font-medium">fixed</span> and will not move
//                     when scrolling.
//                 </p>
//                 <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
//                     {[
//                         {
//                             id: 1,
//                             title: "The",
//                             width: "md:col-span-1",
//                             height: "h-60",
//                             bg: "bg-neutral-100 dark:bg-neutral-800",
//                         },
//                         {
//                             id: 2,
//                             title: "First",
//                             width: "md:col-span-2",
//                             height: "h-60",
//                             bg: "bg-neutral-100 dark:bg-neutral-800",
//                         },
//                         {
//                             id: 3,
//                             title: "Rule",
//                             width: "md:col-span-1",
//                             height: "h-60",
//                             bg: "bg-neutral-100 dark:bg-neutral-800",
//                         },
//                         {
//                             id: 4,
//                             title: "Of",
//                             width: "md:col-span-3",
//                             height: "h-60",
//                             bg: "bg-neutral-100 dark:bg-neutral-800",
//                         },
//                         {
//                             id: 5,
//                             title: "F",
//                             width: "md:col-span-1",
//                             height: "h-60",
//                             bg: "bg-neutral-100 dark:bg-neutral-800",
//                         },
//                         {
//                             id: 6,
//                             title: "Club",
//                             width: "md:col-span-2",
//                             height: "h-60",
//                             bg: "bg-neutral-100 dark:bg-neutral-800",
//                         },
//                         {
//                             id: 7,
//                             title: "Is",
//                             width: "md:col-span-2",
//                             height: "h-60",
//                             bg: "bg-neutral-100 dark:bg-neutral-800",
//                         },
//                         {
//                             id: 8,
//                             title: "You",
//                             width: "md:col-span-1",
//                             height: "h-60",
//                             bg: "bg-neutral-100 dark:bg-neutral-800",
//                         },
//                         {
//                             id: 9,
//                             title: "Do NOT TALK about",
//                             width: "md:col-span-2",
//                             height: "h-60",
//                             bg: "bg-neutral-100 dark:bg-neutral-800",
//                         },
//                         {
//                             id: 10,
//                             title: "F Club",
//                             width: "md:col-span-1",
//                             height: "h-60",
//                             bg: "bg-neutral-100 dark:bg-neutral-800",
//                         },
//                     ].map((box) => (
//                         <div
//                             key={box.id}
//                             className={`${box.width} ${box.height} ${box.bg} flex items-center justify-center rounded-lg p-4 shadow-sm`}
//                         >
//                             <h2 className="text-xl font-medium">{box.title}</h2>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };
