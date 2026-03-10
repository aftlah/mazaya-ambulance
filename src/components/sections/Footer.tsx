import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Ambulance } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-white to-primary opacity-50" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-primary p-2 rounded-xl">
                <Ambulance className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Zahi'ah <span className="text-primary">Ambulance</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-lg">
              Penyedia layanan ambulance profesional dengan standar medis tinggi. Kami siap melayani Anda 24/7 dengan respon cepat dan armada modern.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold border-b border-slate-800 pb-4 inline-block pr-8">Layanan Utama</h4>
            <ul className="space-y-4">
              {["Ambulance Darurat", "Antar Jemput Pasien", "Transportasi Antar RS", "Ambulance Jenazah", "Standby Event"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold border-b border-slate-800 pb-4 inline-block pr-8">Tautan Cepat</h4>
            <ul className="space-y-4">
              {["Beranda", "Keunggulan", "Armada", "Tentang Kami", "Kontak Kami"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold border-b border-slate-800 pb-4 inline-block pr-8">Kontak & Lokasi</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-slate-800 p-2 rounded-lg text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase">Telepon 24 Jam</p>
                  <p className="text-slate-300">+62 812-3456-7890</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-slate-800 p-2 rounded-lg text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase">Email</p>
                  <p className="text-slate-300">info@mazaya-ambulance.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-slate-800 p-2 rounded-lg text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase">Alamat Kantor</p>
                  <p className="text-slate-300">Jl. Kesehatan No. 123, Jakarta Selatan, Indonesia</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} <span className="text-slate-300 font-bold">Mazaya Ambulance</span>. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
