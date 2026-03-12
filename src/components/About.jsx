import { GraduationCap, MapPin, Code2, Brain } from 'lucide-react';

const highlights = [
  { icon: GraduationCap, label: 'D.Y. Patil College of Engineering, Akurdi, Pune' },
  { icon: MapPin, label: 'Pune, Maharashtra, India' },
  { icon: Code2, label: 'Full Stack Development · C++ · Python' },
  { icon: Brain, label: 'Data Structures & Algorithms' },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — avatar / visual */}
          <div className="reveal flex justify-center md:justify-start">
            <div className="relative">
              {/* Outer ring */}
              <div
                className="absolute -inset-3 rounded-2xl opacity-30 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(34,211,238,0.3), rgba(167,139,250,0.3))',
                }}
              />
              {/* Avatar box */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl bg-[#0c1326] border border-[#1a2540] flex flex-col items-center justify-center gap-3 animate-float">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-5xl font-display font-extrabold"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(34,211,238,0.15), rgba(167,139,250,0.15))',
                    border: '2px solid rgba(34,211,238,0.25)',
                    color: '#22d3ee',
                  }}
                >
                  PGK
                </div>
                <div className="text-center px-4">
                  <p className="font-display font-bold text-[#e2e8f0] text-lg">Prajwal Korgaonkar</p>
                  <p className="font-mono text-[#22d3ee] text-xs mt-1">CSE Student · 2nd Year</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div>
            <div className="reveal">
              <p className="section-label">// about me</p>
              <h2 className="section-title mb-6">
                Learning, Building,{' '}
                <span className="gradient-text">Growing</span>
              </h2>
            </div>

            <div className="reveal reveal-delay-1">
              <p className="text-[#94a3b8] text-base leading-relaxed mb-4 font-body">
                Hi, I'm Prajwal — a second-year Computer Engineering student at{' '}
                <span className="text-[#e2e8f0] font-medium">D.Y. Patil College of Engineering</span>,
                Akurdi, Pune. I'm genuinely passionate about writing code and building things that
                work.
              </p>
              <p className="text-[#94a3b8] text-base leading-relaxed mb-4 font-body">
                I spend a lot of my time practicing{' '}
                <span className="text-[#22d3ee] font-medium">Data Structures and Algorithms</span>,
                learning the fundamentals deeply rather than skipping to the surface. I believe
                strong foundations in problem-solving make everything else easier.
              </p>
              <p className="text-[#94a3b8] text-base leading-relaxed mb-8 font-body">
                Outside of DSA, I'm exploring{' '}
                <span className="text-[#22d3ee] font-medium">full-stack web development</span> — building
                small projects to understand how real applications come together. I'm still learning,
                still improving, and enjoy every step of the process.
              </p>
            </div>

            {/* Highlights */}
            <div className="reveal reveal-delay-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 bg-[#0c1326] border border-[#1a2540] rounded-lg p-3 hover:border-[#22d3ee]/30 transition-colors"
                >
                  <Icon size={16} className="text-[#22d3ee] mt-0.5 shrink-0" />
                  <span className="text-[#94a3b8] text-sm font-body">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
