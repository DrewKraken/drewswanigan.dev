"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Server,
  Workflow,
  FileSpreadsheet,
  GitBranch,
  Zap,
  Terminal,
  ExternalLink,
  FileText,
  Radio,
} from "lucide-react";

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

const productionSystems: Array<{
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  link: string;
  icon: typeof Server;
  status: SystemStatus;
  flagship?: boolean;
}> = [
  {
    title: "InvoiceParser Pro",
    tagline: "AI-powered AP automation · flagship product",
    description:
      "Production B2B SaaS for accounting firms and SMBs. Multi-stage extraction pipeline (Azure Document Intelligence + GPT-4o with vision fallback), 13-layer currency resolver, math-validated outputs, and three end-to-end ERP integrations (QuickBooks, Xero, Zoho). Multi-tenant security from scratch — JWT, OAuth, TOTP, HMAC webhooks, audit-ready flows. Live with paying customers; 10K+ invoices processed in production.",
    tech: ["Python", "FastAPI", "Next.js 16", "PostgreSQL", "OpenAI", "Azure DI", "Stripe"],
    link: "https://invoiceparserpro.com",
    icon: FileSpreadsheet,
    status: "live",
    flagship: true,
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

const fieldPlatforms = [
  {
    group: "Comms Platforms",
    items: [
      "L3Harris VIDA",
      "MASTR V",
      "StatusAware",
      "UAS",
      "Two47",
      "SUMS",
      "VIDA Edge",
      "Motorola ASTRO P25",
      "Tait DMR / GridLink",
      "P25 Phase 1/2",
      "Simulcast",
      "BDA / DAS",
    ],
  },
  {
    group: "Dispatch Consoles",
    items: ["Avtec", "Zetron", "Symphony", "Telex"],
  },
  {
    group: "Infrastructure",
    items: [
      "Cisco Routing / Switching",
      "VLANs",
      "MPLS",
      "IP Backhaul",
      "Windows Server",
      "Linux",
      "SCADA",
      "DNP3",
      "RTU Integration",
    ],
  },
];

const fieldCustomers = [
  "AES Ohio",
  "EKPC",
  "DART",
  "Nellis AFB / Nevada DOE",
  "Iowa Statewide (RACOM)",
  "VELCO",
  "Madison County KY",
  "Clark County KY",
  "GSCP25",
  "Powhatan County VA",
  "Eastern Shore VA",
];

const LINKEDIN_URL = "https://www.linkedin.com/in/drewswanigan";
const GITHUB_URL = "https://github.com/DrewKraken";
const EMAIL = "hello@drewswanigan.dev";
const RESUME_URL = "/Drew_Swanigan_Resume.pdf";

function Nav() {
  const links = [
    { href: "#field", label: "Field" },
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
          {links.map((link) => (
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

function Hero() {
  return (
    <Section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-20 pb-16">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-radial from-cyan-500/[0.06] via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-violet-500/[0.03] via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          variants={fadeInUp}
          className="flex items-center gap-3 mb-8"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            building in production
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-zinc-50 mb-6 leading-[1.1]"
        >
          Drew Swanigan
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-xl sm:text-2xl text-zinc-400 mb-4 leading-relaxed font-light"
        >
          Mission-critical systems engineer.{" "}
          <span className="text-zinc-200">Public safety</span> +{" "}
          <span className="text-zinc-200">production SaaS</span>.
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="text-base text-zinc-500 mb-12 font-mono"
        >
          PSAP · P25 · dispatch consoles · APIs · workers · integrations
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center gap-3"
        >
          <Button asChild size="lg" className="font-medium">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            asChild
            className="font-medium"
          >
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
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

function FieldWork() {
  return (
    <Section id="field" className="px-6 py-28">
      <div className="max-w-5xl mx-auto">
        <motion.div variants={fadeInUp} className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <Radio className="h-4 w-4 text-cyan-500/80" />
            <span className="text-xs font-mono text-cyan-500/80 uppercase tracking-widest">
              Day Job
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4 tracking-tight">
            Public Safety Engineering
          </h2>
          <p className="text-sm font-mono text-zinc-500">
            Systems Engineer · AMK Services · 2020 – Present
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-10">
          <div className="relative pl-6 border-l-2 border-zinc-800">
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Mission-critical communications deployments for PSAPs, electric
              utilities, and federal customers. Full-lifecycle work: system
              design, FAT / ATP, multi-site commissioning, RF alignment,
              dispatch console integration, and zero-interruption cutover.
            </p>
            <p className="text-base text-zinc-400 leading-relaxed">
              Before the engineering side, I spent two years as a
              DOCJT-certified 911 telecommunicator at Georgetown-Scott County
              E911 — operating the same consoles I now install. Every cutover
              plan I write starts with &ldquo;what does the dispatcher feel at
              3 a.m.&rdquo;
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-6 bg-zinc-700" />
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
              Customer Deployments
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {fieldCustomers.map((customer) => (
              <span
                key={customer}
                className="px-2.5 py-1 text-[11px] font-mono rounded bg-zinc-900/60 border border-zinc-800/80 text-zinc-400"
              >
                {customer}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="space-y-6">
          {fieldPlatforms.map((group) => (
            <div key={group.group}>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-6 bg-zinc-700" />
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                  {group.group}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-800/60 border border-zinc-700/40 text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

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
          className={`relative h-full rounded-xl border bg-zinc-900/40 backdrop-blur-sm p-6 transition-colors duration-300 overflow-hidden ${
            system.flagship
              ? "border-cyan-500/30 hover:border-cyan-500/50 hover:bg-zinc-900/60"
              : "border-zinc-800/80 hover:border-zinc-700/80 hover:bg-zinc-900/60"
          }`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              system.flagship
                ? "from-cyan-500/[0.08] via-transparent to-violet-500/[0.04]"
                : "from-cyan-500/[0.03] via-transparent to-violet-500/[0.02]"
            } opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
          />

          <div className="relative flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-zinc-800/80 border border-zinc-700/60 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 transition-all duration-300">
                <Icon className="h-5 w-5 text-zinc-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${status.dotColor}`}
                />
                <span
                  className={`text-[11px] font-mono uppercase tracking-wide ${status.textColor}`}
                >
                  {status.label}
                </span>
                {system.flagship && (
                  <span className="text-[11px] font-mono uppercase tracking-wide text-cyan-400/80">
                    · Flagship
                  </span>
                )}
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
          </div>

          <div className="relative mb-3">
            <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
              {system.title}
            </h3>
            <p className="text-sm text-zinc-500 font-mono">{system.tagline}</p>
          </div>

          <p className="relative text-sm text-zinc-400 leading-relaxed mb-5">
            {system.description}
          </p>

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

function ProductionSystems() {
  return (
    <Section
      id="systems"
      className="px-6 py-28 bg-gradient-to-b from-zinc-950 via-zinc-900/30 to-zinc-950"
    >
      <div className="max-w-5xl mx-auto">
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
            What I ship independently. Real platforms with paying users —
            third-party API integrations, persistent data layers, and
            operational workflows that have to work the first time, every time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {productionSystems.map((system) => (
            <SystemCard key={system.title} system={system} />
          ))}
        </div>
      </div>
    </Section>
  );
}

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
        <div className="shrink-0 p-2 rounded-md bg-zinc-800/50 border border-zinc-700/40 group-hover:border-zinc-600/50 transition-colors">
          <Icon className="h-4 w-4 text-zinc-500 group-hover:text-zinc-400 transition-colors" />
        </div>

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

function EngineeringProjects() {
  return (
    <Section id="projects" className="px-6 py-28">
      <div className="max-w-5xl mx-auto">
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
            Focused backend work demonstrating clean patterns. Architecture
            over cleverness.
          </p>
        </motion.div>

        <div className="space-y-3">
          {engineeringProjects.map((project) => (
            <ProjectRow key={project.title} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function Background() {
  return (
    <Section
      id="background"
      className="px-6 py-28 bg-gradient-to-b from-zinc-950 via-zinc-900/30 to-zinc-950"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div variants={fadeInUp} className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-zinc-600 to-transparent" />
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
              Context
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-200 tracking-tight">
            From the dispatcher&rsquo;s chair to the engineering side
          </h2>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <div className="relative pl-6 border-l-2 border-zinc-800 space-y-6">
            <p className="text-lg text-zinc-300 leading-relaxed">
              Started in a 911 center. Two years of phone, radio, CAD, and
              dispatch console — every public safety agency in Scott County
              flowing through one chair. That&rsquo;s where I learned what
              actually goes wrong with mission-critical systems at 3 a.m.,
              and what dispatchers need from the people who build them.
            </p>
            <p className="text-base text-zinc-400 leading-relaxed">
              Moved to the engineering side in 2020. Same systems, different
              chair. Now I deploy and commission the consoles, P25
              infrastructure, and dispatch networks I used to operate. Software
              builds run in parallel — same discipline applied to code.
            </p>
            <p className="text-base text-zinc-400 leading-relaxed">
              That background shapes how I write code. I care about clear
              failure modes, observability, and avoiding &ldquo;magic.&rdquo;
              Try to write things other engineers can actually pick up and
              debug at 2 AM.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" className="px-6 py-28">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4 tracking-tight">
            Let&apos;s connect
          </h2>
          <p className="text-zinc-500 mb-10 max-w-xl mx-auto leading-relaxed">
            Open to Implementation Engineer, Solutions Engineer, and Technical
            Account Manager roles in public safety SaaS — and always happy to
            talk PSAP integration, P25 cutover war stories, or SaaS builder
            stuff.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild size="lg" className="font-medium">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            asChild
            className="font-medium"
          >
            <a href={`mailto:${EMAIL}`}>
              <Mail className="mr-2 h-4 w-4" />
              {EMAIL}
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <main className="relative bg-zinc-950 min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-100" />
      <div className="fixed inset-0 bg-noise pointer-events-none" />

      <div className="relative z-10">
        <Nav />
        <Hero />
        <FieldWork />
        <ProductionSystems />
        <EngineeringProjects />
        <Background />
        <Contact />

        <footer className="border-t border-zinc-800/40 px-6 py-6">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
            <p className="font-mono">© {new Date().getFullYear()} Drew Swanigan</p>
            <p>Next.js · Tailwind · TypeScript</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
