'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { FadeIn } from './fade-in';

const images = [
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2", alt: "Fresh fade" },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1", alt: "Barber tools" },
  { src: "https://images.unsplash.com/photo-1512496015851-a1c825bca86e?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1", alt: "Beard trim" },
  { src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop", span: "md:col-span-2 md:row-span-1", alt: "Interior" },
  { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-2", alt: "Cutting hair" },
  { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1", alt: "Happy customer" },
  { src: "https://images.unsplash.com/photo-1593726850257-2c174bfd00b1?q=80&w=800&auto=format&fit=crop", span: "md:col-span-2 md:row-span-1", alt: "Styling" },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-brand-charcoal">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Our Portfolio</h2>
            <p className="text-gray-400 mt-4 max-w-md">A glimpse into our daily craft, premium atmosphere, and precision results.</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <button className="text-brand-gold hover:text-white transition-colors uppercase tracking-widest text-sm font-medium border-b border-brand-gold pb-1">
              View Instagram
            </button>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, i) => (
            <FadeIn 
              key={i} 
              delay={i * 0.1} 
              className={`relative rounded-xl overflow-hidden group ${img.span}`}
            >
              <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors z-10" />
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
