"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Database, Download, Github, Linkedin, Mail, Server, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingText } from "@/components/ui/typing-text";
import { personalInfo } from "@/data/portfolio";
import Link from "next/link";

const typingWords = [
  "Scalable REST APIs",
  "Backend Architecture",
  "Node.js",
  "TypeScript",
  "NestJS",
  "Microservices",
  "System Design",
  "Cloud Backend",
  "Database Design",
  "Performance Optimization",
];

const floatingBadges = [
  { label: "Node.js",     top: "8%",  left: "10%",  delay: 0 },
  { label: "NestJS",      top: "12%", right: "8%",  delay: 0.4 },
  { label: "PostgreSQL",  top: "42%", right: "2%",  delay: 0.8 },
  { label: "MongoDB",     bottom: "28%", right: "10%", delay: 0.6 },
  { label: "Docker",      bottom: "14%", left: "8%",  delay: 1.0 },
  { label: "AWS",         top: "55%", left: "3%",   delay: 0.3 },
  { label: "JWT",         bottom: "38%", left: "18%", delay: 0.7 },
];

function BackendVisual() {
  const shouldReduce = useReducedMotion();

  return (
    <div className="relative mx-auto h-[380px] w-full max-w-[440px]">
      {/* Glow base */}
      <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.35),transparent_28%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.25),transparent_25%)] blur-2xl" />
      <div className="absolute inset-8 rounded-[32px] border border-white/10 bg-slate-950/50 shadow-[0_20px_120px_-40px_rgba(14,165,233,0.65)] backdrop-blur-2xl" />

      {/* Server icon top */}
      <motion.div
        animate={shouldReduce ? {} : { y: [0, -12, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-10 h-28 w-28 -translate-x-1/2 rounded-3xl border border-sky-400/30 bg-gradient-to-br from-sky-400/30 to-blue-500/10 p-4 shadow-[0_0_40px_rgba(14,165,233,0.2)]"
      >
        <div className="grid h-full w-full grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-slate-950/60 p-3">
          <div className="rounded-xl bg-sky-400/30" />
          <div className="rounded-xl bg-slate-800" />
          <div className="rounded-xl bg-slate-800" />
          <div className="rounded-xl bg-sky-300/20" />
        </div>
      </motion.div>

      {/* Auth badge */}
      <motion.div
        animate={shouldReduce ? {} : { x: [0, 14, 0], y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-10 top-56 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-6 w-6 text-sky-300" />
          <span className="text-xs font-semibold text-slate-300">Auth</span>
        </div>
      </motion.div>

      {/* PostgreSQL badge */}
      <motion.div
        animate={shouldReduce ? {} : { x: [0, -14, 0], y: [0, 8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-10 top-56 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <Database className="h-6 w-6 text-sky-300" />
          <span className="text-xs font-semibold text-slate-300">PostgreSQL</span>
        </div>
      </motion.div>

      {/* Server icon bottom */}
      <motion.div
        animate={shouldReduce ? {} : { scale: [1, 1.05, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 left-1/2 h-24 w-24 -translate-x-1/2 rounded-3xl border border-sky-400/20 bg-gradient-to-br from-sky-400/25 to-blue-600/15 p-3 shadow-[0_0_30px_rgba(14,165,233,0.2)]"
      >
        <Server className="h-full w-full text-sky-200" />
      </motion.div>

      {/* Connection line glow */}
      <div className="absolute bottom-6 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-sky-300 to-transparent blur-md" />

      {/* Floating tech badges */}
      {floatingBadges.map((badge) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={shouldReduce ? { opacity: 1, scale: 1 } : {
            opacity: [0.7, 1, 0.7],
            y: [0, -6, 0],
            scale: 1,
          }}
          transition={{ duration: 3 + badge.delay, repeat: Infinity, delay: badge.delay, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: badge.top,
            bottom: (badge as any).bottom,
            left: badge.left,
            right: (badge as any).right,
          }}
          className="rounded-full border border-sky-400/25 bg-slate-900/80 px-3 py-1 text-[10px] font-semibold text-sky-300 shadow-[0_0_12px_rgba(14,165,233,0.15)] backdrop-blur-md"
        >
          {badge.label}
        </motion.div>
      ))}

      {/* Dot accents */}
      <div className="absolute left-20 top-16 h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_14px_#38BDF8]" />
      <div className="absolute right-20 top-20 h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_14px_#67E8F9]" />
      <div className="absolute left-24 bottom-24 h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_14px_#818CF8]" />
    </div>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-24">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.3),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.22),transparent_18%)]" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-20" />

      {/* Animated soft radial pulse */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -z-10 left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-3xl"
      />

      <div className="w-full relative z-10 px-6 py-16 md:py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Name */}
            <motion.h1 {...fadeUp(0)} className="text-5xl font-bold tracking-tight text-white md:text-7xl">
              {personalInfo.name}
            </motion.h1>

            {/* Subtitle */}
            <motion.div {...fadeUp(0.1)} className="mt-4 text-sm font-semibold uppercase tracking-[0.28em] text-sky-200/80">
              Backend Developer • Node.js • TypeScript
            </motion.div>

            {/* Typing animation */}
            <motion.div {...fadeUp(0.2)} className="mt-6 text-2xl font-semibold text-slate-300 md:text-3xl">
              <TypingText
                words={typingWords}
                className="inline bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent"
              />
            </motion.div>

            {/* Description */}
            <motion.p {...fadeUp(0.3)} className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg lg:text-left text-center">
              Backend Developer with 3 years of professional experience designing scalable REST APIs, secure backend systems, and cloud-ready applications using Node.js, TypeScript, NestJS, MongoDB, PostgreSQL, Docker, and AWS.
            </motion.p>

            {/* Buttons */}
            <motion.div {...fadeUp(0.4)} className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" asChild className="rounded-2xl px-6 shadow-[0_0_30px_rgba(14,165,233,0.35)] hover:shadow-[0_0_40px_rgba(14,165,233,0.55)] transition-shadow">
                  <Link href={personalInfo.resumeUrl} target="_blank" rel="noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" variant="outline" asChild className="rounded-2xl border-white/10 bg-white/5 px-6 hover:border-sky-400/40 hover:bg-sky-400/10 transition-all">
                  <Link href="#projects">
                    Explore Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" variant="ghost" asChild className="rounded-2xl border border-white/10 px-6 text-slate-200 hover:bg-white/10 transition-all">
                  <Link href="#contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Get in Touch
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeUp(0.6)} className="mt-5 flex items-center justify-center gap-3 lg:justify-start">
              <Link href={personalInfo.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-white">
                <Github className="h-4 w-4" />
                GitHub
              </Link>
              <Link href={personalInfo.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-white">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
              <Link href={`mailto:${personalInfo.email}`} aria-label="Email" className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-white">
                <Mail className="h-4 w-4" />
                Email
              </Link>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <BackendVisual />
            <div className="pointer-events-none absolute -left-10 top-8 h-24 w-24 rounded-full bg-sky-400/20 blur-2xl" />
            <div className="pointer-events-none absolute -right-4 bottom-4 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
