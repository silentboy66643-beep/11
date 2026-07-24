import Image from 'next/image';
import { FadeIn } from './fade-in';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const points = [
    "Precision barbering techniques",
    "Five-star customer service",
    "Welcoming, modern atmosphere",
    "Trusted by loyal clients in Maidstone"
  ];

  return (
    <section className="py-24 bg-brand-black overflow-hidden relative">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-brand-charcoal skew-x-[-15deg] -translate-x-1/2 opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <FadeIn direction="right">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-white/5">
                <Image
                  src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1740&auto=format&fit=crop"
                  alt="Barber consultation and cutting"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -right-8 bg-brand-charcoal p-6 rounded-lg border border-brand-emerald/20 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-md hidden sm:block">
                <div className="text-4xl font-serif text-brand-gold mb-1">10+</div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">Years Experience</div>
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn direction="left">
              <span className="text-brand-emerald text-sm uppercase tracking-widest font-medium mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-balance">More than a haircut. <br/>An <span className="italic text-gray-400">experience.</span></h2>
              
              <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed mb-8">
                <p>
                  At NOOR Barber, we believe that grooming is an art form. Located in the heart of Maidstone, our studio was built on the foundation of providing exceptional attention to detail and unmatched customer service.
                </p>
                <p>
                  Our friendly team of experienced barbers specializes in modern precision fades, classic restyles, and expert beard sculpting. We don't just cut hair; we craft confidence.
                </p>
              </div>

              <ul className="space-y-4 mb-10">
                {points.map((point, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 border-t border-white/10">
                <p className="text-xl font-serif italic text-white">"Precision. Style. Confidence."</p>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
