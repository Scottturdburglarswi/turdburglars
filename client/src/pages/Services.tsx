// Services.tsx — Turd Burglars Services Page
import React, { ReactNode } from "react";
import { Navbar, Footer, CtaBanner, PageHero } from "@/components/Layout";
import { useQuoteModal } from "@/contexts/QuoteModalContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useSEO } from "@/hooks/useSEO";

function SectionFadeUp({ children }: { children: ReactNode }) {
  const ref = useScrollAnimation(0.1);
  return <div ref={ref} className="fade-up">{children}</div>;
}

const SERVICE_WORKER_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028378508/mauC7Xq7GwXUvn389Jy89d/service-worker_a39c88dc.jpg";
const SERVICE_DOG_SIGN_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028378508/mauC7Xq7GwXUvn389Jy89d/service-dog-sign_2306d480.png";

const plans = [
  {
    icon: "🧹",
    title: "One-Time Clean",
    badge: "Popular",
    badgeColor: "bg-[oklch(0.65_0.18_45)] text-white",
    desc: "Perfect for a spring clean after the snow melts, or whenever you need a fresh start. One visit, total relief.",
    features: [
      "Full yard search & bag",
      "No commitment required",
      "Same-day availability",
      "48-hr satisfaction guarantee",
    ],
  },
  {
    icon: "📅",
    title: "Monthly Service",
    badge: null,
    badgeColor: "",
    desc: "We come once a month to keep your yard in check. Great for smaller dogs or low-traffic yards.",
    features: [
      "Monthly scheduled visits",
      "Consistent clean yard",
      "Easy to cancel anytime",
      "48-hr satisfaction guarantee",
    ],
  },
  {
    icon: "🏆",
    title: "Biweekly Service",
    badge: "Best Value",
    badgeColor: "bg-[oklch(0.52_0.15_145)] text-white",
    desc: "Twice a month means your yard stays consistently clean all season long. The most popular choice for multi-dog households!",
    features: [
      "Twice-monthly visits",
      "Best for 2+ dogs",
      "Priority scheduling",
      "48-hr satisfaction guarantee",
    ],
  },
];

const steps = [
  { num: "1", title: "We Search", desc: "We thoroughly search every inch of your yard, leaving no turd behind." },
  { num: "2", title: "We Bag It", desc: "All waste is bagged up neatly and left at your residence for trash day." },
  { num: "3", title: "You Enjoy!", desc: "You walk outside to a clean, fresh, poo-free yard. Simple as that! 🎉" },
];

const notes = [
  { icon: "❄️", text: <>We will schedule your cleanup appointment once your yard is <strong>SNOW FREE</strong>.</> },
  { icon: "🚫", text: <>We are <strong>not currently accepting</strong> Free Roam / Invisible Fence yards or yards larger than <strong>1/2 acre</strong>.</> },
  { icon: "🗑️", text: <>Waste is bagged and left for your <strong>weekly trash collection</strong>. We do not haul it away.</> },
];

export default function Services() {
  const { openModal } = useQuoteModal();
  useSEO({
    title: "Services & Pricing – Turd Burglars | Pet Waste Removal Eau Claire WI",
    description: "One-time, monthly & biweekly pet waste cleanup plans in Eau Claire and the Chippewa Valley. Transparent pricing, 48-hour satisfaction guarantee. Get a free quote today!",
    canonical: "/services",
  });
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageHero
        title={<>We're <span className="text-[oklch(0.65_0.18_45)]">#1</span> in the Number Two Business! 💩</>}
        subtitle="Poo-free plans designed to fit your life, your yard, and your budget."
      />

      {/* ── PHOTO SHOWCASE ── */}
      <SectionFadeUp>
      <section className="py-10 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
              <img
                src={SERVICE_WORKER_PHOTO}
                alt="Turd Burglars technician cleaning a yard"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
              <img
                src={SERVICE_DOG_SIGN_PHOTO}
                alt="Happy dog next to Turd Burglars yard sign"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      </SectionFadeUp>

      {/* ── HOW IT WORKS ── */}
      <SectionFadeUp>
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-4xl text-center mb-12">
            How It Works 🔍
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-4 max-w-3xl mx-auto stagger-children">
            {steps.map((s, i) => (
              <React.Fragment key={s.num}>
                <div className="flex-1 bg-[oklch(0.97_0.02_220)] rounded-2xl p-7 text-center shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[oklch(0.65_0.18_45)] text-white font-fun text-2xl flex items-center justify-center mx-auto mb-4">
                    {s.num}
                  </div>
                  <h3 className="font-fun text-[oklch(0.22_0.05_240)] text-xl mb-2">{s.title}</h3>
                  <p className="text-[oklch(0.4_0.02_240)] text-sm font-medium leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="text-[oklch(0.65_0.18_45)] text-3xl font-bold hidden md:block">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="mt-6 max-w-2xl mx-auto bg-yellow-50 border border-yellow-200 rounded-xl px-5 py-3 text-sm font-semibold text-yellow-800 text-center">
            📌 <strong>Please note:</strong> We pick up and bag the waste — it goes in your weekly trash collection. We do not take it with us.
          </div>
        </div>
      </section>
      </SectionFadeUp>

      {/* ── PLANS ── */}
      <SectionFadeUp>
      <section className="py-16 bg-[oklch(0.96_0.02_220)]">
        <div className="container">
          <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-4xl text-center mb-3">
            Pick Your Poo-Free Plan 🗓️
          </h2>
          <p className="text-center text-[oklch(0.4_0.02_240)] font-semibold mb-10">
            Pricing is based on the number of dogs and frequency of service. Click below and let us handle the dirty work! 💩
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {plans.map((p) => (
              <div
                key={p.title}
                className="relative bg-white rounded-2xl p-7 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col"
              >
                {p.badge && (
                  <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                )}
                <div className="text-4xl mb-3">{p.icon}</div>
                <h3 className="font-fun text-[oklch(0.22_0.05_240)] text-2xl mb-2">{p.title}</h3>
                <p className="text-[oklch(0.4_0.02_240)] text-sm font-medium leading-relaxed mb-5">{p.desc}</p>
                <ul className="space-y-2 mb-7 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm font-semibold text-[oklch(0.35_0.02_240)]">
                      <span className="text-[oklch(0.52_0.15_145)]">✅</span> {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openModal}
                  className="block w-full text-center bg-[oklch(0.65_0.18_45)] hover:bg-[oklch(0.58_0.18_45)] text-white font-bold py-3 rounded-full transition-all hover:scale-105 cursor-pointer"
                >
                  Steal My Poop! 💩
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      </SectionFadeUp>

      {/* ── GUARANTEE ── */}
      <SectionFadeUp>
      <section className="py-14 bg-[oklch(0.22_0.05_240)]">
        <div className="container max-w-2xl text-center">
          <div className="text-5xl mb-4">🛡️</div>
          <h2 className="font-fun text-white text-3xl mb-4">Our 48-Hour Guarantee</h2>
          <p className="text-white/80 font-semibold leading-relaxed">
            We guarantee a thorough cleanup. If you're dissatisfied for any reason, we will come back within{" "}
            <strong className="text-[oklch(0.65_0.18_45)]">48 hours at no charge</strong>. That's our promise to you!
          </p>
        </div>
      </section>
      </SectionFadeUp>

      {/* ── NOTES ── */}
      <SectionFadeUp>
      <section className="py-14 bg-white">
        <div className="container max-w-2xl">
          <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-3xl text-center mb-8">
            A Few Things to Know 📋
          </h2>
          <div className="space-y-4">
            {notes.map((n, i) => (
              <div key={i} className="flex items-start gap-4 bg-[oklch(0.97_0.02_220)] rounded-xl px-5 py-4">
                <span className="text-2xl shrink-0">{n.icon}</span>
                <p className="text-[oklch(0.35_0.02_240)] font-medium text-sm leading-relaxed">{n.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </SectionFadeUp>

      <CtaBanner />
      <Footer />
    </div>
  );
}
