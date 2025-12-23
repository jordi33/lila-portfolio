"use client";

import MicIcon from '@mui/icons-material/Mic';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';

// Mapping catégorie → icône pour homepage
const homepageIcons: Record<string, JSX.Element> = {
  "Cinematic Sound": <AudiotrackIcon fontSize="large" />,
  "Advertising & Trailers": <MicIcon fontSize="large" />,
  "Music & SFX Demos": <MusicNoteIcon fontSize="large" />,
};

export default function Home() {
  const cards = [
    { title: "Cinematic Sound", desc: "Design, voix, ambiances, mix." },
    { title: "Advertising & Trailers", desc: "Punchy, propre, impactant." },
    { title: "Music & SFX Demos", desc: "Courts, précis, de haute qualité." },
  ];

  return (
    <section className="py-20">
      <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
        <span className="gradient-text">Sound Engineer & Sound Designer</span>
        <br />
        pour Film, Média & Projets Créatifs
      </h1>

      <p className="mt-6 max-w-2xl text-lg opacity-80">
        Je crée du son qui renforce l’émotion, le storytelling et l’immersion.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="mailto:lilalazare12@gmail.com"
          className="px-5 py-3 rounded-xl glass hover:bg-white/10 transition"
        >
          Me contacter
        </a>
        <a href="/projects" className="px-5 py-3 rounded-xl border border-white/20 hover:bg-white/5 transition">
          Voir le Portfolio
        </a>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div key={c.title} className="p-6 rounded-2xl glass flex flex-col items-center">
            {/* Icône */}
            <div className="text-white mb-3">
              {homepageIcons[c.title] || <AudiotrackIcon fontSize="large" />}
            </div>
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="opacity-80 mt-1 text-center">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
