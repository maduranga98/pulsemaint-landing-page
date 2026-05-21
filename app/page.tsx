import Link from "next/link";
import { ECGLine, Footer, Navbar, SectionLabel, StatusPill } from "./marketing-components";

const problems = [
  ["No real-time tracking", "Breakdowns disappear into paper logs, calls, and floor chatter."],
  ["Repair team arrives blind", "Technicians reach machines without history, manuals, or parts context."],
  ["Operators stand idle", "Between report and response, production time burns without guidance."],
  ["Trainees operate unguided", "New staff handle complex equipment without safe-action support."],
  ["Phone bans break adoption", "Standard mobile-only apps fail where personal devices are restricted."],
  ["No prevention data", "Without structured history, every failure feels like the first one."],
];

const features = [
  ["Breakdown Management", "10-state lifecycle tracking with QR, WhatsApp, browser, mobile, and supervisor reporting.", "crit"],
  ["Work Order Management", "Team assignment, CAD uploads, parts pre-request, and digital sign-off with audit trails.", "power"],
  ["Operator Triage Engine", "Step-by-step safe-action guidance for operators during breakdowns.", "pulse"],
  ["Contractor Management", "Profiles, document expiry, job history, and invoice comparison.", "warn"],
  ["Inventory & Store Keeper", "Role-based parts control with approval workflows and Excel import.", "uptime"],
  ["Analytics & Reports", "Live KPIs, PDF and Excel exports, heatmaps, MTTR, and MTBF trends.", "pulse"],
] as const;

const roles = [
  "Floor Operator",
  "Trainee",
  "Technician",
  "Store Keeper",
  "Maint. Supervisor",
  "Plant Manager",
  "HR Officer",
  "Admin",
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Triage />
        <Industries />
        <Roles />
        <Pricing />
        <Roadmap />
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
          <div className="inline-flex items-center gap-2 rounded-full bg-pulse/5 px-3 py-1.5 ring-1 ring-pulse/30">
            <span className="h-1.5 w-1.5 rounded-full bg-pulse dot-pulse" />
            <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-pulse">Live · v1.0 shipping Q3 2026</span>
          </div>
          <h1 className="mt-6 font-sora text-[44px] font-bold leading-[1.02] text-ink sm:text-[58px] lg:text-[64px]">
            Every Breakdown.
            <br />
            Every Machine.
            <br />
            <span className="bg-gradient-to-r from-pulse via-pulse-400 to-power-400 bg-clip-text text-transparent">Under Control.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-dim sm:text-lg">
            PulseMaint is the mobile-first maintenance platform built for factory floors: real-time breakdown tracking,
            guided triage, and full repair history in one place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#pricing" className="btn-glow rounded-lg bg-power px-5 py-3 font-medium text-white">
              Start Free - 10 Machines
            </Link>
            <Link href="#how" className="rounded-lg border border-white/15 px-5 py-3 font-medium text-ink transition hover:border-pulse/50 hover:text-pulse">
              See How It Works
            </Link>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 sm:gap-6">
            {[["10", "State Breakdown Lifecycle"], ["8", "User Roles"], ["5", "Reporting Channels"]].map(([num, label]) => (
              <div key={label} className="border-l border-pulse/30 pl-3 sm:pl-4">
                <div className="font-sora text-[30px] font-bold leading-none text-pulse sm:text-4xl">{num}</div>
                <div className="mt-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-mute">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  const columns = [
    ["Reported", "crit", ["Spindle overheating", "Hydraulic leak", "Belt mis-tracking"]],
    ["In Progress", "power", ["Pressure valve replace", "Sensor recalibration"]],
    ["Resolved Today", "uptime", ["Coolant refill", "Heater band swap"]],
  ] as const;

  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[40px] bg-pulse/10 blur-3xl" />
      <div className="shadow-glow relative overflow-hidden rounded-2xl border border-white/10 bg-navy-950/80">
        <div className="flex items-center justify-between border-b border-white/8 bg-navy-900/70 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-crit/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-warn/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-uptime/70" />
            <span className="ml-3 font-mono text-[11px] text-ink-mute">pulsemaint.app / dashboard / live</span>
          </div>
          <span className="hidden font-mono text-[11px] text-uptime sm:inline">LIVE</span>
        </div>
        <div className="grid grid-cols-4 border-b border-white/8 text-center">
          {[["17", "Active"], ["4", "Critical"], ["42m", "MTTR"], ["99.2%", "Uptime"]].map(([value, label]) => (
            <div key={label} className="border-r border-white/5 py-2.5 last:border-0">
              <div className="font-sora text-[15px] font-semibold text-ink">{value}</div>
              <div className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-ink-mute">{label}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2 bg-[radial-gradient(800px_300px_at_50%_-50%,rgba(0,194,255,0.08),transparent)] p-3">
          {columns.map(([label, tone, cards]) => (
            <div key={label} className="min-h-[280px] rounded-lg border border-white/5 bg-navy-900/60 p-2">
              <div className="flex items-center justify-between px-1 py-1.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-ink-dim">{label}</span>
                <span className="font-mono text-[10px] text-ink-mute">{cards.length}</span>
              </div>
              <div className="mt-1 space-y-2">
                {cards.map((card, index) => (
                  <div key={card} className={`rounded-md border border-white/5 bg-navy-800/75 p-2 ${tone === "crit" ? "border-l-crit" : tone === "power" ? "border-l-power-400" : "border-l-uptime"} border-l-2`}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-ink-mute">BR-14{index + 1}0</span>
                      <StatusPill tone={tone}> {tone === "uptime" ? "DONE" : index === 0 ? "HIGH" : "MED"} </StatusPill>
                    </div>
                    <div className="mt-1.5 font-sora text-[12px] font-medium text-ink">CNC-0{index + 2} · Line A</div>
                    <div className="mt-0.5 text-[11px] text-ink-dim">{card}</div>
                  </div>
                ))}
              </div>
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
        <div className="mb-14 grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel tone="crit">The problem</SectionLabel>
            <h2 className="mt-4 font-sora text-[36px] font-bold leading-[1.05] sm:text-5xl">
              Factory maintenance <span className="text-crit">is broken.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-ink-dim lg:col-span-5">
            Six pain points we hear in every walkthrough. PulseMaint turns each one into a structured, visible workflow.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map(([title, body], index) => (
            <div key={title} className="lift relative rounded-xl border border-l-2 border-white/5 border-l-crit/60 bg-navy-800/50 p-6 hover:border-l-crit">
              <div className="absolute right-4 top-4 font-mono text-[10px] tracking-wider text-ink-mute">P0{index + 1}</div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-crit/10 text-crit ring-1 ring-crit/20">!</div>
              <h3 className="font-sora text-[17px] font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    ["01", "Report", "Supervisor scans a machine QR, sends WhatsApp, or logs via browser. Ticket created in under 30 seconds."],
    ["02", "Respond", "Technician gets an instant notification with history, manuals, and parts checklist pre-loaded."],
    ["03", "Resolve", "Repair is logged step-by-step. Root cause captured. Analytics recalculated instantly."],
  ];
  return (
    <section id="how" className="relative overflow-hidden py-24 sm:py-32">
      <div className="bp-grid absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8">
        <SectionLabel>How it works</SectionLabel>
        <h2 className="mt-4 font-sora text-[36px] font-bold leading-[1.05] sm:text-[52px]">
          Simple. Structured. <span className="text-pulse">Instant.</span>
        </h2>
        <div className="relative mt-14 grid gap-6 lg:grid-cols-3">
          <div className="absolute left-[12%] right-[12%] top-12 hidden h-px bg-gradient-to-r from-transparent via-pulse/50 to-transparent lg:block" />
          {steps.map(([num, title, body]) => (
            <div key={num} className="relative rounded-xl border border-white/8 bg-navy-800/40 p-6 text-left lift hover:border-pulse/30">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-pulse/5 text-pulse ring-1 ring-pulse/30">
                <span className="font-sora text-2xl font-bold">{num}</span>
              </div>
              <h3 className="font-sora text-2xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-24 sm:py-32">
      <div className="bp-grid-fine absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>The platform</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-sora text-[36px] font-bold leading-[1.05] sm:text-[52px]">
          One platform. Every maintenance problem <span className="text-pulse">solved.</span>
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(([title, body, tone]) => (
            <div key={title} className="lift rounded-xl border border-l-2 border-white/5 border-l-white/10 bg-navy-800/40 p-6 hover:border-l-pulse">
              <StatusPill tone={tone}>{title.split(" ")[0]}</StatusPill>
              <h3 className="mt-5 font-sora text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Triage() {
  const stages = ["Safety", "Assess", "Safe Actions", "Document", "Wait"];
  return (
    <section id="triage" className="relative overflow-hidden border-y border-white/8 bg-navy-950 py-28 sm:py-36">
      <div className="bp-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(700px_500px_at_75%_50%,rgba(0,194,255,0.18),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionLabel>Differentiator</SectionLabel>
          <h2 className="mt-6 font-sora text-[36px] font-bold leading-[1.05] sm:text-5xl">
            The only CMMS with <span className="text-pulse">guided operator triage.</span>
          </h2>
          <p className="mt-6 leading-relaxed text-ink-dim">
            PulseMaint walks operators through exact safe steps: check this gauge, shut down this way, document this evidence.
            Every action logged. Zero guesswork.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="shadow-glow rounded-2xl border border-white/10 bg-navy-950/75">
            <div className="border-b border-white/8 px-5 py-4 font-mono text-xs text-ink-mute">pulsemaint.app / triage / CNC-04</div>
            <div className="space-y-3 p-5">
              {stages.map((stage, index) => (
                <div key={stage} className={`flex items-center gap-4 rounded-lg border p-4 ${index === 2 ? "border-pulse/40 bg-pulse/5" : "border-white/8 bg-navy-800/40"}`}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pulse/10 font-sora font-bold text-pulse ring-1 ring-pulse/30">{index + 1}</div>
                  <div>
                    <div className="font-sora font-semibold">{stage}</div>
                    <div className="text-sm text-ink-dim">{index === 2 ? "Drain coolant, vent pressure, isolate power." : "Logged with timestamps and supervisor visibility."}</div>
                  </div>
                  <div className="ml-auto hidden sm:block">
                    <StatusPill tone={index < 2 ? "uptime" : index === 2 ? "pulse" : "mute"}>{index < 2 ? "Done" : index === 2 ? "Current" : "Pending"}</StatusPill>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8">
        <SectionLabel>Who it is for</SectionLabel>
        <h2 className="mt-4 font-sora text-[36px] font-bold sm:text-[52px]">
          Built for the <span className="text-pulse">factory floor.</span>
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {["Manufacturing & Production", "Food & Beverage", "Textile & Garment", "Pharmaceutical", "Electronics Assembly", "Industrial Warehouses", "BOI Industrial Zones"].map((item) => (
            <span key={item} className="rounded-full border border-white/8 bg-navy-800/60 px-4 py-2.5 text-sm text-ink">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roles() {
  return (
    <section id="roles" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel tone="power">Role-based access</SectionLabel>
        <h2 className="mt-4 font-sora text-[36px] font-bold leading-[1.05] sm:text-5xl">
          Right access. Right person. <span className="text-power-400">Right time.</span>
        </h2>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, index) => (
            <div key={role} className="lift rounded-xl border border-t-2 border-white/8 bg-navy-800/40 p-5" style={{ borderTopColor: index < 4 ? "#10B981" : index < 7 ? "#3B72E8" : "#00C2FF" }}>
              <div className="font-sora font-semibold">{role}</div>
              <p className="mt-2 text-sm text-ink-dim">Focused permissions for real floor responsibility.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    ["Starter", "Free", "10 machines", "3 users"],
    ["Workshop", "$16/mo", "50 machines", "15 users"],
    ["Factory", "$42/mo", "200 machines", "Unlimited users"],
    ["Enterprise", "Custom", "Unlimited", "Unlimited users"],
  ];
  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-32">
      <div className="bp-grid-fine absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8">
        <SectionLabel>Pricing</SectionLabel>
        <h2 className="mt-4 font-sora text-[36px] font-bold sm:text-[52px]">
          Per machine. <span className="text-pulse">Not per user.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-ink-dim">A factory with 200 machines and 10 staff pays $42/mo on PulseMaint vs far more on per-seat competitors.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {plans.map(([name, price, machines, users]) => (
            <div key={name} className={`relative rounded-2xl p-6 text-left lift ${name === "Factory" ? "border-2 border-power bg-power/15 shadow-glow" : "border border-white/8 bg-navy-800/40"}`}>
              {name === "Factory" ? <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-power px-3 py-1 font-mono text-[10px] text-white">MOST POPULAR</div> : null}
              <h3 className="font-sora text-2xl font-semibold">{name}</h3>
              <div className="mt-6 font-sora text-4xl font-bold">{price}</div>
              <div className="mt-2 text-sm text-ink-dim">{machines} · {users}</div>
              <Link href="#cta-final" className={`mt-6 block rounded-lg py-2.5 text-center text-sm font-medium ${name === "Factory" ? "btn-glow bg-power text-white" : "border border-white/15 text-ink hover:border-pulse/50"}`}>
                Start trial
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>Roadmap</SectionLabel>
        <h2 className="mt-4 font-sora text-[36px] font-bold sm:text-5xl">What is <span className="text-pulse">coming.</span></h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {["Phase 1 - MVP", "Phase 2 - Growth", "Phase 3 - Scale"].map((phase, index) => (
            <div key={phase} className={`rounded-xl p-6 ${index === 0 ? "border border-pulse/40 bg-pulse/10" : "border border-white/8 bg-navy-800/40"}`}>
              <div className="font-mono text-[11px] uppercase tracking-wider text-pulse">{phase}</div>
              <h3 className="mt-3 font-sora text-xl font-semibold">{index === 0 ? "Foundations" : index === 1 ? "Differentiation" : "Intelligence"}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">Breakdown, work orders, triage, inventory, reports, AI prediction, IoT, and ERP integrations.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta-final" className="relative overflow-hidden border-y border-white/8 bg-navy-950 py-28 text-center sm:py-36">
      <div className="bp-grid absolute inset-0 opacity-30" />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-70">
        <ECGLine height={190} />
      </div>
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <SectionLabel>The pulse of your plant</SectionLabel>
        <h2 className="mt-5 font-sora text-[44px] font-bold leading-[1.02] sm:text-[68px]">
          Keep the pulse <br />
          <span className="text-pulse">of your plant.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-ink-dim">Start free with 10 machines. No credit card required. Set up in under an hour.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="#" className="btn-glow rounded-lg bg-power px-6 py-3.5 font-medium text-white">Get Started Free</a>
          <a href="#" className="px-6 py-3.5 font-medium text-pulse">Book a Demo</a>
        </div>
      </div>
    </section>
  );
}
