"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Pošaljete nam upit",
    desc: "Javite nam relaciju, vrstu robe i željeni rok isporuke – telefonom, mejlom ili putem formulara.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Mi pronalazimo optimalnog prevoznika",
    desc: "Iz naše mreže proverenih prevoznika biramo onaj koji najefikasnije odgovara vašim potrebama.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Dogovaramo cenu i termin",
    desc: "Dobijate jasnu i transparentnu ponudu. Usaglašavamo sve detalje pre početka transporta.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Organizujemo i pratimo transport",
    desc: "Koordiniramo svaki korak – od utovara do istovara. Pratimo pošiljku i informišemo vas u realnom vremenu.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Sigurna isporuka i dokumentacija",
    desc: "Roba stiže na odredište, a vi dobijate urednu dokumentaciju. Jednostavno, brzo i bez komplikacija.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="kako-radimo" className="py-20 lg:py-28 bg-[#1a3a6b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block text-[#f97316] font-semibold text-sm tracking-widest uppercase mb-3">
            Proces saradnje
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Kako funkcioniše saradnja?
          </h2>
          <p className="text-blue-200 text-lg leading-relaxed">
            Jednostavno, brzo i bez komplikacija – od upita do isporuke u 5
            koraka.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-[calc(100%-80px)] h-0.5 bg-white/10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              >
                {/* Circle */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#f97316] flex items-center justify-center text-white shadow-lg shadow-[#f97316]/30 mb-5">
                  {step.icon}
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-[#1a3a6b] text-xs font-extrabold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-white font-bold text-base mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-blue-300 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <p className="text-blue-200 text-lg mb-6">
            Jednostavno, brzo i bez komplikacija.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6a00] text-white font-bold text-lg py-4 px-10 rounded-xl transition-colors duration-200 shadow-lg"
          >
            Započnite saradnju
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
