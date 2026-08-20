
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
  firstName: "Ayomide",
  headline:
    "Full-Stack Developer | IT Support & Systems | Cybersecurity",
  location: "Lagos, Nigeria",
  locationNote: "Based in Lagos · open to remote work worldwide",
};

export const roles = [
  "Full-Stack Software Developer",
  "IT Support Specialist",
  "Python Developer",
  "Cybersecurity Engineer",
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

// export const skillCategories: SkillCategory[] = [
//   {
//     icon: "Code2",
//     title: "Programming Languages",
//     items: [
//       { name: "Python", pct: 85 },
//       { name: "JavaScript", pct: 80 },
//       { name: "PHP", pct: 75 },
//       { name: "SQL", pct: 78 },
//       { name: "HTML5", pct: 92 },
//       { name: "CSS3", pct: 88 },
//     ],
//   },
//   {
//     icon: "MonitorSmartphone",
//     title: "Frontend",
//     items: [
//       { name: "React.js", pct: 80 },
//       { name: "React Native", pct: 65 },
//       { name: "Next.js", pct: 70 },
//       { name: "WordPress", pct: 78 },
//       { name: "Responsive Design", pct: 85 },
//     ],
//   },
//   {
//     icon: "Server",
//     title: "Backend",
//     items: [
//       { name: "Django", pct: 78 },
//       { name: "Flask", pct: 80 },
//       { name: "Laravel", pct: 78 },
//       { name: "Node.js", pct: 86 },
//       { name: "REST APIs", pct: 82 },
//       { name: "OAuth", pct: 70 },
//     ],
//   },
//   {
//     icon: "Wrench",
//     title: "Tools & Automation",
//     items: [
//       { name: "Git & GitHub", pct: 88 },
//       { name: "Selenium (Automation)", pct: 75 },
//       { name: "Pandas & NumPy", pct: 78 },
//       { name: "Hardware Diagnostics", pct: 80 },
//     ],
//   },
//   {
//     icon: "Headset",
//     title: "IT Support",
//     items: [
//       { name: "First-Line Hardware/Software Support", pct: 88 },
//       { name: "Network Troubleshooting", pct: 80 },
//       { name: "System & Equipment Setup", pct: 85 },
//       { name: "User Access & Email Support", pct: 82 },
//       { name: "Microsoft Services & Active Directory", pct: 82 }
//     ],
//   },
//   {
//     icon: "ShieldHalf",
//     title: "Cybersecurity (In Progress)",
//     items: [
//       { name: "Security Fundamentals", pct: 60 },
//       { name: "Secure Coding Practices", pct: 65 },
//       { name: "Currently Deepening: Cybersecurity", pct: 45 },
//     ],
//   },
//   {
//     icon: "Blocks",
//     title: "Emerging Tech",
//     items: [
//       { name: "Blockchain (Motoko / ICP)", pct: 60 },
//       { name: "AI / ML Fundamentals", pct: 55 },
//     ],
//   },
// ];

export const skillCategories: SkillCategory[] = [
  {
    icon: "Code2",
    title: "Languages",
    items: [
      { name: "Python", pct: 85 },
      { name: "JavaScript", pct: 80 },
      { name: "PHP", pct: 75 },
      { name: "SQL", pct: 78 },
      { name: "HTML5", pct: 92 },
      { name: "CSS3", pct: 88 },
    ],
  },
  {
    icon: "MonitorSmartphone",
    title: "Frontend Development",
    items: [
      { name: "React.js", pct: 80 },
      { name: "Next.js", pct: 70 },
      { name: "React Native", pct: 65 },
      { name: "WordPress", pct: 78 },
      { name: "Responsive Design", pct: 85 },
    ],
  },
  {
    icon: "Server",
    title: "Backend & APIs",
    items: [
      { name: "Node.js", pct: 86 },
      { name: "Flask", pct: 80 },
      { name: "Django", pct: 78 },
      { name: "Laravel", pct: 78 },
      { name: "REST APIs", pct: 82 },
      { name: "OAuth & Authentication", pct: 70 },
    ],
  },
  {
    icon: "Database",
    title: "Databases",
    items: [
      { name: "PostgreSQL", pct: 78 },
      { name: "SQLite", pct: 82 },
      { name: "MongoDB", pct: 70 },
      { name: "SQL & Query Design", pct: 78 },
      { name: "Database Design", pct: 75 },
    ],
  },
  {
    icon: "Wrench",
    title: "Tools & Automation",
    items: [
      { name: "Git & GitHub", pct: 88 },
      { name: "Selenium", pct: 75 },
      { name: "Pandas & NumPy", pct: 78 },
      { name: "Docker", pct: 65 },
      { name: "Postman", pct: 82 },
    ],
  },
  {
    icon: "Headset",
    title: "IT Support & Systems",
    items: [
      { name: "Hardware & Software Support", pct: 88 },
      { name: "Network Troubleshooting", pct: 80 },
      { name: "System & Equipment Setup", pct: 85 },
      { name: "User Access & Email Support", pct: 82 },
      { name: "Microsoft Services & Active Directory", pct: 82 },
    ],
  },
  {
    icon: "ShieldHalf",
    title: "Security",
    items: [
      { name: "Security Fundamentals", pct: 60 },
      { name: "Secure Coding Practices", pct: 65 },
      { name: "Authentication & Access Control", pct: 70 },
      { name: "Wazuh", pct: 55 },
      { name: "Cybersecurity", pct: 50 },
    ],
  },
  {
    icon: "Blocks",
    title: "AI & Emerging Technology",
    items: [
      { name: "AI / LLM Integration", pct: 65 },
      { name: "LangChain", pct: 60 },
      { name: "Blockchain / Motoko", pct: 60 },
      { name: "Internet Computer (ICP)", pct: 55 },
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
    duration: "Jan 2022 — Present",
    points: [
      "Built, optimized, and maintained web applications, automation tools, and system integrations for clients.",
      "Delivered full-stack and backend development solutions using Python, JavaScript, PHP, and React.",
      "Provided remote IT support, troubleshooting software, system, and connectivity issues for clients.",
      "Worked directly with clients to gather requirements and deliver reliable technical solutions — maintaining 5-star ratings for performance and client satisfaction.",
    ],
    stack: ["Python", "JavaScript", "Node.js", "React"],
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
    improvements: ["Add social sharing features, ", "Implement advanced analytics for performance tracking, ", "Enhance mobile responsiveness"],
    challenge: "Structuring workout data so trends stay meaningful across very different training styles.",
    // lesson: "A flexible schema up front saved a full data-model rewrite later.",
    github: "https://github.com/ceezign/Fit-Track-App",
    demo: "https://fit-track-app-vert.vercel.app",
  },
  {
    category: "Full Stack",
    title: "Jiggy Marketplace",
    description: "A full-stack PHP Laravel marketplace project supporting listings and transactions between users.",
    stack: ["PHP", "Laravel", "MySQL"],
    features: ["Product listings", "User accounts", "Transaction flow"],
    improvements: ["Add user review system, ", "Implement advanced search filters, ", "Enhance product categorization"],
    challenge: "Keeping the Laravel monolith organized as marketplace features grew.",
    github: "https://github.com/ceezign/Jiggy-Marketplace",
    demo: "https://github.com/ceezign/Jiggy-Marketplace",
  },
  {
    category: "Full Stack",
    title: "Recipe Genie",
    description: "AI Recipe Genie is an intelligent recipe generator web app, it allows users to input ingredients, select cuisine type and dietary preferences, and instantly generate creative, healthy, and tasty recipes using AI",
    stack: ["React", "Python", "LangChain", "Streamlit" ],
    features: ["AI-Powered Recipe Generation, ", "Cuisine & Dietary Options, ", "Modern Gradient UI"],
    improvements: ["Add recipe rating and review system, ", "Implement social sharing features, ", "Enhance search and filtering capabilities"],
    challenge: "Designing a user-friendly interface for browsing and searching recipes.",
    github: "https://github.com/ceezign/Recipe-Genie",
    demo: "https://recipe-genie-llm.streamlit.app/",
  },
  {
    category: "Full Stack",
    title: "Business-to-Business (B2B) Sales Platform",
    description: "A professional Django-based B2B sales channel for product browsing and quote requests.",
    stack: ["Django", "Python", "HTML/CSS"],
    features: ["Product catalog", "Quote request flow", "Admin management", "Email notifications"],
    improvements: ["Add live chat support, ", "Implement analytics dashboard for sales team, ", "Enhance product search and filtering capabilities"],
    challenge: "Designing a quote-request workflow that felt as simple as adding something to a cart.",
    github: "https://github.com/ceezign/B2B-Sales-Platform",
    demo: "https://b2b-sales-platform-production.up.railway.app/",
  },
  {
    category: "Full Stack",
    title: "JiggyConvert",
    description: "JiggyConvert is a modern, responsive currency converter built with HTML, CSS, and Node.js,It allows users to quickly convert between currencies using live exchange rates, and UI is designed with glassmorphism and mobile-first responsiveness, making it smooth on any device",
    stack: ["Node.js + Express", "HTML/CSS", "JavaScript", "API"],
    features: ["Live currency conversion", "Responsive design", "Glassmorphism UI", "Swap currencies instantly"],
    improvements: ["Add historical exchange rate charts, ", "Enhance accessibility features"],
    challenge: "Ensuring accurate and up-to-date exchange rates while maintaining a smooth user experience.",
    github: "https://github.com/ceezign/JiggyConvert.git",
    demo: "https://jiggyconvert.onrender.com/",
  },
  {
    category: "Full Stack",
    title: "Secret Project App",
    description: "A simple web app where users can register, log in, and securely share their secrets, Supports both local authentication (email + password) and Google login using OAuth, stored in a postgreSQL database",
    stack: ["Node.js + Express", "HTML/CSS", "JavaScript", "PostgreSQL", "OAuth"],
    features: ["User registration and login", "Google Sign-In (OAuth 2.0)", "Store and view secrets securely", "Passwords hashed before saving to database", "Session-based authentication"],
    improvements: ["Add password reset functionality, ", "Implement two-factor authentication (2FA), ", "Enhance UI/UX for better user experience"],
    challenge: "Implementing secure authentication and session management while keeping the user experience smooth.",
    github: "https://github.com/ceezign/Secret-Project.git",
    demo: "https://github.com/ceezign/Secret-Project.git",
  },
  {
    category: "Full Stack",
    title: "Weather Forecast App",
    description: "A Simple Weather Forecast App built with Python, Streamlit, and the OpenWeatherMap API, It allows users to search for weather information by city name and view current weather conditions along with a 5-day forecast",
    stack: ["Python", "Streamlit", "JavaScript", "OpenWeatherMap API"],
    features: ["Search weather by city name", "View current weather conditions", "5-day weather forecast"],
    improvements: ["Add geolocation feature to automatically detect user's location, ", "Implement weather alerts and notifications, ", "Enhance UI with interactive weather maps"],
    challenge: "Handling API rate limits and ensuring accurate weather data retrieval for different locations.",
    github: "https://github.com/ceezign/Weather-Forecast-App.git",
    demo: "https://github.com/ceezign/Weather-Forecast-App.git",
  },


  {
    category: "Blockchain",
    title: "JGY NFT Marketplace",
    description: "A token smart contract written in Motoko for the Internet Computer (ICP), powering an NFT marketplace.",
    stack: ["Motoko", "Internet Computer", "JavaScript", "React"],
    features: ["Mint NFTs directly from the frontend","Token smart contract", "arketplace to discover and trade NFTs"],
    improvements: ["Add user authentication and wallet integration, ", "Enhance the marketplace with bidding and auction features"],
    challenge: "Learning Motoko's actor-based model, a real shift from typical backend languages.",
    github: "https://github.com/ceezign/JGY-NFT-Markeplace",
    demo: "#",
  },
  {
    category: "Blockchain",
    title: "JGY Token",
    description: "This project is a simple token smart contract written in Motoko for the Internet Computer (ICP), It lets users receive 10,000 JGY tokens when they enter their principal ID, The project currently runs locally (not deployed on mainnet)",
    stack: ["Motoko", "Internet Computer", "JavaScript", "React"],
    features: ["Mint NFTs directly from the frontend","Token smart contract", "arketplace to discover and trade NFTs"],
    improvements: ["Add user authentication and wallet integration, ", "Enhance the marketplace with bidding and auction features"],
    challenge: "Learning Motoko's actor-based model, a real shift from typical backend languages.",
    github: "https://github.com/ceezign/JGY-NFT-Markeplace",
    demo: "#",
  },
  

  {
    category: "Automation",
    title: "IT Support & Visitor Registration System",
    description: "A modern, mobile-friendly Python-Flask visitor registration system built for office front-desk use.",
    stack: ["Python", "Flask", "SQLite"],
    features: ["Mobile-friendly check-in", "Visitor logging", "Admin dashboard", "Automatic Time Tracking"],
    improvements: ["Add email notifications for visitor check-ins, ", "Implement QR code scanning for faster check-ins, ", "Add multi-language support for international visitors"],
    challenge: "Ensuring the system is intuitive for front-desk staff while capturing all necessary visitor data.",
    github: "https://github.com/ceezign/Sunflag-visitor-registration-system.git",
    demo: "https://sunflag-visitor-registration-system.onrender.com/",
  },
  {
    category: "Automation",
    title: "Weekly Schedule Builder",
    description: "A simple and modern Weekly Planner built with Node.js (Express), HTML, CSS, and JavaScript. This app allows users to create a weekly schedule (Monday-Sunday, Morning, Afternoon, Evening), save it to a CSV file, and preview their schedule in a clean grid format",
    stack: ["Node.js", "Express", "HTML", "CSS", "JavaScript"],
    features: ["Create a weekly schedule with tasks for Morning, Afternoon, and Evening", "Download the saved schedule for offline use", "View a preview table of your saved schedule"],
    improvements: ["Add user authentication to save schedules online, ", "Implement a drag-and-drop interface for easier task management, ", "Add color-coding for different task categories"],
    challenge: "Designing a simple and intuitive interface for users to create and manage their weekly schedules.",
    github: "https://github.com/ceezign/Weekly-Schedule-Builder.git",
    demo: " https://weekly-schedule-builder-web.onrender.com/",
  },
  // {
  //   category: "Automation",
  //   title: "Weather Forecast App",
  //   description: "An API-driven weather application built in Python, pulling and displaying live forecast data.",
  //   stack: ["Python", "REST API"],
  //   features: ["Live forecast lookup", "Clean data formatting"],
  //   improvements: ["Add geolocation to auto-detect user location, ", "Implement a 7-day forecast view, ", "Enhance UI with weather icons and animations"],
  //   challenge: "Handling inconsistent responses from the weather API gracefully.",
    
  //   github: "https://github.com/ceezign?tab=repositories",
  //   demo: "#",
  // },
  {
    category: "Automation",
    title: "Selenium Browser Automation Script",
    description: "A Selenium-powered script that automates repetitive browser tasks and data entry workflows.",
    stack: ["Python", "Selenium"],
    features: ["Automated form filling", "Repetitive task automation"],
    improvements: ["Add error handling and logging for failed tasks, ", "Implement a scheduling feature to run scripts at specific times, ", "Enhance the script to handle dynamic web elements"],
    challenge: "Keeping the automation resilient to small changes in page structure.",
    github: "https://github.com/ceezign/Browser-Automation.git",
    demo: "https://github.com/ceezign/Browser-Automation.git",
  },
  {
    category: "Automation",
    title: "Pomodoro Timebox Tracker",
    description: "A GUI-based Pomodoro app written in Python that helps users manage focus sessions and breaks effectively,It includes desktop notifications, task tracking, CSV logging, and customizable long breaks after a chosen number of sessions",
    stack: ["Python", "Tkinter"],
    features: ["Simple GUI with Tkinter for easy interaction", "Desktop notifications", "CSV logging of all sessions (task, type, start time, duration)", "Configurable focus/break durations"],
    improvements: ["Add a task management system to track multiple tasks, ", "Implement a statistics dashboard to visualize productivity trends, ", "Enhance the GUI with themes and customization options"],
    challenge: "Ensuring the timer runs accurately in the background without freezing the GUI.",
    github: "https://github.com/ceezign/Pomodoro-Timebox-Tracker.git",
    demo: "https://github.com/ceezign/Pomodoro-Timebox-Tracker.git",
  },
  {
    category: "Automation",
    title: "Expense Tracker",
    description: "A simple expense tracker built with node.js and Express, allowing users to log and categorize their expenses, view summaries, and download reports.",
    stack: ["Node.js", "Express"],
    features: ["Add expenses with description, amount, category, and timestamp", "List expenses in table format", "Calculate total expenses", "Export expenses to CSV"],
    improvements: ["Add user authentication to save expenses online, ", "Implement a dashboard with charts for visualizing expenses, ", "Add recurring expense tracking and reminders"],
    challenge: "Designing a simple yet effective way to categorize and summarize expenses for users.",
    github: "https://github.com/ceezign/Expense-Tracker.git",
    demo: "https://expense-tracker-vvsr.onrender.com/",
  },
  {
    category: "Automation",
    title: "Student-Management-System-App",
    description: "A desktop-based Student Management System built with Python, PyQt6, and SQLite. The application is designed to simplify and automate the management of student information, providing an organized interface for handling student records and administrative tasks.",
    stack: ["Python", "PyQt6", "SQLite"],
    features: ["Add student records with details like name, ID, and contact information", "View and edit student information in a table format", "Search and filter students based on various criteria"],
    improvements: ["Add user authentication for secure access to student data, ", "Implement a reporting system to generate summaries and analytics, ", "Enhance the GUI with themes and customization options"],
    challenge: "Designing a user-friendly interface that efficiently handles large volumes of student data while maintaining performance.",
    github: "https://github.com/ceezign/Student-Management-System-App.git",
    demo: "https://github.com/ceezign/Student-Management-System-App.git",
  },
  {
    category: "Automation",
    title: "Automated Webcam Presence Detector",
    description: "A desktop application that uses a webcam to detect and track the presence of individuals in a designated area and send email notifications when presence is detected, built with Python, OpenCV, and SQLite.",
    stack: ["Python", "OpenCV", "SQLite", "SMTP Email"],
    features: ["Real-time presence detection", "Track duration of presence", "Store and display attendance records", "Send email notifications when presence is detected"],
    improvements: ["Add facial recognition for individual identification, ", "Implement alert notifications for unauthorized presence, ", "Enhance UI with visual indicators and reports"],
    challenge: "Ensuring accurate presence detection under varying lighting conditions and minimizing false positives.",
    github: "https://github.com/ceezign/Email-Webcam-Data-App.git",
    demo: "https://github.com/ceezign/Email-Webcam-Data-App.git",
  },


  {
    category: "Games",
    title: "Jiggy Survival Quiz Game",
    description: "An interactive Python quiz game built around survival-style mechanics and scoring.",
    stack: ["Python", "Gradio"],
    features: ["Interactive quiz logic", "Scoring system"],
    improvements:["Add categories (Sports, History, Science, etc.), ", "Separate leaderboards per difficulty, ", "Multiplayer or tournament mode"],
    challenge: "Balancing difficulty progression so the game stays fun rather than frustrating.",
    github: "https://github.com/ceezign/Jiggy-Survival-Quiz-Game-python-",
    demo: "https://huggingface.co/spaces/JiggySpace/Jiggy-Survival-Quiz",
  },
  {
    category: "Games",
    title: "Tenzies Game ",
    description: "A simple and fun dice game, the goal is to roll until all dice show the same number",
    stack: ["React", "Vite", "JavaScript"],
    features: ["Interactive dice that can be held/unheld with a single click", "Win detection when all dice have the same value and are held", "“Roll” button changes to “New Game” after a win"],
    improvements: ["Add a timer to track how long it takes to win, ", "Implement a high score / leaderboard, ", "Improve mobile responsiveness"],
    challenge: "Designing a intuitive UI that works well on both desktop and mobile devices.",
    github: "https://github.com/ceezign/Jiggy-Survival-Quiz-Game-python-",
    demo: "https://github.com/ceezign/Jiggy-Survival-Quiz-Game-python-",
  },
  {
    category: "Games",
    title: "Code Extinct",
    description: "Code Extinct is a fun twist on the classic Hangman game — built with Vite + React.",
    stack: ["React", "Vite"],
    features: ["Interactive quiz logic", "Farewell Messages"],
    improvements: ["Add word difficulty levels (easy, medium, hard), ", "Add score tracking and leaderboard" ],
    challenge: "Balancing difficulty progression so the game stays fun rather than frustrating.",
    github: "https://github.com/ceezign/Jiggy-Survival-Quiz-Game-python-",
    demo: " https://your-live-link.netlify.app",
  },


  {
    category: "Practice",
    title: "Python Daily Challenge",
    description: "An ongoing collection of coding practice and problem-solving repositories in Python.",
    stack: ["Python"],
    features: ["Daily problem solving", "Algorithm practice"],
    
    challenge: "Staying consistent with practice alongside client and job work.",
    
    github: "https://github.com/ceezign/python-daily-challenge",
    demo: "https://github.com/ceezign/python-daily-challenge",
  },
];

// export const services: Service[] = [
//   { icon: "Code2", title: "Full Stack Web Development", description: "End-to-end web applications, from database design to a polished frontend." },
//   { icon: "Server", title: "Backend & API Development", description: "Reliable backend services and integrations using Python, PHP, and Node.js." },
//   { icon: "Database", title: "Database Design & Management", description: "Schema design, data cleaning, and reporting on top of SQL databases." },
//   { icon: "Headset", title: "IT Support & Maintenance", description: "Hardware, software, Microsoft, and network troubleshooting for teams and offices." },
//   { icon: "ShieldHalf", title: "Cybersecurity Assistance", description: "Security-conscious development practices, with growing specialist depth." },
//   { icon: "Workflow", title: "Workflow Automation", description: "Selenium and Python scripts that remove repetitive manual work." },
//   { icon: "Briefcase", title: "Business Software Development", description: "Custom tools for sales, inventory, and operations — informed by an accounting background." },
//   { icon: "MessagesSquare", title: "Technical Consulting", description: "Freelance consulting on architecture, tooling, and technical problem solving." },
// ];

export const services: Service[] = [
  {
    icon: "Code2",
    title: "Full-Stack Web Development",
    description:
      "Build complete web applications from responsive interfaces to backend services, APIs, databases, and deployment.",
  },
  {
    icon: "Briefcase",
    title: "Business Software & Internal Tools",
    description:
      "Build custom applications that streamline sales, operations, inventory, reporting, visitor management, and other business processes.",
  },
  {
    icon: "Server",
    title: "Backend & API Development",
    description:
      "Design and build reliable backend services, REST APIs, authentication systems, and third-party integrations using Python, Node.js, and PHP.",
  },
  {
    icon: "Wrench",
    title: "Web Application Maintenance",
    description:
      "Maintain, troubleshoot, improve, and extend existing web applications, APIs, databases, and integrations.",
  },
  {
    icon: "Database",
    title: "Database Design & Management",
    description:
      "Design database structures, write efficient queries, manage data, and build reliable reporting and data-driven solutions.",
  },
  {
    icon: "Workflow",
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks and business workflows using Python, Selenium, APIs, and custom scripts.",
  },
  {
    icon: "Headset",
    title: "IT Support & Systems Maintenance",
    description:
      "Troubleshoot hardware, software, networking, Microsoft services, user access, and everyday IT infrastructure issues.",
  },
  {
    icon: "ShieldHalf",
    title: "Secure Application Development",
    description:
      "Build with security in mind through authentication, authorization, secure data handling, and security-conscious development practices.",
  },
  {
    icon: "MessagesSquare",
    title: "Technical Consulting",
    description:
      "Help individuals and businesses solve technical problems, choose the right tools, and turn technology requirements into practical solutions.",
  },
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
  { value: 10, label: "Projects Completed", suffix: "+" },
  { value: 20, label: "Technologies Used", suffix: "+" },
  { value: 71, label: "GitHub Repositories", suffix: "" },
  { value: 3, label: "Years in Tech", suffix: "+" },
  { value: 9, label: "Certifications & Diplomas", suffix: "+" },
  { value: 5, label: "Freelance Rating", suffix: ".0 ★" },
];

// No blog posts supplied yet — placeholders, ready to swap for real posts.
// export const blogPosts: BlogPost[] = [
//   {
//     category: "Career",
//     title: "Why I traded accounting for code",
//     excerpt: "How a hobby that started 3-4 years ago turned into a full-stack career.",
//     date: "Coming soon",
//     readTime: "— min read",
//   },
//   {
//     category: "Cybersecurity",
//     title: "What I'm learning as I move into security",
//     excerpt: "Notes from the early stages of a cybersecurity learning path.",
//     date: "Coming soon",
//     readTime: "— min read",
//   },
//   {
//     category: "Python",
//     title: "Lessons from a year of daily Python practice",
//     excerpt: "What consistent, small practice reps actually change.",
//     date: "Coming soon",
//     readTime: "— min read",
//   },
//   {
//     category: "IT Support",
//     title: "What IT support teaches you about writing better software",
//     excerpt: "Supporting real users first changes how you build for them later.",
//     date: "Coming soon",
//     readTime: "— min read",
//   },
// ];

export const blogPosts: BlogPost[] = [
  {
    category: "Career",
    title: "How I found my way into software",
    excerpt:
      "How a hobby turned into years of building software, supporting IT systems, and finding my place in technology.",
    date: "Coming soon",
    readTime: "— min read",
  },
  {
    category: "Cybersecurity",
    title: "What I'm learning about building more secure software",
    excerpt:
      "What I'm learning as I deepen my cybersecurity knowledge and start looking at everyday development through a security-focused lens.",
    date: "Coming soon",
    readTime: "— min read",
  },
  {
    category: "Python",
    title: "What daily Python practice actually taught me",
    excerpt:
      "Lessons from consistently writing code, solving small problems, and learning to think through problems instead of just memorizing syntax.",
    date: "Coming soon",
    readTime: "— min read",
  },
  {
    category: "IT Support",
    title: "What supporting users taught me about software",
    excerpt:
      "Working with real users changed how I think about usability, reliability, troubleshooting, and the software I build.",
    date: "Coming soon",
    readTime: "— min read",
  },
];


// export const testimonials: Testimonial[] = [
//   {
//     quote: "I needed a simple website for my business and Jiggy helped bring the idea together. He understood what I wanted, made the site easy to use, and was willing to make changes when I had feedback. I’m happy with how it turned out.",
//     name: "Rizdam Boutique",
//     role: "Client ",
//   },
//   {
//     quote: "We needed a better way to keep track of visitors, and Atunde built a registration system around what we actually needed. It made the whole process much easier for us, especially when we needed to look back at previous visitor records.",
//     name: "Sunflag Nig Ltd",
//     role: "Client",
//   },
//   {
//     quote: "I’ve been using FitTrack to keep track of my workouts and progress. Everything is pretty straightforward, and I like having the information in one place instead of trying to remember everything myself",
//     name: "Emmanuel",
//     role: "User of fittrack app",
//   },
//   {
//     quote: "I actually like using Recipe Genie when I don't know what to cook. I can put in what I have and get different ideas from it. It's a simple idea, but it's really useful when you're stuck.",
//     name: "Kanyinsola",
//     role: "User of Recipe Genie",
//   },

//   {
//     quote: "Jiggy helped me set up our business domain and email. I honestly didn’t know much about the technical side of it, but he handled everything and explained things along the way. Everything was up and running without any stress.",
//     name: "Ezenwanta",
//     role: "Client",
//   },
  
//   {
//     quote: "Jiggy built a small website for our gym and did a good job turning our ideas into something that actually worked. It gave us a much better way to show people our services and information online..",
//     name: "Burn It Down Fitness",
//     role: "Client ",
//   },
//   {
//     quote: "Jiggy helped automate a task that we were doing manually over and over again. It might seem like a small thing, but it saved us a lot of time and made the process much less stressful.",
//     name: "Manish",
//     role: "Colleague",
//   },
  
// ];


// export const githubStats = {
//   publicRepos: 71,
//   followers: null as number | null, // placeholder — GitHub API was rate-limited when checked
//   pinnedRepos: [
//     { name: "Fit-Track-App", language: "JavaScript" },
//     { name: "Jiggy-Marketplace", language: "PHP" },
//     { name: "JGY-NFT-Markeplace", language: "JavaScript" },
//     { name: "B2B-Sales-Platform", language: "HTML" },
//     { name: "Jiggy-Survival-Quiz-Game-python-", language: "Python" },
//     { name: "python-daily-challenge", language: "Python" },
//   ],
//   languages: [
//     { name: "Python", pct: 30, color: "var(--accent)" },
//     { name: "JavaScript/ Node.js", pct: 30, color: "var(--amber)" },
//     { name: "React", pct: 15, color: "#8B7CD8" },
//     { name: "HTML/CSS", pct: 10, color: "var(--ok)" },
//     { name: "Other", pct: 15, color: "var(--text-faint)" },
//   ],
// };

export const testimonials: Testimonial[] = [
  {
    quote:
      "Atunde understood what I wanted and turned it into a clean, simple website. Really happy with how it came out.",
    name: "Rizdam Boutique",
    role: "Client",
  },
  {
    quote:
      "The visitor registration system made things a lot easier for us. We can register visitors and find old records without going through everything manually.",
    name: "Sunflag Nig Ltd",
    role: "Client",
  },
  {
    quote:
      "FitTrack is pretty straightforward. I use it to keep track of my workouts and progress, and having everything in one place is really useful.",
    name: "Emmanuel",
    role: "FitTrack User",
  },
  {
    quote:
      "I use Recipe Genie whenever I don't know what to cook. I just put in what I have and it gives me some good ideas.",
    name: "Kanyinsola",
    role: "Recipe Genie User",
  },
  {
    quote:
      "I didn't know much about setting up a business domain and email, but Atunde handled it for me and got everything working.",
    name: "Ezenwanta",
    role: "Client",
  },
  {
    quote:
      "The gym website came out really well. It gave us a simple way to put our services and information online.",
    name: "Burn It Down Fitness",
    role: "Client",
  },
  {
    quote:
      "He helped us automate something we were doing manually all the time. It saved us a lot of time.",
    name: "Manish",
    role: "Colleague",
  },
];

export const githubStats = {
  publicRepos: 71,
  followers: null as number | null,

  pinnedRepos: [
    { name: "Fit-Track-App", language: "Node.js" },
    { name: "Jiggy-Marketplace", language: "PHP/Laravel" },
    { name: "JGY-NFT-Markeplace", language: "JavaScript/Motoko/Internet Computer" },
    { name: "B2B-Sales-Platform", language: "Python/Django" },
    { name: "Jiggy-Survival-Quiz-Game-python-", language: "Python" },
    { name: "python-daily-challenge", language: "Python" },
  ],

  languages: [
    { name: "Python", pct: 30, color: "var(--accent)" },
    { name: "JavaScript/ Node.js", pct: 30, color: "var(--amber)" },
    { name: "React", pct: 15, color: "#8B7CD8" },
    { name: "HTML/CSS", pct: 10, color: "var(--ok)" },
    { name: "Other", pct: 15, color: "var(--text-faint)" },
  ],
};

// export const githubStats = {
//   publicRepos: 71,
//   followers: null as number | null, // placeholder — GitHub API was rate-limited when checked
//   pinnedRepos: [
//     { name: "Fit-Track-App", language: "JavaScript" },
//     { name: "Jiggy-Marketplace", language: "PHP" },
//     { name: "JGY-NFT-Markeplace", language: "JavaScript" },
//     { name: "B2B-Sales-Platform", language: "HTML" },
//     { name: "Jiggy-Survival-Quiz-Game-python-", language: "Python" },
//     { name: "python-daily-challenge", language: "Python" },
//   ],
//   languages: [
//     { name: "Python", pct: 30, color: "var(--accent)" },
//     { name: "JavaScript/ Node.js", pct: 30, color: "var(--amber)" },
//     { name: "React", pct: 15, color: "#8B7CD8" },
//     { name: "HTML/CSS", pct: 10, color: "var(--ok)" },
//     { name: "Other", pct: 15, color: "var(--text-faint)" },
//   ],
// };
