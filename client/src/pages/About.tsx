// About.tsx — Turd Burglars About Page
import { ReactNode } from "react";
import { Navbar, Footer, CtaBanner, PageHero } from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useSEO } from "@/hooks/useSEO";
import { useCountUp } from "@/hooks/useCountUp";

function SectionFadeUp({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useScrollAnimation(0.1);
  return <div ref={ref} className={`fade-up ${className}`}>{children}</div>;
}

function FadeLeft({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useScrollAnimation(0.1);
  return <div ref={ref} className={`fade-left ${className}`}>{children}</div>;
}

function FadeRight({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useScrollAnimation(0.1);
  return <div ref={ref} className={`fade-right ${className}`}>{children}</div>;
}

const OWNER_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028378508/mauC7Xq7GwXUvn389Jy89d/owner-photo_eebaf306.png";
const VAN_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028378508/mauC7Xq7GwXUvn389Jy89d/van-photo_33050f48.png";

const values = [
  { icon: "💪", title: "Hard Work", desc: "We show up on time, work thoroughly, and don't leave until the job is done right." },
  { icon: "❤️", title: "Family First", desc: "We're a family business serving families. We treat your yard like it's our own." },
  { icon: "🤝", title: "Reliability", desc: "If you're not satisfied, we come back within 48 hours at absolutely no charge." },
  { icon: "🌱", title: "Community", desc: "Proudly serving Eau Claire and the Chippewa Valley since 2017." },
];

function AboutStatRow() {
  const { display: customers, ref: r1 } = useCountUp(230, 1800, "+");
  const { display: rating, ref: r2 } = useCountUp(5, 1200, " ★");
  return (
    <div className="flex gap-4 mt-6">
      <div ref={r1} className="flex-1 bg-[oklch(0.72_0.12_220)] rounded-xl p-4 text-center">
        <div className="font-fun text-[oklch(0.22_0.05_240)] text-4xl">{customers}</div>
        <div className="text-[oklch(0.22_0.05_240)]/80 font-bold text-xs mt-1">Happy Customers</div>
      </div>
      <div ref={r2} className="flex-1 bg-[oklch(0.65_0.18_45)] rounded-xl p-4 text-center">
        <div className="font-fun text-white text-4xl">{rating}</div>
        <div className="text-white/80 font-bold text-xs mt-1">Perfect Rating</div>
      </div>
    </div>
  );
}

export default function About() {
  useSEO({
    title: "About Us – Turd Burglars | Eau Claire Pet Waste Cleanup",
    description: "Meet Scott and the Turd Burglars team. Family-owned pet waste cleanup service in Eau Claire, WI since 2017. Licensed, insured & 5-star rated with 230+ happy customers.",
    canonical: "/about",
  });
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageHero
        title={<>Our Family Working <span className="text-[oklch(0.65_0.18_45)] italic">For Your Family</span> 🏡</>}
        subtitle="We're not just a business — we're your neighbors, and we actually care about your yard."
      />

      {/* ── HOW IT ALL STARTED: text left, van photo right ── */}
      <SectionFadeUp>
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-center">

            {/* Left: text box */}
            <div className="flex-1 order-2 lg:order-1">
              <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-3xl mb-5">How It All Started 💡</h2>
              <div className="bg-[oklch(0.96_0.02_220)] rounded-2xl p-6 md:p-8 shadow-sm">
                <p className="text-[oklch(0.35_0.02_240)] leading-relaxed font-medium mb-4">
                  <strong>Turd Burglars LLC</strong> is a family-owned company that got its start in the spring
                  of 2017. We are licensed and dedicated to serving our community.
                </p>
                <p className="text-[oklch(0.35_0.02_240)] leading-relaxed font-medium mb-4">
                  It all started when the snow thawed and we looked out our window at the mess that had been
                  waiting all winter long. We dreaded cleaning it up in the spring, and knew that all year long
                  it becomes a grueling, dirty job that never ends. That's when the light bulb moment hit!
                  We knew every dog owner faced the same problem.
                </p>
                <p className="text-[oklch(0.35_0.02_240)] leading-relaxed font-medium">
                  So we grabbed a few pooper scoopers from the local pet supply store, posted some flyers
                  around town, and waited for the calls. Not even a day later — the phone rang, and our
                  business venture began! We've since served over{" "}
                  <strong className="text-[oklch(0.22_0.05_240)]">230 customers</strong> while maintaining
                  a perfect <strong className="text-[oklch(0.22_0.05_240)]">5-star rating</strong>. 🌟
                </p>
              </div>
            </div>

            {/* Right: van photo */}
            <div className="w-full lg:w-[45%] order-1 lg:order-2">
              <div className="overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
                <img
                  src={VAN_PHOTO}
                  alt="Turd Burglars service van with daughter"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      </SectionFadeUp>

      {/* ── MEET SCOTT: Scott photo left, story box right ── */}
      <SectionFadeUp>
      <section className="py-16 bg-[oklch(0.96_0.02_220)]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-center">

            {/* Left: Scott photo */}
            <div className="w-full lg:w-[40%] order-1">
              <div className="overflow-hidden rounded-2xl shadow-xl aspect-[3/4] max-w-sm mx-auto lg:mx-0">
                <img
                  src={OWNER_PHOTO}
                  alt="Scott — owner of Turd Burglars"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: story box */}
            <div className="flex-1 order-2">
              <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-3xl mb-5">Meet Scott 👋</h2>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <p className="text-[oklch(0.35_0.02_240)] leading-relaxed font-medium mb-4">
                  My name is <strong>Scott</strong> and I'm a family friend of the original owners. I took over
                  the business on January 1, 2020. My vision is simple: offer the same great service and always
                  meet — or exceed — my customers' expectations.
                </p>
                <p className="text-[oklch(0.35_0.02_240)] leading-relaxed font-medium">
                  I also want to teach my daughter the value of hard work and earning money at a young age.
                  She works with me after school, and honestly? She's pretty great at it. 😄
                </p>
                <AboutStatRow />
              </div>
            </div>

          </div>
        </div>
      </section>
      </SectionFadeUp>

      {/* ── VALUES ── */}
      <SectionFadeUp>
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-4xl text-center mb-10">
            What We Stand For 🐾
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[oklch(0.97_0.02_220)] rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-fun text-[oklch(0.22_0.05_240)] text-xl mb-2">{v.title}</h3>
                <p className="text-[oklch(0.4_0.02_240)] text-sm leading-relaxed font-medium">{v.desc}</p>
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
