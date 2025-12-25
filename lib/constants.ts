// Contact & Social Media Links
// =============================
// File ini berisi semua link kontak dan social media yang digunakan di seluruh aplikasi.
// Jika Anda ingin mengubah nomor WhatsApp atau link lainnya, cukup ubah di sini
// dan semua tombol CTA di aplikasi akan otomatis berubah.

export const CONTACT = {
    // WhatsApp link - GANTI NOMOR INI dengan nomor WhatsApp Anda
    // Format: 62xxx tanpa tanda + atau spasi
    // Contoh: untuk +62 812-3456-7890, gunakan 6281234567890
    whatsapp:
        "https://wa.me/628994183032?text=Halo%20Rizal,%20saya%20tertarik%20bekerja%20sama%20dengan%20Anda",

    // Email - ganti dengan email Anda
    email1: "mailto:rizalfaizinfirdaus@gmail.com",
    email2: "mailto:hello@rizalscompanylab.my.id",

    // Social Media (opsional untuk masa depan)
    linkedin: "https://www.linkedin.com/in/rizal-ff",
    github: "https://github.com/rizalfaizin06",
} as const;

export const DISPLAY_CONTACT = {
    // WhatsApp link - GANTI NOMOR INI dengan nomor WhatsApp Anda
    // Format: 62xxx tanpa tanda + atau spasi
    // Contoh: untuk +62 812-3456-7890, gunakan 6281234567890
    whatsapp: "+62 899-418-3032",

    // Email - ganti dengan email Anda
    email1: "rizalfaizinfirdaus@gmail.com",
    email2: "hello@rizalscompanylab.my.id",

    // Social Media (opsional untuk masa depan)
    linkedin: "Rizal Faizin Firdaus",
    github: "rizalfaizin06",
} as const;

// Export individual untuk akses yang lebih mudah
export const WHATSAPP_LINK = CONTACT.whatsapp;
export const EMAIL_LINK = CONTACT.email1;
