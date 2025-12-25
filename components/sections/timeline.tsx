// "use client";

// export function Timeline() {
//     return (
//         <section className="px-20 py-24 bg-gradient-to-b from-black/80 via-[#020617] to-black/90">
//             {/* Title */}
//             <h2 className="text-center text-4xl font-bold text-white/90 mb-14 tracking-wide">
//                 <span className="bg-gradient-to-r from-white/80 to-white bg-clip-text text-transparent">
//                     Experience
//                 </span>
//             </h2>

//             <div className="relative border-s border-white/10 mx-auto max-w-4xl">
//                 {/* ----------------------------------- */}
//                 {/* Fullstack Intern */}
//                 <div className="relative mb-16 ps-10">
//                     {/* Dot */}
//                     <span className="absolute w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_12px_2px_rgba(56,189,248,0.8)] -start-2 top-2" />

//                     {/* Card */}
//                     <div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg shadow-blue-500/5 p-6 rounded-xl">
//                         <p className="text-xs text-white/60 font-medium mb-2">
//                             Februari 2024 – Agustus 2024 • Full Time • Onsite
//                         </p>

//                         <h3 className="text-lg font-semibold text-white mb-3">
//                             Fullstack Developer Intern – PT. Bejana Investidata
//                             Globalindo
//                         </h3>

//                         <ul className="text-white/80 text-sm space-y-1.5 list-disc ms-4">
//                             <li>Membangun REST API (Node.js + Express).</li>
//                             <li>Dokumentasi API menggunakan Swagger.</li>
//                             <li>
//                                 Caching data dengan Redis untuk meningkatkan
//                                 performa.
//                             </li>
//                             <li>Testing API (Jest + Supertest).</li>
//                             <li>Kolaborasi lintas tim (Frontend & QA).</li>
//                         </ul>
//                     </div>
//                 </div>

//                 {/* ----------------------------------- */}
//                 {/* IT Support */}
//                 <div className="relative mb-16 ps-10">
//                     <span className="absolute w-4 h-4 rounded-full bg-green-400 shadow-[0_0_12px_2px_rgba(74,222,128,0.8)] -start-2 top-2" />

//                     <div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg shadow-green-500/5 p-6 rounded-xl">
//                         <p className="text-xs text-white/60 font-medium mb-2">
//                             Maret 2023 – November 2025 • Part Time • Onsite
//                         </p>

//                         <h3 className="text-lg font-semibold text-white mb-3">
//                             IT Support – Universitas AKI
//                         </h3>

//                         <ul className="text-white/80 text-sm space-y-1.5 list-disc ms-4">
//                             <li>
//                                 Pengelolaan jaringan & perangkat lab komputer.
//                             </li>
//                             <li>Instalasi PC, printer, LCD/proyektor.</li>
//                             <li>
//                                 Mendukung pengembangan & deployment web
//                                 internal.
//                             </li>
//                             <li>Menangani tiket IT & training singkat user.</li>
//                             <li>Menjamin layanan TI tetap stabil & efisien.</li>
//                         </ul>
//                     </div>
//                 </div>

//                 {/* ----------------------------------- */}
//                 {/* IoT Engineer */}
//                 <div className="relative ps-10">
//                     <span className="absolute w-4 h-4 rounded-full bg-yellow-400 shadow-[0_0_12px_2px_rgba(250,204,21,0.8)] -start-2 top-2" />

//                     <div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg shadow-yellow-500/5 p-6 rounded-xl">
//                         <p className="text-xs text-white/60 font-medium mb-2">
//                             Oktober 2021 – Sekarang • Freelance • Hybrid
//                         </p>

//                         <h3 className="text-lg font-semibold text-white mb-3">
//                             IoT Engineer – Masjid Al Banna
//                         </h3>

//                         <ul className="text-white/80 text-sm space-y-1.5 list-disc ms-4">
//                             <li>Bangun sistem otomasi perangkat masjid.</li>
//                             <li>
//                                 Backend WebSocket + Express (real-time control).
//                             </li>
//                             <li>
//                                 Dashboard React: remote, manual, scheduling.
//                             </li>
//                             <li>
//                                 Instalasi perangkat IoT & troubleshooting
//                                 hardware.
//                             </li>
//                             <li>
//                                 Optimasi daya listrik melalui automation
//                                 scheduling.
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { timelineTranslations } from "@/locales/timeline-data";

const colorConfig = {
    blue: {
        dot: "bg-blue-500",
        shadow: "shadow-[0_0_16px_4px_rgba(59,130,246,0.5)]",
        cardShadow: "hover:shadow-blue-500/10",
        borderHover: "hover:border-blue-500/50",
        iconBg: "bg-blue-500/10",
        iconText: "text-blue-400",
    },
    cyan: {
        dot: "bg-cyan-500",
        shadow: "shadow-[0_0_16px_4px_rgba(6,182,212,0.5)]",
        cardShadow: "hover:shadow-cyan-500/10",
        borderHover: "hover:border-cyan-500/50",
        iconBg: "bg-cyan-500/10",
        iconText: "text-cyan-400",
    },
    green: {
        dot: "bg-green-500",
        shadow: "shadow-[0_0_16px_4px_rgba(34,197,94,0.5)]",
        cardShadow: "hover:shadow-green-500/10",
        borderHover: "hover:border-green-500/50",
        iconBg: "bg-green-500/10",
        iconText: "text-green-400",
    },
    purple: {
        dot: "bg-purple-500",
        shadow: "shadow-[0_0_16px_4px_rgba(168,85,247,0.5)]",
        cardShadow: "hover:shadow-purple-500/10",
        borderHover: "hover:border-purple-500/50",
        iconBg: "bg-purple-500/10",
        iconText: "text-purple-400",
    },
    orange: {
        dot: "bg-orange-500",
        shadow: "shadow-[0_0_16px_4px_rgba(249,115,22,0.5)]",
        cardShadow: "hover:shadow-orange-500/10",
        borderHover: "hover:border-orange-500/50",
        iconBg: "bg-orange-500/10",
        iconText: "text-orange-400",
    },
};

export function Timeline() {
    const [showMore, setShowMore] = useState(false);
    const { t, language } = useLanguage();

    const experiences = timelineTranslations[language].experiences;
    const additionalExperiences =
        timelineTranslations[language].additionalExperiences;

    return (
        <section
            id="experience"
            className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-black/[0.96] to-neutral-950"
        >
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-3">
                        {t("timeline.subtitle")}
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {t("timeline.title")}
                    </h3>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent" />

                    {/* Timeline Items */}
                    <div className="space-y-6">
                        {experiences.map((exp, index) => {
                            const colors =
                                colorConfig[
                                    exp.color as keyof typeof colorConfig
                                ];
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={exp.id}
                                    initial={{
                                        opacity: 0,
                                        x: isEven ? -50 : 50,
                                    }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.2,
                                    }}
                                    viewport={{ once: true }}
                                    className={`relative flex items-center ${
                                        isEven
                                            ? "md:flex-row"
                                            : "md:flex-row-reverse"
                                    } flex-col md:gap-8 ${
                                        index > 0 ? "md:-mt-32" : ""
                                    }`}
                                >
                                    {/* Content Card */}
                                    <div
                                        className={`w-full md:w-[calc(50%-2rem)] ${
                                            isEven
                                                ? "md:text-left"
                                                : "md:text-left"
                                        } text-left`}
                                    >
                                        <div
                                            className={`group relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 ${colors.borderHover} ${colors.cardShadow} p-6 rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] ml-12 md:ml-0`}
                                        >
                                            {/* Period Badge */}
                                            <div
                                                className={`inline-flex items-center gap-2 px-3 py-1.5 ${colors.iconBg} rounded-full mb-3`}
                                            >
                                                <svg
                                                    className={`w-4 h-4 ${colors.iconText}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    />
                                                </svg>
                                                <span
                                                    className={`text-xs font-semibold ${colors.iconText}`}
                                                >
                                                    {exp.period}
                                                </span>
                                            </div>

                                            <div className="text-xs text-neutral-400 font-medium mb-2">
                                                {exp.type}
                                            </div>

                                            <h4 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                                {exp.title}
                                            </h4>
                                            <p className="text-sm text-cyan-400 font-medium mb-4">
                                                {exp.company}
                                            </p>

                                            <ul
                                                className={`space-y-2 text-neutral-300 text-sm ${
                                                    isEven
                                                        ? "md:text-left"
                                                        : "md:text-left"
                                                } text-left`}
                                            >
                                                {exp.responsibilities.map(
                                                    (item, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex items-start gap-2"
                                                        >
                                                            <span className="text-cyan-400 mt-1 flex-shrink-0">
                                                                •
                                                            </span>
                                                            <span>{item}</span>
                                                        </li>
                                                    )
                                                )}
                                            </ul>

                                            {/* Decorative Corner */}
                                            <div
                                                className={`absolute top-0 ${
                                                    isEven
                                                        ? "left-0 rounded-br-full"
                                                        : "right-0 rounded-bl-full"
                                                } w-16 h-16 ${
                                                    colors.iconBg
                                                } opacity-0 group-hover:opacity-100 transition-opacity`}
                                            />
                                        </div>
                                    </div>

                                    {/* Center Dot */}
                                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
                                        <div
                                            className={`w-5 h-5 rounded-full ${colors.dot} ${colors.shadow} border-4 border-neutral-950`}
                                        />
                                    </div>

                                    {/* Empty Space for opposite side (desktop only) */}
                                    <div className="hidden md:block w-[calc(50%-2rem)]" />
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Show More Content */}
                    <motion.div
                        initial={false}
                        animate={{
                            height: showMore ? "auto" : 0,
                            opacity: showMore ? 1 : 0,
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        style={{ overflow: showMore ? "visible" : "hidden" }}
                    >
                        <div className="space-y-6 mt-12 pb-4">
                            {additionalExperiences.map((exp, index) => {
                                const colors =
                                    colorConfig[
                                        exp.color as keyof typeof colorConfig
                                    ];
                                const totalIndex = experiences.length + index;
                                const isEven = totalIndex % 2 === 0;

                                return (
                                    <motion.div
                                        key={`${exp.id}-${index}`}
                                        initial={false}
                                        animate={{
                                            opacity: showMore ? 1 : 0,
                                            x: showMore ? 0 : isEven ? -50 : 50,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            delay: showMore ? 0.2 : 0,
                                        }}
                                        className={`relative flex items-center ${
                                            isEven
                                                ? "md:flex-row"
                                                : "md:flex-row-reverse"
                                        } flex-col md:gap-8 md:-mt-32`}
                                    >
                                        {/* Content Card */}
                                        <div
                                            className={`w-full md:w-[calc(50%-2rem)] ${
                                                isEven
                                                    ? "md:text-left"
                                                    : "md:text-left"
                                            } text-left`}
                                        >
                                            <div
                                                className={`group relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 ${colors.borderHover} ${colors.cardShadow} p-6 rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] ml-12 md:ml-0`}
                                            >
                                                {/* Period Badge */}
                                                <div
                                                    className={`inline-flex items-center gap-2 px-3 py-1.5 ${colors.iconBg} rounded-full mb-3`}
                                                >
                                                    <svg
                                                        className={`w-4 h-4 ${colors.iconText}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                        />
                                                    </svg>
                                                    <span
                                                        className={`text-xs font-semibold ${colors.iconText}`}
                                                    >
                                                        {exp.period}
                                                    </span>
                                                </div>

                                                <div className="text-xs text-neutral-400 font-medium mb-2">
                                                    {exp.type}
                                                </div>

                                                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                                    {exp.title}
                                                </h4>
                                                <p className="text-sm text-cyan-400 font-medium mb-4">
                                                    {exp.company}
                                                </p>

                                                <ul
                                                    className={`space-y-2 text-neutral-300 text-sm ${
                                                        isEven
                                                            ? "md:text-left"
                                                            : "md:text-left"
                                                    } text-left`}
                                                >
                                                    {exp.responsibilities.map(
                                                        (item, i) => (
                                                            <li
                                                                key={i}
                                                                className="flex items-start gap-2"
                                                            >
                                                                <span className="text-cyan-400 mt-1 flex-shrink-0">
                                                                    •
                                                                </span>
                                                                <span>
                                                                    {item}
                                                                </span>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>

                                                {/* Decorative Corner */}
                                                <div
                                                    className={`absolute top-0 ${
                                                        isEven
                                                            ? "left-0 rounded-br-full"
                                                            : "right-0 rounded-bl-full"
                                                    } w-16 h-16 ${
                                                        colors.iconBg
                                                    } opacity-0 group-hover:opacity-100 transition-opacity`}
                                                />
                                            </div>
                                        </div>

                                        {/* Center Dot */}
                                        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
                                            <div
                                                className={`w-5 h-5 rounded-full ${colors.dot} ${colors.shadow} border-4 border-neutral-950`}
                                            />
                                        </div>

                                        {/* Empty Space for opposite side (desktop only) */}
                                        <div className="hidden md:block w-[calc(50%-2rem)]" />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Show More Button */}
                    <div className="relative flex justify-center mt-12">
                        <motion.button
                            onClick={() => setShowMore(!showMore)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative z-20 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 font-semibold rounded-full hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400 transition-all backdrop-blur-sm"
                        >
                            <span className="flex items-center gap-2">
                                {showMore
                                    ? t("timeline.viewLess")
                                    : t("timeline.viewMore")}
                                <svg
                                    className={`w-4 h-4 transition-transform duration-300 ${
                                        showMore ? "rotate-180" : ""
                                    }`}
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
                            </span>
                        </motion.button>
                    </div>

                    {/* Timeline End Marker */}
                    {/* <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center mt-12"
                    >
                        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2">
                            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[0_0_20px_4px_rgba(6,182,212,0.6)]" />
                        </div>
                    </motion.div> */}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-16 pt-12 border-t border-white/10"
                >
                    <p className="text-neutral-400 mb-6">
                        {t("contact.ctaText")}
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-105"
                    >
                        {t("contact.ctaButton")}
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </motion.div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
}
