import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const highlights = [
    "Revamped a legacy banking app by migrating Java Servlets to Spring Boot APIs and resolving 50+ SonarQube issues.",
    "Built POCs using Dapr, Camunda, KEDA, and Spring AI for dynamic workflow automation and event-driven systems.",
    "Developed an AI-based mock interview assistant using Spring Boot + React.",
    "Created a real-time chat application using WebSocket and MySQL.",
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            About <span className="text-gradient">Me</span>
          </h2>

          <p className="text-xl text-center text-foreground/60 mb-8">
            Full-Stack & Workflow-AI Engineer | Java, Spring Boot, React, Node.js, AWS & AI Enthusiast
          </p>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              I'm a passionate full-stack developer who loves turning complex workflows into elegant, automated systems.
              I've built solutions around workflow automation, real-time messaging, microservices, and dynamic data orchestration.
            </p>

            <p className="text-lg text-primary font-semibold mb-8">
              My focus: reliability, scalability, and simplicity.
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Key Achievements</h3>
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-3 items-start"
                >
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-foreground/80 leading-relaxed">{highlight}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-lg text-foreground/70 mt-8 italic">
              Fun fact: I love experimenting with new AI tools and integrating them into my projects to enhance user experiences!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
