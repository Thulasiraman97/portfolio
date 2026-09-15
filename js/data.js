/* ==========================================================================
   Portfolio Data Store (Thulasiraman S)
   ========================================================================== */

const portfolioData = {
  profile: {
    name: "Thulasiraman S",
    role: "Senior Automation Engineer & AI Agent Workflow Specialist",
    shortBio: "Automation Engineer with 5+ years of experience in orchestrating autonomous workflows, test automation frameworks, and AI agent architectures. Specializing in Python, n8n, Power Automate, Selenium, and OpenClaw.",
    email: "thulasisiva97@gmail.com",
    location: "Cuddalore / Chennai, India",
    status: "Available for Enterprise Roles & Freelance Automation",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    whatsapp: "https://wa.me/"
  },

  skills: [
    // AI & Agentic Frameworks
    { name: "Antigravity", category: "ai", icon: "cpu", level: "Expert", desc: "Agentic workflow execution & reasoning" },
    { name: "Claude Code", category: "ai", icon: "terminal", level: "Advanced", desc: "Autonomous CLI agent toolchain" },
    { name: "OpenClaw", category: "ai", icon: "activity", level: "Advanced", desc: "Next-gen agentic framework exploration" },
    { name: "Open Code", category: "ai", icon: "code", level: "Advanced", desc: "Open-source agentic scaffolding" },

    // Automation & Orchestration
    { name: "n8n", category: "automation", icon: "git-merge", level: "Expert", desc: "Self-hosted & cloud workflow orchestration" },
    { name: "Power Automate", category: "automation", icon: "zap", level: "Expert", desc: "Enterprise robotic process automation (RPA)" },
    { name: "Zapier", category: "automation", icon: "shuffle", level: "Advanced", desc: "Multi-app trigger & action integrations" },
    { name: "Notion Workflows", category: "automation", icon: "database", level: "Proficient", desc: "Database automations & project tracking" },

    // Test Engineering & QA
    { name: "Selenium with Java", category: "testing", icon: "check-circle", level: "Expert", desc: "Cross-browser end-to-end test suites" },
    { name: "Postman", category: "testing", icon: "send", level: "Expert", desc: "REST API automated validation & mocking" },
    { name: "Product Validation", category: "testing", icon: "shield-check", level: "Expert", desc: "Quality assurance & defect lifecycle management" },

    // Scripting & Development
    { name: "Python", category: "dev", icon: "code-2", level: "Expert", desc: "Scripting, ETL pipelines, and API integrations" },
    { name: "JavaScript", category: "dev", icon: "layers", level: "Advanced", desc: "Async workflow scripts, Node.js & DOM scripting" },
    { name: "Socket.IO", category: "dev", icon: "radio", level: "Advanced", desc: "Real-time bidirectional event communication" },
    { name: "Fullstack Java", category: "dev", icon: "coffee", level: "Proficient", desc: "Backend service architecture & OOP patterns" },

    // Analytics & Enterprise Tools
    { name: "Power BI", category: "tools", icon: "bar-chart-2", level: "Proficient", desc: "Interactive dashboards & KPI reporting" },
    { name: "Slack API", category: "tools", icon: "hash", level: "Expert", desc: "Bot integrations, webhooks & modal forms" },
    { name: "HappyFox API", category: "tools", icon: "headphones", level: "Advanced", desc: "Helpdesk workflow automation & ticket routing" }
  ],

  projects: [
    {
      id: "whatsapp-ai-chatbot",
      title: "WhatsApp AI Chatbot for Product Support",
      category: "ai",
      categoryLabel: "AI & Agents",
      summary: "Real-time conversational AI support agent integrated into WhatsApp to resolve common queries, guide troubleshooting, and reduce support workload.",
      problem: "Support teams faced overwhelming volumes of repetitive product support queries and manual ticket handling delays.",
      solution: "Engineered an intelligent conversational AI agent connected to WhatsApp API. Leveraged LLM context routing and decision trees to deliver accurate answers, troubleshoot bugs, and escalate edge cases.",
      impact: "Reduced tier-1 ticket volume by 45%, achieved sub-3-second automated response times, and boosted customer satisfaction scores.",
      technologies: ["AI Agents", "Python", "WhatsApp API", "n8n", "Postman"],
      featured: true
    },
    {
      id: "eod-email-automation",
      title: "Daily EOD Email & Data Pipeline Automation",
      category: "automation",
      categoryLabel: "Workflow RPA",
      summary: "Automated end-to-end data consolidation pipeline extracting daily metrics from Excel and dispatching formatted executive summaries via Outlook.",
      problem: "Teams spent over 90 minutes every day manually consolidating spreadsheets from disparate sources and sending fragmented EOD reports.",
      solution: "Developed an automated pipeline using Python scripting for data parsing and cleaning, orchestrated with Microsoft Power Automate to format executive digests and schedule delivery via Outlook.",
      impact: "Saved 7.5+ hours of manual labor per week per supervisor, eliminated human data entry errors, and ensured 100% on-time EOD dispatch.",
      technologies: ["Power Automate", "Python", "Excel Automation", "Outlook API"],
      featured: true
    },
    {
      id: "slack-ticket-collaboration",
      title: "Slack Ticket Sync & Real-time Collaboration Engine",
      category: "integrations",
      categoryLabel: "Integrations",
      summary: "Synchronized HappyFox helpdesk tickets with Slack channels in real time, auto-generating discussion threads and routing to assigned engineers.",
      problem: "Engineers experienced notification fatigue and slow turnaround times switching between browser-based helpdesk portals and communication tools.",
      solution: "Architected a bi-directional integration using JavaScript, Socket.IO, and the Slack Web API. Whenever a ticket is raised in HappyFox, an interactive card is posted into Slack with automatic assignee routing.",
      impact: "Cut average ticket first-response time by 60% and centralized team troubleshooting into dedicated searchable Slack threads.",
      technologies: ["JavaScript", "Slack API", "Socket.IO", "HappyFox Webhooks", "Node.js"],
      featured: true
    },
    {
      id: "selenium-enterprise-qa",
      title: "Automated Regression Test Suite Framework",
      category: "testing",
      categoryLabel: "Test Engineering",
      summary: "Comprehensive Selenium Java test automation framework with parallel execution, dynamic reporting, and continuous test validation.",
      problem: "Manual regression testing of high-complexity enterprise applications was taking multiple days before each production release.",
      solution: "Designed a modular Page Object Model (POM) Selenium automation framework with data-driven testing, automated screen capture on failure, and CI pipeline triggers.",
      impact: "Reduced release regression testing cycle from 3 days to under 45 minutes with 99.8% test execution reliability.",
      technologies: ["Selenium", "Java", "TestNG", "Postman", "Maven"],
      featured: false
    }
  ],

  experience: [
    {
      role: "Senior Automation Tester",
      company: "Hema's Enterprise Private Limited",
      location: "Cuddalore, India",
      period: "2019 - Present (5+ Years)",
      type: "Full-Time",
      description: "Leading quality engineering and enterprise automation initiatives. Architecting automated testing frameworks and orchestrating intelligent workflows across internal tools.",
      achievements: [
        "Spearheaded the design and deployment of scalable automation workflows using n8n and Microsoft Power Automate.",
        "Built robust Selenium test suites ensuring consistent product validation and high-frequency delivery across product suites.",
        "Conducted API testing with Postman, validating contracts and orchestrating automated regression test runs.",
        "Pioneered the exploration and internal adoption of AI agent frameworks (OpenClaw, Claude Code, Antigravity) to modernize operational processes."
      ],
      technologies: ["Selenium with Java", "Python", "n8n", "Power Automate", "Postman", "Power BI", "Slack"]
    },
    {
      role: "Freelance Automation & Workflow Consultant",
      company: "Independent Practice",
      location: "Remote / Hybrid",
      period: "Ongoing",
      type: "Contract / Freelance",
      description: "Providing custom automation architectures, document management pipelines, and AI agent orchestration for businesses looking to scale operations.",
      achievements: [
        "Delivered custom zero-touch document processing and email dispatch pipelines for external clients.",
        "Designed conversational chatbots and webhook integrations linking Slack, WhatsApp, and CRM databases.",
        "Consulted on quality assurance strategy and test suite modernizations for startups and mid-market teams."
      ],
      technologies: ["n8n", "Python", "Zapier", "JavaScript", "AI Agents", "Socket.IO"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Engineering (B.E.)",
      institution: "Alpha College of Engineering",
      location: "Chennai, India",
      period: "06/2015 - 06/2019",
      description: "Foundational computer science, engineering principles, algorithms, and software development methodologies."
    }
  ],

  certifications: [
    {
      name: "Automation Testing Certification",
      issuer: "Greens Technology",
      focus: "Advanced Selenium WebDriver, Framework Design, TestNG, and CI/CD Integration."
    },
    {
      name: "Fullstack Java Developer Certification",
      issuer: "Inmakes",
      focus: "Core Java, Enterprise OOP, RESTful Services, and Modern Web Architecture."
    }
  ],

  achievements: [
    {
      icon: "zap",
      title: "5+ Years Enterprise Experience",
      detail: "Proven track record delivering mission-critical quality engineering and business workflow automations."
    },
    {
      icon: "trending-up",
      title: "100+ Automated Workflows",
      detail: "Architected multi-step automations across n8n, Power Automate, Python, and custom API webhooks."
    },
    {
      icon: "check-circle-2",
      title: "99.8% Test Execution Reliability",
      detail: "Built automated regression testing suites that eliminated manual QA bottlenecks and production leaks."
    },
    {
      icon: "clock",
      title: "40+ Weekly Hours Reclaimed",
      detail: "Eliminated repetitive manual data entry, reporting, and ticket dispatch tasks across multiple team units."
    }
  ]
};
