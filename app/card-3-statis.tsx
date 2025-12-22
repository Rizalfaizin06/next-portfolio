"use client";
import React from "react";

function CardImage({ src }: { src: string }) {
    return (
        <div
            className="h-full rounded-xl shadow-xl overflow-hidden"
            style={{
                transformStyle: "preserve-3d",
                perspective: "400px",
            }}
        >
            <img src={src} alt="Card" className="w-full h-full object-cover" />
        </div>
    );
}

export function ThreeCardGridStatis() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-neutral-900">
            <div className="grid grid-cols-2 gap-4 w-[900px] h-[500px]">
                {/* LEFT TOP CARD */}
                <div className="h-72">
                    <CardImage src="/images/WISUDA-RIZAL.jpg" />
                </div>

                {/* RIGHT BIG CARD */}
                <div className="row-span-2 h-[500px]">
                    <CardImage src="/images/WISUDA-RIZAL.jpg" />
                </div>

                {/* LEFT BOTTOM CARD */}
                <div className="h-72">
                    <CardImage src="/images/WISUDA-RIZAL.jpg" />
                </div>
            </div>
        </div>
    );
}
