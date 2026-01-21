import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "Sound Engineer — Portfolio",
  description: "Sound design & audio for image — showreel, projects, demos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen antialiased selection:bg-white/20">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0E0F12]/70 backdrop-blur">
          <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
            <a href="/" className="font-semibold tracking-wide">
              <span className="gradient-text" style={{ fontSize: '2rem' }}>Lila LAZARE</span>
            </a>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl px-4 pt-4">
          {children}
        </main>


      </body>
    </html>
  );
}
