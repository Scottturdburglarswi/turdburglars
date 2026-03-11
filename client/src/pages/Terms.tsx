// Terms.tsx — Terms of Service page for Turd Burglars
import { Navbar, Footer } from "@/components/Layout";
import { FileText } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* Hero */}
      <section className="bg-[oklch(0.22_0.05_240)] py-14 md:py-20">
        <div className="container text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[oklch(0.65_0.18_45)]/20 mb-5">
            <FileText size={28} className="text-[oklch(0.65_0.18_45)]" />
          </div>
          <h1 className="font-fun text-white text-4xl md:text-5xl mb-3">Terms of Service</h1>
          <p className="text-white/60 text-sm">Last updated: March 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="prose prose-slate max-w-none space-y-8 text-[oklch(0.35_0.02_240)]">

            <div>
              <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-2xl mb-3">1. Acceptance of Terms</h2>
              <p className="text-sm leading-relaxed">
                By scheduling or using any services provided by Turd Burglars LLC ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-2xl mb-3">2. Services Provided</h2>
              <p className="text-sm leading-relaxed mb-3">
                Turd Burglars LLC provides professional pet waste removal services for residential properties in the Eau Claire and Chippewa Valley area of Wisconsin. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Weekly and bi-weekly yard cleanup plans</li>
                <li>One-time and seasonal cleanup services</li>
              </ul>
            </div>

            <div>
              <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-2xl mb-3">3. Scheduling & Cancellations</h2>
              <p className="text-sm leading-relaxed">
                Service appointments are scheduled based on availability. We ask that cancellations or rescheduling requests be made at least 24 hours in advance. We reserve the right to reschedule services due to inclement weather, unsafe conditions, or other circumstances beyond our control. Services will not be performed on properties with snow cover — cleanups will be scheduled once the yard is snow-free.
              </p>
            </div>

            <div>
              <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-2xl mb-3">4. Property Access</h2>
              <p className="text-sm leading-relaxed">
                By scheduling our services, you grant Turd Burglars LLC permission to access your property on the agreed service dates. You are responsible for ensuring safe access to the service area, including unlocking gates and securing pets during our visit. We are not responsible for property damage caused by pre-existing conditions or hazards not disclosed at the time of scheduling.
              </p>
            </div>

            <div>
              <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-2xl mb-3">5. Payment Terms</h2>
              <p className="text-sm leading-relaxed">
                Payment is due upon completion of service unless otherwise agreed in writing. We accept cash, check, and major credit/debit cards. Recurring service plans are billed on a schedule agreed upon at the time of signup. Late payments may result in suspension of service.
              </p>
            </div>

            <div>
              <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-2xl mb-3">6. Satisfaction Guarantee</h2>
              <p className="text-sm leading-relaxed">
                We take pride in our work and strive for your complete satisfaction. If you are not satisfied with a service, please contact us within 24 hours and we will make it right at no additional charge.
              </p>
            </div>

            <div>
              <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-2xl mb-3">7. Limitation of Liability</h2>
              <p className="text-sm leading-relaxed">
                Turd Burglars LLC shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability for any claim shall not exceed the amount paid for the specific service giving rise to the claim.
              </p>
            </div>

            <div>
              <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-2xl mb-3">8. Changes to Terms</h2>
              <p className="text-sm leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to our website. Continued use of our services after changes are posted constitutes your acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-2xl mb-3">9. Governing Law</h2>
              <p className="text-sm leading-relaxed">
                These Terms of Service shall be governed by the laws of the State of Wisconsin. Any disputes shall be resolved in the courts of Eau Claire County, Wisconsin.
              </p>
            </div>

            <div>
              <h2 className="font-fun text-[oklch(0.22_0.05_240)] text-2xl mb-3">10. Contact Us</h2>
              <p className="text-sm leading-relaxed">
                For questions about these Terms of Service, please contact us:
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
