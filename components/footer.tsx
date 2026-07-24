import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-serif text-white tracking-widest uppercase mb-4">NOOR<br/><span className="text-brand-gold text-lg">Barber</span></h2>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Precision cuts, premium grooming, and a five-star experience in the heart of Maidstone.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-brand-emerald transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-emerald transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-emerald transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Book Online</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Skin Fade</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Classic Haircut</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Beard Sculpting</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Hot Towel Shave</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>106 King Street</li>
              <li>Maidstone ME14 1BH</li>
              <li>+44 1622 221401</li>
              <li>info@noorbarber.co.uk</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} NOOR Barber. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
