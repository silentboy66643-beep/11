'use client';

import { FadeIn } from './fade-in';
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export default function Booking() {
  return (
    <section className="py-32 bg-brand-black relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-emerald/10 to-transparent skew-x-12" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand-gold/5 to-transparent -skew-x-12" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">
            Ready for Your <br className="hidden md:block" />
            <span className="italic text-gray-400">Next Fresh Cut?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            Secure your spot today and experience Maidstone's premier grooming service. Walk-ins welcome, but bookings are recommended.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-gold text-brand-black font-semibold uppercase tracking-widest text-sm overflow-hidden rounded-sm"
          >
            {/* Pulse effect */}
            <div className="absolute inset-0 bg-white/30 rounded-sm animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <Calendar size={20} />
            <span className="relative z-10">Book Appointment</span>
          </motion.button>
        </FadeIn>
      </div>
    </section>
  );
}
