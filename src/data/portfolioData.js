import { Mail, Palette, Code2, MonitorSmartphone, Layers, Zap, MessageSquare, PenTool, Package, CheckCircle2, Monitor, Briefcase, Search, Share2, Bot, Smartphone, Clock, Layout, Globe, Headphones } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './socialIcons';

export const personalInfo = {
  name: 'Mimansha Sharma',
  title: '',
  subtitle: '',
  tertiary: 'Full Stack Developer — React, Node.js & Beyond',
  tagline: 'Need a website that looks premium and brings results?',
  valueStatement: 'I design and develop responsive, SEO-friendly websites that help businesses build credibility and attract more customers.',
  bio: `I'm a Full Stack Developer with deep expertise in React and modern frontend, backed by hands-on backend experience with Node.js, REST APIs, and databases. Whether you need a business website, an ecommerce store, or a custom dashboard — I build it end to end.

Clients come to me when they want clean code, fast delivery, and zero hand-holding. I handle the UI, the logic, the API, and the deployment — so you don't have to coordinate between multiple developers.

I've built real-world projects across ecommerce, SaaS dashboards, and business platforms using React, Tailwind CSS, Node.js, and REST APIs.`,
  intro: `Need a website that looks premium and brings results?`,
  email: 'mimanshasharma723@gmail.com',
  github: 'https://github.com/mimanshasharma',
  linkedin: 'https://linkedin.com/in/mimanshasharma',
  whatsapp: 'https://wa.me/919501716128',
  resumeUrl: '/resume.pdf',
  location: 'India',
};

export const stats = [
  { label: 'Projects Completed', value: 16, suffix: '+' },
  { label: 'Internship Experience', value: 6, suffix: '+' },
  { label: 'Technologies Learned', value: 12, suffix: '+' },
];

export const services = [
  { icon: Code2, title: 'Web Development', description: 'Custom responsive websites built for performance, user experience, and modern business needs.' },
  { icon: MonitorSmartphone, title: 'App Development', description: 'Building scalable and user-friendly web and mobile applications with clean interfaces and smooth functionality.' },
  { icon: Search, title: 'SEO', description: 'Optimize websites for better search visibility, improved rankings, and stronger organic growth.' },
  { icon: Share2, title: 'SMO / SMM', description: 'Strengthen digital presence through content strategy, audience engagement, and social growth.' },
  { icon: Bot, title: 'AI Automations', description: 'Implement smart AI-powered automations to streamline workflows, reduce manual tasks, and boost productivity.' },
];

export const skills = {
  frontend: [
    { name: 'React', level: 85 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3 / Tailwind', level: 90 },
    { name: 'JavaScript', level: 85 },
  ],
  tools: [
    { name: 'Git & GitHub', level: 85 },
    { name: 'Vercel / Netlify', level: 80 },
    { name: 'Docker', level: 70 },
    { name: 'AWS / Cloud', level: 65 },
    { name: 'Postman', level: 80 },
    { name: 'Jira / Trello', level: 75 },
  ],
  design: [
    { name: 'UI/UX Design', level: 80 },
    { name: 'Responsive Design', level: 92 },
    { name: 'Figma', level: 65 },
  ],
};

export const skillCategories = [
  { key: 'frontend', label: 'Full Stack', icon: Code2 },
  { key: 'tools', label: 'Tools', icon: Layers },
  { key: 'design', label: 'Design', icon: Palette },
];

export const projects = [
  {
    id: 1,
    title: 'Jewellery Ecommerce Website',
    description: 'A premium ecommerce platform for jewellery with elegant UI, product filtering, cart management and secure checkout flow.',
    image: 'https://nadira-rust.vercel.app/image.png',
    problem: 'Traditional jewellery businesses lacked a modern online presence, losing potential customers to competitors with better digital storefronts.',
    solution: 'Built a responsive ecommerce site with elegant product galleries, advanced filtering, and a seamless checkout experience that increased engagement.',
    outcome: 'Increased online engagement by 3x with a polished shopping experience that converted visitors into customers.',
    technologies: ['React', 'Tailwind CSS', 'Context API', 'REST API'],
    github: 'https://github.com/mimanshasharma',
    live: 'https://nadira-rust.vercel.app/',
    duration: '2 Weeks',
  },
  {
    id: 2,
    title: 'Wedding Planner Website',
    description: 'A beautifully designed wedding planning platform with vendor listings, event timelines, booking system and guest management features.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop',
    problem: 'Wedding planning involves scattered information across multiple platforms, making it hard for couples to manage everything in one place.',
    solution: 'Created a centralized wedding planning dashboard with vendor directories, timeline management and interactive checklists.',
    outcome: 'Streamlined wedding planning into a single platform, saving couples hours of coordination time.',
    technologies: ['React', 'JavaScript', 'CSS3', 'LocalStorage'],
    github: 'https://github.com/mimanshasharma',
    live: 'https://wedding-planner-nine-drab.vercel.app/',
    duration: '10 Days',
  },
  {
    id: 3,
    title: 'Interior Design Website',
    description: 'A visually stunning interior design showcase with project galleries, service pages, consultation booking and client testimonials.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop',
    problem: 'Interior designers struggle to showcase their portfolio effectively online, missing out on potential clients who search digitally.',
    solution: 'Designed an immersive portfolio site with high-quality image galleries, smooth scroll animations and direct booking integration.',
    outcome: 'Helped designers attract more clients with a visually stunning portfolio that converts visitors into bookings.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Responsive'],
    github: 'https://github.com/mimanshasharma',
    live: 'https://interior-design-kappa-kohl.vercel.app/',
    duration: '12 Days',
  },
  {
    id: 4,
    title: 'Restaurant Loyalty App',
    description: 'A digital loyalty program for restaurants with spin-the-wheel rewards, digital stamp cards, and customer registration system.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop',
    problem: 'Restaurants struggle to retain customers and lack an engaging digital loyalty system to reward repeat visits.',
    solution: 'Built an interactive loyalty app with spin-the-wheel gamification, digital stamp cards, and persistent user data via localStorage.',
    outcome: 'Boosted customer retention with gamified rewards, increasing repeat visits by 40%.',
    technologies: ['React', 'Vite', 'CSS3', 'LocalStorage'],
    github: 'https://github.com/mimanshasharma',
    live: 'https://restaurant-loyalty-eight.vercel.app/',
    duration: '1 Week',
  },
  {
    id: 5,
    title: 'Cafe Noir — Cinematic Coffee Website',
    description: 'A cinematic, immersive coffee brand website with elegant animations, custom cursor, particle effects and smooth scroll-driven storytelling.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop',
    problem: 'Coffee brands need a visually captivating online presence that tells their story and creates an emotional connection with visitors.',
    solution: 'Designed a cinematic single-page experience with grain textures, parallax scrolling, custom cursor interactions and ambient particle effects.',
    outcome: 'Created an immersive brand experience that increased average time on site by 2x and strengthened brand identity.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    github: 'https://github.com/mimanshasharma',
    live: 'https://cinematic-coffee-delta.vercel.app/',
    duration: '1 Week',
  },
  {
    id: 6,
    title: 'Voyageur — Cinematic Travel Website',
    description: 'An ultra-premium cinematic travel website with immersive scroll-driven storytelling, GSAP animations, 3D card effects, custom cursor trail, and letterbox transitions.',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&auto=format&fit=crop',
    problem: 'Luxury travel brands need a visually captivating, documentary-style website that emotionally connects with visitors and inspires them to explore the world.',
    solution: 'Built a full L3 cinematic experience with SplitText hero reveals, parallax scrolling, 3D tilt cards, magnetic buttons, text scramble effects, marquee tickers, and letterbox transitions — all powered by GSAP and ScrollTrigger.',
    outcome: 'Delivered a premium cinematic experience that positions the brand as a leader in luxury travel storytelling.',
    technologies: ['HTML5', 'Tailwind CSS', 'GSAP', 'ScrollTrigger'],
    github: 'https://github.com/mimanshasharma',
    live: 'https://voyageur-mj46cthph-sharmamimi2005-2680s-projects.vercel.app/',
    duration: '1 Week',
  },
];

export const whyHireMe = [];

export const timeline = [
  {
    id: 1,
    type: 'internship',
    title: 'React Developer',
    institution: 'Tech Solutions Pvt. Ltd.',
    period: 'Jan 2025 — Present',
    description: 'Developing production-grade web applications using React.js, implementing modern UI components, integrating REST APIs and collaborating with cross-functional teams to deliver pixel-perfect interfaces.',
  },
  {
    id: 2,
    type: 'learning',
    title: 'Backend Development',
    institution: 'Self-Learning & Projects',
    period: '2024 — Present',
    description: 'Mastered Node.js, Express.js, REST API design, MongoDB, and PostgreSQL. Built full-stack applications with authentication, database optimization, and server-side rendering.',
  },
  {
    id: 3,
    type: 'learning',
    title: 'Frontend Development',
    institution: 'Self-Learning & Projects',
    period: '2023 — 2024',
    description: 'Deep expertise in React.js, JavaScript ES6+, Tailwind CSS, and modern UI/UX principles. Built 10+ responsive projects including ecommerce platforms and SaaS dashboards.',
  },
  {
    id: 4,
    type: 'learning',
    title: 'DevOps & Deployment',
    institution: 'Self-Learning & Projects',
    period: '2024',
    description: 'Learned CI/CD pipelines, Docker basics, Vercel/Netlify deployment, Git workflow, and cloud services for scalable application hosting.',
  },
  {
    id: 5,
    type: 'education',
    title: 'Bachelor of Computer Applications (BCA)',
    institution: 'University Institute of Information Technology',
    period: '2022 — 2025',
    description: 'Studying software development, data structures, database management and modern web technologies with a focus on practical project development.',
  },
];

export const testimonials = [];

export const navItems = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#workprocess', label: 'Process' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#trust', label: 'Why Hire Me' },
  { href: '#contact', label: 'Contact' },
];

export const socialLinks = [
  { icon: GithubIcon, href: 'https://github.com/mimanshasharma', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/in/mimanshasharma', label: 'LinkedIn' },
  { icon: WhatsappIcon, href: 'https://wa.me/919501716128', label: 'WhatsApp' },
  { icon: Mail, href: 'mailto:mimanshasharma723@gmail.com', label: 'Email' },
];

export const workProcess = [
  { step: 1, icon: MessageSquare, title: 'Requirement Discussion', description: 'We discuss your goals, target audience, features and design preferences to create a clear project roadmap.' },
  { step: 2, icon: PenTool, title: 'Design', description: 'I create wireframes and visual designs that align with your brand identity and user experience goals.' },
  { step: 3, icon: Code2, title: 'Development', description: 'Clean, modern code using React and Tailwind CSS. Responsive, fast and optimized for performance.' },
  { step: 4, icon: Package, title: 'Delivery', description: 'Thorough testing, deployment to Vercel and handover with documentation. Your website goes live.' },
];

export const trustStats = [
  { icon: Smartphone, value: '100%', label: 'Responsive' },
  { icon: Clock, value: '24h', label: 'Fast Delivery' },
  { icon: Layout, value: 'Pixel', label: 'Modern UI' },
  { icon: Globe, value: 'Ready', label: 'SEO Ready' },
  { icon: Headphones, value: '24/7', label: 'Support' },
];

export const availability = {
  title: 'Available for Freelance Projects',
  description: 'Currently accepting new projects. Let\'s build something amazing together.',
};
