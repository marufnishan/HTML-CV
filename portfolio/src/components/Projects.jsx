import { useState } from 'react'
import { ArrowUpRight, Bot, Briefcase, Globe } from 'lucide-react'
import Section, { Chip } from './Section'

const filters = [
  { value: 'all', label: 'All' },
  { value: 'ai', label: 'AI & Automation' },
  { value: 'web', label: 'Web Platforms' },
  { value: 'freelance', label: 'Freelance' },
]

const categories = {
  ai: { label: 'AI & Automation', icon: Bot, badge: 'bg-primary/15 text-primary-soft' },
  web: { label: 'Web Platform', icon: Globe, badge: 'bg-accent/15 text-accent' },
  freelance: { label: 'Freelance', icon: Briefcase, badge: 'bg-amber-400/15 text-amber-300' },
}

function domainOf(url) {
  return new URL(url).hostname.replace(/^www\./, '')
}

export default function Projects({ projects }) {
  const [filter, setFilter] = useState('all')
  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  const countFor = (value) => (value === 'all' ? projects.length : projects.filter((p) => p.category === value).length)

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I’ve built"
      intro="AI assistants, automation systems and production web platforms — all live."
    >
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            role="tab"
            aria-selected={filter === f.value}
            onClick={() => setFilter(f.value)}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${
              filter === f.value
                ? 'bg-white text-ink'
                : 'border border-white/10 bg-white/3 text-zinc-300 hover:bg-white/8'
            }`}
          >
            {f.label}
            <span className="text-xs text-zinc-500">{countFor(f.value)}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => {
          const cat = categories[project.category]
          const Icon = cat.icon
          return (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/70 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-center justify-between gap-3">
                <span className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-semibold ${cat.badge}`}>
                  <Icon className="size-3.5" />
                  {cat.label}
                </span>
                <span className="grid size-8 place-items-center rounded-lg border border-white/8 text-zinc-500 transition group-hover:border-primary/50 group-hover:bg-primary group-hover:text-white">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
              <p className="mt-5 truncate border-t border-white/6 pt-4 font-mono text-xs text-zinc-500 group-hover:text-zinc-400">
                {domainOf(project.url)}
              </p>
            </a>
          )
        })}
      </div>
    </Section>
  )
}
