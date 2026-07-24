'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { FadeIn } from './fade-in';
import { Instagram, Twitter } from 'lucide-react';

const team = [
  {
    name: "James 'Noor' Smith",
    role: "Master Barber & Founder",
    image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=1760&auto=format&fit=crop",
    bio: "Over 12 years of experience crafting precision fades and classic styles.",
    specialty: "Skin Fades & Restyles"
  },
  {
    name: "Marcus Thorne",
    role: "Senior Barber",
    image: "https://images.unsplash.com/photo-1593726850257-2c174bfd00b1?q=80&w=1740&auto=format&fit=crop",
    bio: "Detail-obsessed barber known for meticulous beard sculpting.",
    specialty: "Beard Sculpting"
  },
  {
    name: "Leo Rossi",
    role: "Stylist",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1887&auto=format&fit=crop",
    bio: "Modern texturizing expert with a passion for creative cuts.",
    specialty: "Textured Crops"
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-brand-emerald text-sm uppercase tracking-widest font-medium">The Craftsmen</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6">Meet the Team</h2>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.2}>
              <motion.div 
                className="group relative flex flex-col items-center text-center"
                whileHover="hover"
              >
                <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-2 border-brand-charcoal transition-colors duration-500 group-hover:border-brand-gold p-1">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Social Reveal */}
                  <motion.div 
                    className="absolute inset-0 bg-brand-black/60 rounded-full flex items-center justify-center gap-4 opacity-0"
                    variants={{
                      hover: { opacity: 1 }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-emerald text-white transition-colors">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-emerald text-white transition-colors">
                      <Twitter size={20} />
                    </a>
                  </motion.div>
                </div>
                
                <h3 className="text-2xl font-serif text-white mb-1 group-hover:text-brand-gold transition-colors">{member.name}</h3>
                <p className="text-brand-emerald text-sm font-medium uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm font-light mb-4 px-4">{member.bio}</p>
                
                <div className="inline-block bg-brand-charcoal px-4 py-1.5 rounded-full border border-white/5 text-xs text-gray-300 font-medium">
                  Expertise: {member.specialty}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
