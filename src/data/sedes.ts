// Fuente única de verdad para números de contacto y sedes.
// Si cambia un número, cámbialo SOLO aquí.

export const buildWhatsAppUrl = (phone: string, message: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

// Número principal (sede Esmeralda / Teusaquillo - baño y peluquería)
export const MAIN_PHONE = "573107547787";
export const MAIN_PHONE_DISPLAY = "+57 310 754 7787";
export const MAIN_WHATSAPP = buildWhatsAppUrl(
  MAIN_PHONE,
  "¡Hola Kodama Pet Care! Quiero agendar una cita para mi peludo 🐶"
);

export type Sede = {
  name: string;
  service: string;
  serviceType: "peluqueria" | "autolavado";
  address: string;
  reference: string;
  hours?: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  mapUrl: string;
  transport: string;
  parking?: string;
  highlights?: string[];
};

export const sedes: Sede[] = [
  {
    name: "Sede Esmeralda",
    service: "Baño y Peluquería",
    serviceType: "peluqueria",
    address: "Cra 58 #45-28, La Esmeralda, Teusaquillo",
    reference: "Cerca a la estación CAN de Transmilenio",
    hours: "Lunes a sábado, 8:00 am a 5:00 pm",
    phone: "573107547787",
    phoneDisplay: "+57 310 754 7787",
    whatsapp: buildWhatsAppUrl(
      "573107547787",
      "¡Hola! Quiero agendar baño y peluquería en la sede Esmeralda 🐶"
    ),
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Kodama+Pet+Care+Cra+58+%2345-28+La+Esmeralda+Bogot%C3%A1",
    transport: "Busca 'Kodama Pet Care' en Google Maps o Waze",
    parking: "No parquear sobre el andén, solo frente a la entrada del local",
    highlights: ["Sede exclusiva de baño y peluquería", "Atención profesional"],
  },
  {
    name: "Sede Normandía",
    service: "Autolavado",
    serviceType: "autolavado",
    address: "Cra 71 #53-84, Edificio Kashi, Local 102",
    reference: "A dos cuadras de la Universidad Libre, cerca de la Av. Boyacá",
    phone: "573236446117",
    phoneDisplay: "+57 323 644 6117",
    whatsapp: buildWhatsAppUrl(
      "573236446117",
      "¡Hola! Quiero agendar autolavado en la sede Normandía 🐶"
    ),
    mapUrl: "https://maps.app.goo.gl/SpdQJR8Q8u7SEPWx7",
    transport: "Busca 'Edificio Kashi' en Google Maps o Waze",
    highlights: ["Lo haces tú mismo como un PRO"],
  },
  {
    name: "Sede Cedritos",
    service: "Autolavado",
    serviceType: "autolavado",
    address: "Calle 140 #13-36, Local 9, C.C. Avenida 140",
    reference: "Estamos al lado de Laika y Pasteur",
    phone: "573192117868",
    phoneDisplay: "+57 319 211 7868",
    whatsapp: buildWhatsAppUrl(
      "573192117868",
      "¡Hola! Quiero agendar autolavado en la sede Cedritos 🐶"
    ),
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Centro+Comercial+Avenida+140+Bogot%C3%A1",
    transport:
      "Llega en vehículo buscando 'Centro Comercial Avenida 140' en Google Maps o Waze",
    parking: "Parquea en el OXXO de Cedritos o en la bahía de KFC",
    highlights: ["Cabina automatizada", "Ozonoterapia", "Lo haces tú mismo como un PRO"],
  },
];
