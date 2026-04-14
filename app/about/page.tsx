import type { Metadata } from "next";
import { personalInfo, socialLinks, skills } from "@/lib/data";
import { SectionWrapper } from "../components/SectionWrapper";
import { ContactForm } from "../components/ContactForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${personalInfo.name} and get in touch.`,
};

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socialIcons = { github: GithubIcon, linkedin: LinkedinIcon };

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      {/* ── About ── */}
      <SectionWrapper>
        <section className="mb-28">
          <p className="text-amber-500 dark:text-amber-400 font-mono text-sm font-medium mb-2">
            About Me
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-14">
            Hey, I&apos;m {personalInfo.name}.
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Avatar + info column */}
            <div className="lg:col-span-2">
              <div className="aspect-square max-w-xs lg:max-w-none rounded-3xl relative overflow-hidden shadow-xl shadow-amber-500/10">
                <Image
                  src="/images/laith.webp"
                  alt="Laith Alwani"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>
              {/* Avatar placeholder — replace with Next.js <Image> once you have a photo */}
              {/* <Image src={'/images/laith.webp'} alt='laith alwani' width={300} height={400}/>
              <div className="aspect-square max-w-xs lg:max-w-none rounded-3xl bg-linear-to-br from-amber-400 via-orange-400 to-pink-500 relative overflow-hidden shadow-xl shadow-amber-500/10">
                <div className="absolute inset-0 bg-black/10" />
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 25% 25%, rgba(255,255,255,.3) 0%, transparent 50%)',
                  }}
                />
              </div> */}

              {/* Quick facts */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-500 shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-400">
                    {personalInfo.location}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-500 shrink-0">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-400">{personalInfo.title}</span>
                </div>
                {personalInfo.available && (
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                      Open to opportunities
                    </span>
                  </div>
                )}
              </div>

              {/* Social icons */}
              <div className="mt-6 flex gap-3">
                {socialLinks
                  .filter((l) => l.icon !== "email")
                  .map((link) => {
                    const Icon = socialIcons[link.icon as keyof typeof socialIcons];
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-400/40 dark:hover:border-amber-400/40 hover:bg-amber-50 dark:hover:bg-amber-950/20 transition-all">
                        <Icon />
                      </a>
                    );
                  })}
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-3 space-y-5 pt-1">
              {personalInfo.bio.map((paragraph, i) => (
                <p key={i} className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* ── Skills ── */}
      <SectionWrapper>
        <section className="mb-28">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            Skills &amp; Technologies
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-sm font-mono text-slate-600 dark:text-slate-300 hover:border-amber-400/50 dark:hover:border-amber-400/40 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/20 transition-all cursor-default select-none">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </SectionWrapper>

      {/* ── Contact ── */}
      <SectionWrapper>
        <section id="contact" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <p className="text-amber-500 dark:text-amber-400 font-mono text-sm font-medium mb-2">
                Get In Touch
              </p>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Let&apos;s talk
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Have a project in mind? Want to collaborate? Or just want to say hi? My inbox is
                always open.
              </p>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-amber-500 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {personalInfo.email}
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </section>
      </SectionWrapper>
    </div>
  );
}
