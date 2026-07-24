'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { MoveHorizontal } from 'lucide-react';
import { FadeIn } from './fade-in';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handlePointerDown = () => setIsDragging(true);
  const handlePointerUp = () => setIsDragging(false);

  useEffect(() => {
    window.addEventListener('mouseup', handlePointerUp);
    window.addEventListener('touchend', handlePointerUp);
    return () => {
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
    };
  }, []);

  return (
    <section className="py-24 bg-brand-charcoal relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-brand-emerald text-sm uppercase tracking-widest font-medium">Transformations</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6">The NOOR Difference</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Swipe to see our precision work. From untidy hair to sharp, modern skin fades and perfectly sculpted beards.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div 
              ref={containerRef}
              className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] select-none cursor-ew-resize group"
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onMouseDown={handlePointerDown}
              onTouchStart={handlePointerDown}
            >
              {/* After Image (Background) */}
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2000&auto=format&fit=crop"
                  alt="After Haircut - Sharp fade"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  draggable={false}
                />
                <div className="absolute top-4 right-4 bg-brand-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-sm text-xs font-medium uppercase tracking-wider">
                  After
                </div>
              </div>

              {/* Before Image (Clipped overlay) */}
              <div 
                className="absolute inset-0 z-10 border-r-2 border-brand-gold shadow-[2px_0_15px_rgba(0,0,0,0.3)]"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1621644795325-0fcb5465c400?q=80&w=2000&auto=format&fit=crop"
                  alt="Before Haircut - Untidy"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  draggable={false}
                />
                <div className="absolute top-4 left-4 bg-brand-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-sm text-xs font-medium uppercase tracking-wider">
                  Before
                </div>
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 z-20 flex items-center justify-center pointer-events-none"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-brand-black shadow-[0_0_20px_rgba(200,164,93,0.5)] transition-transform group-hover:scale-110">
                  <MoveHorizontal size={20} />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
