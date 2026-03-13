import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Testimoni = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth"
      });
    }
  };
  const reviews = [
    {
      name: "Nabillah Zahiah",
      role: "Antar Jemput Pasien",
      review: "pelayanan nya sangat baik, driver dan co ambulance rapih berpakaian dan ramah",
      rating: 5,
    },
    {
      name: "Lies chanel",
      role: "Antar Jemput Pasien",
      review: "terimakasih pelayanan nya sangat bagus, respon cepat driver ramah dan juga rapih berpakaian",
      rating: 5,
    },
    {
      name: "Fadhil Abid",
      role: "Antar Jemput Pasien",
      review: "terimakasih ambulance bang dul, pelayanan nya sangat memuaskan🥰 …",
      rating: 5,
    },
    {
      name: "Riski Fajar",
      role: "Antar Jemput Pasien",
      review: "Good joob pelayananya🙏 satset …",
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
            Kepercayaan Anda adalah prioritas kami. Berikut adalah pengalaman pelanggan yang telah menggunakan layanan Zahi'ah Ambulance.
          </p>
        </div>

        <div className="relative group/nav">
          <div 
             ref={scrollRef}
             onScroll={handleScroll}
             className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide px-4 -mx-4 scroll-smooth"
           >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="min-w-full md:min-w-[calc(33.333%-1.5rem)] snap-center p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col items-start relative hover:shadow-2xl transition-all duration-500 group"
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

          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all opacity-0 group-hover/nav:opacity-100 z-20 hidden md:flex"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
             onClick={() => scroll("right")}
             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all opacity-0 group-hover/nav:opacity-100 z-20 hidden md:flex"
             aria-label="Next slide"
           >
             <ChevronRight className="h-6 w-6" />
           </button>
         </div>

         {/* Pagination Dots */}
         <div className="flex justify-center gap-2 mt-4">
           {reviews.map((_, index) => (
             <button
               key={index}
               onClick={() => {
                 if (scrollRef.current) {
                   const { clientWidth } = scrollRef.current;
                   scrollRef.current.scrollTo({
                     left: index * clientWidth,
                     behavior: "smooth"
                   });
                 }
               }}
               className={`h-2 transition-all duration-300 rounded-full ${
                 activeIndex === index ? "w-8 bg-primary" : "w-2 bg-slate-200"
               }`}
               aria-label={`Go to slide ${index + 1}`}
             />
           ))}
         </div>
       </div>
    </section>
  );
};

export default Testimoni;
