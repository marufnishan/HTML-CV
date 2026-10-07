import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import Section from './Section'
import { GithubIcon, LinkedinIcon } from './icons'
import { sendMessage } from '../lib/api'

const inputClass =
  'w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm text-white placeholder:text-zinc-500 transition focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none'

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const contacts = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}` },
    { icon: MapPin, label: 'Location', value: profile.location },
  ]

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function submit(e) {
    e.preventDefault()
    sendMessage(form, profile.email)
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build something together.">
      <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-surface">
        <div className="pointer-events-none absolute -top-32 -left-32 size-96 rounded-full bg-primary/20 blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 -bottom-32 size-96 rounded-full bg-accent/10 blur-[100px]" />

        <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-2">
          <div>
            <p className="max-w-md text-lg text-zinc-300">
              Need a web platform, a CRM setup or an AI automation? Send me a message and I’ll get back to you.
            </p>
            <ul className="mt-8 space-y-3">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-4 rounded-xl border border-white/6 bg-ink/50 p-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-linear-to-br from-primary to-accent text-ink">
                    <Icon className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-zinc-500">{label}</p>
                    {href ? (
                      <a href={href} className="block truncate text-sm font-medium text-white hover:text-accent">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-white">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-2">
              <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid size-11 place-items-center rounded-xl border border-white/10 text-zinc-400 transition hover:border-primary/50 hover:text-white">
                <LinkedinIcon className="size-5" />
              </a>
              <a href={profile.github_url} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid size-11 place-items-center rounded-xl border border-white/10 text-zinc-400 transition hover:border-primary/50 hover:text-white">
                <GithubIcon className="size-5" />
              </a>
            </div>
          </div>

          <form onSubmit={submit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" required placeholder="Your name" value={form.name} onChange={update} className={inputClass} aria-label="Your name" />
              <input name="email" type="email" required placeholder="Your email" value={form.email} onChange={update} className={inputClass} aria-label="Your email" />
            </div>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Tell me about your project"
              value={form.message}
              onChange={update}
              className={inputClass}
              aria-label="Message"
            />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-5 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-primary/25 transition hover:opacity-90"
            >
              Send message <Send className="size-4" />
            </button>
          </form>
        </div>
      </div>
    </Section>
  )
}
