"use client";
import { motion } from "framer-motion";

const skills = [
    { name: "React / Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Database (SQL/NoSQL)", level: 75 },
    { name: "Mobile Development", level: 70 },
];

const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "25+" },
    { label: "Happy Clients", value: "15+" },
    { label: "Technologies", value: "10+" },
];

export function AboutMe() {
    return (
        <section
            id="about"
            className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-black/[0.96] to-neutral-950"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">
                        About Me
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Passionate Developer &{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                            Problem Solver
                        </span>
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - About Text & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="relative">
                            {/* Profile Image Placeholder */}
                            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-300/20 border border-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                                <div className="text-6xl md:text-8xl">👨‍💻</div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl" />
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-300/10 rounded-full blur-xl" />
                        </div>

                        <div className="text-neutral-300 space-y-4 text-center md:text-left">
                            <p className="text-lg leading-relaxed">
                                Halo! Saya adalah seorang{" "}
                                <span className="text-white font-semibold">
                                    Full Stack Developer
                                </span>{" "}
                                yang bersemangat dalam menciptakan pengalaman
                                digital yang luar biasa. Dengan fokus pada
                                kualitas kode dan user experience yang optimal.
                            </p>
                            <p className="leading-relaxed">
                                Saya percaya bahwa teknologi yang baik adalah
                                yang tidak terlihat — bekerja dengan mulus di
                                latar belakang sambil memberikan pengalaman yang
                                intuitif bagi pengguna. Setiap proyek adalah
                                kesempatan untuk belajar dan berkembang.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
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
                                    className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors"
                                >
                                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs md:text-sm text-neutral-400 mt-1">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                🚀
                            </span>
                            Technical Skills
                        </h4>

                        <div className="space-y-5">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.1 * index,
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex justify-between mb-2">
                                        <span className="text-neutral-300 font-medium">
                                            {skill.name}
                                        </span>
                                        <span className="text-blue-400 font-semibold">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{
                                                width: `${skill.level}%`,
                                            }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.2 * index,
                                                ease: "easeOut",
                                            }}
                                            viewport={{ once: true }}
                                            className="h-full bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* What I Do Cards */}
                        <div className="grid grid-cols-2 gap-4 pt-6">
                            {[
                                {
                                    icon: "🌐",
                                    title: "Web Development",
                                    desc: "Aplikasi web modern & responsif",
                                },
                                {
                                    icon: "📱",
                                    title: "Mobile Apps",
                                    desc: "iOS & Android development",
                                },
                                {
                                    icon: "🎨",
                                    title: "UI/UX Design",
                                    desc: "Desain yang user-friendly",
                                },
                                {
                                    icon: "⚡",
                                    title: "Performance",
                                    desc: "Optimasi & skalabilitas",
                                },
                            ].map((item, index) => (
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
                                    className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-blue-300/50 transition-all cursor-default"
                                >
                                    <div className="text-2xl mb-2">
                                        {item.icon}
                                    </div>
                                    <h5 className="text-white font-medium text-sm">
                                        {item.title}
                                    </h5>
                                    <p className="text-neutral-500 text-xs mt-1">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-300 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105"
                    >
                        Let's Work Together
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
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-300/5 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
}
