import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Clock } from "lucide-react";

const locations = [
  {
    name: "Sede Normandía",
    address: "Cra 71 #53-84, Edificio Kashi, Local 102",
    reference: "A dos cuadras de la Universidad Libre, cerca de la AV Boyacá",
    mapUrl: "https://maps.app.goo.gl/SpdQJR8Q8u7SEPWx7",
    transport: "Busca 'Edificio Kashi' en Google Maps o Waze",
    emoji: "🏢",
  },
  {
    name: "Sede Teusaquillo",
    address: "Cra 58 #45-28, La Esmeralda",
    reference: "Estación CAN de Transmilenio",
    mapUrl: "https://maps.app.goo.gl/SpdQJR8Q8u7SEPWx7",
    transport: "Busca 'Kodama Pet Care' en Google Maps o Waze",
    parking: "No parquear sobre el andén, solo frente a la entrada del local",
    emoji: "🌳",
  },
  {
    name: "Sede Soacha",
    address: "Centro Comercial Mi Plaza Soacha, Local 78",
    reference: "Frente a la entrada vehicular del CC",
    mapUrl: "https://maps.app.goo.gl/6unu3KcwageGrz9R6",
    transport: "Busca 'Centro Comercial Mi Plaza Soacha' en Maps",
    parking: "Zona de parqueo disponible en el CC",
    emoji: "🛒",
  },
];

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
            Nuestras Sedes
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Tenemos 3 ubicaciones en Bogotá y Soacha para tu comodidad. 
            ¡Elige la más cercana a ti!
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-kodama-cream rounded-3xl overflow-hidden hover:shadow-xl transition-shadow group"
            >
              {/* Header */}
              <div className="bg-primary p-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{location.emoji}</span>
                  <h3 className="font-display font-bold text-xl text-foreground">
                    {location.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-body font-semibold text-foreground">{location.address}</p>
                    <p className="font-body text-sm text-muted-foreground">{location.reference}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Navigation className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <p className="font-body text-sm text-muted-foreground">{location.transport}</p>
                </div>

                {location.parking && (
                  <div className="flex items-start gap-3">
                    <Car className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <p className="font-body text-sm text-muted-foreground">{location.parking}</p>
                  </div>
                )}

                <motion.a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full bg-secondary text-secondary-foreground py-3 rounded-xl font-body font-semibold mt-4 group-hover:shadow-md transition-shadow"
                >
                  <MapPin size={18} />
                  Ver en Mapa
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hours Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-primary/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left"
        >
          <Clock className="text-secondary" size={32} />
          <p className="font-body text-foreground">
            <span className="font-bold">Recuerda:</span> Solo atendemos con citas previamente confirmadas 
            para mantener un servicio personalizado 🐕📝
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsSection;
