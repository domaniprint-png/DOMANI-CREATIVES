import { Phone, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Print & Branding', href: '#printing' },
    { name: 'Car Key Cutting', href: '#keys' },
    { name: 'Electrical & Tech', href: '#electrical' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-display font-bold text-xl">D</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
            Domani <span className="text-brand-accent">Creatives</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:0707907082"
            className="flex items-center gap-2 bg-brand-primary text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/10 active:scale-95"
          >
            <Phone size={16} />
            <span>0707 907082</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-slate-100 lg:hidden shadow-xl"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:0707907082"
                className="flex items-center justify-center gap-2 bg-brand-primary text-white p-4 rounded-xl font-bold"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
