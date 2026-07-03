"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { MapPin, Calendar, CheckCircle2, BriefcaseBusiness } from "lucide-react";
import { experiences } from "@/data/portfolio";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (shouldReduce) { setCount(target); return; }
    let n = 0;
    const step = Math.ceil(target / 20);
    const t = setInterval(() => {
      n += step;
      if (n >= target) { setCount(target); clearInterval(t); }
      else setCount(n);
    }, 50);
    return () => clearInterval(t);
  }, [inView, target, shouldReduce]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function TechChip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-slate-300">
      {label}
    </span>
  );
}

function ProjectBadge({ name }: { name: string }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
      <Link
        href="#projects"
        className="rounded-lg border border-sky-400/20 bg-sky-400/5 px-3 py-1 text-xs font-semibold text-sky-300 transition hover:border-sky-400/40 hover:bg-sky-400/10"
      >
        {name}
      </Link>
    </motion.div>
  );
}

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.15 }}
      className="relative rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(14,165,233,0.06),0_16px_60px_-20px_rgba(14,165,233,0.35)] backdrop-blur-2xl"
    >
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/30 to-blue-500/20 ring-1 ring-sky-400/20">
            <BriefcaseBusiness className="h-5 w-5 text-sky-300" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{exp.title}</h3>
            <p className="text-sm font-medium text-sky-300">{exp.company}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {exp.current && (
            <span className="rounded-full border border-green-400/30 bg-green-400/10 px-3 py-0.5 text-xs font-semibold text-green-300">
              Current
            </span>
          )}
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-xs font-medium text-slate-400">
            {(exp as any).type}
          </span>
        </div>
      </div>

      {/* Meta */}
      <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5 text-sky-400" />
          {exp.startDate} — {exp.current ? "Present" : exp.endDate}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-sky-400" />
          {exp.location}
        </span>
      </div>

      {/* Achievements */}
      {(exp as any).achievements && (
        <div className="mt-4 flex flex-wrap gap-3">
          {(exp as any).achievements.map((a: { value: number; suffix: string; label: string }) => (
            <div key={a.label} className="rounded-xl border border-sky-400/15 bg-sky-400/5 px-4 py-2 text-center">
              <div className="text-lg font-bold text-sky-300">
                <CountUp target={a.value} suffix={a.suffix} />
              </div>
              <div className="text-[10px] text-slate-400">{a.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Responsibilities */}
      <div className="mt-4 space-y-2">
        {exp.description.map((item) => (
          <div key={item} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-400" />
            <span className="text-xs leading-5 text-slate-300">{item}</span>
          </div>
        ))}
      </div>

      {/* Projects */}
      {(exp as any).projects?.length > 0 && (
        <div className="mt-4">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Projects</p>
          <div className="flex flex-wrap gap-2">
            {(exp as any).projects.map((p: string) => <ProjectBadge key={p} name={p} />)}
          </div>
        </div>
      )}

      {/* Tech chips */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {exp.technologies.map((t) => <TechChip key={t} label={t} />)}
      </div>
    </motion.div>
  );
}

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24">
      <div className="px-6">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-14 text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.24em] text-sky-200 uppercase">
            Experience
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Career Journey</h2>
          <p className="mt-3 mx-auto max-w-xl text-sm text-slate-400">
            Professional growth from Backend Intern to Backend Developer, building scalable backend systems and production-ready applications.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line — sits behind dots, grows with content */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-sky-400/60 via-sky-400/20 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex gap-8">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    className="mt-6 h-10 w-10 rounded-full border-2 border-sky-400/50 bg-slate-950 shadow-[0_0_16px_rgba(14,165,233,0.4)] flex items-center justify-center"
                  >
                    <div className={`h-3 w-3 rounded-full ${exp.current ? "bg-sky-400 shadow-[0_0_8px_rgba(14,165,233,0.8)]" : "bg-slate-500"}`} />
                  </motion.div>
                </div>

                {/* Card */}
                <div className="flex-1 pb-2">
                  <ExperienceCard exp={exp} index={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
