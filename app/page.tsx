import Link from "next/link";
import { posts } from "./blog-data";
import { Corners, ECGLine, Footer, Navbar, PostCard, SectionLabel, StatusPill } from "./marketing-components";

const heroStats = [
  ["9", "Role-based workspaces"],
  ["20+", "Feature modules"],
  ["0-100", "Machine health score"],
  ["Real-time", "Firebase-backed sync"],
];

const painPoints = [
  ["Scattered records", "Notebooks, Excel sheets, and group chats hold the plant's maintenance history, nowhere connected."],
  ["Reactive maintenance", "No visibility into machine health until something breaks, so every fix starts from zero."],
  ["Slow handovers", "Shift changes lose context on open issues and safety incidents between the outgoing and incoming crew."],
  ["Stock surprises", "Critical spares run out with no early warning, stalling a repair that was otherwise ready to go."],
  ["No accountability trail", "Work gets completed with no sign-off, no cost capture, and no audit trail behind it."],
];

const triageFeatures = [
  ["01", "Multilingual trees", "Branching troubleshooting flows in English, Sinhala, Tamil, and Bengali."],
  ["02", "Safe operator diagnosis", "Any operator can safely diagnose and react to a fault without waiting on a technician."],
  ["03", "Supervisor authoring", "Supervisors build and edit custom triage flows per machine, no engineering help needed."],
  ["04", "A real differentiator", "No other CMMS in this class ships guided, multilingual triage as a core workflow."],
];

const modules = [
  ["01", "Machine Registry", "Full asset register, QR codes, documents, spare-parts links, and an automatic 0-100 health score."],
  ["02", "Breakdown Management", "Kanban board, severity/type/root-cause tracking, push/SMS/email/in-app alerts, QR-triggered reporting."],
  ["03", "Work Orders", "Full lifecycle from Draft to Closed, multi-technician checklists, time-segment tracking, parts requests, supervisor sign-off queue."],
  ["04", "Preventive Maintenance", "Calendar- or meter-based schedules, PM calendar view, compliance dashboard with per-machine/technician trends."],
  ["05", "Inventory & Parts", "Categorized catalog, multi-stage approval workflow, stock movement log, purchase orders, supplier management, Excel import."],
  ["06", "Contractors", "Registry, job tracking, invoice comparison, four-dimension performance rating: speed, quality, professionalism, communication."],
  ["07", "Shift Handovers", "Auto-compiled structured reports: pending work orders, ongoing breakdowns, low-stock alerts, watch-machine flags."],
  ["08", "Training & Certification", "Module libraries, quizzes, assignment tracking, trainee onboarding programme, auto-issued certificates."],
  ["09", "Guided Triage", "Multilingual (EN/SI/TA/BN) branching troubleshooting trees with a supervisor authoring tool."],
  ["10", "Safety Workspace", "Incident/near-miss/hazard reporting, permit-to-work with precautions, safety training calendar, safety analytics."],
  ["11", "Reports & Analytics", "One-click PDF/Excel/Google Sheets exports across 15+ report types, cross-module KPI dashboard."],
  ["12", "MOE Dashboard", "Single composite Machine Overall Effectiveness score blending availability, maintenance compliance, reliability, and health, with critical-machine alerts."],
];

const roles = [
  ["Plant Manager / Admin", "Company-wide dashboards, analytics, approvals, billing, full configuration control."],
  ["Maintenance Supervisor", "Work order assignment, sign-off queue, PM oversight, shift handovers, team performance."],
  ["Technician", "My Work Orders, breakdown response, PM checklists, parts requests, guided triage."],
  ["Store Keeper", "Inventory catalog, stock movements, purchase orders, low-stock alerts, supplier management."],
  ["HR / Training Officer", "Training module library, assignment tracking, trainee programmes, compliance reporting."],
  ["Safety Officer", "Safety dashboard, incident/near-miss register, permit-to-work, safety training calendar & analytics."],
  ["Floor Operator", "Fast breakdown reporting (incl. QR-triggered), guided troubleshooting, shift view."],
  ["Trainee", "Structured onboarding programme, quizzes, weekend self-reports, certificates."],
] as const;

const industries = ["Food & Beverage", "Dairy", "Pharmaceuticals", "Packaging", "Textiles", "Chemicals"];

const valueProps = [
  "One system, every module, nothing else to reconcile",
  "Real-time by default, backed by Firebase sync",
  "Health scoring that predicts risk before it breaks",
  "Nothing lost at shift change",
  "Audit-ready from day one",
  "Deploys fast, live in days, not months",
];

const pricingTiers = [
  { name: "Basic", price: "$29", period: "/mo", annual: "$278/year, 20% off monthly", limits: "10 machines · 10 inventory items · 10 PM schedules · 5 users", features: ["Core maintenance only"], popular: false },
  { name: "Workshop", price: "$59", period: "/mo", annual: "$566/year, 20% off monthly", limits: "100 machines · 10,000 items · unlimited PM · 20 users", features: ["Contractor management", "Shift handover, training & safety", "PM compliance dashboard", "Basic analytics"], popular: false },
  { name: "Factory Pro", price: "$249", period: "/mo", annual: "$2,390/year, 20% off monthly", limits: "1,500 machines · unlimited inventory & PM · 100 users", features: ["Everything in Workshop", "MOE trend analytics", "Machine comparison"], popular: true },
  { name: "Enterprise", price: "Contact Sales", period: "", annual: "", limits: "Unlimited machines, inventory, PM, users", features: ["TPM maturity roadmap & 5S scorecard", "Multi-site management", "Advanced reports hub", "SSO/SAML, custom integrations & API", "Dedicated support & SLA"], popular: false },
];

const securityPoints = [
  ["Multi-tenant by design", "Data never crosses a tenant boundary: each plant's data is fully isolated."],
  ["Cloud-hosted on Firebase", "Auth, Firestore, Storage, and Cloud Functions power the platform."],
  ["Enforced access control", "Role-based access is checked on every route and every write."],
  ["No on-site infrastructure", "Nothing to rack, patch, or maintain on the plant floor."],
];

const getStartedSteps = [
  ["01", "Discovery call", "30 minutes on fleet size, sites, and your current process."],
  ["02", "Guided demo", "Tailored to supervisor, store keeper, technician, or manager roles."],
  ["03", "Pilot rollout", "Go live on one line or site first."],
  ["04", "Full deployment", "Scale across sites, with roles pre-configured."],
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Triage />
        <Modules />
        <Roles />
        <Industries />
        <WhyFirmicore />
        <Pricing />
        <Security />
        <GetStarted />
        <Blog />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24">
      <div className="bp-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-x-0 top-[28%] opacity-35">
        <ECGLine height={140} />
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center rounded-full border border-pulse/40 px-3.5 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-pulse">
            Multi-tenant CMMS for process plants
          </div>
          <h1 className="mt-6 font-sora text-[44px] font-bold leading-[1.05] text-ink sm:text-[58px] lg:text-[62px]">
            Strength at the core <span className="text-pulse">of every machine.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-dim sm:text-lg">
            Run maintenance like a modern operation. FirmiCore replaces WhatsApp messages, paper logbooks, and spreadsheets
            with one connected system: machines, breakdowns, work orders, PM, spares, contractors, shift handovers,
            training, safety, and reporting, so every role works from the same real-time picture.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#cta-final" className="btn-glow rounded-lg bg-power px-5 py-3 font-medium text-white">
              Book a demo
            </Link>
            <Link href="#triage" className="rounded-lg border border-white/15 px-5 py-3 font-medium text-ink transition hover:border-pulse/50 hover:text-pulse">
              See guided triage ↓
            </Link>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-6">
            {heroStats.map(([num, label]) => (
              <div key={label} className="border-l border-pulse/30 pl-3 sm:pl-4">
                <div className="font-sora text-[24px] font-bold leading-none text-pulse sm:text-3xl">{num}</div>
                <div className="mt-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-mute">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6">
          <LiveFloorStatus />
        </div>
      </div>
    </section>
  );
}

function LiveFloorStatus() {
  const breakdowns = [
    ["#A-114 Conveyor Motor", "Reported 2 min ago · Critical", "Reported", "crit"],
    ["#A-098 Hydraulic Press", "Technician assigned · 14 min ago", "In Progress", "warn"],
  ] as const;

  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[40px] bg-pulse/10 blur-3xl" />
      <div className="shadow-glow relative overflow-hidden rounded-2xl border border-white/10 bg-navy-950/80 p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-ink-mute">Line 3, Packaging</div>
            <div className="mt-1 font-sora text-base font-bold text-ink">Live floor status</div>
          </div>
          <StatusPill tone="uptime">● Live</StatusPill>
        </div>
        <div className="mb-3.5 grid grid-cols-2 gap-2.5">
          <div className="rounded-lg border border-white/8 p-3">
            <div className="font-mono text-[10px] uppercase tracking-wider text-ink-mute">Machine health score</div>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="font-sora text-2xl font-bold text-uptime">87</span>
              <span className="text-[11px] text-ink-mute">/ 100</span>
            </div>
          </div>
          <div className="rounded-lg border border-white/8 p-3">
            <div className="font-mono text-[10px] uppercase tracking-wider text-ink-mute">MOE composite</div>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="font-sora text-2xl font-bold text-pulse">74</span>
              <span className="text-[11px] text-ink-mute">/ 100</span>
            </div>
          </div>
        </div>
        <div className="mb-4 grid grid-cols-3 gap-2.5">
          {[["Critical", "1", "text-crit"], ["Major", "2", "text-warn"], ["Minor", "4", "text-ink"]].map(([label, value, color]) => (
            <div key={label} className="rounded-lg border border-white/8 p-2.5">
              <div className="font-mono text-[10px] uppercase tracking-wider text-ink-mute">{label}</div>
              <div className={`font-sora text-lg font-bold ${color}`}>{value}</div>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {breakdowns.map(([title, meta, status, tone]) => (
            <div key={title} className="flex items-center justify-between rounded-lg border border-white/8 px-3 py-2.5">
              <div>
                <div className="text-[13px] font-medium text-ink">{title}</div>
                <div className="text-[11px] text-ink-mute">{meta}</div>
              </div>
              <StatusPill tone={tone}>{status}</StatusPill>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden py-24 sm:py-32">
      <div className="bp-grid-fine absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel tone="crit">The problem</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-sora text-[36px] font-bold leading-[1.05] sm:text-5xl">
          Records scattered. Maintenance reactive. Nothing tracked until it breaks.
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map(([title, body]) => (
            <div key={title} className="lift relative rounded-xl border border-white/8 bg-navy-800/40 p-6 hover:border-crit/40">
              <Corners />
              <h3 className="font-sora text-[17px] font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Triage() {
  return (
    <section id="triage" className="relative overflow-hidden border-y border-white/8 bg-navy-950 py-24 sm:py-32">
      <div className="bp-grid absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>The differentiator</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-sora text-[36px] font-bold leading-[1.05] sm:text-5xl">
          Guided Triage: multilingual, branching, <span className="text-pulse">built by your own supervisors.</span>
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-ink-dim">
          Branching troubleshooting trees in English, Sinhala, Tamil and Bengali let any operator safely diagnose and
          react to a fault, no waiting for a technician to arrive before something happens. A supervisor-facing
          authoring tool lets your team build custom triage flows per machine, without engineering help.
        </p>
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
          {triageFeatures.map(([num, title, body]) => (
            <div key={num} className="bg-navy-950 p-6">
              <div className="font-mono text-[13px] font-bold tracking-wide text-pulse">{num}</div>
              <h3 className="mt-3.5 font-sora text-[17px] font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Modules() {
  return (
    <section id="modules" className="relative overflow-hidden py-24 sm:py-32">
      <div className="bp-grid-fine absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>Core modules</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-sora text-[36px] font-bold leading-[1.05] sm:text-[48px]">
          Twenty-plus feature modules. <span className="text-pulse">One connected system.</span>
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map(([num, name, body]) => (
            <div key={num} className="lift relative rounded-xl border border-white/8 bg-navy-800/40 p-6 hover:border-pulse/30">
              <Corners />
              <div className="font-mono text-[12px] font-bold tracking-wide text-pulse">{num}</div>
              <h3 className="mt-3 font-sora text-[16.5px] font-bold text-ink">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roles() {
  return (
    <section id="roles" className="relative overflow-hidden border-y border-white/8 bg-navy-950 py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel tone="power">Built for every role</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-sora text-[36px] font-bold leading-[1.05] sm:text-5xl">
          Nine role-based workspaces. <span className="text-power-400">Exactly the access each one needs.</span>
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map(([name, body]) => (
            <div key={name} className="bg-navy-900 p-5">
              <div className="font-sora font-semibold text-ink">{name}</div>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>Who it&apos;s for</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-sora text-[36px] font-bold leading-[1.05] sm:text-5xl">
          Manufacturing and process plants running <span className="text-pulse">mid-to-large equipment fleets.</span>
        </h2>
        <div className="mt-10 flex flex-wrap gap-2.5">
          {industries.map((item) => (
            <span key={item} className="rounded-full border border-white/15 px-4 py-2.5 text-sm text-ink">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyFirmicore() {
  return (
    <section className="relative overflow-hidden border-y border-white/8 bg-navy-950 py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>Why plants choose FirmiCore</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-sora text-[36px] font-bold leading-[1.05] sm:text-5xl">
          One system, real-time by default, <span className="text-pulse">ready for audit from day one.</span>
        </h2>
        <div className="mt-12 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="mt-0.5 font-sora text-base font-bold text-pulse">✓</span>
              <span className="text-[14.5px] leading-relaxed text-ink-dim">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-32">
      <div className="bp-grid-fine absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>Pricing</SectionLabel>
        <h2 className="mt-4 font-sora text-[36px] font-bold sm:text-[48px]">
          Four tiers, scaled by <span className="text-pulse">fleet size and users.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-ink-dim">
          All limits and prices are indicative: confirm exact figures with sales before quoting a customer.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col gap-3.5 rounded-2xl p-6 text-left lift ${
                tier.popular ? "border-2 border-power bg-power/15 shadow-glow" : "border border-white/8 bg-navy-800/40"
              }`}
            >
              {tier.popular ? (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-power px-3 py-1 font-mono text-[10px] text-white">MOST POPULAR</div>
              ) : null}
              <h3 className="font-sora text-xl font-semibold">{tier.name}</h3>
              <div>
                <span className="font-sora text-3xl font-bold">{tier.price}</span>
                <span className="ml-1 text-sm text-ink-mute">{tier.period}</span>
              </div>
              {tier.annual ? <div className="text-xs text-ink-mute">{tier.annual}</div> : null}
              <div className="text-sm font-semibold text-ink-dim">{tier.limits}</div>
              <div className="flex flex-1 flex-col gap-1.5">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex gap-2 text-[12.5px] text-ink-dim">
                    <span className="text-pulse">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
              <Link href="#cta-final" className={`mt-2 block rounded-lg py-2.5 text-center text-sm font-medium ${tier.popular ? "btn-glow bg-power text-white" : "border border-white/15 text-ink hover:border-pulse/50"}`}>
                {tier.name === "Enterprise" ? "Talk to sales" : "Start trial"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Security() {
  return (
    <section id="security" className="relative overflow-hidden border-y border-white/8 bg-navy-950 py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel tone="power">Deployment & security</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-sora text-[36px] font-bold leading-[1.05] sm:text-5xl">
          Multi-tenant by design. <span className="text-power-400">Nothing crosses a tenant boundary.</span>
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {securityPoints.map(([title, body]) => (
            <div key={title}>
              <div className="font-sora text-[15px] font-bold text-pulse">{title}</div>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GetStarted() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>How you get started</SectionLabel>
        <h2 className="mt-4 font-sora text-[36px] font-bold sm:text-5xl">
          From discovery call <span className="text-pulse">to full deployment.</span>
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
          {getStartedSteps.map(([num, title, body]) => (
            <div key={num} className="bg-navy-900 p-6">
              <div className="font-mono text-[12px] font-bold tracking-wide text-pulse">{num}</div>
              <h3 className="mt-3 font-sora text-[15px] font-bold text-ink">{title}</h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-ink-dim">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section id="blog" className="relative overflow-hidden border-y border-white/8 bg-navy-950 py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>From the blog</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-sora text-[36px] font-bold leading-[1.05] sm:text-5xl">
          Notes on maintenance, uptime, <span className="text-pulse">and running a modern plant floor.</span>
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta-final" className="relative overflow-hidden py-28 text-center sm:py-36">
      <div className="bp-grid absolute inset-0 opacity-30" />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-70">
        <ECGLine height={190} />
      </div>
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <SectionLabel>Strength at the core</SectionLabel>
        <h2 className="mt-5 font-sora text-[44px] font-bold leading-[1.02] sm:text-[64px]">
          Strength at the core <br />
          <span className="text-pulse">of every machine.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-ink-dim">Bring one connected maintenance system to your plant floor.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="#" className="btn-glow rounded-lg bg-power px-6 py-3.5 font-medium text-white">
            Book a demo
          </Link>
          <Link href="#" className="px-6 py-3.5 font-medium text-pulse">
            Talk to sales
          </Link>
        </div>
        <div className="mt-8 font-mono text-[13px] leading-relaxed text-ink-mute">
          info@lumoraventures.com &nbsp;·&nbsp; +94 71 999 8500 &nbsp;·&nbsp; lumoraventures.com
          <br />
          Kurunegala Road, Kuliyapitiya 60200, Sri Lanka
        </div>
      </div>
    </section>
  );
}
