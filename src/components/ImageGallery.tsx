import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  apartmentName: string;
}

export default function ImageGallery({ images, apartmentName }: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const largeImages = images.slice(0, 3);
  const smallImages = images.slice(3);

  return (
    <>
      <div className="space-y-6">
        {/* Large Images */}
        {largeImages.map((img, idx) => (
          <motion.img
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            src={img}
            alt={`${apartmentName} view ${idx + 1}`}
            className="w-full aspect-[4/3] object-cover rounded-sm cursor-pointer hover:opacity-95 transition-opacity"
            onClick={() => openLightbox(idx)}
          />
        ))}

        {/* Small Images Collage */}
        {smallImages.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3"
          >
            {smallImages.map((img, idx) => {
              const actualIndex = idx + 3;
              return (
                <img
                  key={actualIndex}
                  src={img}
                  alt={`${apartmentName} detail ${idx + 1}`}
                  className="w-full aspect-square object-cover rounded-sm cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openLightbox(actualIndex)}
                />
              );
            })}
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button 
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2"
              onClick={prevImage}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button 
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2"
              onClick={nextImage}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Main Image */}
            <img 
              src={images[currentIndex]} 
              alt={`${apartmentName} full view`}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest uppercase">
              {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
