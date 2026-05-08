import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — The Faith School Limited" },
      { name: "description", content: "Apply for a place at The Faith School Limited. Learn about our admissions process, requirements, and key dates." },
      { property: "og:title", content: "Admissions — The Faith School" },
      { property: "og:description", content: "Begin your child's journey at The Faith School. Apply today." },
    ],
  }),
  component: AdmissionsPage,
});

const steps = [
  { n: "01", t: "Inquire", d: "Complete the form below or call us. We'll send you our prospectus and fee schedule." },
  { n: "02", t: "School visit", d: "Come tour the campus, meet our team and see classrooms in action." },
  { n: "03", t: "Assessment", d: "Children participate in a friendly age-appropriate assessment and interview." },
  { n: "04", t: "Offer & enrol", d: "Successful applicants receive an offer letter and complete enrolment to secure a place." },
];

function AdmissionsPage() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!data.get("parent") || !data.get("email") || !data.get("child") || !data.get("class")) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Application received! We'll be in touch within 48 hours.");
    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="container-tight py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Admissions</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-tight md:text-6xl">Begin your child's journey</h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Applications are open for Crèche through JSS3. Our team will guide you through every step of the process.
          </p>
        </div>
      </section>

      <section className="container-tight py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <article key={s.n} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <p className="font-display text-4xl font-bold text-gold">{s.n}</p>
              <h3 className="mt-3 font-display text-xl font-bold text-primary">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-tight grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl font-bold text-primary">What you'll need</h2>
            <ul className="mt-6 space-y-3 text-sm text-foreground/80">
              {[
                "Child's birth certificate",
                "Two recent passport photographs",
                "Most recent school report (if applicable)",
                "Immunization record (Crèche & Nursery)",
                "Parent/guardian valid ID",
                "Application & assessment fee receipt",
              ].map((r) => (
                <li key={r} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-gold" />
                  {r}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl bg-primary p-7 text-primary-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Key dates</p>
              <ul className="mt-3 space-y-2 text-sm text-primary-foreground/85">
                <li>Open House: every 2nd Saturday</li>
                <li>Assessments: Mon – Thu, 10am</li>
                <li>New session resumes: September 8</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="rounded-3xl bg-card p-8 shadow-elegant md:p-10">
              <h3 className="font-display text-2xl font-bold text-primary">Inquiry & application form</h3>
              <p className="mt-1 text-sm text-muted-foreground">Tell us a little about your child and we'll be in touch within 48 hours.</p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <Field label="Parent / Guardian name *" name="parent" />
                <Field label="Email address *" name="email" type="email" />
                <Field label="Phone number" name="phone" type="tel" />
                <Field label="Child's full name *" name="child" />

                <div className="space-y-2">
                  <Label>Class applying for *</Label>
                  <Select name="class">
                    <SelectTrigger><SelectValue placeholder="Select class" /></SelectTrigger>
                    <SelectContent>
                      {["Crèche", "Pre-Nursery", "Nursery 1", "Nursery 2", "Primary 1", "Primary 2", "Primary 3", "Primary 4", "Primary 5", "Primary 6", "JSS1", "JSS2", "JSS3"].map(c => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Field label="Child's date of birth" name="dob" type="date" />
              </div>

              <div className="mt-5 space-y-2">
                <Label htmlFor="message">Message (optional)</Label>
                <Textarea id="message" name="message" rows={4} placeholder="Tell us anything we should know about your child." />
              </div>

              <Button type="submit" size="lg" className="mt-7 w-full rounded-full bg-gold-gradient text-gold-foreground hover:opacity-90">
                {submitted ? "Submit another inquiry" : "Submit application"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} />
    </div>
  );
}
