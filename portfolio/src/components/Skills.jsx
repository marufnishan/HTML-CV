import { Bot, Cloud, Code2 } from 'lucide-react'
import Section, { Card, Chip } from './Section'

const icons = { code: Code2, bot: Bot, cloud: Cloud }

export default function Skills({ competencies, skillGroups }) {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with"
      intro="From database schema to deployed product — and the automations that keep it running."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {competencies.map((group) => {
          const Icon = icons[group.icon] ?? Code2
          return (
            <Card key={group.id}>
              <div className="grid size-11 place-items-center rounded-xl bg-linear-to-br from-primary to-accent text-ink">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          )
        })}
      </div>

      <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.id} className="bg-surface p-6">
            <h3 className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
