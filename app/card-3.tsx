"use client";
import React from "react";
import { motion } from "motion/react";

function Card3D({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            animate={{
                rotate: [50, 115, 50],
                rotateX: [25, -22, 25],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            }}
            className="rounded-xl shadow-xl bg-gradient-to-br from-blue-500 to-sky-300 flex items-center justify-center text-white font-semibold text-xl"
            style={{
                transformStyle: "preserve-3d",
                perspective: "450px",
            }}
        >
            {children}
        </motion.div>
    );
}

export function ThreeCardGrid() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-neutral-900">
            <div className="grid gap-4 grid-cols-[300px_560px]">
                {/* Kolom kiri 300px, kanan 560px */}

                {/* LEFT TOP CARD */}
                <div className="h-[220px] w-[300px]">
                    <Card3D>Card A</Card3D>
                </div>

                {/* RIGHT BIG CARD */}
                <div className="row-span-2 h-[450px] w-[560px]">
                    <Card3D>BIG CARD</Card3D>
                </div>

                {/* LEFT BOTTOM CARD */}
                <div className="h-[220px] w-[300px]">
                    <Card3D>Card B</Card3D>
                </div>
            </div>
        </div>
    );
}
