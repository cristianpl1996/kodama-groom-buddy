import { motion } from "framer-motion";
import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Array de URLs de videos - Puedes agregar tus URLs aquí
// Soporta YouTube, Vimeo y otros servicios de video embebidos
const videos = [
  "https://api.foneia.com/media/resources/images/kodama/video1.mp4",
  "https://api.foneia.com/media/resources/images/kodama/video2.mp4",
  "https://api.foneia.com/media/resources/images/kodama/video3.mp4",
  "https://api.foneia.com/media/resources/images/kodama/video4.mp4",
  "https://api.foneia.com/media/resources/images/kodama/video5.mp4",
  "https://api.foneia.com/media/resources/images/kodama/video6.mp4"
];

// Función para convertir URLs de YouTube a formato embed
const getEmbedUrl = (url: string): string => {
  // Si ya es una URL de embed, la retorna tal cual
  if (url.includes("/embed/")) {
    return url;
  }

  // YouTube: convierte diferentes formatos a embed
  if (url.includes("youtube.com/watch?v=")) {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  // Vimeo: convierte a formato embed
  if (url.includes("vimeo.com/")) {
    const videoId = url.split("vimeo.com/")[1]?.split("?")[0];
    return `https://player.vimeo.com/video/${videoId}`;
  }

  // Si no coincide con ningún formato conocido, retorna la URL original
  return url;
};

const VideosSection = () => {
  return (
    <section id="videos" className="py-20 bg-card relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/20 text-foreground px-4 py-2 rounded-full font-body font-bold mb-4">
            Contenido multimedia
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Nuestros videos
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo cuidamos a los peludos y disfruta de nuestros servicios.
          </p>
        </motion.div>

        {/* Videos Carousel */}
        {videos.length > 0 ? (
          <div className="relative max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {videos.map((videoUrl, index) => {
                  // Detectar si es un video MP4 o una URL de YouTube/Vimeo
                  const isVideoFile = videoUrl.endsWith('.mp4') || videoUrl.endsWith('.webm') || videoUrl.endsWith('.mov');
                  
                  return (
                    <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative aspect-video bg-muted rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                      >
                        {isVideoFile ? (
                          <video
                            src={videoUrl}
                            controls
                            className="w-full h-full object-contain"
                            preload="metadata"
                          >
                            Tu navegador no soporta la reproducción de videos.
                          </video>
                        ) : (
                          <iframe
                            src={getEmbedUrl(videoUrl)}
                            title={`Video ${index + 1}`}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        )}
                      </motion.div>
                    </CarouselItem>
                  );
                })}
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
              <Play className="text-primary" size={40} />
            </div>
            <p className="font-body text-lg text-muted-foreground">
              Próximamente agregaremos videos de nuestros servicios
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default VideosSection;
