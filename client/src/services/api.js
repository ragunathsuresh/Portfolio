import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
})

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github+json',
  },
})

const repoImageMap = {
  'sri-vaishnavi-jewellers': '/assets/project-gold-mobile.svg',
  tripmate: '/assets/project-tripmate.svg',
  'todo-react-app': '/assets/project-time2cart.svg',
  express: '/assets/project-vdart-dashboard.svg',
  'ntj-admin': '/assets/project-jewellery-erp.svg',
  'ntj-chit-fund': '/assets/project-gold-mobile.svg',
}

const fallbackProjectImages = [
  '/assets/project-gold-mobile.svg',
  '/assets/project-jewellery-erp.svg',
  '/assets/project-vdart-dashboard.svg',
  '/assets/project-tripmate.svg',
  '/assets/project-time2cart.svg',
]

const prettifyRepoName = (name) =>
  name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())

const buildCategory = (repo) => {
  if (repo.homepage) return 'Live Project'
  if (repo.language) return `${repo.language} Repository`
  return 'GitHub Repository'
}

const buildTechStack = (repo) => {
  const stack = [repo.language, ...(repo.topics || [])].filter(Boolean)
  return stack.length ? stack : ['GitHub', 'Open Source']
}

const buildProjectImage = (repo) => {
  const key = repo.name.toLowerCase()

  if (repoImageMap[key]) {
    return repoImageMap[key]
  }

  return fallbackProjectImages[repo.id % fallbackProjectImages.length]
}

const mapRepoToProject = (repo) => ({
  id: repo.id,
  title: prettifyRepoName(repo.name),
  description: repo.description || 'Project synced directly from the GitHub repository.',
  techStack: buildTechStack(repo),
  image: buildProjectImage(repo),
  category: buildCategory(repo),
  featured: Boolean(repo.homepage) || repo.stargazers_count > 0,
  repoUrl: repo.html_url,
  liveUrl: repo.homepage || '',
})

export const getProjects = async () => {
  const { data } = await api.get('/projects')
  return data.data
}

export const getExperience = async () => {
  const { data } = await api.get('/experience')
  return data.data
}

export const sendMessage = async (payload) => {
  const { data } = await api.post('/contact', payload)
  return data
}
