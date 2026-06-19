import ischiaHero from './assets/images/ischia_hero_view_1781868251692.jpg';
import ischiaHeroMorning from './assets/images/morning.png';
import ischiaHeroMidday from './assets/images/day.png';
import ischiaHeroSunset from './assets/images/ischia_hero_view_1781868251692.jpg';
import ischiaHeroNight from './assets/images/night.png';
import rosaRossaHero from './assets/images/rossa11.webp';
import rosaGiallaHero from './assets/images/yellow1.webp';

import img1 from './assets/images/rossa1.webp';
import img2 from './assets/images/rossa2.webp';
import img3 from './assets/images/rossa3.webp';
import img4 from './assets/images/rossa4.webp';
import img5 from './assets/images/rossa5.webp';
import img6 from './assets/images/rossa15.webp';
import img7 from './assets/images/rossa7.webp';
import img8 from './assets/images/rossa8.webp';
import img9 from './assets/images/rossa9.webp';
import img10 from './assets/images/rossa14.webp';
import img11 from './assets/images/rossa10.webp';
import img12 from './assets/images/rossa11.webp';
import img13 from './assets/images/yellow1.webp';
import img14 from './assets/images/yellow2.webp';
import img15 from './assets/images/yellow3.webp';
import img16 from './assets/images/yellow4.webp';
import img17 from './assets/images/yellow5.webp';
import img18 from './assets/images/yellow5.webp';
import img19 from './assets/images/yellow7.webp';
import img20 from './assets/images/yellow8.webp';
import img21 from './assets/images/yellow9.webp';
import img22 from './assets/images/yellow10.webp';
import img23 from './assets/images/yellow11.webp';
import img24 from './assets/images/yellow12.webp';
import img25 from './assets/images/yellow13.webp';
import img26 from './assets/images/yellow14.webp';





export interface Apartment {
  id: string;
  name: string;
  shortDescription: {
    en: string;
    it: string;
    de: string;
  };
  fullDescription: {
    en: string;
    it: string;
    de: string;
  };
  heroImage: string;
  images: string[];
  amenities: ('seaView' | 'gardenView' | 'airConditioning' | 'freeWifi' | 'kitchen' | 'twoBathrooms' | 'doubleBed' | 'twoSingleBeds' | 'sofaBed')[];
  sleeps: number;
  priceStarting: number;
}

export const WHATSAPP_NUMBER = "+393446734079";

export const contactInfo = {
  phone: "+39 344 673 4079",
  email: "info@ledueroseischia.it",
  address: "Via dello Stadio 34, Ischia Porto 80077"
};

export const apartmentsInfo: Apartment[] = [
  {
    id: 'rosa-rossa',
    name: 'Rosa Rossa',
    shortDescription: {
      en: 'Recently renovated 80 sqm apartment with huge terraces and modern comfort, perfect for up to 6 guests.',
      it: 'Appartamento di 80 mq recentemente ristrutturato con enormi terrazze e comfort moderno, perfetto per 6 ospiti.',
      de: 'Kürzlich renovierte 80 qm große Wohnung mit riesigen Terrassen und modernem Komfort, perfekt für 6 Gäste.'
    },
    fullDescription: {
      en: 'This recently renovated 80 square meter apartment is located on the first floor. It features a spacious living area with an equipped kitchenette and access to two different terraces. The apartment includes a main bedroom with a double bed, large wardrobe, and private covered terrace access. A second bedroom offers two single beds, a work area, and an en-suite bathroom, with its own access to a relaxation terrace. Equipped with hot/cold air conditioning, double-glazed windows, and full bathroom amenities including a washing machine.',
      it: 'Questo appartamento di 80 mq recentemente ristrutturato si trova al primo piano. Dispone di un\'ampia zona giorno con angolo cottura attrezzato e accesso a due diverse terrazze. L\'appartamento comprende una camera da letto principale con letto matrimoniale, ampio armadio e accesso a una terrazza coperta privata. Una seconda camera offre due letti singoli, una zona di lavoro e un bagno interno, con accesso indipendente a una terrazza relax. Dotato di aria condizionata calda/fredda, finestre con doppi vetri e servizi igienici completi inclusa una lavatrice.',
      de: 'Diese kürzlich renovierte 80 Quadratmeter große Wohnung befindet sich im ersten Stock. Sie verfügt über einen geräumigen Wohnbereich mit ausgestatteter Küchenzeile und Zugang zu zwei verschiedenen Terrassen. Die Wohnung umfasst ein Hauptschlafzimmer mit Doppelbett, großem Kleiderschrank und Zugang zu einer privaten überdachten Terrasse. Ein zweites Schlafzimmer bietet zwei Einzelbetten, einen Arbeitsbereich und ein eigenes Badezimmer mit eigenem Zugang zu einer Entspannungsterrasse. Ausgestattet mit Warm-/Kalt-Klimaanlage, doppelt verglasten Fenstern und kompletten Badezimmerausstattungen einschließlich einer Waschmaschine.'
    },
    heroImage: rosaRossaHero,
    images: [
      rosaRossaHero,
      img1,
      img2,
      img3,
      img4,
      img11,
      img6,
      img7,
      img8,
      img9,
      img10,
      img5
    ],
    amenities: ['gardenView', 'airConditioning', 'freeWifi', 'kitchen', 'twoBathrooms', 'doubleBed', 'twoSingleBeds', 'sofaBed'],
    sleeps: 6,
    priceStarting: 150
  },
  {
    id: 'rosa-gialla',
    name: 'Rosa Gialla',
    shortDescription: {
      en: 'A bright 80sqm apartment with a panoramic terrace, two bedrooms, and modern amenities.',
      it: 'Un luminoso appartamento di 80 mq con terrazza panoramica, due camere da letto e comfort moderni.',
      de: 'Ein helles 80 m² großes Apartment mit Panoramaterrasse, zwei Schlafzimmern und modernen Annehmlichkeiten.'
    },
    fullDescription: {
      en: 'This recently renovated 80 square meter first-floor apartment features a spacious living area with an equipped kitchenette and a terrace offering panoramic views for al fresco dining. It includes a main bedroom with a double bed, and a second bedroom with two single beds and a dedicated work area, both offering access to an outdoor balcony. The apartment has a comfortably sized bathroom with a washing machine. Equipped with modern hot/cold air conditioning and double-glazed windows for excellent sound insulation.',
      it: 'Questo appartamento di 80 metri quadrati al primo piano, recentemente ristrutturato, presenta un\'ampia zona giorno con angolo cottura attrezzato e una terrazza con vista panoramica per mangiare all\'aperto. Comprende una camera da letto principale con letto matrimoniale e una seconda camera con due letti singoli e una zona lavoro; entrambe offrono accesso a un balcone esterno. L\'appartamento dispone di un comodo bagno con lavatrice. Tutte le camere sono dotate di aria condizionata caldo/freddo e finestre con doppi vetri.',
      de: 'Diese kürzlich renovierte, 80 Quadratmeter große Wohnung im ersten Stock verfügt über einen geräumigen Wohnbereich mit gut ausgestatteter Küchenzeile und eine Terrasse mit Panoramablick für Mahlzeiten im Freien. Sie bietet ein Hauptschlafzimmer mit Doppelbett und ein zweites Schlafzimmer mit zwei Einzelbetten und einem eigenen Arbeitsbereich. Beide haben Zugang zu einem Balkon. Die Wohnung hat ein komfortables Badezimmer mit Waschmaschine. Alle Zimmer sind mit einer Warm-/Kalt-Klimaanlage und doppelt verglasten Fenstern ausgestattet.'
    },
    heroImage: rosaGiallaHero,
    images: [
      rosaGiallaHero,
      img14,
      img15,
      img16,
      img18,
      img19,
      img20,
      img21,
      img22,
      img23,
      img24,
      img25,
      img26
    ],
    amenities: ['gardenView', 'airConditioning', 'freeWifi', 'kitchen', 'doubleBed', 'twoSingleBeds', 'sofaBed'],
    sleeps: 6,
    priceStarting: 120
  }
];

export const siteImages = {
  hero: ischiaHero,
  heroMorning: ischiaHeroMorning,
  heroMidday: ischiaHeroMidday,
  heroSunset: ischiaHero, // The original image is used for sunset
  heroNight: ischiaHeroNight,
};
