"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, FileCode, Server, Database, Cloud, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/portfolio";
import Link from "next/link";

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Card className="h-full border-muted/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
        {/* Project Image Placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Server className="h-16 w-16 text-primary/50" />
            </motion.div>
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <Button size="sm" variant="secondary" asChild>
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Link>
            </Button>
            {project.liveDemo && (
              <Button size="sm" asChild>
                <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </div>

        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>
              <CardDescription className="text-sm font-medium">
                {project.subtitle}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Architecture Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Layers className="h-3 w-3" />
              <span className="font-medium">Architecture:</span>
            </div>
            <p className="text-xs text-muted-foreground">{project.architecture}</p>
          </div>

          {/* Key Features */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <FileCode className="h-3 w-3" />
              <span className="font-medium">Key Features:</span>
            </div>
            <ul className="text-xs text-muted-foreground space-y-1">
              {project.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Performance */}
          <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-muted">
            <Database className="h-4 w-4 text-green-500" />
            <span className="text-xs font-medium">{project.performance}</span>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
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
            Production Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-world backend systems built with scalability, security, and performance
            in mind. Each project showcases different aspects of backend engineering.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" asChild>
            <Link href="https://github.com/DevAdnanAnsari" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
