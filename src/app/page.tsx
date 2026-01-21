"use client";

import Image from "next/image";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { useId } from "react";

const homepageIcons: Record<string, JSX.Element> = {
  "À propos": <InfoOutlinedIcon fontSize="medium" />,
  "Voir le Portfolio": <WorkOutlineIcon fontSize="medium" />,
};


function ContactCircleButton({
  size = 128,
  iconSize = 26,
  className = "",
}: {
  size?: number;
  iconSize?: number;
  className?: string;
}) {
  const uid = useId();
  const gradientId = `circleGradient-${uid}`;
  const pathId = `circlePath-${uid}`;

  const ring = size;
  const inner = Math.round(size * 0.44);

  return (
    <a
      href="mailto:lilalazare12@gmail.com"
      aria-label="Me contacter"
      className={`relative group flex items-center justify-center ${className}`}
      style={{ width: ring, height: ring }}
    >
      <svg
        className="absolute inset-0 w-full h-full animate-slow-spin"
        viewBox="0 0 100 100"
        style={{ transformOrigin: "50% 50%" }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#fb7185" />
          </linearGradient>

          <path
            id={pathId}
            d="M 50, 50
               m -35, 0
               a 35,35 0 1,1 70,0
               a 35,35 0 1,1 -70,0"
          />
        </defs>

        <text fontSize="8" letterSpacing="2" fill={`url(#${gradientId})`}>
          <textPath href={`#${pathId}`}>ME CONTACTER • ME CONTACTER •</textPath>
        </text>
      </svg>

      <div
        className="relative z-10 rounded-full flex items-center justify-center bg-white/5 backdrop-blur border border-white/10 group-hover:scale-105 transition"
        style={{ width: inner, height: inner }}
      >
        <PhoneIcon
          sx={{
            fontSize: iconSize,
            background: "linear-gradient(135deg, #c084fc, #fb7185)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        />
      </div>
    </a>
  );
}


export default function Home() {
  const cards = [
    { title: "À propos", desc: "Découvrir mon parcours.", href: "/about" },
    { title: "Voir le Portfolio", desc: "Écouter / voir une sélection de projets et démos.", href: "/projects" },
  ];

  return (
    <section className="pt-8 pb-16">
      {/* HERO */}
      <div className="grid gap-10 items-start md:grid-cols-[1fr_auto_1fr]">
        {/* TEXTE */}
        <div className="md:pt-2">
          <h1 className="text-4xl md:text-5xl font-semibold leading-snug -mt-2">
            <span className="gradient-text">
              Ingénieure du son & Monteuse / Mixeuse
            </span>
            <br />
            pour Radios, Studios de Musique & Salles de Spectacle
          </h1>



          <p className="mt-10 max-w-2xl text-xl opacity-90">
            Je recherche une alternance d&apos;un an à partir de septembre 2026.
          </p>

          {/* MOBILE: bouton rond aussi (plus petit) */}
          <div className="mt-6 md:hidden">
            <ContactCircleButton size={104} iconSize={22} />
          </div>
        </div>

        {/* BOUTON (DESKTOP) AU MILIEU DU GAP */}
        <div className="hidden md:flex justify-center self-center translate-x-6">
          <ContactCircleButton size={128} iconSize={26} />
        </div>


        {/* IMAGE */}
        <div className="flex md:justify-end">
          <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden">
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/20" />
            <div className="absolute -inset-6 blur-2xl opacity-30 bg-white/10" />

            <Image
              src="/images/studio.jpg"
              alt="Studio / console audio"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* TUILES EN BAS */}
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {cards.map((c) => (
          <a
            key={c.title}
            href={c.href}
            className="py-3 px-4 rounded-xl glass flex flex-col items-center hover:bg-white/5 transition"
          >
            <div className="text-white/80 mb-1 scale-90">
              {homepageIcons[c.title] ?? <WorkOutlineIcon fontSize="medium" />}
            </div>
            <h3 className="text-sm font-medium">{c.title}</h3>
            <p className="opacity-70 mt-0.5 text-center text-xs">{c.desc}</p>
          </a>
        ))}
      </div>

      {/* Animation spin (si pas déjà dans globals.css) */}
      <style jsx global>{`
        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-slow-spin {
          animation: slow-spin 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
