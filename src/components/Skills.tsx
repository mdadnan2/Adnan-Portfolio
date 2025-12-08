import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { SkillBar } from "@/components/ui/skill-bar";
import { Server, Code, Database, GitBranch, Shield, Cloud } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const skillsGridRef = useRef(null);
  const isSkillsGridInView = useInView(skillsGridRef, { margin: "-100px" });

  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Node.js", "Express.js", "Nest.js", "Hono.js", "Mongoose", "Typegoose", "Sequelize", "Prisma", "Zod"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL"]
    },
    {
      title: "Testing & Tools",
      skills: ["Postman", "Jest", "Git", "Bitbucket", "Jira", "Docker"]
    },
    {
      title: "Authentication",
      skills: ["JWT", "Firebase Auth", "Better Auth"]
    },
    {
      title: "Concepts & Paradigms",
      skills: ["OOP", "Functional Programming", "REST API", "Microservices", "CI/CD", "AWS Basics", "Vercel"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive toolkit for building modern backend solutions
          </p>
        </motion.div>

        {/* Top Skills with Animated Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Core Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <SkillBar name="Node.js" level={90} icon={<Server size={20} className="text-green-500" />} color="bg-gradient-to-r from-green-500 to-emerald-500" />
            <SkillBar name="TypeScript" level={85} icon={<Code size={20} className="text-blue-500" />} color="bg-gradient-to-r from-blue-500 to-cyan-500" />
            <SkillBar name="MongoDB" level={85} icon={<Database size={20} className="text-green-600" />} color="bg-gradient-to-r from-green-600 to-green-400" />
            <SkillBar name="PostgreSQL" level={80} icon={<Database size={20} className="text-blue-600" />} color="bg-gradient-to-r from-blue-600 to-blue-400" />
            <SkillBar name="REST APIs" level={90} icon={<Cloud size={20} className="text-purple-500" />} color="bg-gradient-to-r from-purple-500 to-pink-500" />
            <SkillBar name="Git" level={85} icon={<GitBranch size={20} className="text-orange-500" />} color="bg-gradient-to-r from-orange-500 to-red-500" />
          </div>
        </motion.div>

        {/* All Skills */}
        <div ref={skillsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={isSkillsGridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isSkillsGridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.08 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="px-4 py-2 text-sm font-medium bg-muted hover:bg-primary/20 hover:border-primary transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
