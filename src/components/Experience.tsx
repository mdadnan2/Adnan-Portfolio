import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const achievements = [
    "Designed RESTful APIs using Node.js, Express.js, Nest.js, and Hono.js",
    "Integrated secure authentication (JWT, Firebase Auth, Better Auth)",
    "Optimized MongoDB queries achieving 25% improvement in API response time",
    "Implemented comprehensive unit testing with Jest",
    "Collaborated in Agile environment using Git, Bitbucket, and Jira",
    "Conducted code reviews and participated in sprint planning"
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            Building scalable backend solutions in production environments
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Backend Developer</h3>
                  <p className="text-xl text-primary font-semibold mb-2">
                    Broadstairs IT Solutions
                  </p>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Pune, Maharashtra</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>January 2024 - Present</span>
                    </div>
                  </div>
                </div>
                <Badge className="mt-4 md:mt-0 bg-gradient-to-r from-primary to-secondary text-white border-none">
                  Current Position
                </Badge>
              </div>

              <div className="space-y-4 mt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Key Achievements</h4>
                <div className="grid gap-3">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
