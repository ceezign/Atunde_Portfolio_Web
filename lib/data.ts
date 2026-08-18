import type {
  SkillCategory,
  ExperienceEntry,
  EducationEntry,
  Project,
  Service,
  Certification,
  Stat,
  BlogPost,
  Testimonial,
} from "./types";

export const person = {
  name: "Atunde Toheeb Ayomide",
  firstName: "Toheeb",
  headline:
    "Full-Stack Software Developer | IT Support Specialist | Python & JavaScript Developer | Cybersecurity Learner",
  location: "Lagos, Nigeria",
  locationNote: "Based in Lagos · open to remote work worldwide",
};

export const roles = [
  "Full-Stack Software Developer",
  "IT Support Specialist",
  "Python Developer",
  "Cybersecurity Learner",
  "Technical Problem Solver",
];

export const socials = {
  github: "https://github.com/ceezign",
  linkedin: "https://www.linkedin.com/in/atunde-toheeb-551826313",
  email: "atundetoheeb1@gmail.com",
  phonePrimary: "08075507490",
  phoneSecondary: "08034215374",
  whatsapp: "https://wa.me/2348075507490",
};

export const skillCategories: SkillCategory[] = [
  {
    icon: "Code2",
    title: "Programming Languages",
    items: [
      { name: "Python", pct: 90 },
      { name: "JavaScript", pct: 85 },
      { name: "PHP", pct: 80 },
      { name: "SQL", pct: 82 },
      { name: "HTML5", pct: 92 },
      { name: "CSS3", pct: 88 },
    ],
  },
  {
    icon: "MonitorSmartphone",
    title: "Frontend",
    items: [
      { name: "React.js", pct: 80 },
      { name: "React Native", pct: 65 },
      { name: "Next.js", pct: 70 },
      { name: "WordPress", pct: 78 },
      { name: "Responsive Design", pct: 85 },
    ],
  },
  {
    icon: "Server",
    title: "Backend",
    items: [
      { name: "Django", pct: 78 },
      { name: "Flask", pct: 80 },
      { name: "Laravel", pct: 78 },
      { name: "Node.js", pct: 72 },
      { name: "REST APIs", pct: 82 },
      { name: "OAuth", pct: 70 },
    ],
  },
  {
    icon: "Wrench",
    title: "Tools & Automation",
    items: [
      { name: "Git & GitHub", pct: 88 },
      { name: "Selenium (Automation)", pct: 75 },
      { name: "Pandas & NumPy", pct: 78 },
      { name: "Hardware Diagnostics", pct: 80 },
    ],
  },
  {
    icon: "Headset",
    title: "IT Support",
    items: [
      { name: "First-Line Hardware/Software Support", pct: 88 },
      { name: "Network Troubleshooting", pct: 80 },
      { name: "System & Equipment Setup", pct: 85 },
      { name: "User Access & Email Support", pct: 82 },
    ],
  },
  {
    icon: "ShieldHalf",
    title: "Cybersecurity (In Progress)",
    items: [
      { name: "Security Fundamentals", pct: 60 },
      { name: "Secure Coding Practices", pct: 65 },
      { name: "Currently Deepening: Cybersecurity", pct: 45 },
    ],
  },
  {
    icon: "Blocks",
    title: "Emerging Tech",
    items: [
      { name: "Blockchain (Motoko / ICP)", pct: 60 },
      { name: "AI / ML Fundamentals", pct: 55 },
    ],
  },
];

export const experience: ExperienceEntry[] = [
  {
    company: "Sunflag Nig Ltd",
    role: "IT Support Supervisor",
    duration: "Nov 2025 — Present",
    points: [
      "Providing first-line IT support for hardware, software, and network issues across the organization.",
      "Installing, configuring, and maintaining computers and office IT equipment.",
      "Assisting users with system access, email setup, and day-to-day troubleshooting.",
    ],
    stack: ["Windows", "Networking", "Hardware", "IT Support"],
  },
  {
    company: "Fiverr / Upwork",
    role: "Freelance Software Developer & Tech Consultant",
    duration: "Jan 2022 — 2025",
    points: [
      "Built, optimized, and maintained web applications, automation tools, and system integrations for clients.",
      "Delivered full-stack and backend development solutions using Python, JavaScript, PHP, and React.",
      "Provided remote IT support, troubleshooting software, system, and connectivity issues for clients.",
      "Worked directly with clients to gather requirements and deliver reliable technical solutions — maintaining 5-star ratings for performance and client satisfaction.",
    ],
    stack: ["Python", "JavaScript", "PHP", "React"],
  },
  {
    company: "De Fatus Pharmaceuticals",
    role: "Python Data Analyst",
    duration: "Jan 2024 — Feb 2025",
    points: [
      "Analyzed sales, inventory, and customer data to identify trends and support decision-making.",
      "Cleaned, processed, and transformed raw data into actionable insights using Python, Pandas, and NumPy.",
      "Collaborated with sales and marketing teams to optimize campaign strategies through data-driven insights.",
    ],
    stack: ["Python", "Pandas", "NumPy", "SQL"],
  },
];

export const education: EducationEntry[] = [
  {
    institution: "Harvarde College of Business and Management Studies",
    degree: "Accounting",
    duration: "Nov 2018 — Dec 2022",
    points: [
      "Abeokuta, Ogun State, Nigeria.",
      "Built a foundation in accounting and business operations that now informs how I approach business software — before I transitioned into tech as a self-taught developer around 4–5 years ago.",
    ],
  },
];

export const projects: Project[] = [
  {
    category: "Full Stack",
    title: "FitTrack App",
    description:
      "A MERN-stack fitness tracker for logging workouts, setting goals, and visualizing training trends over time.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    features: ["Workout logging", "Goal setting", "Progress trend charts"],
    challenge: "Structuring workout data so trends stay meaningful across very different training styles.",
    lesson: "A flexible schema up front saved a full data-model rewrite later.",
    github: "https://github.com/ceezign/Fit-Track-App",
    demo: "#",
  },
  {
    category: "Full Stack",
    title: "Jiggy Marketplace",
    description: "A full-stack PHP Laravel marketplace project supporting listings and transactions between users.",
    stack: ["PHP", "Laravel", "MySQL"],
    features: ["Product listings", "User accounts", "Transaction flow"],
    challenge: "Keeping the Laravel monolith organized as marketplace features grew.",
    lesson: "Clear service-layer boundaries make a Laravel app much easier to extend later.",
    github: "https://github.com/ceezign/Jiggy-Marketplace",
    demo: "#",
  },
  {
    category: "Blockchain",
    title: "JGY NFT Marketplace",
    description: "A token smart contract written in Motoko for the Internet Computer (ICP), powering an NFT marketplace.",
    stack: ["Motoko", "Internet Computer", "JavaScript"],
    features: ["Token smart contract", "On-chain marketplace logic"],
    challenge: "Learning Motoko's actor-based model, a real shift from typical backend languages.",
    lesson: "Building on ICP gave me a much deeper appreciation for how different Web3 infrastructure really is.",
    github: "https://github.com/ceezign/JGY-NFT-Markeplace",
    demo: "#",
  },
  {
    category: "Full Stack",
    title: "Business-to-Business (B2B) Sales Platform",
    description: "A professional Django-based B2B sales channel for product browsing and quote requests.",
    stack: ["Django", "Python", "HTML/CSS"],
    features: ["Product catalog", "Quote request flow", "Admin management"],
    challenge: "Designing a quote-request workflow that felt as simple as adding something to a cart.",
    lesson: "B2B buyers want speed and clarity more than flashy UI — simplicity won every time.",
    github: "https://github.com/ceezign/B2B-Sales-Platform",
    demo: "#",
  },
  {
    category: "Automation",
    title: "IT Support & Visitor Registration System",
    description: "A modern, mobile-friendly Python-Flask visitor registration system built for office front-desk use.",
    stack: ["Python", "Flask", "SQLite"],
    features: ["Mobile-friendly check-in", "Visitor logging", "Admin dashboard"],
    challenge: "Making the interface simple enough for non-technical front-desk staff to use without training.",
    lesson: "The best internal tools are the ones people forget they're even using a 'system'.",
    github: "https://github.com/ceezign?tab=repositories",
    demo: "#",
  },
  {
    category: "Automation",
    title: "Weather Forecast App",
    description: "An API-driven weather application built in Python, pulling and displaying live forecast data.",
    stack: ["Python", "REST API"],
    features: ["Live forecast lookup", "Clean data formatting"],
    challenge: "Handling inconsistent responses from the weather API gracefully.",
    lesson: "Defensive parsing around third-party APIs pays off the first time they change their response format.",
    github: "https://github.com/ceezign?tab=repositories",
    demo: "#",
  },
  {
    category: "Automation",
    title: "Selenium Browser Automation Script",
    description: "A Selenium-powered script that automates repetitive browser tasks and data entry workflows.",
    stack: ["Python", "Selenium"],
    features: ["Automated form filling", "Repetitive task automation"],
    challenge: "Keeping the automation resilient to small changes in page structure.",
    lesson: "Automation scripts need the same error-handling discipline as production code.",
    github: "https://github.com/ceezign?tab=repositories",
    demo: "#",
  },
  {
    category: "Games",
    title: "Jiggy Survival Quiz Game",
    description: "An interactive Python quiz game built around survival-style mechanics and scoring.",
    stack: ["Python"],
    features: ["Interactive quiz logic", "Scoring system"],
    challenge: "Balancing difficulty progression so the game stays fun rather than frustrating.",
    lesson: "Small games are a genuinely great way to practice control flow and state management.",
    github: "https://github.com/ceezign/Jiggy-Survival-Quiz-Game-python-",
    demo: "#",
  },
  {
    category: "Practice",
    title: "Python Daily Challenge",
    description: "An ongoing collection of coding practice and problem-solving repositories in Python.",
    stack: ["Python"],
    features: ["Daily problem solving", "Algorithm practice"],
    challenge: "Staying consistent with practice alongside client and job work.",
    lesson: "Small daily reps compound — this repo is basically a log of that.",
    github: "https://github.com/ceezign/python-daily-challenge",
    demo: "#",
  },
];

export const services: Service[] = [
  { icon: "Code2", title: "Full Stack Web Development", description: "End-to-end web applications, from database design to a polished frontend." },
  { icon: "Server", title: "Backend & API Development", description: "Reliable backend services and integrations using Python, PHP, and Node.js." },
  { icon: "Database", title: "Database Design & Management", description: "Schema design, data cleaning, and reporting on top of SQL databases." },
  { icon: "Headset", title: "IT Support & Maintenance", description: "Hardware, software, and network troubleshooting for teams and offices." },
  { icon: "ShieldHalf", title: "Cybersecurity Assistance", description: "Security-conscious development practices, with growing specialist depth." },
  { icon: "Workflow", title: "Workflow Automation", description: "Selenium and Python scripts that remove repetitive manual work." },
  { icon: "Briefcase", title: "Business Software Development", description: "Custom tools for sales, inventory, and operations — informed by an accounting background." },
  { icon: "MessagesSquare", title: "Technical Consulting", description: "Freelance consulting on architecture, tooling, and technical problem solving." },
];

export const certifications: Certification[] = [
  { icon: "Code2", name: "The Complete Full-Stack Web Development", issuer: "Udemy" },
  { icon: "Terminal", name: "Python Mega Course", issuer: "Udemy" },
  { icon: "ShieldHalf", name: "Cybersecurity Course", issuer: "TSA Academy" },
  { icon: "Headset", name: "Diploma in Information Technology Support", issuer: "Alison Courses" },
  { icon: "Globe", name: "Information Technology Fundamentals", issuer: "IBM SkillsBuild" },
  { icon: "FileCode2", name: "Diploma in Application Development Using PHP and MySQL", issuer: "Alison Courses" },
  { icon: "Database", name: "Advanced Diploma in Database Systems", issuer: "Alison Courses" },
  { icon: "Briefcase", name: "Diploma in Product Management", issuer: "Alison Courses" },
  { icon: "Globe", name: "WordPress Fundamentals — Content Management Systems", issuer: "Alison Courses" },
];

export const stats: Stat[] = [
  { value: 9, label: "Projects Completed", suffix: "+" },
  { value: 20, label: "Technologies Used", suffix: "+" },
  { value: 71, label: "GitHub Repositories", suffix: "" },
  { value: 4, label: "Years in Tech", suffix: "+" },
  { value: 9, label: "Certifications & Diplomas", suffix: "" },
  { value: 5, label: "Freelance Rating", suffix: ".0 ★" },
];

// No blog posts supplied yet — placeholders, ready to swap for real posts.
export const blogPosts: BlogPost[] = [
  {
    category: "Career",
    title: "Why I traded accounting for code",
    excerpt: "How a hobby that started 4–5 years ago turned into a full-stack career.",
    date: "Coming soon",
    readTime: "— min read",
  },
  {
    category: "Cybersecurity",
    title: "What I'm learning as I move into security",
    excerpt: "Notes from the early stages of a cybersecurity learning path.",
    date: "Coming soon",
    readTime: "— min read",
  },
  {
    category: "Python",
    title: "Lessons from a year of daily Python practice",
    excerpt: "What consistent, small practice reps actually change.",
    date: "Coming soon",
    readTime: "— min read",
  },
  {
    category: "IT Support",
    title: "What IT support teaches you about writing better software",
    excerpt: "Supporting real users first changes how you build for them later.",
    date: "Coming soon",
    readTime: "— min read",
  },
];

// No testimonials supplied yet — placeholders, ready to swap for real quotes
// (e.g. pulled from your Fiverr/Upwork reviews).
export const testimonials: Testimonial[] = [
  {
    quote: "Add a real client quote here — your Fiverr/Upwork 5-star reviews are a great source.",
    name: "Client name",
    role: "Fiverr / Upwork client",
  },
  {
    quote: "Add a second testimonial here, ideally from the IT Support or freelance side of your work.",
    name: "Client name",
    role: "Client / colleague",
  },
];

// Verified from your public GitHub profile (github.com/ceezign) at time of writing.
// Follower count wasn't retrievable from this environment — update the placeholder below
// once you have the exact number, or wire this section to the live GitHub API.
export const githubStats = {
  publicRepos: 71,
  followers: null as number | null, // placeholder — GitHub API was rate-limited when checked
  pinnedRepos: [
    { name: "Fit-Track-App", language: "JavaScript" },
    { name: "Jiggy-Marketplace", language: "PHP" },
    { name: "JGY-NFT-Markeplace", language: "JavaScript" },
    { name: "B2B-Sales-Platform", language: "HTML" },
    { name: "Jiggy-Survival-Quiz-Game-python-", language: "Python" },
    { name: "python-daily-challenge", language: "Python" },
  ],
  languages: [
    { name: "Python", pct: 35, color: "var(--accent)" },
    { name: "JavaScript", pct: 25, color: "var(--amber)" },
    { name: "PHP", pct: 20, color: "#8B7CD8" },
    { name: "HTML/CSS", pct: 15, color: "var(--ok)" },
    { name: "Other", pct: 5, color: "var(--text-faint)" },
  ],
};
