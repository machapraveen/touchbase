
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (slideIndex: number) => void;
  className?: string;
}

const SlideControls: React.FC<SlideControlsProps> = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onGoToSlide,
  className
}) => {
  const [showFullNavigation, setShowFullNavigation] = useState(false);
  
  return (
    <div className={cn(
      "fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50",
      className
    )}>
      <AnimatePresence>
        {showFullNavigation && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg mb-2"
          >
            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <Button 
                  key={index}
                  variant={currentSlide === index ? "default" : "outline"}
                  size="icon"
                  className="w-8 h-8"
                  onClick={() => {
                    onGoToSlide(index);
                    setShowFullNavigation(false);
                  }}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setShowFullNavigation(!showFullNavigation)}
          className="rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onPrevious}
            disabled={currentSlide === 0}
            className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <span className="text-sm font-medium bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
            {currentSlide + 1} / {totalSlides}
          </span>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SlideControls;
