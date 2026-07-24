import { motion } from 'motion/react';
import { useEffect, useState, useMemo } from 'react';
import { Scissors } from 'lucide-react';

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [isAnimating, setIsAnimating] = useState(true);

  const particles = useMemo(() => {
    return [...Array(20)].map(() => ({
      width: Math.random() * 100 + 50,
      top: `${Math.random() * 100}%`,
      rotate: Math.random() * 20 - 10,
      duration: Math.random() * 1.5 + 1,
      delay: Math.random() * 0.5,
    }));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 800); // Wait for fade out
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F0F0F] overflow-hidden"
      animate={{ opacity: isAnimating ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Spotlight */}
      <motion.div
        className="absolute w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-brand-emerald/10 blur-[100px] pointer-events-none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      
      {/* Hair Particles (simplified as subtle animated lines) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-white/40"
            style={{
              width: p.width,
              top: p.top,
              left: '-10%',
              rotate: p.rotate,
            }}
            animate={{
              x: ['0vw', '110vw'],
            }}
            transition={{
              duration: p.duration,
              ease: "linear",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <motion.div
          initial={{ rotate: -90, scale: 0, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 text-brand-gold relative"
        >
          <Scissors size={64} strokeWidth={1} />
          <motion.div 
            className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(200,164,93,0.5)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ delay: 0.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          />
        </motion.div>
        
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif text-white tracking-widest uppercase relative drop-shadow-[0_0_15px_rgba(31,175,115,0.4)]">
            NOOR
          </h1>
          <h2 className="text-sm md:text-lg font-sans text-brand-gold tracking-[0.3em] uppercase mt-2">
            Barber
          </h2>
          
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-brand-emerald to-transparent mt-6 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
