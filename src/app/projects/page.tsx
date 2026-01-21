"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

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

const isSoundCloud = (url: string) =>
  url.includes("soundcloud.com");

// Composant Lightbox pour vidéo
function VideoLightbox({ url }: { url: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Thumbnail YouTube auto */}
      <div
        className="relative w-full h-40 cursor-pointer rounded-xl overflow-hidden"
        onClick={() => setOpen(true)}
      >
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          light={true} // 👈 MINIATURE YOUTUBE AUTO
          playIcon={
            <div className="bg-white/20 rounded-full p-4 backdrop-blur">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          }
        />

        {/* voile léger pour look ciné */}
        <div className="pointer-events-none absolute inset-0 bg-black/10" />
      </div>

      {/* Lightbox */}
      {open && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setOpen(false)}
          >
            ×
          </button>

          <div className="w-full max-w-5xl aspect-video">
            <ReactPlayer
              url={url}
              playing={open}
              controls
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
    </>
  );
}

const allOrderSlugs = [
  "duck-tp",
  "mixage-numbers",
  "harry-potter-surround",
  "pub-renault",
  "pub-orangina-lila-et-jc",
  "birds-dessin-anime",
  "spot-pub-180-festival",
  "projet-jade-lila-podcast-horreur",
  "cine-night",
  "teckel-farceur",
  "projet-final-interview-jade-noah-lila",
  "mennen-pub",
  "rec-multicabine-cache-cache-tatoo",
]

export default function ProjectsPage() {
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const [activeCategory, setActiveCategory] = useState<string | "All">("All");

  const filtered = (() => {
    // Filtre catégorie
    const base =
      activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    // Tri custom UNIQUEMENT sur "Tous"
    if (activeCategory !== "All") return base;

    const rank = new Map(allOrderSlugs.map((slug, i) => [slug, i]));

    return [...base].sort((a, b) => {
      const ra = rank.has(a.slug) ? rank.get(a.slug)! : Number.POSITIVE_INFINITY;
      const rb = rank.has(b.slug) ? rank.get(b.slug)! : Number.POSITIVE_INFINITY;

      // 1) ceux dans la liste passent en premier dans l'ordre voulu
      if (ra !== rb) return ra - rb;

      // 2) le reste : comme tu préfères (ici : année décroissante puis titre)
      if (a.year !== b.year) return b.year - a.year;
      return a.title.localeCompare(b.title);
    });
  })();


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
                  {/* <div className="flex items-center justify-center w-full h-40 bg-black rounded-xl mb-3">
                    {categoryIcons[item.category] || (
                      <AudiotrackIcon fontSize="large" className="text-white/90" />
                    )}
                  </div> */}

                  <div className="w-full relative z-10">
                    <ReactPlayer
                      url={item.fileUrl}
                      controls
                      width="100%"
                      height="130px"
                      config={{
                        soundcloud: {
                          options: {
                            visual: true
                          }
                        }
                      }}
                    />
                  </div>
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
