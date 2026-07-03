"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { BriefcaseBusiness, Boxes, Server, Code2, Database, Cloud, GitBranch } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const techChips = ["Node.js", "TypeScript", "NestJS", "PostgreSQL", "Docker", "AWS"];

const stats = [
  { value: 3,  suffix: "+", label: "Experience",   icon: BriefcaseBusiness },
  { value: 5,  suffix: "+", label: "Projects",      icon: Boxes },
  { value: 25, suffix: "+", label: "REST APIs",     icon: Server },
  { value: 15, suffix: "+", label: "Technologies",  icon: Code2 },
];

const archNodes = [
  { label: "Client",     icon: Boxes,    border: "border-slate-400/25", glow: "rgba(148,163,184,0.1)" },
  { label: "REST API",   icon: Server,   border: "border-sky-400/30",   glow: "rgba(14,165,233,0.12)" },
  { label: "Node.js",    icon: Code2,    border: "border-green-400/30", glow: "rgba(74,222,128,0.1)" },
  { label: "PostgreSQL", icon: Database, border: "border-blue-400/30",  glow: "rgba(96,165,250,0.1)" },
  { label: "AWS",        icon: Cloud,    border: "border-orange-400/30",glow: "rgba(251,146,60,0.1)" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (shouldReduce) { setCount(target); return; }
    let n = 0;
    const step = Math.ceil(target / 25);
    const t = setInterval(() => {
      n += step;
      if (n >= target) { setCount(target); clearInterval(t); }
      else setCount(n);
    }, 40);
    return () => clearInterval(t);
  }, [inView, target, shouldReduce]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function AboutSection() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.08),transparent_28%)]" />

      <div className="relative z-10 w-full px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT */}
          <div className="flex flex-col gap-5">
            <motion.span {...fadeUp(0)} className="inline-flex w-fit rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-semibold tracking-[0.24em] text-sky-200 uppercase">
              About
            </motion.span>

            <motion.h2 {...fadeUp(0.1)} className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl leading-tight">
              Engineering reliable backend solutions that scale.
            </motion.h2>

            <motion.p {...fadeUp(0.2)} className="max-w-xl text-sm leading-6 text-slate-300 md:text-base md:leading-7">
              Backend Developer with <span className="font-semibold text-sky-300">3+ years of professional experience</span> building
              scalable REST APIs, secure authentication systems, and cloud-ready applications.
              Specialized in Node.js, TypeScript, NestJS, PostgreSQL, Docker, and AWS — with a focus on
              clean architecture, performance, and maintainable backend design.
            </motion.p>

            {/* Tech chips */}
            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-2">
              {techChips.map((tech) => (
                <span key={tech} className="rounded-full border border-sky-400/20 bg-sky-400/5 px-3 py-1 text-xs font-semibold text-sky-300">
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    {...fadeUp(0.4 + i * 0.07)}
                    whileHover={{ y: -3, boxShadow: "0 0 24px rgba(14,165,233,0.18)" }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:border-sky-400/30"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/15 ring-1 ring-sky-400/20">
                      <Icon className="h-4 w-4 text-sky-300" />
                    </div>
                    <div className="mt-3 text-xl font-bold text-white">
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-0.5 text-xs text-slate-400">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Architecture diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(14,165,233,0.06),0_20px_80px_-30px_rgba(14,165,233,0.4)] backdrop-blur-2xl">
              {/* Header */}
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                  <GitBranch className="h-5 w-5 text-slate-950" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-sky-300/70">Stack</p>
                  <p className="text-sm font-semibold text-white">Backend Architecture</p>
                </div>
              </div>

              {/* Nodes */}
              <div className="flex flex-col items-center gap-0">
                {archNodes.map((node, i) => {
                  const Icon = node.icon;
                  return (
                    <div key={node.label} className="flex flex-col items-center w-full">
                      <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                        whileHover={{ x: 4 }}
                        className={`flex items-center gap-3 rounded-xl border ${node.border} bg-slate-950/40 px-4 py-2.5 w-full backdrop-blur-sm transition-all`}
                        style={{ boxShadow: `0 0 16px ${node.glow}` }}
                      >
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800/80">
                          <Icon className="h-4 w-4 text-sky-300" />
                        </div>
                        <span className="text-sm font-medium text-white">{node.label}</span>
                      </motion.div>
                      {i < archNodes.length - 1 && (
                        <motion.div
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                          className="h-5 w-px origin-top bg-gradient-to-b from-sky-400/50 to-sky-400/10"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Glow blobs */}
            <div className="pointer-events-none absolute -left-6 top-1/3 h-28 w-28 rounded-full bg-sky-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-4 bottom-1/4 h-20 w-20 rounded-full bg-blue-500/10 blur-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
