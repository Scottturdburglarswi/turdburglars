// Contact.tsx — Turd Burglars Contact Page
import { useState, ReactNode } from "react";
import { Navbar, Footer, PageHero } from "@/components/Layout";
import { Phone, MapPin, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useSEO } from "@/hooks/useSEO";

function SectionFadeUp({ children }: { children: ReactNode }) {
  const ref = useScrollAnimation(0.1);
  return <div ref={ref} className="fade-up">{children}</div>;
}

type FormData = {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  dogs: string;
  plan: string;
  yard: string;
  fence: string;
  message: string;
};

const initialForm: FormData = {
  name: "", phone: "", email: "", address: "", city: "",
  dogs: "", plan: "", yard: "", fence: "", message: "",
};

export default function Contact() {
  useSEO({
    title: "Contact Us – Turd Burglars | Get a Free Quote in Eau Claire, WI",
    description: "Request a free pet waste cleanup quote from Turd Burglars. Serving Eau Claire and the Chippewa Valley. Call (715) 559-1993 or email scott@turdburglarswi.com.",
    canonical: "/contact",
  });
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const required: (keyof FormData)[] = ["name", "phone", "email", "address", "city", "dogs", "plan", "yard", "fence"];

  const validate = () => {
    const errs: Partial<FormData> = {};
    required.forEach((k) => {
      if (!form[k].trim()) errs[k] = "Required";
    });
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const field = (
    id: keyof FormData,
    label: string,
    type = "text",
    placeholder = ""
  ) => (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-widest text-[oklch(0.4_0.02_240)]">
        {label} <span className="text-[oklch(0.65_0.18_45)]">*</span>
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={form[id]}
        onChange={(e) => { setForm({ ...form, [id]: e.target.value }); setErrors({ ...errors, [id]: undefined }); }}
        className={`border-2 rounded-xl px-4 py-3 text-sm font-medium bg-white focus:outline-none focus:border-[oklch(0.65_0.18_45)] transition-colors ${errors[id] ? "border-red-400" : "border-[oklch(0.9_0.02_220)]"}`}
      />
      {errors[id] && <span className="text-red-500 text-xs font-semibold">This field is required</span>}
    </div>
  );

  const selectField = (
    id: keyof FormData,
    label: string,
    options: { value: string; label: string }[]
  ) => (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-widest text-[oklch(0.4_0.02_240)]">
        {label} <span className="text-[oklch(0.65_0.18_45)]">*</span>
      </label>
      <select
        id={id}
        value={form[id]}
        onChange={(e) => { setForm({ ...form, [id]: e.target.value }); setErrors({ ...errors, [id]: undefined }); }}
        className={`border-2 rounded-xl px-4 py-3 text-sm font-medium bg-white focus:outline-none focus:border-[oklch(0.65_0.18_45)] transition-colors ${errors[id] ? "border-red-400" : "border-[oklch(0.9_0.02_220)]"}`}
      >
        <option value="">-- Choose --</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      {errors[id] && <span className="text-red-500 text-xs font-semibold">Please select an option</span>}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageHero
        title={<>Let's Get Your Yard <span className="text-[oklch(0.65_0.18_45)] italic">Poo-Free!</span> 🎉</>}
        subtitle="Send us a message and we’ll be scooping your yard before you know it! 💩"
      />

      <SectionFadeUp>
      <section className="py-16 bg-white flex-1">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left: info */}
            <div className="lg:w-80 shrink-0">
              <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-3xl mb-5">Get in Touch 📬</h2>
              <p className="text-[oklch(0.4_0.02_240)] font-medium text-sm leading-relaxed mb-8">
                Fill out the form and we’ll put together a poo-busting plan just for you. We need a little info
                about your yard and your pups to give you the best price!
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[oklch(0.72_0.12_220)] flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-[oklch(0.22_0.05_240)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[oklch(0.55_0.02_240)] mb-0.5">Phone</div>
                    <span className="font-bold text-[oklch(0.22_0.05_240)]">
                      (715) 559-1993
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[oklch(0.72_0.12_220)] flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-[oklch(0.22_0.05_240)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[oklch(0.55_0.02_240)] mb-0.5">Service Area</div>
                    <p className="font-semibold text-sm text-[oklch(0.35_0.02_240)]">Eau Claire & Chippewa Valley, WI and surrounding areas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[oklch(0.72_0.12_220)] flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-[oklch(0.22_0.05_240)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[oklch(0.55_0.02_240)] mb-0.5">Response Time</div>
                    <p className="font-semibold text-sm text-[oklch(0.35_0.02_240)]">Within 24–48 hours (check your junk mail!)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800 font-medium">
                ❄️ We will schedule your cleanup appointment once your yard is <strong>SNOW FREE</strong>.
              </div>
              <div className="mt-3 bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700 font-medium">
                🚫 <strong>Not currently accepting:</strong> Free Roam / Invisible Fence yards or yards
                larger than <strong>1/2 acre</strong>.
              </div>
            </div>

            {/* Right: form */}
            <div className="flex-1">
              {submitted ? (
                <div className="bg-[oklch(0.52_0.15_145)] rounded-2xl p-10 text-center text-white">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="font-fun text-3xl mb-3">Request Sent!</h3>
                  <p className="font-semibold text-white/90">
                    Thanks, <strong>{form.name}</strong>! We'll be in touch within 24–48 hours with your
                    poo-free plan! Keep an eye on your inbox (and junk folder)!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[oklch(0.97_0.02_220)] rounded-2xl p-8 shadow-sm">
                  <h3 className="font-fun text-[oklch(0.22_0.05_240)] text-2xl mb-6">Send Us a Message 💌</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {field("name", "Your Name", "text", "Jane Smith")}
                    {field("phone", "Phone Number", "tel", "(715) 555-0000")}
                    {field("email", "Email Address", "email", "you@email.com")}
                    {field("address", "Street Address", "text", "123 Main St")}
                    {field("city", "City & State", "text", "Eau Claire, WI")}
                    {field("dogs", "Number of Dogs & Breed(s)", "text", "e.g. 2 Labs")}
                    {selectField("plan", "Service Plan Desired", [
                      { value: "one-time", label: "One-Time Clean" },
                      { value: "weekly", label: "Weekly Service" },
                      { value: "biweekly", label: "Biweekly Service" },
                      { value: "monthly", label: "Monthly Service" },
                    ])}
                    {selectField("yard", "Yard Size", [
                      { value: "small", label: "Small (under 1/4 acre)" },
                      { value: "medium", label: "Medium (1/4 – 1/3 acre)" },
                      { value: "large", label: "Large (1/2 acre)" },
                    ])}
                    {selectField("fence", "Do You Have a Free Roam or Invisible Fence?", [
                      { value: "no", label: "No" },
                      { value: "yes", label: "Yes" },
                    ])}
                  </div>
                  <div className="mt-5 flex flex-col gap-1">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-[oklch(0.4_0.02_240)]">
                      Additional Notes
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Anything else we should know? (e.g. gate code, dog's name, special instructions)"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="border-2 border-[oklch(0.9_0.02_220)] rounded-xl px-4 py-3 text-sm font-medium bg-white focus:outline-none focus:border-[oklch(0.65_0.18_45)] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-6 w-full bg-[oklch(0.65_0.18_45)] hover:bg-[oklch(0.58_0.18_45)] text-white font-bold py-4 rounded-full text-base transition-all hover:scale-[1.02] shadow-lg"
                  >
                    Send My Quote Request 🐾
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      </SectionFadeUp>

      <Footer />
    </div>
  );
}
