"use client";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const skills = [
    { name: "React / Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Database (SQL/NoSQL)", level: 75 },
    { name: "Mobile Development", level: 70 },
];

const getStats = (t: (key: string) => string) => [
    { label: `${t("about.years")} ${t("about.experience")}`, value: "4+" },
    { label: `${t("about.projects")} ${t("about.completed")}`, value: "17+" },
    { label: t("about.certifications"), value: "5" },
    { label: `${t("about.techStack")} ${t("about.mastered")}`, value: "30+" },
];

const getWhatIDo = (t: (key: string) => string) => [
    {
        icon: "🌐",
        title: t("about.webDev.title"),
        desc: t("about.webDev.desc"),
    },
    {
        icon: "📱",
        title: t("about.mobile.title"),
        desc: t("about.mobile.desc"),
    },
    {
        icon: "🔌",
        title: t("about.iot.title"),
        desc: t("about.iot.desc"),
    },
    {
        icon: "🌐",
        title: t("about.network.title"),
        desc: t("about.network.desc"),
    },
];

const techStack = [
    { name: "Laravel", icon: "/images/laravel.svg" },
    { name: "Next.js", icon: "/images/nextjs.svg" },
    { name: "React", icon: "/images/react.svg" },
    { name: "Node.js", icon: "/images/nodejs.svg" },
    { name: "Express", icon: "/images/express.svg" },
    { name: "Tailwind CSS", icon: "/images/tailwind.svg" },
    { name: "PostgreSQL", icon: "/images/postgresql.svg" },
    { name: "MySQL", icon: "/images/mysql.svg" },
    { name: "Docker", icon: "/images/docker.svg" },
    { name: "Git", icon: "/images/git.svg" },
    { name: "Arduino", icon: "/images/arduino.svg" },
    { name: "Mikrotik", icon: "/images/mikrotik.svg" },
];

function TechStackScroll({ techStack }: { techStack: typeof techStack }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const x = useMotionValue(0);
    const animationRef = useRef<number>(0);

    // Duplicate items untuk seamless loop
    const duplicatedTechStack = [...techStack, ...techStack, ...techStack];
    const totalWidth = techStack.length * 120;

    // Auto scroll animation
    useAnimationFrame((time) => {
        if (!isHovered && !isDragging) {
            // Scroll dengan kecepatan konstan
            const currentX = x.get();
            const newX = currentX - 0.5; // Kecepatan scroll

            // Reset jika sudah scroll satu set penuh
            if (newX <= -totalWidth) {
                x.set(0);
            } else {
                x.set(newX);
            }
        }
    });

    const handleMouseLeave = () => {
        setIsHovered(false);
        // Force end dragging jika cursor keluar saat masih drag
        if (isDragging) {
            setIsDragging(false);
        }
    };

    return (
        <div
            className="relative py-4 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="flex gap-6 md:gap-8"
                drag="x"
                dragConstraints={{ left: -totalWidth * 2, right: 0 }}
                dragElastic={0.05}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                style={{
                    x,
                    cursor: isDragging
                        ? "grabbing"
                        : isHovered
                        ? "grab"
                        : "default",
                }}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
            >
                {duplicatedTechStack.map((tech, index) => (
                    <motion.div
                        key={`${tech.name}-${index}`}
                        whileHover={{ scale: 1.1, zIndex: 10 }}
                        className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all cursor-default group min-w-[100px]"
                    >
                        <div className="w-10 h-10 md:w-12 md:h-12 relative group-hover:scale-110 transition-transform">
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-full h-full object-contain pointer-events-none"
                            />
                        </div>
                        <span className="text-xs text-neutral-400 group-hover:text-blue-400 transition-colors whitespace-nowrap">
                            {tech.name}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export function AboutMe() {
    const { t } = useLanguage();
    const stats = getStats(t);
    const whatIDo = getWhatIDo(t);

    return (
        <section
            id="about"
            className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-black/[0.96] to-neutral-950"
        >
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">
                        {t("about.bio.title")}
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {t("about.bio.heading")}
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto rounded-full" />
                </motion.div>

                {/* Profile & About */}
                <div className="grid md:grid-cols-[320px_1fr] gap-6 items-center mb-16">
                    {/* Left Column - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center md:justify-start"
                    >
                        {/* Profile Image */}
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-300/20 border border-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                            <img
                                src="/images/avatar/rizal-square.jpg"
                                alt="Rizal Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />
                        <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-300/10 rounded-full blur-xl" />
                    </motion.div>

                    {/* Right Column - About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-neutral-300 space-y-6 text-center md:text-left"
                    >
                        <p className="text-xl md:text-2xl leading-relaxed">
                            {t("about.bio.paragraph1")}
                        </p>
                        <p className="text-base md:text-lg leading-relaxed">
                            {t("about.bio.paragraph2")}
                        </p>
                    </motion.div>
                </div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.1 * index,
                            }}
                            viewport={{ once: true }}
                            className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors"
                        >
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base text-neutral-400 mt-2">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* What I Do Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {whatIDo.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.1 * index,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-blue-300/50 transition-all cursor-default"
                        >
                            <div className="text-3xl md:text-4xl mb-3">
                                {item.icon}
                            </div>
                            <h5 className="text-white font-medium text-base md:text-lg mb-2">
                                {item.title}
                            </h5>
                            <p className="text-neutral-500 text-sm">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="mt-16 overflow-hidden"
                >
                    <h4 className="text-center text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-8">
                        {t("about.techStackTitle")}
                    </h4>
                    <TechStackScroll techStack={techStack} />
                </motion.div>

                {/* CTA Button */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-16 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-300/10 border border-blue-500/20"
                >
                    <p className="text-lg md:text-xl text-neutral-300 flex items-center justify-center gap-2">
                        <span className="text-2xl">🚀</span>
                        Selalu Belajar Tech Baru
                    </p>
                </motion.div> */}
            </div>

            {/* Background Decorations */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-300/5 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
}
