import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function LocationContact() {
  const contacts = [
    { icon: <Phone className="text-brand-accent" />, label: 'Calls / WhatsApp', value: '0707 907082 / 0708 121627' },
    { icon: <Mail className="text-brand-accent" />, label: 'Emails', value: 'domaniprint@gmail.com' },
    { icon: <Clock className="text-brand-accent" />, label: 'Working Hours', value: 'Mon – Sat: 8:00 AM – 6:00 PM' },
    { icon: <MapPin className="text-brand-accent" />, label: 'Location', value: 'Woodvale Grove, Westlands, Nairobi' },
  ];

  return (
    <section id="contact" className="py-24 overflow-hidden">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-brand-primary mb-6">
              Find Us in <span className="text-brand-accent">Westlands</span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              We are conveniently located on Woodvale Grove. Drop by for a quick consultation or pick up your tech accessories.
            </p>

            <div className="space-y-6">
              {contacts.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">{item.label}</h4>
                    <p className="font-semibold text-brand-primary text-lg">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-brand-primary rounded-[2rem] text-white">
              <h3 className="font-display text-xl font-bold mb-2">Need a delivery?</h3>
              <p className="text-slate-300 text-sm mb-4">We offer prompt delivery services for electrical supplies and tech accessories within Westlands and Nairobi CBD.</p>
              <button className="bg-white text-brand-primary px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2">
                <Send size={16} />
                Order Delivery
              </button>
            </div>
          </div>

          <div className="relative h-[500px] lg:h-full min-h-[500px]">
            {/* Map Placeholder with visual style */}
            <div className="absolute inset-0 bg-slate-100 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
              <div className="w-full h-full bg-[url('https://api.dicebear.com/7.x/shapes/svg?seed=nairobi')] bg-no-repeat bg-cover opacity-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <motion.div 
                   animate={{ scale: [1, 1.2, 1] }}
                   transition={{ repeat: Infinity, duration: 2 }}
                   className="relative"
                 >
                   <MapPin size={48} className="text-red-500 fill-red-100" />
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-red-500/20 rounded-full blur-xl" />
                 </motion.div>
                 <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3 border border-slate-100 whitespace-nowrap animate-bounce">
                    <span className="font-bold text-brand-primary">Woodvale Grove, Westlands</span>
                    <a 
                      href="https://www.google.com/maps/search/Domani+Creatives+Woodvale+Grove+Nairobi" 
                      target="_blank"
                      className="text-xs font-bold text-brand-accent underline"
                    >
                      Open Maps
                    </a>
                 </div>
              </div>
              
              {/* Pseudo-map grid lines */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <div className="grid grid-cols-12 h-full">
                  {[...Array(12)].map((_, i) => <div key={i} className="border-r border-black h-full" />)}
                </div>
                <div className="absolute inset-0 grid grid-rows-12 w-full h-full">
                  {[...Array(12)].map((_, i) => <div key={i} className="border-b border-black w-full" />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
