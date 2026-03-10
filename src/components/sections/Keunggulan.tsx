import { ShieldCheck, Zap, UserCheck, Ambulance, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

const Keunggulan = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Respon Cepat",
      description: "Tim kami siaga dan akan segera meluncur ke lokasi penjemputan dengan waktu respon minimal.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Layanan 24 Jam",
      description: "Siaga penuh selama 24 jam sehari, 7 hari seminggu, termasuk hari libur nasional.",
    },
    {
      icon: <UserCheck className="h-8 w-8 text-primary" />,
      title: "Tenaga Medis Profesional",
      description: "Didukung oleh perawat dan tenaga medis yang terlatih dan berpengalaman.",
    },
    {
      icon: <Ambulance className="h-8 w-8 text-primary" />,
      title: "Ambulance Lengkap",
      description: "Armada kami dalam kondisi prima dengan fasilitas pendukung medis yang lengkap.",
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-primary" />,
      title: "Peralatan Medis Modern",
      description: "Dilengkapi dengan peralatan medis standar internasional untuk penanganan darurat.",
    },
  ];

  return (
    <section id="keunggulan" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
            Mengapa Memilih Zahi'ah <span className="text-primary">Ambulance</span>?
          </h2>
          <p className="text-lg text-slate-600">
            Kami berkomitmen memberikan pelayanan terbaik demi keselamatan dan kenyamanan setiap pasien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="bg-white p-4 rounded-2xl shadow-sm inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Keunggulan;
