import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Language } from '../i18n';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgClass = scrolled || !isHome ? 'bg-[#FAF9F6] shadow-sm text-[#2D2D2D] border-b border-[#E5E1D8]' : 'bg-transparent text-white';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 h-auto flex items-center justify-between">
        <div className="flex flex-col">
          <Link to="/" className="text-2xl font-light tracking-[0.2em] uppercase font-serif leading-none">Le Due Rose</Link>
          <span className={`text-[10px] uppercase tracking-[0.3em] ml-0.5 mt-1 ${scrolled || !isHome ? 'text-[#8C8578]' : 'text-white/70'}`}>Ischia • Italy</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/" className="text-xs uppercase tracking-widest font-medium hover:text-[#B59461] transition-colors">{t.home}</Link>
          <a href="/#apartments" className="text-xs uppercase tracking-widest font-medium hover:text-[#B59461] transition-colors">{t.apartments}</a>
          <Link to="/faq" className="text-xs uppercase tracking-widest font-medium hover:text-[#B59461] transition-colors">{t.faq}</Link>
          <Link to="/contact" className="text-xs uppercase tracking-widest font-medium hover:text-[#B59461] transition-colors">{t.contact}</Link>
          
          {/* Language selector */}
          <div className="relative">
            <button 
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className={`flex items-center gap-2 hover:text-[#B59461] transition-colors text-[10px] uppercase font-bold px-3 py-1.5 rounded-full border ${scrolled || !isHome ? 'border-[#E5E1D8] bg-white shadow-sm text-[#B59461]' : 'border-white/30 bg-white/10 text-white'}`}
            >
              <Globe className="w-3 h-3" />
              {lang}
            </button>
            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-24 bg-white shadow-xl border border-[#E5E1D8] py-2 z-50 rounded-sm"
                >
                  <button onClick={() => { setLang('en'); setLangDropdownOpen(false); }} className="block w-full px-4 py-2 text-[11px] uppercase tracking-wider hover:bg-[#F9F7F2] text-left text-[#2D2D2D]">EN</button>
                  <button onClick={() => { setLang('it'); setLangDropdownOpen(false); }} className="block w-full px-4 py-2 text-[11px] uppercase tracking-wider hover:bg-[#F9F7F2] text-left text-[#2D2D2D]">IT</button>
                  <button onClick={() => { setLang('de'); setLangDropdownOpen(false); }} className="block w-full px-4 py-2 text-[11px] uppercase tracking-wider hover:bg-[#F9F7F2] text-left text-[#2D2D2D]">DE</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FAF9F6] text-[#2D2D2D] overflow-hidden border-b border-[#E5E1D8]"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-xs uppercase tracking-widest font-medium">{t.home}</Link>
              <a href="/#apartments" onClick={() => setMobileMenuOpen(false)} className="text-xs uppercase tracking-widest font-medium">{t.apartments}</a>
              <Link to="/faq" onClick={() => setMobileMenuOpen(false)} className="text-xs uppercase tracking-widest font-medium">{t.faq}</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-xs uppercase tracking-widest font-medium">{t.contact}</Link>
              <div className="flex gap-4 pt-4 border-t border-[#E5E1D8]">
                <button onClick={() => { setLang('en'); setMobileMenuOpen(false); }} className={`text-[10px] uppercase tracking-wider ${lang === 'en' ? 'font-bold text-[#B59461]' : 'opacity-50'}`}>EN</button>
                <div className="w-[1px] h-3 bg-[#E5E1D8] my-auto"></div>
                <button onClick={() => { setLang('it'); setMobileMenuOpen(false); }} className={`text-[10px] uppercase tracking-wider ${lang === 'it' ? 'font-bold text-[#B59461]' : 'opacity-50'}`}>IT</button>
                <div className="w-[1px] h-3 bg-[#E5E1D8] my-auto"></div>
                <button onClick={() => { setLang('de'); setMobileMenuOpen(false); }} className={`text-[10px] uppercase tracking-wider ${lang === 'de' ? 'font-bold text-[#B59461]' : 'opacity-50'}`}>DE</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
