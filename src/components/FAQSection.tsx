import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué servicio hay en cada sede?",
    answer: "Sede Esmeralda (Teusaquillo, Cra 58 #45-28) es nuestra sede exclusiva de baño y peluquería, atiende de lunes a sábado de 8:00 am a 5:00 pm. Sede Normandía (Edificio Kashi, Cra 71 #53-84 local 102) y Sede Cedritos (Calle 140 #13-36 local 9, C.C. Avenida 140) son de autolavado, donde tú mismo bañas a tu peludo como un PRO. Cedritos además cuenta con cabina automatizada y ozonoterapia.",
  },
  {
    question: "¿A qué número debo escribir para agendar?",
    answer: "Cada sede tiene su propio número de WhatsApp: Esmeralda (baño y peluquería) +57 310 754 7787, Normandía (autolavado) +57 323 644 6117 y Cedritos (autolavado) +57 319 211 7868. Escribe directamente al de la sede que quieras visitar para agendar más rápido.",
  },
  {
    question: "¿Dónde puedo parquear en la sede Cedritos?",
    answer: "Llega en vehículo buscando 'Centro Comercial Avenida 140' en Google Maps o Waze; estamos en el local 9, al lado de Laika y Pasteur. Puedes dejar tu vehículo en el OXXO de Cedritos o en la bahía de KFC.",
  },
  {
    question: "¿Qué pasa si me paso del tiempo de la hora?",
    answer: "Se te cobrará el minuto con base al valor total de la hora. Si tu mascota está en el precio de $35.000, dividimos ese valor en 60 minutos y te sumamos el valor exacto que corresponde al tiempo adicional.",
  },
  {
    question: "¿Y si me da miedito cortar las uñas?",
    answer: "¡No te asustes! Para eso está el acompañamiento de personal altamente capacitado. Nuestro anfitrión lo hará por ti y estará durante todo el proceso para guiarte.",
  },
  {
    question: "¿Le lavan los dientes?",
    answer: "¡Sí! Incluimos limpieza dental con crema dental y enjuague bucal especial para mascotas.",
  },
  {
    question: "¿Qué me entregan para el baño?",
    answer: "Te entregamos un delantal y un tapabocas por persona. Además de todos los shampoos, herramientas y productos necesarios.",
  },
  {
    question: "¿Cuántas personas pueden ingresar por mascota?",
    answer: "Cada peludo puede tener DOS acompañantes. ¡Vengan en familia!",
  },
  {
    question: "¿Mi mascota tiene pulgas o garrapatas, qué debo hacer?",
    answer: "Debes seguir estos pasos: 1) Aplica pipeta o pastilla primero (mata los huevos). 2) Fumiga tu casa con raid especial para pulgas. 3) Después de eso, ya puedes bañarlo. 4) Lava su cama con vinagre como repelente natural. ¡Ningún shampoo mata las ninfas!",
  },
  {
    question: "¿Qué pasa si llego tarde a mi cita?",
    answer: "Te agradecemos notificarnos si tienes un retraso. Sin embargo, pasados 15 minutos de la hora elegida, si no has llegado, se dará por cancelada tu cita para no retrasar los agendamientos de otros peluditos.",
  },
  {
    question: "¿Qué pasa si no puedo asistir a mi cita?",
    answer: "Te agradecemos notificarnos vía WhatsApp o llamada. Si deseas reagendar, solicitamos el abono del 50% del valor del servicio para asegurar tu nueva cita.",
  },
];

const personalityTest = [
  { emoji: "🧸", text: "Un osito de peluche, tierno y noble, se deja hacer todo" },
  { emoji: "🐏", text: "Está más loco que una cabra pero se deja bañar" },
  { emoji: "🦥", text: "Es un abuelito, toca con calmita" },
  { emoji: "🐕‍🦺", text: "Es nervioso sumiso, miedoso pero no agresivo" },
  { emoji: "🦀", text: "Odia que le toquen las patas o corten uñas" },
  { emoji: "🦘", text: "Escapista, se cree Houdini" },
  { emoji: "🙉", text: "Es gritón y llora mucho" },
  { emoji: "👺", text: "Es bravito y territorial con otros perros" },
  { emoji: "🐲", text: "Es un chacal, puede ser agresivo" },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-kodama-cream relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full font-body font-bold mb-4">
            Preguntas frecuentes
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            ¿Tienes dudas?
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Aquí respondemos las preguntas más comunes sobre nuestro servicio de autolavado.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-2xl px-6 border-none shadow-sm"
                >
                  <AccordionTrigger className="font-body font-semibold text-foreground hover:no-underline py-5 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Personality Test */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-3xl p-8 shadow-lg sticky top-24">
              <h3 className="font-display font-bold text-xl text-foreground text-center mb-4">
                ¡REALIZA EL TEST DE GENIO DE TU MASCOTA!
              </h3>
              <p className="font-body text-muted-foreground mb-6">
                ¿Cómo es tu peludo en el baño? Esto nos ayuda a saber qué manejo tener con él. 
                ¡Sé honesto/a!
              </p>
              <div className="space-y-3">
                {personalityTest.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-kodama-cream rounded-xl hover:bg-primary/20 transition-colors cursor-default"
                  >
                    <span className="text-2xl">{item.emoji}</span>
                    <span className="font-body text-sm text-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground mt-6 italic text-center">
                Conoce el genio de tu peludo y elige el mejor servicio para él.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
