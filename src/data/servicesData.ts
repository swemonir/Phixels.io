export interface Service {
    id: string;
    title: string;
    category: "AI" | "Web" | "App" | "UI" | "UX" | "Design" | "Development";
    image: string;
    summary: string;
    description: string;
    features: string[];
    technologies?: string[];
    fiverrUrl: string;
    price: string;
    rating: number;
    reviews: number;
}

export const services: Service[] = [
    {
        id: "ai-chatbot-development",
        title: "AI Chatbot Development",
        category: "AI",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
        summary: "Build intelligent conversational AI agents that understand context and deliver personalized user experiences.",
        description: "Our AI chatbot solutions leverage cutting-edge NLP and machine learning to create intelligent virtual assistants that enhance customer engagement and automate support workflows.",
        features: ["Natural Language Processing", "Multi-language Support", "Context-Aware Responses", "24/7 Availability"],
        technologies: ["GPT-4", "LangChain", "TensorFlow", "Dialogflow"],
        fiverrUrl: "https://www.fiverr.com/categories/programming-tech/ai-services",
        price: "From $150",
        rating: 5.0,
        reviews: 120
    },
    {
        id: "machine-learning-solutions",
        title: "Machine Learning Solutions",
        category: "AI",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000",
        summary: "Custom ML models tailored to your business needs, from predictive analytics to computer vision.",
        description: "Transform your data into actionable insights with our custom machine learning solutions designed for real-world business challenges.",
        features: ["Predictive Analytics", "Computer Vision", "Recommendation Systems", "Anomaly Detection"],
        technologies: ["PyTorch", "Scikit-learn", "OpenCV", "Keras"],
        fiverrUrl: "https://www.fiverr.com/",
        price: "From $200",
        rating: 4.9,
        reviews: 85
    },
    {
        id: "ai-automation",
        title: "AI Process Automation",
        category: "AI",
        image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&q=80&w=1000",
        summary: "Automate repetitive tasks and workflows using intelligent AI agents and RPA technologies.",
        description: "Streamline operations and reduce costs with AI-powered automation that learns and adapts to your business processes.",
        features: ["Workflow Automation", "Document Processing", "Data Entry Automation", "Smart Scheduling"],
        technologies: ["UiPath", "Automation Anywhere", "Python", "TensorFlow"],
        fiverrUrl: "https://www.fiverr.com/",
        price: "From $180",
        rating: 4.8,
        reviews: 95
    },
    {
        id: "web-app-development",
        title: "Web Application Development",
        category: "Web",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1000",
        summary: "Scalable, high-performance web applications built with modern frameworks and best practices.",
        description: "We create robust web applications that deliver exceptional user experiences and drive business growth.",
        features: ["Responsive Design", "Real-time Features", "API Integration", "Cloud Deployment"],
        technologies: ["Next.js", "React", "Node.js", "PostgreSQL"],
        fiverrUrl: "https://www.fiverr.com/",
        price: "From $250",
        rating: 5.0,
        reviews: 156
    },
    {
        id: "ecommerce-development",
        title: "eCommerce Development",
        category: "Web",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000",
        summary: "Complete eCommerce solutions with payment integration, inventory management, and analytics.",
        description: "Launch your online store with our comprehensive eCommerce platforms designed for conversion and growth.",
        features: ["Payment Gateway Integration", "Inventory Management", "Order Tracking", "Analytics Dashboard"],
        technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
        fiverrUrl: "https://www.fiverr.com/",
        price: "From $300",
        rating: 4.9,
        reviews: 142
    },
    {
        id: "progressive-web-apps",
        title: "Progressive Web Apps (PWA)",
        category: "Web",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
        summary: "App-like experiences on the web with offline capabilities and push notifications.",
        description: "Deliver native app experiences through the browser with our PWA development services.",
        features: ["Offline Functionality", "Push Notifications", "Fast Loading", "Cross-Platform"],
        technologies: ["Service Workers", "Workbox", "React", "Vue.js"],
        fiverrUrl: "https://www.fiverr.com/",
        price: "From $220",
        rating: 4.9,
        reviews: 78
    },
    {
        id: "mobile-app-development",
        title: "Mobile App Development",
        category: "App",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000",
        summary: "Native and cross-platform mobile applications for iOS and Android with seamless performance.",
        description: "Build engaging mobile experiences that users love with our expert mobile development team.",
        features: ["Cross-Platform Development", "Native Performance", "Offline Support", "App Store Optimization"],
        technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
        fiverrUrl: "https://www.fiverr.com/",
        price: "From $280",
        rating: 5.0,
        reviews: 210
    },
    {
        id: "ios-app-development",
        title: "iOS App Development",
        category: "App",
        image: "https://images.unsplash.com/photo-1621768216002-5ac171876625?auto=format&fit=crop&q=80&w=1000",
        summary: "Premium iOS applications built with Swift and SwiftUI for the Apple ecosystem.",
        description: "Create stunning iOS apps that leverage the full power of Apple's ecosystem and design principles.",
        features: ["SwiftUI Interface", "Core Data Integration", "iCloud Sync", "Apple Pay"],
        technologies: ["Swift", "SwiftUI", "Xcode", "Core Data"],
        fiverrUrl: "https://www.fiverr.com/",
        price: "From $320",
        rating: 4.9,
        reviews: 165
    },
    {
        id: "android-app-development",
        title: "Android App Development",
        category: "App",
        image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80&w=1000",
        summary: "High-quality Android applications using Kotlin and modern Android development practices.",
        description: "Reach billions of Android users with apps built using the latest Android technologies and Material Design.",
        features: ["Material Design", "Jetpack Compose", "Google Play Services", "Firebase Integration"],
        technologies: ["Kotlin", "Jetpack Compose", "Android Studio", "Firebase"],
        fiverrUrl: "https://www.fiverr.com/",
        price: "From $300",
        rating: 4.8,
        reviews: 145
    },
    {
        id: "ui-design",
        title: "UI Design Services",
        category: "UI",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1000",
        summary: "Beautiful, intuitive user interfaces that captivate users and enhance brand identity.",
        description: "Our UI designers create visually stunning interfaces that align with your brand and delight users.",
        features: ["Visual Design", "Design Systems", "Responsive Layouts", "Accessibility"],
        technologies: ["Figma", "Adobe XD", "Sketch", "Illustrator"],
        fiverrUrl: "https://www.fiverr.com/",
        price: "From $120",
        rating: 5.0,
        reviews: 198
    },
    {
        id: "ux-research",
        title: "UX Research & Strategy",
        category: "UX",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
        summary: "Data-driven UX research to understand user behavior and optimize digital experiences.",
        description: "Make informed design decisions with comprehensive UX research and user testing methodologies.",
        features: ["User Testing", "Persona Development", "Journey Mapping", "Usability Analysis"],
        technologies: ["Hotjar", "Maze", "UserTesting", "Google Analytics"],
        fiverrUrl: "https://www.fiverr.com/",
        price: "From $180",
        rating: 4.9,
        reviews: 92
    },
    {
        id: "ux-design",
        title: "UX Design & Prototyping",
        category: "UX",
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=1000",
        summary: "User-centered design solutions that solve real problems and create delightful experiences.",
        description: "Transform user insights into intuitive designs through our comprehensive UX design process.",
        features: ["Wireframing", "Interactive Prototypes", "User Flows", "Information Architecture"],
        technologies: ["Figma", "Framer", "Principle", "InVision"],
        fiverrUrl: "https://www.fiverr.com/",
        price: "From $150",
        rating: 5.0,
        reviews: 134
    },
    {
        id: "brand-identity",
        title: "Brand Identity Design",
        category: "Design",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1000",
        summary: "Comprehensive brand identity systems that tell your story and resonate with your audience.",
        description: "Build a memorable brand with our strategic approach to visual identity and brand guidelines.",
        features: ["Logo Design", "Brand Guidelines", "Color Systems", "Typography"],
        technologies: ["Adobe Illustrator", "Photoshop", "InDesign", "Figma"],
        fiverrUrl: "https://www.fiverr.com/",
        price: "From $200",
        rating: 4.9,
        reviews: 176
    },
    {
        id: "motion-graphics",
        title: "Motion Graphics & Animation",
        category: "Design",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
        summary: "Engaging animations and motion graphics that bring your brand to life.",
        description: "Captivate your audience with stunning motion graphics and animations for web, mobile, and video.",
        features: ["2D/3D Animation", "Micro-interactions", "Video Production", "Explainer Videos"],
        technologies: ["After Effects", "Lottie", "Blender", "Cinema 4D"],
        fiverrUrl: "https://www.fiverr.com/",
        price: "From $250",
        rating: 4.8,
        reviews: 88
    },
    {
        id: "full-stack-development",
        title: "Full-Stack Development",
        category: "Development",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
        summary: "End-to-end development services from database to frontend with modern tech stacks.",
        description: "Complete software solutions built by experienced full-stack developers who understand the entire ecosystem.",
        features: ["Frontend Development", "Backend APIs", "Database Design", "DevOps"],
        technologies: ["React", "Node.js", "MongoDB", "Docker"],
        fiverrUrl: "https://www.fiverr.com/",
        price: "From $350",
        rating: 5.0,
        reviews: 203
    },
    {
        id: "cloud-solutions",
        title: "Cloud Solutions & DevOps",
        category: "Development",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000",
        summary: "Scalable cloud infrastructure and CI/CD pipelines for modern applications.",
        description: "Deploy and scale your applications with confidence using our cloud and DevOps expertise.",
        features: ["Cloud Migration", "CI/CD Pipelines", "Container Orchestration", "Monitoring"],
        technologies: ["AWS", "Azure", "Kubernetes", "Terraform"],
        fiverrUrl: "https://www.fiverr.com/",
        price: "From $280",
        rating: 4.9,
        reviews: 112
    },
    {
        id: "api-development",
        title: "API Development & Integration",
        category: "Development",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
        summary: "Robust RESTful and GraphQL APIs with comprehensive documentation and security.",
        description: "Build scalable, secure APIs that power your applications and integrate seamlessly with third-party services.",
        features: ["RESTful APIs", "GraphQL", "API Documentation", "Authentication"],
        technologies: ["Node.js", "Express", "GraphQL", "Swagger"],
        fiverrUrl: "https://www.fiverr.com/",
        price: "From $200",
        rating: 4.8,
        reviews: 127
    },
    {
        id: "ar-vr-development",
        title: "AR/VR Development",
        category: "AI",
        image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&q=80&w=1000",
        summary: "Immersive augmented and virtual reality experiences for training, marketing, and entertainment.",
        description: "Step into the future with our AR/VR solutions that create unforgettable immersive experiences.",
        features: ["AR Filters", "VR Training", "3D Visualization", "Spatial Computing"],
        technologies: ["Unity", "ARKit", "ARCore", "WebXR"],
        fiverrUrl: "https://www.fiverr.com/",
        price: "From $400",
        rating: 4.9,
        reviews: 67
    }
];
