import { motion } from "framer-motion";
import { Phone, Calendar, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen bg-primary relative overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-kodama-yellow-light/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-kodama-orange/20 rounded-full blur-3xl"
        />
        {/* Decorative Strokes */}
        <svg className="absolute top-20 left-10 w-24 h-24 text-card/40" viewBox="0 0 100 100">
          <motion.path
            d="M10 50 Q 30 20, 50 50 T 90 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
        <svg className="absolute top-40 right-20 w-20 h-20 text-card/40" viewBox="0 0 100 100">
          <motion.path
            d="M20 80 Q 50 10, 80 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-card/90 backdrop-blur px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="text-secondary" size={20} />
              <span className="font-body font-semibold text-foreground">Solo con cita previa</span>
            </motion.div>

            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Baña a tu peludo{" "}
              <span className="text-secondary">como un PRO</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Te alquilamos nuestras instalaciones con todo incluido: shampoos, herramientas, 
              acompañamiento y asesoría profesional. ¡Del resto nos encargamos nosotras! 💛
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="https://wa.me/573107547787"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-body font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <Phone size={22} />
                Agendar Cita
              </motion.a>
              <motion.a
                href="#autolavado"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-card text-foreground px-8 py-4 rounded-full font-body font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <Calendar size={22} />
                Ver Servicios
              </motion.a>
            </div>
          </motion.div>

          {/* Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Phone Frame */}
              <div className="bg-card rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-kodama-cream rounded-[2.5rem] p-8 min-h-[400px] flex flex-col items-center justify-center text-center relative overflow-hidden">
                  {/* Decorative lines inside */}
                  <div className="absolute top-4 right-4">
                    <motion.div
                      animate={{ y: [-2, 2, -2] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="flex flex-col gap-1"
                    >
                      <div className="w-1 h-4 bg-primary rounded-full" />
                      <div className="w-1 h-3 bg-primary rounded-full ml-1" />
                      <div className="w-1 h-4 bg-primary rounded-full" />
                    </motion.div>
                  </div>

                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-8xl mb-4"
                  >
                    🐕
                  </motion.div>
                  <h2 className="font-display font-bold text-2xl text-foreground mb-2">
                    Autolavado de Mascotas
                  </h2>
                  <p className="font-body text-muted-foreground">
                    Instalaciones equipadas para que cuides a tu peludo con amor
                  </p>
                  
                  <div className="mt-6 flex gap-2">
                    <span className="bg-primary/20 text-foreground px-3 py-1 rounded-full text-sm font-body">
                      🧴 Shampoos
                    </span>
                    <span className="bg-primary/20 text-foreground px-3 py-1 rounded-full text-sm font-body">
                      ✂️ Herramientas
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -left-6 bg-card p-4 rounded-2xl shadow-lg"
              >
                <span className="text-3xl">🛁</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-secondary p-4 rounded-2xl shadow-lg"
              >
                <span className="text-3xl">💛</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-card"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
