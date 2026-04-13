import { ScrollReveal } from '../components/ScrollReveal';

export default function About() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-[80vh] flex flex-col justify-center">
      <ScrollReveal>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 text-gray-900 dark:text-white transition-colors duration-300">
          Built for <span className="text-gray-400 dark:text-white/40">Performance.</span>
        </h1>
      </ScrollReveal>

      <div className="space-y-8 text-lg md:text-xl text-gray-600 dark:text-white/70 leading-relaxed transition-colors duration-300">
        <ScrollReveal delay={0.1}>
          <p>
            Bastorians tech and solutions was founded on a singular principle: marketing must generate measurable returns.
            We disregard vanity metrics and conventional agency bloat.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p>
            Our expertise lies exclusively in leveraging Meta Ads to mathematically scale customer acquisition.
            We architect funnels, test creatives rigorously, and optimize ruthlessly.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p>
            When you partner with us, you are not hiring account managers. You are partnering with growth engineers
            dedicated to turning advertising capital into profit.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}