export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "SkillsConnect – Job Matching Platform",
    description:
      "A full-stack hiring platform connecting skill owners with companies. Built with React, Spring Boot, and MySQL featuring real-time chat via WebSocket.",
    tags: ["React", "Spring Boot", "MySQL", "WebSocket"],
    link: "https://github.com/prakashaathi/skillsconnect",
  },
  {
    title: "Dynamic Workflow Engine (POC)",
    description:
      "Custom workflow engine using Dapr and Spring Boot. Supports dynamic service/user tasks, branching, rework loops, and JSON-defined flows.",
    tags: ["Spring Boot", "Dapr", "Microservices"],
    link: "https://github.com/prakashaathi/dapr-workflow-engine",
  },
  {
    title: "AI Resume Chat Assistant",
    description:
      "Spring AI-powered chatbot trained on user resume data for automated mock interview Q&A and skill-based conversations.",
    tags: ["Spring Boot", "Spring AI", "OpenAI API"],
    link: "https://github.com/prakashaathi/spring-ai-resume-bot",
  },
  {
    title: "KEDA + Datadog Integration",
    description:
      "Serverless trigger system that runs a Kubernetes job when S3 objects exceed a threshold, reporting counts and last run time via an API.",
    tags: ["KEDA", "Datadog", "AWS S3"],
    link: "https://github.com/prakashaathi/keda-datadog-trigger",
  },
];
