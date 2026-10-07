import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export default function KrishiSetu() {
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
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">KrishiSetu</h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-xl text-[var(--muted-foreground)] mb-8">
              Agricultural Supply Chain Tracking Platform
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-sm font-medium text-[var(--foreground)] mb-2">Aug 2025 — Sep 2025</p>
            <p className="text-sm font-medium text-[var(--muted-foreground)]">
              Express.js · MongoDB · QR Code · SHA-256
            </p>
          </FadeIn>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <FadeIn delay={0.4}>
          <div className="w-full rounded-xl overflow-hidden border border-[var(--border)] relative">
            <img src="/projects/krishisetu/1.png" alt="KrishiSetu Supply Chain Dashboard" className="w-full h-auto object-contain" />
          </div>
        </FadeIn>
      </div>

      <div className="max-w-3xl mx-auto px-6 space-y-24 text-[var(--foreground)] leading-relaxed">
        
        {/* Overview */}
        <section>
          <FadeIn>
            <h2 className="text-2xl font-medium tracking-tight mb-4">Overview</h2>
            <p className="text-lg text-[var(--muted-foreground)]">
              A QR-code-based agricultural supply chain platform connecting farmers, distributors, retailers, and consumers with farm-to-consumer traceability.
            </p>
          </FadeIn>
        </section>

        {/* The Problem */}
        <section>
          <FadeIn>
            <h2 className="text-2xl font-medium tracking-tight mb-4">The Problem</h2>
            <p className="text-[var(--muted-foreground)]">
              Stakeholders in agricultural supply chains lack a reliable, tamper-evident way to verify product origins, track shipments, or transfer ownership securely while maintaining accessibility for users with varying levels of digital literacy.
            </p>
          </FadeIn>
        </section>

        {/* Product Flow */}
        <section>
          <FadeIn>
            <h2 className="text-2xl font-medium tracking-tight mb-6">Product Flow</h2>
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 text-sm font-medium">
              <span className="px-4 py-2 border border-[var(--border)] rounded-full">Farmer Registration</span>
              <ArrowRight className="w-4 h-4 text-[var(--muted-foreground)] hidden sm:block" />
              <span className="px-4 py-2 border border-[var(--border)] rounded-full">QR Generation</span>
              <ArrowRight className="w-4 h-4 text-[var(--muted-foreground)] hidden sm:block" />
              <span className="px-4 py-2 border border-[var(--border)] rounded-full">Distributor Scan</span>
              <ArrowRight className="w-4 h-4 text-[var(--muted-foreground)] hidden sm:block" />
              <span className="px-4 py-2 border border-[var(--border)] rounded-full">Ownership Transfer</span>
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
              <img src="/projects/krishisetu/2.png" alt="KrishiSetu Farmer Dashboard" className="w-full h-auto object-contain" />
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="w-full rounded-xl overflow-hidden border border-[var(--border)]">
              <img src="/projects/krishisetu/3.png" alt="KrishiSetu QR Scanner" className="w-full h-auto object-contain" />
            </div>
          </FadeIn>

          <FadeIn>
            <div className="w-full rounded-xl overflow-hidden border border-[var(--border)]">
              <img src="/projects/krishisetu/4.png" alt="KrishiSetu Product Registration" className="w-full h-auto object-contain" />
            </div>
          </FadeIn>
        </section>

        {/* Design Decisions */}
        <section>
          <FadeIn>
            <h2 className="text-2xl font-medium tracking-tight mb-4">Design Decisions</h2>
            <div className="space-y-6 text-[var(--muted-foreground)]">
              <p>
                <strong>Information Hierarchy:</strong> For the primary producer view, actions like "Register Product" and "Scan QR" take center stage. The UI relies on descriptive states ("Ready in 5 days") and trust-building certification badges (Organic, Fair Trade).
              </p>
              <p>
                <strong>Product Registration:</strong> Registering a new agricultural batch requires significant metadata (origin, date, quantity, certifications). I designed this as a structured overlay modal to keep the user in context, logically cluster inputs, and prevent form fatigue.
              </p>
              <p>
                <strong>QR Code Scanning:</strong> The QR scanner is the crux of the physical-to-digital transition. Instead of burying it in a menu, it exists as a standalone interface block with explicit on-screen instructions to assist non-digitally-native users.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Implementation */}
        <section>
          <FadeIn>
            <h2 className="text-2xl font-medium tracking-tight mb-4">Implementation</h2>
            <p className="text-[var(--muted-foreground)]">
              Engineered the Express.js and MongoDB backend powering 13 application pages. The critical engineering component was implementing SHA-256-based ownership chaining, ensuring that every supply chain transfer is cryptographically preserved and tamper-evident.
            </p>
          </FadeIn>
        </section>

        {/* What I Learned */}
        <section>
          <FadeIn>
            <h2 className="text-2xl font-medium tracking-tight mb-4">What I Learned</h2>
            <p className="text-[var(--muted-foreground)]">
              Designing for a diverse range of users—from a farmer in the field to a distributor in a warehouse—requires bridging the physical and digital gap. The software must be forgiving, clear, and require minimal cognitive overhead while maintaining strict cryptographic security under the hood.
            </p>
          </FadeIn>
        </section>

      </div>
    </article>
  );
}
