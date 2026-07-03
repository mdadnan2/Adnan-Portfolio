"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Github, ExternalLink, X, ChevronDown, ChevronUp, Briefcase } from "lucide-react";
import { projects } from "@/data/portfolio";
import Link from "next/link";

type Project = typeof projects[0];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

/* ── Case Study Modal ── */
function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [open, setOpen] = useState<number | null>(0);
  const cs = (project as any).caseStudy;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const sections = [
    { title: "Problem Statement", content: cs.problem },
    { title: "Architecture Overview", content: cs.architecture },
    { title: "Engineering Challenges", content: cs.challenges.join(" • ") },
    { title: "Key Decisions", content: cs.decisions.join(" • ") },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          onWheel={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-[28px] border border-white/10 bg-slate-950 p-8 shadow-[0_0_80px_rgba(14,165,233,0.15)]"
        >
          <button onClick={onClose} className="absolute right-5 top-5 rounded-xl border border-white/10 bg-white/5 p-2 text-slate-400 hover:text-white transition">
            <X className="h-4 w-4" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">{(project as any).icon}</span>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{(project as any).category}</div>
              <h3 className="text-xl font-bold text-white">{project.title} — Case Study</h3>
            </div>
          </div>

          {/* Tech stack */}
          <div className="mb-6 flex flex-wrap gap-1.5">
            {cs.stack.map((t: string) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-slate-300">{t}</span>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {sections.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-white">{s.title}</span>
                  {open === i ? <ChevronUp className="h-4 w-4 text-sky-400" /> : <ChevronDown className="h-4 w-4 text-slate-500" />}
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-sm leading-6 text-slate-400">{s.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Product Banner ── */
function ProductBanner({ project }: { project: Project }) {
  const p = project as any;
  return (
    <div className={`relative h-44 w-full overflow-hidden rounded-[20px] bg-gradient-to-br ${p.color} border border-white/10`}>
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-[0.08]" />
      {/* Glow */}
      <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 30% 50%, ${p.glow}, transparent 60%)` }} />
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-end p-5">
        <span className="text-4xl mb-2">{p.icon}</span>
        <div className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: p.accent }}>{p.category}</div>
        <div className="text-xl font-bold text-white mt-0.5">{project.title}</div>
      </div>
      {/* Professional badge */}
      {p.professional && (
        <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-950/60 px-3 py-1 text-[10px] font-semibold text-slate-300 backdrop-blur-sm">
          <Briefcase className="h-3 w-3" style={{ color: p.accent }} />
          Professional Project
        </div>
      )}
    </div>
  );
}

/* ── Product Card ── */
function ProductCard({ project, index }: { project: Project; index: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const p = project as any;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (shouldReduce || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <>
      <motion.article
        ref={cardRef}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        whileHover={{ y: -6 }}
        onMouseMove={handleMouseMove}
        className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl transition-all duration-300 ${p.border} flex flex-col`}
        style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.04)" }}
      >
        {/* Mouse-follow glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-[28px]"
          style={{ background: `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, ${p.glow}, transparent 70%)` }}
        />

        {/* Banner */}
        <ProductBanner project={project} />

        {/* Body */}
        <div className="relative mt-5 flex flex-col flex-1 gap-4">
          {/* Title row */}
          <div>
            <h3 className="text-lg font-bold text-white">{project.title}</h3>
            <p className="mt-1.5 text-sm leading-6 text-slate-400">{p.tagline}</p>
          </div>

          {/* Engineering metrics */}
          <div className="grid grid-cols-2 gap-2">
            {p.metrics.map((m: { label: string; value: string }) => (
              <div key={m.label} className="rounded-xl border border-white/8 bg-slate-950/30 px-3 py-2">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">{m.label}</div>
                <div className="mt-0.5 text-xs font-semibold text-slate-200">{m.value}</div>
              </div>
            ))}
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.06 + i * 0.03 }}
                whileHover={{ scale: 1.08, y: -1 }}
                className="rounded-full border border-white/10 bg-slate-950/40 px-2.5 py-0.5 text-[11px] font-medium text-slate-300 transition-colors hover:text-sky-300"
                style={{ borderColor: `${p.accent}22` }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="mt-auto flex gap-2 pt-1">
            {!p.professional && (
              <Link
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs font-semibold text-slate-300 transition hover:border-white/20 hover:text-white"
              >
                <Github className="h-3.5 w-3.5" /> GitHub
              </Link>
            )}
            {p.liveDemo && (
              <Link
                href={p.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-950 transition"
                style={{ background: p.accent }}
              >
                <ExternalLink className="h-3.5 w-3.5" /> Live Demo
              </Link>
            )}
            <button
              onClick={() => setCaseStudyOpen(true)}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-semibold transition"
              style={{ borderColor: `${p.accent}40`, color: p.accent, background: `${p.accent}10` }}
            >
              Case Study
            </button>
          </div>
        </div>

        {/* Inset border glow on hover */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ boxShadow: `inset 0 0 0 1px ${p.accent}40` }}
        />
      </motion.article>

      {caseStudyOpen && (
        <CaseStudyModal project={project} onClose={() => setCaseStudyOpen(false)} />
      )}
    </>
  );
}

/* ── Section ── */
export function ProjectsShowcase() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.05]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(14,165,233,0.07),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.06),transparent_40%)]" />

      <div className="px-6">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-14 text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.24em] text-sky-200 uppercase">
            Projects
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Featured Engineering Products
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            Production-ready software systems demonstrating backend architecture, secure authentication, scalable APIs, cloud deployment, and enterprise engineering practices.
          </p>
          {/* Animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 h-px w-32 origin-center bg-gradient-to-r from-transparent via-sky-400/60 to-transparent"
          />
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <ProductCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
