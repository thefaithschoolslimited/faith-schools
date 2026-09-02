import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Heart, Trophy, Users, Sparkles, GraduationCap } from "lucide-react";
import heroLoop from "@/assets/hero-loop.mp4.asset.json";
import creche from "@/assets/creche.jpg";
import primary from "@/assets/primary.jpg";
import secondary from "@/assets/secondary.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Faith School Limited — Faith, Excellence, Character" },
      { name: "description", content: "A Christ-centered Nigerian school offering quality education from Crèche to JSS3. Discover our programs and apply today." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden text-primary-foreground sm:min-h-[85vh]">
        <HeroVideo src={heroLoop.url} poster={primary} className="absolute inset-0 -z-10 overflow-hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/60" />
        <div className="container-tight relative grid w-full gap-12 py-20 sm:py-24 md:py-32 lg:grid-cols-12 lg:items-center">
          <div className="min-w-0 lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold sm:px-4 sm:text-xs">
              <Sparkles className="h-3.5 w-3.5 shrink-0" /> Admissions open · 2026/2027
            </span>
            <h1 className="mt-6 font-display text-[2.1rem] font-bold leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl">
              Where <span className="italic text-gold">faith</span> meets a love for learning.
            </h1>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/80 sm:mt-6 sm:text-lg">
              The Faith School Limited offers a nurturing, Christ-centered education from Crèche through JSS3 — building strong minds, kind hearts, and bold character.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link to="/admissions" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-elegant transition-transform hover:-translate-y-0.5">
                Begin Application <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/academics" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-white/10">
                Explore Academics
              </Link>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/15 pt-8 sm:mt-14 sm:gap-6">
              {[
                { k: "15+", v: "Years of service" },
                { k: "1:12", v: "Teacher ratio" },
                { k: "98%", v: "Parent satisfaction" },
              ].map((s) => (
                <div key={s.v} className="min-w-0">
                  <dt className="font-display text-2xl font-bold text-gold sm:text-3xl">{s.k}</dt>
                  <dd className="mt-1 text-[10px] uppercase tracking-wider text-primary-foreground/70 sm:text-xs">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>


      {/* VALUES */}
      <section className="container-tight py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Our Promise</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">An education built on four pillars</h2>
          <p className="mt-4 text-muted-foreground">
            Every classroom, lesson and conversation at The Faith School is anchored in values that prepare your child for life.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: BookOpen, title: "Academic Rigor", desc: "A challenging curriculum aligned with national standards and global best practice." },
            { icon: Heart, title: "Christian Values", desc: "A safe, nurturing environment grounded in faith, respect and compassion." },
            { icon: Users, title: "Whole-child Care", desc: "Pastoral care, counselling and clubs that develop confident, well-rounded learners." },
            { icon: Trophy, title: "Excellence", desc: "Consistent results, gifted teachers, and pathways into top secondary schools." },
          ].map(({ icon: Icon, title, desc }) => (
            <article key={title} className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient text-gold-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-cream py-24">
        <div className="container-tight">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Programs</p>
              <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">From first steps to junior secondary</h2>
            </div>
            <Link to="/academics" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold">
              View all programs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { img: creche, label: "Crèche – Nursery", title: "Early Years (0 – 5)", desc: "Play-based learning that ignites curiosity and builds language, motor and social skills." },
              { img: primary, label: "Primary 1 – 6", title: "Primary School", desc: "Strong foundations in literacy, numeracy and Christian values across core subjects." },
              { img: secondary, label: "JSS1 – JSS3", title: "Junior Secondary", desc: "Inquiry-led learning, science labs and leadership prep aligned with the BECE curriculum." },
            ].map((p) => (
              <article key={p.title} className="overflow-hidden rounded-2xl bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold">{p.label}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-primary">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="container-tight py-24">
        <div className="grid gap-12 rounded-3xl bg-primary p-10 text-primary-foreground md:p-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Parent voices</p>
            <blockquote className="mt-6 font-display text-3xl leading-snug md:text-4xl">
              “My daughter has blossomed. The teachers genuinely care, and the values she learns at school echo what we teach at home.”
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-gold-foreground font-bold">A</div>
              <div>
                <p className="font-semibold">Mrs. Adaeze Okonkwo</p>
                <p className="text-sm text-primary-foreground/70">Parent · Primary 4</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-gold/30 bg-white/5 p-8">
              <GraduationCap className="h-10 w-10 text-gold" />
              <h3 className="mt-4 font-display text-2xl font-bold">Ready to join our family?</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">Applications for the new session are now open. Reserve a place for your child today.</p>
              <Link to="/admissions" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-gold-foreground">
                Start Application <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
