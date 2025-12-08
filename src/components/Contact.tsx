import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone, MapPin, Download } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "adnanmd2410@gmail.com",
      href: "mailto:adnanmd2410@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9356576610",
      href: "tel:+919356576610"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra, 411048",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/mohammadadnan01/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View GitHub Profile",
      href: "https://github.com/DevAdnanAnsari"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Let's discuss how I can contribute to your next project
          </p>
          {/* Availability Badge */}
          <div className="flex items-center justify-center gap-2 text-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="text-muted-foreground">Available for new opportunities</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-secondary">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Mohammad_Adnan.pdf';
              link.download = 'Mohammad_Adnan_Resume.pdf';
              link.click();
            }}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold px-8 py-6 text-lg group"
          >
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Download Resume
          </Button>
          
          {/* Quick Response Badge */}
          <p className="text-sm text-muted-foreground">⚡ Usually responds within 24 hours</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
