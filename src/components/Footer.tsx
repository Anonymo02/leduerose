import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-[#F2EDE4] text-[#2D2D2D] px-6 md:px-12 py-8 border-t border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[10px] uppercase tracking-widest text-[#8C8578] text-center md:text-left leading-relaxed">
          {t.footerText} <br className="md:hidden" />
          <span className="hidden md:inline"> | </span>Ischia Porto 80077 (NA)
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#" className="flex items-center gap-2 text-[10px] uppercase tracking-widest hover:text-[#B59461] transition-colors font-medium text-[#5A554D]">
            <MapPin className="w-3 h-3" /> Via dello Stadio 34, Ischia Porto
          </a>
          <a href="tel:+393446734079" className="flex items-center gap-2 text-[10px] uppercase tracking-widest hover:text-[#B59461] transition-colors font-medium text-[#5A554D]">
            <Phone className="w-3 h-3" /> +39 344 673 4079
          </a>
          <a href="https://wa.me/393446734079" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] uppercase tracking-widest hover:text-[#B59461] transition-colors font-medium text-[#5A554D]">
            <MessageCircle className="w-3 h-3" /> WhatsApp
          </a>
          <a href="mailto:info@ledueroseischia.it" className="flex items-center gap-2 text-[10px] uppercase tracking-widest hover:text-[#B59461] transition-colors font-medium text-[#5A554D]">
            <Mail className="w-3 h-3" /> info@ledueroseischia.it
          </a>
        </div>
      </div>
    </footer>
  );
}
