import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import creche from "@/assets/creche.jpg";
import primary from "@/assets/primary.jpg";
import secondary from "@/assets/secondary.jpg";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — The Faith School Limited" },
      { name: "description", content: "Explore our programs from Crèche through JSS3 — curriculum, subjects, and what makes learning at The Faith School distinctive." },
      { property: "og:title", content: "Academics at The Faith School" },
      { property: "og:description", content: "Crèche to JSS3 — a Christ-centered curriculum that nurtures every learner." },
    ],
  }),
  component: AcademicsPage,
});

const programs = [
  {
    img: creche,
    eyebrow: "Crèche · Pre-Nursery · Nursery",
    title: "Early Years (0 – 5 years)",
    body: "A warm, play-based environment where little ones build confidence, language and social skills through music, stories and discovery.",
    points: ["Phonics & early literacy", "Numbers & sensory play", "Bible stories & character", "Outdoor exploration", "Daily nap & nutrition care"],
  },
  {
    img: primary,
    eyebrow: "Primary 1 – Primary 6",
    title: "Primary School",
    body: "Children develop strong foundations across English, Mathematics, Science and Humanities — supported by enriching arts, ICT and PE.",
    points: ["English & Mathematics", "Basic Science & Tech", "Social & Civic studies", "French & Yoruba", "Computer studies", "Christian Religious Studies"],
  },
  {
    img: secondary,
    eyebrow: "JSS1 – JSS2 – JSS3",
    title: "Junior Secondary School",
    body: "An inquiry-driven program with science labs, project work and leadership opportunities — preparing students for the BECE and beyond.",
    points: ["Mathematics & English", "Basic Science & Technology", "Business & Agriculture", "Cultural & Creative Arts", "Computer Studies", "Career & guidance counselling"],
  },
];

function AcademicsPage() {
  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="container-tight py-14 sm:py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Academics</p>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">A learning journey from Crèche to JSS3</h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Each stage of our program is intentionally designed to challenge, support and celebrate your child — academically, spiritually and socially.
          </p>
        </div>
      </section>

      <section className="container-tight space-y-16 py-14 sm:py-20">
        {programs.map((p, i) => (
          <article key={p.title} className={`grid gap-10 lg:grid-cols-2 lg:items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
            <div className="overflow-hidden rounded-3xl shadow-elegant">
              <img src={p.img} alt={p.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{p.eyebrow}</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl text-primary">{p.title}</h2>
              <p className="mt-4 text-muted-foreground">{p.body}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-gradient text-gold-foreground"><Check className="h-3 w-3" /></span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-cream py-14 sm:py-20">
        <div className="container-tight grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <h2 className="font-display text-3xl font-bold sm:text-4xl text-primary">Beyond the classroom</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Music, drama, sports, debate and our weekly chapel give every child a chance to discover their gifts and lead with confidence.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-soft">
              Apply for a place <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
