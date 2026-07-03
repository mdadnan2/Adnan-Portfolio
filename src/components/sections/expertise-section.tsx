"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Server, Database, Cloud, Shield, Layers3, TestTube2 } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

const capabilities = [
  {
    icon: Server,
    title: "Backend Development",
    description: "Building scalable REST APIs, backend services, modular architectures, and production-ready applications with clean, maintainable code.",
    techs: ["Node.js", "NestJS", "Express.js", "Hono.js", "TypeScript"],
    badge: "3 Years",
    color: "from-sky-400/20 to-blue-500/10",
    border: "hover:border-sky-400/40",
    glow: "rgba(14,165,233,0.15)",
  },
  {
    icon: Database,
    title: "Database Engineering",
    description: "Designing efficient schemas, optimizing queries, and building scalable relational and NoSQL database solutions for high-performance systems.",
    techs: ["PostgreSQL", "MongoDB", "Prisma", "TypeORM", "Sequelize"],
    badge: "2+ Years",
    color: "from-violet-400/20 to-purple-500/10",
    border: "hover:border-violet-400/40",
    glow: "rgba(139,92,246,0.15)",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Deploying backend applications using cloud infrastructure, containers, and CI/CD pipelines for consistent and reliable delivery.",
    techs: ["AWS", "Docker", "GitHub Actions", "Vercel", "Render"],
    badge: "2+ Years",
    color: "from-orange-400/20 to-amber-500/10",
    border: "hover:border-orange-400/40",
    glow: "rgba(251,146,60,0.15)",
  },
  {
    icon: Shield,
    title: "Authentication & Security",
    description: "Implementing secure authentication systems and role-based authorization for enterprise-grade applications with industry best practices.",
    techs: ["JWT", "Firebase Auth", "RBAC", "OAuth", "Security"],
    badge: "3 Years",
    color: "from-green-400/20 to-emerald-500/10",
    border: "hover:border-green-400/40",
    glow: "rgba(74,222,128,0.15)",
  },
  {
    icon: Layers3,
    title: "Software Architecture",
    description: "Designing maintainable backend systems using modular architecture, clean code principles, and scalable design patterns.",
    techs: ["REST APIs", "Microservices", "System Design", "SDLC", "Agile"],
    badge: "3 Years",
    color: "from-cyan-400/20 to-teal-500/10",
    border: "hover:border-cyan-400/40",
    glow: "rgba(34,211,238,0.15)",
  },
  {
    icon: TestTube2,
    title: "Testing & Developer Experience",
    description: "Ensuring software quality through testing, documentation, debugging, and developer-friendly workflows that improve team productivity.",
    techs: ["Jest", "Swagger", "Postman", "API Testing", "Code Reviews"],
    badge: "2+ Years",
    color: "from-pink-400/20 to-rose-500/10",
    border: "hover:border-pink-400/40",
    glow: "rgba(244,114,182,0.15)",
  },
];

function CapabilityCard({ cap, index }: { cap: typeof capabilities[0]; index: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const Icon = cap.icon;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (shouldReduce || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition-all duration-300 ${cap.border} cursor-default`}
      style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.04)" }}
    >
      {/* Mouse-follow gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-[24px]"
        style={{
          background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, ${cap.glow}, transparent 70%)`,
        }}
      />

      {/* Top row */}
      <div className="relative flex items-start justify-between">
        <motion.div
          whileHover={{ rotate: [0, -8, 8, 0] }}
          transition={{ duration: 0.5 }}
          className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${cap.color} ring-1 ring-white/10`}
        >
          <Icon className="h-6 w-6 text-sky-300" />
        </motion.div>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-slate-400">
          {cap.badge}
        </span>
      </div>

      {/* Title & description */}
      <div className="relative mt-5">
        <h3 className="text-lg font-bold text-white">{cap.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">{cap.description}</p>
      </div>

      {/* Tech badges */}
      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {cap.techs.map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.08 + i * 0.04 }}
            whileHover={{ scale: 1.08, y: -1 }}
            className="rounded-full border border-white/10 bg-slate-950/40 px-2.5 py-0.5 text-[11px] font-medium text-slate-300 transition-colors hover:border-sky-400/30 hover:text-sky-300"
          >
            {tech}
          </motion.span>
        ))}
      </div>

{/* Animated border glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: `inset 0 0 0 1px ${cap.glow.replace("0.15", "0.4")}` }}
      />
    </motion.div>
  );
}

export function ExpertiseSection() {
  return (
    <section id="expertise" className="relative py-24 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.06]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.08),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.06),transparent_40%)]" />

      <div className="px-6">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-16 text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.24em] text-sky-200 uppercase">
            Expertise
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Backend Expertise
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            I design and build scalable, secure, and production-ready backend systems using modern technologies, clean architecture, and cloud-native development practices.
          </p>
        </motion.div>

        {/* Capability cards */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((cap, i) => (
            <CapabilityCard key={cap.title} cap={cap} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
