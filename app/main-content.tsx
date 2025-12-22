"use client";
import { AboutMe } from "./about-me";
import { Achievements } from "./achievements";
import { ThreeCardGrid } from "./card-3";
import { ThreeCardGridStatis } from "./card-3-statis";
import { CareerContent } from "./career";
import { PortfolioProjects } from "./portfolio-projects";
import { SpotlightContent } from "./spotlight";
import { TechStack } from "./tech-stack";
import { Timeline } from "./timeline";

export function MainContent() {
    return (
        <div>
            <SpotlightContent />
            <AboutMe />
            <TechStack />
            <PortfolioProjects />
            <Achievements />
            {/* <CareerContent /> */}
            <Timeline />

            {/* <ThreeCardGridStatis /> */}
            {/* <div className="grid grid-cols-2 gap-10 p-10 bg-red-200">
                <div>
                    <RotateCard3D
                        width="50%"
                        height="200px"
                        rotate={[85, 95, 85]}
                        rotateX={[0, 0, 0]}
                        rotateY={[0, 0, 0]} // ➤ Tambahkan nilai
                        duration={4}
                    />
                </div>

                <div className="row-span-2">
                    <RotateCard3D
                        width="100%"
                        height="200px"
                        rotate={[90, 90, 90]}
                        rotateX={[0, 0, 0]}
                        rotateY={[0, 0, 0]} // ➤ Berbeda
                        duration={4}
                    />
                </div>

                <div>
                    <RotateCard3D
                        width="50%"
                        height="200px"
                        rotate={[95, 85, 95]}
                        rotateX={[0, 0, 0]}
                        rotateY={[0, 0, 0]} // ➤ Tambahkan nilai
                        duration={4}
                    />
                </div>
            </div> */}

            {/* <RotateCard3D />
            <ThreeCardGrid /> */}
            {/* <div className="container mx-auto p-8 pt-5">
                <h1 className="mb-4 text-center text-3xl font-bold">
                    Check the navbar at the top of the container
                </h1>
                <p className="mb-10 text-center text-sm text-zinc-500">
                    For demo purpose we have kept the position as{" "}
                    <span className="font-medium">Sticky</span>. Keep in mind
                    that this component is{" "}
                    <span className="font-medium">fixed</span> and will not move
                    when scrolling.
                </p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    {[
                        {
                            id: 1,
                            title: "The",
                            width: "md:col-span-1",
                            height: "h-60",
                            bg: "bg-neutral-100 dark:bg-neutral-800",
                        },
                        {
                            id: 2,
                            title: "First",
                            width: "md:col-span-2",
                            height: "h-60",
                            bg: "bg-neutral-100 dark:bg-neutral-800",
                        },
                        {
                            id: 3,
                            title: "Rule",
                            width: "md:col-span-1",
                            height: "h-60",
                            bg: "bg-neutral-100 dark:bg-neutral-800",
                        },
                        {
                            id: 4,
                            title: "Of",
                            width: "md:col-span-3",
                            height: "h-60",
                            bg: "bg-neutral-100 dark:bg-neutral-800",
                        },
                        {
                            id: 5,
                            title: "F",
                            width: "md:col-span-1",
                            height: "h-60",
                            bg: "bg-neutral-100 dark:bg-neutral-800",
                        },
                        {
                            id: 6,
                            title: "Club",
                            width: "md:col-span-2",
                            height: "h-60",
                            bg: "bg-neutral-100 dark:bg-neutral-800",
                        },
                        {
                            id: 7,
                            title: "Is",
                            width: "md:col-span-2",
                            height: "h-60",
                            bg: "bg-neutral-100 dark:bg-neutral-800",
                        },
                        {
                            id: 8,
                            title: "You",
                            width: "md:col-span-1",
                            height: "h-60",
                            bg: "bg-neutral-100 dark:bg-neutral-800",
                        },
                        {
                            id: 9,
                            title: "Do NOT TALK about",
                            width: "md:col-span-2",
                            height: "h-60",
                            bg: "bg-neutral-100 dark:bg-neutral-800",
                        },
                        {
                            id: 10,
                            title: "F Club",
                            width: "md:col-span-1",
                            height: "h-60",
                            bg: "bg-neutral-100 dark:bg-neutral-800",
                        },
                    ].map((box) => (
                        <div
                            key={box.id}
                            className={`${box.width} ${box.height} ${box.bg} flex items-center justify-center rounded-lg p-4 shadow-sm`}
                        >
                            <h2 className="text-xl font-medium">{box.title}</h2>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
}
