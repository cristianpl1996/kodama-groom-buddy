import { motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import kodamaLogo from "@/assets/kodama-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Autolavado", href: "#autolavado" },
    { label: "Preguntas", href: "#faq" },
    { label: "Ubicaciones", href: "#ubicaciones" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <motion.a
          href="#inicio"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <img src={kodamaLogo} alt="Kodama Pet Care" className="h-14 w-auto" />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="font-body font-medium text-foreground hover:text-secondary transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="https://wa.me/573107547787"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-body font-semibold hover:scale-105 transition-transform"
          >
            <Phone size={18} />
            Agendar Cita
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-card border-t border-border"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-body font-medium text-foreground hover:text-secondary transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/573107547787"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-4 py-3 rounded-full font-body font-semibold"
            >
              <Phone size={18} />
              Agendar Cita
            </a>
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
