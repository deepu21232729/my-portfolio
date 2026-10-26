export const profile = {
  name: "Deepika Piriya",
  role: "AI Engineer",
  tagline: "Generative AI · Agentic AI · Machine Learning · RAG",
  oneLiner:
    "I build retrieval-grounded, multi-agent AI applications — and ship them with the data discipline of an analytics engineer.",
  location: "Visakhapatnam, Andhra Pradesh, India",
  email: "piriyadeepika29@gmail.com",
  phone: "+91 9441589603",
  phoneHref: "tel:+919441589603",
  linkedin: "https://www.linkedin.com/in/deepika-piriya/",
  github: "https://github.com/deepu21232729",
  resume: "/resume/Deepika-Piriya-Resume.pdf",
  summary:
    "AI and analytics professional with hands-on project experience in Generative AI, LLMs, RAG, multi-agent workflows, NLP, machine learning, and recommendation systems. Builds Python-based AI applications using OpenAI API, LangChain, ChromaDB, FastAPI, and Docker, alongside professional experience in SQL analytics, Power BI, ETL, data quality, KPI reporting, and workflow automation.",
};

export const focusAreas = [
  "Generative AI",
  "Agentic AI",
  "RAG",
  "Multi-Agent Systems",
  "Machine Learning",
];

export const skillGroups = [
  {
    title: "Generative AI & LLMs",
    items: ["OpenAI API", "LangChain", "RAG", "Embeddings & Vector Search", "ChromaDB", "Prompt Engineering", "Multi-Agent Workflows", "NLP"],
  },
  {
    title: "Machine Learning",
    items: ["Supervised Learning", "Feature Engineering", "Model Evaluation", "Recommendation Systems", "Python"],
  },
  {
    title: "Backend & MLOps",
    items: ["FastAPI", "Docker", "Python"],
  },
  {
    title: "Data & Analytics",
    items: ["SQL", "Power BI", "ETL", "Data Modeling", "Data Quality", "KPI Reporting", "Workflow Automation"],
  },
];

export const projects = [
  {
    title: "Multi-Agent Customer Support & Knowledge Agent",
    description:
      "Built a multi-agent AI system that handles query classification, knowledge retrieval using RAG, response generation, and escalation. Developed with LangChain, OpenAI, ChromaDB, FastAPI, and Docker for production-ready deployment.",
    tags: ["LangChain", "OpenAI", "ChromaDB", "FastAPI", "Docker"],
  },
  {
    title: "Conversational RAG Q&A Agent",
    description:
      "Developed an end-to-end RAG application capable of answering questions from 500+ complex unstructured PDFs. Used embeddings, vector search, optimized chunking, and prompt engineering to improve retrieval accuracy.",
    tags: ["RAG", "Embeddings", "Vector Search", "Prompt Engineering"],
  },
  {
    title: "AI Interview Coach",
    description:
      "Created an intelligent interview preparation system that simulates real interview scenarios, evaluates responses, and provides personalized feedback using Large Language Models.",
    tags: ["LLMs", "Evaluation", "Personalized Feedback"],
  },
  {
    title: "AI-Powered Data Analytics / KPI Dashboard System",
    description:
      "Designed and developed interactive analytics systems using Power BI, SQL, and data modeling to track business KPIs. Built automated reporting workflows, improved data accuracy, and reduced report turnaround time significantly.",
    tags: ["Power BI", "SQL", "Data Modeling", "Automation"],
  },
  {
    title: "Machine Learning Prediction System",
    description:
      "Built and evaluated supervised machine learning models with feature engineering, model evaluation, and performance tracking to support data-driven decision making.",
    tags: ["Supervised ML", "Feature Engineering", "Model Evaluation"],
  },
];

export const experience = [
  {
    company: "JMBAXI",
    role: "Data Analytics Engineer – Trainee BD",
    period: "Jan 2025 – Feb 2026",
    location: "Visakhapatnam",
    // TODO: replace/extend with the exact bullets from your résumé (keep figures exact).
    // These are drawn only from the supplied profile text; no numbers were invented.
    achievements: [
      "Delivered SQL analytics and Power BI reporting to track business KPIs.",
      "Built ETL and data-quality checks to improve data accuracy.",
      "Automated reporting workflows, reducing report turnaround time.",
    ],
  },
];

export const education = [
  { degree: "MBA – Business Analytics", school: "Andhra University", period: "2023 – 2025" },
  { degree: "BCA", school: "Adikavi Nannaya University", period: "2020 – 2023" },
];

export const certifications = [
  { title: "Data Science with GenAI", issuer: "FLM" },
  { title: "Machine Learning with Python", issuer: "IBM Cognitive Class" },
  { title: "Power BI and AI", issuer: "Coval University" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
