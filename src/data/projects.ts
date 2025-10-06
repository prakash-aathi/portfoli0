export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  type?: "public" | "private";
}

export const projects: Project[] = [
  {
    title: "MySkillsTree – Job Matching Platform",
    description:
      "A full-stack hiring platform connecting skill owners with companies. Built with React, Spring Boot, and MySQL featuring real-time chat via WebSocket.",
    tags: ["React", "Spring Boot", "MySQL", "WebSocket"],
    link: "https://myskillstree.co",
    type: "public",
  },
  {
    title: "Dynamic Workflow Engine (POC)",
    description:
      "Custom workflow engine using Dapr and Node.js. Supports dynamic service/user tasks, branching, rework loops, and JSON-defined flows.",
    tags: ["Spring Boot", "Dapr", "Microservices"],
    link: "https://github.com/prakashaathi/dapr-workflow-engine",
    type: "private",
  },{
    title: "PG Admission Portal",
    description:
      "A web application connecting colleges and students for postgraduate admissions with JWT authentication, role-based authorization, swagger API docs, and responsive design.",
    tags: ["Spring Boot", "ReactJS", "MySQL", "Redux Toolkit"],
    link: "https://github.com/prakash-aathi/Admission-Portal",
    type: "public",
  },
  {
    title: "Git Reach Chat",
    description:
      "A developer chat platform using GitHub usernames for seamless communication and collaboration. Built with Spring Boot, Cassandra, Next.js, TypeScript, and Tailwind CSS.",
    tags: ["Spring Boot", "Cassandra", "Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/prakash-aathi/GitReach-Chat",
    type: "public",
  },
  {
    title: "KEDA + Datadog Integration",
    description:
      "Serverless trigger system that runs a Kubernetes job when S3 objects exceed a threshold, reporting counts and last run time via an API.",
    tags: ["KEDA", "Datadog", "AWS S3"],
    link: "https://github.com/prakashaathi/keda-datadog-trigger",
    type: "private",
  },
];
