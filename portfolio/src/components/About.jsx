import { GraduationCap, Languages } from 'lucide-react'
import Section, { Card } from './Section'

export default function About({ profile, education, languages }) {
  return (
    <Section id="about" eyebrow="About" title="Developer by trade, automator by habit.">
      <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
        <p className="text-lg leading-relaxed text-zinc-300">{profile.summary}</p>

        <div className="space-y-4">
          {education.map((edu) => (
            <Card key={edu.id}>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-primary-soft uppercase">
                <GraduationCap className="size-4" /> Education
              </div>
              <h3 className="mt-3 font-semibold text-white">{edu.degree}</h3>
              <p className="mt-1 text-sm text-zinc-400">{edu.institution}</p>
              <p className="text-sm text-zinc-500">
                {edu.location} · {edu.period}
              </p>
              <span className="mt-4 inline-block rounded-md bg-primary/15 px-2.5 py-1 text-xs font-semibold text-primary-soft">
                {edu.grade}
              </span>
            </Card>
          ))}

          <Card>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-primary-soft uppercase">
              <Languages className="size-4" /> Languages
            </div>
            <ul className="mt-4 space-y-3">
              {languages.map((lang) => (
                <li key={lang.id} className="text-sm">
                  <div className="flex justify-between">
                    <span className="text-zinc-200">{lang.name}</span>
                    <span className="text-zinc-500">{lang.level === 5 ? 'Native' : 'Fluent'}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/8">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-primary to-accent"
                      style={{ width: `${lang.level * 20}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </Section>
  )
}
