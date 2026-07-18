// Portfolio Data configuration for Kirti Saini
// Updated with new projects and name!

export const portfolioData = {
  personal: {
    name: "KIRTI SAINI",
    title: "Full Stack Web Developer & AI Specialist",
    subtitle: "Specializing in AI-driven web solutions and modern full-stack architectures.",
    bio: "Result-oriented Full Stack Developer with a BCA degree and pursuing MCA, specialized in creating AI-driven web solutions. Expert in bridging the gap between complex backend logic and intuitive frontend user experiences with a proven track record of delivering end-to-end freelance projects and mentoring students.",
    email: "kirtii2427@gmail.com",
    phone: "9460331098",
    location: "Hisar, Haryana, India",
    resumeUrl: "#", // Add link to your resume file when available
    profileImage: "/profile.jpg", // Copied profile image
    logoImage: "/logo.png", // Copied logo image
    web3formsKey: "YOUR_ACCESS_KEY_HERE", // Go to web3forms.com to get your free key
    socials: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kirti-k-a992a6258",
        icon: "linkedin"
      },
      {
        name: "GitHub",
        url: "", // Cleared for now as requested
        icon: "github"
      }
    ]
  },
  skills: [
    {
      category: "Full Stack & AI",
      items: ["Python", "Flask", "Django", "JavaScript", "React.js", "Node.js", "Express.js", "OpenAI API", "LangChain", "Socket.io", "JWT"]
    },
    {
      category: "Frontend & Design",
      items: ["HTML5", "CSS3", "Tailwind CSS", "Responsive UI Design", "Vanilla CSS"]
    },
    {
      category: "Databases & Tools",
      items: ["PostgreSQL", "MongoDB", "MySQL", "SQLAlchemy", "Git", "GitHub", "Postman", "REST APIs", "Cloudinary"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Asset Management System",
      description: "A flagship, role-based enterprise system featuring dynamic analytical dashboards, asset CRUD, secure barcode/QR code generation, automated maintenance schedules, transfer logs, and instant notifications.",
      features: [
        "Login & Authentication (JWT)",
        "Dashboard with visual charts",
        "Asset CRUD operations",
        "QR Code & Barcode generation",
        "Asset Transfer & Maintenance tracking",
        "Notifications, search, filters",
        "Role-Based Access Control (Admin/User)"
      ],
      tags: ["React", "Node.js", "Express", "PostgreSQL", "MongoDB", "JWT", "Cloudinary"],
      liveLink: "",
      githubLink: "", // Cleared for now
      imageColor: "linear-gradient(135deg, #0f172a 0%, #2563eb 100%)", // Flagship deep slate to blue
      featured: true
    },
    {
      id: 2,
      title: "KanoonMitra (AI Legal Aid Platform)",
      description: "An AI-powered legal assistance platform designed to provide accessible legal advice, retrieve relevant sections of law, and assist citizens with legal queries using language models.",
      features: [
        "Natural language legal queries",
        "Automated law section reference finder",
        "Simplified legalese summaries"
      ],
      tags: ["Python", "Flask", "OpenAI API", "React.js", "PostgreSQL", "LangChain"],
      liveLink: "",
      githubLink: "",
      imageColor: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
      featured: false
    },
    {
      id: 3,
      title: "AI Chatbox (LangChain Integration)",
      description: "An interactive, conversational chat interface integrated with LangChain for intelligent document retrieval, RAG, and context-aware question answering.",
      features: [
        "LangChain conversational memory",
        "Document parsing and vector search",
        "Smooth streaming token text responses"
      ],
      tags: ["LangChain", "Python", "JavaScript", "React.js", "OpenAI API"],
      liveLink: "",
      githubLink: "",
      imageColor: "linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)",
      featured: false
    },
    {
      id: 4,
      title: "Mock Test Portal",
      description: "An interactive educational portal for mock test scheduling and execution, featuring automated timers, instantaneous score analytics, and a comprehensive admin backend.",
      features: [
        "Student Login & registration",
        "Mock Test interface with countdown timers",
        "Instant results & performance analytics",
        "Admin Panel for question database management"
      ],
      tags: ["React.js", "Node.js", "Express", "MongoDB", "CSS Gradients"],
      liveLink: "",
      githubLink: "",
      imageColor: "linear-gradient(135deg, #059669 0%, #10b981 100%)", // Rich emerald green
      featured: false
    },
    {
      id: 5,
      title: "Real-Time Chat Application",
      description: "A reactive instant messaging app supporting multi-room messaging, online status indicators, image uploads via Cloudinary, and dynamic typing feedback.",
      features: [
        "Real-Time Chat via WebSockets",
        "Image sharing & storage Integration",
        "Online Status & typing indicators",
        "Push notifications for new messages"
      ],
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
      liveLink: "",
      githubLink: "",
      imageColor: "linear-gradient(135deg, #db2777 0%, #f472b6 100%)", // Vibrant pink/rose
      featured: false
    },
    {
      id: 6,
      title: "Full-Featured E-commerce Website",
      description: "A comprehensive digital storefront supporting JWT-secured accounts, shopping carts, wishlists, dynamic discount coupons, payment gateways, and real-time order tracking.",
      features: [
        "Customer Authentication",
        "Wishlist, shopping cart & coupon code system",
        "Secure Payment Gateway Integration",
        "Real-time order tracking & reviews",
        "Admin dashboard for product/order management"
      ],
      tags: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
      liveLink: "",
      githubLink: "",
      imageColor: "linear-gradient(135deg, #d97706 0%, #fbbf24 100%)", // Amber/yellow gradient
      featured: false
    }
  ],
  experience: [
    {
      id: 1,
      role: "Freelance Full Stack Developer",
      company: "Self-Employed (Remote)",
      period: "Jan 2024 - Present",
      description: [
        "Architected and deployed responsive client websites, handling full-stack integration and project delivery.",
        "Developed scalable backend systems and integrated secure database setups tailored to client needs."
      ]
    },
    {
      id: 2,
      role: "Web Development Trainer",
      company: "Technical Institute / Freelance",
      period: "Aug 2023 - Dec 2023",
      description: [
        "Conducted one-on-one technical sessions in HTML, CSS, JavaScript, and Python.",
        "Guided students through real-time project development, ensuring hands-on coding experience."
      ]
    }
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Chandigarh University",
      status: "Pursuing"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Chandigarh University",
      status: "Graduated 2025"
    }
  ]
};
