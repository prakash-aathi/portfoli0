export interface Testimonial {
  name: string;
  feedback: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Abhishek KC",
    feedback:
      "Prakash developed a solid proof-of-concept for our workflow automation engine — scalable, clean, and production-ready.",
    role: "DSVP, AWS Banking Solutions",
  },
  {
    name: "Tech Lead, StartupX",
    feedback:
      "He quickly built our validation microservice in Spring Boot with automated email triggers — exactly what we needed.",
    role: "Tech Lead, StartupX",
  },
];
