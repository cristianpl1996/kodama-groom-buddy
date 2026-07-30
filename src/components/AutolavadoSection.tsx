import { motion } from "framer-motion";
import {
  Clock,
  Users,
  Sparkles,
  Scissors,
  Heart,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { sedes } from "@/data/sedes";

const cedritos = sedes.find((sede) => sede.name === "Sede Cedritos")!;

const features = [
  {
    icon: Clock,
    title: "Por Hora",
    description:
      "Alquila nuestras instalaciones por hora, según peso y tamaño de tu mascota",
  },
  {
    icon: Users,
    title: "2 Acompañantes",
    description: "Cada peludo puede tener hasta dos personas acompañándolo",
  },
  {
    icon: Sparkles,
    title: "Todo Incluido",
    description:
      "Shampoos, herramientas, agua caliente y todo lo que necesitas",
  },
  {
    icon: Scissors,
    title: "Corte de Uñas",
    description: "Nuestro anfitrión te ayuda con lo que te dé miedito hacer",
  },
];

const includes = [
  "Shampoos y productos de calidad",
  "Herramientas profesionales",
  "Acompañamiento y asesoría",
  "Agua calientita",
  "Delantal y tapabocas",
  "Crema dental y enjuague bucal",
  "Secado y cepillado",
  "Espacio solo para ti",
];

const AutolavadoSection = () => {
  return (
    <section id="autolavado" className="py-20 bg-card relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/20 text-foreground px-4 py-2 rounded-full font-body font-bold mb-4">
            Nuestro servicio premium
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Autolavado de mascotas
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Te alquilamos nuestras instalaciones para que puedas bañar a tu
            peludo con todo el amor, tiempo y profesionalismo que merece.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-kodama-cream rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-foreground" size={28} />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-8 md:p-12 relative overflow-hidden mb-8"
        >
          {/* Decorative Elements */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                ¿Qué incluye el servicio?
              </h3>
              <p className="font-body text-foreground/80 mb-6">
                Por el pago de la hora, te entregamos todo lo necesario para un
                baño profesional. El tiempo mínimo es de 60 minutos y si
                necesitas más, ¡no hay problema!
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {includes.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2
                      className="text-secondary flex-shrink-0"
                      size={20}
                    />
                    <span className="font-body text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex-1 max-w-sm">
              <div className="bg-card rounded-2xl p-6 shadow-xl">
                <p className="font-display font-bold text-xl text-foreground text-center mb-4">
                  ¡IMPORTANTE!
                </p>
                <ul className="space-y-3 font-body text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    Si te pasas del tiempo, se cobra por minuto exacto
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    Solo atendemos con citas previamente confirmadas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    Si tu veterinario ordenó shampoo medicado, ¡tráelo!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-primary rounded-3xl p-8 md:p-8">
            <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-2 mb-2 text-center">
              Listado de Precios
            </h3>
            <p className="font-body text-foreground/80 mb-10 text-center text-lg">
              Autolavado (Sede Normandía)
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                {
                  size: "Pequeño",
                  weight: "1 a 15 kg",
                  hour: "$35.000",
                  minute: "$583",
                },
                {
                  size: "Mediano",
                  weight: "16 a 25 kg",
                  hour: "$38.000",
                  minute: "$633",
                },
                {
                  size: "Grande",
                  weight: "26 a 35 kg",
                  hour: "$45.000",
                  minute: "$750",
                },
                {
                  size: "Extra Grande",
                  weight: "36 kg o más",
                  hour: "$48.000",
                  minute: "$800",
                },
              ].map((price, index) => (
                <motion.div
                  key={price.size}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-secondary/20"
                >
                  <div className="text-center mb-4">
                    <h4 className="font-display font-bold text-xl text-foreground mb-1">
                      Tamaño {price.size}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">
                      {price.weight}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-kodama-yellow/20 rounded-xl p-4 border-2 border-kodama-yellow/30">
                      <p className="font-body text-xs text-muted-foreground mb-1">
                        Por Hora
                      </p>
                      <p className="font-display font-bold text-2xl text-secondary">
                        {price.hour}
                      </p>
                    </div>
                    <div className="bg-secondary/10 rounded-xl p-4 border-2 border-secondary/20">
                      <p className="font-body text-xs text-muted-foreground mb-1">
                        Por Minuto
                      </p>
                      <p className="font-display font-bold text-xl text-secondary">
                        {price.minute}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Cedritos - servicios especiales */}
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <h4 className="font-display font-bold text-2xl text-foreground mb-2">
                    Sede Cedritos: cabina automatizada y ozonoterapia
                  </h4>
                  <p className="font-body text-muted-foreground mb-4">
                    En nuestra sede de Cedritos encuentras autolavado con cabina automatizada
                    y servicio de ozonoterapia para tu peludo. Escríbenos para conocer
                    disponibilidad y tarifas de estos servicios.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Cabina automatizada", "Ozonoterapia", "Autolavado"].map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1 bg-primary/25 text-foreground px-3 py-1 rounded-full font-body text-xs font-semibold"
                      >
                        <Sparkles size={12} />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <motion.a
                  href={cedritos.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-full font-body font-bold whitespace-nowrap shadow-lg"
                >
                  <MessageCircle size={20} />
                  Agendar Cedritos
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AutolavadoSection;
