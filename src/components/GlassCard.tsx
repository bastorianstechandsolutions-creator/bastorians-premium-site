import type { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <div className={cn("glass-card p-6 md:p-8 hover:bg-black/[0.05] dark:hover:bg-white/[0.04] transition-colors duration-300", className)}>
      {children}
    </div>
  );
};
