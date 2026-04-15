import type { Metadata } from 'next'
import { projects } from '@/lib/data'
import { ProjectCard } from '../components/ProjectCard'
import { SectionWrapper } from '../components/SectionWrapper'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of projects I have built.',
}

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      <SectionWrapper>
        <p className="text-accent font-mono text-sm font-medium mb-2">
          Portfolio
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-content mb-4">
          All Projects
        </h1>
        <p className="text-content-muted text-lg max-w-2xl mb-16">
          A collection of things I&apos;ve built — from side projects to production applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <SectionWrapper key={project.slug} delay={i * 80}>
              <ProjectCard project={project} index={i} />
            </SectionWrapper>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
