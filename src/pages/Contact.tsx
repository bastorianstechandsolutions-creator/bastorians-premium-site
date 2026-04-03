import { useEffect } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

export default function Contact() {
  useEffect(() => {
    // Dynamically load Calendly widget script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-screen">
      <ScrollReveal width="100%" className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          Let's Talk <span className="text-brand-blue">Growth.</span>
        </h1>
        <p className="text-white/60">Select a time below to schedule your strategy session.</p>
      </ScrollReveal>

      <ScrollReveal delay={0.2} width="100%">
        <div className="glass-card overflow-hidden">
          {/* Calendly inline widget begin */}
          <div
            className="calendly-inline-widget w-full h-[700px]"
            data-url="https://calendly.com/placeholder-link?hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=0055FF"
          />
          {/* Calendly inline widget end */}
        </div>
      </ScrollReveal>
    </div>
  );
}