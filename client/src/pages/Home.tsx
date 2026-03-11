// Home.tsx — Turd Burglars Homepage — Mobile-First
// Design: Fun & informal, sky-blue hero, orange CTAs, grass-green accents, navy footer
import { Link } from "wouter";
import { Navbar, Footer, CtaBanner, GrassScene } from "@/components/Layout";
import { useQuoteModal } from "@/contexts/QuoteModalContext";
import { useSEO } from "@/hooks/useSEO";
import { useCountUp } from "@/hooks/useCountUp";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { ASSETS } from "@/lib/assets";
import { useState, useRef, useEffect, ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import { ChevronLeft, ChevronRight, X } from "lucide-react";

function SectionFadeUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className="fade-up"
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}

const features = [
  {
    icon: "🧹",
    title: "Thorough Cleanup",
    desc: "We search every corner of your yard and bag up every last turd. No escapees on our watch!",
  },
  {
    icon: "📅",
    title: "Flexible Plans",
    desc: "One-time spring clean, monthly, or biweekly — we fit your schedule and your budget.",
  },
  {
    icon: "⭐",
    title: "5-Star Rated",
    desc: "Hundreds of happy customers across the Chippewa Valley trust us to keep their yards clean and fresh.",
  },
  {
    icon: "🐕",
    title: "Pet & Family Safe",
    desc: "Keeping a clean yard prevents diseases that spread from pet to pet — and to your family.",
  },
];

function GalleryLightbox() {
  const [active, setActive] = useState<number | null>(null);

  const prev = () =>
    setActive((a) => (a === null ? 0 : (a - 1 + ASSETS.dogs.length) % ASSETS.dogs.length));
  const next = () =>
    setActive((a) => (a === null ? 0 : (a + 1) % ASSETS.dogs.length));

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
        {ASSETS.dogs.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="overflow-hidden rounded-xl md:rounded-2xl aspect-square group focus:outline-none focus:ring-4 focus:ring-[oklch(0.65_0.18_45)]"
          >
            <img
              src={src}
              alt={`Happy dog ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/88 flex items-center justify-center p-3"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white z-10"
            onClick={() => setActive(null)}
          >
            <X size={22} />
          </button>
          <button
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={26} />
          </button>
          <img
            src={ASSETS.dogs[active]}
            alt="Dog"
            className="max-w-[88vw] max-h-[82vh] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </>
  );
}

function StatBadge({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) {
  const { display, ref } = useCountUp(target, 1800, suffix);
  return (
    <div ref={ref} className="bg-white/30 backdrop-blur-sm rounded-xl px-4 py-3 text-center">
      <div className="font-fun text-[oklch(0.22_0.05_240)] text-2xl">{display}</div>
      <div className="text-[oklch(0.22_0.05_240)]/80 text-xs font-bold">{label}</div>
    </div>
  );
}

export default function Home() {
  const { openModal } = useQuoteModal();
  useSEO({
    title: "Turd Burglars – Pet Waste Cleanup Service | Eau Claire, WI",
    description: "Eau Claire's #1 pooper scooper service. One-time, monthly & biweekly plans for the Chippewa Valley. Licensed, insured & 5-star rated since 2017. Call (715) 559-1855.",
    canonical: "/",
  });
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ── HERO ── */}
      {/* Image is ~56% tall relative to width. Sky occupies top ~40% of image.
          Text is positioned in the sky area (top 0–38%) and must NOT overlap
          the burglar (center-left, ~35–65% from top) or dog (center-right, ~35–80%). */}
      {/* ── HERO ── */}
      {/*
        Image aspect ratio: ~56% (height = 56% of width).
        Sky zone: top ~38% of image. Characters start at ~40%.
        Text is pinned to the sky zone. backgroundRepeat: no-repeat prevents duplication.
      */}
      {/* HERO: desktop mantém config original, mobile usa cover */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: 'clamp(320px, 56vw, 640px)' }}
      >
        {/* Desktop: 110% auto + marginTop -240px (original). Mobile: cover + center 30% */}
        <div
          className="absolute inset-0 hero-bg-desktop"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/76xKr3Udm2m24dqV2piHLu/hero-gemini_e8f58741.png')`,
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Text in sky zone — top 26% of section height (céu azul) */}
        <div
          className="absolute inset-x-0 top-0 flex flex-col items-center text-center px-4 pointer-events-none hero-text-zone"
          style={{ height: '22%', marginTop: '30px' }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-1 pointer-events-auto">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028378508/mauC7Xq7GwXUvn389Jy89d/turdburglarssloganhorizontal_d6ca3bbc.avif"
              alt="We Are The Poo-Fessional Choice!"
              className="drop-shadow-sm w-auto"
              style={{ height: 'clamp(2.2rem, 6.5vw, 5.2rem)', maxWidth: '90vw', objectFit: 'contain' }}
            />
            <p
              className="font-semibold text-[oklch(0.15_0.05_240)] max-w-2xl mx-auto leading-snug hero-p"
              style={{ fontSize: 'clamp(0.6rem, 1.3vw, 0.95rem)' }}
            >
              Our pets are part of our family — the part we <em>can't</em> imagine not having.
              The pet waste? That part we <strong>can</strong> imagine living without! 💩
            </p>
            <div
              className="inline-block bg-white/80 backdrop-blur-sm rounded-full font-bold text-[oklch(0.15_0.05_240)] hero-badge"
              style={{ fontSize: 'clamp(0.5rem, 1vw, 0.8rem)', padding: '0.2em 1.1em' }}
            >
              🐾 Proudly serving <strong>Eau Claire & the Chippewa Valley</strong> and surrounding areas.
            </div>
          </div>
        </div>
        {/* Botão CTA na área verde da grama — visível apenas no DESKTOP */}
        <div className="hidden sm:flex absolute bottom-[8%] inset-x-0 justify-center pointer-events-none">
          <button
            onClick={openModal}
            className="pointer-events-auto bg-[oklch(0.65_0.18_45)] hover:bg-[oklch(0.58_0.18_45)] text-white font-bold rounded-full shadow-2xl hover:scale-105 transition-all duration-200 border-2 border-white/40 cursor-pointer"
            style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.2rem)', padding: '0.5em 2em' }}
          >
            Click Here & Let Us Steal Your Poop! 💩
          </button>
        </div>
      </section>
      {/* Botão CTA abaixo da hero — visível apenas no MOBILE */}
      <div className="flex sm:hidden justify-center py-4 bg-white">
        <button
          onClick={openModal}
          className="bg-[oklch(0.65_0.18_45)] hover:bg-[oklch(0.58_0.18_45)] text-white font-bold rounded-full shadow-xl hover:scale-105 transition-all duration-200 border-2 border-white/40 cursor-pointer text-sm px-6 py-3"
        >
          Click Here & Let Us Steal Your Poop! 💩
        </button>
      </div>
      {/* ── WHY TURD BURGLARS ── */}
      <SectionFadeUp>
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-3xl md:text-4xl text-center mb-8 md:mb-10">
            Why Turd Burglars? 🕵️
          </h2>
          {/* Mobile: 2 cols, Desktop: 4 cols */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 stagger-children">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-[oklch(0.97_0.02_220)] rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-3xl md:text-4xl mb-2 md:mb-3">{f.icon}</div>
                <h3 className="font-fun text-[oklch(0.22_0.05_240)] text-lg md:text-xl mb-1 md:mb-2">{f.title}</h3>
                <p className="text-[oklch(0.4_0.02_240)] text-xs md:text-sm leading-relaxed font-medium hidden sm:block">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </SectionFadeUp>

      {/* ── WE PICK IT UP ── */}
      <SectionFadeUp delay={0}>
      <section className="py-14 md:py-20 bg-[oklch(0.75_0.11_220)]">
        <div className="container">
          {/* Top: text left, photo right */}
          <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 mb-12">
            <div className="flex-1 order-2 lg:order-1">
              <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-3xl md:text-4xl leading-tight mb-5">
                We Pick It Up So You Don't Have To! 🎉
              </h2>
              <p className="text-[oklch(0.22_0.05_240)]/90 font-semibold text-sm md:text-base leading-relaxed mb-4">
                No one enjoys the dreaded task of picking up after your pet. That's exactly where{" "}
                <strong>Turd Burglars</strong> come in. We offer professional pet waste cleanup solutions
                that fit your budget and busy schedule — whether it's a one-time spring clean or a
                scheduled routine cleanup all season long.
              </p>
              <p className="text-[oklch(0.22_0.05_240)]/80 font-medium text-sm md:text-base leading-relaxed mb-4">
                We're here to make your life easier and keep your yard clear of harmful contaminants.
                Dog waste contains bacteria and parasites that can be dangerous for kids, pets, and even
                your grass. A clean yard is important for <em>everyone</em> in the family!
              </p>
              <p className="text-[oklch(0.22_0.05_240)]/80 font-medium text-sm md:text-base leading-relaxed mb-6">
                Since 2017, we've served over <strong>230 happy customers</strong> across Eau Claire and
                the Chippewa Valley — and we've maintained a perfect 5-star rating every step of the way.
                When you hire Turd Burglars, you're not just getting a cleanup service. You're getting a
                team that genuinely cares about your yard, your pets, and your family.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <StatBadge target={230} suffix="+" label="Happy Customers" />
                <StatBadge target={5} suffix=" ★" label="Google Rating" />
                <StatBadge target={2017} suffix="" label="Est. in Eau Claire" />
              </div>
              <Link
                href="/about"
                className="inline-block bg-[oklch(0.22_0.05_240)] text-white font-bold px-6 md:px-7 py-3 md:py-3.5 rounded-full hover:bg-[oklch(0.18_0.05_240)] transition-all hover:scale-105 shadow-lg text-sm md:text-base"
              >
                Meet the Team →
              </Link>
            </div>
            {/* Right: large feature photo */}
            <div className="w-full lg:w-[45%] order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028378508/mauC7Xq7GwXUvn389Jy89d/van-autumn_67a2fc61.png"
                  alt="Turd Burglars service van in autumn"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Bottom: 4-photo grid with real team photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 stagger-children">
            <div className="rounded-2xl overflow-hidden aspect-square shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028378508/mauC7Xq7GwXUvn389Jy89d/owner-photo_eebaf306.png"
                alt="Scott - owner of Turd Burglars"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028378508/mauC7Xq7GwXUvn389Jy89d/van-photo_33050f48.png"
                alt="Turd Burglars team with service van"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028378508/mauC7Xq7GwXUvn389Jy89d/service-worker_a39c88dc.jpg"
                alt="Turd Burglars technician at work"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028378508/mauC7Xq7GwXUvn389Jy89d/team-girl-puppy_a0081716.jpg"
                alt="Turd Burglars team member with puppy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      </SectionFadeUp>

      {/* ── REVIEWS CAROUSEL ── */}
      <ReviewsCarousel />

      <CtaBanner />
      <Footer />
    </div>
  );
}
