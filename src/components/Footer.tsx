import { motion } from "framer-motion";
import { Phone, Instagram, Facebook, Heart, MessageCircle } from "lucide-react";
import kodamaLogo from "@/assets/kodama-logo.png";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-foreground text-card py-16 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🐕</div>
        <div className="absolute top-20 right-20 text-5xl">🐈</div>
        <div className="absolute bottom-10 left-1/3 text-6xl">🛁</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src={kodamaLogo} alt="Kodama Pet Care" className="h-20 w-auto mb-4 brightness-0 invert" />
            <p className="font-body text-card/80 text-sm">
              Baña a tu peludo como un PRO. Instalaciones equipadas con todo lo que necesitas 
              para consentir a tu mascota.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display font-bold text-lg text-card mb-4">Enlaces</h4>
            <ul className="space-y-2 font-body text-card/80">
              <li><a href="#inicio" className="hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#autolavado" className="hover:text-primary transition-colors">Autolavado</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#ubicaciones" className="hover:text-primary transition-colors">Ubicaciones</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display font-bold text-lg text-card mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/573107547787"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-card/80 hover:text-primary transition-colors"
                >
                  <MessageCircle size={18} />
                  +57 310 754 7787
                </a>
              </li>
              <li>
                <a
                  href="tel:+573107547787"
                  className="flex items-center gap-2 font-body text-card/80 hover:text-primary transition-colors"
                >
                  <Phone size={18} />
                  Llamar ahora
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-display font-bold text-lg text-card mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/kodamapetcare/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-foreground transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/Kodamapetcare/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-foreground transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
            <a
              href="https://wa.me/573107547787"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-body font-semibold mt-6 hover:scale-105 transition-transform"
            >
              <MessageCircle size={20} />
              Agendar por WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card/20 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-card/60 flex items-center gap-1">
            Hecho con <Heart className="text-accent" size={16} /> para los peluditos de Colombia
          </p>
          <p className="font-body text-sm text-card/60">
            © 2026 Kodama Pet Care. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
