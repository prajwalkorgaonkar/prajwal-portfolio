import { Github, ExternalLink, Plus, Clock } from 'lucide-react';


const projects = [
  {
    id: 1,
    placeholder: true,
    title: 'PrimeDrew',
    description:
      'It is a vehicle rental website, Where you can host or rent vehicles',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    live: null,
  },
  // {
  //   id: 2,
  //   placeholder: true,
  //   title: 'Project Title Here',
  //   description:
  //     'Add a short description of what this project does, the problem it solves, and what you learned while building it.',
  //   tech: ['C++', 'DSA'],
  //   github: '#',
  //   live: null,
  // },
  // {
  //   id: 3,
  //   placeholder: true,
  //   title: 'Project Title Here',
  //   description:
  //     'Add a short description of what this project does, the problem it solves, and what you learned while building it.',
  //   tech: ['Python', 'HTML', 'CSS'],
  //   github: '#',
  //   live: null,
  // },
];

const techColors = {
  'HTML': '#f97316',
  'CSS': '#3b82f6',
  'JavaScript': '#eab308',
  'C++': '#22d3ee',
  'Python': '#34d399',
  'DSA': '#a78bfa',
  'React': '#38bdf8',
  'Node.js': '#4ade80',
};

function TechTag({ name }) {
  const color = techColors[name] || '#64748b';
  return (
    <span
      className="font-mono text-xs px-2.5 py-1 rounded-md"
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
    <div
      className={`reveal reveal-delay-${Math.min(index + 1, 5)} card-hover bg-[#0c1326] rounded-xl p-6 flex flex-col group relative overflow-hidden`}
    >
      {/* Placeholder overlay hint */}
      {project.placeholder && (
        <div className="absolute top-3 right-3">
          <span className="flex items-center gap-1 font-mono text-[10px] text-[#475569] bg-[#1a2540] px-2 py-1 rounded-full">
            <Clock size={9} />
            {/* placeholder */}
          </span>
        </div>
      )}

      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, #22d3ee, #a78bfa)' }}
      />

      {/* Number */}
      <div className="font-mono text-[#1a2540] text-5xl font-extrabold absolute top-4 right-5 select-none pointer-events-none">
        {String(index + 1).padStart(2, '0')}
      </div>

      <h3 className="font-display font-bold text-[#e2e8f0] text-lg mb-3 pr-16">
        {project.title}
      </h3>

      <p className="text-[#64748b] text-sm leading-relaxed font-body flex-1 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => <TechTag key={t} name={t} />)}
      </div>

      <div className="flex items-center gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[#64748b] hover:text-[#22d3ee] text-sm font-medium transition-colors"
        >
          <Github size={15} />
          GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#64748b] hover:text-[#22d3ee] text-sm font-medium transition-colors"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="section-label">// projects</p>
          <h2 className="section-title">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          {/* <p className="text-[#475569] mt-3 font-mono text-xs max-w-md mx-auto leading-relaxed">
            These are placeholder cards — replace them with your real projects when ready.
            Each card is fully editable in{' '}
            <span className="text-[#22d3ee]">src/components/Projects.jsx</span>
          </p> */}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}

          {/* Add more card */}
          {/* <div className="reveal reveal-delay-4 flex items-center justify-center border-2 border-dashed border-[#1a2540] rounded-xl min-h-[200px] hover:border-[#22d3ee]/30 transition-colors group cursor-pointer">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full border border-dashed border-[#1a2540] group-hover:border-[#22d3ee]/40 flex items-center justify-center mx-auto mb-3 transition-colors">
                <Plus size={18} className="text-[#475569] group-hover:text-[#22d3ee] transition-colors" />
              </div>
              <p className="font-mono text-[#475569] text-xs group-hover:text-[#64748b] transition-colors">
                Add your project
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
