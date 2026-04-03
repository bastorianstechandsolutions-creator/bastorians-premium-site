import { ScrollReveal } from '../../components/ScrollReveal';

export default function Placeholder({ title }: { title: string }) {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center text-center">
      <ScrollReveal width="100%">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-white/80">
          Case Study
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1} width="100%">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white/40">
          {title}
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={0.2} width="100%">
        <p className="text-xl text-white/60">
          Data and ROI metrics are currently being compiled for this sector. Check back soon.
        </p>
      </ScrollReveal>
    </div>
  );
}