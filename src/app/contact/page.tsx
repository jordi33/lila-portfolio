export default function ContactPage() {
  return (
    <section className="max-w-lg mx-auto py-10 space-y-6">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>

      <p className="opacity-80">
        Pour toute demande, projet ou collaboration :{" "}
        <a
          href="mailto:lilalazare12@gmail.com"
          className="underline hover:text-white/80 transition"
        >
          lilalazare12@gmail.com
        </a>
      </p>
    </section>
  );
}
