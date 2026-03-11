import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MapPin, Navigation, User, Ambulance, MessageSquareShare } from "lucide-react";
import { motion } from "framer-motion";

const FormBooking = () => {
  const [formData, setFormData] = useState({
    nama: "",
    telepon: "",
    lokasi: "",
    tujuan: "",
    layanan: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, layanan: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const WHATSAPP_NUMBER = "6282261108591"; // Nomor WhatsApp Zahi'ah Ambulance
    const message = `Halo Zahi'ah Ambulance, saya ingin memesan ambulance.

Nama: ${formData.nama}
Telepon: ${formData.telepon}
Lokasi Penjemputan: ${formData.lokasi}
Tujuan: ${formData.tujuan}
Jenis Layanan: ${formData.layanan}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="kontak" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50 rounded-full -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
                Butuh Ambulance <span className="text-primary">Segera</span>?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Isi formulir di samping atau langsung hubungi tim kami untuk mendapatkan layanan transportasi medis terbaik. Tim Zahi'ah Ambulance siap membantu Anda 24 jam nonstop.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 group hover:border-primary/20 transition-all">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Telepon & WhatsApp</h4>
                  <p className="text-slate-600">+62 822-6110-8591</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 group hover:border-primary/20 transition-all">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Lokasi Kami</h4>
                  <a href="https://maps.app.goo.gl/wZbo75XjM5gCFxWm6?g_st=ic" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary transition-colors block mt-1">
                    Lihat di Google Maps
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-2xl shadow-primary/10 rounded-[2.5rem] overflow-hidden">
              <CardHeader className="bg-primary text-white p-10">
                <CardTitle className="text-3xl font-bold flex items-center gap-3">
                  <Ambulance className="h-8 w-8" />
                  Form Pemesanan
                </CardTitle>
                <CardDescription className="text-white/80 text-lg">
                  Lengkapi data di bawah untuk respon lebih cepat
                </CardDescription>
              </CardHeader>
              <CardContent className="p-10 bg-white">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="nama" className="text-slate-700 font-bold flex items-center gap-2">
                        <User className="h-4 w-4" /> Nama Lengkap
                      </Label>
                      <Input
                        id="nama"
                        name="nama"
                        placeholder="Masukkan nama Anda"
                        value={formData.nama}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-slate-200 focus:ring-primary focus:border-primary py-6"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="telepon" className="text-slate-700 font-bold flex items-center gap-2">
                        <Phone className="h-4 w-4" /> Nomor Telepon
                      </Label>
                      <Input
                        id="telepon"
                        name="telepon"
                        type="tel"
                        placeholder="08xxxxxxxxxx"
                        value={formData.telepon}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-slate-200 focus:ring-primary focus:border-primary py-6"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="lokasi" className="text-slate-700 font-bold flex items-center gap-2">
                      <MapPin className="h-4 w-4" /> Lokasi Penjemputan
                    </Label>
                    <Input
                      id="lokasi"
                      name="lokasi"
                      placeholder="Contoh: Jl. Sudirman No. 10 atau Nama Gedung"
                      value={formData.lokasi}
                      onChange={handleChange}
                      required
                      className="rounded-xl border-slate-200 focus:ring-primary focus:border-primary py-6"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="tujuan" className="text-slate-700 font-bold flex items-center gap-2">
                      <Navigation className="h-4 w-4" /> Lokasi Tujuan
                    </Label>
                    <Input
                      id="tujuan"
                      name="tujuan"
                      placeholder="Masukkan nama rumah sakit atau lokasi tujuan"
                      value={formData.tujuan}
                      onChange={handleChange}
                      required
                      className="rounded-xl border-slate-200 focus:ring-primary focus:border-primary py-6"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="layanan" className="text-slate-700 font-bold flex items-center gap-2">
                      <Ambulance className="h-4 w-4" /> Jenis Layanan
                    </Label>
                    <Select onValueChange={handleSelectChange} required>
                      <SelectTrigger className="rounded-xl border-slate-200 focus:ring-primary focus:border-primary py-6">
                        <SelectValue placeholder="Pilih jenis layanan ambulance" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-slate-200">
                        <SelectItem value="Ambulance Darurat">Ambulance Darurat</SelectItem>
                        <SelectItem value="Antar Jemput Pasien">Antar Jemput Pasien</SelectItem>
                        <SelectItem value="Transportasi Antar Rumah Sakit">Transportasi Antar Rumah Sakit</SelectItem>
                        <SelectItem value="Ambulance Jenazah">Ambulance Jenazah</SelectItem>
                        <SelectItem value="Ambulance Standby Event">Ambulance Standby Event</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl py-6 text-base group shadow-xl shadow-primary/20 "
                  >
                    <MessageSquareShare className="mr-2 h-5 w-5" />
                    Pesan Ambulance
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FormBooking;
