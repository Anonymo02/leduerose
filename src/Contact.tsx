import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-light leading-tight text-[#2D2D2D] mb-4"
          >
            {t.contact}
          </motion.h1>
          <div className="w-16 h-[1px] bg-[#B59461] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-2xl font-serif font-light text-[#2D2D2D] mb-6">{t.getInTouch}</h2>
              <p className="text-[#5A554D] font-light leading-relaxed mb-8">
                {t.contactDesc}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F2EDE4] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#B59461]" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold text-[#2D2D2D] mb-1">{t.address}</h3>
                  <a href="https://maps.google.com/?q=Via+dello+Stadio+34,+Ischia+Porto+80077" target="_blank" rel="noopener noreferrer" className="text-[#5A554D] font-light hover:text-[#B59461] transition-colors leading-relaxed block">
                    Via dello Stadio 34<br />
                    Ischia Porto 80077 (NA)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F2EDE4] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#B59461]" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold text-[#2D2D2D] mb-1">{t.telephone}</h3>
                  <a href="tel:+393446734079" className="text-[#5A554D] font-light hover:text-[#B59461] transition-colors block">
                    +39 344 673 4079
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F2EDE4] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#B59461]" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold text-[#2D2D2D] mb-1">{t.whatsapp}</h3>
                  <a href="https://wa.me/393446734079" target="_blank" rel="noopener noreferrer" className="text-[#5A554D] font-light hover:text-[#B59461] transition-colors block">
                    +39 344 673 4079
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F2EDE4] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#B59461]" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold text-[#2D2D2D] mb-1">{t.email}</h3>
                  <a href="mailto:info@ledueroseischia.it" className="text-[#5A554D] font-light hover:text-[#B59461] transition-colors block">
                    info@ledueroseischia.it
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-[#E5E1D8]">
                <h3 className="text-sm uppercase tracking-widest font-bold text-[#2D2D2D] mb-4">{t.apartmentsLocation}</h3>
                <p className="text-[#5A554D] font-light mb-2">
                    <span className="font-medium text-[#2D2D2D]">Rosa Rossa & Rosa Gialla</span>
                </p>
                <p className="text-[#5A554D] font-light">
                    {t.locationDesc}
                </p>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="h-full min-h-[400px] lg:min-h-[600px] w-full rounded-2xl overflow-hidden shadow-lg border border-[#E5E1D8]"
          >
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1158.490538947656!2d13.942732993856143!3d40.7323870636222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b09228fb4d1dd%3A0xe6bf44b7f739fcce!2sVia%20dello%20Stadio%2C%2034%2C%2080077%20Ischia%20NA%2C%20Italy!5e0!3m2!1sen!2spt!4v1709848123456!5m2!1sen!2spt"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[20%] contrast-125"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
