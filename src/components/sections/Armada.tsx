import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Armada = () => {
  const fleet = [
    {
      name: "Ambulance VIP",
      type: "Toyota Alphard / Vellfire",
      features: ["Peralatan ICU", "Monitor Pasien", "Ventilator", "AC Dingin", "Kapasitas 4 Penumpang"],
      image: "https://images.unsplash.com/photo-1516503563231-1d54432967e8?auto=format&fit=crop&q=80&w=1000",
    },
    {
      name: "Ambulance Emergency",
      type: "Hyundai H1 / Toyota Hiace",
      features: ["Defibrillator", "Oksigen Sentral", "Peralatan Bedah", "Monitor Vital Sign", "Respon Cepat"],
      image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&q=80&w=1000",
    },
    {
      name: "Ambulance Transport",
      type: "Suzuki APV / Daihatsu Luxio",
      features: ["Brankar Pasien", "Oksigen Portable", "Peralatan P3K", "AC Double Blower", "Kapasitas 5 Penumpang"],
      image: "https://images.unsplash.com/photo-1513222485735-c229f562911a?auto=format&fit=crop&q=80&w=1000",
    },
  ];

  return (
    <section id="armada" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
            Armada <span className="text-primary">Terbaik</span> Untuk Keselamatan Anda
          </h2>
          <p className="text-lg text-slate-600">
            Kami menjaga setiap unit kendaraan dalam kondisi prima dengan perawatan rutin dan standar kebersihan medis yang ketat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {fleet.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:border-primary/20 transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.name}</h3>
                <p className="text-primary font-semibold mb-6">{item.type}</p>
                <div className="space-y-4">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Fasilitas Utama:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, fIndex) => (
                      <Badge
                        key={fIndex}
                        variant="secondary"
                        className="bg-white text-slate-600 border border-slate-200 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Armada;
