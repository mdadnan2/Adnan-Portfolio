"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Github, GitBranch, GitCommit, Star, Users, BookOpen, ExternalLink } from "lucide-react";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const profileStats = [
  { label: "Repositories", value: "20+", icon: BookOpen },
  { label: "Commits", value: "1000+", icon: GitCommit },
  { label: "Followers", value: "10+", icon: Users },
  { label: "Stars", value: "15+", icon: Star },
];

const pinnedRepos = [
  { name: "Tiffin-Management-Service", desc: "Full-stack meal subscription & delivery platform", lang: "TypeScript", url: "https://github.com/mdadnan2/Tiffin-Management-Service", color: "#3178c6" },
  { name: "Smart-Appointment-Slot-Optimizer", desc: "Intelligent scheduling engine with conflict detection", lang: "TypeScript", url: "https://github.com/mdadnan2/Smart-Appointment-Slot-Optimizer", color: "#3178c6" },
  { name: "Trackventory", desc: "Community distribution & inventory management system", lang: "JavaScript", url: "https://github.com/mdadnan2/Trackventory", color: "#f1e05a" },
  { name: "Coaching-Management-System", desc: "Education ERP with real-time notifications", lang: "JavaScript", url: "https://github.com/mdadnan2/Coaching-Management-System", color: "#f1e05a" },
];

const focusAreas = [
  "Backend API Architecture",
  "Database Optimization",
  "Cloud Deployments",
  "Authentication Systems",
  "System Design",
  "Testing & Documentation",
];

const languages = [
  { name: "TypeScript", pct: 45, color: "#3178c6" },
  { name: "JavaScript", pct: 35, color: "#f1e05a" },
  { name: "Shell/Config", pct: 12, color: "#89e051" },
  { name: "Other", pct: 8, color: "#555" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const shouldReduce = useReducedMotion();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (shouldReduce) { setCount(target); return; }
    let n = 0;
    const step = Math.ceil(target / 25);
    const t = setInterval(() => { n += step; if (n >= target) { setCount(target); clearInterval(t); } else setCount(n); }, 45);
    return () => clearInterval(t);
  }, [started, target, shouldReduce]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function GithubSection() {
  return (
    <section id="github" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_60%_40%,rgba(14,165,233,0.06),transparent_40%)]" />
      <div className="px-6">
        <motion.div {...fadeUp(0)} className="mb-12 text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.24em] text-sky-200 uppercase">GitHub</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Engineering Activity</h2>
          <p className="mt-3 mx-auto max-w-xl text-sm text-slate-400">Actively building, shipping, and maintaining production-grade backend systems.</p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {/* Profile card */}
          <motion.div {...fadeUp(0.1)} className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 ring-1 ring-white/10">
                <Github className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-white">mdadnan2</p>
                <p className="text-xs text-slate-400">Backend Engineer</p>
              </div>
              <Link href="https://github.com/mdadnan2" target="_blank" rel="noreferrer" className="ml-auto rounded-lg border border-white/10 bg-white/5 p-1.5 text-slate-400 hover:text-white transition">
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-5 grid grid-cols-2 gap-2">
              {profileStats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div key={s.label} {...fadeUp(0.15 + i * 0.05)} className="rounded-xl border border-white/8 bg-slate-950/30 p-3">
                    <Icon className="h-4 w-4 text-sky-400 mb-1.5" />
                    <div className="text-lg font-bold text-white">{s.value}</div>
                    <div className="text-[10px] text-slate-500">{s.label}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Language distribution */}
            <div className="mt-5">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Language Distribution</p>
              <div className="flex h-2 w-full overflow-hidden rounded-full gap-0.5">
                {languages.map((l) => (
                  <motion.div
                    key={l.name}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ width: `${l.pct}%`, background: l.color, transformOrigin: "left" }}
                    className="h-full rounded-full"
                  />
                ))}
              </div>
              <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                {languages.map((l) => (
                  <div key={l.name} className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full" style={{ background: l.color }} />
                    <span className="text-[10px] text-slate-400">{l.name} {l.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Pinned repos */}
          <motion.div {...fadeUp(0.15)} className="lg:col-span-2 flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Pinned Repositories</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {pinnedRepos.map((repo, i) => (
                <motion.div
                  key={repo.name}
                  {...fadeUp(0.2 + i * 0.07)}
                  whileHover={{ y: -3 }}
                  className="group rounded-[18px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all hover:border-sky-400/30"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-sky-400 shrink-0" />
                      <span className="text-xs font-semibold text-sky-300 truncate">{repo.name}</span>
                    </div>
                    <Link href={repo.url} target="_blank" rel="noreferrer" className="shrink-0 text-slate-500 hover:text-white transition">
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-400">{repo.desc}</p>
                  <div className="mt-3 flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full" style={{ background: repo.color }} />
                    <span className="text-[10px] text-slate-500">{repo.lang}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Focus areas */}
            <div className="rounded-[18px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-3">
                <GitBranch className="h-4 w-4 text-sky-400" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Current Engineering Focus</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span key={area} className="rounded-full border border-sky-400/20 bg-sky-400/5 px-3 py-1 text-xs font-medium text-sky-300">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
