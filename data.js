/**
 * ========================================================
 * DATA & KONFIGURASI KEDAI KERSA
 * ========================================================
 * File ini memudahkan Anda untuk mengubah, menambah, atau
 * menghapus informasi website tanpa perlu menyentuh kode HTML.
 *
 * Cukup edit teks di dalam tanda kutip (" "), simpan file ini,
 * lalu refresh halaman di browser!
 * ========================================================
 */

const kedaiData = {
  // 1. Informasi Umum / Brand
  brand: {
    name: "Kedai Kersa",
    city: "Purwokerto",
    metaTitle: "Kedai Kersa - Ruang Santai & Nugas Purwokerto Dekat Unsoed",
    metaDescription: "Katalog & profil Kedai Kersa Purwokerto dekat Unsoed - tempat ngopi, santai, dan nugas nyaman dengan harga ramah mahasiswa."
  },

  // 2. Bagian Beranda (Hero Section)
  hero: {
    badge: "Spot Santai & Nugas Dekat Unsoed",
    title: "Seduhan Kopi Hangat, Ruang Tenang untuk Setiap Cerita & Tugasmu",
    description: "Hadir di Purwokerto sebagai ruang singgah yang nyaman bagi mahasiswa dan warga lokal. Nikmati seduhan kopi pilihan, camilan lezat, colokan melimpah di setiap sudut, dan Wi-Fi stabil dengan harga yang bersahabat.",
    ctaPrimary: {
      text: "Lihat Menu Kedai",
      href: "#menu"
    },
    ctaSecondary: {
      text: "Tentang Kami",
      href: "#about"
    },
    // Keunggulan singkat di bawah tombol CTA
    highlights: [
      { icon: "⚡", text: "Banyak Colokan & Wi-Fi Kencang" },
      { icon: "🎓", text: "Dekat Kampus Unsoed Purwokerto" },
      { icon: "🏷️", text: "Harga Ramah Mahasiswa" }
    ],
    // Gambar & badge mengambang di samping hero
    image: "images/Cafe.contoh.jpg",
    badgeTop: {
      rating: "4.9 / 5.0",
      label: "Favorit Mahasiswa"
    },
    badgeBottom: {
      city: "Purwokerto",
      label: "Dekat Kampus Unsoed"
    }
  },

  // 3. Bagian Tentang Kami (About Section)
  about: {
    badge: "Tentang Kami",
    title: "Mengenal Kedai Kersa",
    description: "Berangkat dari kata \"Kersa\" yang bermakna kehendak dan niat baik, Kedai Kersa hadir di Purwokerto sebagai ruang singgah yang nyaman bagi mahasiswa, pekerja kreatif, maupun komunitas lokal. Kami menyediakan tempat yang tenang untuk nugas, berdiskusi, atau sekadar rehat menikmati seduhan minuman dan camilan berkualitas dengan harga yang tetap bersahabat di kantong.",
    // Kartu keunggulan (fitur)
    features: [
      {
        icon: "🔌",
        title: "Ramah Nugas",
        desc: "Stopkontak di setiap meja dan jaringan Wi-Fi stabil untuk mendukung produktivitasmu."
      },
      {
        icon: "☕",
        title: "Rasa Otentik",
        desc: "Kombinasi bahan lokal pilihan menghasilkan seduhan minuman dan kudapan dengan cita rasa khas."
      },
      {
        icon: "🏷️",
        title: "Harga Mahasiswa",
        desc: "Sajian berkualitas tanpa bikin khawatir dompet, cocok untuk nongkrong santai setiap hari."
      }
    ]
  },

  // 4. Daftar Menu (Menu Section)
  // Untuk menambah menu baru, cukup tambahkan item baru di bawah:
  // { name: "Nama Menu", desc: "Deskripsi", price: "Rp xx.xxx", image: "images/nama-file.jpg" },
  menu: {
    badge: "Daftar Pilihan",
    title: "Menu Andalan Kedai Kersa",
    description: "Seduhan kopi pilihan, minuman segar, dan kudapan pendamping waktu santaimu.",
    items: [
      {
        name: "Kopi Susu Kersa",
        desc: "Espresso house blend dipadu susu segar dan gula aren alami.",
        price: "Rp 18.000",
        image: "images/milk-coffe.jpg"
      },
      {
        name: "Americano Klasik",
        desc: "Ekstraksi biji kopi lokal dengan cita rasa bersih dan aroma khas.",
        price: "Rp 15.000",
        image: "images/Americano-clasic.jpg"
      },
      {
        name: "Matcha Latte",
        desc: "Pure matcha Jepang berpadu lembutnya susu gurih.",
        price: "Rp 20.000",
        image: "images/matcha.jpg"
      },
      {
        name: "Roti Bakar Cokelat Keju",
        desc: "Roti panggang renyah berlimpah cokelat leleh dan parutan keju.",
        price: "Rp 16.000",
        image: "images/rotibakar.jpg"
      },
      {
        name: "Kentang Goreng Renyah",
        desc: "Potongan kentang gurih berbumbu saus cabai dan mayones.",
        price: "Rp 14.000",
        image: "images/kentangjpg.jpg"
      },
      {
        name: "Teh Telang Lemon",
        desc: "Seduhan bunga telang segar dengan perasan lemon asam-manis.",
        price: "Rp 15.000",
        image: "images/tehtelanglemon.jpg"
      }
    ]
  },

  // 5. Informasi Kontak & Footer
  contact: {
    tagline: "Ruang santai & nugas favoritmu di Purwokerto, dekat kampus Unsoed.",
    openingHoursTitle: "Jam Buka",
    openingHours: [
      "Senin – Jumat: 12.00 – 23.00",
      "Sabtu – Minggu: 09.00 – 24.00"
    ],
    locationTitle: "Lokasi",
    location: {
      address: "Jl. Kampus Unsoed, Purwokerto, Jawa Tengah",
      facilities: "Wi-Fi · Colokan · AC"
    },
    socialsTitle: "Hubungi Kami",
    socials: {
      whatsapp: {
        number: "+62 857-5473-7630",
        link: "https://wa.me/6285754737630"
      },
      instagram: {
        username: "@kedaikersa",
        link: "https://instagram.com/kedaikersa"
      },
      tiktok: {
        username: "@kedaikersa",
        link: "https://tiktok.com/@kedaikersa"
      }
    },
    copyright: "© 2026 Kedai Kersa. All rights reserved.",
    madeWith: "Dibuat dengan ☕ di Purwokerto."
  }
};

