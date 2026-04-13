import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { GlassCard } from '../components/GlassCard';
import { BsArrowRight } from 'react-icons/bs';
import { niches } from '../data/niches';

const CLIENT_LOGOS = [
  'HAIWA TV',
  'APEX FINANCE',
  'TITAN METALS',
  'ELITE PHYSIO',
  'NEXUS REALTY',
  'ELEVATE EDTECH'
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

        <ScrollReveal width="100%">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md text-sm font-medium text-gray-700 dark:text-white/80 transition-colors duration-300">
            Elite Performance Marketing
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} width="100%">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-gray-900 dark:text-white transition-colors duration-300">
            We Drive <span className="text-brand-blue">Pure ROI.</span><br />
            Nothing Else Matters.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2} width="100%">
          <p className="text-lg md:text-xl text-gray-600 dark:text-white/60 max-w-2xl mx-auto mb-12 transition-colors duration-300">
            Bastorians tech and solutions scales businesses through aggressive, data-driven Meta Ads. We strip away the noise and focus purely on your bottom line.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3} width="100%">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-brand-blue text-white rounded-full hover:bg-brand-lightBlue transition-all text-lg font-semibold shadow-[0_0_40px_rgba(0,85,255,0.4)] hover:shadow-[0_0_60px_rgba(0,85,255,0.6)] hover:-translate-y-1"
          >
            <span>Book Your Strategy Call</span>
            <BsArrowRight />
          </Link>
        </ScrollReveal>
      </section>

      {/* Trusted By Marquee */}
      <section className="w-full py-10 border-y border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] overflow-hidden transition-colors duration-300">
        <ScrollReveal delay={0.4} width="100%">
          <div className="flex w-[200%] animate-marquee">
            <div className="flex w-1/2 justify-around items-center">
              {CLIENT_LOGOS.map((logo, i) => (
                <span
                  key={`logo-1-${i}`}
                  className="text-2xl md:text-3xl font-bold tracking-widest text-gray-400 dark:text-white/20 hover:text-gray-600 dark:hover:text-white/60 transition-colors cursor-default whitespace-nowrap mx-12 duration-300"
                >
                  {logo}
                </span>
              ))}
            </div>
            <div className="flex w-1/2 justify-around items-center">
              {CLIENT_LOGOS.map((logo, i) => (
                <span
                  key={`logo-2-${i}`}
                  className="text-2xl md:text-3xl font-bold tracking-widest text-gray-400 dark:text-white/20 hover:text-gray-600 dark:hover:text-white/60 transition-colors cursor-default whitespace-nowrap mx-12 duration-300"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Niches / Case Studies Grid */}
      <section className="py-24 bg-background dark:bg-black relative border-t border-black/5 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-gray-900 dark:text-white transition-colors duration-300">
              Proven Across <span className="text-gray-400 dark:text-white/40">Industries</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {niches.slice(0, 4).map((niche, index) => (
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

          <div className="flex justify-center mt-12 w-full">
            <ScrollReveal delay={0.2}>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 border border-black/10 dark:border-white/10 rounded-full hover:bg-black/5 dark:hover:bg-white/5 hover:border-brand-blue transition-all text-gray-900 dark:text-white mt-12 mx-auto"
              >
                <span>View All Case Studies</span>
                <BsArrowRight />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal width="100%">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-gray-900 dark:text-white transition-colors duration-300">
              Why Bastorians?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} width="100%">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-white/60 max-w-3xl mx-auto leading-relaxed mb-16 transition-colors duration-300">
              We aren't a traditional agency. We don't care about vanity metrics. We deploy capital efficiently to acquire customers and generate revenue. It's binary: we perform, or we don't.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} width="100%">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-black/20 dark:border-white/20 text-gray-900 dark:text-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-base font-medium"
            >
              <span>Work With Us</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}