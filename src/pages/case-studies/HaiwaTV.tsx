import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollReveal } from '../../components/ScrollReveal';
import { NumberCounter } from '../../components/NumberCounter';
import { GlassCard } from '../../components/GlassCard';

export default function HaiwaTV() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <div className="bg-background dark:bg-black transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal width="100%">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md text-sm font-medium text-gray-700 dark:text-white/80 transition-colors duration-300">
            Consumer Electronics
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} width="100%">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-gray-900 dark:text-white transition-colors duration-300">
            Haiwa TV
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2} width="100%">
          <p className="text-xl md:text-3xl text-gray-600 dark:text-white/60 max-w-3xl transition-colors duration-300">
            Dominating a saturated market through high-velocity customer acquisition.
          </p>
        </ScrollReveal>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-black/5 dark:border-white/5 transition-colors duration-300">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <ScrollReveal delay={0.1}>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-brand-blue mb-2">
                <NumberCounter value={600} suffix="+" />
              </div>
              <div className="text-sm md:text-base text-gray-500 dark:text-white/50 uppercase tracking-widest font-semibold transition-colors duration-300">TVs Sold</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                <NumberCounter value={6000} suffix="+" />
              </div>
              <div className="text-sm md:text-base text-gray-500 dark:text-white/50 uppercase tracking-widest font-semibold transition-colors duration-300">Enquiries</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                <NumberCounter value={2500} suffix="+" />
              </div>
              <div className="text-sm md:text-base text-gray-500 dark:text-white/50 uppercase tracking-widest font-semibold transition-colors duration-300">New Followers</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                <NumberCounter value={80000} suffix="+" />
              </div>
              <div className="text-sm md:text-base text-gray-500 dark:text-white/50 uppercase tracking-widest font-semibold transition-colors duration-300">Reach</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 90-Day Growth Story (Horizontal Scroll Timeline) */}
      <section ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-300">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl w-full mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">The 90-Day Growth Story</h2>
          </div>

          <motion.div style={{ x }} className="flex gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-max">
            {/* Month 1 */}
            <div className="w-[85vw] md:w-[600px] shrink-0">
              <GlassCard className="h-full min-h-[400px] flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 text-[120px] font-bold text-black/5 dark:text-white/5 leading-none -mt-4 -mr-4 transition-colors duration-300">01</div>
                <h3 className="text-2xl text-brand-blue font-bold mb-4">Month 1: Foundation & Testing</h3>
                <p className="text-xl text-gray-600 dark:text-white/70 leading-relaxed transition-colors duration-300">
                  Rapid deployment of creative assets to identify winning hooks. Established baseline metrics and localized audience segments. Initial volume of enquiries generated, setting the stage for scale.
                </p>
              </GlassCard>
            </div>

            {/* Month 2 */}
            <div className="w-[85vw] md:w-[600px] shrink-0">
              <GlassCard className="h-full min-h-[400px] flex flex-col justify-center relative overflow-hidden border-black/10 dark:border-white/20 transition-colors duration-300">
                <div className="absolute top-0 right-0 text-[120px] font-bold text-black/5 dark:text-white/5 leading-none -mt-4 -mr-4 transition-colors duration-300">02</div>
                <h3 className="text-2xl text-brand-blue font-bold mb-4">Month 2: Scaling Winners</h3>
                <p className="text-xl text-gray-600 dark:text-white/70 leading-relaxed transition-colors duration-300">
                  Consolidated budget into top-performing creative combinations. Aggressive scaling of ad spend while maintaining target CPA. Follower growth accelerated alongside direct sales volume.
                </p>
              </GlassCard>
            </div>

            {/* Month 3 */}
            <div className="w-[85vw] md:w-[600px] shrink-0">
              <GlassCard className="h-full min-h-[400px] flex flex-col justify-center relative overflow-hidden border-brand-blue/30 transition-colors duration-300">
                <div className="absolute top-0 right-0 text-[120px] font-bold text-black/5 dark:text-white/5 leading-none -mt-4 -mr-4 transition-colors duration-300">03</div>
                <h3 className="text-2xl text-brand-blue font-bold mb-4">Month 3: Market Dominance</h3>
                <p className="text-xl text-gray-600 dark:text-white/70 leading-relaxed transition-colors duration-300">
                  Sustained high-volume sales. Reached maximum efficient scale within target territory, achieving over 80,000+ targeted reach and securing significant market share.
                </p>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 px-4 text-center border-t border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] transition-colors duration-300">
        <ScrollReveal width="100%">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white transition-colors duration-300">Ready for similar results?</h2>
          <a
            href="/contact"
            className="inline-flex px-8 py-4 bg-brand-blue text-white rounded-full hover:bg-brand-lightBlue transition-all text-lg font-semibold"
          >
            Book a Call Now
          </a>
        </ScrollReveal>
      </section>
    </div>
  );
}