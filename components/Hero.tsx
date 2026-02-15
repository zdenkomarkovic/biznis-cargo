"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

const stats = [
  { value: "24/7", label: "Dostupnost" },
  { value: "100%", label: "Dokumentacija" },
  { value: "Brz", label: "Odgovor" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/281.jpg"
            alt="Biznis Cargo transport"
            fill
            className="object-cover object-center"
            priority
            quality={85}
          />
        </motion.div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a6b]/40 via-[#1a3a6b]/40 to-[#122a52]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-4 pt-28 pb-10 sm:pt-32 sm:pb-16 lg:pt-48">
        <div className="max-w-2xl lg:max-w-none lg:w-3/4 text-center lg:text-left">

          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-[#f97316]/20 border border-[#f97316]/40 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 mb-3 sm:mb-6"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
          >
            <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
            <span className="text-[#fb923c] text-xs sm:text-sm font-medium tracking-wide">
              Logistika bez brige
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-3 sm:mb-6"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
          >
            <span className="text-[#f97316]">BIZNIS CARGO DOO</span>{" "}
            <span className="block">Pouzdan partner u</span>{" "}
            <span className="text-[#f97316]">organizaciji transporta</span> robe
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-sm sm:text-xl text-blue-100/90 leading-relaxed mb-4 sm:mb-8"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.6}
          >
            Specijalizovani smo za organizaciju drumskog prevoza robe u domaćem saobraćaju. Mi ne
            posedujemo kamione –{" "}
            <strong className="text-white">mi organizujemo kompletan transport</strong> za mikro,
            mala i srednja preduzeća.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.8}
          >
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:px-8 sm:py-4 bg-[#f97316] hover:bg-[#ea6a00] text-white font-bold text-sm sm:text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Pošaljite upit
            </a>
            <a
              href="#usluge"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:px-8 sm:py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-sm sm:text-lg rounded-xl transition-all duration-200 backdrop-blur-sm"
            >
              Naše usluge
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </motion.div>

          {/* Stats row */}
          <div className="mt-6 sm:mt-14 flex flex-wrap gap-5 sm:gap-8 justify-center lg:justify-start">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={1.0 + i * 0.15}
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-[#f97316]">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-blue-200 mt-0.5">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
