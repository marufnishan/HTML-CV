import { ArrowUpRight, MapPin } from 'lucide-react'
import Section from './Section'

export default function Experience({ experience }) {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I’ve worked">
      <div className="space-y-6">
        {experience.map((job) => (
          <article key={job.id} className="relative overflow-hidden rounded-2xl border border-white/8 bg-surface p-6 sm:p-8">
            <span className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-primary to-accent" />
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{job.role}</h3>
                <a
                  href={job.company_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 font-semibold text-primary-soft hover:text-accent"
                >
                  {job.company} <ArrowUpRight className="size-4" />
                </a>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-zinc-500">
                  <MapPin className="size-3.5" /> {job.location}
                </p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
                {job.start_date} – {job.end_date ?? 'Present'}
              </span>
            </div>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {job.highlights.map((point) => (
                <li key={point} className="rounded-xl border border-white/6 bg-surface-2 p-4 text-sm leading-relaxed text-zinc-300">
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
