// Privacy.tsx — Privacy Policy page for Turd Burglars
import { Navbar, Footer } from "@/components/Layout";
import { Shield } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* Hero */}
      <section className="bg-[oklch(0.22_0.05_240)] py-14 md:py-20">
        <div className="container text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[oklch(0.65_0.18_45)]/20 mb-5">
            <Shield size={28} className="text-[oklch(0.65_0.18_45)]" />
          </div>
          <h1 className="font-fun text-white text-4xl md:text-5xl mb-3">Privacy Policy</h1>
          <p className="text-white/60 text-sm">Last updated: March 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="prose prose-slate max-w-none space-y-8 text-[oklch(0.35_0.02_240)]">

            <div>
              <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-2xl mb-3">1. Introduction</h2>
              <p className="text-sm leading-relaxed">
                Turd Burglars LLC ("we," "our," or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-2xl mb-3">2. Information We Collect</h2>
              <p className="text-sm leading-relaxed mb-3">We collect information that you voluntarily provide to us when you:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Request a free quote or schedule a service</li>
                <li>Contact us via phone, email, or our website form</li>
                <li>Sign up for our newsletter or promotions</li>
              </ul>
              <p className="text-sm leading-relaxed mt-3">
                This information may include your name, address, phone number, email address, and details about your property (such as yard size and number of dogs).
              </p>
            </div>

            <div>
              <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-2xl mb-3">3. How We Use Your Information</h2>
              <p className="text-sm leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Provide and manage our pet waste removal services</li>
                <li>Communicate with you about your service schedule and appointments</li>
                <li>Send you quotes, invoices, and service confirmations</li>
                <li>Improve our website and customer experience</li>
                <li>Send promotional communications (only with your consent)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-2xl mb-3">4. Information Sharing</h2>
              <p className="text-sm leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business (such as scheduling or payment processing), provided they agree to keep your information confidential.
              </p>
            </div>

            <div>
              <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-2xl mb-3">5. Data Security</h2>
              <p className="text-sm leading-relaxed">
                We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-2xl mb-3">6. Cookies</h2>
              <p className="text-sm leading-relaxed">
                Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings; however, this may affect certain features of our website.
              </p>
            </div>

            <div>
              <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-2xl mb-3">7. Your Rights</h2>
              <p className="text-sm leading-relaxed">
                You have the right to access, correct, or delete your personal information at any time. To exercise these rights, please contact us at{" "}
                <a href="mailto:scott@turdburglarswi.com" className="text-[oklch(0.45_0.15_220)] font-semibold hover:underline">
                  scott@turdburglarswi.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-2xl mb-3">8. Changes to This Policy</h2>
              <p className="text-sm leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-2xl mb-3">9. Contact Us</h2>
              <p className="text-sm leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-3 bg-[oklch(0.96_0.02_220)] rounded-xl p-5 text-sm space-y-1">
                <p className="font-bold text-[oklch(0.22_0.05_240)]">Turd Burglars LLC</p>
                <p>Eau Claire & Chippewa Valley, WI</p>
                <p>Phone: (715) 559-1993</p>
                <p>
                  Email:{" "}
                  <a href="mailto:scott@turdburglarswi.com" className="text-[oklch(0.45_0.15_220)] font-semibold hover:underline">
                    scott@turdburglarswi.com
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
