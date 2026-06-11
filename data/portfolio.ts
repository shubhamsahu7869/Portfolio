import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Laptop,
  Rocket,
  Trophy
} from "lucide-react";

export const profile = {
  name: "Shubham",
  fullName: "Shubham Sahu",
  role: "Software Developer & Full Stack Developer",
  subtitle: "Building scalable software and web applications with modern technologies",
  location: "Indore, Madhya Pradesh, India",
  email: "sahushubham2221@gmail.com",
  phone: "+91 8962129101",
  github: "https://github.com/shubhamsahu7869",
  linkedin: "https://www.linkedin.com/in/shubham-sahu-893588359",
  leetcode: "https://leetcode.com/u/Shubham_Sahu7869/",
  resume: "/Shubham-Resume.pdf"
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const skillGroups = [
  {
    title: "Frontend",
    level: 91,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Backend",
    level: 84,
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Authentication", "API Integration"]
  },
  {
    title: "Programming",
    level: 78,
    skills: ["JavaScript", "TypeScript", "Java", "C++", "Python"]
  },
  {
    title: "Tools",
    level: 88,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Canva", "Claude"]
  }
];

export const projects = [
  {
    title: "PlanMyYatra",
    category: "Frontend",
    description:
      "AI-powered travel planner that generates personalized itineraries, smart destination suggestions, and day-wise budget planning based on user preferences.",
    image: "/projects/planmyyatra.png",
    imageTone: "from-gold/25 via-aqua/20 to-violet/20",
    tech: ["MERN Stack", "OpenRouter API", "JWT", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/shubhamsahu7869/PlanMyYatra",
    demo: "#contact",
    highlights: ["AI itinerary generation", "Trip management", "OpenRouter API", "Budget planning"]
  },
  {
    title: "SevaDaan Web App",
    category: "MERN",
    description:
      "NGO, volunteer, and donor collaboration platform with campaign workflows, donation management, RESTful APIs, and a responsive React interface.",
    image: "/projects/sevadaan.png",
    imageTone: "from-aqua/25 via-violet/20 to-gold/20",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Vercel"],
    github: "https://github.com/shubhamsahu7869/SevaDaan",
    demo: "https://sevadaan-ngo-platform.vercel.app/",
    highlights: ["NGO-volunteer collaboration", "RESTful APIs", "Donation workflows", "Responsive UI"]
  },
  {
    title: "Trading Web",
    category: "Frontend",
    description:
      "A deployed trading-themed web interface focused on clean layouts, responsive UI, and modern frontend presentation.",
    image: "/projects/trading-web.png",
    imageTone: "from-gold/25 via-aqua/15 to-white/10",
    tech: ["JavaScript", "Frontend", "Vercel"],
    github: "https://github.com/shubhamsahu7869/Trading-web",
    demo: "https://trading-web-neon.vercel.app",
    highlights: ["Live Vercel deploy", "Trading UI", "Responsive layout", "Frontend project"]
  },
  {
    title: "Voyse",
    category: "Full Stack",
    description:
      "A modern deployed web application from Shubham's GitHub portfolio, built with a polished product interface and live frontend/backend experience.",
    image: "/projects/voyse.png",
    imageTone: "from-aqua/25 via-gold/15 to-violet/10",
    tech: ["JavaScript", "Web App", "Vercel"],
    github: "https://github.com/shubhamsahu7869/Voyse",
    demo: "https://voyse-blush.vercel.app",
    highlights: ["Live Vercel deploy", "Modern UI", "Product workflow", "Portfolio project"]
  },
  {
    title: "Railway Madad App",
    category: "Frontend",
    description:
      "A clean UI/UX redesign concept for the Railway Madad grievance platform with improved navigation and complaint registration flow.",
    image: "/projects/railway-madad.png",
    imageTone: "from-violet/25 via-aqua/20 to-white/10",
    tech: ["JavaScript", "React", "CSS", "UI/UX"],
    github: "https://github.com/shubhamsahu7869/Railway-Madad-App-",
    demo: "https://sih-lyart-five.vercel.app/",
    highlights: ["Complaint flow", "Modern redesign", "Responsive experience"]
  },
  {
    title: "Frontend Task",
    category: "Frontend",
    description:
      "A deployed frontend assignment showcasing component structure, UI implementation, responsive spacing, and production hosting.",
    image: "/projects/frontend-task.png",
    imageTone: "from-white/15 via-gold/20 to-aqua/20",
    tech: ["JavaScript", "Frontend", "Vercel"],
    github: "https://github.com/shubhamsahu7869/Frontend-Task",
    demo: "https://frontend-task-virid-rho.vercel.app",
    highlights: ["Live Vercel deploy", "Frontend task", "Responsive UI", "Clean components"]
  },
  {
    title: "MyBook App",
    category: "Full Stack",
    description:
      "Book-focused web application from Shubham's GitHub portfolio, included as part of the public project showcase.",
    image: "/projects/mybookapp.png",
    imageTone: "from-white/15 via-gold/20 to-aqua/20",
    tech: ["JavaScript", "Web App", "GitHub"],
    github: "https://github.com/shubhamsahu7869/mybookapp",
    demo: "#contact",
    highlights: ["Book app", "Clean interface", "Portfolio project"]
  }
];

export const timeline = [
  {
    icon: BriefcaseBusiness,
    title: "Web Development Trainee",
    meta: "GITECGO Pvt. Ltd. | Jan 2026 - May 2026",
    text: "Architected a real-time chat platform using React.js, reusable UI components, Context API, Hooks, useReducer, and localStorage-backed client workflows."
  },
  {
    icon: Laptop,
    title: "Full Stack Developer Intern",
    meta: "Kapil Automobiles Pvt. Ltd. | May 2025 - June 2025",
    text: "Built internal full-stack tools with Java and JavaScript, optimized backend logic and UI workflows, and documented automation improvements."
  },
  {
    icon: Rocket,
    title: "Placement Preparation",
    meta: "Ongoing",
    text: "Focused on DSA, problem solving, system fundamentals, and practical project delivery."
  }
];

export const education = {
  degree: "B.Tech in Electronics & Communication Engineering",
  institute: "Madhav Institute of Technology and Science, Gwalior",
  cgpa: "CGPA: 7.21 / 10.00",
  graduation: "November 2022 - June 2026"
};

export const achievements = [
  {
    icon: Trophy,
    title: "DSA Practice",
    text: "Solving coding problems consistently on LeetCode.",
    href: profile.leetcode
  },
  {
    icon: Code2,
    title: "Web Development Projects",
    text: "Built MERN and frontend projects with polished UI and practical workflows.",
    href: profile.github
  },
  {
    icon: GraduationCap,
    title: "Technical Certifications",
    text: "Certification details can be added as Shubham shares verified credentials.",
    href: "#contact"
  }
];
