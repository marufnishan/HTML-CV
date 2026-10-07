import { useReveal } from '../hooks/useReveal'

export default function Section({ id, eyebrow, title, intro, children }) {
  const ref = useReveal()

  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div ref={ref} className="reveal">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary-soft">
          <span className="h-px w-8 bg-linear-to-r from-primary to-accent" />
          {eyebrow}
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">{title}</h2>
        {intro && <p className="mt-4 max-w-2xl text-zinc-400">{intro}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}

export function Chip({ children }) {
  return (
    <span className="rounded-md border border-white/8 bg-white/4 px-2.5 py-1 text-xs font-medium text-zinc-300">
      {children}
    </span>
  )
}

export function Card({ className = '', children }) {
  return (
    <div className={`rounded-2xl border border-white/8 bg-surface p-6 transition hover:border-primary/40 ${className}`}>
      {children}
    </div>
  )
}
