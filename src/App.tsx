import React, { useEffect, useRef, useState } from "react";
import type { FormEvent, MouseEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Buildings,
  Broom,
  CaretDown,
  Check,
  CheckCircle,
  DownloadSimple,
  Drop,
  EnvelopeSimple,
  House,
  Leaf,
  List,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkle,
  UsersThree,
  WhatsappLogo,
  Wind,
  Wrench,
  X,
} from "@phosphor-icons/react";
import { copy, projects, serviceGroups } from "./content";
import type { Language } from "./content";
import {
  additionalProjects,
  corporateCopy,
  pageFiles,
  pageHref,
} from "./corporate-content";
import type { PageId } from "./corporate-content";
import { contact } from "./business";
import {
  CorporateHero,
  HomeOverview,
  HomeServices,
  HomeProjects,
  CompanyDetails,
  WorkGallery,
  PageHeading,
  EnquiryBanner,
} from "./CorporateSections";

const serviceIcons = {
  building: Buildings,
  sparkle: Sparkle,
  broom: Broom,
  drop: Drop,
  leaf: Leaf,
  house: House,
  wind: Wind,
  tool: Wrench,
};
const allServices = serviceGroups.flatMap((group) => group.services);
const allProjects = [...projects, ...additionalProjects];
const servicePhotography: Record<string, string> = {
  commercial: "assets/sjdb-commercial-cleaning.webp",
  residential: "assets/sjdb-home-cleaning.webp",
  specialist: "assets/sjdb-floor-care.webp",
  facilities: "assets/sjdb-landscaping.webp",
};
const App = ({
  page = "home",
  language = "en",
}: {
  page?: PageId;
  language?: Language;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [languageAnchor, setLanguageAnchor] = useState("");
  const [activeService, setActiveService] = useState(serviceGroups[0].id);
  const [projectFilter, setProjectFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);
  const [selectedService, setSelectedService] = useState("");
  const [preparedEnquiry, setPreparedEnquiry] = useState<{
    url: string;
    channel: string;
  } | null>(null);
  const projectDialog = useRef<HTMLDialogElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const t = copy[language];
  const c = corporateCopy[language];
  const group = serviceGroups.find((item) => item.id === activeService)!;
  const whatsappLink = `https://wa.me/60126004127?text=${encodeURIComponent(language === "en" ? "Hello SJDB, I would like to enquire about your cleaning and facilities services." : "Salam SJDB, saya ingin bertanya tentang perkhidmatan pembersihan dan penyelenggaraan fasiliti.")}`;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const service = params.get("service");
    if (category && serviceGroups.some((item) => item.id === category))
      setActiveService(category);
    if (service && allServices.some((item) => item.title.en === service))
      setSelectedService(service);
    const syncAnchor = () => setLanguageAnchor(window.location.hash);
    syncAnchor();
    window.addEventListener("hashchange", syncAnchor);
    return () => window.removeEventListener("hashchange", syncAnchor);
  }, []);

  const languageQuery = new URLSearchParams();
  if (page === "services" && activeService !== serviceGroups[0].id)
    languageQuery.set("category", activeService);
  if (page === "contact" && selectedService)
    languageQuery.set("service", selectedService);
  const languageSearch = languageQuery.size ? `?${languageQuery}` : "";
  const languageHref = (nextLanguage: Language) =>
    `${pageHref(page, nextLanguage)}${languageSearch}${languageAnchor}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedProject) {
      projectDialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      projectDialog.current?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const handleMenuKey = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsMenuOpen(false);
      menuButton.current?.focus();
    }
  };
  const handleEnquire = (service: string) => {
    if (page !== "contact") {
      window.location.href = `${pageHref("contact", language)}?service=${encodeURIComponent(service)}`;
      return;
    }
    setSelectedService(service);
    setPreparedEnquiry(null);
    document.getElementById("contact")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
    window.setTimeout(
      () =>
        document.getElementById("enquiry-name")?.focus({ preventScroll: true }),
      500,
    );
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const channel =
      ((event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null)
        ?.value ?? "whatsapp";
    const message = [
      language === "en"
        ? "Hello SJDB, I would like to request a quotation."
        : "Salam SJDB, saya ingin memohon sebut harga.",
      "",
      `${t.contact.name}: ${String(form.get("name")).trim()}`,
      `${t.contact.phone}: ${String(form.get("phone")).trim()}`,
      `${t.contact.service}: ${allServices.find((service) => service.title.en === selectedService)?.title[language] ?? selectedService}`,
      `${t.contact.location}: ${String(form.get("location")).trim() || "—"}`,
      `${t.contact.message}: ${String(form.get("message")).trim() || "—"}`,
    ].join("\n");
    const url =
      channel === "email"
        ? `mailto:${contact.email}?subject=${encodeURIComponent(`${language === "en" ? "SJDB enquiry" : "Pertanyaan SJDB"} — ${allServices.find((service) => service.title.en === selectedService)?.title[language] ?? selectedService}`)}&body=${encodeURIComponent(message)}`
        : `https://wa.me/60126004127?text=${encodeURIComponent(message)}`;
    setPreparedEnquiry({ url, channel });
    if (channel === "email") window.location.href = url;
    else window.open(url, "_blank", "noopener,noreferrer");
  };
  const handleDialogBackdrop = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) setSelectedProject(null);
  };

  return (
    <>
      <a className="skip-link" href="#main">
        {language === "en" ? "Skip to content" : "Langkau ke kandungan"}
      </a>
      <div className="corporate-topbar">
        <div className="site-container flex min-h-9 items-center justify-between gap-4 text-[11px]">
          <span className="flex items-center gap-2">
            <MapPin aria-hidden="true" />
            {t.hero.location}
          </span>
          <a
            className="hidden items-center gap-2 sm:flex"
            href={`mailto:${contact.email}`}
          >
            <EnvelopeSimple aria-hidden="true" />
            {contact.email}
          </a>
          <a className="flex items-center gap-2" href={`tel:${contact.office}`}>
            <Phone aria-hidden="true" />
            <span>+60 3-6038 3285</span>
          </a>
        </div>
      </div>
      <header className="corporate-header" onKeyDown={handleMenuKey}>
        <div className="site-container corporate-identity-row">
          <a
            href={pageHref("home", language)}
            aria-label={language === "en" ? "SJDB home" : "Laman utama SJDB"}
            className="corporate-brand"
          >
            <img
              src="assets/sjdb-logo-white.webp"
              alt="SJDB"
              width="68"
              height="68"
            />
            <span>
              <strong className="hidden sm:block">
                SJDB Management and
                <br /> Services (M) Sdn Bhd
              </strong>
              <strong className="block sm:hidden">{t.footer.company}</strong>
              <small>{c.brandTagline}</small>
            </span>
          </a>
          <div className="flex shrink-0 items-center gap-2 md:gap-6">
            <a
              className="hidden items-center gap-3 lg:flex"
              href={`tel:${contact.mobile}`}
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-mist text-xl text-[#d92c24]">
                <Phone aria-hidden="true" />
              </span>
              <span>
                <small className="block text-[10px] uppercase tracking-widest text-muted">
                  {t.contact.callTitle}
                </small>
                <strong className="text-[15px]">+60 12-600 4127</strong>
              </span>
            </a>
            <nav
              className="flex items-center text-xs font-semibold"
              aria-label={
                language === "en" ? "Website language" : "Bahasa laman web"
              }
            >
              <a
                href={languageHref("en")}
                lang="en"
                hrefLang="en-MY"
                aria-label="English"
                aria-current={language === "en" ? "page" : undefined}
                className={`language-button inline-flex items-center justify-center ${language === "en" ? "is-active" : ""}`}
              >
                EN
              </a>
              <span className="text-ink/20" aria-hidden="true">/</span>
              <a
                href={languageHref("ms")}
                lang="ms"
                hrefLang="ms-MY"
                aria-label="Bahasa Malaysia"
                aria-current={language === "ms" ? "page" : undefined}
                className={`language-button inline-flex items-center justify-center ${language === "ms" ? "is-active" : ""}`}
              >
                BM
              </a>
            </nav>
            <button
              ref={menuButton}
              type="button"
              className="grid h-11 w-11 place-items-center border border-ink/15 text-xl lg:hidden"
              aria-label={
                isMenuOpen
                  ? language === "en"
                    ? "Close navigation menu"
                    : "Tutup menu navigasi"
                  : t.nav.menu
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <List />}
            </button>
          </div>
        </div>
        <div className="corporate-nav hidden lg:block">
          <div className="site-container flex items-stretch justify-between">
            <nav
              className="flex items-stretch"
              aria-label={
                language === "en" ? "Main navigation" : "Navigasi utama"
              }
            >
              {(Object.keys(pageFiles) as PageId[]).map((item) => (
                <a
                  href={pageHref(item, language)}
                  key={item}
                  aria-current={page === item ? "page" : undefined}
                  className={`corporate-nav-link ${page === item ? "is-active" : ""}`}
                >
                  {c.nav[item]}
                </a>
              ))}
            </nav>
            <a className="corporate-nav-quote" href={pageHref("contact", language)}>
              {t.nav.quote}
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
        {isMenuOpen ? (
          <nav
            id="mobile-navigation"
            className="site-container flex flex-col border-t border-ink/10 bg-white py-3 lg:hidden"
            aria-label={t.nav.menu}
          >
            {(Object.keys(pageFiles) as PageId[]).map((item) => (
              <a
                href={pageHref(item, language)}
                key={item}
                onClick={() => setIsMenuOpen(false)}
                aria-current={page === item ? "page" : undefined}
                className={`px-3 py-3 text-sm font-medium ${page === item ? "bg-mist text-brand" : ""}`}
              >
                {c.nav[item]}
              </a>
            ))}
            <a
              href="sjdb-company-profile-2026.pdf"
              download
              className="flex items-center gap-3 px-3 py-3 text-sm font-semibold text-brand"
            >
              <DownloadSimple />
              {t.about.download}
            </a>
          </nav>
        ) : null}
      </header>

      <main id="main">
        {page !== "home" ? (
          <PageHeading page={page} language={language} />
        ) : null}
        {page === "home" ? (
          <>
            <CorporateHero language={language} whatsappLink={whatsappLink} />
            <div className="corporate-promise">
              <div className="site-container grid gap-6 md:grid-cols-3">
                {[
                  { icon: UsersThree, text: t.hero.trust1 },
                  { icon: ShieldCheck, text: t.hero.trust2 },
                  { icon: Buildings, text: t.hero.trust3 },
                ].map(({ icon: Icon, text }) => (
                  <div className="flex items-center gap-4" key={text}>
                    <Icon
                      className="text-3xl text-[#d92c24]"
                      aria-hidden="true"
                    />
                    <span className="font-display text-sm font-semibold">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <HomeOverview language={language} />
            <HomeServices language={language} />
            <HomeProjects language={language} onProject={setSelectedProject} />
            <EnquiryBanner language={language} whatsappLink={whatsappLink} />
          </>
        ) : null}
        {page === "services" ? (
          <>
            <section id="services" className="section-space bg-white">
              <div className="site-container">
                <div className="section-heading" data-reveal>
                  <div>
                    <p className="eyebrow mb-4">{t.services.eyebrow}</p>
                    <h2>{t.services.title}</h2>
                  </div>
                  <p className="section-description">
                    {t.services.description}
                  </p>
                </div>
                <div
                  className="mb-8 flex flex-wrap gap-2 border-b border-ink/10 pb-5"
                  aria-label={t.nav.services}
                >
                  {serviceGroups.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={item.id === activeService}
                      onClick={() => setActiveService(item.id)}
                      className={`service-tab ${item.id === activeService ? "is-active" : ""}`}
                    >
                      <span className="mr-2 text-[10px] opacity-60">
                        0{index + 1}
                      </span>
                      {item.title[language]}
                    </button>
                  ))}
                </div>
                <div className="mb-8 grid overflow-hidden bg-mist md:grid-cols-[.8fr_1.2fr]">
                  <img
                    src={servicePhotography[group.id]}
                    alt={group.title[language]}
                    width="900"
                    height="675"
                    className="h-[250px] w-full object-cover md:h-full md:max-h-[300px]"
                  />
                  <div className="flex flex-col items-start justify-center gap-4 p-7 sm:p-10">
                    <p className="eyebrow">{c.services.eyebrow}</p>
                    <h3 className="font-display text-2xl font-bold">
                      {group.title[language]}
                    </h3>
                    <p className="max-w-[52ch] text-sm leading-relaxed text-muted">
                      {group.description[language]}
                    </p>
                    <button
                      type="button"
                      className="inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-brand"
                      onClick={() => handleEnquire(group.services[0].title.en)}
                    >
                      {c.services.details}
                      <ArrowUpRight aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div
                  className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
                  key={group.id}
                >
                  {group.services.map((service, index) => {
                    const Icon =
                      serviceIcons[service.icon as keyof typeof serviceIcons] ??
                      Sparkle;
                    return (
                      <article
                        key={service.title.en}
                        className="service-card group"
                      >
                        <div className="mb-8 flex items-center justify-between">
                          <span className="grid h-12 w-12 place-items-center bg-mist text-[26px] text-brand">
                            <Icon aria-hidden="true" />
                          </span>
                          <span className="text-[11px] text-muted/60">
                            0{index + 1}
                          </span>
                        </div>
                        <h3 className="mb-3 font-display text-lg font-bold leading-snug">
                          {service.title[language]}
                        </h3>
                        <p className="mb-7 flex-1 text-sm leading-[1.6] text-muted">
                          {service.description[language]}
                        </p>
                        <button
                          type="button"
                          aria-label={`${t.services.ask}: ${service.title[language]}`}
                          onClick={() => handleEnquire(service.title.en)}
                          className="flex min-h-11 items-center justify-between border-t border-ink/10 pt-4 text-xs font-semibold text-brand"
                        >
                          {t.services.ask}
                          <ArrowUpRight
                            className="text-lg transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </button>
                      </article>
                    );
                  })}
                </div>
                <div className="mt-6 flex flex-col items-start justify-between gap-4 text-sm text-muted sm:flex-row sm:items-center">
                  <p>{group.description[language]}</p>
                  <a
                    href={pageHref("contact", language)}
                    className="inline-flex min-h-11 shrink-0 items-center gap-2 font-semibold text-brand"
                  >
                    {t.services.viewAll}
                    <ArrowRight aria-hidden="true" />
                  </a>
                </div>
              </div>
            </section>

            <section className="bg-ink py-16 text-white lg:py-20">
              <div className="site-container">
                <div className="mb-12 grid gap-5 lg:grid-cols-[1fr_1.3fr]">
                  <p className="eyebrow !text-white/60">{t.process.eyebrow}</p>
                  <h2 className="max-w-[24ch] !text-white">
                    {t.process.title}
                  </h2>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                  {[1, 2, 3].map((n) => (
                    <div
                      className="border-t border-white/20 pt-6"
                      key={n}
                      data-reveal
                    >
                      <div className="mb-6 flex items-center justify-between">
                        <span className="font-display text-4xl text-white/30">
                          0{n}
                        </span>
                        {n === 3 ? (
                          <CheckCircle
                            className="text-2xl text-white/50"
                            aria-hidden="true"
                          />
                        ) : (
                          <ArrowRight
                            className="text-2xl text-white/50"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <h3 className="mb-3 font-display text-xl font-semibold">
                        {t.process[`step${n}Title` as "step1Title"]}
                      </h3>
                      <p className="max-w-[39ch] text-sm leading-[1.7] text-white/65">
                        {t.process[`step${n}Text` as "step1Text"]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : null}
        {page === "about" ? (
          <>
            <section id="about" className="section-space bg-mist">
              <div className="site-container grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
                <div className="relative pb-10" data-reveal>
                  <img
                    src="assets/sjdb-team-briefing.webp"
                    alt={
                      language === "en"
                        ? "SJDB cleaning team attending a site briefing"
                        : "Pasukan pembersihan SJDB mengikuti taklimat di tapak"
                    }
                    width="1800"
                    height="1350"
                    loading="lazy"
                    className="aspect-[5/4] w-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 flex max-w-[85%] items-center gap-4 bg-ink px-6 py-5 text-white">
                    <UsersThree
                      className="shrink-0 text-3xl text-white/70"
                      aria-hidden="true"
                    />
                    <p className="max-w-[25ch] text-sm leading-relaxed">
                      {t.about.photoCaption}
                    </p>
                  </div>
                </div>
                <div data-reveal>
                  <p className="eyebrow mb-4">{t.about.eyebrow}</p>
                  <h2 className="mb-6">{c.about.title}</h2>
                  <p className="mb-8 text-[15px] leading-[1.65] text-muted">
                    {t.about.description}
                  </p>
                  <div className="flex flex-col gap-5">
                    {[1, 2, 3].map((n) => (
                      <div className="flex gap-3" key={n}>
                        <Check
                          className="mt-1 shrink-0 text-brand"
                          aria-hidden="true"
                        />
                        <div>
                          <h3 className="mb-1 text-sm font-semibold">
                            {t.about[`point${n}Title` as "point1Title"]}
                          </h3>
                          <p className="text-sm leading-relaxed text-muted">
                            {t.about[`point${n}Text` as "point1Text"]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a
                    className="mt-8 inline-flex min-h-11 items-center gap-3 border-b border-ink/30 py-2 text-sm font-semibold"
                    href="sjdb-company-profile-2026.pdf"
                    download
                  >
                    <DownloadSimple className="text-lg" aria-hidden="true" />
                    {t.about.download}
                    <span className="text-[10px] font-normal text-muted">
                      PDF · 2026
                    </span>
                  </a>
                </div>
              </div>
            </section>

            <CompanyDetails language={language} />
          </>
        ) : null}
        {page === "projects" ? (
          <>
            <section id="projects" className="section-space">
              <div className="site-container">
                <div className="section-heading" data-reveal>
                  <div>
                    <p className="eyebrow mb-4">{t.projects.eyebrow}</p>
                    <h2>{t.projects.title}</h2>
                  </div>
                  <p className="section-description">
                    {t.projects.description}
                  </p>
                </div>
                <div
                  className="mb-7 flex flex-wrap gap-2"
                  aria-label={t.nav.projects}
                >
                  {(["all", "commercial", "residential"] as const).map(
                    (filter) => (
                      <button
                        className={`project-filter ${projectFilter === filter ? "is-active" : ""}`}
                        type="button"
                        aria-pressed={projectFilter === filter}
                        onClick={() => setProjectFilter(filter)}
                        key={filter}
                      >
                        {t.projects[filter]}
                      </button>
                    ),
                  )}
                </div>
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                  {allProjects
                    .filter(
                      (project) =>
                        projectFilter === "all" ||
                        project.category === projectFilter,
                    )
                    .map((project) => (
                      <button
                        key={project.id}
                        type="button"
                        className="group text-left"
                        aria-label={`${t.projects.view}: ${project.title}`}
                        onClick={() => setSelectedProject(project)}
                      >
                        <div className="relative mb-4 aspect-[4/3] overflow-hidden bg-mist">
                          <img
                            src={project.image}
                            alt={`${project.title} — ${project.scope[language]}`}
                            width="800"
                            height="600"
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.025]"
                          />
                          <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white text-xl transition-colors group-hover:bg-ink group-hover:text-white">
                            <ArrowUpRight aria-hidden="true" />
                          </span>
                        </div>
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-display text-lg font-bold">
                            {project.title}
                          </h3>
                          <span className="mt-1 text-[10px] uppercase tracking-wider text-muted">
                            {project.location}
                          </span>
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-muted">
                          {project.scope[language]}
                        </p>
                      </button>
                    ))}
                </div>
                <p className="mt-7 text-[11px] text-muted">
                  {t.projects.sourceNote}
                </p>
              </div>
            </section>
          </>
        ) : null}
        {page === "gallery" ? <WorkGallery language={language} /> : null}
        {page === "contact" ? (
          <>
            <section id="contact" className="section-space">
              <div className="site-container grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
                <div data-reveal>
                  <p className="eyebrow mb-4">{t.contact.eyebrow}</p>
                  <h2 className="mb-5 max-w-[16ch]">{t.contact.title}</h2>
                  <p className="mb-8 max-w-[42ch] text-[15px] leading-relaxed text-muted">
                    {t.contact.description}
                  </p>
                  <div className="flex flex-col gap-7">
                    <div className="flex gap-4">
                      <span className="contact-icon">
                        <Phone aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                          {t.contact.callTitle}
                        </h3>
                        <a
                          className="contact-link"
                          href={`tel:${contact.mobile}`}
                        >
                          +60 12-600 4127{" "}
                          <span className="text-[11px] font-normal text-muted">
                            {t.contact.mobile}
                          </span>
                        </a>
                        <a
                          className="mt-2 block text-sm hover:text-brand"
                          href={`tel:${contact.office}`}
                        >
                          +60 3-6038 3285{" "}
                          <span className="ml-2 text-[11px] text-muted">
                            {t.contact.office}
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span className="contact-icon">
                        <EnvelopeSimple aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                          {t.contact.emailTitle}
                        </h3>
                        <a
                          className="contact-link break-words"
                          href={`mailto:${contact.email}`}
                        >
                          {contact.email}
                        </a>
                        <a
                          className="mt-2 block text-sm hover:text-brand"
                          href={`mailto:${contact.secondaryEmail}`}
                        >
                          {contact.secondaryEmail}
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span className="contact-icon">
                        <MapPin aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                          {t.contact.visitTitle}
                        </h3>
                        <address className="text-sm not-italic leading-[1.7]">
                          No. 28G, Jalan DC 4/3, Desa Coalfields,
                          <br />
                          47000 Sungai Buloh, Selangor, Malaysia.
                        </address>
                        <a
                          href={contact.maps}
                          className="mt-2 inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-brand"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t.contact.directions}
                          <ArrowUpRight aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border border-ink/10 bg-mist p-6 sm:p-9">
                  <form
                    onSubmit={handleSubmit}
                    className="grid gap-5"
                    onChange={() => preparedEnquiry && setPreparedEnquiry(null)}
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="form-label" htmlFor="enquiry-name">
                        {t.contact.name}
                        <span aria-hidden="true"> *</span>
                        <input
                          id="enquiry-name"
                          name="name"
                          autoComplete="name"
                          maxLength={100}
                          required
                          placeholder={t.contact.namePlaceholder}
                          className="form-input"
                        />
                      </label>
                      <label className="form-label" htmlFor="enquiry-phone">
                        {t.contact.phone}
                        <span aria-hidden="true"> *</span>
                        <input
                          id="enquiry-phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          maxLength={24}
                          minLength={7}
                          pattern={String.raw`[+0-9\(\) \-]{7,24}`}
                          required
                          placeholder={t.contact.phonePlaceholder}
                          className="form-input"
                        />
                      </label>
                    </div>
                    <label className="form-label" htmlFor="enquiry-service">
                      {t.contact.service}
                      <span aria-hidden="true"> *</span>
                      <select
                        id="enquiry-service"
                        name="service"
                        required
                        className="form-input"
                        value={selectedService}
                        onChange={(event) =>
                          setSelectedService(event.target.value)
                        }
                      >
                        <option value="" disabled>
                          {t.contact.servicePlaceholder}
                        </option>
                        {allServices.map((service) => (
                          <option
                            value={service.title.en}
                            key={service.title.en}
                          >
                            {service.title[language]}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="form-label" htmlFor="enquiry-location">
                      {t.contact.location}
                      <input
                        id="enquiry-location"
                        name="location"
                        maxLength={200}
                        autoComplete="address-level2"
                        placeholder={t.contact.locationPlaceholder}
                        className="form-input"
                      />
                    </label>
                    <label className="form-label" htmlFor="enquiry-message">
                      {t.contact.message}
                      <textarea
                        id="enquiry-message"
                        name="message"
                        rows={3}
                        maxLength={1500}
                        placeholder={t.contact.messagePlaceholder}
                        className="form-input resize-y"
                      />
                    </label>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <button
                        type="submit"
                        value="whatsapp"
                        className="button-primary flex-1 !bg-[#176947] hover:!bg-[#105738]"
                      >
                        <WhatsappLogo className="text-xl" aria-hidden="true" />
                        {t.contact.whatsapp}
                        <ArrowUpRight aria-hidden="true" />
                      </button>
                      <button
                        type="submit"
                        value="email"
                        className="button-outline bg-white !px-4"
                      >
                        <EnvelopeSimple aria-hidden="true" />
                        {t.contact.email}
                      </button>
                    </div>
                    <p className="text-[11px] leading-relaxed text-muted">
                      {t.contact.notice}
                    </p>
                    {preparedEnquiry ? (
                      <div
                        role="status"
                        className="border border-[#176947]/20 bg-white p-4 text-xs leading-relaxed text-ink"
                      >
                        <p className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 shrink-0 text-[#176947]" />
                          {preparedEnquiry.channel === "email"
                            ? t.contact.successEmail
                            : t.contact.successWhatsApp}
                        </p>
                        <a
                          className="mt-2 inline-flex min-h-11 items-center gap-2 font-semibold text-brand"
                          href={preparedEnquiry.url}
                          target={
                            preparedEnquiry.channel === "whatsapp"
                              ? "_blank"
                              : undefined
                          }
                          rel="noopener noreferrer"
                        >
                          {t.contact.ready}
                          <ArrowUpRight />
                        </a>
                      </div>
                    ) : null}
                  </form>
                </div>
              </div>
            </section>
            <section className="section-space bg-[#f8f9fa]">
              <div className="site-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
                <div data-reveal>
                  <p className="eyebrow mb-4">{t.faq.eyebrow}</p>
                  <h2 className="max-w-[15ch]">{t.faq.title}</h2>
                  <a
                    className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand"
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsappLogo className="text-xl" aria-hidden="true" />
                    {t.hero.secondary}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
                <div>
                  {t.faq.items.map((faq) => (
                    <details className="faq-item" id={`faq-${faq.id}`} key={faq.id}>
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-sm font-semibold">
                        {faq.question}
                        <CaretDown
                          className="shrink-0 transition-transform"
                          aria-hidden="true"
                        />
                      </summary>
                      <p className="max-w-[65ch] pb-6 pr-6 text-sm leading-[1.7] text-muted">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : null}
        {page !== "home" && page !== "contact" ? (
          <EnquiryBanner language={language} whatsappLink={whatsappLink} />
        ) : null}
      </main>

      <footer className="bg-[#102638] pb-24 pt-14 text-white sm:pb-7">
        <div className="site-container">
          <div className="mb-12 grid gap-10 md:grid-cols-[1.5fr_1fr_1.2fr]">
            <div>
              <a
                href={pageHref("home", language)}
                className="mb-5 inline-flex items-center gap-3"
              >
                <img
                  src="assets/sjdb-logo-white.webp"
                  alt="SJDB"
                  width="48"
                  height="48"
                  className="rounded-lg"
                />
                <span className="font-display text-sm font-semibold">
                  {t.footer.company}
                </span>
              </a>
              <p className="max-w-[35ch] text-sm leading-relaxed text-white/60">
                {t.footer.description}
              </p>
              <a
                href="sjdb-company-profile-2026.pdf"
                download
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-xs text-white/85"
              >
                <DownloadSimple />
                {t.about.download}
              </a>
            </div>
            <div>
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/50">
                {t.footer.services}
              </h3>
              <div className="flex flex-col gap-4 text-sm">
                {serviceGroups.map((item) => (
                  <a
                    href={`${pageHref("services", language)}?category=${item.id}`}
                    key={item.id}
                    onClick={() => setActiveService(item.id)}
                    className="hover:text-white/65"
                  >
                    {item.title[language]}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/50">
                {t.footer.contact}
              </h3>
              <div className="flex flex-col gap-4 text-sm">
                <a
                  href={`tel:${contact.mobile}`}
                  className="flex items-center gap-3 hover:text-white/65"
                >
                  <Phone />
                  +60 12-600 4127
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 break-all hover:text-white/65"
                >
                  <EnvelopeSimple className="shrink-0" />
                  {contact.email}
                </a>
                <p className="flex items-start gap-3 text-white/60">
                  <MapPin className="mt-1 shrink-0" />
                  <span>
                    Desa Coalfields, Sungai Buloh,
                    <br />
                    Selangor, Malaysia.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-5 border-t border-white/15 pt-6 text-[10px] leading-relaxed text-white/50 md:flex-row">
            <div>
              <p>
                © {new Date().getFullYear()} SJDB. {t.footer.rights}
              </p>
              <p className="mt-2">
                SJDB Management and Services (M) Sdn Bhd (1571524-M)
                <br className="md:hidden" />
                <span className="hidden md:inline"> · </span>SJDB Facilities
                Resources (002605819-U)
              </p>
            </div>
            <a
              href="#"
              className="inline-flex min-h-11 items-center gap-2 self-start"
            >
              {t.footer.backTop}
              <ArrowDown className="rotate-180" />
            </a>
          </div>
        </div>
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label={t.floating.label}
      >
        <span className="hidden text-xs font-semibold sm:inline">
          {t.floating.label}
        </span>
        <WhatsappLogo
          className="text-[27px]"
          weight="fill"
          aria-hidden="true"
        />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-ink/10 bg-white pb-[env(safe-area-inset-bottom)] sm:hidden">
        <a
          href={`tel:${contact.mobile}`}
          className="flex h-14 items-center justify-center gap-2 text-sm font-semibold"
        >
          <Phone />
          {t.floating.mobileCall}
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 items-center justify-center gap-2 bg-[#176947] text-sm font-semibold text-white"
        >
          <WhatsappLogo className="text-lg" />
          {t.floating.mobileWhatsApp}
        </a>
      </div>

      <dialog
        ref={projectDialog}
        onCancel={() => setSelectedProject(null)}
        onClose={() => setSelectedProject(null)}
        onClick={handleDialogBackdrop}
        className="project-dialog"
        aria-labelledby="project-title"
      >
        {selectedProject ? (
          <div className="relative bg-white">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label={t.projects.close}
              className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white text-xl shadow-md"
            >
              <X />
            </button>
            <img
              src={selectedProject.image}
              alt={`${selectedProject.title} — ${selectedProject.scope[language]}`}
              className="max-h-[60vh] w-full object-contain bg-mist"
            />
            <div className="p-6 sm:p-8">
              <p className="eyebrow mb-3">{selectedProject.location}</p>
              <h2 id="project-title" className="!text-2xl">
                {selectedProject.title}
              </h2>
              <p className="mb-5 mt-3 text-sm text-muted">
                {selectedProject.scope[language]}
              </p>
              <button
                type="button"
                className="button-primary"
                onClick={() => {
                  setSelectedProject(null);
                  handleEnquire(allServices[0].title.en);
                }}
              >
                {t.nav.quote}
                <ArrowUpRight />
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
};

export default App;
