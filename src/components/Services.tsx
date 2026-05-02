import { Printer, Key, Zap, Monitor, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const pillars = [
    {
      id: 'printing',
      icon: <Printer className="text-pink-500" size={32} />,
      title: 'Print & Branding',
      description: 'High-quality digital and offset printing with fast turnaround.',
      items: ['Business cards', 'Flyers & Banners', 'Company Uniforms', 'Custom Merchandise'],
      color: 'bg-pink-50',
    },
    {
      id: 'keys',
      icon: <Key className="text-orange-500" size={32} />,
      title: 'Car Key Cutting',
      description: 'While-you-wait service for most vehicle models.',
      items: ['Duplicate car keys', 'Transponder programming', 'Key fob repairs', 'Emergency opening'],
      color: 'bg-orange-50',
    },
    {
      id: 'electrical',
      icon: <Zap className="text-amber-500" size={32} />,
      title: 'Electrical Supplies',
      description: 'Quality electrical essentials for contractors and DIY projects.',
      items: ['Wiring & Switches', 'Lighting solutions', 'Circuit breakers', 'Industrial sockets'],
      color: 'bg-amber-50',
    },
    {
      id: 'tech',
      icon: <Monitor className="text-blue-500" size={32} />,
      title: 'Computer Accessories',
      description: 'Genuine accessories to keep you productive and connected.',
      items: ['Wireless Mouse/Keyboard', 'Laptop Chargers/Bags', 'HDMIs & Storage (SSD/USB)', 'Networking Cables'],
      color: 'bg-blue-50',
    },
  ];

  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-brand-primary mb-4">
            Our Four <span className="text-brand-accent">Pillars</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            We provide specialized solutions across branding, security, and hardware, all under one roof in Westlands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group"
            >
              <div className={`${pillar.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {pillar.icon}
              </div>
              
              <h3 className="font-display font-bold text-xl text-brand-primary mb-3">
                {pillar.title}
              </h3>
              
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {pillar.description}
              </p>

              <ul className="space-y-3 pt-4 border-t border-slate-50">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                    <CheckCircle2 size={16} className="text-brand-success shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
