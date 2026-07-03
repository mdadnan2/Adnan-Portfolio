"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio";

const quickLinks = [
  { name: "About",      href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Expertise",  href: "#expertise" },
  { name: "Projects",   href: "#projects" },
  { name: "GitHub",     href: "#github" },
  { name: "Contact",    href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/10 pt-12 pb-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.06),transparent_50%)]" />

      <div className="px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_auto] mb-10">
          {/* Brand */}
          <div>
            <Link href="#home" className="text-2xl font-extrabold bg-gradient-to-r from-sky-300 to-cyan-200 bg-clip-text text-transparent">
              MA
            </Link>
            <p className="mt-1 text-sm font-semibold text-white">Mohammad Adnan</p>
            <p className="text-xs text-sky-300/80">Backend Engineer</p>
            <p className="mt-3 max-w-xs text-xs leading-5 text-slate-400">
              Building scalable backend systems with Node.js, NestJS, PostgreSQL, MongoDB, Docker, and AWS.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Link href={personalInfo.social.github} target="_blank" rel="noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-400 transition hover:border-sky-400/40 hover:text-white">
                <Github className="h-4 w-4" />
              </Link>
              <Link href={personalInfo.social.linkedin} target="_blank" rel="noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-400 transition hover:border-sky-400/40 hover:text-white">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link href={`mailto:${personalInfo.email}`}
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-400 transition hover:border-sky-400/40 hover:text-white">
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Quick Links</p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-400 transition hover:text-sky-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to top */}
          <div className="flex items-start justify-end">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-300 transition hover:border-sky-400/30 hover:text-white"
            >
              <ArrowUp className="h-3.5 w-3.5" /> Back to Top
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <span>© {new Date().getFullYear()} Mohammad Adnan. All rights reserved.</span>
          <span>Built with Next.js, TypeScript &amp; thoughtful systems design.</span>
        </div>
      </div>
    </footer>
  );
}
