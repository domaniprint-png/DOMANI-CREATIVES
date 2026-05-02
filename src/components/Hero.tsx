import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-3xl -z-10" />

      <div className="section-padding grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/10 text-brand-accent rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} />
            <span>Nairobi's Best Branding & Tech Hub</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[1.1] text-brand-primary mb-6">
            Your Hub for <span className="text-brand-accent">Branding</span> & Tech.
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
            Precision Car Key Cutting, Professional Printing, and quality Electrical Supplies. 
            Located in the heart of <span className="font-semibold text-brand-primary underline decoration-brand-accent/30">Westlands, Nairobi</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-brand-primary/20 transition-all flex items-center justify-center gap-2 group active:scale-95">
              Request a Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="https://www.google.com/maps/search/Woodvale+Grove,+Westlands,+Nairobi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white border-2 border-slate-200 text-brand-primary px-8 py-4 rounded-full font-bold text-lg hover:border-brand-accent/30 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <MapPin size={20} className="text-brand-accent" />
              Get Directions
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6">
            {[
              { label: 'Fast Delivery', sub: 'CBD & Westlands' },
              { label: 'Quality Work', sub: 'Satisfaction Guaranteed' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-bold text-brand-primary">{item.label}</span>
                <span className="text-xs text-slate-500 uppercase tracking-wide">{item.sub}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          <div className="relative w-full aspect-square max-w-[500px]">
            {/* Visual representation of services */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-accent rounded-[2rem] rotate-3 -z-10 shadow-2xl" />
            <div className="absolute inset-0 bg-white shadow-xl rounded-[2rem] p-4 flex flex-col overflow-hidden border border-slate-100">
               <div className="w-full h-full bg-slate-50 rounded-xl flex items-center justify-center relative overflow-hidden group">
                  <div className="text-center p-8">
                     <div className="text-brand-accent font-display font-black text-6xl mb-4 group-hover:scale-110 transition-transform">DC</div>
                     <p className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em]">Woodvale Grove, Westlands</p>
                  </div>
                  {/* Floating elements to represent "Creatives" */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute top-10 right-10 p-3 bg-white shadow-lg rounded-xl border border-slate-100"
                  >
                    <div className="w-6 h-6 bg-yellow-400 rounded-full" />
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute bottom-10 left-10 p-3 bg-white shadow-lg rounded-xl border border-slate-100"
                  >
                    <div className="w-8 h-2 bg-brand-accent rounded-full mb-1" />
                    <div className="w-4 h-2 bg-brand-primary rounded-full" />
                  </motion.div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
