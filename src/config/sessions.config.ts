import type { Session } from "../types/session";

export const SUBMITTED_SESSIONS: Session[] = [
  {
    id: "frank-abbruzzese-001",
    title: "Build Relationships First...Sell later.",
    speaker: "Frank Abbruzzese",
    description: `Build relationships first. Sell later. When tech entrepreneurs build their business and lead their business with a tech mindset, the message gets bogged down in technical terms, acronyms, and jargon, making it difficult for non-technical prospects and clientele to be uncertain and possibly confused about the message and whether they need it or if it can help them.

I will take you on an Entrepreneurial journey sharing my story of being President of AlphaKOR. You will learn the value of networking, building core values and some of the keys to being successful.`,
    isSubmitted: true,
  },
  {
    id: "wen-teoh-001",
    title: "Hack It, Build It, Launch It: Entrepreneurship for Developers",
    speaker: "Wen Teoh",
    description: `As a developer, you already have an amazing skill: you can turn an idea into something real with just your laptop. But building a cool app or project isn’t always the same as building something people will actually use—or even pay for. In this talk, we’ll explore how developers can turn side projects into startups, the common mistakes to watch out for, and why now is the perfect time to try. You’ll leave with practical tips, real examples, and maybe even the spark for your next big idea.`,
    isSubmitted: true,
  },
  {
    id: "sean-bridgeman-001",
    title: "When Everyone Ships, Who Owns Quality?",
    speaker: "Sean Bridgeman",
    description: `AI is changing who can create and ship software. Product, design, QA, and engineering are moving beyond traditional role boundaries and are contributing to shipping code.

Drawing on HALIGHT’s quality journey, Sean Bridgeman explores how these changing expectations reshape accountability, performance, and the role of QA. The session asks a fundamental question: when everyone can ship, who owns quality?`,
    isSubmitted: true,
  },
  {
    id: "elvis-akhalu-001",
    title: "Expectation vs. Reality: Building Data Pipelines in Banking",
    speaker: "Elvis Akhalu",
    speakerRole: "Data Engineer at TD",
    duration: "30 min",
    description: `Building data pipelines in real life looks quite different from what you learn in online tutorials. While courses often focus on ideal scenarios, working with data in a bank comes with unique considerations around data formats, system scale, and daily operational workflows.

In this candid 30-minute talk, I share my journey and everyday experiences as a data engineer at a major bank. We will walk through the practical realities of the role—from the core tools used daily, like Python, PySpark, and Azure Databricks to how data moves through basic ingestion and processing stages.

Rather than focusing on deep theoretical models, this session highlights practical lessons learned on the job: unexpected hurdles with data formats, the importance of code quality and testing, and what a typical day actually looks like behind the scenes.

Whether you are a student, an aspiring data engineer, or a developer curious about how data systems operate in banking, you will leave with a realistic perspective on the role and practical takeaways for your own tech journey.`,
    isSubmitted: true,
  },
  {
    id: "keval-patel-001",
    title: "Beyond Vibe Coding: Engineering Production-Ready Software with AI",
    speaker: "Keval Patel",
    speakerRole:
      "Lead Information Technology Infrastructure Manager at Architecttura Inc., Architects",
    description: `The rise of powerful AI developer tools has made "vibe coding" extremely popular. While fun for prototypes, this approach often leads to architectural debt, security vulnerabilities, and brittle codebases.

If you want to transition from writing flashy demos to shipping reliable, production-grade applications with AI, you need a shift from random prompting to structured engineering.

In this practical session, we will break down how to treat AI not as a magic oracle, but as an autonomous junior engineer that requires clear guardrails, context, and architecture.

Leave this session with actionable frameworks, concrete templates for your repository's context files, and a blueprint for how to write software properly alongside AI tools.`,
    isSubmitted: true,
  },
  {
    id: "joe-youssouf-001",
    title:
      '"Zero to AI-Native" Workshop: Setting Up an Agentic Workflow That Works for You',
    speaker: "Joe Youssouf",
    description: `Anyone can be "AI-Native", with the right knowledge and setup! In this talk, I'll walk through my own personal agentic setup, which I've used to win hackathons, ship multiple iOS and Android apps, and use daily in my career as a senior data scientist!

Bring your laptop and a note-taker! We'll build an environment together on a real project, and you'll leave with a setup you can bring to your own codebase the next morning.

This is a hands-on workshop for developers at all skill levels!`,
    isSubmitted: true,
  },
  {
    id: "umair-durrani-001",
    title: "Analyzing and Visualizing Larger than Memory (Geospatial) Data",
    speaker: "Umair Durrani",
    description: `Analyzing big data is no easy feat, particularly when the data is larger than your laptop's memory. In this talk, I'll introduce you to the arrow and geoarrow packages that help you analyze data that is bigger than the available RAM. I'll also show you workflows that help in visualizing big geospatial data faster.`,
    isSubmitted: true,
  },
  {
    id: "kylie-kiser-001",
    title: "Building Better Solutions with Low-Code AI",
    speaker: "Kylie Kiser",
    description: `Low code has become a core part of how teams deliver solutions quickly without sacrificing quality. In this session, we will look at the benefits low-code AI brings to development teams, and how these technologies fit into modern solution design.

We will also talk about the growing impact of AI on low-code tools and how it changes the way makers and developers work. We will wrap up with discussion time to explore questions, real scenarios, and where these approaches can help your projects.`,
    isSubmitted: true,
  },
  {
    id: "florid-maclean-001",
    title:
      "Run a personal agent on a Cloud Run service (Coffee Shop Manager Assistant)",
    speaker: "Florid Maclean",
    description: `You will build a personal AI assistant that helps you analyze business data and perform other tasks through a chat UI. You will use a Cloud Run service to host your personal agent.

Your agent will use Cloud Run sandboxes. Cloud Run sandboxes are a native, secure, and ultra-fast runtime environment built specifically for executing untrusted code and agent workloads, starting in milliseconds. The sandbox allows your AI Agent to dynamically write, run, and test code on the fly to solve complex analytical problems.

The agent executes Python scripts and shell commands directly on your local host machine's system terminal.

This is a hands-on workshop.`,
    isSubmitted: true,
  },
  {
    id: "diaa-elkott-001",
    title: "Introducing On-Device Development with Gemma",
    speaker: "Diaa ElKott",
    description: `Learn about AI development for mobile, web, or edge applications running Gemma locally for offline, privacy-first inference.

• Going Offline: Why local LLMs matter (privacy, cost, and absolute control).
• The Hardware Tax: A beginner-friendly breakdown of VRAM, context windows, and how your GPU dictates your AI's speed.
• Zero to Chatting in 60 Seconds: A live look at setting up Ollama and interacting with Gemma 4 models right from the terminal.`,
    isSubmitted: true,
  },
  {
    id: "yvonne-pilon-james-lannigan-001",
    title: "From Hype to Impact: AI in Startups and Beyond",
    speaker: "Yvonne Pilon / James Lannigan",
    description: `Join Yvonne Pilon, President and CEO of WEtech Alliance, for a fireside chat with James Lannigan, Senior Research Associate, Innovation and Technology at Signal 49 Research exploring how startups and organizations are putting AI to work. The conversation will highlight practical tools, real-world use cases and lessons from the field along with the opportunities, challenges and considerations that come with adopting AI.`,
    isSubmitted: true,
  },
];