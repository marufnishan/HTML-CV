import { usePortfolio } from './hooks/usePortfolio'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { data, loading, error } = usePortfolio()

  if (loading) {
    return (
      <div className="grid min-h-screen place-items-center">
        <div className="size-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="grid min-h-screen place-items-center px-4 text-center">
        <p>Couldn’t load the portfolio. Please refresh the page.</p>
      </div>
    )
  }

  const { profile, stats, competencies, skillGroups, experience, projects, education, languages } = data

  return (
    <>
      <Navbar name={profile.short_name} />
      <main>
        <Hero profile={profile} stats={stats} skillGroups={skillGroups} />
        <About profile={profile} education={education} languages={languages} />
        <Skills competencies={competencies} skillGroups={skillGroups} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  )
}
