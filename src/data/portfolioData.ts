import { ProjectItem, SkillItem, FocusPillar } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Snehil Kashyap',
  shortName: 'Snehil',
  headline: 'Aspiring Web Developer | B.Tech CSE (Data Science) Student',
  academicStatus: '1st Year Undergraduate · Computer Science & Data Science',
  introduction: "Hi, I'm Snehil Kashyap, a computer science student passionate about programming, web development, artificial intelligence, and robotics. I'm continuously learning new technologies and building projects to improve my skills.",
  aboutDetailed: "I am a first-year B.Tech student specializing in Computer Science and Data Science. My journey in tech centers around curious problem-solving, building intuitive and responsive web interfaces, and understanding data-driven systems. I am intrigued by how modern front-end engineering pairs with artificial intelligence and robotics to automate real-world workflows.",
  learningPhilosophy: "As an early-career engineer, I place tremendous value on foundational craft: writing clean HTML and CSS, mastering JavaScript logic, writing algorithmic Python, and leveraging modern developer tooling responsibly. I actively build web applications to transform classroom concepts into working digital experiences.",
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
    subtitle: 'Front-End Architecture & Responsive Interfaces',
    description: 'Constructing clean, accessible, mobile-first web pages using semantic HTML5, modern CSS techniques, and vanilla JavaScript DOM manipulation.',
    iconName: 'Layout',
    topics: ['Responsive Web Design', 'Semantic Markup', 'CSS Grid & Flexbox', 'Vanilla JavaScript & ES6+']
  },
  {
    title: 'Computer Science & Data Science',
    subtitle: 'Computational Foundations & Python',
    description: 'Pursuing foundational coursework in discrete structures, object-oriented programming, data structures, and data science exploratory analysis.',
    iconName: 'Database',
    topics: ['Python Programming', 'Data Structures & Logic', 'Exploratory Data Analysis', 'Statistical Thinking']
  },
  {
    title: 'Artificial Intelligence',
    subtitle: 'AI-Augmented Development & Machine Learning Curiosity',
    description: 'Exploring machine learning concepts and applying AI-assisted developer workflows to accelerate coding iteration, design ideation, and problem debugging.',
    iconName: 'Cpu',
    topics: ['AI-Assisted Web Creation', 'Prompt Engineering for Code', 'Introductory ML Principles', 'Developer Tooling']
  },
  {
    title: 'Robotics & Hardware Exploration',
    subtitle: 'Automation, Embedded Logic & Hardware',
    description: 'Investigating microcontrollers, sensor-actuator loops, and basic automation logic that bridge digital code with physical computing hardware.',
    iconName: 'Bot',
    topics: ['Microcontroller Basics', 'Sensor Integration', 'Hardware Logic', 'Embedded Automation']
  }
];

export const SKILLS_LIST: SkillItem[] = [
  {
    id: 'html',
    name: 'HTML',
    category: 'Front-End',
    status: 'Learning & Practicing',
    description: 'Structuring clean, semantic, and accessible web pages with modern HTML5 conventions, meta tags, and modular page layouts.',
    focusAreas: [
      'Semantic document structures (<header>, <main>, <article>, <section>)',
      'Accessible form elements with appropriate input validations',
      'Media integration (responsive images, audio, video)',
      'Meta tags & viewport configurations for mobile devices'
    ],
    codeSample: {
      language: 'html',
      filename: 'index.html',
      code: `<!-- Semantic & Accessible Structure -->
<main class="container">
  <section class="card" aria-labelledby="feature-title">
    <h2 id="feature-title">Interactive Learning</h2>
    <p>Semantic markup ensures accessibility & SEO.</p>
  </section>
</main>`
    }
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'Front-End',
    status: 'Learning & Practicing',
    description: 'Creating aesthetically refined, responsive visual layouts with Flexbox, CSS Grid, custom properties, and smooth micro-animations.',
    focusAreas: [
      'CSS Flexbox and CSS Grid layout algorithms',
      'CSS variables (custom properties) for consistent theme design',
      'Smooth state transitions and keyframe animations',
      'Modern dark mode aesthetics and box-model mastery'
    ],
    codeSample: {
      language: 'css',
      filename: 'styles.css',
      code: `:root {
  --accent-cyan: #38bdf8;
  --bg-surface: #0f172a;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}`
    }
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Programming',
    status: 'Learning & Practicing',
    description: 'Implementing dynamic client-side interactivity, DOM manipulation, asynchronous operations, and modular ES6+ JavaScript code.',
    focusAreas: [
      'DOM querying, event listeners, and interactive UI state',
      'ES6+ modern syntax: arrow functions, destructuring, template literals',
      'Asynchronous code handling with Promises and async/await',
      'Array methods (map, filter, reduce) for client data processing'
    ],
    codeSample: {
      language: 'javascript',
      filename: 'app.js',
      code: `// Dynamic Interaction & Event Handling
const projectButtons = document.querySelectorAll('.view-btn');

projectButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const targetUrl = e.currentTarget.dataset.url;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  });
});`
    }
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Programming',
    status: 'Learning & Practicing',
    description: 'Writing computational logic, exploring algorithms, and applying Python towards computer science fundamentals and data analysis.',
    focusAreas: [
      'Core syntax, list comprehensions, and dictionary mappings',
      'Algorithmic problem-solving and basic data structures',
      'Working with files and JSON data structures',
      'Foundations for data science exploration and automation scripts'
    ],
    codeSample: {
      language: 'python',
      filename: 'data_analyzer.py',
      code: `# Pythonic data processing fundamentals
def analyze_metrics(data_points: list[float]) -> dict:
    valid_points = [x for x in data_points if x > 0]
    return {
        "count": len(valid_points),
        "average": sum(valid_points) / len(valid_points) if valid_points else 0.0,
        "max_value": max(valid_points, default=0.0)
    }`
    }
  },
  {
    id: 'responsive-design',
    name: 'Responsive Web Design',
    category: 'Design',
    status: 'Learning & Practicing',
    description: 'Crafting fluid web interfaces that adapt seamlessly across mobile phones, tablets, and high-resolution desktop displays.',
    focusAreas: [
      'Mobile-first layout strategies and responsive breakpoints',
      'Fluid typography with clamp() and relative viewport units',
      'Touch-friendly interactive targets and hit areas (>= 44px)',
      'Cross-browser and multi-device manual testing'
    ],
    codeSample: {
      language: 'css',
      filename: 'responsive.css',
      code: `/* Fluid Typography & Responsive Breakpoints */
h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
}
@media (max-width: 768px) {
  .site-nav {
    flex-direction: column;
  }
}`
    }
  },
  {
    id: 'ai-assisted-dev',
    name: 'AI-Assisted Website Development',
    category: 'Modern AI',
    status: 'Learning & Practicing',
    description: 'Employing modern AI developer tools and structured prompts for rapid prototyping, debugging, code refactoring, and exploring cutting-edge workflows.',
    focusAreas: [
      'Structuring precise technical prompts for front-end scaffolding',
      'AI-guided code review, bug identification, and refactoring',
      'Iterative UI experimentation and component architectural ideation',
      'Evaluating and verifying AI-generated output with rigorous testing'
    ],
    codeSample: {
      language: 'markdown',
      filename: 'prompt_workflow.md',
      code: `# AI-Assisted Developer Loop
1. Define clear component specs & interface constraints
2. Generate scaffold using AI tooling
3. Inspect and verify against WCAG contrast & responsive rules
4. Refactor and test on target devices`
    }
  }
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'school-website',
    title: 'School Website',
    category: 'Educational Platform',
    url: 'https://school-one-ashy.vercel.app',
    tagline: 'Comprehensive institutional web platform with academic curriculum and admissions info',
    description: 'A complete, responsive educational website built for schools and academic institutions. Provides structured presentation for academic programs, admissions criteria, faculty profiles, and school notice boards with an intuitive layout.',
    features: [
      'Responsive multi-page layout optimized for parents, students, and educators',
      'Academic curriculum overview and admissions inquiry form',
      'Clean school facilities gallery and campus announcements section',
      'Mobile-friendly navigation with quick contact access'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Grid', 'Vercel'],
    themeColor: {
      accent: '#38bdf8', // sky/blue
      border: 'rgba(56, 189, 248, 0.3)',
      glow: 'rgba(56, 189, 248, 0.15)',
      badgeBg: 'rgba(56, 189, 248, 0.1)'
    },
    mockupDetails: {
      browserUrl: 'school-one-ashy.vercel.app',
      headline: 'Empowering Future Leaders through Excellence',
      subheadline: 'Holistic education, innovative laboratories, and world-class academic standards.',
      mockupType: 'school'
    }
  },
  {
    id: 'gym-website',
    title: 'Gym Website',
    category: 'Fitness & Athletics',
    url: 'https://gym-sand-one.vercel.app',
    tagline: 'High-energy fitness studio web portal with class schedules and membership tiers',
    description: 'An athletic, high-contrast website built for gyms and fitness training centers. Features interactive program cards, workout class timings, trainer profiles, and transparent membership tier pricing.',
    features: [
      'Dynamic dark athletic aesthetic with high visual contrast',
      'Interactive fitness program showcases (Strength, Cardio, HIIT, Yoga)',
      'Class schedule overview and membership plan comparison',
      'Direct call-to-action booking layout for trial workout passes'
    ],
    technologies: ['HTML5', 'Modern CSS', 'CSS Flexbox/Grid', 'JavaScript', 'Vercel'],
    themeColor: {
      accent: '#818cf8', // indigo
      border: 'rgba(129, 140, 248, 0.3)',
      glow: 'rgba(129, 140, 248, 0.15)',
      badgeBg: 'rgba(129, 140, 248, 0.1)'
    },
    mockupDetails: {
      browserUrl: 'gym-sand-one.vercel.app',
      headline: 'Forge Your Strength. Transform Your Body.',
      subheadline: 'State-of-the-art equipment, certified athletic trainers, and personalized programs.',
      mockupType: 'gym'
    }
  },
  {
    id: 'beauty-parlour-website',
    title: 'Beauty Parlour Website',
    category: 'Lifestyle & Wellness',
    url: 'https://sk-qwbf.vercel.app',
    tagline: 'Refined boutique salon website with beauty treatment menus and appointment booking',
    description: 'An elegant, aesthetically refined website designed for beauty parlours and luxury salons. Showcases beauty treatments, skin care services, bridal packages, and an effortless customer inquiry interface.',
    features: [
      'Refined boutique typography with soft color palette and clean spacing',
      'Categorized salon service menu (Hair, Skin, Spa, Bridal Makeover)',
      'Stylist showcases and client appointment request flow',
      'Mobile-responsive layout with instant booking call-to-actions'
    ],
    technologies: ['HTML5', 'Custom CSS', 'Responsive Layout', 'JavaScript', 'Vercel'],
    themeColor: {
      accent: '#c084fc', // purple / violet
      border: 'rgba(192, 132, 252, 0.3)',
      glow: 'rgba(192, 132, 252, 0.15)',
      badgeBg: 'rgba(192, 132, 252, 0.1)'
    },
    mockupDetails: {
      browserUrl: 'sk-qwbf.vercel.app',
      headline: 'Refined Beauty & Personalized Wellness Care',
      subheadline: 'Signature treatments, organic hair care, and bespoke bridal styling experiences.',
      mockupType: 'beauty'
    }
  }
];
