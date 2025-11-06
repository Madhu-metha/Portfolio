export type Project = {
    id: number
    title: string
    description: string
    tags: string[]
    category: 'Web' | 'API' | 'Full Stack'
    image?: string
    live?: string
    repo?: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'CRUD Application',
        description:
            'Complete CRUD app with React Hooks, TypeScript, routing, and REST API integration; styled with Tailwind & MUI and deployed on Vercel.',
        tags: ['React', 'TypeScript', 'Tailwind', 'MUI', 'Axios'],
        category: 'Web',
        image: '/assets/project-crud.jpg',
        repo: 'https://github.com/Madhu-metha/crud',
        live: '',
    },
    {
        id: 2,
        title: 'Backend CRUD API',
        description:
            'Modular REST API with Node.js, Express.js, TypeScript & MongoDB Atlas, featuring validation, error handling, and Postman-tested endpoints.',
        tags: ['Node.js', 'Express', 'TypeScript', 'MongoDB'],
        category: 'API',
        image: '/assets/project-api.jpg',
        repo: 'https://github.com/Madhu-metha/node_js-API',
        live: '',
    },
]
