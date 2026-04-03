import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useRef } from 'react';

interface NumberCounterProps {
  value: number;
  duration?: number;
  delay?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export const NumberCounter = ({
  value,
  duration = 2,
  delay = 0,
  className = "",
  prefix = "",
  suffix = ""
}: NumberCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return prefix + Math.round(latest).toLocaleString() + suffix;
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const controls = animate(count, value, {
        duration: duration,
        delay: delay,
        ease: "easeOut"
      });
      setHasAnimated(true);
      return controls.stop;
    }
  }, [isInView, hasAnimated, count, value, duration, delay]);

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
};
