export type Project = {
    id: number;
    title: string;
    description: string;
    fullDescription?: string;
    image: string;
    video?: string;
    category: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    features?: string[];
    screenshots?: string[];
};

export const projectsData = {
    id: [
        {
            id: 9,
            title: "Gampangin – Premium Sharing Management Platform",
            description:
                "Platform berbasis web untuk pengelolaan akun premium sharing dengan sistem pembayaran, referral, dan manajemen akses otomatis.",
            fullDescription:
                "Gampangin merupakan platform berbasis web yang dikembangkan untuk mempermudah pengelolaan akun premium sharing secara terpusat. Sistem ini menyediakan fitur manajemen user, pembelian akun premium melalui sistem pembayaran, serta mekanisme referral yang memberikan bonus atau potongan harga kepada pengguna. Selain itu, sistem dilengkapi dengan fitur validasi masa aktif akun dan pembagian akses premium secara otomatis. Proyek ini juga menerapkan CI/CD menggunakan GitHub Actions untuk memastikan proses build dan deployment ke server berjalan secara otomatis dan konsisten.",
            image: "/images/projects/gampangin/thumbnail.png",
            video: "https://www.youtube.com/embed/QYEdGRNe_PY?si=pkLvMXMbLUCrIcz4",
            category: "Web App",
            technologies: [
                "Laravel",
                "MySQL",
                "PHP",
                "GitHub Actions",
                "CI/CD",
                "REST API",
            ],
            liveUrl: "https://gampangin.my.id/",
            githubUrl: "https://gampangin.my.id/",
            features: [
                "Sistem CRUD user untuk pengelolaan akun premium sharing",
                "Fitur payment untuk pembelian akun premium",
                "Sistem referral dengan bonus dan potongan harga",
                "Manajemen akun premium sharing (validasi masa aktif & pembagian akses)",
                "Otomatisasi deployment menggunakan CI/CD GitHub Actions",
                "Manajemen hak akses pengguna",
            ],
            screenshots: [
                "/images/projects/gampangin/1.png",
                "/images/projects/gampangin/2.png",
                "/images/projects/gampangin/3.png",
                "/images/projects/gampangin/4.png",
                "/images/projects/gampangin/5.png",
            ],
        },
        {
            id: 0,
            title: "IoT Energy Monitoring & Automation System",
            description:
                "Sistem monitoring dan otomatisasi energi listrik berbasis IoT untuk meningkatkan efisiensi penggunaan listrik di lingkungan kampus.",
            fullDescription:
                "Sistem ini merupakan prototipe monitoring dan otomatisasi energi listrik berbasis Internet of Things (IoT) yang diterapkan di lingkungan kampus. Sistem memanfaatkan perangkat IoT berbasis ESP32 yang terintegrasi dengan sensor daya, sensor okupansi, dan aktuator untuk memantau konsumsi listrik secara real-time serta mengontrol perangkat elektronik secara otomatis maupun manual. Data dikirim ke backend server dan divisualisasikan melalui dashboard web interaktif untuk membantu pengelola kampus menganalisis pola penggunaan energi, mengurangi pemborosan listrik, dan meningkatkan efisiensi operasional berbasis data.",
            image: "/images/projects/roomon/thumbnail.png",
            video: "https://www.youtube.com/embed/JBeOXN_VDiI?si=pImbt_flxCSm-g_O",
            category: "IoT",
            technologies: [
                "ESP32",
                "Node.js",
                "Express.js",
                "React",
                "REST API",
                "WebSocket",
                "MariaDB",
            ],
            liveUrl: "https://roomon.rcl.my.id/",
            githubUrl: "#",
            features: [
                "Monitoring konsumsi energi listrik secara real-time",
                "Otomatisasi perangkat listrik berbasis okupansi ruangan",
                "Kontrol perangkat jarak jauh melalui dashboard web",
                "Visualisasi data energi (daya, kWh, biaya, peak usage)",
                "WebSocket untuk update data real-time",
                "Pencatatan data historis dan analisis efisiensi energi",
                "Sistem autentikasi pengguna (JWT)",
            ],
            screenshots: [
                "/images/projects/roomon/1.png",
                "/images/projects/roomon/2.png",
                "/images/projects/roomon/3.png",
                "/images/projects/roomon/4.png",
                "/images/projects/roomon/5.png",
                "/images/projects/roomon/6.png",
                "/images/projects/roomon/7.png",
                "/images/projects/roomon/8.png",
                "/images/projects/roomon/9.png",
                "/images/projects/roomon/10.png",
            ],
        },
        {
            id: 20,
            title: "IPJ Redesign – Portal Informasi Pangan Jakarta",
            description:
                "Portal resmi Pemerintah Provinsi DKI Jakarta untuk penyajian dan pengelolaan data informasi pangan secara terpusat dan terintegrasi.",
            fullDescription:
                "IPJ Redesign merupakan proyek pengembangan ulang Portal Informasi Pangan Jakarta yang bertujuan meningkatkan performa, keamanan, dan keandalan sistem dalam penyajian data pangan kepada publik. Pada proyek ini, sistem backend dibangun untuk menangani pengelolaan metadata, penyediaan data terstruktur, serta pembuatan laporan dalam format PDF dan Excel. Backend juga dioptimalkan dengan mekanisme caching menggunakan Redis untuk menjaga integritas data dan meningkatkan performa akses, serta dilengkapi dengan pengamanan API menggunakan JWT dan dokumentasi API berbasis Swagger.",
            image: "/images/projects/ipj/thumbnail.png",
            category: "Web App",
            technologies: [
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "Redis",
                "PDFKit",
                "ExcelJS",
                "JWT",
                "Swagger",
            ],
            liveUrl: "https://infopangan.jakarta.go.id/",
            githubUrl: "#",
            features: [
                "Pengembangan REST API untuk metadata pangan",
                "Pembuatan dan preview laporan PDF",
                "Export data laporan ke format Excel",
                "Optimasi query database PostgreSQL",
                "Caching data menggunakan Redis",
                "Keamanan API menggunakan JWT",
                "Dokumentasi API dengan Swagger",
            ],
            screenshots: [
                "/images/projects/ipj/1.png",
                "/images/projects/ipj/2.png",
                "/images/projects/ipj/3.png",
                "/images/projects/ipj/4.png",
                "/images/projects/ipj/5.png",
            ],
        },
        {
            id: 10,
            title: "Quran Hifz – Aplikasi Hafalan Al-Qur'an",
            description:
                "Aplikasi mobile untuk membantu proses hafalan Al-Qur'an dengan sistem backend yang aman, terstruktur, dan teroptimasi.",
            fullDescription:
                "Quran Hifz merupakan aplikasi mobile yang dirancang untuk membantu pengguna dalam proses menghafal Al-Qur'an melalui sistem yang terstruktur dan mudah digunakan. Pada proyek ini, backend system dikembangkan untuk menangani berbagai kebutuhan aplikasi seperti pengelolaan data hafalan, autentikasi pengguna, serta penyediaan API yang stabil dan aman. Fokus utama pengembangan mencakup penanganan alur sistem (flow), perbaikan permasalahan timezone, integritas data, caching menggunakan Redis, serta penerapan unit testing dan endpoint testing untuk memastikan kualitas dan keandalan sistem.",
            image: "/images/projects/hifz/thumbnail.png",
            category: "Web App",
            technologies: [
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "Redis",
                "JWT",
                "Swagger",
                "Jest",
                "Supertest",
            ],
            liveUrl:
                "https://play.google.com/store/apps/details?id=id.bigio.dzikra.quran",
            githubUrl: "#",
            features: [
                "Pengembangan REST API untuk kebutuhan aplikasi mobile",
                "Perbaikan dan optimasi flow sistem backend",
                "Penanganan permasalahan timezone",
                "Unit testing dan endpoint testing menggunakan Jest & Supertest",
                "Caching data menggunakan Redis",
                "Optimasi query PostgreSQL",
                "Keamanan API menggunakan JWT",
                "Dokumentasi API dengan Swagger",
            ],
            screenshots: [
                "/images/projects/hifz/1.png",
                "/images/projects/hifz/2.png",
            ],
        },
        {
            id: 2,
            title: "Student Financial Management",
            description:
                "Sistem IoT untuk pengelolaan keuangan siswa dengan kartu OSIS sebagai alat pembayaran digital di kantin sekolah. Juara 1 Krenova Kab. Grobogan.",
            fullDescription:
                "Sistem IoT untuk pengelolaan keuangan siswa dengan kartu OSIS sebagai alat pembayaran digital di kantin sekolah. Sistem ini terintegrasi dengan database siswa dan memungkinkan orang tua untuk memantau pengeluaran anak. Proyek ini berhasil meraih Juara 1 Krenova Kabupaten Grobogan.",
            image: "/images/projects/sfm/thumbnail.png",
            category: "IoT",
            technologies: ["IoT", "Web App", "PWA", "RFID"],
            liveUrl: "#",
            githubUrl: "#",
            features: [
                "Pembayaran cashless dengan kartu OSIS",
                "Dashboard orang tua untuk monitoring",
                "Laporan keuangan real-time",
                "Top-up saldo via mobile app",
            ],
            screenshots: [
                "/images/projects/sfm/1.png",
                "/images/projects/sfm/2.png",
                "/images/projects/sfm/3.png",
                "/images/projects/sfm/4.png",
                "/images/projects/sfm/5.png",
                "/images/projects/sfm/6.png",
                "/images/projects/sfm/7.png",
                "/images/projects/sfm/8.png",
            ],
        },
        {
            id: 3,
            title: "Smart Thermometer & Record",
            description:
                "Sistem perpustakaan digital dengan pemindaian suhu dan kartu OSIS untuk meminjam buku otomatis. Juara Harapan 1 Krenova Prov. Jateng.",
            fullDescription:
                "Sistem perpustakaan digital dengan pemindaian suhu dan kartu OSIS untuk meminjam buku otomatis. Dibuat saat pandemi COVID-19 untuk memastikan keamanan pengunjung perpustakaan. Proyek ini berhasil meraih Juara Harapan 1 Krenova Provinsi Jawa Tengah.",
            image: "/images/projects/star/thumbnail.png",
            category: "IoT",
            technologies: ["IoT", "Web App", "Arduino", "Database"],
            liveUrl: "#",
            githubUrl: "#",
            features: [
                "Pemindaian suhu otomatis",
                "Peminjaman buku dengan kartu OSIS",
                "Rekam jejak pengunjung",
                "Dashboard admin untuk monitoring",
                "Email Peringatan Pengembalian Buku",
            ],
            screenshots: [
                "/images/projects/star/1.png",
                "/images/projects/star/2.png",
                "/images/projects/star/3.png",
                "/images/projects/star/4.png",
            ],
        },
    ],
    en: [
        {
            id: 9,
            title: "Gampangin – Premium Sharing Management Platform",
            description:
                "Web-based platform for managing premium sharing accounts with payment system, referral, and automated access management.",
            fullDescription:
                "Gampangin is a web-based platform developed to facilitate centralized premium sharing account management. The system provides user management features, premium account purchases through payment systems, and referral mechanisms that provide bonuses or discounts to users. Additionally, the system is equipped with account validity validation features and automatic premium access distribution. This project also implements CI/CD using GitHub Actions to ensure the build and deployment process to the server runs automatically and consistently.",
            image: "/images/projects/gampangin/thumbnail.png",
            video: "https://www.youtube.com/embed/QYEdGRNe_PY?si=pkLvMXMbLUCrIcz4",
            category: "Web App",
            technologies: [
                "Laravel",
                "MySQL",
                "PHP",
                "GitHub Actions",
                "CI/CD",
                "REST API",
            ],
            liveUrl: "https://gampangin.my.id/",
            githubUrl: "https://gampangin.my.id/",
            features: [
                "User CRUD system for premium sharing account management",
                "Payment feature for premium account purchases",
                "Referral system with bonuses and discounts",
                "Premium sharing account management (validity validation & access distribution)",
                "Deployment automation using CI/CD GitHub Actions",
                "User access rights management",
            ],
            screenshots: [
                "/images/projects/gampangin/1.png",
                "/images/projects/gampangin/2.png",
                "/images/projects/gampangin/3.png",
                "/images/projects/gampangin/4.png",
                "/images/projects/gampangin/5.png",
            ],
        },
        {
            id: 0,
            title: "IoT Energy Monitoring & Automation System",
            description:
                "IoT-based electrical energy monitoring and automation system to improve electricity usage efficiency in campus environments.",
            fullDescription:
                "This system is a prototype of IoT-based electrical energy monitoring and automation implemented in a campus environment. The system utilizes ESP32-based IoT devices integrated with power sensors, occupancy sensors, and actuators to monitor electricity consumption in real-time and control electronic devices automatically or manually. Data is sent to the backend server and visualized through an interactive web dashboard to help campus managers analyze energy usage patterns, reduce electricity waste, and improve data-driven operational efficiency.",
            image: "/images/projects/roomon/thumbnail.png",
            video: "https://www.youtube.com/embed/JBeOXN_VDiI?si=pImbt_flxCSm-g_O",
            category: "IoT",
            technologies: [
                "ESP32",
                "Node.js",
                "Express.js",
                "React",
                "REST API",
                "WebSocket",
                "MariaDB",
            ],
            liveUrl: "https://roomon.rcl.my.id/",
            githubUrl: "#",
            features: [
                "Real-time electrical energy consumption monitoring",
                "Electrical device automation based on room occupancy",
                "Remote device control through web dashboard",
                "Energy data visualization (power, kWh, cost, peak usage)",
                "WebSocket for real-time data updates",
                "Historical data recording and energy efficiency analysis",
                "User authentication system (JWT)",
            ],
            screenshots: [
                "/images/projects/roomon/1.png",
                "/images/projects/roomon/2.png",
                "/images/projects/roomon/3.png",
                "/images/projects/roomon/4.png",
                "/images/projects/roomon/5.png",
                "/images/projects/roomon/6.png",
                "/images/projects/roomon/7.png",
                "/images/projects/roomon/8.png",
                "/images/projects/roomon/9.png",
                "/images/projects/roomon/10.png",
            ],
        },
        {
            id: 20,
            title: "IPJ Redesign – Jakarta Food Information Portal",
            description:
                "Official portal of the DKI Jakarta Provincial Government for centralized and integrated food information data presentation and management.",
            fullDescription:
                "IPJ Redesign is a redevelopment project of the Jakarta Food Information Portal aimed at improving performance, security, and system reliability in presenting food data to the public. In this project, the backend system was built to handle metadata management, structured data provision, and report generation in PDF and Excel formats. The backend was also optimized with caching mechanisms using Redis to maintain data integrity and improve access performance, and equipped with API security using JWT and Swagger-based API documentation.",
            image: "/images/projects/ipj/thumbnail.png",
            category: "Web App",
            technologies: [
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "Redis",
                "PDFKit",
                "ExcelJS",
                "JWT",
                "Swagger",
            ],
            liveUrl: "https://infopangan.jakarta.go.id/",
            githubUrl: "#",
            features: [
                "REST API development for food metadata",
                "PDF report creation and preview",
                "Export report data to Excel format",
                "PostgreSQL database query optimization",
                "Data caching using Redis",
                "API security using JWT",
                "API documentation with Swagger",
            ],
            screenshots: [
                "/images/projects/ipj/1.png",
                "/images/projects/ipj/2.png",
                "/images/projects/ipj/3.png",
                "/images/projects/ipj/4.png",
                "/images/projects/ipj/5.png",
            ],
        },
        {
            id: 10,
            title: "Quran Hifz – Quran Memorization Application",
            description:
                "Mobile application to assist in Quran memorization process with a secure, structured, and optimized backend system.",
            fullDescription:
                "Quran Hifz is a mobile application designed to help users in the Quran memorization process through a structured and easy-to-use system. In this project, the backend system was developed to handle various application needs such as memorization data management, user authentication, and provision of stable and secure APIs. The main development focus includes handling system flow, fixing timezone issues, data integrity, caching using Redis, and implementing unit testing and endpoint testing to ensure system quality and reliability.",
            image: "/images/projects/hifz/thumbnail.png",
            category: "Web App",
            technologies: [
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "Redis",
                "JWT",
                "Swagger",
                "Jest",
                "Supertest",
            ],
            liveUrl:
                "https://play.google.com/store/apps/details?id=id.bigio.dzikra.quran",
            githubUrl: "#",
            features: [
                "REST API development for mobile application needs",
                "Backend system flow fixes and optimization",
                "Timezone issue handling",
                "Unit testing and endpoint testing using Jest & Supertest",
                "Data caching using Redis",
                "PostgreSQL query optimization",
                "API security using JWT",
                "API documentation with Swagger",
            ],
            screenshots: [
                "/images/projects/hifz/1.png",
                "/images/projects/hifz/2.png",
            ],
        },
        {
            id: 2,
            title: "Student Financial Management",
            description:
                "IoT system for student financial management with student ID card as digital payment tool in school canteen. 1st Winner of Krenova Grobogan Regency.",
            fullDescription:
                "IoT system for student financial management with student ID card as digital payment tool in school canteen. The system is integrated with the student database and allows parents to monitor their children's expenses. This project successfully won 1st place in Krenova Grobogan Regency.",
            image: "/images/projects/sfm/thumbnail.png",
            category: "IoT",
            technologies: ["IoT", "Web App", "PWA", "RFID"],
            liveUrl: "#",
            githubUrl: "#",
            features: [
                "Cashless payment with student ID card",
                "Parent dashboard for monitoring",
                "Real-time financial reports",
                "Balance top-up via mobile app",
            ],
            screenshots: [
                "/images/projects/sfm/1.png",
                "/images/projects/sfm/2.png",
                "/images/projects/sfm/3.png",
                "/images/projects/sfm/4.png",
                "/images/projects/sfm/5.png",
                "/images/projects/sfm/6.png",
                "/images/projects/sfm/7.png",
                "/images/projects/sfm/8.png",
            ],
        },
        {
            id: 3,
            title: "Smart Thermometer & Record",
            description:
                "Digital library system with temperature scanning and student ID card for automatic book borrowing. 1st Runner-up Krenova Central Java Province.",
            fullDescription:
                "Digital library system with temperature scanning and student ID card for automatic book borrowing. Created during the COVID-19 pandemic to ensure library visitor safety. This project successfully won 1st Runner-up in Krenova Central Java Province.",
            image: "/images/projects/star/thumbnail.png",
            category: "IoT",
            technologies: ["IoT", "Web App", "Arduino", "Database"],
            liveUrl: "#",
            githubUrl: "#",
            features: [
                "Automatic temperature scanning",
                "Book borrowing with student ID card",
                "Visitor tracking record",
                "Admin dashboard for monitoring",
                "Book return reminder email",
            ],
            screenshots: [
                "/images/projects/star/1.png",
                "/images/projects/star/2.png",
                "/images/projects/star/3.png",
                "/images/projects/star/4.png",
            ],
        },
    ],
};
