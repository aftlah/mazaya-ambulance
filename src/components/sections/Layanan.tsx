import { Button } from "@/components/ui/button";
import { Ambulance, Home, Building2, UserMinus, CalendarCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Layanan = () => {
  const services = [
    {
      icon: <Ambulance className="h-10 w-10" />,
      title: "Ambulance Darurat",
      description: "Penanganan cepat untuk situasi gawat darurat dengan peralatan medis lengkap dan tenaga medis siaga.",
    },
    {
      icon: <Home className="h-10 w-10" />,
      title: "Antar Jemput Pasien",
      description: "Layanan transportasi pasien dari rumah ke rumah sakit atau sebaliknya untuk kontrol rutin.",
    },
    {
      icon: <Building2 className="h-10 w-10" />,
      title: "Transportasi Antar RS",
      description: "Rujukan atau pemindahan pasien antar fasilitas kesehatan dengan pengawasan medis intensif.",
    },
    {
      icon: <UserMinus className="h-10 w-10" />,
      title: "Ambulance Jenazah",
      description: "Pelayanan pengantaran jenazah ke lokasi pemakaman atau luar kota dengan penuh rasa hormat.",
    },
    {
      icon: <CalendarCheck className="h-10 w-10" />,
      title: "Ambulance Standby Event",
      description: "Penyediaan armada ambulance standby untuk acara olahraga, konser, atau gathering perusahaan.",
    },
  ];

  return (
    <section id="layanan" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Layanan Medis <span className="text-primary">Profesional</span> Untuk Anda
            </h2>
            <p className="text-lg text-slate-600">
              Kami menyediakan berbagai jenis layanan transportasi medis yang disesuaikan dengan kebutuhan pasien dan keluarga.
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-8 py-6 group shadow-lg shadow-primary/20">
            Lihat Semua Layanan
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-10 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group flex flex-col items-start"
            >
              <div className="bg-primary/10 text-primary p-4 rounded-2xl mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
              </div>
              {/* <button className="flex items-center text-primary font-bold hover:gap-3 transition-all mt-auto group/btn">
                Pelajari Lebih Lanjut
                <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
              </button> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Layanan;
