import { ArrowRight, Bot, CheckCircle2, Database, Mail, Webhook } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'

// Decorative example of the kind of automation the portfolio is about.
const workflow = [
  { icon: Webhook, title: 'New lead captured', meta: 'Webhook trigger', color: 'text-accent' },
  { icon: Bot, title: 'AI agent qualifies & drafts reply', meta: 'LLM · N8N', color: 'text-primary-soft' },
  { icon: Database, title: 'Pipeline updated', meta: 'GoHighLevel API', color: 'text-accent' },
  { icon: Mail, title: 'Follow-up sent', meta: 'Email + SMS', color: 'text-primary-soft' },
]

export default function Hero({ profile, stats, skillGroups }) {
  const marquee = skillGroups.flatMap((g) => g.items)

  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 -right-40 size-[400px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pt-20 pb-16 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:pt-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300">
            <span className="size-2 animate-pulse-dot rounded-full bg-emerald-400" />
            {profile.location} · Remote
          </p>

          <p className="mt-8 text-lg text-zinc-400">
            Hi, I’m <span className="font-semibold text-white">{profile.name}</span>
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl xl:text-6xl">
            I build web platforms &amp; <span className="text-gradient">AI automations</span> that replace manual work.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-400">{profile.role}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-6 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-primary/25 transition hover:opacity-90"
            >
              View my work <ArrowRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Get in touch
            </a>
            <div className="flex items-center gap-1 pl-1">
              <a href={profile.github_url} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-lg p-2.5 text-zinc-400 transition hover:bg-white/5 hover:text-white">
                <GithubIcon className="size-5" />
              </a>
              <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-lg p-2.5 text-zinc-400 transition hover:bg-white/5 hover:text-white">
                <LinkedinIcon className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative" aria-hidden="true">
          <div className="absolute -inset-px rounded-2xl bg-linear-to-br from-primary/60 via-white/5 to-accent/60" />
          <div className="relative rounded-2xl bg-surface/95 p-5 backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/8 pb-4">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-white/15" />
                <span className="size-2.5 rounded-full bg-white/15" />
                <span className="size-2.5 rounded-full bg-white/15" />
              </div>
              <span className="font-mono text-xs text-zinc-500">lead-nurture.workflow</span>
            </div>
            <ol className="mt-5 space-y-3">
              {workflow.map(({ icon: Icon, title, meta, color }) => (
                <li key={title}>
                  <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-surface-2 p-3">
                    <span className={`grid size-9 shrink-0 place-items-center rounded-lg bg-white/5 ${color}`}>
                      <Icon className="size-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-white">{title}</p>
                      <p className="text-xs text-zinc-500">{meta}</p>
                    </div>
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-400" />
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-5 flex items-center justify-between border-t border-white/8 pt-4 font-mono text-xs text-zinc-500">
              <span>Executed successfully</span>
              <span className="text-emerald-400">0 manual steps</span>
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col rounded-2xl border border-white/8 bg-surface/70 p-6 backdrop-blur">
              <dt className="order-last mt-2 text-sm text-zinc-400">{stat.label}</dt>
              <dd className="font-display text-4xl font-bold text-gradient">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative mt-16 overflow-hidden border-y border-white/8 bg-surface/50 py-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-10">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={i} className="flex items-center gap-10 text-sm font-medium whitespace-nowrap text-zinc-500">
              {item}
              <span className="size-1 rounded-full bg-primary/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
