"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Calendar,
  FolderCode,
  Server,
  Code2,
  GitCommit,
  Cloud,
} from "lucide-react";
import { metrics } from "@/data/portfolio";

const iconMap: Record<string, any> = {
  Calendar,
  FolderCode,
  Server,
  Code2,
  GitCommit,
  Cloud,
};

interface MetricCardProps {
  metric: typeof metrics[0];
  index: number;
}

const MetricCard = ({ metric, index }: MetricCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const Icon = iconMap[metric.icon] || Code2;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="p-6 rounded-xl border border-muted/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
        {/* Icon */}
        <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-6 w-6 text-primary" />
        </div>

        {/* Value */}
        <div className="mb-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            {metric.value}
          </motion.div>
        </div>

        {/* Label */}
        <p className="text-sm text-muted-foreground font-medium">
          {metric.label}
        </p>

        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

export function MetricsSection() {
  return (
    <section className="py-24 relative">
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
            Engineering Metrics
          </h2>
          <p className="text-lg text-muted-foreground">
            Quantifiable achievements in backend development and system architecture
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.id} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
