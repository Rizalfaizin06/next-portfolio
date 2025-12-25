"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const categories = ["All", "Web App", "IoT", "Mobile App", "System"];

type Project = {
    id: number;
    title: string;
    description: string;
    fullDescription?: string;
    image: string;
    category: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    features?: string[];
    screenshots?: string[];
};

const projects: Project[] = [
    {
        id: 1,
        title: "Masjid IoT Automation System",
        description:
            "Sistem IoT untuk mengotomasi perangkat elektronik masjid (lampu, AC, kipas) dengan kontrol real-time dan scheduling otomatis.",
        fullDescription:
            "Sistem IoT untuk mengotomasi perangkat elektronik masjid (lampu, AC, kipas) dengan kontrol real-time dan scheduling otomatis. Sistem ini memungkinkan pengurus masjid untuk mengontrol semua perangkat elektronik dari satu dashboard terpusat, menghemat energi dan meningkatkan efisiensi operasional.",
        image: "https://images.unsplash.com/photo-1591768788525-8f69b7f7a1b5?w=800&h=600&fit=crop",
        category: "IoT",
        technologies: ["Express", "WebSocket", "React", "Arduino"],
        liveUrl: "#",
        githubUrl: "#",
        features: [
            "Kontrol real-time via web dashboard",
            "Scheduling otomatis berdasarkan waktu sholat",
            "Monitoring konsumsi listrik",
            "Notifikasi status perangkat",
        ],
        screenshots: [
            "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        ],
    },
    {
        id: 2,
        title: "Student Financial Management",
        description:
            "Sistem IoT untuk pengelolaan keuangan siswa dengan kartu OSIS sebagai alat pembayaran digital di kantin sekolah. Juara 1 Krenova Kab. Grobogan.",
        fullDescription:
            "Sistem IoT untuk pengelolaan keuangan siswa dengan kartu OSIS sebagai alat pembayaran digital di kantin sekolah. Sistem ini terintegrasi dengan database siswa dan memungkinkan orang tua untuk memantau pengeluaran anak. Proyek ini berhasil meraih Juara 1 Krenova Kabupaten Grobogan.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        category: "IoT",
        technologies: ["IoT", "Web App", "PWA", "RFID"],
        liveUrl: "#",
        githubUrl: "#",
        features: [
            "Pembayaran cashless dengan kartu OSIS",
            "Dashboard orang tua untuk monitoring",
            "Laporan keuangan real-time",
            "Top-up saldo via mobile app",
        ],
        screenshots: [
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        ],
    },
    {
        id: 3,
        title: "Smart Thermometer & Record",
        description:
            "Sistem perpustakaan digital dengan pemindaian suhu dan kartu OSIS untuk meminjam buku otomatis. Juara Harapan 1 Krenova Prov. Jateng.",
        fullDescription:
            "Sistem perpustakaan digital dengan pemindaian suhu dan kartu OSIS untuk meminjam buku otomatis. Dibuat saat pandemi COVID-19 untuk memastikan keamanan pengunjung perpustakaan. Proyek ini berhasil meraih Juara Harapan 1 Krenova Provinsi Jawa Tengah.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
        category: "IoT",
        technologies: ["IoT", "Web App", "Arduino", "Database"],
        liveUrl: "#",
        githubUrl: "#",
        features: [
            "Pemindaian suhu otomatis",
            "Peminjaman buku dengan kartu OSIS",
            "Rekam jejak pengunjung",
            "Dashboard admin untuk monitoring",
            "Email Peringatan Pengembalian Buku",
        ],
        screenshots: [
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop",
        ],
    },
    {
        id: 4,
        title: "SMK Al-Hadi Gresik Website",
        description:
            "Website sekolah dengan sistem informasi akademik dan profil sekolah yang informatif dan user-friendly.",
        fullDescription:
            "Website sekolah dengan sistem informasi akademik dan profil sekolah yang informatif dan user-friendly. Website ini menampilkan informasi lengkap tentang sekolah, kegiatan, berita, dan galeri foto.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
        category: "Web App",
        technologies: ["Next.js", "Tailwind CSS", "CMS"],
        liveUrl: "https://smkalhadigresik.sch.id/",
        githubUrl: "#",
        features: [
            "Profil sekolah lengkap",
            "Berita dan kegiatan terbaru",
            "Galeri foto dan video",
            "Informasi pendaftaran siswa baru",
        ],
        screenshots: [
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
        ],
    },
    {
        id: 5,
        title: "Unaki Press",
        description:
            "Platform publikasi dan berita kampus untuk menyebarkan informasi akademik dan kegiatan universitas.",
        fullDescription:
            "Platform publikasi dan berita kampus untuk menyebarkan informasi akademik dan kegiatan universitas. Dibangun dengan Laravel dan MySQL untuk performa optimal.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
        category: "Web App",
        technologies: ["Laravel", "MySQL", "Bootstrap"],
        liveUrl: "#",
        githubUrl: "#",
        features: [
            "Manajemen artikel dan berita",
            "Kategori dan tag konten",
            "Dashboard admin",
            "SEO optimized",
        ],
        screenshots: [
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop",
        ],
    },
    {
        id: 6,
        title: "Expo Grobogan Visitor System",
        description:
            "Sistem IoT untuk pendataan pengunjung dan pemantauan suhu tubuh otomatis selama event Expo Grobogan dengan dashboard real-time.",
        fullDescription:
            "Sistem IoT untuk pendataan pengunjung dan pemantauan suhu tubuh otomatis selama event Expo Grobogan dengan dashboard real-time. Sistem ini membantu penyelenggara event untuk memastikan protokol kesehatan selama pandemi.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
        category: "IoT",
        technologies: ["IoT", "Express", "React", "Sensor"],
        liveUrl: "#",
        githubUrl: "#",
        features: [
            "Pendataan pengunjung otomatis",
            "Pemindaian suhu tubuh",
            "Dashboard real-time",
            "Laporan statistik harian",
        ],
        screenshots: [
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop",
        ],
    },
    {
        id: 7,
        title: "Network Infrastructure SDIT",
        description:
            "Desain dan implementasi infrastruktur jaringan sekolah dengan segmentasi untuk Admin, Guru, Siswa, dan Tamu menggunakan Mikrotik.",
        fullDescription:
            "Desain dan implementasi infrastruktur jaringan sekolah dengan segmentasi untuk Admin, Guru, Siswa, dan Tamu menggunakan Mikrotik. Termasuk konfigurasi VLAN, QoS, dan firewall untuk keamanan jaringan.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
        category: "System",
        technologies: ["Mikrotik", "Networking", "VLAN", "QoS"],
        liveUrl: "#",
        githubUrl: "#",
        features: [
            "Segmentasi jaringan (VLAN)",
            "Quality of Service (QoS)",
            "Firewall dan keamanan",
            "Bandwidth management",
        ],
        screenshots: [
            "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        ],
    },
    {
        id: 8,
        title: "Unaki Link Shortener",
        description:
            "Aplikasi pemendek URL untuk kebutuhan internal kampus dengan tracking dan analytics.",
        fullDescription:
            "Aplikasi pemendek URL untuk kebutuhan internal kampus dengan tracking dan analytics. Memungkinkan pengguna untuk membuat short link dan memantau statistik klik.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        category: "Web App",
        technologies: ["Node.js", "Express", "MongoDB"],
        liveUrl: "#",
        githubUrl: "#",
        features: [
            "Pembuatan short link",
            "Analytics dan statistik klik",
            "Custom alias",
            "QR Code generator",
        ],
        screenshots: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        ],
    },
];

// Modal Component
function ProjectModal({
    project,
    isOpen,
    onClose,
}: {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}) {
    // Close modal on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 300,
                        }}
                        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl border border-white/10 shadow-2xl scrollbar-thin scrollbar-blue scrollbar-track-transparent scrollbar-thumb-blue-500/50 hover:scrollbar-thumb-blue-500/70"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
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
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* Project Image */}
                        <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-6">
                                <span className="px-3 py-1 text-xs font-medium bg-blue-500/80 text-white rounded-full backdrop-blur-sm">
                                    {project.category}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                {project.title}
                            </h3>

                            <p className="text-neutral-300 mb-6 leading-relaxed">
                                {project.fullDescription || project.description}
                            </p>

                            {/* Screenshots Gallery */}
                            {project.screenshots &&
                                project.screenshots.length > 0 && (
                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-white mb-3">
                                            Screenshots
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {project.screenshots.map(
                                                (screenshot, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{
                                                            opacity: 0,
                                                            y: 20,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            y: 0,
                                                        }}
                                                        transition={{
                                                            delay: index * 0.1,
                                                        }}
                                                        className="relative aspect-video rounded-lg overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all group"
                                                    >
                                                        <Image
                                                            src={screenshot}
                                                            alt={`${
                                                                project.title
                                                            } screenshot ${
                                                                index + 1
                                                            }`}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                    </motion.div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )}

                            {/* Features */}
                            {project.features &&
                                project.features.length > 0 && (
                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-white mb-3">
                                            Fitur Utama
                                        </h4>
                                        <ul className="grid md:grid-cols-2 gap-2">
                                            {project.features.map(
                                                (feature, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-center gap-2 text-neutral-400"
                                                    >
                                                        <svg
                                                            className="w-4 h-4 text-blue-400 flex-shrink-0"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M5 13l4 4L19 7"
                                                            />
                                                        </svg>
                                                        <span className="text-sm">
                                                            {feature}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                )}

                            {/* Technologies */}
                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-white mb-3">
                                    Teknologi
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 text-sm bg-blue-500/10 text-blue-300 rounded-lg border border-blue-500/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                                {project.liveUrl && project.liveUrl !== "#" && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                                    >
                                        <svg
                                            className="w-4 h-4"
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
                                        Live Demo
                                    </a>
                                )}
                                {project.githubUrl &&
                                    project.githubUrl !== "#" && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all"
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            View Code
                                        </a>
                                    )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export function PortfolioProjects() {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    };

    return (
        <section
            id="projects"
            className="relative py-20 px-4 md:px-8 bg-neutral-950"
        >
            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">
                        Portfolio
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {t("projects.title")}
                    </h3>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        Berikut adalah beberapa proyek yang telah saya kerjakan.
                        Setiap proyek mencerminkan dedikasi saya dalam
                        menciptakan solusi yang berkualitas.
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-6" />
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => {
                        const translationKey = `projects.filter.${category
                            .toLowerCase()
                            .replace(" ", "")}` as any;
                        return (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    activeCategory === category
                                        ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
                                        : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/10"
                                }`}
                            >
                                {t(translationKey)}
                            </button>
                        );
                    })}
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
                            onClick={() => openModal(project)}
                            className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500 cursor-pointer"
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
                                    className="absolute inset-0 bg-blue-900/80 backdrop-blur-sm flex items-center justify-center gap-4"
                                >
                                    <div
                                        className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                                        title="View Details"
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
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                        </svg>
                                    </div>
                                </motion.div>

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 text-xs font-medium bg-blue-500/80 text-white rounded-full backdrop-blur-sm">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-5">
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
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
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all group"
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
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
}
