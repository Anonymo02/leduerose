import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { DayPicker, DateRange } from 'react-day-picker';
import { format } from 'date-fns';
import { ArrowLeft, Check, Calendar as CalendarIcon, MessageCircle, Trees, Waves, Wind, Wifi, Utensils, Bath, Bed, BedDouble, Sofa } from 'lucide-react';
import 'react-day-picker/dist/style.css'; // Standard react-day-picker styles
import { useLanguage } from './LanguageContext';
import { apartmentsInfo, WHATSAPP_NUMBER } from './data';
import ImageGallery from './components/ImageGallery';

const getAmenityIcon = (key: string) => {
  switch (key) {
    case 'seaView': return <Waves className="w-4 h-4 text-[#B59461]" />;
    case 'gardenView': return <Trees className="w-4 h-4 text-[#B59461]" />;
    case 'airConditioning': return <Wind className="w-4 h-4 text-[#B59461]" />;
    case 'freeWifi': return <Wifi className="w-4 h-4 text-[#B59461]" />;
    case 'kitchen': return <Utensils className="w-4 h-4 text-[#B59461]" />;
    case 'twoBathrooms': return <Bath className="w-4 h-4 text-[#B59461]" />;
    case 'doubleBed': return <BedDouble className="w-4 h-4 text-[#B59461]" />;
    case 'twoSingleBeds': return <Bed className="w-4 h-4 text-[#B59461]" />;
    case 'sofaBed': return <Sofa className="w-4 h-4 text-[#B59461]" />;
    default: return <Check className="w-4 h-4 text-[#B59461]" />;
  }
};

export default function ApartmentDetails() {
  const { id } = useParams<{ id: string }>();
  const { t, lang } = useLanguage();
  const apartment = apartmentsInfo.find((a) => a.id === id);
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  if (!apartment) {
    return <Navigate to="/" replace />;
  }

  const handleWhatsAppBooking = () => {
    let text = `Hello, I would like to request information for the apartment "${apartment.name}".`;
    if (dateRange?.from && dateRange?.to) {
      text += ` I am interested in dates from ${format(dateRange.from, 'dd/MM/yyyy')} to ${format(dateRange.to, 'dd/MM/yyyy')}.`;
    }
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-28">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-[#8C8578] hover:text-[#B59461] transition-colors mb-12 text-[10px] uppercase tracking-[0.2em] font-medium">
          <ArrowLeft className="w-3 h-3" />
          {t.home}
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Photos side */}
          <div className="space-y-6">
            <ImageGallery images={apartment.images} apartmentName={apartment.name} />
          </div>

          {/* Details side (Sticky) */}
          <div>
            <div className="sticky top-40">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h1 className="text-5xl md:text-6xl font-serif text-[#2D2D2D] mb-6 font-light leading-tight">{apartment.name}</h1>
                <p className="text-[#5A554D] font-light text-base leading-relaxed mb-12">
                  {apartment.fullDescription[lang]}
                </p>

                <div className="mb-12">
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C8578] mb-4 border-b border-[#E5E1D8] pb-3">{t.amenities}</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {apartment.amenities.map(key => (
                      <li key={key} className="flex items-center gap-3 text-[#5A554D] text-sm">
                        {getAmenityIcon(key)}
                        {t[key as keyof typeof t]}
                      </li>
                    ))}
                    <li className="flex items-center gap-3 text-[#5A554D] text-sm">
                        <Check className="w-4 h-4 text-[#B59461]" />
                        {t.sleeps}: {apartment.sleeps}
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 md:p-10 rounded-sm mb-8 border border-[#E5E1D8]">
                  <div className="flex items-center gap-3 mb-8">
                    <CalendarIcon className="w-4 h-4 text-[#B59461]" />
                    <h3 className="text-sm uppercase tracking-widest font-semibold text-[#2D2D2D]">{t.selectDates}</h3>
                  </div>
                  
                  <div className="flex justify-center bg-[#F9F7F2] p-6 rounded-sm mb-8 border border-[#E5E1D8]">
                    <DayPicker
                      mode="range"
                      selected={dateRange}
                      onSelect={setDateRange}
                      numberOfMonths={1}
                      disabled={[{ before: new Date() }]}
                      className="font-sans"
                    />
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-4 border-t border-[#E5E1D8]">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-[#8C8578] mb-1">{t.priceStarting}</p>
                      <p className="text-2xl font-serif italic text-[#2D2D2D]">€{apartment.priceStarting}<span className="text-xs font-sans not-italic text-[#8C8578] ml-1"> / night</span></p>
                    </div>
                    <button 
                      onClick={handleWhatsAppBooking}
                      className="w-full md:w-auto bg-[#25D366] text-white px-8 py-4 rounded-md uppercase tracking-[0.1em] text-[10px] font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-opacity"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {t.bookWhatsApp}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
