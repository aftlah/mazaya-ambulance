import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Keunggulan from "@/components/sections/Keunggulan";
import Layanan from "@/components/sections/Layanan";
import Armada from "@/components/sections/Armada";
import CaraPemesanan from "@/components/sections/CaraPemesanan";
import Testimoni from "@/components/sections/Testimoni";
import FormBooking from "@/components/sections/FormBooking";
import FloatingWhatsApp from "@/components/sections/FloatingWhatsApp";
import Footer from "@/components/sections/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SmoothScroll } from "@/components/SmoothScroll";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <SmoothScroll>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      <div className="min-h-screen bg-white selection:bg-primary selection:text-white">
        <Navbar />
        <main>
          <Hero />
          
          <ScrollReveal>
            <Keunggulan />
          </ScrollReveal>
          
          <ScrollReveal direction="left">
            <Layanan />
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <Armada />
          </ScrollReveal>
          
          <ScrollReveal direction="up">
            <CaraPemesanan />
          </ScrollReveal>
          
          <ScrollReveal>
            <Testimoni />
          </ScrollReveal>
          
          <ScrollReveal direction="up">
            <FormBooking />
          </ScrollReveal>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </SmoothScroll>
  );
}

export default App;
