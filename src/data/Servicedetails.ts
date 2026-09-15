import type { ServiceId } from "./services";

export type ServiceDetail = {
  tagline: string;
  intro: string;
  provides: string[];
  capabilities: { title: string; description: string }[];
  tools: string[];
  benefits: string[];
  ctaTitle: string;
  ctaBody: string;
};

export const serviceDetails: Record<ServiceId, ServiceDetail> = {
  webDesign: {
    tagline: "Websites built to represent your business properly, and to keep working after launch.",
    intro:
      "A website is usually the first real interaction someone has with your business. Think Solutions designs and builds sites in React that load fast, look right on any screen, and are structured so they can grow as your business does — not a one-off template that gets abandoned after launch.",
    provides: [
      "A website built around your actual services, audience and goals — not a generic template with your logo dropped in.",
      "A responsive layout that works cleanly on phones, tablets and desktops, since most visitors will never see it on a desktop monitor.",
      "A clear structure that guides visitors toward the action you want — a form, a call, a booking — instead of just presenting information.",
      "Ongoing care after launch: content updates, small fixes and improvements as your business changes.",
    ],
    capabilities: [
      {
        title: "Responsive web design",
        description:
          "Every page is built to adapt to the device it's viewed on, so navigation, text and images stay usable whether someone lands on a phone or a large monitor.",
      },
      {
        title: "Modern UI/UX",
        description:
          "Layouts are planned around how people actually read and scan a page, so the important information and calls-to-action are easy to find rather than buried.",
      },
      {
        title: "Performance optimization",
        description:
          "Pages are built lean — optimized images, minimal unnecessary scripts — so the site loads quickly, which matters for both visitors and search ranking.",
      },
      {
        title: "SEO foundations",
        description:
          "Page structure, headings, metadata and load speed are handled correctly from the start, giving the site a proper technical foundation to be found on search engines.",
      },
      {
        title: "Custom functionality",
        description:
          "Contact forms, service search, interactive sections or anything specific to how your business operates, built directly into the site rather than bolted on.",
      },
      {
        title: "Integrations & deployment",
        description:
          "The site is connected to what it needs to be — email, booking tools, analytics — and deployed on reliable infrastructure with a smooth release process.",
      },
    ],
    tools: ["React", "TypeScript", "Responsive Design", "Vite", "SEO", "Performance Optimization"],
    benefits: [
      "A site that represents your business credibly from the first visit.",
      "Fewer visitors lost to slow load times or a broken mobile layout.",
      "A structure that makes it easier for people to actually contact or buy from you.",
      "A technical foundation that can be extended instead of rebuilt as you grow.",
    ],
    ctaTitle: "Thinking about a new website, or fixing up the one you have?",
    ctaBody: "Tell us where things stand today and what you need the site to do — we'll take it from there.",
  },
  socialMedia: {
    tagline: "A social presence that's planned, consistent, and actually built around your business.",
    intro:
      "Posting occasionally isn't a strategy. Think Solutions manages the planning, content and day-to-day presence of your social channels so they build a consistent, recognizable presence for your business instead of going quiet for weeks at a time.",
    provides: [
      "A content plan built around what your business actually offers, not generic filler posts.",
      "Regular management of your channels — posting, scheduling and monitoring — so your presence stays active.",
      "Content built to fit each platform properly rather than the same post recycled everywhere.",
      "Reporting on what's working, so decisions are based on results rather than guesswork.",
    ],
    capabilities: [
      {
        title: "Content strategy",
        description:
          "A plan for what to post, how often, and why — built around your business goals rather than trends for their own sake.",
      },
      {
        title: "Channel management",
        description:
          "Day-to-day handling of Instagram, Facebook and other platforms, including scheduling and basic community responses.",
      },
      {
        title: "Growth-focused presence",
        description:
          "Content and posting cadence aimed at building an audience that's actually relevant to your business, not just raising follower counts.",
      },
      {
        title: "Business presence & consistency",
        description:
          "A recognizable look and tone across channels, so your business feels the same wherever someone finds it.",
      },
    ],
    tools: ["Instagram", "Facebook", "Content Strategy", "Scheduling & Publishing", "Performance Reporting"],
    benefits: [
      "Channels that stay active instead of going stale between posts.",
      "A consistent brand presence across platforms.",
      "Content that's actually planned, not improvised the morning it's posted.",
      "A clearer picture of what content is working, based on real results.",
    ],
    ctaTitle: "Want your social channels to actually reflect the business behind them?",
    ctaBody: "Tell us which platforms matter most to you and what you're currently struggling to keep up with.",
  },
  dataSolutions: {
    tagline: "Turning scattered spreadsheets and systems into numbers you can actually act on.",
    intro:
      "Most businesses have the data they need to make better decisions — it's just spread across spreadsheets, exports and systems that don't talk to each other. Think Solutions organizes that data and builds dashboards and reports that make it usable day to day, not just once a year.",
    provides: [
      "Dashboards that show the numbers that actually matter to your business, updated and ready to check whenever you need them.",
      "Clean, organized data instead of scattered spreadsheets that are hard to trust.",
      "Reports built for the decisions you're actually making — sales, stock, performance — not generic templates.",
      "Automation of the repetitive parts of reporting, so numbers don't have to be pulled together by hand every time.",
    ],
    capabilities: [
      {
        title: "Dashboards & reporting",
        description:
          "Interactive dashboards built in Power BI or Looker Studio that give you a live view of the numbers that matter, instead of a static report that's outdated the day it's sent.",
      },
      {
        title: "Data analysis",
        description:
          "Looking past the raw numbers to explain what's actually happening in the business — trends, patterns, and what's driving them.",
      },
      {
        title: "Database management",
        description:
          "Structuring and maintaining data in MySQL or SQL so it stays accurate, organized and easy to query as it grows.",
      },
      {
        title: "Business insights",
        description:
          "Translating data into plain conclusions — what's working, what isn't, and where to focus — rather than leaving you to interpret raw charts.",
      },
      {
        title: "Automation",
        description:
          "Setting up recurring reports and data pipelines so routine numbers update themselves instead of needing to be rebuilt by hand each time.",
      },
    ],
    tools: ["Power BI", "Microsoft Excel", "MySQL", "SQL", "Looker Studio", "Dashboards & Reporting"],
    benefits: [
      "Decisions based on current numbers instead of gut feeling or outdated spreadsheets.",
      "Hours saved each month on manually pulling reports together.",
      "A single, trustworthy source for the numbers that matter to your business.",
      "Early visibility into problems or opportunities, instead of finding them too late.",
    ],
    ctaTitle: "Sitting on data you're not really using yet?",
    ctaBody: "Tell us what systems or spreadsheets you're working with and what you wish you could see clearly.",
  },
  uiUxGraphic: {
    tagline: "Design that looks professional and is actually built around how people use it.",
    intro:
      "Good design isn't just about looking polished — it's about making something easy to use and consistent across everywhere your business shows up. Think Solutions handles UI/UX for digital products and the graphic design your business needs day to day, from interfaces to social content.",
    provides: [
      "Interface design for websites and apps that's planned around how people actually navigate, not just visually styled after the fact.",
      "Social media graphics and visuals that are consistent with your brand across every platform.",
      "A visual identity that looks the same whether someone sees it on your site, your socials, or printed material.",
      "Design files and assets you actually own and can reuse going forward.",
    ],
    capabilities: [
      {
        title: "UI/UX design",
        description:
          "Planning how a user moves through an interface, then designing it so the experience is intuitive, not just visually appealing.",
      },
      {
        title: "Graphic design",
        description:
          "Design work for social posts, marketing material and business visuals, all built to a consistent standard.",
      },
      {
        title: "Social media graphics",
        description:
          "Templates and one-off visuals sized and styled correctly for each platform, keeping your feed cohesive.",
      },
      {
        title: "Business visuals",
        description:
          "Everyday design needs — presentations, one-pagers, simple brand assets — handled to a professional standard.",
      },
    ],
    tools: ["Figma", "Canva", "UI/UX Design", "Brand Visuals", "Social Graphics"],
    benefits: [
      "A consistent, professional look across your website, socials and materials.",
      "Interfaces that are easier for people to actually use, not just look at.",
      "Less time spent trying to design things in-house without the right tools or experience.",
      "A visual identity you can keep reusing rather than starting over each time.",
    ],
    ctaTitle: "Need design work that actually looks and feels consistent?",
    ctaBody: "Share what you're working on — a site, a set of social posts, a full visual identity — and we'll go from there.",
  },
  businessSupport: {
    tagline: "Practical digital help for the parts of the business that don't fit neatly anywhere else.",
    intro:
      "Not every business need fits neatly into 'website' or 'data' or 'design'. Think Solutions provides practical, tailored digital support for the everyday processes and problems businesses run into — the kind of work that quietly saves time once it's sorted out.",
    provides: [
      "Help identifying where digital tools could actually save you time, rather than adding more complexity.",
      "Practical solutions built around how your business currently operates, not a rigid one-size-fits-all package.",
      "Support with the processes that tend to get overlooked — file organization, basic workflow tools, small custom fixes.",
      "A responsive partner for digital problems that don't have an obvious owner internally.",
    ],
    capabilities: [
      {
        title: "Digital business support",
        description:
          "General, hands-on help with the digital side of running a business, wherever the gap happens to be.",
      },
      {
        title: "Process improvement",
        description:
          "Looking at how something is currently done and finding a more efficient, less manual way to do it.",
      },
      {
        title: "Practical digital solutions",
        description:
          "Small, focused tools or fixes built for a specific problem, rather than an oversized system you don't need.",
      },
      {
        title: "Tailored solutions",
        description:
          "Support shaped around your business specifically, since 'business support' looks different for every client.",
      },
    ],
    tools: ["Process Improvement", "Workflow Tools", "Custom Solutions", "Digital Operations"],
    benefits: [
      "Less time lost to manual, repetitive digital tasks.",
      "A clearer, more organized way of handling day-to-day digital work.",
      "A partner to bring in when a problem doesn't fit neatly into another category.",
      "Solutions built for how your business actually works, not a generic playbook.",
    ],
    ctaTitle: "Got a digital headache that doesn't fit anywhere else?",
    ctaBody: "Describe the problem as plainly as you'd like — we'll tell you honestly whether we're the right fit to help.",
  },
};