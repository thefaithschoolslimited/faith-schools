import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Faith School Limited" },
      { name: "description", content: "Get in touch with The Faith School Limited. Visit, call or send us a message." },
      { property: "og:title", content: "Contact The Faith School" },
      { property: "og:description", content: "We'd love to hear from you. Reach our admissions team today." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (!f.get("name") || !f.get("email") || !f.get("message")) {
      toast.error("Please complete the form before sending.");
      return;
    }
    toast.success("Message sent! We'll reply within one business day.");
    e.currentTarget.reset();
  }

  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="container-tight py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Contact</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-tight md:text-6xl">We'd love to hear from you</h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Whether you're considering a place for your child or just have a question — our team is here to help.
          </p>
        </div>
      </section>

      <section className="container-tight grid gap-10 py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="space-y-5">
            {[
              { icon: MapPin, title: "Visit us", body: "Ayetoro, Oke-Igbo, Ondo State, Nigeria" },
              { icon: Phone, title: "Call / WhatsApp", body: "0810 842 0754  •  0805 938 4727" },
              { icon: Mail, title: "Email", body: "thefaithschoollimited@gmail.com" },
              { icon: Clock, title: "Office hours", body: "Mon – Thu · 7:00 am – 3:00 pm  |  Fri · 7:00 am – 1:00 pm" },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-gradient text-gold-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-primary">{title}</p>
                  <p className="text-sm text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl shadow-soft">
            <iframe
              title="School location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=3.30%2C6.45%2C3.45%2C6.55&layer=mapnik"
              className="h-64 w-full"
              loading="lazy"
            />
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-7 rounded-3xl bg-card p-8 shadow-elegant md:p-10">
          <h2 className="font-display text-3xl font-bold text-primary">Send a message</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="space-y-2"><Label htmlFor="name">Your name</Label><Input id="name" name="name" /></div>
            <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" /></div>
            <div className="space-y-2 md:col-span-2"><Label htmlFor="subject">Subject</Label><Input id="subject" name="subject" /></div>
            <div className="space-y-2 md:col-span-2"><Label htmlFor="message">Message</Label><Textarea id="message" name="message" rows={6} /></div>
          </div>
          <Button type="submit" size="lg" className="mt-7 w-full rounded-full bg-gold-gradient text-gold-foreground hover:opacity-90">
            Send message
          </Button>
        </form>
      </section>
    </>
  );
}
