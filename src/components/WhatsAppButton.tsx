import { MessageSquareText } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  const phoneNumber = '254707907082';
  const message = 'Hello Domani Creatives, I am interested in your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-brand-success text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <MessageSquareText size={28} />
      <span className="absolute right-full mr-4 bg-white text-brand-primary px-4 py-2 rounded-xl text-sm font-bold shadow-xl border border-slate-100 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Chat on WhatsApp
      </span>
      <span className="absolute inset-0 bg-brand-success rounded-full animate-ping -z-10 opacity-40" />
    </motion.a>
  );
}
