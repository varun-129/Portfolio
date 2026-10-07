import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Varun Kumar | Product Design & Frontend",
  description: "Portfolio of Varun Kumar, an engineering student designing thoughtful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <nav className="sticky top-0 z-50 w-full bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)]">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight text-lg">VARUN</Link>
            <div className="flex gap-6 text-sm font-medium">
              <Link href="/#work" className="hover:text-[var(--accent)] transition-colors">Work</Link>
              <Link href="/#about" className="hover:text-[var(--accent)] transition-colors">About</Link>
              <Link href="/#contact" className="hover:text-[var(--accent)] transition-colors">Contact</Link>
            </div>
          </div>
        </nav>
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <footer className="border-t border-[var(--border)] py-12 mt-20">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--muted-foreground)]">
            <p>© 2026 Varun Kumar. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[var(--foreground)] transition-colors">Email</a>
              <a href="#" className="hover:text-[var(--foreground)] transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-[var(--foreground)] transition-colors">GitHub</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
