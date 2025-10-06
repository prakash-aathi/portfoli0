import { motion } from "framer-motion";
import { Code2, Wrench, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 size={32} />,
      title: "Core Stack",
      skills: [
        "Java",
        "Spring Boot",
        "React",
        "MySQL",
        "PostgreSQL",
        "REST APIs",
        "WebSocket",
        "Microservices",
        "Git",
        "Maven",
        "Docker",
        "AWS",
      ],
    },
    {
      icon: <Wrench size={32} />,
      title: "Advanced Tools",
      skills: [
        "n8n",
        "Langchain",  
        "Spring AI (OpenAI integration)",
        "supabase",
        "Keycloak (Identity & Access Management)",
        "Redis",
        "RabbitMQ",
      ],
    },
    {
      icon: <Users size={32} />,
      title: "Soft Skills",
      skills: [
        "System Design Thinking",
        "Client Communication",
        "Agile Development",
        "Technical Documentation",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:border-primary/50"
            >
              <div className="text-primary mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-secondary/50 text-foreground/90 px-3 py-1.5 rounded-lg text-sm font-medium border border-border hover:border-primary/50 transition-colors duration-200"
                  >
                    {skill}
                  </span>
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
