import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const projects = [
    {
      title: "Community Collaborative Application",
      description: "A comprehensive application enabling community members to receive announcements, event updates, and prayer timings with real-time notifications.",
      features: [
        "REST APIs for member enrollment and announcements",
        "JWT authentication with role-based access control",
        "Optimized MongoDB schemas for performance",
        "Modular architecture for scalability"
      ],
      techStack: ["Node.js", "TypeScript", "MongoDB", "JWT", "Hono.js", "Jest"],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Coaching Management Portal",
      description: "A comprehensive platform for coaching centers to streamline student management, course scheduling, attendance tracking, and communication.",
      features: [
        "User registration and course management APIs",
        "Optimized queries for dashboard performance",
        "Modular, reusable API design",
        "Complete documentation system"
      ],
      techStack: ["JavaScript", "Node.js", "MongoDB", "Express.js", "Postman"],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Real-world applications solving complex business challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              {/* Glow effect on hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500`} />
              
              <Card className="relative p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col overflow-hidden">
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10 flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <h4 className="text-sm font-semibold text-primary">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-primary">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-muted hover:bg-primary/20 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>


              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
