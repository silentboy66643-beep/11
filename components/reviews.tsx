'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { FadeIn } from './fade-in';

const reviews = [
  {
    text: "Class service and an excellent taper fade. The shop looks incredible and the attention to detail is spot on.",
    author: "David H.",
    rating: 5
  },
  {
    text: "The best haircut I've had in ages. Proper luxury experience from the moment you walk in the door.",
    author: "Michael T.",
    rating: 5
  },
  {
    text: "Attention to detail is second to none. The beard sculpting completely transformed my look.",
    author: "Sam R.",
    rating: 5
  },
  {
    text: "Worth travelling for every haircut. Five-star service every visit. NOOR is the only barber I trust in Maidstone.",
    author: "Jordan W.",
    rating: 5
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
            <Quote className="text-brand-emerald mb-8 opacity-50" size={48} />
            
            <div className="h-[200px] md:h-[150px] w-full relative flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-full px-4"
                >
                  <p className="text-xl md:text-3xl font-serif text-white leading-relaxed mb-6 italic">
                    "{reviews[currentIndex].text}"
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">
                    {reviews[currentIndex].author}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-4 mt-12">
              <button 
                onClick={prev}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'w-8 bg-brand-gold' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={next}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
