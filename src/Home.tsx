import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { siteImages, apartmentsInfo } from './data';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t, lang } = useLanguage();
  const getInitialHeroImage = () => {
    const euTimeString = new Date().toLocaleString("en-US", { timeZone: "Europe/Rome" });
    const hour = new Date(euTimeString).getHours();
    if (hour >= 5 && hour < 10) return siteImages.heroMorning;
    if (hour >= 10 && hour < 18) return siteImages.heroMidday;
    if (hour >= 18 && hour < 21) return siteImages.heroSunset;
    return siteImages.heroNight;
  };

  const [currentHeroImage, setCurrentHeroImage] = useState(getInitialHeroImage);

  useEffect(() => {
    const updateHeroImage = () => {
      setCurrentHeroImage(getInitialHeroImage());
    };

    const interval = setInterval(updateHeroImage, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#2D2D2D]">
          <img 
            key={currentHeroImage}
            src={currentHeroImage} 
            alt="Ischia View" 
            className="w-full h-full object-cover animate-in fade-in duration-1000" 
          />
          <div className="absolute inset-0 bg-stone-900/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-light text-white mb-6 drop-shadow-md leading-tight"
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-light text-stone-100 mb-10 max-w-2xl mx-auto drop-shadow"
          >
            {t.heroSubtitle}
          </motion.p>
          <motion.a 
            href="#apartments"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block bg-[#FAF9F6] text-[#2D2D2D] px-8 py-4 uppercase tracking-[0.2em] font-medium text-xs hover:text-[#B59461] transition-colors cursor-pointer"
          >
            {t.exploreBtn}
          </motion.a>
        </div>
      </section>

      {/* Apartments List */}
      <section id="apartments" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight text-[#2D2D2D] mb-4">{t.apartmentsTitle}</h2>
          <div className="w-16 h-[1px] bg-[#B59461] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {apartmentsInfo.map((apt, idx) => (
            <motion.div 
              key={apt.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col group cursor-pointer"
            >
              <Link to={`/apartment/${apt.id}`} className="overflow-hidden mb-6 block relative aspect-[4/3] rounded-sm">
                <img 
                  src={apt.heroImage} 
                  alt={apt.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </Link>
              <div className="flex-1 flex flex-col justify-between px-2">
                <div>
                  <div className="flex justify-between items-end mb-4 block">
                    <h3 className="text-3xl font-serif font-light text-[#2D2D2D]"><Link to={`/apartment/${apt.id}`}>{apt.name}</Link></h3>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-[#8C8578] block mb-1">{t.priceStarting}</span>
                      <span className="text-lg font-serif italic text-[#2D2D2D]">€{apt.priceStarting}</span>
                    </div>
                  </div>
                  <p className="text-[#5A554D] font-light leading-relaxed mb-8">
                    {apt.shortDescription[lang]}
                  </p>
                </div>
                <Link 
                  to={`/apartment/${apt.id}`}
                  className="inline-block border-b border-[#E5E1D8] pb-1 text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C8578] self-start hover:text-[#B59461] hover:border-[#B59461] transition-colors"
                >
                  {t.exploreBtn}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
