const skillCategories = [
  {
    label: 'Programming Languages',
    mono: '// lang',
    color: '#22d3ee',
    skills: [
      { name: 'C++', level: 75, note: 'Primary language' },
      { name: 'Python', level: 65, note: 'Learning actively' },
    ],
  },
  {
    label: 'Web Development',
    mono: '// web',
    color: '#a78bfa',
    skills: [
      { name: 'HTML', level: 80, note: 'Markup & structure' },
      { name: 'CSS', level: 70, note: 'Styling & layouts' },
      { name: 'JavaScript', level: 60, note: 'Learning actively' },
    ],
  },
  {
    label: 'Concepts',
    mono: '// cs',
    color: '#34d399',
    skills: [
      { name: 'Data Structures', level: 70, note: 'Practicing daily' },
      { name: 'Algorithms', level: 65, note: 'Problem solving' },
    ],
  },
  {
    label: 'Tools & Platforms',
    mono: '// tools',
    color: '#f59e0b',
    skills: [
      { name: 'Git', level: 70, note: 'Version control' },
      { name: 'GitHub', level: 72, note: 'Code hosting' },
      { name: 'VS Code', level: 85, note: 'Primary editor' },
    ],
  },
];

function SkillBar({ name, level, note, color }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <div>
          <span className="text-[#e2e8f0] text-sm font-medium font-body">{name}</span>
          <span className="text-[#475569] text-xs font-mono ml-2">{note}</span>
        </div>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="w-full h-1.5 bg-[#1a2540] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${level}%`,
            background: `linear-gradient(90deg, ${color}99, ${color})`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      {/* Subtle top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-[#1a2540]" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="section-label">// skills</p>
          <h2 className="section-title">
            What I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-[#64748b] mt-4 text-sm font-mono">
            Actively learning and improving every day
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.label}
              className={`reveal reveal-delay-${i + 1} card-hover bg-[#0c1326] rounded-xl p-6`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold"
                  style={{
                    background: `${cat.color}15`,
                    color: cat.color,
                    border: `1px solid ${cat.color}30`,
                  }}
                >
                  {'</>'}
                </div>
                <div>
                  <p className="text-[#e2e8f0] font-display font-semibold text-sm">{cat.label}</p>
                  <p className="font-mono text-xs" style={{ color: cat.color }}>{cat.mono}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {cat.skills.map((s) => (
                  <SkillBar key={s.name} {...s} color={cat.color} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer note */}
        <div className="reveal mt-10 text-center">
          <p className="font-mono text-[#475569] text-xs">
            * Skill percentages reflect honest self-assessment at this stage of learning
          </p>
        </div>
      </div>
    </section>
  );
}
