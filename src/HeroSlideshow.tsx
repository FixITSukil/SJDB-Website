import { useEffect, useState } from "react";
import { CaretLeft, CaretRight, Pause, Play, Sparkle } from "@phosphor-icons/react";
import type { Language } from "./content";

type HeroSlide = {
  src: string;
  alt: Record<Language, string>;
  caption: Record<Language, string>;
  position: string;
};

// These are SJDB's own photographs, already included in the 2026 company profile.
const slides: HeroSlide[] = [
  {
    src: "assets/sjdb-courtyard-cleaning.webp",
    alt: {
      en: "SJDB cleaning a landscaped courtyard",
      ms: "Kerja pembersihan SJDB di halaman berlandskap",
    },
    caption: {
      en: "Real people. A hands-on approach.",
      ms: "Pasukan sebenar. Pendekatan yang teliti.",
    },
    position: "63% center",
  },
  {
    src: "assets/sjdb-commercial-cleaning.webp",
    alt: {
      en: "SJDB commercial cleaning work",
      ms: "Kerja pembersihan komersial oleh SJDB",
    },
    caption: {
      en: "Professional care for commercial spaces.",
      ms: "Penjagaan profesional untuk ruang komersial.",
    },
    position: "center",
  },
  {
    src: "assets/sjdb-floor-care.webp",
    alt: {
      en: "SJDB floor cleaning and maintenance work",
      ms: "Kerja pembersihan dan penjagaan lantai oleh SJDB",
    },
    caption: {
      en: "A closer look at specialist floor care.",
      ms: "Penjagaan lantai khusus dengan teliti.",
    },
    position: "center",
  },
  {
    src: "assets/sjdb-team-briefing.webp",
    alt: {
      en: "SJDB team at a worksite briefing",
      ms: "Pasukan SJDB dalam taklimat di lokasi kerja",
    },
    caption: {
      en: "Prepared teams. Attentive supervision.",
      ms: "Pasukan bersedia. Penyeliaan yang teliti.",
    },
    position: "center",
  },
  {
    src: "assets/sjdb-landscaping.webp",
    alt: {
      en: "SJDB landscaping and outdoor maintenance work",
      ms: "Kerja landskap dan penyelenggaraan luar oleh SJDB",
    },
    caption: {
      en: "Well-maintained outdoor spaces.",
      ms: "Kawasan luar yang diselenggara dengan baik.",
    },
    position: "center",
  },
];

export default function HeroSlideshow({ language }: { language: Language }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (!playing || hovered || focused) return;

    const timer = window.setInterval(() => {
      // Do not auto-advance in a background tab or when motion is reduced.
      if (document.hidden || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [activeSlide, playing, hovered, focused]);

  return (
    <div
      className="relative h-[390px] overflow-hidden rounded-tl-[80px] sm:h-[500px] lg:h-[550px]"
      role="region"
      aria-roledescription="carousel"
      aria-label={
        language === "en" ? "SJDB worksite photo slideshow" : "Tayangan slaid foto kerja SJDB"
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setFocused(false);
        }
      }}
    >
      {slides.map((slide, index) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={index === activeSlide ? slide.alt[language] : ""}
          aria-hidden={index !== activeSlide}
          width="1800"
          height="1350"
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : undefined}
          decoding="async"
          className={
            "hero-slide absolute inset-0 h-full w-full object-cover " +
            (index === activeSlide ? "is-active" : "")
          }
          style={{ objectPosition: slide.position }}
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 via-black/25 to-transparent px-5 pb-6 pt-24 text-xs text-white sm:px-7">
        <p className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
          {slides[activeSlide].caption[language]}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <div
            className="flex items-center gap-2"
            role="group"
            aria-label={language === "en" ? "Choose a photo" : "Pilih foto"}
          >
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                aria-label={
                  language === "en"
                    ? "Show photo " + (index + 1) + " of " + slides.length
                    : "Papar foto " + (index + 1) + " daripada " + slides.length
                }
                aria-current={index === activeSlide ? "true" : undefined}
                onClick={() => setActiveSlide(index)}
                className={
                  "h-3 w-3 rounded-full border border-white/80 transition-colors " +
                  (index === activeSlide ? "bg-white" : "bg-white/20 hover:bg-white/60")
                }
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveSlide((current) => (current - 1 + slides.length) % slides.length)}
              aria-label={language === "en" ? "Previous photo" : "Foto sebelumnya"}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/60 bg-black/20 text-lg text-white transition-colors hover:bg-white/20"
            >
              <CaretLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setActiveSlide((current) => (current + 1) % slides.length)}
              aria-label={language === "en" ? "Next photo" : "Foto seterusnya"}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/60 bg-black/20 text-lg text-white transition-colors hover:bg-white/20"
            >
              <CaretRight aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setPlaying((current) => !current)}
              aria-label={
                language === "en"
                  ? playing ? "Pause automatic slideshow" : "Play automatic slideshow"
                  : playing ? "Jeda tayangan slaid automatik" : "Mainkan tayangan slaid automatik"
              }
              aria-pressed={!playing}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/60 bg-black/20 text-lg text-white transition-colors hover:bg-white/20"
            >
              {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
      <span className="pointer-events-none absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full border border-white/50 bg-black/10 text-2xl text-white">
        <Sparkle aria-hidden="true" />
      </span>
    </div>
  );
}
