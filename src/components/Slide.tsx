
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideProps {
  id: string;
  title: string;
  className?: string;
  titleClass?: string;
  contentClass?: string;
  children: React.ReactNode;
  isActive: boolean;
  subtitle?: string;
  animationVariant?: 'fade' | 'slide' | 'scale' | 'none';
  region?: 'global' | 'india' | 'us';
  bgVariant?: 'purple' | 'blue' | 'orange' | 'green' | 'gradient-1' | 'gradient-2' | 'gradient-3' | 'gradient-4' | 'none';
}

const Slide: React.FC<SlideProps> = ({
  id,
  title,
  className,
  titleClass,
  contentClass,
  children,
  isActive,
  subtitle,
  animationVariant = 'fade',
  region = 'global',
  bgVariant = 'none'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (isActive) {
      // Small delay to trigger animation after slide becomes active
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isActive]);

  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.5 } }
    },
    slide: {
      hidden: { x: 100, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
    },
    scale: {
      hidden: { scale: 0.8, opacity: 0 },
      visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
    },
    none: {
      hidden: {},
      visible: {}
    }
  };

  // Define background colors/gradients based on variant
  const getBgClasses = () => {
    switch (bgVariant) {
      case 'purple':
        return 'bg-gradient-to-br from-touchbase-purple/10 to-touchbase-purpleDark/20';
      case 'blue':
        return 'bg-gradient-to-br from-blue-50 to-touchbase-blue/10';
      case 'orange':
        return 'bg-gradient-to-br from-orange-50 to-touchbase-orange/10';
      case 'green':
        return 'bg-gradient-to-br from-green-50 to-touchbase-green/10';
      case 'gradient-1':
        return 'bg-gradient-to-br from-touchbase-purple/20 via-touchbase-blue/10 to-gray-100 dark:from-touchbase-purple/30 dark:via-touchbase-blue/20 dark:to-gray-900';
      case 'gradient-2':
        return 'bg-gradient-to-br from-touchbase-blue/20 via-touchbase-purple/10 to-gray-100 dark:from-touchbase-blue/30 dark:via-touchbase-purple/20 dark:to-gray-900';
      case 'gradient-3': 
        return 'bg-gradient-to-br from-touchbase-orange/20 via-touchbase-purple/10 to-gray-100 dark:from-touchbase-orange/30 dark:via-touchbase-purple/20 dark:to-gray-900';
      case 'gradient-4':
        return 'bg-gradient-to-br from-touchbase-green/20 via-touchbase-blue/10 to-gray-100 dark:from-touchbase-green/30 dark:via-touchbase-blue/20 dark:to-gray-900';
      default:
        return '';
    }
  };

  return (
    <div 
      id={id}
      className={cn(
        "relative min-h-screen w-full py-16 px-8 flex flex-col items-center justify-center",
        getBgClasses(),
        isActive ? "block" : "hidden",
        className
      )}
    >
      {region === 'india' && (
        <div className="absolute top-4 right-4 flex items-center space-x-1 bg-orange-50 text-orange-800 px-3 py-1 rounded-full text-sm">
          <div className="w-3 h-3 rounded-full bg-green-600"></div>
          <div className="w-3 h-3 rounded-full bg-white border border-gray-200"></div>
          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
          <span className="ml-1 font-medium">India Focus</span>
        </div>
      )}
      
      {region === 'us' && (
        <div className="absolute top-4 right-4 flex items-center space-x-1 bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm">
          <span className="font-medium">US Data</span>
        </div>
      )}

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={variants[animationVariant]}
            className="w-full"
          >
            <h2 className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-title",
              titleClass
            )}>
              {title}
            </h2>
            
            {subtitle && (
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-center text-gray-600 dark:text-gray-400">
                {subtitle}
              </p>
            )}
            
            <div className={cn("w-full slide-content", contentClass)}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Slide;