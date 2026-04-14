import Link from 'next/link'
import type { Project } from '@/lib/types'

type Props = {
  project: Project
  index?: number
}

const gradients = [
  'from-violet-500 via-purple-500 to-pink-500',
  'from-cyan-500 via-blue-500 to-indigo-500',
  'from-amber-500 via-orange-500 to-red-500',
  'from-emerald-500 via-teal-500 to-cyan-500',
]

export function ProjectCard({ project, index = 0 }: Props) {
  const gradient = gradients[index % gradients.length]

  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <article className="h-full flex flex-col rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-amber-400/40 dark:hover:border-amber-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 dark:hover:shadow-slate-950/60">
        {/* Gradient image placeholder */}
        <div className={`relative h-44 bg-gradient-to-br ${gradient} shrink-0 overflow-hidden`}>
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="absolute bottom-0 inset-x-0 p-4 flex items-end justify-between">
            <span className="text-white/70 text-xs font-mono">{project.year}</span>
            {project.live && (
              <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm">
                <span className="w-1 h-1 rounded-full bg-emerald-400" />
                Live
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="font-semibold text-base text-slate-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 font-mono">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  )
}
