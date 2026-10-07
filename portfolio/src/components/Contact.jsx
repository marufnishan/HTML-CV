import { useState } from 'react'
import { Mail, MapPin, Phone, RefreshCw, Send, ShieldCheck } from 'lucide-react'
import Section from './Section'
import { GithubIcon, LinkedinIcon } from './icons'
import { sendMessage } from '../lib/api'

const inputClass =
  'w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm text-white placeholder:text-zinc-500 transition focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none'

const randomDigit = () => Math.floor(Math.random() * 9) + 1

// Simple equation captcha to stop basic spam bots. Client-side only — once the
// form saves to Supabase, add server-side protection as well.
function newCaptcha() {
  const op = ['+', '−', '×'][Math.floor(Math.random() * 3)]
  let a = randomDigit()
  let b = randomDigit()
  if (op === '−' && b > a) [a, b] = [b, a]
  const answer = op === '+' ? a + b : op === '−' ? a - b : a * b
  return { question: `${a} ${op} ${b}`, answer }
}

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [captcha, setCaptcha] = useState(newCaptcha)
  const [captchaInput, setCaptchaInput] = useState('')
  const [captchaError, setCaptchaError] = useState('')

  function refreshCaptcha() {
    setCaptcha(newCaptcha())
    setCaptchaInput('')
  }

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
    if (Number(captchaInput) !== captcha.answer) {
      setCaptchaError('Wrong answer — please solve the new equation.')
      refreshCaptcha()
      return
    }
    setCaptchaError('')
    sendMessage(form, profile.email)
    refreshCaptcha()
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
            <div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-ink p-2 pl-4">
                <ShieldCheck className="size-4 shrink-0 text-accent" />
                <label htmlFor="captcha" className="text-sm whitespace-nowrap text-zinc-400">
                  Solve: <span className="font-mono text-base font-semibold text-white">{captcha.question} =</span>
                </label>
                <input
                  id="captcha"
                  required
                  inputMode="numeric"
                  pattern="-?[0-9]*"
                  autoComplete="off"
                  placeholder="?"
                  value={captchaInput}
                  onChange={(e) => {
                    setCaptchaInput(e.target.value)
                    setCaptchaError('')
                  }}
                  className="w-16 min-w-0 rounded-lg border border-white/10 bg-surface px-3 py-2 text-center font-mono text-sm text-white placeholder:text-zinc-500 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none"
                  aria-invalid={Boolean(captchaError)}
                  aria-describedby="captcha-error"
                />
                <button
                  type="button"
                  onClick={refreshCaptcha}
                  className="ml-auto grid size-9 shrink-0 place-items-center rounded-lg text-zinc-400 transition hover:bg-white/5 hover:text-white"
                  aria-label="New equation"
                  title="New equation"
                >
                  <RefreshCw className="size-4" />
                </button>
              </div>
              <p id="captcha-error" aria-live="polite" className="mt-2 min-h-5 text-sm text-rose-400">
                {captchaError}
              </p>
            </div>
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
