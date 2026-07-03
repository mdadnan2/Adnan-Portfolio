"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Server, Shield, Database, Cloud, Layers3, TestTube2, GitCommit, BriefcaseBusiness, Boxes, Code2 } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const impacts = [
  { icon: BriefcaseBusiness, value: 3,   suffix: "+", label: "Years Experience",        detail: "Professional backend engineering",          color: "from-sky-400/20 to-blue-500/10",    glow: "#38bdf8", numeric: true },
  { icon: Boxes,             value: 6,   suffix: "+", label: "Production Applications", detail: "End-to-end systems shipped",                color: "from-violet-400/20 to-purple-500/10", glow: "#a78bfa", numeric: true },
  { icon: Server,            value: 25,  suffix: "+", label: "REST APIs Designed",       detail: "Scalable endpoints in production",          color: "from-green-400/20 to-emerald-500/10", glow: "#4ade80", numeric: true },
  { icon: GitCommit,         value: 1000,suffix: "+", label: "Git Commits",              detail: "Consistent engineering activity",           color: "from-orange-400/20 to-amber-500/10",  glow: "#fb923c", numeric: true },
  { icon: Shield,            value: 0,   suffix: "",  label: "JWT + RBAC",               detail: "Authentication & authorization systems",    color: "from-red-400/20 to-rose-500/10",      glow: "#f87171", numeric: false },
  { icon: Database,          value: 0,   suffix: "",  label: "PostgreSQL & MongoDB",     detail: "Relational & NoSQL database engineering",   color: "from-cyan-400/20 to-teal-500/10",     glow: "#22d3ee", numeric: false },
  { icon: Cloud,             value: 0,   suffix: "",  label: "AWS + Docker",             detail: "Cloud deployments & containerization",      color: "from-yellow-400/20 to-amber-500/10",  glow: "#facc15", numeric: false },
  { icon: Layers3,           value: 0,   suffix: "",  label: "Microservices",            detail: "Production-grade distributed architecture", color: "from-pink-400/20 to-rose-500/10",     glow: "#f472b6", numeric: false },
  { icon: TestTube2,         value: 0,   suffix: "",  label: "Jest + Swagger",           detail: "Testing & API documentation",               color: "from-indigo-400/20 to-blue-500/10",   glow: "#818cf8", numeric: false },
  { icon: Code2,             value: 0,   suffix: "",  label: "System Design",            detail: "Scalable backend architecture patterns",    color: "from-slate-400/20 to-slate-500/10",   glow: "#94a3b8", numeric: false },
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
    const step = Math.ceil(target / 30);
    const t = setInterval(() => { n += step; if (n >= target) { setCount(target); clearInterval(t); } else setCount(n); }, 40);
    return () => clearInterval(t);
  }, [started, target, shouldReduce]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_40%_60%,rgba(139,92,246,0.06),transparent_40%)]" />
      <div className="px-6">
        <motion.div {...fadeUp(0)} className="mb-12 text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.24em] text-sky-200 uppercase">Impact</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Engineering Impact</h2>
          <p className="mt-3 mx-auto max-w-xl text-sm text-slate-400">
            A snapshot of the engineering practices, backend systems, and production solutions built throughout my professional journey.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {impacts.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                {...fadeUp(0.05 + i * 0.05)}
                whileHover={{ y: -4, boxShadow: `0 0 28px ${item.glow}30` }}
                className={`group relative rounded-[20px] border border-white/10 bg-gradient-to-br ${item.color} p-5 backdrop-blur-xl transition-all duration-300 hover:border-white/20`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950/40 ring-1 ring-white/10">
                  <Icon className="h-5 w-5" style={{ color: item.glow }} />
                </div>
                <div className="mt-4 text-2xl font-bold text-white">
                  {item.numeric ? <CountUp target={item.value} suffix={item.suffix} /> : item.label}
                </div>
                {item.numeric && <div className="mt-0.5 text-sm font-semibold text-white/80">{item.label}</div>}
                <div className="mt-1 text-xs leading-4 text-slate-400">{item.detail}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
