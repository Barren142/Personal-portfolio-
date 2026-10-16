import { ProjectItem, SkillItem, FocusPillar } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Snehil Kashyap',
  shortName: 'Snehil',
  heroLabel: 'B.TECH STUDENT · ASPIRING WEB DEVELOPER',
  headline: 'Turning Curiosity Into Digital Experiences.',
  introduction: "I'm a Computer Science and Data Science student driven by curiosity about technology and the possibilities it creates. From building websites to exploring programming and artificial intelligence, I enjoy learning through experimentation and transforming ideas into practical digital experiences. Every project is an opportunity to improve, create, and think differently.",
  aboutHeading: 'Beyond the Code.',
  aboutParagraphs: [
    "I'm currently pursuing a B.Tech in Computer Science and Data Science, building a strong foundation in programming and digital technologies.",
    "My interest goes beyond writing code. I enjoy understanding how things work, experimenting with new tools, and creating digital experiences that are both useful and visually engaging.",
    "I'm especially interested in web development, artificial intelligence, and robotics. Through personal projects and continuous learning, I'm working towards becoming a versatile developer who can turn ideas into meaningful solutions."
  ],
  skillsHeading: 'My Toolkit',
  skillsSupportingText: "Technologies and tools I'm learning, practising, and using to bring ideas to life.",
  projectsHeading: 'Selected Work',
  projectsSupportingText: "A collection of websites I've built to practise my skills, explore design, and turn ideas into working digital experiences.",
  contactHeading: 'Have Something in Mind?',
  contactSupportingText: "I'm always interested in learning, exploring new ideas, and connecting with people who enjoy building meaningful things through technology.",
  contact: {
    email: 'kashyapsnehil6@gmail.com',
    phone: '+91 8251036828',
    phoneDisplay: '+91 82510 36828',
    github: 'https://github.com/Barren142',
    githubHandle: 'Barren142',
    location: 'India'
  }
};

export const FOCUS_PILLARS: FocusPillar[] = [
  {
    title: 'Web Development',
    subtitle: 'Responsive Interfaces & Semantic Markup',
    description: 'Constructing modern, accessible websites using clean HTML, modular CSS layouts, and interactive JavaScript.',
    iconName: 'Layout',
    topics: ['Responsive Systems', 'Semantic HTML5', 'CSS Grid & Flexbox', 'Client-Side Interactivity']
  },
  {
    title: 'Computer Science & Data Science',
    subtitle: 'Foundational Logic & Python Scripting',
    description: 'Exploring core data structures, algorithmic thinking, and analytical data manipulation with Python.',
    iconName: 'Database',
    topics: ['Python Logic', 'Data Structures', 'Data Exploration', 'Algorithmic Problem Solving']
  },
  {
    title: 'Artificial Intelligence',
    subtitle: 'Emerging Tools & AI-Augmented Workflows',
    description: 'Experimenting with modern AI tools, prompt structuring, and intelligent systems to accelerate developer iterations.',
    iconName: 'Cpu',
    topics: ['AI-Augmented Development', 'Prompt Architecture', 'Machine Learning Concepts', 'Developer Workflows']
  },
  {
    title: 'Robotics & Hardware',
    subtitle: 'Automation & Embedded Exploration',
    description: 'Investigating microcontrollers, sensor-actuator loops, and hardware logic connecting software to physical devices.',
    iconName: 'Bot',
    topics: ['Microcontrollers', 'Sensor Interfacing', 'Automation Logic', 'Embedded Computing']
  }
];

export const SKILLS_LIST: SkillItem[] = [
  {
    id: 'html',
    name: 'HTML',
    category: 'Front-End',
    status: 'Learning & Practicing',
    description: 'Structuring clean, semantic, and accessible document architectures with modern HTML5 conventions and responsive viewports.',
    focusAreas: [
      'Semantic document hierarchy (<header>, <main>, <section>, <article>)',
      'Accessible form inputs and input validation standards',
      'Media integration and performant asset delivery',
      'SEO foundations and viewport meta configurations'
    ],
    codeSample: {
      language: 'html',
      filename: 'structure.html',
      code: `<section class="editorial-card">
  <h2>Clean Semantic Hierarchy</h2>
  <p>Accessible structures form the bedrock of responsive design.</p>
</section>`
    }
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'Front-End',
    status: 'Learning & Practicing',
    description: 'Crafting responsive layouts, fluid typography, and restrained transitions with Flexbox, CSS Grid, and custom variables.',
    focusAreas: [
      'CSS Flexbox & CSS Grid responsive layout patterns',
      'Custom properties (CSS variables) for cohesive theme palettes',
      'Fluid typography with clamp() and relative viewport units',
      'Clean border treatments and subtle hover interactions'
    ],
    codeSample: {
      language: 'css',
      filename: 'layout.css',
      code: `.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}`
    }
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Programming',
    status: 'Learning & Practicing',
    description: 'Implementing dynamic client-side logic, event handling, DOM manipulation, and modern ES6+ programming practices.',
    focusAreas: [
      'DOM querying, manipulation, and event handling',
      'Modern ES6+ syntax: arrow functions, modules, destructuring',
      'Asynchronous code handling with Promises and async/await',
      'Array operations (map, filter, reduce) for UI data binding'
    ],
    codeSample: {
      language: 'javascript',
      filename: 'app.js',
      code: `const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    // Smooth navigation interaction
  });
});`
    }
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Programming',
    status: 'Learning & Practicing',
    description: 'Writing computational logic, exploring algorithms, and applying Python towards data science fundamentals and script automation.',
    focusAreas: [
      'Core syntax, list comprehensions, and dictionary processing',
      'Foundational algorithms and data structure problem solving',
      'Working with structured files and data records',
      'Academic data science exploratory foundations'
    ],
    codeSample: {
      language: 'python',
      filename: 'metrics.py',
      code: `def process_dataset(values: list[float]) -> dict:
    valid = [v for v in values if v >= 0]
    return {
        "count": len(valid),
        "mean": sum(valid) / len(valid) if valid else 0.0
    }`
    }
  },
  {
    id: 'responsive-design',
    name: 'Responsive Web Design',
    category: 'Design',
    status: 'Learning & Practicing',
    description: 'Building adaptable layouts that maintain flawless readability and ergonomic touch targets across phones, tablets, and desktop displays.',
    focusAreas: [
      'Mobile-first responsive strategies and fluid breakpoints',
      'Flexible grid systems and proportional whitespace scaling',
      'Touch targets >= 44px for intuitive mobile navigation',
      'Cross-device visual verification and testing'
    ],
    codeSample: {
      language: 'css',
      filename: 'responsive.css',
      code: `@media (min-width: 768px) {
  .hero-container {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}`
    }
  },
  {
    id: 'ai-assisted-dev',
    name: 'AI-Assisted Website Development',
    category: 'Modern AI',
    status: 'Learning & Practicing',
    description: 'Leveraging modern AI developer tools with structured prompting for accelerated prototyping, code refactoring, and exploring efficient workflows.',
    focusAreas: [
      'Precise prompt formulation for front-end scaffolding',
      'AI-assisted debugging, syntax review, and refactoring',
      'Iterative design ideation and component layout planning',
      'Rigorous verification of generated code against web standards'
    ],
    codeSample: {
      language: 'markdown',
      filename: 'workflow.md',
      code: `## AI Workflow
1. Specify clear architectural requirements
2. Generate initial layout component
3. Review against accessibility and responsiveness standards`
    }
  }
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'school-website',
    title: 'School Website',
    category: 'Education Platform',
    url: 'https://school-one-ashy.vercel.app',
    tagline: 'Comprehensive educational platform with academic curriculum and admissions',
    description: 'A responsive educational web platform designed for schools, featuring academic program outlines, admissions information, and an accessible multi-page layout.',
    features: [
      'Academic curriculum overview and admissions inquiry structure',
      'Clean school facilities gallery and campus announcements',
      'Mobile-friendly responsive navigation with clear typography',
      'Structured presentation for parents, students, and educators'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Grid', 'Vercel'],
    themeColor: {
      accent: '#B8BCC2',
      border: '#E5E7EB',
      glow: 'transparent',
      badgeBg: '#F7F7F7'
    },
    mockupDetails: {
      browserUrl: 'school-one-ashy.vercel.app',
      headline: 'Empowering Academic Excellence & Growth',
      subheadline: 'Holistic curriculum, state-of-the-art facilities, and dedicated faculty.',
      mockupType: 'school'
    }
  },
  {
    id: 'gym-website',
    title: 'Gym Website',
    category: 'Health & Fitness',
    url: 'https://gym-sand-one.vercel.app',
    tagline: 'Dynamic fitness studio web portal with class schedules and membership tiers',
    description: 'A modern fitness club website featuring workout program catalogs, trainer showcases, class schedules, and a streamlined membership tier comparison.',
    features: [
      'Interactive fitness program showcases (Strength, Cardio, HIIT, Yoga)',
      'Weekly training schedule layout and trainer spotlight',
      'Transparent membership plan comparison with call-to-actions',
      'High-contrast, mobile-friendly athletic user interface'
    ],
    technologies: ['HTML5', 'Modern CSS', 'CSS Flexbox/Grid', 'JavaScript', 'Vercel'],
    themeColor: {
      accent: '#B8BCC2',
      border: '#E5E7EB',
      glow: 'transparent',
      badgeBg: '#F7F7F7'
    },
    mockupDetails: {
      browserUrl: 'gym-sand-one.vercel.app',
      headline: 'Strength, Endurance & Professional Training',
      subheadline: 'Modern fitness facility, personal coaching, and structured workout programs.',
      mockupType: 'gym'
    }
  },
  {
    id: 'beauty-parlour-website',
    title: 'Beauty Parlour Website',
    category: 'Lifestyle & Wellness',
    url: 'https://sk-qwbf.vercel.app',
    tagline: 'Refined boutique salon website with beauty treatment menus and booking flow',
    description: 'An elegant salon and wellness website showcasing categorized beauty treatments, stylist profiles, and an intuitive customer appointment booking flow.',
    features: [
      'Categorized salon service menu (Hair Styling, Skin Care, Spa, Bridal)',
      'Stylist showcases and client appointment request flow',
      'Refined boutique typography with generous spacing',
      'Seamless multi-device responsiveness'
    ],
    technologies: ['HTML5', 'Custom CSS', 'Responsive Layout', 'JavaScript', 'Vercel'],
    themeColor: {
      accent: '#B8BCC2',
      border: '#E5E7EB',
      glow: 'transparent',
      badgeBg: '#F7F7F7'
    },
    mockupDetails: {
      browserUrl: 'sk-qwbf.vercel.app',
      headline: 'Refined Beauty Treatments & Bespoke Care',
      subheadline: 'Curated styling services, organic treatments, and relaxing ambiance.',
      mockupType: 'beauty'
    }
  }
];
