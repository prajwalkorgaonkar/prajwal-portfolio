import { ExternalLink, Code, Linkedin, Github } from 'lucide-react';

const profiles = [
  {
    name: 'GitHub',
    handle: '@prajwalkorgaonkar',
    url: 'https://github.com/prajwalkorgaonkar',
    description: 'Personal projects, practice code, and repositories.',
    color: '#e2e8f0',
    bgColor: 'rgba(226, 232, 240, 0.06)',
    borderColor: 'rgba(226, 232, 240, 0.15)',
    icon: Github,
    badge: 'Version Control',
  },
  {
    name: 'LinkedIn',
    handle: 'prajwal-korgaonkar',
    url: 'https://www.linkedin.com/in/prajwal-korgaonkar-b59771342',
    description: 'Professional profile, education, and networking.',
    color: '#0ea5e9',
    bgColor: 'rgba(14, 165, 233, 0.06)',
    borderColor: 'rgba(14, 165, 233, 0.2)',
    icon: Linkedin,
    badge: 'Professional',
  },
  {
    name: 'LeetCode',
    handle: '@prajwalkorgaonkar',
    url: 'https://leetcode.com/u/prajwalkorgaonkar/',
    description: 'DSA practice — working through problems regularly.',
    color: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.06)',
    borderColor: 'rgba(245, 158, 11, 0.2)',
    icon: Code,
    badge: 'DSA Practice',
  },
];

export default function CodingProfiles() {
  return (
    <section id="profiles" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="section-label">// find me online</p>
          <h2 className="section-title">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {profiles.map((p, i) => {
            const Icon = p.icon;
            return (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal reveal-delay-${i + 1} block bg-[#0c1326] rounded-xl p-6 border transition-all duration-300 group`}
                style={{ borderColor: 'rgba(26, 37, 64, 1)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = p.borderColor;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.background = p.bgColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(26, 37, 64, 1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = '#0c1326';
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: p.bgColor, border: `1px solid ${p.borderColor}` }}
                  >
                    <Icon size={22} style={{ color: p.color }} />
                  </div>
                  <ExternalLink
                    size={15}
                    className="text-[#475569] group-hover:text-[#94a3b8] transition-colors mt-1"
                  />
                </div>

                <div className="mb-1">
                  <span
                    className="font-mono text-[10px] px-2 py-0.5 rounded-full"
                    style={{
                      background: `${p.color}15`,
                      color: p.color,
                      border: `1px solid ${p.color}25`,
                    }}
                  >
                    {p.badge}
                  </span>
                </div>

                <h3
                  className="font-display font-bold text-lg mt-2 mb-1"
                  style={{ color: p.color }}
                >
                  {p.name}
                </h3>
                <p className="font-mono text-[#475569] text-xs mb-3">{p.handle}</p>
                <p className="text-[#64748b] text-sm font-body leading-relaxed">
                  {p.description}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
