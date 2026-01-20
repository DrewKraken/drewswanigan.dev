"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Server,
  Workflow,
  FileSpreadsheet,
  FileText,
  GitBranch,
  Zap,
  Terminal,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ============================================================================
// Animation Variants
// ============================================================================

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.01,
    y: -4,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

// ============================================================================
// Section Wrapper
// ============================================================================

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// ============================================================================
// Status Configuration
// ============================================================================

type SystemStatus = "live" | "dev" | "beta";

const statusConfig: Record<
  SystemStatus,
  { label: string; dotColor: string; textColor: string }
> = {
  live: {
    label: "Live",
    dotColor: "bg-emerald-500",
    textColor: "text-emerald-500/80",
  },
  dev: {
    label: "In Development",
    dotColor: "bg-amber-500 animate-pulse",
    textColor: "text-amber-500/80",
  },
  beta: {
    label: "Beta",
    dotColor: "bg-sky-500",
    textColor: "text-sky-500/80",
  },
};

// ============================================================================
// Data
// ============================================================================

const productionSystems: Array<{
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  link: string;
  icon: typeof Server;
  status: SystemStatus;
}> = [
  {
    title: "WSPanel",
    tagline: "AWS infrastructure orchestration",
    description:
      "One-click EC2 deployment with secure IAM role assumption, lifecycle management, and automated teardown. Integrates Stripe billing, Clerk auth, and an AI-powered setup assistant for guided provisioning.",
    tech: ["AWS APIs", "IAM AssumeRole", "Stripe", "Clerk", "AI Assistant"],
    link: "https://wspanel.io",
    icon: Server,
    status: "dev",
  },
  {
    title: "KrakenServers",
    tagline: "Hosting platform control plane",
    description:
      "Full-stack control plane for game server hosting. Server provisioning workflows, Pterodactyl panel integration, billing automation, and lifecycle management APIs. Orchestration, state handling, and external system coordination.",
    tech: ["Stripe", "Clerk", "Pterodactyl API", "Host APIs"],
    link: "https://krakenservers.net",
    icon: Workflow,
    status: "beta",
  },
  {
    title: "InvoiceParser Pro",
    tagline: "PDF → structured data pipeline",
    description:
      "Automated extraction pipeline turning invoice PDFs into clean, structured Excel output. Python processing with validation and transformation, pay-per-use public tier, and private API access for high-volume clients.",
    tech: ["Python", "Data Pipeline", "Stripe", "REST API"],
    link: "https://invoiceparserpro.com",
    icon: FileSpreadsheet,
    status: "live",
  },
  {
    title: "DocumentEase",
    tagline: "Engineering documentation automation",
    description:
      "Python automation and advanced Excel formula engine to standardize commissioning and acceptance workflows. Built for repeatability, validation, and reduced manual error in engineering documentation.",
    tech: ["Python", "Excel Automation", "Workflow Systems"],
    link: "https://documentease.dev",
    icon: FileText,
    status: "live",
  },
];

const engineeringProjects = [
  {
    title: "github-issues-sync",
    description:
      "Minimal Node.js service demonstrating clean backend patterns: paginated API fetching, Zod schema validation, Prisma persistence, Fastify REST endpoints, idempotent upserts, and structured logging.",
    focus: "API integration · persistence · validation",
    link: "https://github.com/DrewKraken/github-issues-sync",
    icon: GitBranch,
  },
  {
    title: "PulseForge Engine",
    description:
      "Experimental developer automation engine with CLI-first workflows, sequential and composable pipelines, shared execution state, extensible architecture, and structured logging.",
    focus: "CLI tooling · pipeline architecture",
    link: "https://github.com/DrewKraken/pulseforge-engine",
    icon: Zap,
  },
];

// ============================================================================
// Constants
// ============================================================================

const LINKEDIN_URL = "https://www.linkedin.com/in/drew-swanigan-4935533a2/";
const GITHUB_URL = "https://github.com/DrewKraken";
const EMAIL = "hello@drewswanigan.dev";

// ============================================================================
// Navigation
// ============================================================================

function Nav() {
  const navLinks = [
    { href: "#systems", label: "Systems" },
    { href: "#projects", label: "Projects" },
    { href: "#background", label: "Background" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/40 bg-zinc-950/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a
          href="#"
          className="text-sm font-medium text-zinc-300 hover:text-white transition-colors tracking-tight"
        >
          drew<span className="text-zinc-600">swanigan</span>.dev
        </a>
        <div className="flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-[13px] text-zinc-500 hover:text-zinc-200 transition-colors rounded-md hover:bg-zinc-800/60"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

// ============================================================================
// Hero
// ============================================================================

function Hero() {
  return (
    <Section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-20 pb-16">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-radial from-cyan-500/[0.06] via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-violet-500/[0.03] via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        {/* Status indicator */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center gap-3 mb-8"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            building in production
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-zinc-50 mb-6 leading-[1.1]"
        >
          Drew Swanigan
        </motion.h1>

        {/* Positioning */}
        <motion.p
          variants={fadeInUp}
          className="text-xl sm:text-2xl text-zinc-400 mb-4 leading-relaxed font-light"
        >
          Backend engineer building{" "}
          <span className="text-zinc-200">production SaaS platforms</span> and{" "}
          <span className="text-zinc-200">infrastructure automation systems</span>.
        </motion.p>

        {/* Focus areas */}
        <motion.p
          variants={fadeInUp}
          className="text-base text-zinc-500 mb-12 font-mono"
        >
          APIs · workers · orchestration · integrations · automation
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center gap-3"
        >
          <Button asChild size="lg" className="font-medium">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            asChild
            className="font-medium"
          >
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={`mailto:${EMAIL}`}>
              <Mail className="mr-2 h-4 w-4" />
              Email
            </a>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}

// ============================================================================
// System Card (Production)
// ============================================================================

function SystemCard({
  system,
}: {
  system: (typeof productionSystems)[0];
}) {
  const Icon = system.icon;
  const status = statusConfig[system.status];

  return (
    <motion.div variants={fadeInUp}>
      <motion.a
        href={system.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.div
          variants={cardHover}
          className="relative h-full rounded-xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm p-6 transition-colors duration-300 hover:border-zinc-700/80 hover:bg-zinc-900/60 overflow-hidden"
        >
          {/* Hover glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] via-transparent to-violet-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Top row: icon + status + arrow */}
          <div className="relative flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-zinc-800/80 border border-zinc-700/60 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 transition-all duration-300">
                <Icon className="h-5 w-5 text-zinc-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </div>
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${status.dotColor}`} />
                <span
                  className={`text-[11px] font-mono uppercase tracking-wide ${status.textColor}`}
                >
                  {status.label}
                </span>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
          </div>

          {/* Title + tagline */}
          <div className="relative mb-3">
            <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
              {system.title}
            </h3>
            <p className="text-sm text-zinc-500 font-mono">{system.tagline}</p>
          </div>

          {/* Description */}
          <p className="relative text-sm text-zinc-400 leading-relaxed mb-5">
            {system.description}
          </p>

          {/* Tech tags */}
          <div className="relative flex flex-wrap gap-1.5">
            {system.tech.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-800/60 border border-zinc-700/40 text-zinc-500 group-hover:text-zinc-400 group-hover:border-zinc-600/50 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.a>
    </motion.div>
  );
}

// ============================================================================
// Production Systems Section
// ============================================================================

function ProductionSystems() {
  return (
    <Section id="systems" className="px-6 py-28">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div variants={fadeInUp} className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-cyan-500/60 to-transparent" />
            <span className="text-xs font-mono text-cyan-500/80 uppercase tracking-widest">
              Production
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4 tracking-tight">
            Systems in Production
          </h2>
          <p className="text-zinc-400 max-w-2xl leading-relaxed">
            Real platforms with real users. Each system integrates third-party APIs, 
            persistent data layers, and operational workflows—not starter templates.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {productionSystems.map((system) => (
            <SystemCard key={system.title} system={system} />
          ))}
        </div>
      </div>
    </Section>
  );
}

// ============================================================================
// Project Row (Engineering)
// ============================================================================

function ProjectRow({
  project,
}: {
  project: (typeof engineeringProjects)[0];
}) {
  const Icon = project.icon;

  return (
    <motion.div variants={fadeInUp}>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col sm:flex-row sm:items-start gap-4 p-5 rounded-lg border border-zinc-800/50 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-zinc-700/60 transition-all duration-300"
      >
        {/* Icon */}
        <div className="shrink-0 p-2 rounded-md bg-zinc-800/50 border border-zinc-700/40 group-hover:border-zinc-600/50 transition-colors">
          <Icon className="h-4 w-4 text-zinc-500 group-hover:text-zinc-400 transition-colors" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <h3 className="text-base font-medium text-zinc-200 group-hover:text-white transition-colors font-mono">
              {project.title}
            </h3>
            <ExternalLink className="h-3.5 w-3.5 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
          </div>
          <p className="text-sm text-zinc-500 mb-2 leading-relaxed">
            {project.description}
          </p>
          <span className="text-xs font-mono text-zinc-600">
            {project.focus}
          </span>
        </div>
      </a>
    </motion.div>
  );
}

// ============================================================================
// Engineering Projects Section
// ============================================================================

function EngineeringProjects() {
  return (
    <Section
      id="projects"
      className="px-6 py-28 bg-gradient-to-b from-zinc-950 via-zinc-900/30 to-zinc-950"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div variants={fadeInUp} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="h-4 w-4 text-zinc-600" />
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
              Open Source
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-200 mb-3 tracking-tight">
            Engineering Projects
          </h2>
          <p className="text-zinc-500 max-w-lg text-sm">
            Focused backend work demonstrating clean patterns. Architecture over cleverness.
          </p>
        </motion.div>

        {/* List */}
        <div className="space-y-3">
          {engineeringProjects.map((project) => (
            <ProjectRow key={project.title} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}

// ============================================================================
// Background Section
// ============================================================================

function Background() {
  return (
    <Section id="background" className="px-6 py-28">
      <div className="max-w-3xl mx-auto">
        <motion.div variants={fadeInUp} className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-zinc-600 to-transparent" />
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
              Context
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-200 tracking-tight">
            Production Systems Background
          </h2>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <div className="relative pl-6 border-l-2 border-zinc-800">
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              I currently work in mission-critical infrastructure, where I deploy, 
              commission, and troubleshoot live production systems across networking, 
              virtualization, and site environments, while building software systems 
              in parallel.
            </p>
            <p className="text-base text-zinc-400 leading-relaxed">
              That background heavily shapes how I write software. I care a lot about 
              clear failure modes, observability, and avoiding &quot;magic.&quot; I try to write 
              code other engineers can actually pick up, understand, and debug at 2 AM.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

// ============================================================================
// Contact Section
// ============================================================================

function Contact() {
  return (
    <Section
      id="contact"
      className="px-6 py-28 bg-gradient-to-b from-zinc-950 to-zinc-900/40"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4 tracking-tight">
            Let&apos;s connect
          </h2>
          <p className="text-zinc-500 mb-10 max-w-md mx-auto">
            Open to backend engineering, platform development, and infrastructure
            automation roles.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild size="lg" className="font-medium">
            <a href={`mailto:${EMAIL}`}>
              <Mail className="mr-2 h-4 w-4" />
              {EMAIL}
            </a>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            asChild
            className="font-medium"
          >
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}

// ============================================================================
// Footer
// ============================================================================

function Footer() {
  return (
    <footer className="border-t border-zinc-800/40 px-6 py-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
        <p className="font-mono">© {new Date().getFullYear()} Drew Swanigan</p>
        <p>Next.js · Tailwind · TypeScript</p>
      </div>
    </footer>
  );
}

// ============================================================================
// Main Page
// ============================================================================

export default function Home() {
  return (
    <main className="relative bg-zinc-950 min-h-screen overflow-x-hidden">
      {/* Subtle grid overlay */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-100" />

      {/* Noise texture */}
      <div className="fixed inset-0 bg-noise pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <Nav />
        <Hero />
        <ProductionSystems />
        <EngineeringProjects />
        <Background />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
