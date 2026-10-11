export const portfolioData = {
    personal: {
        name: "Abdullah Butt",
        title: "Software Engineer",
        tagline: "Building practical digital experiences with modern technology.",
        description:
            "Aspiring Software Engineer with hands-on experience in Flutter, Next.js, SQL, C++, machine learning, and Supabase. I enjoy building practical, user-friendly applications and continuously improving my skills through real-world projects and teamwork.",
        email: "abdullahbuttw234@gmail.com",
    },

    skills: [
        { name: "Next.js", level: 70, category: "Web Development" },
        { name: "Flutter", level: 60, category: "Mobile Development" },
        { name: "Supabase", level: 60, category: "Backend" },
        { name: "PostgreSQL", level: 60, category: "Database" },
        { name: "Dart", level: 60, category: "Programming" },
        { name: "TypeScript", level: 60, category: "Programming" },
        { name: "React", level: 55, category: "Frontend" },
        { name: "AI Applications", level: 50, category: "Artificial Intelligence" },
        { name: "Python", level: 40, category: "Programming" },
        { name: "Cloud Deployment", level: 30, category: "Deployment" },
    ],

    projects: [
        {
            id: 1,

            title: "Life Care Lab Management System",

            description:
                "A desktop-based solution designed to automate laboratory operations, including patient registration, sample collection, test management, result entry, and professional report generation.",

            technologies: [
                "Next.js",
                "PostgreSQL",
            ],

            type: "Desktop Application",

            liveUrl: "",

            downloadUrl: "",

            downloadFile:
                "Life Care Lab Management System Setup 0.1.0.exe",

            githubUrl: "",

            image: "",
        },

        {
            id: 2,

            title: "User Management Chatbot",

            description:
                "A user management chatbot that allows authorized admins to manage user records through simple natural-language commands. It supports adding, updating, searching, listing, and deleting users while securely storing data in Supabase.",

            technologies: [
                "Next.js",
                "Supabase",
            ],

            type: "AI Application",

            liveUrl:
                "https://user-management-chatbot.vercel.app",

            downloadUrl: "",

            downloadFile: "",

            githubUrl: "",

            image: "",
        },

        {
            id: 3,

            title: "LifeSaver Alert",

            description:
                "A smart emergency app that automatically detects accidents using smartphone sensors such as the accelerometer and gyroscope. It monitors movement to detect sudden impacts, falls, or inactivity, with a 30-second timer that allows users to cancel false alerts.",

            technologies: [
                "Flutter",
                "Dart",
                "Firebase",
            ],

            type: "Mobile Application",

            liveUrl: "",

            downloadUrl: "",

            downloadFile: "",

            githubUrl: "",

            image: "",
        },

        {
            id: 4,

            title: "Customer Churn Prediction AI Model",

            description:
                "A machine-learning model that analyzes customer behavior to predict which customers are likely to stop using a company's services. It helps identify at-risk customers early and supports customer-retention strategies.",

            technologies: [
                "Pandas",
                "PyTorch",
                "Kaggle",
            ],

            type: "Machine Learning",

            liveUrl: "",

            downloadUrl: "",

            downloadFile: "",

            githubUrl: "",

            image: "",
        },
        {
            id: 5,
            title: "E-commerce Website",
            type: "Web Application",
            description:
                "A modern e-commerce website for beauty products, designed to provide a smooth and responsive shopping experience with product browsing and online purchasing.",
            technologies: ["Next.js", "PostgreSQL"],
            liveUrl: "https://asglomy.com",
        },
    ],

    education: [
        {
            institution: "University of Management and Technology",
            degree: "BS Software Engineering",
            start: "October 2022",
            end: "August 2026",
            status: "In Progress",
        },
        {
            institution: "Punjab College Daska",
            degree: "FSc Pre-Engineering",
            start: "April 2020",
            end: "March 2022",
            status: "Completed",
        },
    ],

    experience: [
        {
            organization: "Pixsy Studio",
            role: "Junior Developer",
            start: "February 2025",
            end: "August 2025",
            description: "",
        },
    ],

    services: [
        {
            title: "Web Applications",
            description:
                "Modern and responsive web applications using technologies such as React and Next.js.",
        },
        {
            title: "Flutter Applications",
            description:
                "Cross-platform mobile application development using Flutter and Dart.",
        },
        {
            title: "AI Applications",
            description:
                "Practical applications that integrate artificial intelligence and machine-learning concepts.",
        },
        {
            title: "Database Integration",
            description:
                "Application data and backend integration using PostgreSQL and Supabase.",
        },
    ],

    learning: [
        "WebGL",
        "Three.js",
        "Advanced CSS",
        "AI Models",
        "Machine Learning",
    ],
}