import { ValueSection } from "@/types/values";

export const ourValuesContent: ValueSection[] = [
  {
    id: "philosophy",
    heading: "Our Core Philosophy: The Developer First",
    intro:
      "In an era where software eats the world, the tools used to create that software define the boundaries of what is possible. We believe that the code editor is not merely a text input field; it is the canvas upon which the future is architected.",
    image: {
      src: "/images/values/philosophy-editor.png",
      alt: "A minimalist code editor interface showing clean syntax highlighting",
    },
    buttons: [
      { text: "Read Our Manifesto", url: "/manifesto", variant: "black" },
    ],
    subSections: [
      {
        subHeading: "The cognitive cost of complexity",
        content:
          "Modern software development has become exponentially complex. Developers are expected to juggle microservices, containerization, cloud infrastructure, frontend frameworks, and database schemas simultaneously. We aggressively abstract away configuration hell.",
      },
      {
        subHeading: "The invisible interface",
        content:
          "We subscribe to the design principle of the 'Invisible Interface.' The best tool is the one you forget you are using. Our UI is intentionally minimalist, stripping away non-essential chrome and distractions.",
      },
    ],
  },
  {
    id: "values",
    heading: "Our Values: Speed, Simplicity, Empowerment",
    intro:
      "Our values are not just marketing slogans; they are the engineering constraints we apply to every pull request and every design mockup. We reject the notion that powerful software must be slow.",
    image: {
      src: "/images/values/performance-graph.png",
      alt: "Graph showing microsecond latency response times",
    },
    buttons: [
      { text: "View Benchmarks", url: "/performance", variant: "default" },
      { text: "Design Principles", url: "/design", variant: "outline" },
    ],
    subSections: [
      {
        subHeading: "Speed is a feature, not an optimization",
        content:
          "In our hierarchy of needs, performance sits at the very top. We measure latency in microseconds, not milliseconds. We understand that the feedback loop between a keystroke and the screen appearing is critical for maintaining 'Flow State.'",
        bulletPoints: [
          "Zero-latency typing: The screen updates the instant you press a key.",
          "Instant startup: You shouldn't have to wait for your tools to warm up.",
          "Large file handling: Open gigabyte-sized log files without crashing.",
        ],
      },
      {
        subHeading: "Simplicity through subtraction",
        content:
          "It is easy to add features; it is difficult to curate them. We practice 'Simplicity through Subtraction.' We aim for sensible defaults over exhaustive configuration.",
      },
      {
        subHeading: "Empowerment via extensibility",
        content:
          "While we value simplicity, we refuse to lock our users into a walled garden. Our plugin architecture is designed to be robust and safe, allowing for deep customization without compromising stability.",
      },
    ],
  },
  {
    id: "mission",
    heading: "Our Mission: Redefining the Experience",
    intro:
      "Our mission extends beyond selling a software license. We are on a crusade to redefine what it feels like to write code. We are bringing consumer-grade polish and joy to developer-grade tools.",
    image: {
      src: "/images/values/flow-state.png",
      alt: "Developer working in a focused environment",
    },
    subSections: [
      {
        subHeading: "Protecting the 'Flow State'",
        content:
          "Psychological research shows that it takes an average of 23 minutes to return to a deep state of concentration after an interruption. Our mission is to eliminate the micro-interruptions caused by tooling.",
      },
      {
        subHeading: "Bridging the gap between design and logic",
        content:
          "Code is not just logic; it is the structure of the internet. We aim to bridge the gap between visual design and logical implementation by integrating features like live previews and real-time visual debugging.",
      },
      {
        subHeading: "Democratizing high-performance tooling",
        content:
          "We believe that a student in a developing nation with a low-spec Chromebook deserves the same high-quality coding experience as a senior engineer at a FAANG company.",
      },
    ],
  },
  {
    id: "commitment",
    heading: "Our Commitment: Quality & Reliability",
    intro:
      "Trust is earned in drops and lost in buckets. We know that developers rely on our tools to earn their livelihoods, build their startups, and maintain critical infrastructure.",
    image: {
      src: "/images/values/security-shield.png",
      alt: "Abstract representation of secure and reliable software",
    },
    buttons: [
      { text: "Security Policy", url: "/security", variant: "outline" },
    ],
    subSections: [
      {
        subHeading: "Reliability as the baseline",
        content:
          "A code editor simply cannot crash. We employ rigorous automated testing, fuzz testing, and beta programs to catch regressions before they hit production.",
      },
      {
        subHeading: "Intentional architecture",
        content:
          "Every line of code in SyntaxaEdit is there for a reason. We avoid 'dependency bloat' and audit our dependencies strictly to ensure security and performance.",
      },
      {
        subHeading: "Privacy by design",
        content:
          "Your code is your intellectual property. Unless you explicitly opt-in to cloud features, your code never leaves your machine. We do not train models on your private repositories without consent.",
      },
    ],
  },
  {
    id: "community",
    heading: "Community & Collaboration",
    intro:
      "Software is a team sport. No tool exists in a vacuum. We are committed to fostering a vibrant, inclusive, and helpful community around SyntaxaEdit.",
    image: {
      src: "/images/values/community-map.png",
      alt: "Global map connecting developers",
    },
    buttons: [
      { text: "Join Discord", url: "https://discord.gg/syntaxa", variant: "default" },
      { text: "GitHub", url: "https://github.com/syntaxa", variant: "ghost" },
    ],
    subSections: [
      {
        subHeading: "The Open Source spirit",
        content:
          "We contribute back to the language servers, parsers, and UI libraries we use. By open-sourcing our plugin API, we invite the community to build with us, not just for us.",
      },
      {
        subHeading: "Listening to the signal",
        content:
          "We maintain active channels of communication with our users. Our roadmap is not dictated by a boardroom; it is shaped by the needs of the people typing the code.",
      },
    ],
  },
  {
    id: "future",
    heading: "The Future of Development",
    intro:
      "We are standing at an inflection point in the history of computer science. Artificial Intelligence is changing not just how we write code, but what code represents.",
    image: {
      src: "/images/values/ai-future.png",
      alt: "Futuristic visualization of AI assisted coding",
    },
    buttons: [
      { text: "View Roadmap", url: "/roadmap", variant: "outline" },
    ],
    subSections: [
      {
        subHeading: "AI as a co-pilot, not a captain",
        content:
          "We integrate AI not to replace the developer, but to augment their capabilities. We believe the future belongs to the '10x Developer' who leverages AI to handle boilerplate.",
      },
      {
        subHeading: "Ubiquity across platforms",
        content:
          "Developers work on iPads, in web browsers, and on headless servers. Our vision is a unified experience across all these surfaces with synced settings.",
      },
      {
        subHeading: "Sustainable software engineering",
        content:
          "Efficient code requires less energy. We are committed to promoting green coding practices and educating our community on digital waste.",
      },
    ],
  },
  {
    id: "conclusion",
    heading: "Join Us in Building the Future",
    intro:
      "We are building SyntaxaEdit because we love coding. We love the feeling of solving a hard problem and the satisfaction of a clean compile. We invite you to join us on this journey.",
    buttons: [
      { text: "Get Started Free", url: "/download", variant: "black" },
    ],
    subSections: [
      {
        subHeading: "A promise to our users",
        content:
          "We promise to respect your time, your intelligence, and your craft. We will continue to iterate, to optimize, and to listen. Thank you for trusting us with your workflow.",
      },
    ],
  },
];