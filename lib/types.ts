export type Project = {
  slug: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  image?: string
  github?: string
  live?: string
  featured: boolean
  year: number
}

export type SocialLink = {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'email'
}
