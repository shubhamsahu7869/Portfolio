"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUp,
  ChevronRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Phone,
  Send,
  Sparkles,
  Sun
} from "lucide-react";
import {
  achievements,
  education,
  navItems,
  profile,
  projects,
  skillGroups,
  timeline
} from "@/data/portfolio";

const sectionIds = ["home", "about", "skills", "projects", "experience", "education", "achievements", "contact"];
const filters = ["All", "MERN", "Frontend", "Full Stack"];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <span className="premium-chip rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em]">
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-zinc-600 dark:text-zinc-400">{text}</p>
    </motion.div>
  );
}

function CursorGlow() {
  const [point, setPoint] = useState({ x: -120, y: -120 });
  const [pressed, setPressed] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (event: PointerEvent) => setPoint({ x: event.clientX, y: event.clientY });
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const over = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      setHovering(Boolean(target?.closest("a, button, input, textarea")));
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointermove", over);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointermove", over);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-ring pointer-events-none fixed z-50 hidden rounded-full border border-aqua/55 bg-aqua/[0.035] mix-blend-screen backdrop-blur-[1px] lg:block"
        animate={{
          x: point.x - (hovering ? 30 : 20),
          y: point.y - (hovering ? 30 : 20),
          width: hovering ? 60 : pressed ? 30 : 40,
          height: hovering ? 60 : pressed ? 30 : 40,
          opacity: point.x > 0 ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 420, damping: 32, mass: 0.35 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[51] hidden h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_22px_rgba(245,199,107,0.72)] lg:block"
        animate={{
          x: point.x - 5,
          y: point.y - 5,
          scale: pressed ? 0.55 : hovering ? 1.5 : 1,
          opacity: point.x > 0 ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 700, damping: 26, mass: 0.22 }}
      />
    </>
  );
}

function Particles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {Array.from({ length: 34 }).map((_, index) => (
        <span
          key={index}
          className="particle absolute h-1 w-1 rounded-full bg-gold/50"
          style={{
            left: `${(index * 29) % 100}%`,
            top: `${(index * 47) % 100}%`,
            animationDelay: `${index * 0.35}s`,
            animationDuration: `${8 + (index % 7)}s`
          }}
        />
      ))}
    </div>
  );
}

function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 950);
    return () => window.clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] grid place-items-center bg-ink text-white"
    >
      <div className="text-center">
        <div className="mx-auto mb-6 h-16 w-16 animate-spin rounded-full border-2 border-white/10 border-t-aqua" />
        <p className="font-display text-2xl font-semibold">Shubham</p>
        <p className="mt-2 text-sm uppercase tracking-[0.35em] text-zinc-400">Portfolio loading</p>
      </div>
    </motion.div>
  );
}

function Navbar({
  activeSection,
  isDark,
  onThemeToggle
}: {
  activeSection: string;
  isDark: boolean;
  onThemeToggle: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-white/75 backdrop-blur-2xl dark:bg-ink/70">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-zinc-950 text-sm font-bold text-white shadow-glow dark:bg-gradient-to-br dark:from-gold dark:to-aqua dark:text-ink">
            S
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">Shubham Sahu</span>
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-zinc-950/5 p-1 shadow-premium backdrop-blur dark:bg-white/[0.045] lg:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={cx(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  activeSection === id
                    ? "bg-zinc-950 text-white dark:bg-gradient-to-r dark:from-gold dark:to-aqua dark:text-ink"
                    : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle light and dark mode"
            onClick={onThemeToggle}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-zinc-950/5 text-zinc-900 backdrop-blur transition hover:scale-105 dark:bg-white/[0.055] dark:text-white"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="rounded-full border border-white/10 bg-zinc-950/5 px-4 py-2 text-sm font-semibold dark:bg-white/[0.055] lg:hidden"
          >
            Menu
          </button>
        </div>
      </nav>
      {open && (
        <div className="mx-4 mb-4 rounded-3xl border border-white/10 bg-white/90 p-3 shadow-premium backdrop-blur-xl dark:bg-zinc-950/95 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-950 hover:text-white dark:text-zinc-200 dark:hover:bg-gold dark:hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 pt-32 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-radial-grid opacity-80" />
      <div className="noise-layer absolute inset-0" />
      <div className="absolute left-8 top-28 h-72 w-72 rounded-full bg-aqua/10 blur-3xl" />
      <div className="absolute right-8 top-40 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 pb-24 pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:pt-24">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="premium-chip mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-glow backdrop-blur">
            <Sparkles size={16} className="text-gold" />
            Available for internships, projects, and placement opportunities
          </div>
          <h1 className="font-display text-4xl font-semibold leading-[1.02] tracking-tight text-zinc-950 dark:text-white sm:text-5xl lg:text-7xl xl:text-[5.2rem]">
            {profile.name}
            <span className="block bg-gradient-to-r from-[#9a6400] via-zinc-950 to-[#007f70] bg-clip-text text-transparent dark:from-gold dark:via-white dark:to-aqua">
              {profile.role}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300 sm:text-xl">
            {profile.subtitle}. I blend engineering discipline, MERN stack execution, and clean product thinking to ship web experiences that feel fast, sharp, and reliable.
          </p>
          <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3">
            {[
              ["2+", "Internships"],
              ["MERN", "Core Stack"],
              ["2026", "Graduate"]
            ].map(([value, label]) => (
              <div key={label} className="premium-card rounded-3xl p-4">
                <p className="font-display text-2xl font-semibold text-gold">{value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={profile.resume} className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-aqua px-6 py-3 font-semibold text-ink shadow-glow transition hover:-translate-y-1">
              <Download size={18} />
              Download Resume
            </a>
            <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.055] px-6 py-3 font-semibold backdrop-blur transition hover:-translate-y-1 hover:border-gold/60">
              Contact Me
              <ChevronRight size={18} className="transition group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            {[
              { href: profile.github, icon: Github, label: "GitHub" },
              { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${profile.email}`, icon: Mail, label: "Email" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.055] text-zinc-700 backdrop-blur transition hover:-translate-y-1 hover:border-gold/40 hover:text-gold dark:text-white"
              >
                <item.icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-gold/20 via-aqua/10 to-violet/10 blur-2xl" />
          <div className="premium-card relative overflow-hidden rounded-[2.5rem] p-5">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_30%_15%,rgba(245,199,107,0.22),transparent_28%),linear-gradient(145deg,#181818,#050505)] p-6">
              <div className="flex h-full flex-col justify-between rounded-[1.45rem] border border-white/10 bg-black/20 p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">Profile</span>
                  <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_22px_rgba(52,211,153,0.9)]" />
                </div>
                <div className="relative mx-auto h-64 w-52 overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-gold/30 via-white/10 to-aqua/20 shadow-glow">
                  <Image
                    src="/images/shubham-profile.jpg"
                    alt="Shubham Sahu profile photo"
                    fill
                    priority
                    sizes="208px"
                    className="object-cover object-[52%_42%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>
                <div>
                  <p className="font-display text-2xl font-semibold text-white">{profile.fullName}</p>
                  <p className="mt-2 text-sm text-zinc-300">ECE Student | MERN Developer | Problem Solver</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const cards = [
    "Electronics & Communication Engineering student",
    "Passionate about Full Stack Development",
    "MERN Stack Developer",
    "Interested in AI, Web Development, and Problem Solving",
    "Internship and placement focused"
  ];

  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="About Me" title="Engineering student with builder energy." text="Shubham is shaping a developer profile around practical projects, strong fundamentals, and modern web execution." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {cards.map((card, index) => (
            <motion.div
              key={card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="premium-card rounded-3xl p-6 transition hover:-translate-y-2 hover:border-gold/40"
            >
              <span className="mb-5 grid h-10 w-10 place-items-center rounded-2xl border border-gold/25 bg-gold/10 text-gold">{index + 1}</span>
              <p className="font-medium leading-7 text-zinc-700 dark:text-zinc-200">{card}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Skills" title="A focused modern web stack." text="Core frontend, backend, programming, and tooling skills presented with animated capability indicators." />
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="premium-card rounded-3xl p-6"
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-display text-2xl font-semibold">{group.title}</h3>
                <span className="text-sm font-semibold text-gold">{group.level}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-zinc-900/10 dark:bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${group.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-gold via-aqua to-gold"
                />
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-sm text-zinc-700 backdrop-blur dark:text-zinc-200">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ title, image, tone }: { title: string; image: string; tone: string }) {
  return (
    <div className={cx("relative h-64 overflow-hidden rounded-3xl bg-gradient-to-br p-3", tone)}>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(245,199,107,0.22),transparent_45%)]" />
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/15 bg-black/80 shadow-premium">
        <div className="absolute left-4 top-4 z-10 flex gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-2 backdrop-blur-md">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <Image
          src={image}
          alt={`${title} landing page screenshot`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-top transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-5 pt-16">
          <p className="truncate font-display text-lg font-semibold text-white">{title}</p>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const visibleProjects = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Projects" title="Public builds with product polish." text="A filtered project gallery featuring Shubham's GitHub work and the requested flagship portfolio projects." />
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cx(
                "rounded-full border px-5 py-2 text-sm font-semibold transition",
                filter === item
                  ? "border-gold bg-gradient-to-r from-gold to-aqua text-ink"
                  : "border-white/10 bg-white/[0.055] text-zinc-700 hover:border-gold/60 dark:text-zinc-200"
              )}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="premium-card group rounded-[2rem] p-4 transition hover:-translate-y-2 hover:border-gold/40"
            >
              <ProjectVisual title={project.title} image={project.image} tone={project.imageTone} />
              <div className="p-3 pt-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
                  <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold">
                    {project.category}
                  </span>
                </div>
                <p className="leading-7 text-zinc-600 dark:text-zinc-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {highlight}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-aqua px-4 py-2 text-sm font-semibold text-ink transition hover:-translate-y-0.5">
                    <Github size={16} />
                    GitHub
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-sm font-semibold transition hover:border-gold/60"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                      <ExternalLink size={16} />
                      No Live Demo
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceEducationAchievements() {
  return (
    <>
      <section id="experience" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Experience" title="A timeline built for momentum." text="Clear development experience, internship readiness, and placement preparation in one structured path." />
          <div className="relative border-l border-white/10 pl-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="premium-card relative mb-8 rounded-3xl p-6 last:mb-0"
              >
                <span className="absolute -left-[2.95rem] top-6 grid h-11 w-11 place-items-center rounded-full border border-gold/30 bg-ink text-gold shadow-glow">
                  <item.icon size={18} />
                </span>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">{item.meta}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="premium-card mx-auto max-w-5xl rounded-[2rem] p-8 text-center sm:p-10">
          <SectionHeading eyebrow="Education" title={education.degree} text="Academic foundation in electronics, communication systems, engineering fundamentals, and software development practice." />
          <p className="mb-5 rounded-3xl border border-white/10 bg-white/[0.055] p-6 font-semibold">
            {education.institute}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 font-semibold">{education.cgpa}</div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 font-semibold">{education.graduation}</div>
          </div>
        </div>
      </section>

      <section id="achievements" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Achievements" title="Proof points and growth tracks." text="A compact view of Shubham's learning, project delivery, and placement preparation focus areas." />
          <div className="grid gap-5 md:grid-cols-3">
            {achievements.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="premium-card rounded-3xl p-6 transition hover:-translate-y-2 hover:border-gold/50"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/15 text-gold">
                  <item.icon size={21} />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-300">{item.text}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="Contact" title="Let’s build something useful." text="Reach out for internships, collaborations, full stack roles, or project discussions." />
          <div className="space-y-3">
            {[
              { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
              { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replaceAll(" ", "")}` },
              { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
              { icon: Github, label: "GitHub", href: profile.github },
              { icon: MapPin, label: profile.location, href: "#contact" }
            ].map((item) => (
              <a key={item.label} href={item.href} className="premium-card flex items-center gap-3 rounded-3xl p-4 transition hover:border-gold/50">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-gold/25 bg-gold/10 text-gold">
                  <item.icon size={18} />
                </span>
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </div>
          <p className="mt-4 rounded-3xl border border-gold/20 bg-gold/10 p-4 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
            Contact form messages are sent to <span className="font-semibold text-gold">{profile.email}</span>. On the first live submission, FormSubmit may send a one-time activation email to this inbox.
          </p>
        </div>
        <form action={`https://formsubmit.co/${profile.email}`} method="POST" className="premium-card rounded-[2rem] p-6 sm:p-8">
          <input type="hidden" name="_subject" value="New portfolio message for Shubham" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-semibold">Name</span>
              <input name="name" required className="w-full rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 outline-none transition focus:border-gold" placeholder="Your name" />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold">Email</span>
              <input name="email" type="email" required className="w-full rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 outline-none transition focus:border-gold" placeholder="you@example.com" />
            </label>
          </div>
          <label className="mt-5 block space-y-2">
            <span className="text-sm font-semibold">Message</span>
            <textarea name="message" required rows={7} className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 outline-none transition focus:border-gold" placeholder="Tell Shubham about the opportunity..." />
          </label>
          <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-aqua px-6 py-3 font-bold text-ink shadow-glow transition hover:-translate-y-1 sm:w-auto">
            Send Message
            <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}

export default function PortfolioClient() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(true);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 700);
      const current = sectionIds.findLast((id) => {
        const el = document.getElementById(id);
        return el ? el.offsetTop - 160 <= window.scrollY : false;
      });
      if (current) setActiveSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-50 text-zinc-950 dark:bg-ink dark:text-white">
      <LoadingScreen />
      <Particles />
      <CursorGlow />
      <motion.div className="fixed left-0 right-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-gold via-aqua to-violet" style={{ scaleX }} />
      <Navbar activeSection={activeSection} isDark={isDark} onThemeToggle={() => setIsDark((value) => !value)} />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceEducationAchievements />
        <Contact />
      </div>
      <footer className="relative z-10 border-t border-white/10 px-4 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
        © 2026 Shubham Sahu. Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons.
      </footer>
      {showTop && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-r from-gold to-aqua text-ink shadow-glow transition hover:-translate-y-1"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </main>
  );
}
