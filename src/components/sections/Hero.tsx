import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useSmoothScroll } from "@/context/SmoothScrollContext";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { lenis } = useSmoothScroll();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50"
    >
      <motion.div 
        style={{ y: y1 }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" 
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="absolute bottom-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" 
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold mb-2">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Layanan Siaga 24 Jam
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Zahi'ah <span className="text-primary">Ambulance</span>
            </h1>

            <p className="text-xl md:text-2xl font-semibold text-slate-800 leading-relaxed">
              Layanan Ambulance 24 Jam – Cepat, Aman, dan Terpercaya
            </p>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Solusi transportasi medis profesional untuk keadaan darurat maupun non-darurat. Kami hadir dengan respon cepat dan armada yang lengkap untuk memastikan kenyamanan dan keselamatan pasien.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => lenis?.scrollTo("#kontak", { offset: -80 })}
                className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-8 py-7 text-lg group shadow-lg shadow-primary/20"
              >
                <Phone className="mr-2 h-5 w-5" />
                Hubungi Sekarang
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-200 hover:border-primary hover:text-primary font-bold rounded-full px-8 py-7 text-lg bg-white shadow-sm"
              >
                <MessageCircle className="mr-2 h-5 w-5 text-[#25D366]" />
                WhatsApp Booking
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-slate-900">24/7</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Pelayanan Siaga</div>
              </div>
              {/* <div>
                <div className="text-3xl font-bold text-slate-900">15+</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Armada Modern</div>
              </div> */}
              <div>
                <div className="text-3xl font-bold text-slate-900">100%</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Respon Cepat</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/images/foto1.jpeg"
                alt="Zahi'ah Ambulance Modern Fleet"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Background decoration for image */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full bg-primary rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
