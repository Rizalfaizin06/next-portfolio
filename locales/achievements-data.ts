export type Achievement = {
    id: number;
    title: string;
    description: string;
    year: string;
    category: string;
    image: string;
    award: string;
};

export const achievementsData = {
    id: [
        {
            id: 1,
            title: "Wisudawan Terbaik",
            description:
                "Meraih predikat Wisudawan Terbaik tingkat universitas berkat konsistensi pencapaian akademik, kontribusi aktif di organisasi, dan keterlibatan dalam kegiatan teknologi kampus.",
            year: "2025",
            category: "Award",
            image: "/images/awards/wisudawan-terbaik.png",
            award: "🏆 Best Graduate",
        },
        {
            id: 2,
            title: "Juara 1 IT Network System Administration",
            description:
                "Juara 1 dalam lomba IT Network System Administrator dengan fokus pada konfigurasi server Linux dan Windows serta pengelolaan jaringan komputer.",
            year: "2020",
            category: "Competition",
            image: "/images/awards/it-nsa.png",
            award: "🥇 First Place",
        },
        {
            id: 3,
            title: "Juara 1 Krenova Kab. Grobogan",
            description:
                "Juara 1 Krenova (Kreativitas dan Inovasi) dengan proyek Student Financial Management - sistem IoT untuk pengelolaan keuangan siswa menggunakan kartu OSIS.",
            year: "2023",
            category: "Competition",
            image: "/images/awards/krenova-2023.png",
            award: "🥇 First Place",
        },
        {
            id: 4,
            title: "Juara Harapan 1 Krenova Prov. Jateng",
            description:
                "Juara Harapan 1 Krenova tingkat Provinsi Jawa Tengah dengan proyek Smart Thermometer and Record untuk penunjang Smart Library di SMK Negeri 1 Wirosari.",
            year: "2022",
            category: "Competition",
            image: "/images/awards/krenova-2022.png",
            award: "🏆 Harapan Terbaik",
        },
        {
            id: 10,
            title: "Juara 3 Krenova Kab. Grobogan",
            description:
                "Juara 3 Krenova tingkat Kabupaten Grobogan dengan proyek Smart Thermometer and Record untuk penunjang Smart Library di SMK Negeri 1 Wirosari.",
            year: "2021",
            category: "Competition",
            image: "/images/awards/krenova-2021.png",
            award: "🥉 3rd Best",
        },
        {
            id: 6,
            title: "Bangkit Academy Graduate",
            description:
                "Menyelesaikan program Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka dalam jalur Android Development dengan menyelesaikan seluruh modul.",
            year: "2024",
            category: "Certification",
            image: "/images/awards/bangkit-academy.png",
            award: "📜 Graduate",
        },
        {
            id: 7,
            title: "MTCNA - MikroTik Certified",
            description:
                "Mendapatkan sertifikasi MikroTik Certified Network Associate (MTCNA) untuk keahlian dalam konfigurasi dan manajemen jaringan menggunakan MikroTik RouterOS.",
            year: "2020",
            category: "Certification",
            image: "/images/awards/mtcna.png",
            award: "📜 Certified",
        },
        {
            id: 8,
            title: "CCNA - Introduction to Networks",
            description:
                "Menyelesaikan CCNAv7: Introduction to Networks dari Cisco Networking Academy.",
            year: "2023-2025",
            category: "Certification",
            image: "/images/awards/ccna-v7.png",
            award: "📜 Certified",
        },
        {
            id: 9,
            title: "CCNA - Switching, Routing, and Wireless Essentials",
            description:
                "Menyelesaikan CCNA: Switching, Routing, and Wireless Essentials dari Cisco Networking Academy.",
            year: "2023-2025",
            category: "Certification",
            image: "/images/awards/ccna-switching.png",
            award: "📜 Certified",
        },
    ],
    en: [
        {
            id: 1,
            title: "Best Graduate",
            description:
                "Achieved Best Graduate award at university level for consistent academic excellence, active organizational contributions, and involvement in campus technology activities.",
            year: "2025",
            category: "Award",
            image: "/images/awards/wisudawan-terbaik.png",
            award: "🏆 Best Graduate",
        },
        {
            id: 2,
            title: "1st Place IT Network System Administration",
            description:
                "1st place winner in IT Network System Administrator competition focusing on Linux and Windows server configuration and computer network management.",
            year: "2020",
            category: "Competition",
            image: "/images/awards/it-nsa.png",
            award: "🥇 First Place",
        },
        {
            id: 3,
            title: "1st Place Krenova Grobogan Regency",
            description:
                "1st place winner in Krenova (Creativity and Innovation) with Student Financial Management project - IoT system for student financial management using student ID card.",
            year: "2023",
            category: "Competition",
            image: "/images/awards/krenova-2023.png",
            award: "🥇 First Place",
        },
        {
            id: 4,
            title: "1st Runner-up Krenova Central Java Province",
            description:
                "1st Runner-up in Krenova at Central Java Province level with Smart Thermometer and Record project for Smart Library support at SMK Negeri 1 Wirosari.",
            year: "2022",
            category: "Competition",
            image: "/images/awards/krenova-2022.png",
            award: "🏆 Runner-up",
        },
        {
            id: 10,
            title: "3rd Place Krenova Grobogan Regency",
            description:
                "3rd place winner in Krenova at Grobogan Regency level with Smart Thermometer and Record project for Smart Library support at SMK Negeri 1 Wirosari.",
            year: "2021",
            category: "Competition",
            image: "/images/awards/krenova-2021.png",
            award: "🥉 3rd Place",
        },
        {
            id: 6,
            title: "Bangkit Academy Graduate",
            description:
                "Completed Bangkit Academy program led by Google, Tokopedia, Gojek, & Traveloka in Android Development track by finishing all modules.",
            year: "2024",
            category: "Certification",
            image: "/images/awards/bangkit-academy.png",
            award: "📜 Graduate",
        },
        {
            id: 7,
            title: "MTCNA - MikroTik Certified",
            description:
                "Obtained MikroTik Certified Network Associate (MTCNA) certification for expertise in network configuration and management using MikroTik RouterOS.",
            year: "2020",
            category: "Certification",
            image: "/images/awards/mtcna.png",
            award: "📜 Certified",
        },
        {
            id: 8,
            title: "CCNA - Introduction to Networks",
            description:
                "Completed CCNAv7: Introduction to Networks from Cisco Networking Academy.",
            year: "2023-2025",
            category: "Certification",
            image: "/images/awards/ccna-v7.png",
            award: "📜 Certified",
        },
        {
            id: 9,
            title: "CCNA - Switching, Routing, and Wireless Essentials",
            description:
                "Completed CCNA: Switching, Routing, and Wireless Essentials from Cisco Networking Academy.",
            year: "2023-2025",
            category: "Certification",
            image: "/images/awards/ccna-switching.png",
            award: "📜 Certified",
        },
    ],
};

export const achievementStats = {
    id: [
        { label: "Total Penghargaan", value: "6", icon: "🏆" },
        { label: "Kompetisi Dimenangkan", value: "4", icon: "🥇" },
        { label: "Sertifikasi", value: "3", icon: "📜" },
        { label: "Pengakuan", value: "15+", icon: "⭐" },
    ],
    en: [
        { label: "Total Awards", value: "6", icon: "🏆" },
        { label: "Competitions Won", value: "4", icon: "🥇" },
        { label: "Certifications", value: "3", icon: "📜" },
        { label: "Recognition", value: "15+", icon: "⭐" },
    ],
};
