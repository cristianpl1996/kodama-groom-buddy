import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Clock, MessageCircle, Sparkles } from "lucide-react";
import { sedes } from "@/data/sedes";

const LocationsSection = () => {
  return (
    <section id="ubicaciones" className="py-20 bg-card relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full font-body font-semibold mb-4">
            📍 Encuéntranos
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Nuestras sedes
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Tenemos 3 ubicaciones en Bogotá para tu comodidad.
            ¡Elige la más cercana a ti y agenda directamente con esa sede!
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sedes.map((sede, index) => (
            <motion.div
              key={sede.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-kodama-cream rounded-3xl overflow-hidden hover:shadow-xl transition-shadow group flex flex-col"
            >
              {/* Header */}
              <div
                className={`p-6 ${
                  sede.serviceType === "peluqueria" ? "bg-secondary" : "bg-primary"
                }`}
              >
                <h3
                  className={`font-display font-bold text-xl text-center ${
                    sede.serviceType === "peluqueria"
                      ? "text-secondary-foreground"
                      : "text-foreground"
                  }`}
                >
                  {sede.name}
                </h3>
                <p
                  className={`font-body text-sm text-center mt-1 ${
                    sede.serviceType === "peluqueria"
                      ? "text-secondary-foreground/80"
                      : "text-foreground/70"
                  }`}
                >
                  {sede.service}
                </p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex flex-col flex-1">
                <div className="flex items-start gap-3">
                  <MapPin className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-body font-semibold text-foreground">{sede.address}</p>
                    <p className="font-body text-sm text-muted-foreground">{sede.reference}</p>
                  </div>
                </div>

                {sede.hours && (
                  <div className="flex items-start gap-3">
                    <Clock className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <p className="font-body text-sm text-muted-foreground">{sede.hours}</p>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <Navigation className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <p className="font-body text-sm text-muted-foreground">{sede.transport}</p>
                </div>

                {sede.parking && (
                  <div className="flex items-start gap-3">
                    <Car className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <p className="font-body text-sm text-muted-foreground">{sede.parking}</p>
                  </div>
                )}

                {sede.highlights && (
                  <div className="flex flex-wrap gap-2">
                    {sede.highlights.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1 bg-primary/25 text-foreground px-3 py-1 rounded-full font-body text-xs font-semibold"
                      >
                        <Sparkles size={12} />
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="space-y-2 mt-auto pt-4">
                  <motion.a
                    href={sede.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded-xl font-body font-semibold group-hover:shadow-md transition-shadow"
                  >
                    <MessageCircle size={18} />
                    Agendar: {sede.phoneDisplay}
                  </motion.a>

                  <motion.a
                    href={sede.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full bg-secondary text-secondary-foreground py-3 rounded-xl font-body font-semibold group-hover:shadow-md transition-shadow"
                  >
                    <MapPin size={18} />
                    Ver en Mapa
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hours Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-primary/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-center sm:text-left"
        >
          <Clock className="text-secondary" size={24} />
          <p className="font-body text-foreground">
            <span className="font-bold">Recuerda:</span> Solo atendemos con citas previamente confirmadas
            para mantener un servicio personalizado
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsSection;
