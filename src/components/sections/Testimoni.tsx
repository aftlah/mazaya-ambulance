import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const Testimoni = () => {
  const reviews = [
    {
      name: "Bapak Ahmad",
      role: "Keluarga Pasien",
      review: "Sangat terbantu dengan layanan Mazaya Ambulance saat butuh pemindahan ayah ke rumah sakit di tengah malam. Responnya cepat sekali, timnya sangat sopan dan profesional.",
      rating: 5,
    },
    {
      name: "Ibu Siti",
      role: "Pasien Kontrol Rutin",
      review: "Sudah langganan antar jemput untuk kontrol ke RS. Mobilnya bersih, AC dingin, dan perawatnya sangat perhatian membantu saya naik turun mobil. Terima kasih Mazaya.",
      rating: 5,
    },
    {
      name: "Andi Saputra",
      role: "Penyelenggara Event",
      review: "Terima kasih untuk standby ambulance-nya selama event maraton kemarin. Tim medisnya sigap menangani beberapa peserta yang kelelahan. Sangat direkomendasikan.",
      rating: 5,
    },
  ];

  return (
    <section id="testimoni" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-slate-50 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-50 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
            Apa Kata <span className="text-primary">Mereka</span>?
          </h2>
          <p className="text-lg text-slate-600">
            Kepercayaan Anda adalah prioritas kami. Berikut adalah pengalaman pelanggan yang telah menggunakan layanan Mazaya Ambulance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col items-start relative hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="absolute top-8 right-10 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote className="h-12 w-12" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-700 italic text-lg leading-relaxed mb-8 flex-grow">
                "{review.review}"
              </p>

              <div className="flex items-center gap-4 border-t border-slate-200 pt-6 w-full">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
