import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingWhatsApp = () => {
  const WHATSAPP_NUMBER = "6282261108591"; // Nomor WhatsApp Zahi'ah Ambulance
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Halo Zahi'ah Ambulance, saya ingin memesan layanan ambulance. Mohon informasinya.")}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl shadow-green-500/30 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat Admin Sekarang
      </span>
      <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 border-2 border-white rounded-full animate-pulse"></span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
