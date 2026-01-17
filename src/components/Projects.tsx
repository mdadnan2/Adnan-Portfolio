import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code2 } from "lucide-react";


const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      title: "Tiffin Management System",
      description: "A production-ready full-stack meal management platform with enterprise-grade backend architecture, JWT authentication, and real-time analytics.",
      techStack: {
        backend: ["NestJS", "TypeScript", "Prisma ORM", "PostgreSQL", "JWT", "Swagger"],
        frontend: ["Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui"],
        infrastructure: ["Vercel", "Render", "Supabase"]
      },
      backendResponsibilities: [
        "API Architecture: Designed RESTful APIs with clean Controller → Service → Repository pattern",
        "Authentication System: Implemented JWT-based auth with refresh tokens and role-based access control",
        "Database Design: Architected PostgreSQL schema with Prisma ORM for type-safe operations",
        "Security Implementation: Applied bcrypt hashing, input validation, SQL injection prevention",
        "Bulk Operations: Built efficient bulk meal scheduling with date range and filtering logic",
        "Real-time Analytics: Developed dashboard APIs with monthly/weekly statistics aggregation"
      ],
      systemFeatures: [
        "Multi-role Authentication - JWT with refresh tokens, RBAC (User/Admin)",
        "Meal Management - CRUD operations, bulk scheduling, calendar integration",
        "Dynamic Pricing - Per-user pricing with history tracking",
        "Analytics Dashboard - Real-time statistics and spending insights",
        "Admin Panel - User management and system-wide analytics"
      ],
      architectureHighlights: [
        "Modular Design: Clean separation of concerns with dependency injection",
        "Type Safety: Full TypeScript implementation with DTO validation",
        "Scalable Structure: Ready for microservices evolution",
        "Production Security: Bcrypt hashing, JWT tokens, protected routes"
      ],
      liveUrl: "https://tiffin360.vercel.app/",
      apiDocsUrl: "https://tiffin-management-system-4uoa.onrender.com/api/docs#/",
      gradient: "from-emerald-500 to-blue-500",
      featured: true
    },
    {
      title: "Coaching Management System",
      description: "A comprehensive SaaS-style platform for efficient coaching institute operations management with multi-role authentication and advanced features.",
      techStack: {
        backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Nodemailer"],
        frontend: ["React 18", "Redux Toolkit", "Material-UI", "Axios", "Framer Motion"],
        infrastructure: ["Vercel", "MongoDB Atlas"]
      },
      backendResponsibilities: [
        "API Architecture: Built RESTful APIs with modular service-based architecture and clean separation of concerns",
        "Authentication System: Implemented JWT-based auth with role-based access control (Super Admin, Admin, Student)",
        "Database Design: Architected MongoDB schemas with Mongoose for student, course, and chapter management",
        "Security Implementation: Applied crypto-js encryption, password hashing, and comprehensive input validation",
        "Email Service: Integrated Nodemailer for transactional emails with customizable templates",
        "Advanced Features: Built filtering, pagination, search capabilities, and student status tracking system"
      ],
      systemFeatures: [
        "Multi-role Authentication - JWT tokens with Super Admin, Admin, and Student roles",
        "Student Management - Complete CRUD operations with status tracking (Active, Inactive, Completed)",
        "Course Management - Detailed curriculum structure with chapter-wise content organization",
        "Email Notifications - Automated email system with customizable templates and preferences",
        "Advanced Filtering - Comprehensive search, pagination, and filtering capabilities"
      ],
      architectureHighlights: [
        "Clean Architecture: Modular structure with Controllers, Services, Models, and Middleware layers",
        "Centralized Error Handling: Comprehensive logging and structured error responses",
        "Environment Configuration: Secure environment-based configuration management",
        "Production Ready: Health check endpoints, session management, and security middleware"
      ],
      liveUrl: "https://coaching360.vercel.app/",
      apiDocsUrl: "http://localhost:5010/api-docs",
      githubUrl: "https://github.com/mdadnan2/Coaching-Management-System",
      gradient: "from-blue-500 to-purple-500",
      featured: true
    },
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
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-50/50 dark:bg-card/30">
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

        <div className="grid grid-cols-1 gap-8">
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
              
              <Card className={`relative p-8 bg-white/80 dark:bg-card border-slate-200/60 dark:border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col overflow-hidden ${
                project.featured ? 'border-2 border-primary/30 dark:border-primary/30' : ''
              }`}>
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10 flex-1">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    {project.featured && (
                      <Badge className="bg-primary/10 text-primary border-primary/30">
                        Featured
                      </Badge>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  {/* Featured project layout */}
                  {project.featured ? (
                    <div className="space-y-6">
                      {/* Tech Stack */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-primary">Technology Stack</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                          >
                            <p className="text-xs font-medium text-muted-foreground mb-2">Backend (Core Focus)</p>
                            <div className="flex flex-wrap gap-1">
                              {project.techStack.backend.map((tech, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                  transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
                                >
                                  <Badge variant="secondary" className="text-xs bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20">
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            <p className="text-xs font-medium text-muted-foreground mb-2">Frontend</p>
                            <div className="flex flex-wrap gap-1">
                              {project.techStack.frontend.map((tech, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                  transition={{ duration: 0.3, delay: 0.6 + idx * 0.05 }}
                                >
                                  <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20">
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                          >
                            <p className="text-xs font-medium text-muted-foreground mb-2">Infrastructure</p>
                            <div className="flex flex-wrap gap-1">
                              {project.techStack.infrastructure.map((tech, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                  transition={{ duration: 0.3, delay: 0.8 + idx * 0.05 }}
                                >
                                  <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20">
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </div>

                      {/* Backend Responsibilities */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-primary">Backend Engineering Responsibilities</h4>
                        <ul className="space-y-2">
                          {project.backendResponsibilities.map((responsibility, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-emerald-600 dark:text-emerald-400 mt-1 font-bold">•</span>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* System Features */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-primary">Key System Features</h4>
                        <ul className="space-y-2">
                          {project.systemFeatures.map((feature, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-blue-600 dark:text-blue-400 mt-1 font-bold">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Architecture Highlights */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-primary">Architecture & Security Highlights</h4>
                        <ul className="space-y-2">
                          {project.architectureHighlights.map((highlight, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-purple-600 dark:text-purple-400 mt-1 font-bold">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button 
                          asChild 
                          className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white border-0`}
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <ExternalLink className="w-4 h-4" />
                            Try Live Application
                          </a>
                        </Button>
                        {project.apiDocsUrl && (
                          <Button 
                            asChild 
                            variant="outline" 
                            className="border-primary/30 hover:bg-primary/10"
                          >
                            <a href={project.apiDocsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                              <Code2 className="w-4 h-4" />
                              Explore API Documentation
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button 
                            asChild 
                            variant="outline" 
                            className="border-primary/30 hover:bg-primary/10"
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                              <Code2 className="w-4 h-4" />
                              View Source Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Regular project layout */
                    <>
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
                    </>
                  )}
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
