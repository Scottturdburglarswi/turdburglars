// QuoteModal.tsx — Full-screen quote request modal with EmailJS integration
// Design: Fun & informal, sky-blue accents, orange CTAs, clean form layout
import { useState, useEffect, useRef } from "react";
import { X, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useQuoteModal } from "@/contexts/QuoteModalContext";
import { ASSETS } from "@/lib/assets";

// ── EmailJS credentials ──────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_vdb6c0e";
const EMAILJS_TEMPLATE_ID = "template_aeb8nya";
const EMAILJS_PUBLIC_KEY  = "m_jUhG0ZoaOOnm56E";

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

export function QuoteModal() {
  const { isOpen, closeModal } = useQuoteModal();
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [visible, setVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Animate in/out
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
      const t = setTimeout(() => {
        setForm(initialForm);
        setSubmitted(false);
        setSendError(false);
        setErrors({});
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeModal]);

  const required: (keyof FormData)[] = ["name", "phone", "email", "address", "city", "dogs", "plan", "yard", "fence"];

  const validate = () => {
    const errs: Partial<FormData> = {};
    required.forEach((k) => {
      if (!form[k].trim()) errs[k] = "Required";
    });
    return errs;
  };

  const planLabel = (val: string) => {
    const map: Record<string, string> = {
      "one-time": "One-Time Clean",
      "monthly": "Monthly Service",
      "biweekly": "Biweekly Service",
    };
    return map[val] || val;
  };

  const yardLabel = (val: string) => {
    const map: Record<string, string> = {
      "small": "Small (< 1/4 acre)",
      "medium": "Medium (1/4–1/3 acre)",
      "large": "Large (1/2 acre)",
    };
    return map[val] || val;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setSending(true);
    setSendError(false);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:      form.name,
          from_email:     form.email,
          phone:          form.phone,
          street_address: form.address,
          city_state:     form.city,
          dogs_breeds:    form.dogs,
          service_plan:   planLabel(form.plan),
          yard_size:      yardLabel(form.yard),
          free_roam:      form.fence === "yes" ? "Yes" : "No",
          notes:          form.message || "None",
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  const field = (id: keyof FormData, label: string, type = "text", placeholder = "") => (
    <div className="flex flex-col gap-0.5">
      <label htmlFor={`modal-${id}`} className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[oklch(0.4_0.02_240)]">
        {label} {required.includes(id) && <span className="text-[oklch(0.65_0.18_45)]">*</span>}
      </label>
      <input
        id={`modal-${id}`}
        type={type}
        placeholder={placeholder}
        value={form[id]}
        onChange={(e) => {
          setForm({ ...form, [id]: e.target.value });
          if (errors[id]) setErrors({ ...errors, [id]: undefined });
        }}
        className={`border-2 rounded-lg px-2.5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium bg-white focus:outline-none transition-colors ${
          errors[id]
            ? "border-red-400 focus:border-red-500"
            : "border-[oklch(0.9_0.02_220)] focus:border-[oklch(0.65_0.18_45)]"
        }`}
      />
      {errors[id] && <span className="text-red-500 text-[10px] font-semibold">This field is required</span>}
    </div>
  );

  const selectField = (
    id: keyof FormData,
    label: string,
    options: { value: string; label: string }[]
  ) => (
    <div className="flex flex-col gap-0.5">
      <label htmlFor={`modal-${id}`} className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[oklch(0.4_0.02_240)]">
        {label} {required.includes(id) && <span className="text-[oklch(0.65_0.18_45)]">*</span>}
      </label>
      <select
        id={`modal-${id}`}
        value={form[id]}
        onChange={(e) => {
          setForm({ ...form, [id]: e.target.value });
          if (errors[id]) setErrors({ ...errors, [id]: undefined });
        }}
        className={`border-2 rounded-lg px-2.5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium bg-white focus:outline-none transition-colors appearance-none ${
          errors[id]
            ? "border-red-400 focus:border-red-500"
            : "border-[oklch(0.9_0.02_220)] focus:border-[oklch(0.65_0.18_45)]"
        } ${!form[id] ? "text-gray-400" : "text-[oklch(0.22_0.05_240)]"}`}
      >
        <option value="">Select an option…</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      {errors[id] && <span className="text-red-500 text-[10px] font-semibold">This field is required</span>}
    </div>
  );

  if (!isOpen && !visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4"
      style={{
        transition: "opacity 0.3s ease",
        opacity: visible ? 1 : 0,
      }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* Modal */}
      <div
        ref={scrollRef}
        className="relative z-10 w-full max-w-2xl max-h-[95vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl"
        style={{
          transition: "transform 0.3s ease, opacity 0.3s ease",
          transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
          opacity: visible ? 1 : 0,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#82caf6] rounded-t-2xl sm:rounded-t-3xl px-3 sm:px-6 py-2.5 sm:py-4 flex items-center justify-between border-b-4 border-[oklch(0.65_0.18_45)]">
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={ASSETS.logo} alt="Turd Burglars" className="h-8 sm:h-10 w-auto drop-shadow" />
            <div>
              <h2 className="font-fun text-[oklch(0.15_0.05_240)] text-base sm:text-lg leading-tight">Let's Steal Your Poop! 💩</h2>
              <span className="flex items-center gap-1 text-[oklch(0.22_0.05_240)] text-xs font-bold">
                <Phone size={11} /> (715) 559-1855
              </span>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="w-8 h-8 rounded-full bg-white/70 hover:bg-white flex items-center justify-center transition-colors shadow"
            aria-label="Close"
          >
            <X size={16} className="text-[oklch(0.22_0.05_240)]" />
          </button>
        </div>

        {/* Body */}
        <div className="px-3 sm:px-6 py-3 sm:py-6">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center gap-3">
              <div className="text-6xl">🎉</div>
              <h3 className="font-fun text-[oklch(0.22_0.05_240)] text-2xl sm:text-3xl">Request Sent!</h3>
              <p className="text-[oklch(0.35_0.02_240)] font-semibold max-w-sm text-sm">
                Thanks, <strong>{form.name}</strong>! We'll be in touch within 24–48 hours with your custom quote. Check your inbox (and junk folder)!
              </p>
              <button
                onClick={closeModal}
                className="mt-3 bg-[oklch(0.65_0.18_45)] hover:bg-[oklch(0.58_0.18_45)] text-white font-bold px-8 py-3 rounded-full transition-all hover:scale-105 shadow-lg"
              >
                Close 🐾
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Notices */}
              <div className="mb-3 space-y-1.5">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 text-xs text-yellow-800 font-medium">
                  ❄️ We schedule your cleanup appointment once your yard is <strong>SNOW FREE</strong>.
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-2 text-xs text-red-700 font-medium">
                  🚫 <strong>Not accepting:</strong> Free Roam / Invisible Fence yards or yards larger than <strong>1/2 acre</strong>.
                </div>
              </div>

              {/* Error banner */}
              {sendError && (
                <div className="mb-3 bg-red-50 border border-red-300 rounded-lg p-3 text-xs text-red-700 font-semibold text-center">
                  ⚠️ Something went wrong sending your request. Please try again or call us at (715) 559-1855.
                </div>
              )}

              {/* Fields grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {field("name", "Your Name", "text", "Jane Smith")}
                {field("phone", "Phone Number", "tel", "(715) 555-0000")}
                <div className="col-span-2">
                  {field("email", "Email Address", "email", "you@email.com")}
                </div>
                {field("address", "Street Address", "text", "123 Main St")}
                {field("city", "City & State", "text", "Eau Claire, WI")}
                {field("dogs", "# of Dogs & Breed(s)", "text", "e.g. 2 Labs")}
                {selectField("plan", "Service Plan", [
                  { value: "one-time", label: "One-Time Clean" },
                  { value: "monthly", label: "Monthly Service" },
                  { value: "biweekly", label: "Biweekly Service" },
                ])}
                {selectField("yard", "Yard Size", [
                  { value: "small", label: "Small (< 1/4 acre)" },
                  { value: "medium", label: "Medium (1/4–1/3 acre)" },
                  { value: "large", label: "Large (1/2 acre)" },
                ])}
                <div className="col-span-2">
                  {selectField("fence", "Free Roam or Invisible Fence?", [
                    { value: "no", label: "No" },
                    { value: "yes", label: "Yes" },
                  ])}
                </div>
              </div>

              {/* Message */}
              <div className="mt-2 flex flex-col gap-0.5">
                <label htmlFor="modal-message" className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[oklch(0.4_0.02_240)]">
                  Additional Notes
                </label>
                <textarea
                  id="modal-message"
                  rows={2}
                  placeholder="Gate code, dog's name, special instructions…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="border-2 border-[oklch(0.9_0.02_220)] rounded-lg px-2.5 py-2 text-xs sm:text-sm font-medium bg-white focus:outline-none focus:border-[oklch(0.65_0.18_45)] transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="mt-3 sm:mt-5 w-full bg-[oklch(0.65_0.18_45)] hover:bg-[oklch(0.58_0.18_45)] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 rounded-full text-sm sm:text-base transition-all hover:scale-[1.02] shadow-lg"
              >
                {sending ? "Sending…" : "Send My Quote Request 🐾"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
