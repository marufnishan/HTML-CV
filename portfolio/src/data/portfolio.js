// Static portfolio content.
// Each export maps to a future Supabase table (see supabase/schema.sql),
// so field names are snake_case to match the columns Supabase will return.

export const profile = {
  name: 'Md Maruf Ibna Nasim Nishan',
  short_name: 'Maruf Nishan',
  role: 'Full Stack Developer & AI Automation Engineer',
  tagline: 'I build production web platforms and AI-powered automations that replace manual work.',
  summary:
    'Full Stack Developer & AI Automation Specialist with 5+ years delivering production web platforms for clients locally and internationally, plus 2+ years building intelligent automation workflows and AI agents — including conversational AI chatbots, voice AI agents and IVR systems. Proficient in Laravel, Vue.js, React.js, Node.js, Next.js & Tailwind CSS, with databases on MySQL, Prisma & Supabase — from schema design to zero-downtime cloud deployment on DigitalOcean, AWS S3 & Heroku. I build end-to-end automation pipelines with N8N, GoHighLevel (GHL) & Make.com that replace manual processes, and work equally well independently or leading a team.',
  email: 'mdmarufnishan@gmail.com',
  phone: '+880 1718-863771',
  location: 'Rangpur, Bangladesh',
  linkedin_url: 'https://linkedin.com/in/maruf-nishan',
  github_url: 'https://github.com/marufnishan',
}

export const stats = [
  { id: 1, value: '5+', label: 'Years of Experience' },
  { id: 2, value: '10+', label: 'Production Apps Delivered' },
  { id: 3, value: '60%', label: 'Manual Work Reduced' },
  { id: 4, value: '5+', label: 'Automation Tools Mastered' },
]

export const competencies = [
  {
    id: 1,
    title: 'Full Stack Development',
    icon: 'code',
    items: ['SPA & SSR Architecture', 'REST API Design', 'Laravel Eloquent ORM', 'JWT / OAuth Authentication', 'Database Schema Design', 'Component-Driven UI'],
  },
  {
    id: 2,
    title: 'Automation & AI',
    icon: 'bot',
    items: ['N8N Workflow Automation', 'Make.com Scenarios', 'GoHighLevel CRM Setup', 'Microsoft Power Automate', 'Voice AI & IVR (Retell AI)', 'Conversational AI Agents', 'Webhook & API Integration'],
  },
  {
    id: 3,
    title: 'DevOps & Cloud',
    icon: 'cloud',
    items: ['CI/CD Pipeline Automation', 'Zero-Downtime Deployments', 'Cloud Infrastructure Mgmt', 'SSL, DNS & Domain Setup', 'Server Monitoring & Scaling', 'Git & Version Control'],
  },
]

export const skill_groups = [
  { id: 1, title: 'Frontend', items: ['React.js', 'Vue.js', 'Nuxt.js', 'Next.js', 'Livewire', 'Inertia.js', 'Tailwind CSS', 'Bootstrap', 'WordPress'] },
  { id: 2, title: 'Backend', items: ['Laravel', 'Node.js', 'REST API', 'Core PHP · OOP'] },
  { id: 3, title: 'Database', items: ['MySQL', 'Prisma', 'Supabase', 'Eloquent ORM'] },
  { id: 4, title: 'Workflow Tools', items: ['GoHighLevel (GHL)', 'N8N', 'Make.com', 'Power Automate', 'Retell AI', 'Housecall Pro', 'Appointwise', 'Apify'] },
  { id: 5, title: 'Cloud & DevOps', items: ['DigitalOcean', 'AWS S3', 'Heroku', 'Netlify', 'Vercel', 'GitHub Actions', 'GoDaddy', 'Render'] },
  { id: 6, title: 'AI Skills', items: ['AI Agents', 'LLM Integration', 'Prompt Engineering', 'AI-Assisted Dev', 'Conversational AI', 'Voice AI', 'IVR'] },
]

export const experience = [
  {
    id: 1,
    role: 'Full Stack Developer & Automation Engineer',
    company: 'Aniya Network Solutions Inc.',
    company_url: 'https://aniyanetworks.net/',
    location: 'Brampton, Ontario, Canada (Remote)',
    start_date: 'Nov 2022',
    end_date: null,
    highlights: [
      'Architected and shipped 10+ full-stack platforms using Laravel, Vue.js, Nuxt.js, React.js & Node.js — deployed on DigitalOcean, AWS S3 & Heroku with GitHub Actions CI/CD and zero-downtime releases.',
      'Configured GoHighLevel (GHL) CRM end-to-end — Pipelines, Calendars, Funnels & Websites, Workflow Automation, SMS/Email Follow-Up Sequences, Reputation Management, Social Media Planner, Conversation AI, Voice AI & IVR — improving lead conversion for 15+ clients.',
      'Built N8N & Make.com workflows and AI agents (Google Ads, knowledge base, member portal) replacing manual processes, saving clients 15+ hours/week (~60% effort reduction).',
      'Deployed Power Automate flows for Microsoft 365 environments — SharePoint approvals, Outlook triggers, and Teams notifications.',
    ],
  },
]

// category: 'ai' (AI & automation), 'web' (web platforms), 'freelance'
export const projects = [
  {
    id: 1,
    title: 'Google Ads AI Assistant',
    description: 'Create & update Google Ads campaigns via chat, run campaign audits and get optimization suggestions.',
    url: 'https://ans-google-ads.netlify.app/',
    tech: ['N8N', 'AI Agent', 'React', 'Google Ads API', 'Supabase'],
    category: 'ai',
    featured: true,
  },
  {
    id: 2,
    title: 'Project Knowledgebase AI Assistant',
    description: 'AI assistant that answers questions from a company’s project knowledge base.',
    url: 'https://kb.aniyanetworks.net/',
    tech: ['N8N', 'AI Agent', 'React', 'Supabase'],
    category: 'ai',
    featured: true,
  },
  {
    id: 3,
    title: 'Toast POS Member Portal',
    description: 'Membership service monitoring, follow-up, logs & order tracking for Toast POS members.',
    url: 'https://toastmemberportal.netlify.app/',
    tech: ['React', 'N8N', 'AI Agent', 'GHL API'],
    category: 'ai',
    featured: true,
  },
  {
    id: 4,
    title: 'Lead Nurture Automation Suite',
    description: 'Lead nurture, custom chatbot, email campaigns, follow-up, review collection & social media auto-reply.',
    url: 'https://ansghl.netlify.app/',
    tech: ['N8N', 'React', 'Tailwind', 'Supabase'],
    category: 'ai',
    featured: false,
  },
  {
    id: 5,
    title: 'Lead Engine',
    description: 'Lead collection, phone/email validation & website audit automation.',
    url: 'https://ansleadengine.netlify.app/',
    tech: ['Apify', 'N8N'],
    category: 'ai',
    featured: false,
  },
  {
    id: 6,
    title: 'DV Realty Hub',
    description: 'Real estate CRM.',
    url: 'https://hub.dvrealty.ca',
    tech: ['React', 'Node.js', 'Tailwind', 'MySQL', 'DigitalOcean', 'AWS S3'],
    category: 'web',
    featured: false,
  },
  {
    id: 7,
    title: 'Dream Valley Realty',
    description: 'Real estate website powered by the Realtor API.',
    url: 'https://www.dreamvalleyrealty.ca/',
    tech: ['React', 'Tailwind', 'Realtor API'],
    category: 'web',
    featured: false,
  },
  {
    id: 8,
    title: 'CRT Academy',
    description: 'Learning management system.',
    url: 'https://crt.academy/',
    tech: ['Laravel', 'MySQL', 'Bootstrap'],
    category: 'web',
    featured: false,
  },
  {
    id: 9,
    title: 'The ISAC',
    description: 'Islamic education platform.',
    url: 'https://www.theisac.ca/',
    tech: ['Nuxt.js', 'Tailwind', 'MySQL'],
    category: 'web',
    featured: false,
  },
  {
    id: 10,
    title: 'NSRIC Visa',
    description: 'Visa processing CRM and website.',
    url: 'https://nsricvisa.ca/',
    tech: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind'],
    category: 'web',
    featured: false,
  },
  {
    id: 11,
    title: 'NIST Online',
    description: 'School management system.',
    url: 'https://web.nistonline.ca/',
    tech: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind'],
    category: 'web',
    featured: false,
  },
  {
    id: 12,
    title: 'Tourism TV Bangladesh',
    description: 'News portal.',
    url: 'https://tourismtvbangladesh.tv',
    tech: ['Laravel', 'REST API', 'Nuxt.js', 'Tailwind CSS'],
    category: 'freelance',
    featured: false,
  },
  {
    id: 13,
    title: 'BanglarKontho24',
    description: 'News portal.',
    url: 'https://banglarkontho24.com/',
    tech: ['Laravel', 'MySQL'],
    category: 'freelance',
    featured: false,
  },
  {
    id: 14,
    title: 'Abdullah Tiles',
    description: 'POS & shop management system.',
    url: 'https://abdullah-tiles.netlify.app/',
    tech: ['React', 'Tailwind', 'Laravel', 'MySQL'],
    category: 'freelance',
    featured: false,
  },
  {
    id: 15,
    title: 'Bangladeshi Business in Quebec',
    description: 'Community business website.',
    url: 'https://bbiq.ca',
    tech: ['Laravel', 'Livewire', 'Bootstrap'],
    category: 'freelance',
    featured: false,
  },
  {
    id: 16,
    title: 'Vector Sign',
    description: 'Business website.',
    url: 'https://vectorsign.fr/',
    tech: ['React'],
    category: 'freelance',
    featured: false,
  },
  {
    id: 17,
    title: 'FX Concept',
    description: 'Business website.',
    url: 'https://fxconcept.netlify.app/',
    tech: ['React', 'Laravel', 'MySQL'],
    category: 'freelance',
    featured: false,
  },
]

export const education = [
  {
    id: 1,
    degree: 'B.Sc. Computer Science & Engineering',
    institution: 'Daffodil International University',
    location: 'Dhaka, Bangladesh',
    period: '2018 – 2022',
    grade: 'CGPA 3.76 / 4.00',
  },
]

// level is out of 5
export const languages = [
  { id: 1, name: 'Bangla', level: 5 },
  { id: 2, name: 'English', level: 4 },
  { id: 3, name: 'Hindi', level: 4 },
]
