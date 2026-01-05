
export interface Service {
    id: string; // The slug
    title: string;
    category: "App" | "Web" | "Software" | "AI" | "Design" | "Development" | "UI" | "UX"; 
    shortDescription: string;
    fiverrUrl: string;
    rating: number;
    reviews: number;
    price: string;
    heroImage: string;
    description: string;
    features: string[];
    technologies: string[];
    process: { title: string; description: string }[];
    projects: { title: string; image: string; link?: string }[];
    benefits: string[];
    faq: { question: string; answer: string }[];
}

export interface MegaMenuCategory {
    title: string;
    subItems: { label: string; href: string }[];
}

export const megaMenuCategories: MegaMenuCategory[] = [
    {
        title: "App Development",
        subItems: [
            { label: "Android App Development", href: "/services/android-app-development" },
            { label: "iOS App Development", href: "/services/ios-app-development" },
            { label: "React Native App", href: "/services/react-native-app" },
            { label: "Flutter App", href: "/services/flutter-app" },
            { label: "Cross Platform App", href: "/services/cross-platform-app" },
            { label: "Custom App Solutions", href: "/services/custom-app-solutions" },
        ]
    },
    {
        title: "Web Development",
        subItems: [
            { label: "Frontend Development", href: "/services/frontend-development" },
            { label: "Backend Development", href: "/services/backend-development" },
            { label: "Full Stack Development", href: "/services/full-stack-development" },
            { label: "Next.js / React.js", href: "/services/nextjs-reactjs" },
            { label: "E-commerce Development", href: "/services/ecommerce-development" },
            { label: "Custom Web Applications", href: "/services/custom-web-applications" },
        ]
    },
    {
        title: "Software Development",
        subItems: [
            { label: "Enterprise Software", href: "/services/enterprise-software" },
            { label: "CRM / ERP Systems", href: "/services/crm-erp-systems" },
            { label: "Desktop Applications", href: "/services/desktop-applications" },
            { label: "Cloud Based Software", href: "/services/cloud-based-software" },
            { label: "Business Automation Software", href: "/services/business-automation-software" },
        ]
    },
    {
        title: "E-commerce Solutions",
        subItems: [
            { label: "E-commerce Development", href: "/services/ecommerce-development" },
            { label: "Shopify Solutions", href: "/services/shopify-solutions" },
            { label: "WooCommerce Store", href: "/services/woocommerce-store" },
            { label: "Magento Development", href: "/services/magento-development" },
            { label: "Headless Commerce", href: "/services/headless-commerce" },
            { label: "E-commerce Optimization", href: "/services/ecommerce-optimization" },
        ]
    }
];

// Helper to create placeholder service data if not fully defined yet, ensuring no crashes
const createService = (id: string, title: string, category: Service['category'], desc: string, customImage?: string): Service => ({
    id,
    title,
    category,
    shortDescription: desc,
    fiverrUrl: "https://www.fiverr.com/monitvi",
    rating: 5.0,
    reviews: Math.floor(Math.random() * 100) + 10,
    price: `$${Math.floor(Math.random() * 500) + 100}`,
    heroImage: customImage || "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200", // Professional office/tech default
    description: `We specialize in ${title}. ${desc} Our expert team delivers high-quality solutions tailored to your business needs.`,
    features: [
        "Custom Scalable Architecture",
        "High Performance & Security",
        "24/7 Support & Maintenance",
        "Seamless Integration",
        "User-Centric Design"
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "AWS", "Python"],
    process: [
        { title: "Discovery", description: "We analyze your requirements and business goals." },
        { title: "Design", description: "Creating intuitive and engaging designs." },
        { title: "Development", description: "Building robust and scalable solutions." },
        { title: "Testing", description: "Ensuring quality and performance." },
        { title: "Deployment", description: "Launching your product to the market." }
    ],
    projects: [
        { title: "Project Alpha", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500" },
        { title: "Project Beta", image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=500" },
        { title: "Project Gamma", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500" }
    ],
    benefits: [
        "Cost Effective Solutions",
        "Faster Time to Market",
        "Competitive Advantage",
        "Scalable Growth"
    ],
    faq: [
        { question: `What is the timeline for ${title}?`, answer: "Timelines vary based on complexity, typically ranging from 2 weeks to a few months." },
        { question: "Do you provide post-launch support?", answer: "Yes, we offer comprehensive maintenance and support packages." }
    ]
});

export const services: Service[] = [
    // App Development
    createService("android-app-development", "Android App Development", "App", "Native Android apps built with Kotlin and Jetpack Compose.", "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200"),
    createService("ios-app-development", "iOS App Development", "App", "Premium iOS applications using Swift and SwiftUI.", "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200"),
    createService("react-native-app", "React Native App", "App", "Cross-platform apps ensuring 95% code reusability."),
    createService("flutter-app", "Flutter App", "App", "Beautiful, natively compiled applications from a single codebase."),
    createService("cross-platform-app", "Cross Platform App", "App", "Efficient multi-platform solutions."),
    createService("custom-app-solutions", "Custom App Solutions", "App", "Tailored mobile solutions for unique business needs."),

    // Web Development
    createService("frontend-development", "Frontend Development", "Web", "Engaging and responsive user interfaces."),
    createService("backend-development", "Backend Development", "Web", "Robust and scalable server-side solutions."),
    createService("full-stack-development", "Full Stack Development", "Web", "Complete web solutions from database to UI.", "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"),
    createService("nextjs-reactjs", "Next.js / React.js", "Web", "High-performance server-rendered React applications."),
    createService("ecommerce-development", "E-commerce Development", "Web", "Online stores that drive sales and conversion.", "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1200"),
    createService("custom-web-applications", "Custom Web Applications", "Web", "Bespoke web apps for complex requirements."),

    // Software Development
    createService("enterprise-software", "Enterprise Software", "Software", "Scalable software for large organizations."),
    createService("crm-erp-systems", "CRM / ERP Systems", "Software", "Streamline business operations with custom tools."),
    createService("desktop-applications", "Desktop Applications", "Software", "Native desktop apps for Windows and macOS."),
    createService("cloud-based-software", "Cloud Based Software", "Software", "SaaS products hosted on the cloud."),
    createService("business-automation-software", "Business Automation Software", "Software", "Automate workflows to save time and cost."),

    // E-commerce Solutions (New Category Services)
    createService("shopify-solutions", "Shopify Solutions", "Web", "Custom Shopify themes and apps."),
    createService("woocommerce-store", "WooCommerce Store", "Web", "Flexible WordPress e-commerce sites."),
    createService("magento-development", "Magento Development", "Web", "Enterprise-grade e-commerce platforms."),
    createService("headless-commerce", "Headless Commerce", "Web", "Decoupled architecture for ultimate flexibility."),
    createService("ecommerce-optimization", "E-commerce Optimization", "Web", "Speed and conversion rate optimization."),
    
    // AI (Kept for completeness but moved down/not in mega menu)
    createService("ai-chatbot-development", "AI Chatbot Development", "AI", "Intelligent conversational agents."),
    createService("machine-learning-solutions", "Machine Learning Solutions", "AI", "Predictive models and data analysis."),
    createService("computer-vision", "Computer Vision", "AI", "Image and video analysis solutions.")
];

export const getServiceBySlug = (slug: string) => services.find(s => s.id === slug);
