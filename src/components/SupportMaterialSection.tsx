import { motion } from "framer-motion";
import { Download, Eye, BookOpen, Heart } from "lucide-react";
import guiaPdf from "@/assets/GUIA_BASICA_DE_CUIDADO.pdf";
import grandezaPdf from "@/assets/LA_GRANDEZA_DE_SER PEQUENO.pdf";
import { Button } from "@/components/ui/button";

const materials = [
  {
    title: "Guía Básica de Cepillado y Acicale",
    description: "Todo lo que necesitas saber para el cuidado básico de tu mascota en casa.",
    pdfUrl: guiaPdf,
    icon: BookOpen,
  },
  {
    title: "La Grandeza de Ser Pequeño",
    description: "Un artículo especial dedicado a la importancia y el amor por los más pequeños.",
    pdfUrl: grandezaPdf,
    icon: Heart,
  },
];

const SupportMaterialSection = () => {
  return (
    <section id="support-material" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full font-body font-bold mb-4">
            Material de Apoyo
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Aprende con Nosotros
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Hemos preparado estos artículos y guías especiales para ti. Puedes leerlos aquí mismo o descargarlos para más tarde.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {materials.map((material, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-kodama-cream rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <material.icon className="w-10 h-10" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {material.title}
              </h3>
              <p className="font-body text-muted-foreground mb-8 flex-grow">
                {material.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Button asChild variant="outline" className="flex-1 gap-2 rounded-full font-body font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                  <a href={material.pdfUrl} target="_blank" rel="noopener noreferrer">
                    <Eye className="w-4 h-4" />
                    Ver Artículo
                  </a>
                </Button>
                <Button asChild className="flex-1 gap-2 rounded-full font-body font-semibold">
                  <a href={material.pdfUrl} download>
                    <Download className="w-4 h-4" />
                    Descargar
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportMaterialSection;
