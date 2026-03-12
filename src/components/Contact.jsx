import { useState } from 'react';
import { Mail, Phone, Send, CheckCircle, MapPin } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch('https://formspree.io/f/xeergwng', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      alert("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="section-label">// contact</p>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-[#64748b] mt-4 text-sm font-body max-w-md mx-auto">
            Have a question, want to collaborate, or just say hello? Drop me a message.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left — info */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="reveal">
              <p className="text-[#94a3b8] text-sm font-body leading-relaxed mb-6">
                I'm currently a student and always open to learning opportunities,
                internship discussions, or just a friendly chat about programming and tech.
              </p>
            </div>

            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'prajwalkorgaonkar10@gmail.com',
                href: 'mailto:prajwalkorgaonkar10@gmail.com',
              },
              {
                icon: Phone,
                label: 'Phone',
                value: '+91 7821811018',
                href: 'tel:+917821811018',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Pune, Maharashtra, India',
                href: null,
              },
            ].map(({ icon: Icon, label, value, href }, i) => (
              <div
                key={label}
                className={`reveal reveal-delay-${i + 1} flex items-start gap-4 bg-[#0c1326] border border-[#1a2540] rounded-xl p-4 hover:border-[#22d3ee]/25 transition-colors`}
              >
                <div className="w-9 h-9 rounded-lg bg-[#22d3ee]/10 border border-[#22d3ee]/20 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-[#22d3ee]" />
                </div>
                <div>
                  <p className="font-mono text-[#475569] text-xs mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-[#94a3b8] text-sm font-body hover:text-[#22d3ee] transition-colors break-all"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-[#94a3b8] text-sm font-body">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right — form */}
          <div className="md:col-span-3 reveal reveal-delay-2">
            <div className="bg-[#0c1326] border border-[#1a2540] rounded-xl p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={48} className="text-[#22d3ee] mb-4" />
                  <h3 className="font-display font-bold text-[#e2e8f0] text-xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#64748b] text-sm font-body">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 btn-outline text-sm"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-mono text-xs text-[#64748b] mb-2 block">
                        name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-[#080d1a] border border-[#1a2540] rounded-lg px-4 py-3 text-[#e2e8f0] text-sm font-body placeholder-[#2d3f60] focus:outline-none focus:border-[#22d3ee]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-xs text-[#64748b] mb-2 block">
                        email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full bg-[#080d1a] border border-[#1a2540] rounded-lg px-4 py-3 text-[#e2e8f0] text-sm font-body placeholder-[#2d3f60] focus:outline-none focus:border-[#22d3ee]/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-xs text-[#64748b] mb-2 block">
                      message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="w-full bg-[#080d1a] border border-[#1a2540] rounded-lg px-4 py-3 text-[#e2e8f0] text-sm font-body placeholder-[#2d3f60] focus:outline-none focus:border-[#22d3ee]/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary flex items-center justify-center gap-2 w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#04070f]/30 border-t-[#04070f] rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <span className="text-white">Send Message</span> {/* Note: I simplified this slightly since I don't have your full CSS, but kept your logic */}
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}