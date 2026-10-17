import type { Session } from "../types/session";

export const SUBMITTED_SESSIONS: Session[] = [
  {
    id: "frank-abbruzzese-001",
    title: "Build Relationships First...Sell later.",
    speaker: "Frank Abbruzzese",
    description: `Build relationships first. Sell later. When tech entrepreneurs build their business and lead their business with a tech mindset, the message gets bogged down in technical terms, acronyms, and jargon, making it difficult for non-technical prospects and clientele to understand the message and whether they need it.

I will take you on an entrepreneurial journey, sharing my story of being president of AlphaKOR. You will learn the value of networking, building core values, and some of the keys to being successful.`,
    isSubmitted: true,
  },
  {
    id: "wen-teoh-001",
    title: "Ctrl+Alt+Launch: Entrepreneurship for Tech Students",
    speaker: "Wen Teoh",
    description: `Got a folder full of unfinished side projects, a hackathon build, or an app idea for campus life? As a developer, you can turn code into reality overnight—but building a real-world business requires a different kind of reboot.

In this interactive session for student developers, we will dive into a practical entrepreneurship playbook. Learn to spot real market pain points, validate ideas before coding, avoid over-engineering, and launch a lean MVP fast.

Discover how to hit Ctrl+Alt+Launch to turn your GitHub repo into real-world equity.`,
    isSubmitted: true,
  },
  {
    id: "sean-bridgeman-001",
    title: "When Everyone Ships, Who Owns Quality?",
    speaker: "Sean Bridgeman",
    description: `AI is changing who can create and ship software. Product, design, QA, and engineering are moving beyond traditional role boundaries and are contributing to shipping code.

Drawing on HALIGHT’s quality journey, Sean will explore how these changing expectations reshape accountability, performance, and the role of QA. The session asks a fundamental question: when everyone can ship, who owns quality?`,
    isSubmitted: true,
  },
  {
    id: "elvis-akhalu-001",
    title: "Expectation vs. Reality: Building Data Pipelines in Banking",
    speaker: "Elvis Akhalu",
    speakerRole: "Data Engineer at TD",
    duration: "30 min",
    description: `Building real-world data pipelines differs greatly from online tutorials. In banking, data engineers must navigate varied data formats, large-scale systems, and daily operational demands.

In this candid 30-minute session, Elvis Akhalu shares his experience as a data engineer at a major bank. He will cover the tools used daily—Python, PySpark, and Azure Databricks—along with core ingestion and processing workflows.

Attendees will gain practical insights into common challenges, code quality and testing, and what the role looks like day to day. The session is suited to students, aspiring data engineers, and developers interested in banking data systems.`,
    isSubmitted: true,
  },
  {
    id: "keval-patel-001",
    title: "Beyond Vibe Coding: Engineering Production-Ready Software with AI",
    speaker: "Keval Patel",
    speakerRole:
      "Lead Information Technology Infrastructure Manager at Architecttura Inc., Architects",
    description: `AI coding tools make prototyping fast, but “vibe coding” can also create architectural debt, security vulnerabilities, and fragile codebases.

This practical session explains how to move from ad hoc prompting to structured engineering. Keval Patel will show how to use AI as a capable junior engineer—one that needs clear context, guardrails, and architecture.

Attendees will leave with practical frameworks, repository-context templates, and a blueprint for building reliable, production-ready software with AI.`,
    isSubmitted: true,
  },
  {
    id: "joe-youssouf-001",
    title:
      '"Zero to AI-Native" Workshop: Setting Up an Agentic Workflow That Works for You',
    speaker: "Joe Youssouf",
    description: `Anyone can be "AI-Native", with the right knowledge and setup! In this talk, I'll walk through my own personal agentic setup, which I've used to win hackathons, ship multiple iOS and Android apps, and use daily in my career as a senior data scientist!

For developers at all skill levels, bring your laptop and a note-taker! We'll build an environment together on a real project, and you'll leave with a setup you can bring to your own codebase the next morning.`,
    isSubmitted: true,
  },
  {
    id: "umair-durrani-001",
    title: "Analyzing and Visualizing Larger than Memory (Geospatial) Data",
    speaker: "Umair Durrani",
    description: `Analyzing big data is no easy feat, particularly when the data is larger than your laptop's memory. In this talk, I'll introduce you to the arrow and geoarrow packages which help you analyze data that is larger than the available RAM. I'll also show you workflows that help in visualizing big geospatial data faster.`,
    isSubmitted: true,
  },
  {
    id: "kylie-kiser-001",
    title: "Building Better Solutions with Low-Code AI",
    speaker: "Kylie Kiser",
    description: `Low-code has become a core part of how teams deliver solutions quickly without sacrificing quality. In this session, we will look at the benefits low-code AI brings to development teams, and how these technologies fit into modern solution design.

We will also talk about the growing impact of AI on low-code tools and how it changes the way makers and developers work. We will wrap up with discussion time to explore questions, real scenarios, and where these approaches can help your projects.`,
    isSubmitted: true,
  },
  {
    id: "florid-maclean-001",
    title:
      "Run a Personal Agent on a Cloud Run Service (Coffee Shop Manager Assistant)",
    speaker: "Florid Maclean",
    description: `In this hands-on session, you will build a personal AI assistant that helps you analyze business data and perform other tasks through a chat UI. You will use a Cloud Run service to host your personal agent.

Your agent will use Cloud Run sandboxes. Cloud Run sandboxes are a native, secure, and ultra-fast runtime environment built specifically to execute untrusted code and agent workloads, starting in milliseconds. The sandbox allows your AI agent to dynamically write, run, and test code on the fly to solve complex analytical problems.

The agent executes Python scripts and shell commands directly on your local host machine's system terminal.`,
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
    title: "The State of AI and Where the Industry is Going",
    speaker: "Yvonne Pilon / James Lannigan",
    // The updated document contains a title only.
    // Keep the shared lunch block unchanged until participants are confirmed.
    description: "",
    isSubmitted: true,
  },
  {
    id: "andrea-irina-yzeiri-001",
    title:
      "The AI Apocalypse is Overpriced: Why the Doom Debate Is the Wrong Question",
    speaker: "Andrea Irina Yzeiri",
    description: `Everyone has a take on whether AI will save or destroy society. Few are grounded in how these systems actually work or who pays for them.

This talk cuts through the noise. We'll start with the math: what a neural network is really doing under the hood, and why some researchers argue that scaling next-token prediction may never produce real intelligence. We'll look at what happens when models move from chatting to acting, including cases where models and agents take consequential actions. Then we'll follow the money: who benefits when AI is expensive to run, hard to scale, and concentrated in a handful of companies?`,
    isSubmitted: true,
  },
  {
    id: "nav-singh-001",
    title: "Android AppFunctions: Exposing Your App to AI Agents",
    speaker: "Nav Singh",
    description: `AI agents are changing the way users interact with Android apps. AppFunctions gives developers a direct, structured way to participate in this future by exposing selected app capabilities as typed, callable tools that the operating system and on-device AI agents can discover and invoke.

In this hands-on session, we will build an agent-ready Android feature using Kotlin and the AppFunctions Jetpack library.

Attendees will leave with the knowledge and implementation roadmap needed to prepare their Android apps for the agentic era.`,
    isSubmitted: true,
  },
  {
    id: "chukwuka-asamaka-001",
    title:
      "From Code to the Factory Floor: Building the Intelligent Factory with AI, Robotics & Digital Twins",
    speaker: "Chukwuka (Eddie) Asamaka",
    description: `What happens when software begins interacting with the physical world?

Modern factories combine PLCs, robots, machine vision, industrial networks, IIoT, cloud platforms, digital twins, and AI to create connected, software-driven manufacturing systems.

Eddie Asamaka will use practical examples to explain how these technologies work together, where AI adds value—from visual inspection and predictive maintenance to process optimization—and how digital twins enable systems to be tested before physical deployment.

Attendees will gain a practical view of the intelligent-factory technology stack, the relationship between IT and operational technology (OT), and opportunities for developers in AI, cloud, cybersecurity, data engineering, computer vision, simulation, and robotics.`,
    isSubmitted: true,
  },
  {
    id: "mahnoz-akhtari-001",
    title: "I Shut Down a Profitable Business: A Post-Mortem",
    speaker: "Mahnoz Akhtari",
    description: `Most students reach the same point: they have an idea—perhaps something built over a weekend or several months—but no clear sense of what to do next.

Most programs assume they have already moved beyond this stage. Accelerators expect a pitch deck and traction, while many grants require incorporation and a year of financial statements. For students with only an idea and prototype, few resources are designed for where they actually are.

That is the gap I will focus on: how to determine whether an idea is worth pursuing before investing months in it, how to turn it into a fundable plan, and which Windsor-Essex resources are available now.

I will use my own business as an example. It was profitable when I shut it down, and I will show you the numbers on screen.`,
    isSubmitted: true,
  },
  {
    id: "mina-girges-001",
    title: "From Technical Expertise to Business Value",
    speaker: "Mina Girges",
    description: `Technology leadership is evolving. While technical expertise remains essential, today’s leaders are expected to understand the business, identify where technology can create meaningful value, and translate complex technical decisions into measurable enterprise outcomes.

This session explores the transition from technical expert to technology leader and, ultimately, to enterprise value creator. It examines how technology leaders can connect investments to productivity, growth, customer experience, resilience, risk management, and organizational performance; build teams and operating models that create leverage; and shift the conversation from what technology is being implemented to what business outcome it enables.

Join us to explore one central question: How can technology leaders turn technical capability into measurable business value?`,
    isSubmitted: true,
  },
  {
    id: "sandra-lopez-zamora-001",
    title: "“It Worked in the Demo”: Evaluating Agents Before Your User Does",
    speaker: "Sandra Lopez-Zamora",
    description: `Your agent nailed the demo, but then real users showed up with vague questions, unexpected paths, and edge cases, and it gave confident answers that were quietly wrong. Agents fail differently from traditional software: they’re non-deterministic, they make multi-step decisions, and they’ll happily report a task as done when it isn’t.

This session shows a practical way to evaluate agents before your users end up doing the testing for you. Using Gemini Enterprise Agent Platform, we will go beyond checking the final answer to evaluate tool choices, trajectories, and safety behaviour. We will also generate realistic test scenarios, so you aren’t limited to the cases you thought of, and use the results to find and fix what’s breaking.

You will leave with a clear model for agent evaluation that you can apply to your own agents, whether you’re shipping your first prototype or running agents in production.`,
    isSubmitted: true,
  },
];