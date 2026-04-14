import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/data'

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata(
  props: PageProps<'/projects/[slug]'>,
): Promise<Metadata> {
  const { slug } = await props.params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return { title: project.title, description: project.description }
}

const gradients = [
  'from-violet-500 via-purple-500 to-pink-500',
  'from-cyan-500 via-blue-500 to-indigo-500',
  'from-amber-500 via-orange-500 to-red-500',
  'from-emerald-500 via-teal-500 to-cyan-500',
]

export default async function ProjectPage(props: PageProps<'/projects/[slug]'>) {
  const { slug } = await props.params
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  const gradient = gradients[projects.indexOf(project) % gradients.length]

  return (
    <article className="max-w-4xl mx-auto px-6 pt-32 pb-24">
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors mb-12 group"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:-translate-x-0.5 transition-transform"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        All Projects
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-mono text-slate-400 dark:text-slate-500">
            {project.year}
          </span>
          {project.live && (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Live
            </span>
          )}
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
          {project.description}
        </p>
      </header>

      {/* Hero gradient placeholder */}
      <div
        className={`relative w-full aspect-video rounded-2xl bg-linear-to-br ${gradient} mb-12 overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/10" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/30 font-mono text-sm tracking-wider uppercase">
            project preview
          </span>
        </div>
      </div>

      {/* Action links */}
      <div className="flex flex-wrap gap-3 mb-10">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-sm transition-all hover:shadow-lg hover:shadow-amber-500/25 active:scale-95"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            View Live
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:border-amber-400/60 dark:hover:border-amber-400/60 hover:text-amber-600 dark:hover:text-amber-400 transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View Source
          </a>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-14">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-sm px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono border border-slate-200 dark:border-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Long description */}
      <div className="space-y-5">
        {project.longDescription.split('\n\n').map((paragraph, i) => (
          <p key={i} className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            {paragraph.trim()}
          </p>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors group"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:-translate-x-0.5 transition-transform"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to all projects
        </Link>
      </div>
    </article>
  )
}
