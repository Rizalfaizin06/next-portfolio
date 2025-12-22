"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const categories = ["All", "Web App", "IoT", "Mobile App", "System"];

const projects = [
    {
        id: 1,
        title: "Masjid IoT Automation System",
        description:
            "Sistem IoT untuk mengotomasi perangkat elektronik masjid (lampu, AC, kipas) dengan kontrol real-time dan scheduling otomatis.",
        image: "https://images.unsplash.com/photo-1591768788525-8f69b7f7a1b5?w=800&h=600&fit=crop",
        category: "IoT",
        technologies: ["Express", "WebSocket", "React", "Arduino"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Student Financial Management",
        description:
            "Sistem IoT untuk pengelolaan keuangan siswa dengan kartu OSIS sebagai alat pembayaran digital di kantin sekolah. Juara 1 Krenova Kab. Grobogan.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        category: "IoT",
        technologies: ["IoT", "Arduino", "Web App", "RFID"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "Smart Thermometer & Record",
        description:
            "Sistem perpustakaan digital dengan pemindaian suhu dan kartu OSIS untuk meminjam buku otomatis. Juara Harapan 1 Krenova Prov. Jateng.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
        category: "IoT",
        technologies: ["IoT", "Web App", "Arduino", "Database"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        id: 4,
        title: "SMK Al-Hadi Gresik Website",
        description:
            "Website sekolah dengan sistem informasi akademik dan profil sekolah yang informatif dan user-friendly.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
        category: "Web App",
        technologies: ["Next.js", "Tailwind CSS", "CMS"],
        liveUrl: "https://smkalhadigresik.sch.id/",
        githubUrl: "#",
    },
    {
        id: 5,
        title: "Unaki Press",
        description:
            "Platform publikasi dan berita kampus untuk menyebarkan informasi akademik dan kegiatan universitas.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
        category: "Web App",
        technologies: ["Laravel", "MySQL", "Bootstrap"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        id: 6,
        title: "Expo Grobogan Visitor System",
        description:
            "Sistem IoT untuk pendataan pengunjung dan pemantauan suhu tubuh otomatis selama event Expo Grobogan dengan dashboard real-time.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
        category: "IoT",
        technologies: ["IoT", "Express", "React", "Sensor"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        id: 7,
        title: "Network Infrastructure SDIT",
        description:
            "Desain dan implementasi infrastruktur jaringan sekolah dengan segmentasi untuk Admin, Guru, Siswa, dan Tamu menggunakan Mikrotik.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
        category: "System",
        technologies: ["Mikrotik", "Networking", "VLAN", "QoS"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        id: 8,
        title: "Unaki Link Shortener",
        description:
            "Aplikasi pemendek URL untuk kebutuhan internal kampus dengan tracking dan analytics.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        category: "Web App",
        technologies: ["Node.js", "Express", "MongoDB"],
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
