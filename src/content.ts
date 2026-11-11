export type Language = "en" | "ms";

export type BilingualText = Record<Language, string>;
export type ServiceIcon =
  | "building"
  | "sparkle"
  | "broom"
  | "drop"
  | "leaf"
  | "house"
  | "wind"
  | "tool";

export interface ServiceGroup {
  id: string;
  title: BilingualText;
  description: BilingualText;
  services: {
    title: BilingualText;
    description: BilingualText;
    icon: ServiceIcon;
  }[];
}

export interface Project {
  id: string;
  title: string;
  location: string;
  scope: BilingualText;
  category: "commercial" | "residential";
  image: string;
}

export const copy = {
  en: {
    nav: {
      services: "Our services",
      about: "About SJDB",
      projects: "Our work",
      contact: "Contact",
      quote: "Get a quote",
      call: "Call us",
      menu: "Open navigation menu",
    },
    hero: {
      eyebrow: "CLEANING & FACILITIES MAINTENANCE",
      title1: "A cleaner space.",
      title2: "A better first",
      title3: "impression.",
      description:
        "Professional cleaning and facilities care for workplaces, homes and shared spaces. Thoughtful service, from the first conversation to the finishing touches.",
      primary: "Get a tailored quote",
      secondary: "Chat on WhatsApp",
      location: "Based in Sungai Buloh, Selangor",
      photoCaption: "Real people. A hands-on approach.",
      qualityLabel: "OUR COMMITMENT",
      qualityText: "Your satisfaction. Our priority.",
      trust1: "Trained personnel",
      trust2: "Supervised service",
      trust3: "Flexible cleaning plans",
    },
    clients: { label: "Selected clients from our company profile" },
    services: {
      eyebrow: "CARE FOR EVERY CORNER",
      title: "The right service for your space.",
      description:
        "From everyday upkeep to a thorough clean, explore a complete range of cleaning and facilities services shaped around your needs.",
      ask: "Enquire about this service",
      viewAll: "Discuss your requirements",
    },
    about: {
      eyebrow: "MEET SJDB",
      title: "Good work starts with people who care.",
      description:
        "SJDB Management and Services (M) Sdn Bhd, together with SJDB Facilities Resources, brings a practical, professional approach to cleaning and building maintenance. We combine skilled people, clear processes and close supervision to look after the spaces you depend on.",
      point1Title: "People prepared for the job",
      point1Text:
        "Our personnel receive training through practical demonstrations, work methods and written guidance.",
      point2Title: "Quality that stays in focus",
      point2Text:
        "Site supervisors and operations management oversee the work, with inspections and ongoing performance monitoring.",
      point3Title: "A plan that fits your premises",
      point3Text:
        "We work with clients and property management teams to agree on the scope, schedule and service requirements.",
      download: "Download company profile",
      photoCaption: "The SJDB team, at work and ready to help.",
    },
    projects: {
      eyebrow: "SPACES WE’VE CARED FOR",
      title: "Our work speaks through the details.",
      description:
        "A selection of commercial and residential properties featured in our 2026 company profile.",
      view: "View project",
      close: "Close project",
      all: "All projects",
      commercial: "Commercial",
      residential: "Residential",
      sourceNote: "Discover more of our work in the company profile.",
    },
    process: {
      eyebrow: "LET’S MAKE IT SIMPLE",
      title: "A clear path to a cleaner space.",
      step1Title: "Tell us what you need",
      step1Text:
        "Share your location, type of premises and the cleaning or maintenance service you have in mind.",
      step2Title: "Discuss your service plan",
      step2Text:
        "Speak with our team about the scope of work, preferred schedule and quotation for your premises.",
      step3Title: "Let us take care of the details",
      step3Text:
        "Once the plan is agreed, our personnel carry out the work with supervision and attention to quality.",
    },
    faq: {
      eyebrow: "A FEW HELPFUL ANSWERS",
      title: "Frequently asked questions",
      items: [
        {
          id: "regular-and-one-off-cleaning",
          question: "Does SJDB offer regular and one-off cleaning?",
          answer:
            "SJDB offers scheduled contract cleaning, periodic deep cleaning and one-off cleaning for events and other needs. Ask SJDB about emergency cleaning availability at your site.",
        },
        {
          id: "commercial-and-residential-cleaning",
          question: "Does SJDB clean homes and commercial premises?",
          answer:
            "SJDB offers spring cleaning and housekeeping for homes, and cleaning for offices, factories, shopping complexes and condominium common areas.",
        },
        {
          id: "requesting-a-quotation",
          question: "What does SJDB need for a cleaning quotation?",
          answer:
            "For a cleaning quotation, send SJDB your property location, type, approximate size, service needed and preferred schedule. Photos can help SJDB assess the work.",
        },
        {
          id: "post-renovation-and-construction-cleaning",
          question: "Does SJDB clean after renovation or construction?",
          answer:
            "SJDB provides cleaning before and after renovation, and cleans newly completed buildings before handover. Share your property details so SJDB can discuss the scope of work.",
        },
        {
          id: "sjdb-office-location",
          question: "Where is SJDB based?",
          answer:
            "SJDB’s main office is at No. 28G, Jalan DC 4/3, Desa Coalfields, 47000 Sungai Buloh, Selangor, Malaysia. Share your site location with SJDB to confirm service availability.",
        },
      ],
    },
    contact: {
      eyebrow: "LET’S TALK ABOUT YOUR SPACE",
      title: "A cleaner start is one conversation away.",
      description:
        "Tell us a little about your premises. Send an enquiry on WhatsApp, give us a call or email the team.",
      name: "Your name",
      namePlaceholder: "Full name or company name",
      phone: "Phone number",
      phonePlaceholder: "e.g. 012 345 6789",
      service: "Service needed",
      servicePlaceholder: "Choose a service",
      location: "Property location",
      locationPlaceholder: "e.g. Sungai Buloh, Selangor",
      message: "How can we help?",
      messagePlaceholder:
        "Tell us about your space, preferred schedule and any specific requirements.",
      whatsapp: "Send via WhatsApp",
      email: "Send via email",
      notice:
        "We’ll open your enquiry in WhatsApp or your email app. Review the message and press send to reach our team.",
      successWhatsApp:
        "Your enquiry is ready in WhatsApp. Review the message and send it to our team.",
      successEmail:
        "Your enquiry is ready in your email app. Review the email and send it to our team.",
      ready: "Open your prepared enquiry",
      callTitle: "Call our team",
      emailTitle: "Write to us",
      visitTitle: "Find our office",
      directions: "Get directions",
      office: "Office",
      mobile: "Mobile / WhatsApp",
      secondaryEmail: "Facilities enquiries",
    },
    footer: {
      description:
        "Professional cleaning and building facilities maintenance, with customer satisfaction and work quality at the heart of what we do.",
      services: "Explore",
      contact: "Get in touch",
      rights: "All rights reserved.",
      company: "SJDB Group of Companies",
      backTop: "Back to top",
    },
    floating: {
      label: "Chat with SJDB on WhatsApp",
      mobileCall: "Call us",
      mobileWhatsApp: "WhatsApp us",
    },
  },
  ms: {
    nav: {
      services: "Perkhidmatan",
      about: "Tentang SJDB",
      projects: "Projek kami",
      contact: "Hubungi",
      quote: "Dapatkan sebut harga",
      call: "Hubungi kami",
      menu: "Buka menu navigasi",
    },
    hero: {
      eyebrow: "PEMBERSIHAN & PENYELENGGARAAN FASILITI",
      title1: "Ruang lebih bersih.",
      title2: "Kesan pertama",
      title3: "lebih baik.",
      description:
        "Pembersihan dan penjagaan fasiliti secara profesional untuk tempat kerja, kediaman dan ruang bersama. Perkhidmatan teliti, dari perbincangan awal hingga sentuhan akhir.",
      primary: "Dapatkan sebut harga",
      secondary: "Sembang di WhatsApp",
      location: "Berpusat di Sungai Buloh, Selangor",
      photoCaption: "Pasukan sebenar. Kerja yang teliti.",
      qualityLabel: "KOMITMEN KAMI",
      qualityText: "Kepuasan anda. Keutamaan kami.",
      trust1: "Kakitangan terlatih",
      trust2: "Kerja diselia",
      trust3: "Pelan pembersihan fleksibel",
    },
    clients: { label: "Antara pelanggan dalam profil syarikat" },
    services: {
      eyebrow: "PENJAGAAN DI SETIAP SUDUT",
      title: "Perkhidmatan yang sesuai untuk ruang anda.",
      description:
        "Daripada penjagaan harian hingga pembersihan menyeluruh, terokai rangkaian perkhidmatan pembersihan dan fasiliti mengikut keperluan anda.",
      ask: "Tanya tentang perkhidmatan ini",
      viewAll: "Bincangkan keperluan anda",
    },
    about: {
      eyebrow: "KENALI SJDB",
      title: "Hasil kerja baik bermula dengan sikap prihatin.",
      description:
        "SJDB Management and Services (M) Sdn Bhd, bersama SJDB Facilities Resources, menawarkan pendekatan praktikal dan profesional dalam pembersihan serta penyelenggaraan bangunan. Kami menggabungkan tenaga kerja mahir, proses yang jelas dan penyeliaan rapi untuk menjaga ruang yang penting bagi anda.",
      point1Title: "Kakitangan yang bersedia",
      point1Text:
        "Kakitangan kami menerima latihan melalui demonstrasi praktikal, kaedah kerja dan panduan bertulis.",
      point2Title: "Kualiti sentiasa diutamakan",
      point2Text:
        "Penyelia tapak dan pihak pengurusan operasi memantau kerja melalui pemeriksaan serta penilaian prestasi berterusan.",
      point3Title: "Pelan mengikut keperluan premis",
      point3Text:
        "Kami bekerjasama dengan pelanggan dan pengurusan hartanah untuk menetapkan skop, jadual dan keperluan perkhidmatan.",
      download: "Muat turun profil syarikat",
      photoCaption: "Pasukan SJDB, sentiasa bersedia membantu.",
    },
    projects: {
      eyebrow: "RUANG YANG KAMI JAGA",
      title: "Ketelitian terserlah dalam hasil kerja.",
      description:
        "Antara hartanah komersial dan kediaman yang dipaparkan dalam profil syarikat kami bagi tahun 2026.",
      view: "Lihat projek",
      close: "Tutup projek",
      all: "Semua projek",
      commercial: "Komersial",
      residential: "Kediaman",
      sourceNote: "Lihat lebih banyak projek kami dalam profil syarikat.",
    },
    process: {
      eyebrow: "MUDAH UNTUK BERMULA",
      title: "Langkah mudah ke ruang yang lebih bersih.",
      step1Title: "Kongsikan keperluan anda",
      step1Text:
        "Beritahu kami lokasi, jenis premis dan perkhidmatan pembersihan atau penyelenggaraan yang anda perlukan.",
      step2Title: "Bincangkan pelan perkhidmatan",
      step2Text:
        "Bincang dengan pasukan kami tentang skop kerja, jadual pilihan dan sebut harga untuk premis anda.",
      step3Title: "Serahkan butirannya kepada kami",
      step3Text:
        "Selepas pelan dipersetujui, kakitangan kami melaksanakan kerja dengan penyeliaan dan penekanan terhadap kualiti.",
    },
    faq: {
      eyebrow: "JAWAPAN UNTUK ANDA",
      title: "Soalan lazim",
      items: [
        {
          id: "regular-and-one-off-cleaning",
          question:
            "Adakah SJDB menawarkan pembersihan berkala dan sekali sahaja?",
          answer:
            "SJDB menawarkan pembersihan kontrak berjadual, pembersihan menyeluruh secara berkala dan pembersihan sekali sahaja untuk acara atau keperluan lain. Hubungi SJDB untuk menyemak ketersediaan pembersihan kecemasan di lokasi anda.",
        },
        {
          id: "commercial-and-residential-cleaning",
          question: "Adakah SJDB membersihkan kediaman dan premis komersial?",
          answer:
            "SJDB menawarkan pembersihan menyeluruh dan pengemasan kediaman, serta pembersihan pejabat, kilang, kompleks beli-belah dan kawasan bersama kondominium.",
        },
        {
          id: "requesting-a-quotation",
          question: "Apakah maklumat yang SJDB perlukan untuk sebut harga pembersihan?",
          answer:
            "Untuk sebut harga pembersihan, berikan SJDB lokasi, jenis dan anggaran keluasan hartanah, perkhidmatan yang diperlukan serta jadual pilihan anda. Foto boleh membantu SJDB menilai kerja yang diperlukan.",
        },
        {
          id: "post-renovation-and-construction-cleaning",
          question:
            "Adakah SJDB menyediakan pembersihan selepas pengubahsuaian atau pembinaan?",
          answer:
            "SJDB menyediakan pembersihan sebelum dan selepas pengubahsuaian, serta pembersihan bangunan yang baru siap sebelum diserahkan. Berikan maklumat hartanah anda supaya SJDB dapat membincangkan skop kerja.",
        },
        {
          id: "sjdb-office-location",
          question: "Di manakah lokasi SJDB?",
          answer:
            "Pejabat utama SJDB terletak di No. 28G, Jalan DC 4/3, Desa Coalfields, 47000 Sungai Buloh, Selangor, Malaysia. Beritahu SJDB lokasi premis anda untuk menyemak ketersediaan perkhidmatan.",
        },
      ],
    },
    contact: {
      eyebrow: "BINCANGKAN KEPERLUAN RUANG ANDA",
      title: "Ruang lebih bersih bermula dengan satu perbualan.",
      description:
        "Kongsikan sedikit maklumat tentang premis anda. Hantar pertanyaan melalui WhatsApp, telefon atau e-mel kepada pasukan kami.",
      name: "Nama anda",
      namePlaceholder: "Nama penuh atau nama syarikat",
      phone: "Nombor telefon",
      phonePlaceholder: "cth. 012 345 6789",
      service: "Perkhidmatan diperlukan",
      servicePlaceholder: "Pilih perkhidmatan",
      location: "Lokasi hartanah",
      locationPlaceholder: "cth. Sungai Buloh, Selangor",
      message: "Bagaimana kami boleh membantu?",
      messagePlaceholder:
        "Ceritakan tentang ruang anda, jadual pilihan dan sebarang keperluan khusus.",
      whatsapp: "Hantar melalui WhatsApp",
      email: "Hantar melalui e-mel",
      notice:
        "Pertanyaan anda akan dibuka dalam WhatsApp atau aplikasi e-mel. Semak mesej dan tekan hantar untuk menghubungi pasukan kami.",
      successWhatsApp:
        "Pertanyaan anda telah disediakan dalam WhatsApp. Semak mesej dan hantarkan kepada pasukan kami.",
      successEmail:
        "Pertanyaan anda telah disediakan dalam aplikasi e-mel. Semak e-mel dan hantarkan kepada pasukan kami.",
      ready: "Buka mesej pertanyaan anda",
      callTitle: "Telefon pasukan kami",
      emailTitle: "E-mel kepada kami",
      visitTitle: "Lokasi pejabat kami",
      directions: "Dapatkan arah",
      office: "Pejabat",
      mobile: "Bimbit / WhatsApp",
      secondaryEmail: "Pertanyaan fasiliti",
    },
    footer: {
      description:
        "Pembersihan profesional dan penyelenggaraan fasiliti bangunan, dengan kepuasan pelanggan serta kualiti kerja sebagai keutamaan.",
      services: "Terokai",
      contact: "Hubungi kami",
      rights: "Hak cipta terpelihara.",
      company: "Kumpulan Syarikat SJDB",
      backTop: "Kembali ke atas",
    },
    floating: {
      label: "Berbual dengan SJDB di WhatsApp",
      mobileCall: "Telefon kami",
      mobileWhatsApp: "WhatsApp kami",
    },
  },
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "commercial",
    title: { en: "Commercial cleaning", ms: "Pembersihan komersial" },
    description: {
      en: "A clean, well-presented environment for your people and your business.",
      ms: "Persekitaran yang bersih dan terjaga untuk warga kerja serta perniagaan anda.",
    },
    services: [
      {
        title: {
          en: "Office & contract cleaning",
          ms: "Pembersihan pejabat & kontrak",
        },
        description: {
          en: "Scheduled cleaning for offices, buildings and shopping complexes.",
          ms: "Pembersihan berjadual untuk pejabat, bangunan dan kompleks beli-belah.",
        },
        icon: "building",
      },
      {
        title: {
          en: "Factory & industrial spaces",
          ms: "Kilang & ruang industri",
        },
        description: {
          en: "Cleaning for factories, workshops and warehouses.",
          ms: "Pembersihan kilang, bengkel dan gudang.",
        },
        icon: "tool",
      },
      {
        title: {
          en: "Common area cleaning",
          ms: "Pembersihan kawasan bersama",
        },
        description: {
          en: "Care for shared building spaces, car parks and basements.",
          ms: "Penjagaan ruang bersama bangunan, tempat letak kereta dan tingkat bawah tanah.",
        },
        icon: "broom",
      },
      {
        title: {
          en: "Event & ad hoc cleaning",
          ms: "Pembersihan acara & ad hoc",
        },
        description: {
          en: "Cleaning support for events, periodical work and emergency needs.",
          ms: "Sokongan pembersihan untuk acara, kerja berkala dan keperluan kecemasan.",
        },
        icon: "sparkle",
      },
    ],
  },
  {
    id: "residential",
    title: { en: "Home & residential care", ms: "Penjagaan rumah & kediaman" },
    description: {
      en: "A fresh, comfortable space to come home to.",
      ms: "Ruang yang segar dan selesa untuk anda sekeluarga.",
    },
    services: [
      {
        title: { en: "Spring & deep cleaning", ms: "Pembersihan menyeluruh" },
        description: {
          en: "Intensive cleaning for houses and apartments.",
          ms: "Pembersihan intensif untuk rumah dan pangsapuri.",
        },
        icon: "house",
      },
      {
        title: { en: "Housekeeping", ms: "Pengemasan" },
        description: {
          en: "General housekeeping for apartments, hotels and hostels.",
          ms: "Pengemasan umum untuk pangsapuri, hotel dan asrama.",
        },
        icon: "broom",
      },
      {
        title: {
          en: "Pre & post-renovation cleaning",
          ms: "Pembersihan sebelum & selepas pengubahsuaian",
        },
        description: {
          en: "A thorough clean around your renovation project.",
          ms: "Pembersihan teliti untuk projek pengubahsuaian anda.",
        },
        icon: "tool",
      },
      {
        title: {
          en: "Carpet & upholstery care",
          ms: "Penjagaan permaidani & upholsteri",
        },
        description: {
          en: "Shampooing and steam extraction for carpets and upholstered furniture.",
          ms: "Syampu dan cucian pengekstrakan wap untuk permaidani serta perabot berupholsteri.",
        },
        icon: "wind",
      },
    ],
  },
  {
    id: "specialist",
    title: { en: "Specialist cleaning", ms: "Pembersihan khusus" },
    description: {
      en: "Focused care for surfaces and spaces that need extra attention.",
      ms: "Penjagaan khusus untuk permukaan dan ruang yang memerlukan perhatian tambahan.",
    },
    services: [
      {
        title: {
          en: "Floor care & treatment",
          ms: "Penjagaan & rawatan lantai",
        },
        description: {
          en: "Floor stripping, sealing and care for stone, marble, wood and other finishes.",
          ms: "Penanggalan lapisan, pengedapan dan penjagaan lantai batu, marmar, kayu serta kemasan lain.",
        },
        icon: "sparkle",
      },
      {
        title: {
          en: "High-pressure washing",
          ms: "Cucian air bertekanan tinggi",
        },
        description: {
          en: "High-pressure water cleaning for suitable surfaces.",
          ms: "Cucian air bertekanan tinggi untuk permukaan yang sesuai.",
        },
        icon: "drop",
      },
      {
        title: {
          en: "Facade & canopy cleaning",
          ms: "Pembersihan fasad & kanopi",
        },
        description: {
          en: "External high-level cleaning for glass, cladding and building exteriors.",
          ms: "Pembersihan luaran di tempat tinggi untuk kaca, pelapisan dan bahagian luar bangunan.",
        },
        icon: "building",
      },
      {
        title: {
          en: "Post-construction cleaning",
          ms: "Pembersihan selepas pembinaan",
        },
        description: {
          en: "Initial cleaning for newly completed buildings before handover.",
          ms: "Pembersihan awal bangunan baharu sebelum penyerahan.",
        },
        icon: "tool",
      },
    ],
  },
  {
    id: "facilities",
    title: {
      en: "Facilities & outdoor care",
      ms: "Penjagaan fasiliti & kawasan luar",
    },
    description: {
      en: "Practical maintenance to keep your property in good order.",
      ms: "Penyelenggaraan praktikal untuk memastikan hartanah anda terjaga.",
    },
    services: [
      {
        title: {
          en: "Landscaping & grass cutting",
          ms: "Landskap & pemotongan rumput",
        },
        description: {
          en: "Soft landscaping, grass cutting and ongoing landscape maintenance.",
          ms: "Landskap lembut, pemotongan rumput dan penyelenggaraan landskap berkala.",
        },
        icon: "leaf",
      },
      {
        title: { en: "Swimming pool care", ms: "Penjagaan kolam renang" },
        description: {
          en: "Swimming pool maintenance and repair services.",
          ms: "Perkhidmatan penyelenggaraan dan pembaikan kolam renang.",
        },
        icon: "drop",
      },
      {
        title: {
          en: "Waste collection & disposal",
          ms: "Kutipan & pelupusan sisa",
        },
        description: {
          en: "Waste collection and disposal, with bins available upon request.",
          ms: "Kutipan dan pelupusan sisa, dengan tong disediakan atas permintaan.",
        },
        icon: "broom",
      },
      {
        title: {
          en: "Sewerage maintenance",
          ms: "Penyelenggaraan pembetungan",
        },
        description: {
          en: "Sewerage services on a scheduled or on-call basis.",
          ms: "Perkhidmatan pembetungan secara berjadual atau atas panggilan.",
        },
        icon: "tool",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "sqwhere",
    title: "SqWhere",
    location: "Sungai Buloh",
    scope: {
      en: "Internal & common area cleaning",
      ms: "Pembersihan dalaman & kawasan bersama",
    },
    category: "commercial",
    image: "assets/project-sqwhere.webp",
  },
  {
    id: "plaza-138",
    title: "Plaza 138 Office",
    location: "Jalan Ampang, Kuala Lumpur",
    scope: { en: "Common area cleaning", ms: "Pembersihan kawasan bersama" },
    category: "commercial",
    image: "assets/project-plaza-138.webp",
  },
  {
    id: "kelana-sentral",
    title: "Kelana Sentral Condominium",
    location: "Kelana Jaya",
    scope: { en: "Common area cleaning", ms: "Pembersihan kawasan bersama" },
    category: "residential",
    image: "assets/project-kelana-sentral.webp",
  },
  {
    id: "dedaun",
    title: "Dedaun Condominium",
    location: "Jalan Ampang",
    scope: { en: "Internal unit cleaning", ms: "Pembersihan dalaman unit" },
    category: "residential",
    image: "assets/project-dedaun.webp",
  },
  {
    id: "windows-on-the-park",
    title: "Windows On The Park",
    location: "Bandar Tun Hussein Onn, Cheras",
    scope: {
      en: "Common area & internal cleaning",
      ms: "Pembersihan kawasan bersama & dalaman",
    },
    category: "residential",
    image: "assets/project-windows-on-the-park.webp",
  },
  {
    id: "una",
    title: "UNA Service Apartment",
    location: "Cheras",
    scope: {
      en: "Common area & internal unit cleaning",
      ms: "Pembersihan kawasan bersama & dalaman unit",
    },
    category: "residential",
    image: "assets/project-una.webp",
  },
];
