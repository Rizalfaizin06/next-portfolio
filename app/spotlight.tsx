"use client";
import { Spotlight } from "@/components/ui/spotlight-new";

export function SpotlightContent() {
    return (
        <div className="h-[50rem] -mt-14 w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight />
            <div className=" p-4 max-w-7xl mx-auto relative z-10  w-full pt-20 md:pt-0">
                <p className="mt-4 font-thin text-neutral-300 max-w-lg text-center mx-auto pb-10 text-2xl">
                    Let me Introduce myself
                </p>
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-5">
                    Hi, I’m Rizal, Developer
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-500 max-w-lg text-center mx-auto">
                    Saya developer perangkat lunak berpengalaman membangun
                    aplikasi web dan mobile yang responsif dan user-friendly,
                    serta selalu antusias belajar teknologi baru.
                </p>
            </div>
        </div>
    );
}
