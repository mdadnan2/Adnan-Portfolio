"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, Phone, MapPin, Github, Linkedin, Download, Send,
  CheckCircle2, Copy, Check, Clock, Briefcase, Globe, ArrowRight,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import Link from "next/link";
import { toast } from "sonner";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const subjects = [
  "Hiring Opportunity",
  "Backend Development",
  "Freelance Project",
  "Technical Collaboration",
  "Open Source",
  "General Inquiry",
  "Other",
];

const trustBadges = [
  { icon: Briefcase, text: "Open to Full-Time Opportunities" },
  { icon: Globe,     text: "Remote & On-site Friendly" },
  { icon: Clock,     text: "Usually Replies Within 24 Hours" },
  { icon: CheckCircle2, text: "Backend Engineering Specialist" },
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/10";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", company: "", subject: subjects[0], message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xojoyvdw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (response.ok) {
        setSubmitting(false);
        setSubmitted(true);
        setForm({ name: "", email: "", company: "", subject: subjects[0], message: "" });
        toast.success("Message sent! I'll get back to you soon.");
      } else {
        toast.error("Failed to send message. Please try again.");
        setSubmitting(false);
      }
    } catch (error) {
      toast.error("Error sending message. Please try again.");
      setSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    toast.success("Email copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.1),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.08),transparent_40%)]" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.04]" />

      <div className="px-6">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-14 text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.24em] text-sky-200 uppercase">Contact</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Let&apos;s Build Something<br className="hidden sm:block" /> Great Together
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            I&apos;m always excited to discuss backend engineering, scalable architectures, and new opportunities. Whether you&apos;re hiring, collaborating, or simply want to connect — I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">

          {/* LEFT — Profile + Social + Actions */}
          <div className="flex flex-col gap-5">

            {/* Profile card */}
            <motion.div {...fadeUp(0.1)} className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl shadow-[0_0_0_1px_rgba(14,165,233,0.06)]">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 text-xl font-bold text-slate-950 shadow-[0_0_24px_rgba(14,165,233,0.3)]">
                  MA
                </div>
                <div>
                  <p className="font-bold text-white">{personalInfo.name}</p>
                  <p className="text-sm text-sky-300">Backend Engineer</p>
                  <div className="mt-1 flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
                    <span className="text-xs text-green-300">Available for opportunities</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  { icon: MapPin, text: personalInfo.location, href: null },
                  { icon: Mail,   text: personalInfo.email,    href: `mailto:${personalInfo.email}` },
                  { icon: Phone,  text: personalInfo.phone,    href: `tel:${personalInfo.phone}` },
                ].map(({ icon: Icon, text, href }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10">
                      <Icon className="h-4 w-4 text-sky-400" />
                    </div>
                    {href ? (
                      <Link href={href} className="text-sm text-slate-300 hover:text-sky-300 transition">{text}</Link>
                    ) : (
                      <span className="text-sm text-slate-300">{text}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social cards */}
            <div className="grid grid-cols-2 gap-3">
              <motion.div {...fadeUp(0.15)} whileHover={{ y: -3 }}
                className="group rounded-[20px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all hover:border-slate-400/30">
                <Github className="h-6 w-6 text-white mb-3" />
                <p className="text-xs font-semibold text-white">GitHub</p>
                <p className="text-[11px] text-slate-400 mt-0.5">@mdadnan2</p>
                <Link href={personalInfo.social.github} target="_blank" rel="noreferrer"
                  className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-sky-400 hover:text-sky-300 transition">
                  View Profile <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>

              <motion.div {...fadeUp(0.18)} whileHover={{ y: -3 }}
                className="group rounded-[20px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all hover:border-blue-400/30">
                <Linkedin className="h-6 w-6 text-blue-400 mb-3" />
                <p className="text-xs font-semibold text-white">LinkedIn</p>
                <p className="text-[11px] text-slate-400 mt-0.5">@mohammadadnan01</p>
                <Link href={personalInfo.social.linkedin} target="_blank" rel="noreferrer"
                  className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-blue-400 hover:text-blue-300 transition">
                  Connect <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>
            </div>

            {/* Quick actions */}
            <motion.div {...fadeUp(0.2)} className="flex flex-col gap-2">
              <Link href={personalInfo.resumeUrl} target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-sky-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
                <Download className="h-4 w-4" /> Download Resume
              </Link>
              <button onClick={copyEmail}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-sky-400/30 hover:text-white">
                {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied!" : "Copy Email Address"}
              </button>
            </motion.div>
          </div>

          {/* RIGHT — Contact Form */}
          <motion.div {...fadeUp(0.15)} className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl shadow-[0_0_0_1px_rgba(14,165,233,0.06)]">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-green-400/15 ring-2 ring-green-400/30"
                  >
                    <CheckCircle2 className="h-10 w-10 text-green-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                  <p className="text-sm text-slate-400 max-w-xs">Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)}
                    className="mt-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition">
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} method="POST" className="flex flex-col gap-4">
                  <div>
                    <p className="text-base font-bold text-white mb-1">Send a Message</p>
                    <p className="text-xs text-slate-400">I&apos;ll respond within 24 hours</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-slate-400">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Mohammad Adnan" className={inputClass} />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-slate-400">Email Address *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@company.com" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-slate-400">Company (Optional)</label>
                      <input name="company" value={form.company} onChange={handleChange} placeholder="Your company" className={inputClass} />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-slate-400">Regarding *</label>
                      <select name="subject" value={form.subject} onChange={handleChange} className={inputClass}>
                        {subjects.map((s) => <option key={s} value={s} className="bg-slate-900">{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-400">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                      className={`${inputClass} resize-none`} />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={submitting || !form.name || !form.email || !form.message}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 rounded-xl bg-sky-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-sky-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2"><span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" /> Sending...</span>
                    ) : (
                      <><Send className="h-4 w-4" /> Let&apos;s Build Together</>
                    )}
                  </motion.button>

                  {/* Trust badges */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {trustBadges.map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-1.5">
                        <Icon className="h-3.5 w-3.5 shrink-0 text-sky-400" />
                        <span className="text-[10px] text-slate-400">{text}</span>
                      </div>
                    ))}
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
