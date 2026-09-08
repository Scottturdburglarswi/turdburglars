// Layout.tsx — Shared Navbar + Footer for Turd Burglars
// Design: Fun & informal — light sky-blue header so logo pops, centered nav, orange CTAs, grass-green accents
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ASSETS } from "@/lib/assets";
import { Menu, X, Facebook, Phone, Mail, MapPin, Clock, Shield, FileText } from "lucide-react";
import { useQuoteModal } from "@/contexts/QuoteModalContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-[#82caf6] shadow-md border-b-4 border-[oklch(0.65_0.18_45)]">
      {/* Desktop — logo + telefone centralizados, nav à direita */}
      <div className="hidden md:flex flex-row items-center justify-between py-3 px-6 max-w-6xl mx-auto w-full">
        {/* Esquerda: logo + telefone centralizados */}
        <div className="flex flex-col items-center gap-0.5">
          <Link href="/" className="flex items-center">
            <img
              src={ASSETS.logo}
              alt="Turd Burglars Logo"
              className="h-14 w-auto drop-shadow-md"
            />
          </Link>
          <span className="flex items-center gap-1.5 text-[oklch(0.22_0.05_240)] font-bold text-sm pl-1">
            <Phone size={13} />
            (715) 559-1855
          </span>
        </div>
        {/* Direita: nav links + social */}
        <nav className="flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-200 ${
                location === l.href
                  ? "bg-[oklch(0.65_0.18_45)] text-white shadow"
                  : "text-[oklch(0.22_0.05_240)] hover:bg-[oklch(0.65_0.18_45)]/20 hover:text-[oklch(0.22_0.05_240)]"
              }`}
            >
              {l.label.toUpperCase()}
            </Link>
          ))}
          <a
            href="https://www.facebook.com/turdburglarswi"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 w-9 h-9 rounded-full bg-[#1877f2] flex items-center justify-center hover:scale-110 transition-transform shadow"
            aria-label="Facebook"
          >
            <Facebook size={16} className="text-white" />
          </a>
          {/* Google Maps link */}
          <a
            href="https://share.google/2QNi6YFTqhoMaXa2d"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow"
            aria-label="Google"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </a>
        </nav>
      </div>

      {/* Mobile — logo + telefone centralizados, hamburger absoluto à direita */}
      <div className="md:hidden flex items-center justify-center px-4 py-3 relative">
        <div className="flex flex-col items-center gap-0.5">
          <Link href="/" className="flex items-center">
            <img
              src={ASSETS.logo}
              alt="Turd Burglars Logo"
              className="h-12 w-auto drop-shadow"
            />
          </Link>

        </div>
        <button
          className="absolute right-4 text-[oklch(0.22_0.05_240)] p-2 rounded-lg hover:bg-[oklch(0.65_0.18_45)]/20 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[#6dbef4] border-t border-[#5ab0ee] px-4 pb-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-bold tracking-wide transition-colors ${
                location === l.href
                  ? "bg-[oklch(0.65_0.18_45)] text-white"
                  : "text-[oklch(0.22_0.05_240)] hover:bg-[oklch(0.65_0.18_45)]/20"
              }`}
            >
              {l.label.toUpperCase()}
            </Link>
          ))}
          <a
            href="https://www.facebook.com/turdburglarswi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 text-[oklch(0.22_0.05_240)] font-bold text-sm hover:bg-[oklch(0.65_0.18_45)]/20 rounded-xl"
          >
            <Facebook size={16} /> Facebook
          </a>
          <a
            href="https://share.google/2QNi6YFTqhoMaXa2d"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 text-[oklch(0.22_0.05_240)] font-bold text-sm hover:bg-[oklch(0.65_0.18_45)]/20 rounded-xl"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google
          </a>
          {/* Telefone no dropdown mobile */}
          <span className="flex items-center gap-2 px-4 py-3 text-[oklch(0.22_0.05_240)] font-bold text-sm">
            <Phone size={16} /> (715) 559-1855
          </span>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#82caf6] text-[oklch(0.22_0.05_240)]">
      {/* Main footer grid */}
      <div className="container py-12 md:py-16 text-[oklch(0.22_0.05_240)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <img
                src={ASSETS.logo}
                alt="Turd Burglars"
                className="h-16 w-auto drop-shadow-lg hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-[oklch(0.22_0.05_240)]/70 text-sm leading-relaxed">
              Eau Claire's trusted pet waste removal service since 2017. We keep your yard clean, safe, and poo-free — so you can enjoy it!
            </p>
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://www.facebook.com/turdburglarswi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1877f2] flex items-center justify-center hover:scale-110 transition-transform shadow"
                aria-label="Facebook"
              >
                <Facebook size={16} className="text-white" />
              </a>
              <a
                href="https://share.google/2QNi6YFTqhoMaXa2d"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow"
                aria-label="Google Reviews"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-[oklch(0.22_0.05_240)] font-bold text-sm uppercase tracking-widest mb-5 border-b border-[oklch(0.22_0.05_240)]/20 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[oklch(0.22_0.05_240)]/70 hover:text-[oklch(0.22_0.05_240)] text-sm font-medium transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_45)] group-hover:scale-125 transition-transform shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="text-[oklch(0.22_0.05_240)]/70 hover:text-[oklch(0.22_0.05_240)] text-sm font-medium transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_45)] group-hover:scale-125 transition-transform shrink-0" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[oklch(0.22_0.05_240)]/70 hover:text-[oklch(0.22_0.05_240)] text-sm font-medium transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_45)] group-hover:scale-125 transition-transform shrink-0" />
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-[oklch(0.22_0.05_240)] font-bold text-sm uppercase tracking-widest mb-5 border-b border-[oklch(0.22_0.05_240)]/20 pb-2">Our Services</h4>
            <ul className="space-y-3">
              {["Residential Yard Cleanup", "Weekly & Bi-Weekly Plans", "One-Time Spring Cleanup"].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-[oklch(0.22_0.05_240)]/70 hover:text-[oklch(0.22_0.05_240)] text-sm font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_45)] group-hover:scale-125 transition-transform shrink-0" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-[oklch(0.22_0.05_240)] font-bold text-sm uppercase tracking-widest mb-5 border-b border-[oklch(0.22_0.05_240)]/20 pb-2">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[oklch(0.22_0.05_240)]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone size={14} className="text-[oklch(0.65_0.18_45)]" />
                </div>
                <div>
                  <div className="text-[oklch(0.22_0.05_240)]/60 text-xs uppercase tracking-widest mb-0.5">Phone</div>
                  <span className="text-[oklch(0.22_0.05_240)] font-bold text-sm">(715) 559-1855</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[oklch(0.22_0.05_240)]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={14} className="text-[oklch(0.65_0.18_45)]" />
                </div>
                <div>
                  <div className="text-[oklch(0.22_0.05_240)]/60 text-xs uppercase tracking-widest mb-0.5">Email</div>
                  <a href="mailto:scott@turdburglarswi.com" className="text-[oklch(0.22_0.05_240)] font-bold text-sm hover:text-[oklch(0.45_0.15_220)] transition-colors break-all">
                    scott@turdburglarswi.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[oklch(0.22_0.05_240)]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-[oklch(0.65_0.18_45)]" />
                </div>
                <div>
                  <div className="text-[oklch(0.22_0.05_240)]/60 text-xs uppercase tracking-widest mb-0.5">Service Area</div>
                  <p className="text-[oklch(0.22_0.05_240)] font-semibold text-sm">Eau Claire & Chippewa Valley, WI</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[oklch(0.22_0.05_240)]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={14} className="text-[oklch(0.65_0.18_45)]" />
                </div>
                <div>
                  <div className="text-[oklch(0.22_0.05_240)]/60 text-xs uppercase tracking-widest mb-0.5">Response Time</div>
                  <p className="text-[oklch(0.22_0.05_240)] font-semibold text-sm">Within 24–48 hours</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[oklch(0.22_0.05_240)]/20">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[oklch(0.22_0.05_240)]/60 text-xs text-center sm:text-left">
            © {year} Turd Burglars LLC. All rights reserved. Proudly serving Eau Claire & the Chippewa Valley.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-[oklch(0.22_0.05_240)]/60 hover:text-[oklch(0.22_0.05_240)] text-xs flex items-center gap-1 transition-colors">
              <Shield size={12} /> Privacy Policy
            </Link>
            <span className="text-[oklch(0.22_0.05_240)]/30">|</span>
            <Link href="/terms" className="text-[oklch(0.22_0.05_240)]/60 hover:text-[oklch(0.22_0.05_240)] text-xs flex items-center gap-1 transition-colors">
              <FileText size={12} /> Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// CTA Banner — reusable across pages
export function CtaBanner() {
  const { openModal } = useQuoteModal();
  return (
    <section className="bg-gradient-to-r from-[oklch(0.52_0.15_145)] to-[oklch(0.42_0.14_145)] border-t-4 border-[oklch(0.38_0.13_145)]">
      <div className="container py-8 md:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <img src={ASSETS.noPoop} alt="No Poop" className="w-14 h-14 md:w-16 md:h-16 drop-shadow-lg shrink-0" />
            <div>
              <h3 className="font-fun text-white text-xl md:text-2xl leading-tight">Ready for a Poo-Free Lawn?</h3>
              <p className="text-white/80 text-sm font-semibold">We scoop the poop so you don't have to. Serving Eau Claire & the Chippewa Valley!</p>
              <span className="flex items-center gap-1.5 text-white font-bold text-sm mt-1">
                <Phone size={14} /> (715) 559-1855
              </span>
            </div>
          </div>
          <button
            onClick={openModal}
            className="shrink-0 bg-[oklch(0.22_0.05_240)] text-white font-bold px-6 py-3.5 rounded-full text-sm tracking-wide hover:bg-[oklch(0.18_0.05_240)] transition-all hover:scale-105 shadow-xl w-full sm:w-auto text-center cursor-pointer"
          >
            CLICK HERE For a POO FREE Lawn!
          </button>
        </div>
      </div>
    </section>
  );
}

// Burglar + dogs scene on top of grass — reusable
export function GrassScene() {
  return (
    <div className="w-full" style={{ marginBottom: '-4px', lineHeight: 0 }}>
      <img
        src="/images/grass-hero_0bdcd2f9.jpg"
        alt="Turd Burglar and dog on grass"
        className="w-full block"
        style={{ display: 'block' }}
      />
    </div>
  );
}

// Hero banner for inner pages — same image/config as Home hero
export function PageHero({ title, subtitle }: { title: React.ReactNode; subtitle?: string }) {
  const { openModal } = useQuoteModal();
  return (
    <>
    <section
      className="relative w-full overflow-hidden"
      style={{ height: 'clamp(320px, 56vw, 640px)' }}
    >
      {/* Background image — mobile: cover+center, desktop: 110% auto + marginTop -240px */}
      <div
        className="absolute inset-0 hero-bg-desktop"
        style={{
          backgroundImage: `url('/images/hero-gemini_e8f58741.png')`,
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Text overlay in sky zone — top 28% para ficar acima dos personagens */}
      <div
        className="absolute inset-x-0 top-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none"
        style={{ height: '28%' }}
      >
        <div className="flex flex-col items-center gap-2 pointer-events-auto">
          <h1 className="font-fun text-[oklch(0.22_0.05_240)] text-3xl md:text-5xl leading-tight px-2 drop-shadow-sm">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[oklch(0.22_0.05_240)]/85 font-semibold text-sm md:text-base max-w-xl mx-auto px-4">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {/* CTA button on grass — desktop */}
      <div className="hidden sm:flex absolute bottom-[8%] inset-x-0 justify-center pointer-events-none">
        <button
          onClick={openModal}
          className="pointer-events-auto bg-[oklch(0.65_0.18_45)] hover:bg-[oklch(0.58_0.18_45)] text-white font-bold rounded-full shadow-2xl hover:scale-105 transition-all duration-200 border-2 border-white/40 cursor-pointer"
          style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.2rem)', padding: '0.5em 2em' }}
        >
          Click Here &amp; Let Us Steal Your Poop! 💩
        </button>
      </div>
    </section>
    {/* CTA button below hero — mobile only */}
    <div className="flex sm:hidden justify-center py-4 bg-white">
      <button
        onClick={openModal}
        className="bg-[oklch(0.65_0.18_45)] hover:bg-[oklch(0.58_0.18_45)] text-white font-bold rounded-full shadow-xl hover:scale-105 transition-all duration-200 border-2 border-white/40 cursor-pointer text-sm px-6 py-3"
      >
        Click Here &amp; Let Us Steal Your Poop! 💩
      </button>
    </div>
    </>
  );
}
