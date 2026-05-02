import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white pt-20 pb-10">
      <div className="section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-accent rounded flex items-center justify-center">
                <span className="font-display font-bold">D</span>
              </div>
              <span className="font-display font-bold text-xl">Domani Creatives</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your one-stop hub for branding, precision car key cutting, 
              electrical supplies, and computer accessories in Westlands.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all text-slate-400 hover:text-white">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#printing" className="hover:text-brand-accent transition-colors">Digital Printing</a></li>
              <li><a href="#printing" className="hover:text-brand-accent transition-colors">Brand Identity</a></li>
              <li><a href="#keys" className="hover:text-brand-accent transition-colors">Car Key Programming</a></li>
              <li><a href="#electrical" className="hover:text-brand-accent transition-colors">Electrical Fittings</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Home</a></li>
              <li><a href="#contact" className="hover:text-brand-accent transition-colors">Our Location</a></li>
              <li><a href="#contact" className="hover:text-brand-accent transition-colors">Request Callback</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Business Hours</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Get updates on new tech accessories and printing offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-brand-accent"
              />
              <button className="bg-brand-accent px-4 py-2 rounded-lg hover:bg-brand-accent/90 transition-all">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Domani Creatives. All rights reserved. 
            <span className="ml-2">Located in Woodvale Grove, Westlands.</span>
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
