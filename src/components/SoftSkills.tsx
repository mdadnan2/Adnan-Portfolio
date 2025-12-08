import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

const SoftSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const skills = [
    "Problem-solving",
    "Analytical Thinking",
    "Debugging Abilities",
    "Fast Learner",
    "Effective Communication",
    "Team Player",
    "Time Management",
    "Task Prioritization"
  ];

  return (
    <section id="soft-skills" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Soft Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            Essential interpersonal and professional capabilities
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ scale: 1.1, rotate: 2 }}
            >
              <Badge
                className="px-6 py-3 text-base font-medium bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 border-primary/30 transition-all duration-300 cursor-default"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
