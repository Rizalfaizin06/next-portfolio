"use client";
import React from "react";
import { motion } from "motion/react";

export function RotateCard3D({
    width = "200%",
    height = "250px",

    // Animasi Default (bisa di-custom)
    rotate = [45, 115, 45], // rotate Z
    rotateX = [20, -15, 20], // rotate X
    rotateY = [0, 20, 0], // rotate Y ⬅️ Baru ditambahkan

    duration = 3,
}) {
    return (
        <div style={{ perspective: "400px" }}>
            <motion.div
                animate={{ rotate, rotateX, rotateY }}
                transition={{
                    duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="rounded-xl bg-gradient-to-br from-blue-500 to-sky-300 shadow-xl flex items-center justify-center"
                style={{
                    width,
                    height,
                    transformStyle: "preserve-3d",
                }}
            >
                <p className="text-white font-semibold text-xl">
                    3D Rotate Card
                </p>
            </motion.div>
        </div>
    );
}
