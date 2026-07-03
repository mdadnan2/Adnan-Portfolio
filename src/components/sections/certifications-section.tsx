"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import { certifications } from "@/data/portfolio";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay },
});

const certColors = [
  { bg: "from-slate-400/15 to-slate-500/5", border: "hover:border-slate-400/30", glow: "#94a3b8" },
  { bg: "from-yellow-400/15 to-amber-500/5", border: "hover:border-yellow-400/30", glow: "#facc15" },
  { bg: "from-green-400/15 to-emerald-500/5", border: "hover:border-green-400/30", glow: "#4ade80" },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-16">
      <div className="px-6">
        <motion.div {...fadeUp(0)} className="mb-10 text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.24em] text-sky-200 uppercase">Certifications</span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">Validated Expertise</h2>
        </motion.div>

        <div className="mx-auto max-w-4xl grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => {
            const c = certColors[i % certColors.length];
            return (
              <motion.article
                key={cert.id}
                {...fadeUp(0.08 + i * 0.08)}
                whileHover={{ y: -4 }}
                className={`group relative rounded-[20px] border border-white/10 bg-gradient-to-br ${c.bg} p-5 backdrop-blur-xl transition-all duration-300 ${c.border}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950/40 ring-1 ring-white/10">
                    <Award className="h-5 w-5" style={{ color: c.glow }} />
                  </div>
                  <div className="flex items-center gap-1 rounded-full border border-white/10 bg-slate-950/30 px-2 py-0.5">
                    <BadgeCheck className="h-3 w-3 text-sky-400" />
                    <span className="text-[10px] font-semibold text-sky-300">{cert.date}</span>
                  </div>
                </div>
                <h3 className="mt-4 text-sm font-bold text-white">{cert.name}</h3>
                <p className="mt-1 text-xs text-slate-400">{cert.issuer}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
