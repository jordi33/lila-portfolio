export default function AboutPage() {
  return (
    <section className="grid md:grid-cols-[1fr,2fr] gap-8 max-w-6xl mx-auto py-10">
      {/* Photo et contact */}
      <div className="rounded-2xl glass aspect-square overflow-hidden flex flex-col items-center justify-center p-4">
        <img
          src="/images/me.png"
          alt="Portrait de Lila"
          className="w-full h-full object-cover rounded-2xl mb-4"
        />
        <div className="text-center mt-2 space-y-1 text-sm opacity-80">
          <p>📧 lilalazare12@gmail.com</p>
          <p>📱 07 68 32 92 64</p>
          <p>🌍 Bordeaux, France</p>
          <p>🇫🇷 21 ans</p>
        </div>
      </div>

      {/* Présentation et CV */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold">À propos</h2>
        <p className="opacity-80">
          Étudiante en 2ème année de Bachelor Son et Musique à la SAE Institute, je recherche une alternance
          d'un an à partir de septembre 2026 afin de développer mes compétences en prise de son, mixage,
          gestion du matériel audio, montage, mastering et accompagnement de groupes.
        </p>

        <div>
          <h3 className="mt-4 mb-2 font-semibold text-xl">Diplômes et formations</h3>
          <ul className="list-disc pl-5 space-y-1 opacity-80">
            <li>Bachelor Son et Musique - SAE Institute Bordeaux (Depuis sept. 2024)</li>
            <li>BAFA - UCPA Saint-Médard-en-Jalles (Depuis juin 2024, en cours)</li>
            <li>Baccalauréat - Lycée André Malraux, Biarritz (Juin 2023)</li>
          </ul>
        </div>

        <div>
          <h3 className="mt-4 mb-2 font-semibold text-xl">Expériences professionnelles</h3>
          <ul className="list-disc pl-5 space-y-1 opacity-80">
            <li>
              Régisseuse son - Thelonious Café Jazz Club, Bordeaux (Fév 2025) : balances,
              mise à niveau, installation scène
            </li>
            <li>
              Régisseuse son - 18 Bourbon Street, Bordeaux (Janv-Fév 2026) : accueil groupes,
              balances, mise en place scène
            </li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="mt-4 mb-2 font-semibold text-xl">Compétences</h3>
            <ul className="list-disc pl-5 space-y-1 opacity-80">
              <li>Enregistrement et mixage de groupe en conditions studio</li>
              <li>Mixage en Dolby Atmos et surround</li>
              <li>Prise de son instruments acoustiques et amplifiés</li>
              <li>Montage, édition et post-production</li>
              <li>Travail en équipe sur publicités, fictions sonores, portraits audio, émissions radio</li>
            </ul>
          </div>
          <div>
            <h3 className="mt-4 mb-2 font-semibold text-xl">Logiciels & outils</h3>
            <p className="opacity-80">Pro Tools · Logic Pro · Ableton · Logiciels divers</p>

            <h3 className="mt-4 mb-2 font-semibold text-xl">Atouts</h3>
            <p className="opacity-80">Assidue · Ponctuelle · Organisée</p>

            <h3 className="mt-4 mb-2 font-semibold text-xl">Loisirs</h3>
            <p className="opacity-80">Musique, DJing, Sport</p>
          </div>
        </div>
      </div>
    </section>
  );
}
