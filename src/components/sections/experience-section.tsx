"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
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
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            Building scalable backend systems and architecting robust solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-px bg-gradient-to-b from-primary to-transparent" />
              )}

              <Card className="mb-8 border-muted/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>

                    {/* Header Info */}
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">
                        {experience.title}
                      </CardTitle>
                      <CardDescription className="text-base font-medium mb-2">
                        {experience.company}
                      </CardDescription>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {experience.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {experience.startDate} - {experience.current ? "Present" : experience.endDate}
                        </div>
                      </div>
                    </div>

                    {/* Current badge */}
                    {experience.current && (
                      <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-medium">
                        Current
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Description */}
                  <ul className="space-y-3">
                    {experience.description.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="mt-1 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.2, delay: idx * 0.02 }}
                          className="px-3 py-1 text-xs font-medium rounded-md bg-muted hover:bg-muted/80 border border-muted-foreground/20 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
