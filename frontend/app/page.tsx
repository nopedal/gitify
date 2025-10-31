'use client';

import { useState } from 'react';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Error submitting:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated gradient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black to-black"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-zinc-800/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>
      
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-6 py-8 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="transition-transform group-hover:scale-110 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </div>
              <span className="text-xl font-semibold">gitify</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#how" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block">
                How it works
              </a>
              <a href="#pricing" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block">
                Pricing
              </a>
              <a href="#signup" className="text-sm font-medium text-white hover:text-zinc-300 transition-colors">
                Join Waitlist →
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-medium text-zinc-400 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Git-powered CMS for agencies
            </div>
            
            {/* Headline */}
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none animate-fade-in-up animation-delay-100">
              Notion meets GitHub.
              <br />
              <span className="text-zinc-500">Built for agencies.</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-200">
              Let your clients edit their website content like Notion, while everything stays in Git. 
              One flat price, unlimited sites, 5-minute setup.
            </p>

            {/* Signup Form */}
            <div id="signup" className="max-w-lg pt-4 animate-fade-in-up animation-delay-300">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@agency.com"
                      required
                      className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 placeholder-zinc-600 text-white transition-all"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-all disabled:opacity-50 whitespace-nowrap transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                    </button>
                  </div>
                  <p className="text-sm text-zinc-600">
                    $67/month · Unlimited sites · White-label ready
                  </p>
                </form>
              ) : (
                <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg animate-fade-in">
                  <p className="text-zinc-300 font-medium">✓ Thanks! We'll be in touch soon.</p>
                </div>
              )}
            </div>
          </div>

          {/* Social Proof */}
          <div className="max-w-4xl mx-auto mt-20 animate-fade-in-up animation-delay-400">
            <div className="flex items-center justify-center gap-8 text-zinc-600 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
                <span>Works with GitHub & GitLab</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-zinc-800 rounded-full"></div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                </svg>
                <span>SOC 2 compliant</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-zinc-800 rounded-full"></div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Used by 50+ agencies</span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div id="how" className="max-w-6xl mx-auto grid md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 mt-32 rounded-2xl overflow-hidden animate-fade-in-up animation-delay-500">
            {/* Feature 1 */}
            <div className="p-10 bg-black hover:bg-zinc-950 transition-all duration-300 group">
              <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zinc-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover:text-white transition-colors">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-white transition-colors">Git-Native</h3>
              <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                All content changes are commits. Version control, rollbacks, and audit trails built-in.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-10 bg-black hover:bg-zinc-950 transition-all duration-300 border-x border-zinc-800 group">
              <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zinc-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover:text-white transition-colors">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-white transition-colors">5-Minute Setup</h3>
              <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                Connect your repo, invite clients, done. Works with Next.js, Astro, Hugo, and more.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-10 bg-black hover:bg-zinc-950 transition-all duration-300 group">
              <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zinc-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover:text-white transition-colors">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-white transition-colors">White-Label</h3>
              <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                Custom domains, your branding. Your clients never know we exist.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="max-w-4xl mx-auto mt-40 space-y-16 animate-fade-in-up animation-delay-600">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold">How it works</h2>
              <p className="text-zinc-500 text-lg">Three steps to give your clients a better CMS experience</p>
            </div>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-sm font-semibold group-hover:bg-white group-hover:text-black transition-all">
                  1
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Connect your repository</h3>
                  <p className="text-zinc-500 leading-relaxed">Link your GitHub or GitLab repo. We'll automatically detect your content structure and set everything up.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-sm font-semibold group-hover:bg-white group-hover:text-black transition-all">
                  2
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Invite your clients</h3>
                  <p className="text-zinc-500 leading-relaxed">Send them a link. They get a clean Notion-like editor. No Git knowledge needed. No technical skills required.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-sm font-semibold group-hover:bg-white group-hover:text-black transition-all">
                  3
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Every edit becomes a commit</h3>
                  <p className="text-zinc-500 leading-relaxed">Content changes push directly to your repo. Full version control, always. Review, rollback, or approve changes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div id="pricing" className="max-w-lg mx-auto mt-40 animate-fade-in-up animation-delay-700">
            <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-all duration-300">
              <div className="text-center space-y-6">
                <div>
                  <div className="text-sm text-zinc-500 mb-2">Simple pricing</div>
                  <div className="text-5xl font-bold mb-2">$67</div>
                  <div className="text-zinc-500">per month</div>
                </div>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3 text-sm">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Unlimited sites</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Unlimited team members</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>White-label ready</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Priority support</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Custom branding</span>
                  </div>
                </div>
                <a href="#signup" className="block w-full px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-all text-center transform hover:scale-[1.02] active:scale-[0.98]">
                  Get Started
                </a>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-40 text-center space-y-8 animate-fade-in-up animation-delay-800">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to upgrade your client's CMS?</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Join the waitlist and be the first to know when we launch.</p>
            <a href="#signup" className="inline-block px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
              Join Waitlist →
            </a>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-zinc-900 mt-40">
          <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-600">
              <p>© 2025 gitify.dev · Built for agencies who care about their workflow</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Docs</a>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
                <a href="mailto:hello@gitify.dev" className="hover:text-white transition-colors">Contact</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes pulse-slower {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-700 {
          animation-delay: 0.7s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}