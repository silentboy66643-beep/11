'use client';

import { motion } from 'motion/react';
import { FadeIn } from './fade-in';
import { Scissors, Check } from 'lucide-react';

const services = [
  { name: "Skin Fade", price: "£25", time: "45 mins", desc: "Precision zero fade seamlessly blended, finished with style." },
  { name: "Taper Fade", price: "£22", time: "40 mins", desc: "Clean taper at the temples and nape, maintaining weight on top." },
  { name: "Classic Haircut", price: "£20", time: "30 mins", desc: "Traditional back and sides cut with scissors on top." },
  { name: "Beard Sculpting", price: "£18", time: "30 mins", desc: "Detailed beard shaping, line-up, and conditioning treatment." },
  { name: "Hot Towel Shave", price: "£25", time: "45 mins", desc: "Luxury traditional wet shave with hot towels and premium oils." },
  { name: "Full Grooming", price: "£45", time: "75 mins", desc: "The ultimate package: Haircut, beard sculpt, and hot towel finish." },
];

export default function Services() {
  return (
    <section className="py-24 bg-brand-charcoal relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <FadeIn>
            <Scissors className="mx-auto text-brand-gold mb-4" size={32} strokeWidth={1.5} />
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Premium Services</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Tailored grooming experiences delivered with masterful technique and high-end products.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.name} delay={index * 0.1}>
              <motion.div 
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-brand-black p-8 rounded-lg border border-white/5 relative group overflow-hidden h-full flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-emerald/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif text-white group-hover:text-brand-gold transition-colors">{service.name}</h3>
                  <span className="text-lg font-medium text-brand-emerald">{service.price}</span>
                </div>
                
                <p className="text-gray-400 text-sm mb-6 flex-grow">{service.desc}</p>
                
                <div className="flex items-center justify-between text-xs font-medium tracking-wider uppercase text-gray-500 border-t border-white/10 pt-4 mt-auto">
                  <span>{service.time}</span>
                  <button className="text-brand-gold group-hover:text-white transition-colors flex items-center gap-1">
                    Book Now <Check size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </button>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.4} className="text-center mt-12">
          <p className="text-sm text-gray-500 italic">* Kids haircuts and senior discounts available from Monday to Wednesday.</p>
        </FadeIn>
      </div>
    </section>
  );
}
