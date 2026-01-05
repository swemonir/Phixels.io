
export interface Project {
  id: string;
  title: string;
  category: "Web" | "App" | "Software" | "AI" | "Design";
  type: "Portfolio" | "Case Study";
  image: string;
  description: string;
  link?: string;
  client?: string;
  duration?: string;
  technologies?: string[];
  results?: string[]; // For case studies
  challenge?: string; // For case studies
  solution?: string; // For case studies
}

export const portfolioProjects: Project[] = [
  {
    id: "portfolio-1",
    title: "E-Commerce Revolution",
    category: "Web",
    type: "Portfolio",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    description: "A modern e-commerce platform built with Next.js and Shopify.",
    link: "/portfolio/e-commerce-revolution",
    technologies: ["Next.js", "Shopify", "Tailwind CSS"],
  },
  {
    id: "portfolio-2",
    title: "HealthTech App",
    category: "App",
    type: "Portfolio",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    description: "Mobile application for tracking patient health metrics.",
    link: "/portfolio/healthtech-app",
    technologies: ["React Native", "Firebase", "Node.js"],
  },
  {
    id: "portfolio-3",
    title: "FinTech Dashboard",
    category: "Web",
    type: "Portfolio",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    description: "Comprehensive financial dashboard for real-time trading.",
    link: "/portfolio/fintech-dashboard",
    technologies: ["Vue.js", "D3.js", "Python"],
  },
  {
    id: "portfolio-4",
    title: "AI Content Generator",
    category: "AI",
    type: "Portfolio",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    description: "AI-powered tool for generating marketing content.",
    link: "/portfolio/ai-content-generator",
    technologies: ["OpenAI API", "React", "Express"],
  },
];

export const caseStudyProjects: Project[] = [
  {
    id: "case-study-1",
    title: "Scaling Logistics for Global Reach",
    category: "Software",
    type: "Case Study",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    description: "How we helped a logistics giant increase efficiency by 40%.",
    link: "/case-study/scaling-logistics",
    challenge: "Manual tracking and inefficient route planning.",
    solution: "Custom ERP with AI-driven route optimization.",
    results: ["40% Efficiency Increase", "20% Cost Reduction", "Real-time Tracking"],
  },
  {
    id: "case-study-2",
    title: "Reimagining Retail User Experience",
    category: "Design",
    type: "Case Study",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    description: "Redesigning the shopping experience for a major retail brand.",
    link: "/case-study/retail-ux",
    challenge: "High cart abandonment rate and outdated UI.",
    solution: "User-centric redesign with streamlined checkout flow.",
    results: ["35% Conversion Uplift", "50% Reduced Bounce Rate", "Award-winning Design"],
  },
  {
    id: "case-study-3",
    title: "Smart City IoT Infrastructure",
    category: "App",
    type: "Case Study",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
    description: "Connecting city infrastructure for better management.",
    link: "/case-study/smart-city-iot",
    challenge: "Disconnected systems and lack of data visibility.",
    solution: "Unified IoT platform integrating traffic, waste, and energy management.",
    results: ["Improved Traffic Flow", "Reduced Energy Consumption", "Better Citizen Engagement"],
  },
];

export const allProjects = [...portfolioProjects, ...caseStudyProjects];
