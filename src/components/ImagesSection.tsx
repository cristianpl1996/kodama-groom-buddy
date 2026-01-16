import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn, Image as ImageIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Array de URLs de imágenes - Agrega las URLs de tus imágenes aquí
const images = [
  "https://api.foneia.com/media/resources/images/kodama/image1.jpeg",
  "https://api.foneia.com/media/resources/images/kodama/image2.jpeg",
  "https://api.foneia.com/media/resources/images/kodama/image3.jpeg",
  "https://api.foneia.com/media/resources/images/kodama/image4.jpeg",
  "https://api.foneia.com/media/resources/images/kodama/image5.jpeg",
  "https://api.foneia.com/media/resources/images/kodama/image6.jpeg"
];

const ImagesSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section id="galeria" className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-primary/20 text-foreground px-4 py-2 rounded-full font-body font-bold mb-4">
              Galería visual
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Nuestras imágenes
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Conoce algunos de nuestros mensajes para cuidar a tu peludo.
            </p>
          </motion.div>

          {/* Images Carousel */}
          {images.length > 0 ? (
            <div className="relative max-w-5xl mx-auto">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {images.map((imageUrl, index) => (
                    <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative group cursor-pointer overflow-hidden"
                        onClick={() => openModal(imageUrl)}
                      >
                        <div className="relative overflow-hidden h-[400px] md:h-[450px] flex items-center justify-center">
                          <img
                            src={imageUrl}
                            alt={`Imagen ${index + 1} de Ködama Pet Care`}
                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                          {/* Overlay con efecto hover */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center rounded-2xl">
                            <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={40} />
                          </div>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 md:-left-12" />
                <CarouselNext className="right-0 md:-right-12" />
              </Carousel>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center py-12"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-6">
                <ImageIcon className="text-primary" size={40} />
              </div>
              <p className="font-body text-lg text-muted-foreground">
                Próximamente agregaremos imágenes de nuestro espacio y servicios
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal para imagen ampliada */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
              aria-label="Cerrar"
            >
              <X size={24} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Imagen ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImagesSection;
