import { Navigation } from "@/components/sections/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { GithubSection } from "@/components/sections/github-section";
import { ContactSection } from "@/components/sections/contact-section";


export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceTimeline />
      <ExpertiseSection />
      <ProjectsShowcase />
      <GithubSection />
      <AchievementsSection />
      <CertificationsSection />
      <ContactSection />
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Mohammad Adnan. All rights reserved.</p>
      </div>
    </main>
  );
}
