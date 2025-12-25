"use client";
import { Spotlight } from "@/components/ui/spotlight-new";
import { useLanguage } from "@/contexts/LanguageContext";
import { WHATSAPP_LINK } from "@/lib/constants";

export function SpotlightContent() {
    const { t } = useLanguage();

    return (
        <div
            id="home"
            className="h-screen w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden max-w-full pt-0"
        >
            <Spotlight />
            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full">
                <p className="mt-4 font-thin text-neutral-300 max-w-lg text-center mx-auto pb-10 text-2xl">
                    {t("spotlight.intro")}
                </p>
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 bg-opacity-50 pb-5">
                    {t("spotlight.greeting")}
                </h1>
                <p className="mt-2 text-2xl md:text-3xl font-semibold text-center text-blue-400">
                    {t("spotlight.role")}
                </p>
                <p className="mt-4 font-normal text-lg text-neutral-500 max-w-xl text-center mx-auto">
                    {t("spotlight.description")}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600/50 to-blue-400 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
                    >
                        <span>{t("nav.contact")}</span>
                        {/* <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg> */}
                    </a>

                    <a
                        href="#projects"
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/20 hover:border-blue-500 hover:bg-white/5 transition-all"
                    >
                        <span>{t("nav.projects")}</span>
                        <svg
                            className="w-5 h-5 group-hover:translate-y-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

// "use client";
// import { Spotlight } from "@/components/ui/spotlight-new";

// export function SpotlightContent() {
//     return (
//         <div
//             id="home"
//             className="h-[50rem] -mt-14 w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"
//         >
//             <Spotlight />
//             <div className=" p-4 max-w-7xl mx-auto relative z-10  w-full pt-20 md:pt-0">
//                 <p className="mt-4 font-thin text-neutral-300 max-w-lg text-center mx-auto pb-10 text-2xl">
//                     Let me Introduce myself
//                 </p>
//                 <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 bg-opacity-50 pb-5">
//                     Hi, I'm Rizal
//                 </h1>
//                 <p className="mt-4 font-bold text-2xl text-blue-400 text-center mx-auto">
//                     Web Developer & IT Specialist
//                 </p>
//                 <p className="mt-6 font-normal text-lg text-neutral-400 max-w-3xl text-center mx-auto">
//                     Berpengalaman di Fullstack Development, IT Support, IoT,
//                     Network Engineering, dan Multimedia Project Management.
//                     Fokus menciptakan solusi yang stabil, efisien, dan mudah
//                     diimplementasikan di lapangan.
//                 </p>

//                 {/* CTA Buttons */}
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
//                     <a
//                         href="#contact"
//                         className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600/50 to-blue-400 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
//                     >
//                         <span>Contact Me</span>
//                         <svg
//                             className="w-5 h-5 group-hover:translate-x-1 transition-transform"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                             />
//                         </svg>
//                     </a>

//                     <a
//                         href="#projects"
//                         className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/20 hover:border-blue-500 hover:bg-white/5 transition-all"
//                     >
//                         <span>View Projects</span>
//                         <svg
//                             className="w-5 h-5 group-hover:translate-y-1 transition-transform"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M19 9l-7 7-7-7"
//                             />
//                         </svg>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// }
