import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Profiles', href: '#profiles' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#04070f]/90 backdrop-blur-xl border-b border-[#1a2540]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}
          className="font-mono text-[#22d3ee] text-lg font-medium tracking-wide hover:text-white transition-colors"
        >
          <span className="text-[#64748b]">&lt;</span>
          PK
          <span className="text-[#64748b]">/&gt;</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNav(link.href)}
                className="font-body text-[#94a3b8] hover:text-[#22d3ee] text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className="btn-primary text-sm py-2 px-5"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#94a3b8] hover:text-[#22d3ee] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#080d1a]/95 backdrop-blur-xl border-b border-[#1a2540] px-6 py-6">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-[#94a3b8] hover:text-[#22d3ee] text-base font-medium transition-colors w-full text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a href="/resume.pdf" download className="btn-primary inline-block text-sm">
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
