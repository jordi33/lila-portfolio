"use client";

import { useState } from "react";
import ReactPlayer from "react-player";
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import MicIcon from '@mui/icons-material/Mic';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import projects from "../../../content/projects.json";

type Project = {
  slug: string;
  title: string;
  category: string;
  type: "audio" | "video";
  fileUrl: string;
  description: string;
  year: number;
  tools: string[];
  cover: string;
};

// Icônes par catégorie pour projets audio
const categoryIcons: Record<string, JSX.Element> = {
  Mixage: <AudiotrackIcon fontSize="large" className="text-white/90" />,
  Musique: <MusicNoteIcon fontSize="large" className="text-white/90" />,
  Podcast: <MicIcon fontSize="large" className="text-white/90" />,
  "Pub audio": <MicIcon fontSize="large" className="text-white/90" />,
  Radio: <MicIcon fontSize="large" className="text-white/90" />,
};

// Composant Lightbox pour vidéo
function VideoLightbox({ url }: { url: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="relative w-full h-40 cursor-pointer rounded-xl overflow-hidden"
        onClick={() => setOpen(true)}
      >
        <video src={url} className="w-full h-full object-cover brightness-50" muted />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/20 rounded-full p-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
          <div className="w-full max-w-4xl">
            <ReactPlayer url={url} playing={open} controls width="100%" height="100%" />
          </div>
        </div>
      )}
    </>
  );
}

export default function ProjectsPage() {
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const [activeCategory, setActiveCategory] = useState<string | "All">("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Portfolio complet</h2>

      {/* Menu filtres */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-4 py-2 rounded-xl border transition-transform ${activeCategory === "All" ? "bg-white/10 border-white/20" : "border-white/20 hover:bg-white/5"
            }`}
        >
          Tous
        </button>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className={`px-4 py-2 rounded-xl border transition-transform ${activeCategory === c ? "bg-white/10 border-white/20" : "border-white/20 hover:bg-white/5"
              }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grille projets */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.slug}
            className="p-6 rounded-2xl glass overflow-hidden transform transition hover:scale-105 hover:shadow-2xl"
          >
            {/* Card media */}
            <div className="mb-4 flex flex-col items-center">
              {item.type === "audio" ? (
                <div className="flex flex-col items-center w-full">
                  <div className="flex items-center justify-center w-full h-40 bg-black rounded-xl mb-3">
                    {categoryIcons[item.category] || <AudiotrackIcon fontSize="large" className="text-white/90" />}
                  </div>
                  <audio controls className="w-full" src={item.fileUrl} />
                </div>
              ) : (
                <VideoLightbox url={item.fileUrl} />
              )}
            </div>

            {/* Infos projet */}
            <h4 className="text-lg font-semibold">{item.title}</h4>
            <p className="text-sm opacity-80 mt-1">{item.description}</p>
            <p className="text-sm opacity-70 mt-2">
              {item.year} · {item.tools.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
