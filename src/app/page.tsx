import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1">
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--muted)] border border-[var(--border)] text-xs font-medium mb-8 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Product Design • UX/UI • Frontend
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 max-w-4xl leading-tight">
              Hi, I'm Varun. <br className="hidden md:block" />
              <span className="text-[var(--muted-foreground)]">
                An engineering student building digital products with a focus on clarity, usability, and thoughtful interaction.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mb-10 leading-relaxed">
              I combine engineering with product thinking to turn complex workflows into simple, usable experiences.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex gap-4 items-center">
              <Link 
                href="#work" 
                className="bg-[var(--foreground)] text-[var(--background)] px-6 py-3 rounded-md font-medium hover:bg-[var(--foreground)]/90 transition-colors"
              >
                Explore my work
              </Link>
              <Link 
                href="#about" 
                className="px-6 py-3 rounded-md font-medium hover:bg-[var(--muted)] transition-colors"
              >
                About me
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SELECTED WORK SECTION */}
      <section id="work" className="py-32 px-6 bg-[var(--background)] border-t border-[var(--border)] overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="mb-20">
              <h2 className="text-3xl font-medium tracking-tight mb-2">Selected Work</h2>
              <p className="text-[var(--muted-foreground)] text-lg">Real products I've built and designed.</p>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-32">
            
            {/* PROJECT 1: CAREERPILOT */}
            <FadeIn>
              <div className="group flex flex-col gap-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-2">
                  <div className="max-w-2xl">
                    <h3 className="text-3xl font-medium tracking-tight mb-2 group-hover:text-[var(--accent)] transition-colors">CareerPilot</h3>
                    <p className="text-lg text-[var(--muted-foreground)] mb-4">AI-Powered Career Intelligence Platform</p>
                    <div className="flex flex-wrap gap-2 text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wider">
                      <span>2026</span>
                      <span>•</span>
                      <span>Product Design & Full-Stack</span>
                      <span>•</span>
                      <span>Web App</span>
                    </div>
                  </div>
                  <Link href="/work/careerpilot" className="inline-flex items-center gap-2 text-[var(--foreground)] font-medium hover:text-[var(--accent)] transition-colors group-hover:translate-x-1 duration-300">
                    View case study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <Link href="/work/careerpilot" className="block relative overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                  {/* Actual Screenshot */}
                  <img 
                    src="/projects/careerpilot/1.png" 
                    alt="CareerPilot Dashboard" 
                    className="w-full h-auto object-contain rounded-xl border border-[var(--border)]"
                  />
                </Link>
              </div>
            </FadeIn>

            {/* PROJECT 2: VIDEOTUBE */}
            <FadeIn>
              <div className="group flex flex-col gap-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-2">
                  <div className="max-w-2xl">
                    <h3 className="text-3xl font-medium tracking-tight mb-2 group-hover:text-[var(--accent)] transition-colors">VideoTube</h3>
                    <p className="text-lg text-[var(--muted-foreground)] mb-4">Full-Stack Video Sharing Platform</p>
                    <div className="flex flex-wrap gap-2 text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wider">
                      <span>2026</span>
                      <span>•</span>
                      <span>Product Design & Backend</span>
                      <span>•</span>
                      <span>Web App</span>
                    </div>
                  </div>
                  <Link href="/work/videotube" className="inline-flex items-center gap-2 text-[var(--foreground)] font-medium hover:text-[var(--accent)] transition-colors group-hover:translate-x-1 duration-300">
                    View case study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <Link href="/work/videotube" className="block relative overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                  {/* Actual Screenshot */}
                  <img 
                    src="/projects/videotube/1.png" 
                    alt="VideoTube Home Screen" 
                    className="w-full h-auto object-contain rounded-xl border border-[var(--border)]"
                  />
                </Link>
              </div>
            </FadeIn>

            {/* PROJECT 3: KRISHISETU */}
            <FadeIn>
              <div className="group flex flex-col gap-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-2">
                  <div className="max-w-2xl">
                    <h3 className="text-3xl font-medium tracking-tight mb-2 group-hover:text-[var(--accent)] transition-colors">KrishiSetu</h3>
                    <p className="text-lg text-[var(--muted-foreground)] mb-4">Agricultural Supply Chain Tracking Platform</p>
                    <div className="flex flex-wrap gap-2 text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wider">
                      <span>2025</span>
                      <span>•</span>
                      <span>Product Design & Engineering</span>
                      <span>•</span>
                      <span>Web App</span>
                    </div>
                  </div>
                  <Link href="/work/krishisetu" className="inline-flex items-center gap-2 text-[var(--foreground)] font-medium hover:text-[var(--accent)] transition-colors group-hover:translate-x-1 duration-300">
                    View case study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <Link href="/work/krishisetu" className="block relative overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                  {/* Actual Screenshot */}
                  <img 
                    src="/projects/krishisetu/1.png" 
                    alt="KrishiSetu Dashboard" 
                    className="w-full h-auto object-contain rounded-xl border border-[var(--border)]"
                  />
                </Link>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ABOUT & BEYOND SECTION */}
      <section id="about" className="py-32 px-6 border-t border-[var(--border)] bg-[var(--muted)]/20 overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          
          <div>
            <FadeIn>
              <h2 className="text-3xl font-medium tracking-tight mb-8">About</h2>
            </FadeIn>
            <div className="text-lg text-[var(--foreground)] leading-relaxed space-y-6">
              <FadeIn delay={0.1}>
                <p>
                  I'm Varun, an Electronics & Communication Engineering student at NSUT (CGPA: 7.24).
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p>
                  I enjoy building digital products and thinking about how people interact with them. My projects have taken me from AI-powered career tools to video platforms and agricultural supply-chain systems.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p>
                  My engineering background helps me approach products systematically, while building real applications has taught me to think about interfaces, workflows, and usability.
                </p>
              </FadeIn>
            </div>
          </div>

          <div>
            <FadeIn>
              <h2 className="text-3xl font-medium tracking-tight mb-8">Beyond the projects</h2>
            </FadeIn>
            <div className="space-y-10">
              <FadeIn delay={0.1}>
                <h3 className="text-sm font-medium text-[var(--muted-foreground)] uppercase tracking-wide mb-4">Achievements</h3>
                <ul className="space-y-3 font-medium text-[var(--foreground)]">
                  <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 mt-1 text-[var(--accent)] flex-shrink-0"/> Solved 300+ Data Structures & Algorithms problems.</li>
                  <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 mt-1 text-[var(--accent)] flex-shrink-0"/> Earned SQL-50 Badge on LeetCode.</li>
                  <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 mt-1 text-[var(--accent)] flex-shrink-0"/> Participated in 4 hackathons (Team Lead in 2).</li>
                </ul>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <h3 className="text-sm font-medium text-[var(--muted-foreground)] uppercase tracking-wide mb-4">Leadership</h3>
                <div className="font-medium text-[var(--foreground)]">
                  <p className="mb-2">EM & PR Member — Shakesjeer Society, NSUT</p>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed font-normal">
                    Responsible for event operations, volunteer coordination, and sponsorship pitching.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-32 px-6 border-t border-[var(--border)] overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/4">
            <FadeIn>
              <h2 className="text-3xl font-medium tracking-tight mb-2">Skills</h2>
            </FadeIn>
          </div>
          <div className="md:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            <FadeIn delay={0.1}>
              <div>
                <h3 className="text-xs font-medium text-[var(--muted-foreground)] mb-6 tracking-wider uppercase border-b border-[var(--border)] pb-3">Product & Design</h3>
                <ul className="space-y-3 font-medium text-sm">
                  <li>Product Thinking</li>
                  <li>UX/UI</li>
                  <li>User Flows</li>
                  <li>Information Architecture</li>
                  <li>Interaction Design</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <h3 className="text-xs font-medium text-[var(--muted-foreground)] mb-6 tracking-wider uppercase border-b border-[var(--border)] pb-3">Development</h3>
                <ul className="space-y-3 font-medium text-sm">
                  <li>React / Next.js</li>
                  <li>TypeScript / JS</li>
                  <li>HTML / CSS / Tailwind</li>
                  <li>Node.js / Express.js</li>
                  <li>FastAPI</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div>
                <h3 className="text-xs font-medium text-[var(--muted-foreground)] mb-6 tracking-wider uppercase border-b border-[var(--border)] pb-3">Data / AI</h3>
                <ul className="space-y-3 font-medium text-sm">
                  <li>Python</li>
                  <li>SQL</li>
                  <li>MongoDB</li>
                  <li>LLM APIs</li>
                  <li>Sentence Transformers</li>
                  <li>ChromaDB</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div>
                <h3 className="text-xs font-medium text-[var(--muted-foreground)] mb-6 tracking-wider uppercase border-b border-[var(--border)] pb-3">Tools</h3>
                <ul className="space-y-3 font-medium text-sm">
                  <li>Git & GitHub</li>
                  <li>Postman</li>
                  <li>Docker</li>
                  <li>Render & Vercel</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 border-t border-[var(--border)] text-center bg-[var(--background)] overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Let's connect.</h2>
            <p className="text-xl text-[var(--muted-foreground)] mb-12">I'm always open to discussing product design opportunities.</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:varun.kumar_ug23@nsut.ac.in" className="bg-[var(--foreground)] text-[var(--background)] px-8 py-4 rounded-md font-medium hover:bg-[var(--foreground)]/90 transition-colors">
                Email Me
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="bg-[var(--background)] border border-[var(--border)] px-8 py-4 rounded-md font-medium hover:bg-[var(--muted)] transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/varun-129" target="_blank" rel="noopener noreferrer" className="bg-[var(--background)] border border-[var(--border)] px-8 py-4 rounded-md font-medium hover:bg-[var(--muted)] transition-colors">
                GitHub
              </a>
              <a href="https://leetcode.com/u/Varun9354/" target="_blank" rel="noopener noreferrer" className="bg-[var(--background)] border border-[var(--border)] px-8 py-4 rounded-md font-medium hover:bg-[var(--muted)] transition-colors">
                LeetCode
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
