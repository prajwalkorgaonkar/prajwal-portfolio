import { Github, Linkedin, Code, Heart } from 'lucide-react';

const socials = [
  { icon: Github, href: 'https://github.com/prajwalkorgaonkar', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/prajwal-korgaonkar-b59771342', label: 'LinkedIn' },
  { icon: Code, href: 'https://leetcode.com/u/prajwalkorgaonkar/', label: 'LeetCode' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1a2540] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-mono text-[#475569] text-sm">
          <span className="text-[#22d3ee]">&lt;</span>
          <span>PK</span>
          <span className="text-[#22d3ee]">/&gt;</span>
          <span className="ml-2">Prajwal Korgaonkar</span>
        </div>

        <p className="text-[#475569] font-body text-xs flex items-center gap-1.5">
          Built with <Heart size={11} className="text-[#22d3ee]" fill="#22d3ee" /> using React & Tailwind CSS
        </p>

        <div className="flex items-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#475569] hover:text-[#22d3ee] transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
