import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export default function CareerPilot() {
  return (
    <article className="flex-1 pb-32">
      <header className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--accent)] mb-12 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to work
            </Link>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">CareerPilot</h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-xl text-[var(--muted-foreground)] mb-8">
              AI-Powered Career Intelligence Platform
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-sm font-medium text-[var(--foreground)] mb-2">Jun 2026 — Jul 2026</p>
            <p className="text-sm font-medium text-[var(--muted-foreground)]">
              FastAPI · Next.js · Python · NLP · LLM APIs · Sentence Transformers · ChromaDB
            </p>
          </FadeIn>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <FadeIn delay={0.4}>
          <div className="w-full rounded-xl overflow-hidden border border-[var(--border)] relative">
            <img src="/projects/careerpilot/1.png" alt="CareerPilot Dashboard" className="w-full h-auto object-contain" />
          </div>
        </FadeIn>
      </div>

      <div className="max-w-3xl mx-auto px-6 space-y-24 text-[var(--foreground)] leading-relaxed">
        
        {/* Overview */}
        <section>
          <FadeIn>
            <h2 className="text-2xl font-medium tracking-tight mb-4">Overview</h2>
            <p className="text-lg text-[var(--muted-foreground)]">
              Full-stack AI career platform for automated resume analysis and personalized career feedback.
            </p>
          </FadeIn>
        </section>

        {/* The Problem */}
        <section>
          <FadeIn>
            <h2 className="text-2xl font-medium tracking-tight mb-4">The Problem</h2>
            <p className="text-[var(--muted-foreground)]">
              Job seekers often struggle to understand how well their resume aligns with a particular role and which skills they should improve. Turning complex resume and job-description analysis into actionable information is a significant design challenge.
            </p>
          </FadeIn>
        </section>

        {/* Product Flow */}
        <section>
          <FadeIn>
            <h2 className="text-2xl font-medium tracking-tight mb-6">Product Flow</h2>
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 text-sm font-medium">
              <span className="px-4 py-2 border border-[var(--border)] rounded-full">Resume</span>
              <ArrowRight className="w-4 h-4 text-[var(--muted-foreground)] hidden sm:block" />
              <span className="px-4 py-2 border border-[var(--border)] rounded-full">Job Description</span>
              <ArrowRight className="w-4 h-4 text-[var(--muted-foreground)] hidden sm:block" />
              <span className="px-4 py-2 border border-[var(--border)] rounded-full">Analysis</span>
              <ArrowRight className="w-4 h-4 text-[var(--muted-foreground)] hidden sm:block" />
              <span className="px-4 py-2 border border-[var(--border)] rounded-full">Skill Gap</span>
              <ArrowRight className="w-4 h-4 text-[var(--muted-foreground)] hidden sm:block" />
              <span className="px-4 py-2 border border-[var(--border)] rounded-full">Improvement</span>
            </div>
          </FadeIn>
        </section>

        {/* Key Screens */}
        <section className="space-y-12">
          <FadeIn>
            <h2 className="text-2xl font-medium tracking-tight mb-8">Key Screens</h2>
          </FadeIn>
          
          <FadeIn>
            <div className="w-full rounded-xl overflow-hidden border border-[var(--border)]">
              <img src="/projects/careerpilot/2.png" alt="Predictive Simulator" className="w-full h-auto object-contain" />
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="w-full rounded-xl overflow-hidden border border-[var(--border)]">
              <img src="/projects/careerpilot/3.png" alt="Realtime AI Interview" className="w-full h-auto object-contain" />
            </div>
          </FadeIn>
        </section>

        {/* Design Decisions */}
        <section>
          <FadeIn>
            <h2 className="text-2xl font-medium tracking-tight mb-4">Design Decisions</h2>
            <div className="space-y-6 text-[var(--muted-foreground)]">
              <p>
                <strong>Information Architecture:</strong> The interface separates complex AI analysis into manageable sections. For the interview environment, a split-pane layout keeps technical terms persistent while the AI conversation commands focus, reducing cognitive overload.
              </p>
              <p>
                <strong>Product Approach:</strong> Instead of a static score, the Predictive Simulator allows users to visualize how missing curriculum nodes impact their match score. Toggling skills gives the user control and turns a rejection into a learning roadmap.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Implementation */}
        <section>
          <FadeIn>
            <h2 className="text-2xl font-medium tracking-tight mb-4">Implementation</h2>
            <p className="text-[var(--muted-foreground)]">
              Engineered an asynchronous FastAPI backend integrated with a Next.js 14 frontend. The platform uses a deterministic-first ATS scoring approach across six weighted pillars. The skill-matching pipeline combines semantic similarity with Sentence Transformers and a ChromaDB fallback.
            </p>
          </FadeIn>
        </section>

        {/* What I Learned */}
        <section>
          <FadeIn>
            <h2 className="text-2xl font-medium tracking-tight mb-4">What I Learned</h2>
            <p className="text-[var(--muted-foreground)]">
              Bridging the gap between heavy NLP operations and a fluid UI is critical. AI products rely entirely on their UX—if the data presentation is overwhelming, users won't trust the platform. Structuring information architecturally to unfold progressively made the intelligence actionable.
            </p>
          </FadeIn>
        </section>

      </div>
    </article>
  );
}
