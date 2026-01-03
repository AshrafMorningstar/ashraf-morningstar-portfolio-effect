/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

﻿/**
 * @author Ashraf Morningstar
 * @github https://github.com/AshrafMorningstar
 * @project Premium Personal Portfolio
 * @description Architecting the Digital Future with Quantum Precision.
 */
// Portfolio constants - All portfolio data in one place

export interface Author {
  _id: string;
  name: string;
  initials: string;
  avatar?: {
    asset?: {
      url?: string;
    };
  };
  description?: any[];
  summary?: any[];
  location?: string;
  skills?: string[];
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
    email?: string;
  };
}

export interface WorkExperience {
  _id: string;
  company: string;
  title: string;
  logo?: {
    asset?: {
      url?: string;
    };
  };
  location?: string;
  startDate: string;
  endDate?: string;
  description?: any[];
  url?: string;
}

export interface Education {
  _id: string;
  school: string;
  degree: string;
  logo?: {
    asset?: {
      url?: string;
    };
  };
  startDate: string;
  endDate: string;
  url?: string;
}

export interface Project {
  _id: string;
  title: string;
  description: any[];
  startDate?: string;
  endDate?: string;
  technologies?: string[];
  image?: {
    asset?: {
      url?: string;
    };
  };
  video?: string;
  links?: {
    title: string | null;
    url: string | null;
    type: string | null;
  }[];
}

// Portfolio data
export const AUTHOR: Author = {
  _id: "ashraf-morningstar",
  name: "Ashraf Morningstar",
  initials: "AM",
  avatar: {
    asset: {
      url: "https://avatars.githubusercontent.com/u/1234567?v=4", // Use a generic GitHub avatar or placeholder if specific one isn't available, user didn't provide one so I'll use a placeholder or remove it. Let's use a high-quality placeholder or the github one if I can find it. I'll stick to a placeholder for now.
    },
  },
  description: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "Architecting the Digital Future with Quantum Precision.",
        },
      ],
    },
  ],
  summary: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "Visionary Full-Stack Engineer and Digital Architect. Specializing in high-performance web ecosystems, AI integration, and immersive UI/UX experiences. Building the unbuildable.",
        },
      ],
    },
  ],
  location: "Global / Digital Realm",
  skills: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "TailwindCSS",
    "Three.js",
    "WebGL",
    "Node.js",
    "Rust",
    "System Architecture",
    "AI Integration",
    "Quantum UI",
    "DevOps",
  ],
  social: {
    github: "https://github.com/AshrafMorningstar",
    email: "contact@ashrafmorningstar.in", // Placeholder based on folder structure
  },
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    _id: "work-1",
    company: "SelectSkillSet",
    title: "Frontend Developer",
    location: "Remote",
    startDate: "2024",
    endDate: "Present",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Developing modern, responsive frontend applications with focus on user experience and performance. Working with cutting-edge technologies to build scalable web solutions.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Key responsibilities include building responsive and interactive user interfaces using React and Next.js, implementing modern UI/UX designs with TailwindCSS and Framer Motion, optimizing application performance and ensuring cross-browser compatibility, and collaborating with design and backend teams to deliver high-quality features.",
          },
        ],
      },
    ],
  },
  {
    _id: "work-2",
    company: "Tekisky",
    title: "Full Stack Developer",
    location: "Remote",
    startDate: "2023",
    endDate: "2024",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Developed and maintained full-stack web applications, working on both frontend and backend systems. Collaborated with cross-functional teams to deliver robust software solutions.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Key responsibilities included developing and maintaining full-stack web applications using React, Node.js, and MongoDB, implementing RESTful APIs and integrating third-party services, building responsive user interfaces and optimizing application performance, and working on database design and backend architecture.",
          },
        ],
      },
    ],
  },
];

export const EDUCATION: Education[] = [
  // Add your education details here if needed
];

// Only 4 projects with images from portfolio-8
export const PROJECTS: Project[] = [
  {
    _id: "project-1",
    title: "AI-Powered Code Review Assistant",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "An intelligent code review platform that uses machine learning to analyze pull requests, detect bugs, suggest optimizations, and enforce coding standards. Features real-time collaboration, automated testing integration, and comprehensive security scanning.",
          },
        ],
      },
    ],
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL", "Docker"],
    image: {
      asset: {
        url: "/projects/project-1.webp",
      },
    },
    links: [
      {
        title: "Source Code",
        url: "#",
        type: "code",
      },
      {
        title: "Live Demo",
        url: "#",
        type: "demo",
      },
    ],
  },
  {
    _id: "project-2",
    title: "Real-time Collaborative Whiteboard",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "A next-generation collaborative whiteboard platform with infinite canvas, real-time synchronization, and advanced drawing tools. Supports video conferencing, screen sharing, and export to multiple formats. Built for remote teams and educators.",
          },
        ],
      },
    ],
    technologies: ["TypeScript", "WebRTC", "Socket.io", "Canvas API", "Node.js", "Redis"],
    image: {
      asset: {
        url: "/projects/project-2.webp",
      },
    },
    links: [
      {
        title: "Source Code",
        url: "#",
        type: "code",
      },
      {
        title: "Live Demo",
        url: "#",
        type: "demo",
      },
    ],
  },
  {
    _id: "project-3",
    title: "Blockchain Voting System",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "A secure, transparent, and decentralized voting platform built on Ethereum. Features smart contract-based voting, anonymous ballots, real-time result tracking, and immutable audit trails. Ensures election integrity through cryptographic verification.",
          },
        ],
      },
    ],
    technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS", "MetaMask"],
    image: {
      asset: {
        url: "/projects/project-3.webp",
      },
    },
    links: [
      {
        title: "Source Code",
        url: "#",
        type: "code",
      },
      {
        title: "Live Demo",
        url: "#",
        type: "demo",
      },
    ],
  },
  {
    _id: "project-4",
    title: "Cloud Infrastructure Dashboard",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "A comprehensive cloud management platform for monitoring, managing, and optimizing multi-cloud infrastructure. Features real-time metrics, cost analysis, automated scaling, and security compliance monitoring across AWS, Azure, and GCP.",
          },
        ],
      },
    ],
    technologies: ["Go", "Kubernetes", "Grafana", "Prometheus", "Terraform", "React"],
    image: {
      asset: {
        url: "/projects/project-4.webp",
      },
    },
    links: [
      {
        title: "Source Code",
        url: "#",
        type: "code",
      },
      {
        title: "Live Demo",
        url: "#",
        type: "demo",
      },
    ],
  },
];


