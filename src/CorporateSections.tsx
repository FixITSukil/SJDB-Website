import React, { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  DownloadSimple,
  Flag,
  MagnifyingGlassPlus,
  ShieldCheck,
  Target,
  WhatsappLogo,
  X,
} from "@phosphor-icons/react";
import { copy, projects, serviceGroups } from "./content";
import type { Language, Project } from "./content";
import {
  additionalProjects,
  corporateCopy,
  galleryItems,
  heroSlides,
  pageHref,
} from "./corporate-content";
import type { PageId } from "./corporate-content";

type LanguageProps = { language: Language };
type EnquiryProps = LanguageProps & { whatsappLink: string };

const serviceImages: Record<string, string> = {
  commercial: "assets/sjdb-commercial-cleaning.webp",
  residential: "assets/sjdb-home-cleaning.webp",
  specialist: "assets/sjdb-floor-care.webp",
  facilities: "assets/sjdb-landscaping.webp",
};

export const CorporateHero = ({ language, whatsappLink }: EnquiryProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const t = corporateCopy[language];
  const slide = heroSlides[activeSlide];

  const handleSlide = (offset: number) => {
    setActiveSlide(
      (current) => (current + offset + heroSlides.length) % heroSlides.length,
    );
  };
  const handleKeys = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      handleSlide(event.key === "ArrowLeft" ? -1 : 1);
    }
  };

  return (
    <section
      className="corp-hero relative isolate overflow-hidden bg-ink text-white"
      role="region"
      aria-label={t.hero.eyebrow}
      aria-roledescription={language === "en" ? "Slideshow" : "Paparan slaid"}
    >
      {heroSlides.map((item, index) => (
        <img
          key={item.image}
          className={`corp-slide corp-hero-image absolute inset-0 h-full w-full object-cover ${index === activeSlide ? "is-active" : ""}`}
          src={item.image}
          style={{ objectPosition: item.position }}
          alt={index === activeSlide ? item.alt[language] : ""}
          aria-hidden={index !== activeSlide}
          width="1800"
          height="1350"
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : undefined}
          decoding="async"
        />
      ))}
      <div className="corp-hero-shade absolute inset-0" aria-hidden="true" />
      <div className="site-container relative z-10 flex min-h-[600px] flex-col justify-center pb-10 pt-12 sm:min-h-[650px] sm:py-20">
        <div className="hero-copy max-w-[790px]">
          <p className="eyebrow mb-6 !text-white/85">
            <span className="h-px w-8 bg-[#db2821]" />
            {t.hero.eyebrow}
          </p>
          <h1 className="hero-heading">
            {t.hero.title}
            <span className="mt-2 block">{t.hero.line2}</span>
          </h1>
          <p className="mb-6 mt-5 max-w-[53ch] text-base leading-[1.65] text-white/85 sm:mb-8 sm:mt-7 sm:text-lg">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="button-primary" href={pageHref("contact", language)}>
              {t.hero.primary}
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a
              className="button-outline !border-white/50 !text-white hover:!bg-white/10"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappLogo className="text-xl" aria-hidden="true" />
              {t.hero.secondary}
            </a>
          </div>
        </div>
        <div className="mt-7 flex flex-col justify-between gap-3 border-t border-white/25 pt-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-6 sm:pt-5">
          <p
            className="max-w-[43ch] text-xs leading-relaxed text-white/80"
            aria-live="polite"
            aria-atomic="true"
          >
            {slide.caption[language]}
          </p>
          <div
            className="flex w-fit flex-wrap items-center gap-2 bg-ink/90"
            onKeyDown={handleKeys}
            role="group"
            aria-label={
              language === "en" ? "Slideshow controls" : "Kawalan slaid"
            }
          >
            <button
              type="button"
              onClick={() => handleSlide(-1)}
              aria-label={t.hero.previous}
              className="grid h-11 w-11 place-items-center border border-white/40 transition-colors hover:bg-white/15"
            >
              <ArrowLeft aria-hidden="true" />
            </button>
            <div className="flex items-center gap-1">
              {heroSlides.map((item, index) => (
                <button
                  key={item.image}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`${t.hero.slideLabel} ${index + 1}: ${item.caption[language]}`}
                  aria-pressed={index === activeSlide}
                  className="grid h-11 w-11 place-items-center"
                >
                  <span
                    aria-hidden="true"
                    className={`h-2 w-2 rounded-full transition-colors ${index === activeSlide ? "bg-white" : "bg-white/40"}`}
                  />
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => handleSlide(1)}
              aria-label={t.hero.next}
              className="grid h-11 w-11 place-items-center border border-white/40 transition-colors hover:bg-white/15"
            >
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HomeOverview = ({ language }: LanguageProps) => {
  const t = corporateCopy[language];
  return (
    <section className="section-space bg-white">
      <div className="site-container grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="relative" data-reveal>
          <img
            src="assets/sjdb-team.webp"
            alt={
              galleryItems.find((item) => item.id === "team")!.caption[language]
            }
            width="1080"
            height="720"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 flex items-center gap-3 bg-ink px-5 py-4 text-white">
            <ShieldCheck className="shrink-0 text-2xl" aria-hidden="true" />
            <p className="max-w-[27ch] text-xs leading-relaxed">
              {copy[language].hero.qualityText}
            </p>
          </div>
        </div>
        <div data-reveal>
          <p className="eyebrow mb-4">{t.intro.eyebrow}</p>
          <h2 className="mb-6">{t.intro.title}</h2>
          <p className="mb-7 max-w-[58ch] text-[15px] leading-[1.7] text-muted">
            {t.intro.description}
          </p>
          <a className="button-primary" href={pageHref("about", language)}>
            {t.intro.cta}
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export const HomeServices = ({ language }: LanguageProps) => {
  const t = corporateCopy[language];
  return (
    <section className="section-space bg-mist">
      <div className="site-container">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow mb-4">{t.services.eyebrow}</p>
            <h2>{t.services.title}</h2>
          </div>
          <p className="section-description">{t.services.description}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceGroups.map((group) => (
            <a
              key={group.id}
              className="group flex flex-col bg-white shadow-[0_4px_18px_#082b4b08] transition-shadow hover:shadow-[0_10px_25px_#082b4b16]"
              href={`${pageHref("services", language)}?category=${group.id}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={serviceImages[group.id]}
                  alt={group.title[language]}
                  width="800"
                  height="600"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.025]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 font-display text-lg font-bold leading-snug">
                  {group.title[language]}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">
                  {group.description[language]}
                </p>
                <span className="flex min-h-11 items-center justify-between border-t border-ink/10 pt-4 text-xs font-semibold text-brand">
                  {t.services.all}
                  <ArrowUpRight className="text-lg" aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const HomeProjects = ({
  language,
  onProject,
}: LanguageProps & { onProject: (project: Project) => void }) => {
  const t = corporateCopy[language];
  const featured = [projects[0], additionalProjects[0], projects[3]];
  return (
    <section className="section-space bg-white">
      <div className="site-container">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow mb-4">{t.work.eyebrow}</p>
            <h2>{t.work.title}</h2>
          </div>
          <div>
            <p className="section-description">{t.work.description}</p>
            <a
              href={pageHref("projects", language)}
              className="mt-4 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-brand"
            >
              {t.work.all}
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => onProject(project)}
              className="group text-left"
              aria-label={`${copy[language].projects.view}: ${project.title}`}
            >
              <div className="relative mb-5 aspect-[4/3] overflow-hidden bg-mist">
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.scope[language]}`}
                  width="800"
                  height="600"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.025]"
                />
                <span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center bg-white text-xl text-ink transition-colors group-hover:bg-brand group-hover:text-white">
                  <ArrowUpRight aria-hidden="true" />
                </span>
              </div>
              <h3 className="mb-2 font-display text-xl font-bold">
                {project.title}
              </h3>
              {project.location ? (
                <p className="mb-2 text-xs text-muted">{project.location}</p>
              ) : null}
              <p className="text-sm leading-relaxed text-muted">
                {project.scope[language]}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CompanyDetails = ({ language }: LanguageProps) => {
  const t = corporateCopy[language];
  const common = copy[language];
  return (
    <>
      <section className="section-space bg-white">
        <div className="site-container">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow mb-4">{t.about.eyebrow}</p>
              <h2>{t.about.approachTitle}</h2>
            </div>
            <p className="section-description">{t.about.intro}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: t.about.visionTitle,
                text: t.about.visionText,
                Icon: Target,
              },
              {
                title: t.about.missionTitle,
                text: t.about.missionText,
                Icon: Flag,
              },
            ].map(({ title, text, Icon }) => (
              <article
                key={title}
                className="border border-ink/15 bg-mist p-7 sm:p-9"
              >
                <Icon className="mb-6 text-4xl text-brand" aria-hidden="true" />
                <h3 className="mb-4 font-display text-2xl font-bold">
                  {title}
                </h3>
                <p className="max-w-[60ch] text-[15px] leading-[1.75] text-muted">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space bg-ink text-white">
        <div className="site-container">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow mb-4 !text-white/65">{t.quality.eyebrow}</p>
              <h2 className="!text-white">{t.quality.title}</h2>
            </div>
            <p className="section-description !text-white/70">
              {t.quality.description}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {t.quality.items.map((item, index) => (
              <article
                className="border-t border-white/25 pt-6"
                key={item.title}
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-display text-4xl font-semibold text-white/35">
                    0{index + 1}
                  </span>
                  <CheckCircle
                    className="text-2xl text-white/60"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mb-4 font-display text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm leading-[1.75] text-white/70">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space bg-white">
        <div className="site-container">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <img
              src="assets/sjdb-team-briefing.webp"
              alt={common.about.photoCaption}
              width="1800"
              height="1350"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div>
              <p className="eyebrow mb-4">{t.people.eyebrow}</p>
              <h2 className="mb-6">{t.people.title}</h2>
              <p className="mb-7 text-[15px] leading-[1.7] text-muted">
                {t.people.description}
              </p>
              <a
                href="sjdb-company-profile-2026.pdf"
                download
                className="button-outline"
              >
                <DownloadSimple className="text-lg" aria-hidden="true" />
                {common.about.download}
              </a>
            </div>
          </div>
          <div className="mt-12 grid gap-6 border-t border-ink/15 pt-8 text-sm md:grid-cols-2">
            <p className="leading-relaxed">
              <strong className="block font-medium">
                SJDB Management and Services (M) Sdn Bhd
              </strong>
              <span className="text-muted">1571524-M</span>
            </p>
            <p className="leading-relaxed">
              <strong className="block font-medium">
                SJDB Facilities Resources
              </strong>
              <span className="text-muted">002605819-U</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export const WorkGallery = ({ language }: LanguageProps) => {
  const t = corporateCopy[language];
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<
    (typeof galleryItems)[number] | null
  >(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.current?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  const handleBackdrop = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.currentTarget === event.target) setSelected(null);
  };

  return (
    <section className="section-space bg-white">
      <div className="site-container">
        <div
          className="mb-8 flex flex-wrap gap-2"
          role="group"
          aria-label={t.gallery.eyebrow}
        >
          {(["all", "cleaning", "team", "outdoor"] as const).map((category) => (
            <button
              key={category}
              type="button"
              className={`project-filter ${filter === category ? "is-active" : ""}`}
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
            >
              {t.gallery[category]}
            </button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems
            .filter((item) => filter === "all" || item.category === filter)
            .map((item) => (
              <button
                type="button"
                key={item.id}
                className="group text-left"
                onClick={() => setSelected(item)}
                aria-label={`${t.gallery.open}: ${item.caption[language]}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                  <img
                    src={item.image}
                    alt={item.caption[language]}
                    width="900"
                    height="675"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.025]"
                  />
                  <span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center bg-white text-xl text-ink transition-colors group-hover:bg-brand group-hover:text-white">
                    <MagnifyingGlassPlus aria-hidden="true" />
                  </span>
                </div>
                <h2 className="mt-4 !text-base !font-semibold !tracking-normal">
                  {item.caption[language]}
                </h2>
              </button>
            ))}
        </div>
        <dialog
          ref={dialog}
          className="project-dialog"
          aria-labelledby="gallery-caption"
          onClick={handleBackdrop}
          onCancel={() => setSelected(null)}
          onClose={() => setSelected(null)}
        >
          {selected ? (
            <div className="relative bg-white">
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white text-xl text-ink shadow-lg"
                aria-label={t.gallery.close}
              >
                <X aria-hidden="true" />
              </button>
              <img
                src={selected.image}
                alt={selected.caption[language]}
                className="max-h-[72dvh] w-full bg-mist object-contain"
              />
              <h2
                id="gallery-caption"
                className="p-6 !text-lg !font-semibold !tracking-normal"
              >
                {selected.caption[language]}
              </h2>
            </div>
          ) : null}
        </dialog>
      </div>
    </section>
  );
};

export const PageHeading = ({
  page,
  language,
}: LanguageProps & { page: Exclude<PageId, "home"> }) => {
  const t = corporateCopy[language];
  const descriptions = {
    about: t.about.intro,
    services: t.services.description,
    projects: t.work.description,
    gallery: t.gallery.description,
    contact: copy[language].contact.description,
  };
  return (
    <section className="corp-page-heading border-b border-ink/10 bg-mist py-12 sm:py-16">
      <div className="site-container">
        <nav
          aria-label={language === "en" ? "Breadcrumb" : "Jejak navigasi"}
          className="mb-6 flex items-center gap-3 text-xs text-muted"
        >
          <a
            href={pageHref("home", language)}
            className="inline-flex min-h-11 items-center hover:text-brand"
          >
            {t.breadcrumbHome}
          </a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{t.nav[page]}</span>
        </nav>
        <h1 className="corporate-page-title mb-5">{t.nav[page]}</h1>
        <p className="max-w-[70ch] text-base leading-[1.7] text-muted">
          {descriptions[page]}
        </p>
      </div>
    </section>
  );
};

export const EnquiryBanner = ({ language, whatsappLink }: EnquiryProps) => {
  const t = corporateCopy[language];
  return (
    <section className="border-l-8 border-[#db2821] bg-ink py-12 text-white sm:py-16">
      <div className="site-container flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-[640px]">
          <h2 className="mb-4 !text-[clamp(1.7rem,2.8vw,2.5rem)] !text-white">
            {t.banner.title}
          </h2>
          <p className="max-w-[60ch] text-sm leading-[1.7] text-white/70">
            {t.banner.text}
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <a className="button-primary" href={pageHref("contact", language)}>
            {t.banner.action}
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            className="button-outline !border-white/50 !text-white hover:!bg-white/10"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappLogo className="text-xl" aria-hidden="true" />
            {copy[language].hero.secondary}
          </a>
        </div>
      </div>
    </section>
  );
};
