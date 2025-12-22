"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
    "All",
    "Fullstack",
    "Frontend",
    "Backend",
    "Database",
    "Tools",
    "Mobile",
];

const techStack = [
    {
        id: 1,
        name: "React",
        category: "Frontend",
        level: 95,
        icon: "⚛️",
        color: "from-cyan-400 to-blue-500",
        description: "Library untuk membangun UI interaktif",
    },
    {
        id: 2,
        name: "Next.js",
        category: "Fullstack",
        level: 90,
        icon: "▲",
        color: "from-gray-400 to-gray-600",
        description: "React framework untuk production",
    },
    {
        id: 3,
        name: "TypeScript",
        category: "Frontend",
        level: 88,
        icon: "📘",
        color: "from-blue-400 to-blue-600",
        description: "JavaScript dengan type safety",
    },
    {
        id: 4,
        name: "Tailwind CSS",
        category: "Frontend",
        level: 95,
        icon: "🎨",
        color: "from-cyan-400 to-teal-500",
        description: "Utility-first CSS framework",
    },
    {
        id: 5,
        name: "Node.js",
        category: "Backend",
        level: 85,
        icon: "🟢",
        color: "from-green-400 to-green-600",
        description: "JavaScript runtime untuk backend",
    },
    {
        id: 6,
        name: "Express",
        category: "Backend",
        level: 82,
        icon: "🚂",
        color: "from-gray-400 to-gray-500",
        description: "Minimal web framework untuk Node.js",
    },
    {
        id: 7,
        name: "MongoDB",
        category: "Database",
        level: 78,
        icon: "🍃",
        color: "from-green-500 to-green-700",
        description: "NoSQL database yang fleksibel",
    },
    {
        id: 8,
        name: "PostgreSQL",
        category: "Database",
        level: 75,
        icon: "🐘",
        color: "from-blue-500 to-indigo-600",
        description: "Relational database yang powerful",
    },
    {
        id: 9,
        name: "Redis",
        category: "Database",
        level: 70,
        icon: "💾",
        color: "from-red-400 to-red-600",
        description: "In-memory data structure store",
    },
    {
        id: 10,
        name: "Git",
        category: "Tools",
        level: 90,
        icon: "📦",
        color: "from-orange-400 to-red-500",
        description: "Version control system",
    },
    {
        id: 11,
        name: "Docker",
        category: "Tools",
        level: 72,
        icon: "🐳",
        color: "from-blue-400 to-blue-600",
        description: "Containerization platform",
    },
    {
        id: 12,
        name: "VS Code",
        category: "Tools",
        level: 95,
        icon: "💻",
        color: "from-blue-500 to-blue-700",
        description: "Code editor favorit saya",
    },
    {
        id: 13,
        name: "React Native",
        category: "Mobile",
        level: 75,
        icon: "📱",
        color: "from-cyan-400 to-blue-500",
        description: "Framework untuk mobile apps",
    },
    {
        id: 14,
        name: "Flutter",
        category: "Mobile",
        level: 68,
        icon: "🦋",
        color: "from-blue-400 to-cyan-500",
        description: "UI toolkit untuk cross-platform",
    },
    {
        id: 15,
        name: "Laravel",
        category: "Fullstack",
        level: 90,
        icon: "🏋️",
        color: "from-red-400 to-red-600",
        description: "React framework untuk production",
    },
];

export function TechStack() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredTech =
        activeCategory === "All"
            ? techStack
            : techStack.filter((tech) => tech.category === activeCategory);

    // Group by category for stats
    const categoryStats = categories.slice(1).map((cat) => ({
        name: cat,
        count: techStack.filter((t) => t.category === cat).length,
    }));

    return (
        <section
            id="skills"
            className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-neutral-950 to-black/[0.96]"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-3">
                        Technologies
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Tech Stack &{" "}
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                            Skills
                        </span>
                    </h3>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        Teknologi dan tools yang saya gunakan untuk membangun
                        aplikasi modern dan scalable.
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-6" />
                </motion.div>

                {/* Category Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12"
                >
                    {categoryStats.map((stat, index) => (
                        <motion.div
                            key={stat.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                            viewport={{ once: true }}
                            className="text-center p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-indigo-500/50 transition-all"
                        >
                            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                {stat.count}
                            </div>
                            <div className="text-xs text-neutral-400 mt-1">
                                {stat.name}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeCategory === category
                                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25"
                                    : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/10"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Tech Stack Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTech.map((tech, index) => (
                        <motion.div
                            key={tech.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="group relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-indigo-500/50 transition-all duration-500 p-6"
                        >
                            {/* Icon & Category Badge */}
                            <div className="flex items-center gap-3 mb-4">
                                <div
                                    className={`text-4xl bg-gradient-to-r ${tech.color} bg-clip-text`}
                                >
                                    {tech.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                                        {tech.name}
                                    </h4>
                                    <span className="text-xs text-neutral-500">
                                        {tech.category}
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-neutral-400">
                                {tech.description}
                            </p>

                            {/* Hover Glow Effect */}
                            <div
                                className={`absolute -inset-1 bg-gradient-to-r ${tech.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20"
                >
                    <h4 className="text-2xl font-bold text-white mb-2">
                        Selalu Belajar Teknologi Baru
                    </h4>
                    <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
                        Tech stack di atas terus berkembang seiring dengan
                        kebutuhan project dan trend teknologi terkini.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="px-4 py-2 bg-white/5 rounded-full text-sm text-neutral-300 border border-white/10">
                            🎯 Currently Learning: AI & Machine Learning
                        </div>
                        <div className="px-4 py-2 bg-white/5 rounded-full text-sm text-neutral-300 border border-white/10">
                            📚 Next: Rust & WebAssembly
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
}
