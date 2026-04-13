import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { GlassCard } from '../components/GlassCard';
import { BsArrowRight } from 'react-icons/bs';
import { niches } from '../data/niches';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

        <ScrollReveal width="100%">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-white/80">
            Elite Performance Marketing
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} width="100%">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
            We Drive <span className="text-brand-blue">Pure ROI.</span><br />
            Nothing Else Matters.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2} width="100%">
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12">
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

      {/* Niches / Case Studies Grid */}
      <section className="py-24 bg-black relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
              Proven Across <span className="text-white/40">Industries</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {niches.map((niche, index) => (
              <ScrollReveal key={niche.title} delay={index * 0.1} width="100%">
                <Link to={niche.link} className="block group">
                  <GlassCard className="h-full relative overflow-hidden flex flex-col justify-between group-hover:border-brand-blue/30 transition-colors">
                    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
                      <BsArrowRight className="text-2xl text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{niche.title}</h3>
                      <p className="text-white/60 mb-8">{niche.description}</p>
                    </div>
                    <div className="inline-flex items-center px-4 py-2 rounded-lg bg-white/5 text-brand-blue font-semibold text-sm w-fit">
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
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 border border-white/10 rounded-full hover:bg-white/5 hover:border-brand-blue transition-all text-white mx-auto font-medium"
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
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
              Why Bastorians?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} width="100%">
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-16">
              We aren't a traditional agency. We don't care about vanity metrics. We deploy capital efficiently to acquire customers and generate revenue. It's binary: we perform, or we don't.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} width="100%">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white hover:text-black transition-all text-base font-medium"
            >
              <span>Work With Us</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}