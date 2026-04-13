import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { GlassCard } from '../components/GlassCard';
import { BsArrowRight } from 'react-icons/bs';
import { niches } from '../data/niches';

export default function CaseStudiesIndex() {
  return (
    <div className="flex flex-col min-h-[80vh]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        <ScrollReveal width="100%">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md text-sm font-medium text-gray-700 dark:text-white/80 transition-colors duration-300">
            Performance Marketing
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} width="100%">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-gray-900 dark:text-white transition-colors duration-300">
            Proven <span className="text-brand-blue">Results.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2} width="100%">
          <p className="text-lg md:text-xl text-gray-600 dark:text-white/60 max-w-2xl mx-auto transition-colors duration-300">
            Data-driven customer acquisition and measurable ROI across diverse industries.
          </p>
        </ScrollReveal>
      </section>

      {/* Grid Section */}
      <section className="py-16 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {niches.map((niche, index) => (
              <ScrollReveal key={niche.title} delay={index * 0.1} width="100%">
                <Link to={niche.link} className="block group">
                  <GlassCard className="h-full relative overflow-hidden flex flex-col justify-between group-hover:border-brand-blue/30 transition-colors">
                    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
                      <BsArrowRight className="text-2xl text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300">{niche.title}</h3>
                      <p className="text-gray-600 dark:text-white/60 mb-8 transition-colors duration-300">{niche.description}</p>
                    </div>
                    <div className="inline-flex items-center px-4 py-2 rounded-lg bg-black/5 dark:bg-white/5 text-brand-blue font-semibold text-sm w-fit transition-colors duration-300">
                      {niche.metrics}
                    </div>
                  </GlassCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}