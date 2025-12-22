"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const categories = ["All", "Web App", "Mobile App", "UI/UX", "Backend"];

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description:
            "Platform e-commerce modern dengan fitur keranjang belanja, pembayaran, dan manajemen produk yang lengkap.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        category: "Web App",
        technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Task Management App",
        description:
            "Aplikasi manajemen tugas dengan fitur drag-and-drop, kolaborasi tim, dan tracking progress real-time.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        category: "Web App",
        technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "Fitness Tracking Mobile",
        description:
            "Aplikasi mobile untuk tracking aktivitas fitness, kalori, dan progress workout harian.",
        image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
        category: "Mobile App",
        technologies: ["React Native", "Firebase", "Redux"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        id: 4,
        title: "Restaurant Dashboard",
        description:
            "Dashboard analitik untuk restoran dengan visualisasi data penjualan, inventori, dan performa staff.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        category: "UI/UX",
        technologies: ["Figma", "React", "Chart.js", "Tailwind"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        id: 5,
        title: "API Gateway Service",
        description:
            "Microservice API gateway dengan authentication, rate limiting, dan logging terpusat.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        category: "Backend",
        technologies: ["Node.js", "Express", "Redis", "Docker"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        id: 6,
        title: "Social Media App",
        description:
            "Aplikasi sosial media dengan fitur posting, stories, chat real-time, dan notifikasi push.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
        category: "Mobile App",
        technologies: ["Flutter", "Firebase", "GetX"],
        liveUrl: "#",
        githubUrl: "#",
    },
];

export function PortfolioProjects() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <section
            id="projects"
            className="relative py-20 px-4 md:px-8 bg-neutral-950"
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
                    <h2 className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-3">
                        Portfolio
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Featured{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h3>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        Berikut adalah beberapa proyek yang telah saya kerjakan.
                        Setiap proyek mencerminkan dedikasi saya dalam
                        menciptakan solusi yang berkualitas.
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6" />
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeCategory === category
                                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                                    : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/10"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500"
                        >
                            {/* Project Image */}
                            <div className="relative h-52 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />

                                {/* Overlay on Hover */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity:
                                            hoveredId === project.id ? 1 : 0,
                                    }}
                                    className="absolute inset-0 bg-purple-900/80 backdrop-blur-sm flex items-center justify-center gap-4"
                                >
                                    <a
                                        href={project.liveUrl}
                                        className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                                        title="Live Demo"
                                    >
                                        <svg
                                            className="w-5 h-5 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                                        title="View Code"
                                    >
                                        <svg
                                            className="w-5 h-5 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                </motion.div>

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 text-xs font-medium bg-purple-500/80 text-white rounded-full backdrop-blur-sm">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-5">
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-neutral-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs bg-white/5 text-neutral-300 rounded-md border border-white/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all group"
                    >
                        View All Projects
                        <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
}
