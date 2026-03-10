import { PhoneCall, MapPin, Truck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CaraPemesanan = () => {
  const steps = [
    {
      icon: <PhoneCall className="h-10 w-10" />,
      title: "Hubungi Kami",
      description: "Segera hubungi tim Zahi'ah Ambulance melalui WhatsApp atau Telepon yang tersedia 24 jam.",
    },
    {
      icon: <MapPin className="h-10 w-10" />,
      title: "Berikan Lokasi Penjemputan",
      description: "Informasikan lokasi penjemputan, kondisi pasien, dan tujuan rumah sakit yang dituju.",
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: "Ambulance Menuju Lokasi",
      description: "Armada ambulance terdekat akan segera meluncur ke lokasi Anda dengan respon cepat.",
    },
  ];

  return (
    <section id="cara-pemesanan" className="py-24 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-black/5 -skew-x-12 transform translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-extrabold tracking-tight text-white mb-6">
            Cara Pemesanan <span className="text-white/80">Ambulance</span>
          </h2>
          <p className="text-lg text-white/90">
            Hanya dengan 3 langkah mudah, layanan kami siap membantu Anda di situasi darurat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 items-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Connection arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-2/3 w-1/2 border-t-2 border-dashed border-white/30 z-0">
                  <ArrowRight className="absolute -right-2 -top-2.5 h-5 w-5 text-white/30" />
                </div>
              )}

              <div className="relative z-10 w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-primary shadow-2xl group-hover:scale-110 transition-transform duration-300 rotate-3 group-hover:rotate-0 mb-8">
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-white/80 leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaraPemesanan;
