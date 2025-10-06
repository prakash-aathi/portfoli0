import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Freelance = () => {
  const specialties = [
    "Full-stack web applications with React, Node.js, Spring Boot",
    "Workflow automation for business operations",
    "Real-time communication & notifications",
    "Scalable backend APIs for web/mobile apps",
    "AI-based integrations using Spring AI, Langchain, n8n",
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="freelance" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card border border-primary/30 rounded-3xl p-10 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
              <span className="text-gradient">Let's build</span> your next scalable system!
            </h2>

            <p className="text-lg text-foreground/80 mb-8 text-center leading-relaxed">
              Whether you need a Full-stack web app, a custom workflow automation, or backend API design,
              I can help bring your idea to life with modern technologies and clean architecture.
            </p>

            <div className="space-y-4 mb-10">
              <h3 className="text-xl font-semibold text-foreground mb-4">My Specialties:</h3>
              {specialties.map((specialty, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-3 items-start"
                >
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-foreground/80 text-lg">{specialty}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 md:px-10 py-4 md:py-6 text-base md:text-lg rounded-xl shadow-lg hover:shadow-primary/50 transition-all duration-300 group w-full md:w-auto"
              >
                Let's Discuss Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Freelance;
