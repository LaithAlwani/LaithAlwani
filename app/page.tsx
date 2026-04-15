import Link from 'next/link'
import { projects, skills, socialLinks, personalInfo } from '@/lib/data'
import { ProjectCard } from './components/ProjectCard'
import { SectionWrapper } from './components/SectionWrapper'

const featured = projects.filter((p) => p.featured)

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const socialIcons = { github: GithubIcon, linkedin: LinkedinIcon }

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden isolate">
        {/* Animated gradient blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-125 h-125 rounded-full bg-amber-400/20 dark:bg-amber-500/10 blur-3xl animate-blob pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-100 h-100 rounded-full bg-violet-500/15 dark:bg-violet-500/10 blur-3xl animate-blob pointer-events-none"
          style={{ animationDelay: '3s' }} />
        <div className="absolute top-[40%] left-[40%] w-75 h-75 rounded-full bg-sky-400/10 dark:bg-sky-500/8 blur-3xl animate-blob pointer-events-none"
          style={{ animationDelay: '6s' }} />

        <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-24 w-full">
          {/* Available badge */}
          {personalInfo.available && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-medium mb-8 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for new opportunities
            </div>
          )}

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-content leading-[1.1] mb-6 animate-fade-up">
            I build things for{' '}
            <span className="bg-linear-to-r from-accent to-orange-500 bg-clip-text text-transparent">
              the web.
            </span>
          </h1>

          <p className="text-xl text-content-muted max-w-2xl leading-relaxed mb-10 animate-fade-up"
            style={{ animationDelay: '0.1s' }}>
            {personalInfo.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-14 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Link href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-hover text-accent-fg font-semibold transition-all hover:shadow-lg hover:shadow-accent/25 active:scale-95">
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link href="/about#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-edge-strong text-content-muted font-semibold hover:border-accent/60 hover:text-accent transition-all">
              Get in Touch
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {socialLinks
              .filter((l) => l.icon !== 'email')
              .map((link) => {
                const Icon = socialIcons[link.icon as keyof typeof socialIcons]
                return (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-content-muted hover:text-accent transition-colors">
                    <Icon />
                    <span>{link.label}</span>
                  </a>
                )
              })}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-content-sub animate-bounce">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <SectionWrapper>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-accent font-mono text-sm font-medium mb-2">Selected Work</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-content">Featured Projects</h2>
            </div>
            <Link href="/projects"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-content-muted hover:text-accent transition-colors shrink-0">
              All projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          <div className="mt-10 text-center sm:hidden">
            <Link href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors">
              View all projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </SectionWrapper>
      </section>

      {/* ── Skills ── */}
      <section className="border-y border-edge bg-surface-muted">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <SectionWrapper>
            <p className="text-accent font-mono text-sm font-medium mb-2 text-center">Tech Stack</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-content mb-12 text-center">
              What I work with
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <span key={skill}
                  className="px-4 py-2 rounded-full border border-edge bg-surface-card text-sm font-mono text-content-muted hover:border-accent/50 hover:text-accent hover:bg-accent-subtle transition-all cursor-default select-none">
                  {skill}
                </span>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-5xl mx-auto px-6 py-28 text-center">
        <SectionWrapper>
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-0 -m-8 rounded-3xl bg-linear-to-b from-accent/5 to-transparent pointer-events-none" />
            <p className="text-accent font-mono text-sm font-medium mb-4">Let&apos;s Connect</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-content mb-4">
              Let&apos;s work together
            </h2>
            <p className="text-content-muted text-lg leading-relaxed mb-8">
              I&apos;m always open to new opportunities and interesting projects.
              Let&apos;s build something great.
            </p>
            <Link href="/about#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent hover:bg-accent-hover text-accent-fg font-semibold text-base transition-all hover:shadow-xl hover:shadow-accent/25 active:scale-95">
              Start a Conversation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </SectionWrapper>
      </section>
    </>
  )
}
