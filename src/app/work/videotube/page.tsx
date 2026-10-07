import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export default function VideoTube() {
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
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">VideoTube</h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-xl text-[var(--muted-foreground)] mb-8">
              Full-Stack Video Sharing Platform
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-sm font-medium text-[var(--foreground)] mb-2">Mar 2026 — May 2026</p>
            <p className="text-sm font-medium text-[var(--muted-foreground)]">
              Node.js · Express.js · MongoDB · React · Vite · Zustand · JWT
            </p>
          </FadeIn>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <FadeIn delay={0.4}>
          <div className="w-full rounded-xl overflow-hidden border border-[var(--border)] relative">
            <img src="/projects/videotube/1.png" alt="VideoTube Home Screen" className="w-full h-auto object-contain" />
          </div>
        </FadeIn>
      </div>

      <div className="max-w-3xl mx-auto px-6 space-y-24 text-[var(--foreground)] leading-relaxed">
        
        {/* Overview */}
        <section>
          <FadeIn>
            <h2 className="text-2xl font-medium tracking-tight mb-4">Overview</h2>
            <p className="text-lg text-[var(--muted-foreground)]">
              A full-stack MERN video-sharing platform supporting video uploads, streaming, and creator dashboards with optimized metadata queries.
            </p>
          </FadeIn>
        </section>

        {/* The Problem */}
        <section>
          <FadeIn>
            <h2 className="text-2xl font-medium tracking-tight mb-4">The Problem</h2>
            <p className="text-[var(--muted-foreground)]">
              Designing a video discovery and viewing experience requires managing an extreme density of content without overwhelming the user, while maintaining a backend capable of delivering heavy assets quickly.
            </p>
          </FadeIn>
        </section>

        {/* Product Flow */}
        <section>
          <FadeIn>
            <h2 className="text-2xl font-medium tracking-tight mb-6">Product Flow</h2>
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 text-sm font-medium">
              <span className="px-4 py-2 border border-[var(--border)] rounded-full">Home</span>
              <ArrowRight className="w-4 h-4 text-[var(--muted-foreground)] hidden sm:block" />
              <span className="px-4 py-2 border border-[var(--border)] rounded-full">Search / Discovery</span>
              <ArrowRight className="w-4 h-4 text-[var(--muted-foreground)] hidden sm:block" />
              <span className="px-4 py-2 border border-[var(--border)] rounded-full">Watch Experience</span>
              <ArrowRight className="w-4 h-4 text-[var(--muted-foreground)] hidden sm:block" />
              <span className="px-4 py-2 border border-[var(--border)] rounded-full">Creator Dashboard</span>
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
              <img src="/projects/videotube/2.png" alt="VideoTube Explore" className="w-full h-auto object-contain" />
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="w-full rounded-xl overflow-hidden border border-[var(--border)]">
              <img src="/projects/videotube/3.png" alt="VideoTube Watch Screen" className="w-full h-auto object-contain" />
            </div>
          </FadeIn>

          <FadeIn>
            <div className="w-full rounded-xl overflow-hidden border border-[var(--border)]">
              <img src="/projects/videotube/4.png" alt="VideoTube Creator Dashboard" className="w-full h-auto object-contain" />
            </div>
          </FadeIn>
        </section>

        {/* Design Decisions */}
        <section>
          <FadeIn>
            <h2 className="text-2xl font-medium tracking-tight mb-4">Design Decisions</h2>
            <div className="space-y-6 text-[var(--muted-foreground)]">
              <p>
                <strong>Content Hierarchy:</strong> The Explore feed uses an uncompromised grid layout for rapid scanning, enforcing a strict visual order: Thumbnail first, Title second, Metadata third.
              </p>
              <p>
                <strong>Watch Experience:</strong> The video player takes dominant width for comfortable viewing. Engagement actions (Like, Save) are grouped directly below the title, while the "Up Next" sidebar is persistent on desktop to drive continuous discovery.
              </p>
              <p>
                <strong>Creator Workflow:</strong> The dashboard prioritizes high-level channel health (Views, Subscribers) before diving into video management, functioning as a dense data table for status tracking and quick actions.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Implementation */}
        <section>
          <FadeIn>
            <h2 className="text-2xl font-medium tracking-tight mb-4">Implementation</h2>
            <p className="text-[var(--muted-foreground)]">
              Architected the backend exposing 41 REST API endpoints. Implemented secure JWT authentication and bcrypt hashing. Optimized MongoDB queries using aggregation pipelines (with $lookup and $addFields), reducing database calls from 4 to 1 for complex channel metadata lookups.
            </p>
          </FadeIn>
        </section>

        {/* What I Learned */}
        <section>
          <FadeIn>
            <h2 className="text-2xl font-medium tracking-tight mb-4">What I Learned</h2>
            <p className="text-[var(--muted-foreground)]">
              Backend optimizations directly impact product design. By optimizing database queries and aggregation pipelines, the React frontend renders complex dashboards instantly without layout shifts or loading spinners.
            </p>
          </FadeIn>
        </section>

      </div>
    </article>
  );
}
