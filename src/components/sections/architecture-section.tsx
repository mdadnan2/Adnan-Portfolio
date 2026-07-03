"use client";

import { motion } from "framer-motion";
import { Server, Database, Cloud, Shield, GitBranch, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const architectureNodes = [
  {
    id: 1,
    label: "Client",
    icon: Zap,
    description: "Frontend applications",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    label: "API Gateway",
    icon: GitBranch,
    description: "Request routing & load balancing",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    label: "Authentication",
    icon: Shield,
    description: "JWT & RBAC",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    label: "Backend Services",
    icon: Server,
    description: "Business logic & APIs",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    label: "Database",
    icon: Database,
    description: "PostgreSQL & MongoDB",
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: 6,
    label: "Cloud Infrastructure",
    icon: Cloud,
    description: "AWS & Docker",
    color: "from-yellow-500 to-orange-500",
  },
];

export function ArchitectureSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="container px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            System Architecture
          </h2>
          <p className="text-lg text-muted-foreground">
            Understanding the flow of modern backend systems from client to database
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="max-w-6xl mx-auto">
          <Card className="border-muted/50 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle>Request Lifecycle</CardTitle>
              <CardDescription>
                Typical architecture pattern for scalable backend applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {architectureNodes.map((node, index) => {
                  const Icon = node.icon;
                  return (
                    <motion.div
                      key={node.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative group"
                    >
                      <div className="p-6 rounded-lg border border-muted hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                        {/* Number badge */}
                        <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>

                        {/* Icon */}
                        <div className={`mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br ${node.color}`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>

                        {/* Content */}
                        <h3 className="text-lg font-semibold mb-2">{node.label}</h3>
                        <p className="text-sm text-muted-foreground">{node.description}</p>

                        {/* Arrow indicator */}
                        {index < architectureNodes.length - 1 && (
                          <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 text-muted-foreground">
                            →
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8 p-6 rounded-lg bg-muted/50 border border-muted"
              >
                <h3 className="text-lg font-semibold mb-4">Key Architecture Principles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Separation of concerns with layered architecture</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Scalable microservices design patterns</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Secure authentication and authorization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Database optimization and caching strategies</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Cloud-native deployment with containerization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Comprehensive error handling and logging</span>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
