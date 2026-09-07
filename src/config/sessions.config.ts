import type { Session } from "../types/session";

export const SUBMITTED_SESSIONS: Session[] = [
  {
    id: "frank-abbruzzese-001",
    title: "Build relationships first. Sell later.",
    speaker: "Frank Abbruzzese",
    description: "When tech entrepreneurs build their business and lead their business with a tech mindset, the message gets bogged down in the technical terms, acronyms and jargons making it difficult for non-technical prospects and clientele uncertain and possibly confused what the message is and if they need this or if this can help them.",
    isSubmitted: true,
  },
  {
    id: "wen-teoh-001",
    title: "Hack It, Build It, Launch It: Entrepreneurship for Developers",
    speaker: "Wen Teoh",
    description: "As a developer, you already have an amazing skill: you can turn an idea into something real with just your laptop. But building a cool app or project isn't always the same as building something people will actually use—or even pay for. In this talk, we'll explore how developers can turn side projects into startups, the common mistakes to watch out for, and why now is the perfect time to try. You'll leave with practical tips, real examples, and maybe even the spark for your next big idea.",
    isSubmitted: true,
  },
  {
    id: "elvis-akhalu-001",
    title: "Expectation vs. Reality: Building Data Pipelines in Banking",
    speaker: "Elvis Akhalu",
    speakerRole: "Data Engineer at TD",
    duration: "30 min",
    description: "Building data pipelines in real life looks quite different from what you learn in online tutorials. While courses often focus on ideal scenarios, working with data in a bank comes with unique considerations around data formats, system scale, and daily operational workflows.\n\nIn this candid 30-minute talk, I share my journey and everyday experiences as a Data Engineer at a major bank. We will walk through the practical realities of the role—from the core tools used daily like Python, PySpark, and Azure Databricks, to how data moves through basic ingestion and processing stages.\n\nRather than focusing on deep theoretical models, this session highlights practical lessons learned on the job: unexpected hurdles with data formats, the importance of code quality and testing, and what a typical day actually looks like behind the scenes.\n\nWhether you are a student, an aspiring data engineer, or a developer curious about how data systems operate in banking, you will leave with a realistic perspective on the role and practical takeaways for your own tech journey.",
    isSubmitted: true,
  },
  {
    id: "keval-patel-001",
    title: "Beyond Vibe Coding: Engineering Production-Ready Software with AI",
    speaker: "Keval Patel",
    speakerRole: "Founder & AI Educator at Architecttura Inc.",
    description: "The rise of powerful AI developer tools has made \"vibe coding\" extremely popular. While fun for prototypes, this approach often leads to architectural debt, security vulnerabilities, and brittle codebases.\n\nIf you want to transition from writing flashy demos to shipping reliable, production-grade applications with AI, you need a shift from random prompting to structured engineering.\n\nIn this practical session, we will break down how to treat AI not as a magic oracle, but as an autonomous junior engineer that requires clear guardrails, context, and architecture.\n\nAttendees will learn:\n\n- The Anatomy of AI Context: How to guide your AI agent effectively by writing foundational repository files like architecture.md, security.md, deployment.md, and claude.md.\n- Mastering AI Skills: Understanding how autonomous developer tools leverage specialized skills to interact with your codebase securely and logically.\n- Live Full-Stack Construction: A live coding demonstration building a complete full-stack project from scratch using Claude Code, demonstrating how human architectural oversight and AI execution combine to create clean, scalable production software.\n\nLeave this session with actionable frameworks, concrete templates for your repository's context files, and a blueprint for how to write software properly alongside AI tools.",
    isSubmitted: true,
  },
];
