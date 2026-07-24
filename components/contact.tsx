import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { FadeIn } from './fade-in';

export default function Contact() {
  return (
    <section className="py-24 bg-brand-charcoal border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <FadeIn>
              <h2 className="text-4xl font-serif text-white mb-8">Visit NOOR Barber</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-black flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-emerald" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Location</h3>
                    <p className="text-gray-400">106 King Street<br/>Maidstone, ME14 1BH<br/>United Kingdom</p>
                    <button className="mt-2 text-brand-gold text-sm font-medium hover:underline">Get Directions</button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-black flex items-center justify-center shrink-0">
                    <Phone className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Contact</h3>
                    <p className="text-gray-400">+44 1622 221401</p>
                    <button className="mt-2 text-brand-emerald text-sm font-medium hover:underline">Call Now</button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-black flex items-center justify-center shrink-0">
                    <Clock className="text-brand-emerald" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Opening Hours</h3>
                    <ul className="text-gray-400 space-y-1">
                      <li className="flex justify-between w-48"><span>Mon - Wed:</span> <span>9am - 6pm</span></li>
                      <li className="flex justify-between w-48"><span>Thu - Fri:</span> <span>9am - 8pm</span></li>
                      <li className="flex justify-between w-48 text-brand-gold"><span>Saturday:</span> <span>8am - 5pm</span></li>
                      <li className="flex justify-between w-48"><span>Sunday:</span> <span>Closed</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="left" className="h-[500px] bg-brand-black rounded-lg border border-white/5 overflow-hidden relative group">
             {/* Styled map placeholder since we can't embed a real interactive one easily without iframe/key */}
             <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #1FAF73 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                <div className="text-center relative z-10 bg-brand-charcoal/90 backdrop-blur p-8 rounded-lg border border-white/10">
                  <MapPin size={48} className="text-brand-emerald mx-auto mb-4" />
                  <h3 className="text-xl font-serif text-white mb-2">Maidstone, UK</h3>
                  <p className="text-gray-400 mb-6 text-sm">106 King Street, ME14 1BH</p>
                  <button className="px-6 py-2 bg-white text-brand-black text-sm font-medium rounded-sm hover:bg-brand-emerald hover:text-white transition-colors">
                    Open in Google Maps
                  </button>
                </div>
             </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
