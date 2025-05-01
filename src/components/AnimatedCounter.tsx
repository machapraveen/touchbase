
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  inView?: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = '',
  prefix = '',
  duration = 2000,
  className,
  inView = true
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }

    // Animation function using requestAnimationFrame for smooth counting
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      
      const progress = timestamp - startTimeRef.current;
      const progressRatio = Math.min(progress / duration, 1);
      
      // Ease out cubic function for smooth deceleration
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOutCubic(progressRatio);
      
      const currentCount = Math.floor(easedProgress * value);
      countRef.current = currentCount;
      setCount(currentCount);
      
      if (progress < duration) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    
    // Start animation
    frameRef.current = requestAnimationFrame(animate);
    
    // Cleanup function
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [value, duration, inView]);

  return (
    <span className={cn("font-bold counter-animate", className)}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default AnimatedCounter;
