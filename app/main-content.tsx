"use client";
import { AboutMe } from "@/components/sections/about-me";
import { Achievements } from "@/components/sections/achievements";

import { PortfolioProjects } from "@/components/sections/portfolio-projects";
import { SpotlightContent } from "@/components/sections/spotlight";
import { TechStack } from "@/components/sections/tech-stack";
import { Timeline } from "@/components/sections/timeline";

export function MainContent() {
    return (
        <div className="overflow-x-hidden w-full">
            <SpotlightContent />
            <AboutMe />
            {/* <TechStack /> */}
            <PortfolioProjects />
            <Achievements />
            <Timeline />
        </div>
    );
}
