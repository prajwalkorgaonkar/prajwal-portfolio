import { useEffect, useState } from 'react';
import { ChevronDown, Download, Mail, FolderOpen } from 'lucide-react';

const TYPEWRITER_STRINGS = [
  'Full Stack Developer',
  'Problem Solver',
  'DSA Enthusiast',
  'C++ Programmer',
];

function useTypewriter(strings, delay = 100, pauseTime = 1800) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = strings[index % strings.length];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setIndex((i) => i + 1);
          }
        }
      },
      isDeleting ? delay / 2 : delay
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, strings, delay, pauseTime]);

  return text;
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const typedText = useTypewriter(TYPEWRITER_STRINGS);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center dot-grid overflow-hidden py-20"
    >
      {/* Background radial glow - Scaled down for mobile */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[700px] md:h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(34,211,238,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Corner decorations - Smaller and adjusted for mobile, larger on md+ */}
      <div className="absolute top-12 left-4 md:top-24 md:left-8 w-8 h-8 md:w-16 md:h-16 border-l-2 border-t-2 border-[#22d3ee]/20 rounded-tl-lg" />
      <div className="absolute bottom-12 right-4 md:bottom-24 md:right-8 w-8 h-8 md:w-16 md:h-16 border-r-2 border-b-2 border-[#22d3ee]/20 rounded-br-lg" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 bg-[#0c1326] border border-[#1a2540] rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-6 md:mb-8 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#22d3ee] animate-pulse" />
          <span className="font-mono text-[#22d3ee] text-[10px] md:text-xs tracking-widest uppercase text-center">
            2nd Year · Computer Engineering
          </span>
        </div>

        {/* Name - Adjusted clamping and forced wrap on tiny screens */}
        <h1
          className={`font-display font-extrabold leading-tight mb-4 transition-all duration-700 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ fontSize: 'clamp(2.2rem, 8vw, 5.5rem)' }}
        >
          <span className="block sm:inline text-[#e2e8f0]">Prajwal </span>
          <span className="block sm:inline gradient-text text-glow-cyan">Korgaonkar</span>
        </h1>

        {/* Typewriter */}
        <div
          className={`flex items-center justify-center gap-1 mb-6 transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="font-mono text-[#22d3ee] text-lg sm:text-xl md:text-2xl font-medium min-h-[1.5em]">
            {typedText}
          </span>
          <span className="cursor" />
        </div>

        {/* Tagline */}
        <p
          className={`text-[#64748b] text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-body transition-all duration-700 delay-300 px-2 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Computer Engineering Student interested in{' '}
          <span className="text-[#94a3b8] block sm:inline">Full Stack Development</span>
          <span className="hidden sm:inline"> and </span>
          <span className="text-[#94a3b8] block sm:inline sm:mt-0 mt-1">Problem Solving</span>
        </p>

        {/* Buttons - Stacked on mobile, row on tablet+ */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full max-w-md mx-auto sm:max-w-none transition-all duration-700 delay-[400ms] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <button
            onClick={() => handleScroll('#projects')}
            className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 rounded-lg"
          >
            <FolderOpen size={17} />
            View Projects
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 rounded-lg"
          >
            <Mail size={17} />
            Contact
          </button>
          <a
            href="/resume.pdf"
            download
            className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 rounded-lg"
          >
            <Download size={17} />
            Resume
          </a>
        </div>

        {/* Location badge */}
        <div
          className={`mt-10 md:mt-12 flex items-center justify-center gap-2 transition-all duration-700 delay-500 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-[#475569] font-mono text-xs">📍 Pune, India</span>
        </div>
      </div>

      {/* Scroll indicator - Added hidden on very short screens so it doesn't overlap */}
      <button
        onClick={() => handleScroll('#about')}
        className="hidden sm:block absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-[#475569] hover:text-[#22d3ee] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={26} />
      </button>
    </section>
  );
}