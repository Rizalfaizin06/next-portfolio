"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
    achievementsData,
    achievementStats,
    type Achievement,
} from "@/locales/achievements-data";

const categories = ["All", "Award", "Competition", "Certification"];

export function Achievements() {
    const { t, language } = useLanguage();
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const achievements = achievementsData[language];
    const stats = achievementStats[language];
    const filteredAchievements =
        activeCategory === "All"
            ? achievements
            : achievements.filter((a) => a.category === activeCategory);

    return (
        <section
            id="awards"
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
                    <h2 className="text-sm font-semibold text-yellow-400 uppercase tracking-widest mb-3">
                        {t("achievements.subtitle")}
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {t("achievements.title")}
                    </h3>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        {t("achievements.description")}
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full mt-6" />
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
                        const translationKey = `achievements.filter.${category
                            .toLowerCase()
                            .replace(" ", "")}` as string;
                        return (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${
                                    activeCategory === category
                                        ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg shadow-yellow-500/30"
                                        : "bg-white/5 text-neutral-300 hover:bg-white/10 border border-white/10"
                                }`}
                            >
                                {t(translationKey)}
                            </button>
                        );
                    })}
                </motion.div>

                {/* Achievements Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredAchievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-500/50 transition-all duration-500"
                        >
                            {/* Achievement Image */}
                            <div
                                className="relative h-56 overflow-hidden cursor-pointer"
                                onClick={() =>
                                    setSelectedImage(achievement.image)
                                }
                            >
                                <Image
                                    src={achievement.image}
                                    alt={achievement.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />

                                {/* Year Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 text-xs font-bold bg-black/60 text-yellow-400 rounded-full backdrop-blur-sm border border-yellow-500/30">
                                        {achievement.year}
                                    </span>
                                </div>

                                {/* Award Badge */}
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-yellow-500/80 to-orange-500/80 text-white rounded-full backdrop-blur-sm">
                                        {achievement.award}
                                    </span>
                                </div>

                                {/* Zoom Icon on Hover */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <div className="p-3 bg-white/20 rounded-full">
                                        <svg
                                            className="w-8 h-8 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                                            />
                                        </svg>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Achievement Info */}
                            <div className="p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-2 py-1 text-xs bg-orange-500/20 text-orange-400 rounded-md border border-orange-500/30">
                                        {achievement.category}
                                    </span>
                                </div>

                                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors line-clamp-2">
                                    {achievement.title}
                                </h4>
                                <p className="text-neutral-400 text-sm line-clamp-3">
                                    {achievement.description}
                                </p>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-bl-full" />
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                            viewport={{ once: true }}
                            className="text-center p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-yellow-500/50 transition-all"
                        >
                            <div className="text-4xl mb-3">{stat.icon}</div>
                            <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-neutral-400">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Image Lightbox Modal */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        className="relative max-w-5xl w-full h-[80vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage}
                            alt="Achievement"
                            fill
                            className="object-contain"
                        />
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
                        >
                            <svg
                                className="w-6 h-6 text-white"
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
                    </motion.div>
                </motion.div>
            )}

            {/* Background Decorations */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
}
