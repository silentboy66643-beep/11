import { Scissors, ShieldCheck, MapPin, Coffee } from 'lucide-react';
import { FadeIn } from './fade-in';

const features = [
  {
    icon: <Scissors className="text-brand-emerald" size={28} />,
    title: "Precision Craft",
    desc: "Every cut is executed with meticulous attention to detail."
  },
  {
    icon: <ShieldCheck className="text-brand-gold" size={28} />,
    title: "Premium Products",
    desc: "We use only the finest grooming products for hair and beard."
  },
  {
    icon: <Coffee className="text-brand-emerald" size={28} />,
    title: "Luxury Atmosphere",
    desc: "Relax with complimentary drinks in our modern waiting area."
  },
  {
    icon: <MapPin className="text-brand-gold" size={28} />,
    title: "Prime Location",
    desc: "Conveniently located on King Street, Maidstone."
  }
];

export default function Features() {
  return (
    <section className="py-20 border-y border-white/5 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {features.map((feature, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up" className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-charcoal border border-white/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg font-serif text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
