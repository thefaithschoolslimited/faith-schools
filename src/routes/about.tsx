import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, HeartHandshake } from "lucide-react";
import primary from "@/assets/primary.jpg";
import founder from "@/assets/founder.jpg.asset.json";
import headOfSchool from "@/assets/head-of-school.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Faith School Limited" },
      { name: "description", content: "Learn about The Faith School Limited — our mission, vision, leadership, and Christ-centered approach to education in Nigeria." },
      { property: "og:title", content: "About The Faith School Limited" },
      { property: "og:description", content: "Our mission, vision, and the people behind a Christ-centered education from Crèche to JSS3." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About us" title="A school built on faith and excellence" intro="For over a decade, we've helped Nigerian children grow into curious learners and kind people — guided by Christian values, gifted teachers and a thriving community." />

      <section className="container-tight grid gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-3xl shadow-elegant">
          <img src={primary} alt="Students at The Faith School" loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Our story</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl text-primary">Rooted in purpose. Growing every day.</h2>
          <p className="mt-5 text-muted-foreground">
            Founded by a small group of educators and parents who believed children deserve more than just a curriculum, The Faith School Limited has grown into a vibrant community serving learners from Crèche through JSS3.
          </p>
          <p className="mt-4 text-muted-foreground">
            Today, our spacious classrooms, science labs, sports field and art studios are home to children who are encouraged to ask questions, lead with kindness, and pursue excellence in everything they do.
          </p>
        </div>
      </section>

      <section className="bg-cream py-14 sm:py-20">
        <div className="container-tight grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, title: "Our Mission", body: "To raise a generation of God-loving, knowledge-seeking and character-driven young people equipped to serve their world." },
            { icon: Eye, title: "Our Vision", body: "To be the most trusted Christ-centered school in West Africa — where every child feels known, challenged and inspired." },
            { icon: HeartHandshake, title: "Our Values", body: "Faith. Excellence. Character. Compassion. Community. These guide every decision we make." },
          ].map(({ icon: Icon, title, body }) => (
            <article key={title} className="rounded-2xl bg-card p-8 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient text-gold-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-primary">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-tight py-14 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Leadership</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl text-primary">Meet our leadership</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { name: "Kolajo Joseph", role: "Founder", img: founder.url },
            { name: "Kolajo Ajibola Esther", role: "Head of School", img: headOfSchool.url },
            { name: "Mrs. Esan", role: "Head of Early Years", img: "" },
          ].map((p) => (
            <article key={p.name} className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
              {p.img ? (
                <img src={p.img} alt={p.name} loading="lazy" width={500} height={600} className="mx-auto h-40 w-40 rounded-full border-4 border-gold object-cover object-top" />
              ) : (
                <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-gold-gradient font-display text-5xl font-bold text-gold-foreground">
                  E
                </div>
              )}
              <h3 className="mt-5 font-display text-xl font-bold text-primary">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.role}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="bg-hero-gradient text-primary-foreground">
      <div className="container-tight py-14 sm:py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">{intro}</p>
      </div>
    </section>
  );
}
