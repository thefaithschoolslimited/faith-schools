import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-students.jpg";
import creche from "@/assets/creche.jpg";
import primary from "@/assets/primary.jpg";
import secondary from "@/assets/secondary.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The Faith School Limited" },
      { name: "description", content: "A glimpse into life at The Faith School Limited — classrooms, events and joyful moments." },
      { property: "og:title", content: "Gallery — The Faith School" },
      { property: "og:description", content: "See life at The Faith School in pictures." },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: hero, caption: "Morning lessons in our primary block", span: "lg:col-span-2 lg:row-span-2" },
  { src: creche, caption: "Crèche playtime" },
  { src: primary, caption: "Reading hour" },
  { src: secondary, caption: "Junior secondary science lab" },
  { src: hero, caption: "Friendships that last" },
  { src: primary, caption: "Building strong foundations" },
];

function GalleryPage() {
  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="container-tight py-14 sm:py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Gallery</p>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">Life at The Faith School</h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            From quiet reading moments to joyful playtime — a peek inside our classrooms and corridors.
          </p>
        </div>
      </section>

      <section className="container-tight py-14 sm:py-20">
        <div className="grid auto-rows-[220px] gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map((it, i) => (
            <figure key={i} className={`group relative overflow-hidden rounded-2xl shadow-soft ${it.span ?? ""}`}>
              <img src={it.src} alt={it.caption} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-4 text-sm font-medium text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                {it.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
