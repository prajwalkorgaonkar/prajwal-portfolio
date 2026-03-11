import { Github, ExternalLink, Plus, Clock } from "lucide-react";

const projects = [
  {
    id: 1,
    placeholder: true,
    title: "Project Title Here",
    description:
      "Add a short description of what this project does, the problem it solves, and what you learned while building it.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: null,
  },
  {
    id: 2,
    placeholder: true,
    title: "Project Title Here",
    description:
      "Add a short description of what this project does, the problem it solves, and what you learned while building it.",
    tech: ["C++", "DSA"],
    github: "#",
    live: null,
  },
  {
    id: 3,
    placeholder: true,
    title: "Project Title Here",
    description:
      "Add a short description of what this project does, the problem it solves, and what you learned while building it.",
    tech: ["Python", "HTML", "CSS"],
    github: "#",
    live: null,
  },
];

const techColors = {
  HTML: "#f97316",
  CSS: "#3b82f6",
  JavaScript: "#eab308",
  "C++": "#22d3ee",
  Python: "#34d399",
  DSA: "#a78bfa",
  React: "#38bdf8",
  "Node.js": "#4ade80",
};

function TechTag({ name }) {
  const color = techColors[name] || "#64748b";

  return (
    <span
      className="font-mono text-[11px] sm:text-xs px-2 py-1 rounded-md"
      style={{
        background: `${color}12`,
        color,
        border: `1px solid ${color}25`,
      }}
    >
      {name}
    </span>
  );
}

function ProjectCard({ project, index }) {
  return (
    <div className="bg-[#0c1326] rounded-xl p-5 sm:p-6 flex flex-col group relative overflow-hidden card-hover">

      {project.placeholder && (
        <div className="absolute top-3 right-3">
          <span className="flex items-center gap-1 font-mono text-[10px] text-[#475569] bg-[#1a2540] px-2 py-1 rounded-full">
            <Clock size={9} />
            placeholder
          </span>
        </div>
      )}

      {/* top hover line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: "linear-gradient(90deg,#22d3ee,#a78bfa)" }}
      />

      {/* project number */}
      <div className="font-mono text-[#1a2540] text-3xl sm:text-5xl font-extrabold absolute top-4 right-5 select-none pointer-events-none">
        {String(index + 1).padStart(2, "0")}
      </div>

      <h3 className="font-bold text-[#e2e8f0] text-base sm:text-lg mb-3 pr-12">
        {project.title}
      </h3>

      <p className="text-[#64748b] text-sm leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <TechTag key={t} name={t} />
        ))}
      </div>

      <div className="flex items-center gap-4 text-sm">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[#64748b] hover:text-[#22d3ee]"
        >
          <Github size={15} />
          GitHub
        </a>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#64748b] hover:text-[#22d3ee]"
          >
            <ExternalLink size={15} />
            Live
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12 sm:mb-16">
          <p className="section-label">// projects</p>

          <h2 className="section-title">
            Things I've <span className="gradient-text">Built</span>
          </h2>

          <p className="text-[#475569] mt-3 font-mono text-xs max-w-md mx-auto">
            Replace these placeholder cards with your real projects.
          </p>
        </div>

        {/* responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}

          {/* Add new project card */}
          <div className="flex items-center justify-center border-2 border-dashed border-[#1a2540] rounded-xl min-h-[180px] hover:border-[#22d3ee]/40 transition-colors group">

            <div className="text-center">

              <div className="w-10 h-10 rounded-full border border-dashed border-[#1a2540] flex items-center justify-center mx-auto mb-3 group-hover:border-[#22d3ee]/40">

                <Plus size={18} className="text-[#475569] group-hover:text-[#22d3ee]" />

              </div>

              <p className="font-mono text-[#475569] text-xs">
                Add your project
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}