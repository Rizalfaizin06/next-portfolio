export const translations = {
    id: {
        // Navbar
        "nav.home": "Beranda",
        "nav.about": "Tentang",
        "nav.projects": "Proyek",
        "nav.awards": "Penghargaan",
        "nav.experience": "Pengalaman",
        "nav.contact": "Hubungi Saya",

        // Spotlight
        "spotlight.intro": "Perkenalkan diri saya",
        "spotlight.greeting": "Rizal Faizin Firdaus",
        "spotlight.role": "Web Developer & IT Specialist",
        "spotlight.description":
            "Fullstack Developer dengan pengalaman di IT Support, IoT Engineering, dan Network Engineering. Fokus pada solusi teknologi yang efisien, reliable, dan berdampak.",

        // About Me - Stats
        "about.years": "Tahun",
        "about.experience": "Pengalaman",
        "about.projects": "Proyek",
        "about.completed": "Selesai",
        "about.certifications": "Sertifikasi",
        "about.earned": "Diraih",
        "about.techStack": "Tech Stack",
        "about.mastered": "Dikuasai",

        // About Me - Bio
        "about.bio.title": "Tentang Saya",
        "about.bio.paragraph1":
            "Saya adalah Fullstack Developer dengan pengalaman lebih dari 4 tahun di bidang pengembangan web, aplikasi mobile, IoT, dan manajemen jaringan. Memiliki kemampuan di Frontend (React, Next.js, Flutter) dan Backend (Node.js, Express, Laravel), serta keahlian dalam infrastruktur IT (MikroTik, Cisco, Linux Server).",
        "about.bio.paragraph2":
            "Telah menyelesaikan lebih dari 17 proyek mulai dari sistem informasi sekolah, e-commerce, aplikasi IoT untuk masjid dan institusi pendidikan, hingga sistem manajemen keuangan siswa berbasis kartu OSIS. Berpengalaman dalam memimpin proyek multimedia, mengelola infrastruktur jaringan kampus, dan memberikan solusi teknologi end-to-end untuk berbagai klien.",

        // About Me - What I Do
        "about.whatIDo": "Yang Saya Kerjakan",
        "about.webDev.title": "Web Development",
        "about.webDev.desc":
            "Fullstack development dengan React, Next.js, Node.js, Express, dan Laravel untuk aplikasi web yang scalable dan performant.",
        "about.mobile.title": "Mobile Development",
        "about.mobile.desc":
            "Pengembangan aplikasi mobile native dan cross-platform menggunakan Flutter dan Android Studio dengan UI/UX yang optimal.",
        "about.iot.title": "IoT Solutions",
        "about.iot.desc":
            "Desain dan implementasi sistem IoT dengan Arduino, ESP32, sensor, relay, dan dashboard real-time untuk automation dan monitoring.",
        "about.network.title": "Network Engineering",
        "about.network.desc":
            "Konfigurasi dan manajemen jaringan menggunakan MikroTik, Cisco, routing, firewall, VPN, dan optimasi infrastruktur IT.",

        // Timeline
        "timeline.title": "Pengalaman Profesional",
        "timeline.viewMore": "Lihat Pengalaman Lainnya",
        "timeline.viewLess": "Sembunyikan",
        "timeline.present": "Sekarang",

        // Portfolio Projects
        "projects.title": "Proyek Unggulan",
        "projects.filter.all": "Semua",
        "projects.filter.webApp": "Web App",
        "projects.filter.iot": "IoT",
        "projects.filter.mobile": "Mobile App",
        "projects.filter.system": "Sistem",
        "projects.viewDetails": "Lihat Detail",

        // Achievements
        "achievements.title": "Pencapaian & Sertifikasi",
        "achievements.filter.all": "Semua",
        "achievements.filter.competition": "Kompetisi",
        "achievements.filter.award": "Penghargaan",
        "achievements.filter.leadership": "Kepemimpinan",
        "achievements.filter.certification": "Sertifikasi",
    },
    en: {
        // Navbar
        "nav.home": "Home",
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.awards": "Awards",
        "nav.experience": "Experience",
        "nav.contact": "Contact Me",

        // Spotlight
        "spotlight.intro": "Let me Introduce myself",
        "spotlight.greeting": "Rizal Faizin Firdaus",
        "spotlight.role": "Web Developer & IT Specialist",
        "spotlight.description":
            "Fullstack Developer with experience in IT Support, IoT Engineering, and Network Engineering. Focused on efficient, reliable, and impactful technology solutions.",

        // About Me - Stats
        "about.years": "Years",
        "about.experience": "Experience",
        "about.projects": "Projects",
        "about.completed": "Completed",
        "about.certifications": "Certifications",
        "about.earned": "Earned",
        "about.techStack": "Tech Stack",
        "about.mastered": "Mastered",

        // About Me - Bio
        "about.bio.title": "About Me",
        "about.bio.paragraph1":
            "I am a Fullstack Developer with over 4 years of experience in web development, mobile applications, IoT, and network management. Proficient in Frontend (React, Next.js, Flutter) and Backend (Node.js, Express, Laravel), as well as IT infrastructure (MikroTik, Cisco, Linux Server).",
        "about.bio.paragraph2":
            "Successfully completed over 17 projects ranging from school information systems, e-commerce, IoT applications for mosques and educational institutions, to student financial management systems based on student ID cards. Experienced in leading multimedia projects, managing campus network infrastructure, and providing end-to-end technology solutions for various clients.",

        // About Me - What I Do
        "about.whatIDo": "What I Do",
        "about.webDev.title": "Web Development",
        "about.webDev.desc":
            "Fullstack development with React, Next.js, Node.js, Express, and Laravel for scalable and performant web applications.",
        "about.mobile.title": "Mobile Development",
        "about.mobile.desc":
            "Native and cross-platform mobile app development using Flutter and Android Studio with optimal UI/UX.",
        "about.iot.title": "IoT Solutions",
        "about.iot.desc":
            "Design and implementation of IoT systems with Arduino, ESP32, sensors, relays, and real-time dashboards for automation and monitoring.",
        "about.network.title": "Network Engineering",
        "about.network.desc":
            "Network configuration and management using MikroTik, Cisco, routing, firewall, VPN, and IT infrastructure optimization.",

        // Timeline
        "timeline.title": "Professional Experience",
        "timeline.viewMore": "View More Experiences",
        "timeline.viewLess": "Show Less",
        "timeline.present": "Present",

        // Portfolio Projects
        "projects.title": "Featured Projects",
        "projects.filter.all": "All",
        "projects.filter.webApp": "Web App",
        "projects.filter.iot": "IoT",
        "projects.filter.mobile": "Mobile App",
        "projects.filter.system": "System",
        "projects.viewDetails": "View Details",

        // Achievements
        "achievements.title": "Achievements & Certifications",
        "achievements.filter.all": "All",
        "achievements.filter.competition": "Competition",
        "achievements.filter.award": "Award",
        "achievements.filter.leadership": "Leadership",
        "achievements.filter.certification": "Certification",
    },
};

export type TranslationKey = keyof typeof translations.id;
