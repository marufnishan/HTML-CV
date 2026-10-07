// Data access layer. Components only talk to these functions, never to the
// data source directly, so moving to Supabase only means changing this file.
//
// Supabase version of a getter, for reference:
//   import { supabase } from './supabase'
//   export async function getProjects() {
//     const { data, error } = await supabase.from('projects').select('*').order('id')
//     if (error) throw error
//     return data
//   }

import * as content from '../data/portfolio'

export async function getProfile() {
  return content.profile
}

export async function getStats() {
  return content.stats
}

export async function getCompetencies() {
  return content.competencies
}

export async function getSkillGroups() {
  return content.skill_groups
}

export async function getExperience() {
  return content.experience
}

export async function getProjects() {
  return content.projects
}

export async function getEducation() {
  return content.education
}

export async function getLanguages() {
  return content.languages
}

export async function getPortfolio() {
  const [profile, stats, competencies, skillGroups, experience, projects, education, languages] =
    await Promise.all([
      getProfile(),
      getStats(),
      getCompetencies(),
      getSkillGroups(),
      getExperience(),
      getProjects(),
      getEducation(),
      getLanguages(),
    ])
  return { profile, stats, competencies, skillGroups, experience, projects, education, languages }
}

// Static version opens the visitor's mail app. With Supabase this becomes
// an insert into a `messages` table.
export async function sendMessage({ name, email, message }, toEmail) {
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
  window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`
}
