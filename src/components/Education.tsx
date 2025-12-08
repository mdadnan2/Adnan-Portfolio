import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const education = [
    {
      degree: "B.Voc in Software Development",
      institution: "Arvind Gavali College of Engineering",
      location: "Satara, Maharashtra",
      year: "2025",
      type: "Bachelor's Degree"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Rahmaniya Junior College",
      location: "Achalpur, Maharashtra",
      year: "2020",
      type: "Higher Secondary"
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Education
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic foundation in software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-secondary">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-bold">{edu.degree}</h3>
                          <p className="text-primary font-semibold">{edu.institution}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{edu.location}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.year}</span>
                      </div>
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

export default Education;