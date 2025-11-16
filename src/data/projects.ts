export type Project = {
    id: number;
    title: string;
    description: string;
    tags: string[];
    category: "Front-end" | "Full Stack";
    image?: string;
    repo?: string;
};

export const projects: Project[] = [
    {
        id: 1,
        title: "Aurena - Fashion E-Commerce Web Application",
        description:
            "Domain : React + TypeScript. Developed a complete fashion e-commerce web application using React hooks & Context API. Integrated Node.js / Express REST APIs with Axios, secured the app using JWT authentication-based login / signup. Implemented features like product listing and a dynamic cart system with real-time updates. Designed a fully responsive UI using Tailwind CSS, ensuring smooth UX across devices",
        tags: [
            "React", "TypeScript", "Tailwind", "MUI", "Axios", "JWT", "Node.js", "Express", "REST API", "MongoDB"],
        category: "Full Stack",
        image: "/e-commerce.png",
        repo: "https://github.com/Madhu-metha/Fashion-E-commerce.git",
    },
    {
        id: 2,
        title: "Backend CRUD API Development with Node.js, Express.js and MongoDB",
        description:
            "Domain : Node.js + React. Developed a RESTful API using Node.js, Express.js and TypeScript to perform CRUD operations.Integrated MongoDB Atlas for efficient data storage, retrieval and tested APIs using Postman. Created modular and structured API endpoints with proper error handling and validation.",
        tags: ["Node.js", "Express.js", "React.js", "TypeScript", "MongoDB", "REST API", "Postman"],
        category: "Full Stack",
        image: "/crud-api.png",
        repo: "https://github.com/Madhu-metha/node_js-API.git",
    },
    {
        id: 3,
        title: "Smart AI Chat Automation Platform (Google Gemini + n8n + React)",
        description:
            "Domain : n8n+ React. Developed an AI-driven workflow system using n8n to process user queries through automated nodes, webhooks and integration with Google Gemini API. Designed and connected RESTful webhook endpoints in n8n for real-time request handling, AI response generation and seamless communication with the React front-end. Integrated the workflow with a React-based chat interface, enabling real-time messaging and AI-driven interactions.",
        tags: ["n8n", "React.js", "TypeScript", "Google Gemini API", "Webhooks", "REST API"],
        category: "Front-end",
        image: "/ai-model.png",
        repo: "https://github.com/Madhu-metha/N8N_AI_Model.git",
    },
];
