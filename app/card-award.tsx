import React from "react";

export function CardAward() {
    return (
        <div className="w-full min-h-screen bg-black text-white flex items-center justify-center p-10">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Text */}
                <div>
                    <h1 className="text-5xl font-bold mb-4">Penghargaan</h1>
                    <p className="text-gray-300 text-lg">
                        Beberapa momen terbaik yang berhasil kami abadikan.
                    </p>
                </div>

                {/* Right Cards */}
                <div className="flex gap-6 justify-center md:justify-end items-center">
                    <div className="flex flex-col gap-6">
                        <div className="w-36 h-40 rounded-3xl overflow-hidden rotate-[-4deg] animate-wobble bg-black/30">
                            <img
                                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-36 h-40 rounded-3xl overflow-hidden rotate-[3deg] animate-wobble2 bg-black/30">
                            <img
                                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="w-48 h-72 rounded-3xl overflow-hidden rotate-[6deg] animate-wobble3 bg-black/30">
                        <img
                            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
