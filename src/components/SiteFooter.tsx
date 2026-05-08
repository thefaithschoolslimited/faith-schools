import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube } from "lucide-react";
import crest from "@/assets/crest.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-tight grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={crest} alt="" width={44} height={44} className="h-11 w-11" />
            <p className="font-display text-lg font-bold">The Faith School</p>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Nurturing minds, shaping character — from Crèche to JSS3 in a Christ-centered learning community.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/academics" className="hover:text-gold">Academics</Link></li>
            <li><Link to="/admissions" className="hover:text-gold">Admissions</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> Ayetoro, Oke-Igbo, Ondo State, Nigeria</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-gold" /> 0810 842 0754 (Call / WhatsApp)</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-gold" /> 0805 938 4727 (Call / WhatsApp)</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-gold" /> thefaithschoollimited@gmail.com</li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">School Hours</p>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>Mon – Thu: 7:00 am – 3:00 pm</li>
            <li>Fri: 7:00 am – 1:00 pm</li>
            <li>Sat &amp; Sun: Closed</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Facebook" className="rounded-full border border-primary-foreground/20 p-2 hover:border-gold hover:text-gold"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="rounded-full border border-primary-foreground/20 p-2 hover:border-gold hover:text-gold"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="rounded-full border border-primary-foreground/20 p-2 hover:border-gold hover:text-gold"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5">
        <div className="container-tight flex flex-col items-center justify-between gap-2 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} The Faith School Limited. All rights reserved.</p>
          <p>Faith · Excellence · Character</p>
        </div>
      </div>
    </footer>
  );
}
