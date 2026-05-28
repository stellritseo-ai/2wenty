import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "./icons";

const info = [
  { Icon: Phone, label: "Call us", value: "(614) 359-2049", href: "tel:+16143592049" },
  { Icon: Mail, label: "Email", value: "2wenty2wobricksandmortar@gmail.com", href: "mailto:2wenty2wobricksandmortar@gmail.com" },
  { Icon: MapPin, label: "Service Areas", value: "Columbus & Mansfield, OH" },
  { Icon: Clock, label: "Hours", value: "Mon – Sat · 8:30 AM – 6:00 PM · 24/7 Emergency" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/3 h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl animate-aurora" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-gold/15 blur-3xl animate-aurora" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-gold uppercase tracking-widest">
              Get in Touch
            </div>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl font-bold leading-tight">
              Let's break ground on <span className="text-gradient-emerald">your next chapter.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-lg">
              Tell us about your project. A member of our team will reach out within one business day.
            </p>

            <div className="mt-10 space-y-3">
              {info.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 rounded-2xl glass p-4 hover:border-primary/40 transition"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-gold/20 border border-white/10">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                    <div className="font-display font-semibold truncate">{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="glass-strong rounded-[2rem] p-6 sm:p-8 shadow-elegant"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full name" name="name" placeholder="Senita Feagin" />
              <Field label="Phone" name="phone" type="tel" placeholder="(614) 000-0000" />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Service interest</label>
                <select
                  className="mt-2 w-full rounded-xl glass px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-primary/50"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-card">Select a service</option>
                  {["New construction", "Renovation & remodeling", "Design + build", "Multi-family development", "Other"].map(s => (
                    <option key={s} className="bg-card">{s}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Project details</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your goals, timeline, and location..."
                  className="mt-2 w-full rounded-xl glass px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-primary/50 resize-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-emerald px-6 py-4 text-sm font-semibold text-primary-foreground shadow-[0_18px_50px_-12px_var(--primary)] hover:-translate-y-0.5 transition"
            >
              {sent ? "Thank you — we'll be in touch ✓" : "Request Consultation →"}
            </button>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              By submitting you agree to be contacted about your inquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder, className = "",
}: { label: string; name: string; type?: string; placeholder?: string; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl glass px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-primary/50 placeholder:text-muted-foreground/60"
      />
    </div>
  );
}
