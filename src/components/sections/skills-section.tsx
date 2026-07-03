"use client";

import { motion } from "framer-motion";
import {
  Server,
  Database,
  Cloud,
  Shield,
  Code2,
  Boxes,
  Network,
  Layers,
  Key,
  Lock,
  Users,
  FileCode,
  TestTube,
  Workflow,
  GitCommit,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/data/portfolio";

const iconMap: Record<string, any> = {
  Server,
  Database,
  Cloud,
  Shield,
  Code2,
  Boxes,
  Network,
  Layers,
  Key,
  Lock,
  Users,
  FileCode,
  TestTube,
  Workflow,
  GitCommit,
};

interface SkillCardProps {
  title: string;
  description: string;
  skills: Array<{ name: string; level: number; icon: string }>;
  index: number;
}

const SkillCard = ({ title, description, skills, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full border-muted/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {skills.map((skill, idx) => {
            const Icon = iconMap[skill.icon] || Code2;
            return (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      description: "Core languages for backend development",
      skills: skills.languages,
    },
    {
      title: "Backend Frameworks",
      description: "Production-ready server frameworks",
      skills: skills.backend,
    },
    {
      title: "Databases & ORMs",
      description: "Data persistence and management",
      skills: skills.databases,
    },
    {
      title: "Cloud & DevOps",
      description: "Cloud infrastructure and containerization",
      skills: skills.cloud,
    },
    {
      title: "Backend Architecture",
      description: "System design and architectural patterns",
      skills: skills.architecture,
    },
    {
      title: "Authentication & Security",
      description: "Secure authentication systems",
      skills: skills.authentication,
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Backend Engineering Expertise
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive technical skills across the entire backend development stack,
            from API design to cloud deployment
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              description={category.description}
              skills={category.skills}
              index={index}
            />
          ))}
        </div>

        {/* Engineering Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <Card className="border-muted/50">
            <CardHeader>
              <CardTitle className="text-xl">Development Tools & Practices</CardTitle>
              <CardDescription>
                Professional tools and methodologies for modern backend development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {skills.tools.map((tool, index) => {
                  const Icon = iconMap[tool.icon] || Code2;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex flex-col items-center gap-2 p-4 rounded-lg border border-muted hover:border-primary/50 hover:bg-muted/50 transition-all duration-300"
                    >
                      <Icon className="h-8 w-8 text-primary" />
                      <span className="text-sm font-medium text-center">{tool.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
