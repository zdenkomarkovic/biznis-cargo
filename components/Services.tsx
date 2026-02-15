"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 17H5a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3m0 0h3l3 3v4h-3m-3 0H9m9 0a2 2 0 100 4 2 2 0 000-4zm-9 0a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
    title: "Organizacija domaćeg transporta",
    desc: "Kompletna koordinacija prevoza robe od utovara do istovara. Brinemo o svakom detalju procesa umesto vas.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Angažovanje proverenih prevoznika",
    desc: "Saradnja isključivo sa pouzdanim i registrovanim transportnim kompanijama. Vaša roba je u sigurnim rukama.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Praćenje pošiljke",
    desc: "Kontrola statusa transporta u realnom vremenu. Uvek znate gde se vaša roba nalazi.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Optimizacija troškova",
    desc: "Pronalazimo najpovoljnije rešenje bez kompromisa u kvalitetu usluge. Transparentne cene bez skrivenih troškova.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Administrativna podrška",
    desc: "Komunikacija, dokumentacija i koordinacija između klijenta i prevoznika. Uredna dokumentacija garantovana.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function Services() {
  return (
    <section id="usluge" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <span className="inline-block text-[#f97316] font-semibold text-sm tracking-widest uppercase mb-3">
            Šta nudimo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a6b] mb-5">
            Naše usluge
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Kompletna logistička podrška za vaše preduzeće – od prvog upita do
            isporuke robe.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-[#1a3a6b]/20 hover:shadow-xl transition-all duration-300"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              custom={i * 0.08}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-[#1a3a6b]/8 text-[#1a3a6b] flex items-center justify-center mb-6 group-hover:bg-[#1a3a6b] group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              {/* Number */}
              <span className="absolute top-6 right-8 text-5xl font-extrabold text-gray-50 group-hover:text-[#1a3a6b]/5 transition-colors select-none">
                0{i + 1}
              </span>

              <h3 className="text-xl font-bold text-[#1a3a6b] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-[#1a3a6b] to-[#2352a0] rounded-2xl p-8 flex flex-col justify-between text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            custom={services.length * 0.08}
          >
            <div>
              <h3 className="text-2xl font-bold mb-3">Spremi za saradnju?</h3>
              <p className="text-blue-200 leading-relaxed">
                Kontaktirajte nas i saznajte kako možemo da optimizujemo vaš
                transport.
              </p>
            </div>
            <a
              href="#kontakt"
              className="mt-6 inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6a00] text-white font-bold py-3 px-6 rounded-xl transition-colors duration-200 self-start"
            >
              Pošaljite upit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
