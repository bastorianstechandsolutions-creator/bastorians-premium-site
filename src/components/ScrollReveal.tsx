import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  width?: 'fit-content' | '100%';
}

export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  width = "fit-content"
}: ScrollRevealProps) => {
  return (
    <div style={{ width }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay, ease: [0.25, 0.25, 0, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};
