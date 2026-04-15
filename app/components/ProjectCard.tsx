import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/types";

type Props = {
  project: Project;
  index?: number;
};

const gradients = [
  "from-violet-500 via-purple-500 to-pink-500",
  "from-cyan-500 via-blue-500 to-indigo-500",
  "from-amber-500 via-orange-500 to-red-500",
  "from-emerald-500 via-teal-500 to-cyan-500",
];

export function ProjectCard({ project, index = 0 }: Props) {
  const gradient = gradients[index % gradients.length];

  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <article className="h-full flex flex-col rounded-2xl overflow-hidden border border-edge bg-surface-card hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-edge/50">
        {/* Image / gradient header */}
        <div className="relative h-44 shrink-0 overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title || "Project image"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top"
            />
          ) : (
            <div className={`absolute inset-0 bg-linear-to-br ${gradient}`} />
          )}

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
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
          <h3 className="font-semibold text-base text-content group-hover:text-accent transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-content-muted text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-surface-muted text-content-muted font-mono">
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-surface-muted text-content-sub font-mono">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
