import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: {
      en: 'What are the check-in and check-out times?',
      it: 'Quali sono gli orari di check-in e check-out?',
      de: 'Wie sind die Check-in- und Check-out-Zeiten?'
    },
    answer: {
      en: 'Check-in is from 2:00 PM to 10:00 PM. Check-out is by 10:00 am.',
      it: 'Il check-in è dalle 14:00 alle 22:00. Il check-out è entro le 10:00.',
      de: 'Der Check-in ist von 14:00 bis 22:00 Uhr. Der Check-out muss bis 10:00 Uhr erfolgen.'
    }
  },
  {
    id: 2,
    question: {
      en: 'On what floor are the "ROSA ROSSA" and "ROSA GIALLA" apartments located?',
      it: 'A che piano si trovano gli appartamenti "ROSA ROSSA" e "ROSA GIALLA"?',
      de: 'In welcher Etage befinden sich die Wohnungen "ROSA ROSSA" und "ROSA GIALLA"?'
    },
    answer: {
      en: 'Both apartments are located on the first floor of the building.',
      it: 'Entrambi gli appartamenti si trovano al primo piano dell\'edificio.',
      de: 'Beide Wohnungen befinden sich im ersten Stock des Gebäudes.'
    }
  },
  {
    id: 3,
    question: {
      en: 'What are the dimensions of the apartments?',
      it: 'Quali sono le dimensioni degli appartamenti?',
      de: 'Wie groß sind die Wohnungen?'
    },
    answer: {
      en: 'Both apartments have a surface area of approximately 80 square meters.',
      it: 'Entrambi gli appartamenti hanno una superficie di circa 80 metri quadrati.',
      de: 'Beide Wohnungen haben eine Fläche von etwa 80 Quadratmetern.'
    }
  },
  {
    id: 4,
    question: {
      en: 'What are the main features of bedrooms?',
      it: 'Quali sono le caratteristiche principali delle camere da letto?',
      de: 'Was sind die Hauptmerkmale der Schlafzimmer?'
    },
    answer: {
      en: 'The rooms feature spacious wardrobes with hangers, an iron, ironing board, a safe, and additional pillows. They also feature state-of-the-art air conditioning and heating.',
      it: 'Le camere sono dotate di ampi armadi con grucce, ferro da stiro, asse da stiro, cassaforte e cuscini aggiuntivi. Dispongono inoltre di aria condizionata e riscaldamento all\'avanguardia.',
      de: 'Die Zimmer verfügen über geräumige Schränke mit Kleiderbügeln, ein Bügeleisen, ein Bügelbrett, einen Safe und zusätzliche Kissen. Sie verfügen auch über hochmoderne Klimaanlage und Heizung.'
    }
  },
  {
    id: 5,
    question: {
      en: 'What amenities are there in the apartment bathrooms?',
      it: 'Quali servizi ci sono nei bagni degli appartamenti?',
      de: 'Welche Annehmlichkeiten gibt es in den Badezimmern der Wohnungen?'
    },
    answer: {
      en: 'The bathrooms are spacious and include a washing machine, shower, toilet, bidet, hairdryer, emergency kit, and a basket for storing used towels. Towels are changed every four days.',
      it: 'I bagni sono spaziosi e includono lavatrice, doccia, WC, bidet, asciugacapelli, kit di emergenza e un cesto per gli asciugamani usati. Gli asciugamani vengono cambiati ogni quattro giorni.',
      de: 'Die Badezimmer sind geräumig und umfassen eine Waschmaschine, Dusche, WC, Bidet, Haartrockner, Notfallset und einen Korb für gebrauchte Handtücher. Die Handtücher werden alle vier Tage gewechselt.'
    }
  },
  {
    id: 6,
    question: {
      en: 'What is included in the bathroom kit offered to guests?',
      it: 'Cosa è incluso nel kit da bagno offerto agli ospiti?',
      de: 'Was beinhaltet das den Gästen angebotene Badezimmerset?'
    },
    answer: {
      en: 'For each guest, a bathroom kit is offered which includes a set of three towels, soap, shower gel and shampoo.',
      it: 'Per ogni ospite viene offerto un kit da bagno che comprende un set di tre asciugamani, sapone, bagnoschiuma e shampoo.',
      de: 'Für jeden Gast wird ein Badezimmerset angeboten, das ein Set aus drei Handtüchern, Seife, Duschgel und Shampoo enthält.'
    }
  },
  {
    id: 7,
    question: {
      en: 'How is guest comfort ensured in terms of soundproofing and air conditioning?',
      it: 'Come viene garantito il comfort degli ospiti in termini di isolamento acustico e aria condizionata?',
      de: 'Wie wird der Komfort der Gäste in Bezug auf Schallisolierung und Klimaanlage gewährleistet?'
    },
    answer: {
      en: 'The rooms feature modern double-glazed windows and external shutters for excellent soundproofing. They also have state-of-the-art air conditioning and heating systems.',
      it: 'Le camere presentano finestre moderne con doppi vetri e persiane esterne per un eccellente isolamento acustico. Dispongono inoltre di impianti di aria condizionata e riscaldamento all\'avanguardia.',
      de: 'Die Zimmer verfügen über moderne doppelt verglaste Fenster und Außenfensterläden für eine hervorragende Schallisolierung. Sie verfügen auch über hochmoderne Klimaanlagen und Heizsysteme.'
    }
  },
  {
    id: 8,
    question: {
      en: 'Can I enjoy outdoor dining in the apartments?',
      it: 'Posso mangiare all\'aperto negli appartamenti?',
      de: 'Kann ich im Freien in den Wohnungen speisen?'
    },
    answer: {
      en: 'Yes, the apartments offer the opportunity to enjoy breakfast, lunch, or dinner outdoors on the terraces or balconies equipped with large tables.',
      it: 'Sì, gli appartamenti offrono l\'opportunità di gustare la colazione, il pranzo o la cena all\'aperto sulle terrazze o sui balconi dotati di grandi tavoli.',
      de: 'Ja, die Wohnungen bieten die Möglichkeit, Frühstück, Mittag- oder Abendessen im Freien auf den Terrassen oder Balkonen zu genießen, die mit großen Tischen ausgestattet sind.'
    }
  },
  {
    id: 9,
    question: {
      en: 'Is smoking allowed inside the apartments?',
      it: 'È permesso fumare all\'interno degli appartamenti?',
      de: 'Ist Rauchen in den Wohnungen erlaubt?'
    },
    answer: {
      en: 'No, smoking is only permitted outside the apartments.',
      it: 'No, è permesso fumare solo all\'esterno degli appartamenti.',
      de: 'Nein, das Rauchen ist nur außerhalb der Wohnungen gestattet.'
    }
  },
  {
    id: 10,
    question: {
      en: 'How far is it from the port of Ischia?',
      it: 'Quanto dista dal porto di Ischia?',
      de: 'Wie weit ist es vom Hafen von Ischia entfernt?'
    },
    answer: {
      en: 'The apartments are 700 meters from the Port of Ischia.',
      it: 'Gli appartamenti distano 700 metri dal Porto di Ischia.',
      de: 'Die Wohnungen sind 700 Meter vom Hafen von Ischia entfernt.'
    }
  }
];

export default function FAQ() {
  const { t, lang } = useLanguage();
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-[#2D2D2D] mb-4">{t.faqTitle}</h1>
          <div className="w-16 h-[1px] bg-[#B59461] mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className="border border-[#E5E1D8] bg-white rounded-sm overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left hover:bg-[#F9F7F2] transition-colors focus:outline-none"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                <span className="font-serif text-lg text-[#2D2D2D]">{faq.question[lang]}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#B59461] transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`}
                />
              </button>
              
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="p-6 pt-0 text-[#5A554D] font-light leading-relaxed border-t border-[#E5E1D8] mt-2 bg-white">
                      {faq.answer[lang]}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
