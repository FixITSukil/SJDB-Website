import type { BilingualText, Language, Project } from "./content";

export type PageId =
  "home" | "about" | "services" | "projects" | "gallery" | "contact";

export const pageFiles: Record<PageId, string> = {
  home: "index.html",
  about: "about.html",
  services: "services.html",
  projects: "projects.html",
  gallery: "gallery.html",
  contact: "contact.html",
};

export const localizedPageFiles: Record<Language, Record<PageId, string>> = {
  en: pageFiles,
  ms: {
    home: "ms.html",
    about: "tentang-kami.html",
    services: "perkhidmatan.html",
    projects: "projek.html",
    gallery: "galeri.html",
    contact: "hubungi-kami.html",
  },
};

export const pageHref = (page: PageId, language: Language) =>
  page === "home" && language === "en" ? "./" : localizedPageFiles[language][page];

interface CorporatePageCopy {
  nav: Record<PageId, string>;
  brandTagline: string;
  hero: {
    eyebrow: string;
    title: string;
    line2: string;
    description: string;
    primary: string;
    secondary: string;
    previous: string;
    next: string;
    slideLabel: string;
  };
  intro: { eyebrow: string; title: string; description: string; cta: string };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    all: string;
    details: string;
  };
  work: { eyebrow: string; title: string; description: string; all: string };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    visionTitle: string;
    visionText: string;
    missionTitle: string;
    missionText: string;
    approachTitle: string;
  };
  people: { eyebrow: string; title: string; description: string };
  quality: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; text: string }[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
    all: string;
    cleaning: string;
    team: string;
    outdoor: string;
    open: string;
    close: string;
  };
  banner: { title: string; text: string; action: string };
  breadcrumbHome: string;
  enquiryTitle: string;
}

export const corporateCopy = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Our Services",
      projects: "Projects",
      gallery: "Gallery",
      contact: "Contact Us",
    },
    brandTagline: "Cleaning & Building Facilities Maintenance",
    hero: {
      eyebrow: "SJDB GROUP OF COMPANIES",
      title: "Professional cleaning.",
      line2: "Dependable facilities care.",
      description:
        "Based in Sungai Buloh, Selangor, SJDB provides contract cleaning and building facilities maintenance for commercial and residential properties.",
      primary: "Request a Quotation",
      secondary: "WhatsApp Our Team",
      previous: "Previous slide",
      next: "Next slide",
      slideLabel: "Go to slide",
    },
    intro: {
      eyebrow: "WELCOME TO SJDB",
      title: "Your premises. Our commitment to quality.",
      description:
        "SJDB Management and Services (M) Sdn Bhd, together with SJDB Facilities Resources, provides cleaning and facilities maintenance with a focus on customer satisfaction and work quality. We work with clients and property management teams to keep their premises clean, presentable and well maintained.",
      cta: "More About SJDB",
    },
    services: {
      eyebrow: "WHAT WE DO",
      title: "Cleaning and maintenance for every requirement.",
      description:
        "SJDB provides commercial and residential cleaning, specialist floor and facade care, and outdoor facilities maintenance.",
      all: "View All Services",
      details: "Enquire About This Service",
    },
    work: {
      eyebrow: "OUR PROJECT EXPERIENCE",
      title: "Experience across a range of properties.",
      description:
        "SJDB’s 2026 company profile documents work such as common-area cleaning at SqWhere in Sungai Buloh and marble polishing at Hotel Maya in Kuala Lumpur.",
      all: "View Our Projects",
    },
    about: {
      eyebrow: "ABOUT SJDB",
      title: "A professional approach to property care.",
      intro:
        "SJDB Management and Services (M) Sdn Bhd and SJDB Facilities Resources provide cleaning and building facilities maintenance from Sungai Buloh, Selangor. The 2026 company profile describes how SJDB trains staff, supervises work and inspects sites.",
      visionTitle: "Our Vision",
      visionText:
        "To become a leading and trusted cleaning service provider, a preferred partner for our clients, and a company recognised for quality services that offer value for money.",
      missionTitle: "Our Mission",
      missionText:
        "To deliver high-quality cleaning with excellence and consistency, build a reliable professional organisation, and prioritise the health and safety of our clients and the public.",
      approachTitle: "How We Work",
    },
    people: {
      eyebrow: "OUR PEOPLE",
      title: "Prepared people. Clearly managed work.",
      description:
        "Our personnel receive practical training, demonstrations and written guidance. Site supervisors oversee daily activities, while operations management carries out inspections and provides support to maintain service standards.",
    },
    quality: {
      eyebrow: "OUR COMMITMENT",
      title: "Customer satisfaction and work quality come first.",
      description:
        "We recognise that the condition of your premises reflects your organisation. Our service approach brings together clear planning, trained personnel and ongoing quality control.",
      items: [
        {
          title: "Defined Scope & Scheduling",
          text: "We coordinate with clients and property management teams to agree on cleaning requirements, responsibilities and schedules.",
        },
        {
          title: "Training & Supervision",
          text: "Practical instruction and site supervision help personnel carry out their duties consistently and professionally.",
        },
        {
          title: "Inspection & Follow-through",
          text: "Regular inspections and performance monitoring help identify concerns and guide corrective action.",
        },
      ],
    },
    gallery: {
      eyebrow: "SJDB IN ACTION",
      title: "Our people and our work.",
      description:
        "Photos from SJDB’s 2026 company profile show its team, cleaning work, floor care and landscape maintenance.",
      all: "All Photos",
      cleaning: "Cleaning",
      team: "Our Team",
      outdoor: "Outdoor Care",
      open: "View photo",
      close: "Close photo",
    },
    banner: {
      title: "Let us discuss your cleaning requirements.",
      text: "Tell us about your premises, service needs and preferred schedule. Our team is ready to discuss a suitable plan.",
      action: "Get in Touch",
    },
    breadcrumbHome: "Home",
    enquiryTitle: "Send Us an Enquiry",
  },
  ms: {
    nav: {
      home: "Utama",
      about: "Tentang Kami",
      services: "Perkhidmatan",
      projects: "Projek",
      gallery: "Galeri",
      contact: "Hubungi Kami",
    },
    brandTagline: "Pembersihan & Penyelenggaraan Fasiliti Bangunan",
    hero: {
      eyebrow: "KUMPULAN SYARIKAT SJDB",
      title: "Pembersihan profesional.",
      line2: "Fasiliti sentiasa terjaga.",
      description:
        "Berpusat di Sungai Buloh, Selangor, SJDB menyediakan pembersihan kontrak dan penyelenggaraan fasiliti bangunan untuk hartanah komersial dan kediaman.",
      primary: "Mohon Sebut Harga",
      secondary: "WhatsApp Pasukan Kami",
      previous: "Slaid sebelumnya",
      next: "Slaid seterusnya",
      slideLabel: "Pergi ke slaid",
    },
    intro: {
      eyebrow: "SELAMAT DATANG KE SJDB",
      title: "Premis anda. Komitmen kami terhadap kualiti.",
      description:
        "SJDB Management and Services (M) Sdn Bhd, bersama SJDB Facilities Resources, menyediakan perkhidmatan pembersihan dan penyelenggaraan fasiliti dengan mengutamakan kepuasan pelanggan serta kualiti kerja. Kami bekerjasama dengan pelanggan dan pengurusan hartanah untuk memastikan premis bersih, kemas dan terpelihara.",
      cta: "Kenali SJDB",
    },
    services: {
      eyebrow: "PERKHIDMATAN KAMI",
      title: "Pembersihan dan penyelenggaraan mengikut keperluan anda.",
      description:
        "SJDB menyediakan pembersihan komersial dan kediaman, penjagaan khusus lantai dan fasad, serta penyelenggaraan fasiliti di kawasan luar.",
      all: "Lihat Semua Perkhidmatan",
      details: "Tanya Tentang Perkhidmatan Ini",
    },
    work: {
      eyebrow: "PENGALAMAN PROJEK KAMI",
      title: "Pengalaman merentasi pelbagai jenis hartanah.",
      description:
        "Profil syarikat SJDB 2026 memaparkan kerja seperti pembersihan kawasan bersama di SqWhere, Sungai Buloh, dan penggilapan marmar di Hotel Maya, Kuala Lumpur.",
      all: "Lihat Projek Kami",
    },
    about: {
      eyebrow: "TENTANG SJDB",
      title: "Pendekatan profesional dalam penjagaan hartanah.",
      intro:
        "SJDB Management and Services (M) Sdn Bhd dan SJDB Facilities Resources menyediakan pembersihan dan penyelenggaraan fasiliti bangunan dari Sungai Buloh, Selangor. Profil syarikat 2026 menerangkan cara SJDB melatih kakitangan, menyelia kerja dan memeriksa tapak.",
      visionTitle: "Visi Kami",
      visionText:
        "Menjadi penyedia perkhidmatan pembersihan yang terkemuka dan dipercayai, rakan pilihan pelanggan, serta syarikat yang dikenali kerana perkhidmatan berkualiti pada harga berpatutan.",
      missionTitle: "Misi Kami",
      missionText:
        "Memberikan perkhidmatan pembersihan berkualiti secara cemerlang dan konsisten, membina organisasi profesional yang boleh dipercayai, serta mengutamakan kesihatan dan keselamatan pelanggan dan orang awam.",
      approachTitle: "Pendekatan Kerja Kami",
    },
    people: {
      eyebrow: "WARGA KERJA KAMI",
      title: "Kakitangan bersedia. Kerja diurus dengan teratur.",
      description:
        "Kakitangan kami menerima latihan praktikal, demonstrasi dan panduan bertulis. Penyelia tapak memantau aktiviti harian, manakala pengurusan operasi menjalankan pemeriksaan serta memberikan sokongan untuk mengekalkan standard perkhidmatan.",
    },
    quality: {
      eyebrow: "KOMITMEN KAMI",
      title: "Kepuasan pelanggan dan kualiti kerja diutamakan.",
      description:
        "Kami memahami bahawa keadaan premis mencerminkan imej organisasi anda. Pendekatan kami menggabungkan perancangan yang jelas, kakitangan terlatih dan kawalan kualiti berterusan.",
      items: [
        {
          title: "Skop & Jadual yang Jelas",
          text: "Kami berbincang dengan pelanggan dan pengurusan hartanah untuk menetapkan keperluan pembersihan, tanggungjawab serta jadual kerja.",
        },
        {
          title: "Latihan & Penyeliaan",
          text: "Panduan praktikal dan penyeliaan tapak membantu kakitangan melaksanakan tugas secara konsisten dan profesional.",
        },
        {
          title: "Pemeriksaan & Tindakan Susulan",
          text: "Pemeriksaan berkala dan pemantauan prestasi membantu mengenal pasti isu serta menentukan tindakan pembetulan.",
        },
      ],
    },
    gallery: {
      eyebrow: "SJDB DI LAPANGAN",
      title: "Warga kerja dan aktiviti kami.",
      description:
        "Foto dalam profil syarikat SJDB 2026 memaparkan pasukannya serta kerja pembersihan, penjagaan lantai dan penyelenggaraan landskap.",
      all: "Semua Foto",
      cleaning: "Pembersihan",
      team: "Pasukan Kami",
      outdoor: "Penjagaan Kawasan Luar",
      open: "Lihat foto",
      close: "Tutup foto",
    },
    banner: {
      title: "Bincangkan keperluan pembersihan anda bersama kami.",
      text: "Kongsikan maklumat premis, keperluan perkhidmatan dan jadual pilihan anda. Pasukan kami sedia membincangkan pelan yang sesuai.",
      action: "Hubungi Kami",
    },
    breadcrumbHome: "Utama",
    enquiryTitle: "Hantar Pertanyaan",
  },
} satisfies Record<Language, CorporatePageCopy>;

export const heroSlides: {
  image: string;
  position?: string;
  caption: BilingualText;
  alt: BilingualText;
}[] = [
  {
    image: "assets/sjdb-courtyard-cleaning.webp",
    position: "65% 3%",
    caption: {
      en: "Courtyard cleaning",
      ms: "Pembersihan halaman",
    },
    alt: {
      en: "SJDB team member cleaning the floor of a landscaped courtyard",
      ms: "Kakitangan SJDB membersihkan lantai halaman berlandskap",
    },
  },
  {
    image: "assets/sjdb-carpark-cleaning.webp",
    position: "38% 15%",
    caption: {
      en: "Car park floor cleaning",
      ms: "Pembersihan lantai tempat letak kereta",
    },
    alt: {
      en: "SJDB team member operating a floor scrubber in a car park",
      ms: "Kakitangan SJDB menggunakan mesin penyental lantai di tempat letak kereta",
    },
  },
  {
    image: "assets/sjdb-team-briefing.webp",
    caption: {
      en: "Our people, prepared for the work ahead",
      ms: "Pasukan kami bersedia melaksanakan tugas",
    },
    alt: {
      en: "SJDB cleaning personnel assembled outdoors for a site briefing",
      ms: "Kakitangan pembersihan SJDB berkumpul di luar untuk taklimat tapak",
    },
  },
];

export const galleryItems: {
  id: string;
  image: string;
  category: "cleaning" | "team" | "outdoor";
  caption: BilingualText;
}[] = [
  {
    id: "carpark-cleaning",
    image: "assets/sjdb-carpark-cleaning.webp",
    category: "cleaning",
    caption: {
      en: "Car park floor cleaning",
      ms: "Pembersihan lantai tempat letak kereta",
    },
  },
  {
    id: "commercial-cleaning",
    image: "assets/sjdb-commercial-cleaning.webp",
    category: "cleaning",
    caption: {
      en: "Commercial glass cleaning",
      ms: "Pembersihan kaca premis komersial",
    },
  },
  {
    id: "floor-care",
    image: "assets/sjdb-floor-care.webp",
    category: "cleaning",
    caption: {
      en: "Floor care and polishing",
      ms: "Penjagaan dan penggilapan lantai",
    },
  },
  {
    id: "home-cleaning",
    image: "assets/sjdb-home-cleaning.webp",
    category: "cleaning",
    caption: { en: "Residential cleaning", ms: "Pembersihan kediaman" },
  },
  {
    id: "team",
    image: "assets/sjdb-team.webp",
    category: "team",
    caption: { en: "The SJDB team", ms: "Pasukan SJDB" },
  },
  {
    id: "team-briefing",
    image: "assets/sjdb-team-briefing.webp",
    category: "team",
    caption: {
      en: "Personnel and site coordination",
      ms: "Kakitangan dan penyelarasan tapak",
    },
  },
  {
    id: "courtyard-cleaning",
    image: "assets/sjdb-courtyard-cleaning.webp",
    category: "outdoor",
    caption: { en: "Courtyard cleaning", ms: "Pembersihan halaman" },
  },
  {
    id: "landscaping",
    image: "assets/sjdb-landscaping.webp",
    category: "outdoor",
    caption: { en: "Landscape maintenance", ms: "Penyelenggaraan landskap" },
  },
  {
    id: "pressure-washing",
    image: "assets/sjdb-pressure-washing.webp",
    category: "outdoor",
    caption: {
      en: "Outdoor pressure washing",
      ms: "Cucian bertekanan tinggi di kawasan luar",
    },
  },
];

export const additionalProjects: Project[] = [
  {
    id: "hotel-maya",
    title: "Hotel Maya",
    location: "Kuala Lumpur",
    scope: {
      en: "Soft canopy & marble polishing",
      ms: "Pembersihan kanopi lembut & penggilapan marmar",
    },
    category: "commercial",
    image: "assets/project-hotel-maya.webp",
  },
  {
    id: "damai-88",
    title: "Damai 88 Condominium",
    location: "Jalan Ampang",
    scope: { en: "Common area cleaning", ms: "Pembersihan kawasan bersama" },
    category: "residential",
    image: "assets/project-damai-88.webp",
  },
  {
    id: "by-the-sea",
    title: "By The Sea",
    location: "Batu Ferringhi, Penang",
    scope: { en: "Common area", ms: "Kawasan bersama" },
    category: "residential",
    image: "assets/project-by-the-sea.webp",
  },
  {
    id: "jia-hayat-villa",
    title: "JIA @ Hayat Villa",
    location: "",
    scope: {
      en: "Internal & common area cleaning",
      ms: "Pembersihan dalaman & kawasan bersama",
    },
    category: "residential",
    image: "assets/project-jia-hayat-villa.webp",
  },
];
