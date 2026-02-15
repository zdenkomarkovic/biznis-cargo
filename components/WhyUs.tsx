"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: "⚡",
    title: "Brza reakcija i efikasna organizacija",
    desc: "Odmah reagujemo na vaš upit i organizujemo transport u najkraćem mogućem roku.",
  },
  {
    icon: "💎",
    title: "Transparentne cene bez skrivenih troškova",
    desc: "Jasna i precizna kalkulacija troškova unapred – bez neprijatnih iznenađenja.",
  },
  {
    icon: "🔄",
    title: "Fleksibilnost i prilagođavanje",
    desc: "Prilagođavamo se specifičnim potrebama svakog klijenta – bez obzira na veličinu pošiljke.",
  },
  {
    icon: "🛡️",
    title: "Sigurna i proverena mreža prevoznika",
    desc: "Sarađujemo samo sa registrovanim i proverenim prevoznicima sa odličnom reputacijom.",
  },
  {
    icon: "📞",
    title: "Profesionalna komunikacija i stalna dostupnost",
    desc: "Uvek smo dostupni za vaša pitanja i ažuriranja – tokom celog procesa transporta.",
  },
];

export default function WhyUs() {
  return (
    <section id="zasto-mi" className="py-20 lg:py-28 bg-[#f8faff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left – image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/2151998732.jpg"
                alt="Biznis Cargo - pouzdan prevoz"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#122a52]/50 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#f97316] flex items-center justify-center text-white shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-[#1a3a6b] text-sm">Vaš transport</div>
                <div className="text-xs text-gray-500">je naša odgovornost</div>
              </div>
            </motion.div>

            {/* Accent shape */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#f97316]/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Right – content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block text-[#f97316] font-semibold text-sm tracking-widest uppercase mb-3">
              Naše prednosti
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a6b] mb-6">
              Zašto izabrati BIZNIS CARGO?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Mi ne posedujemo kamione – mi organizujemo kompletan proces transporta. Zahvaljujući
              razvijenoj mreži pouzdanih prevoznika, obezbeđujemo optimalno rešenje za svaku vrstu
              robe.
            </p>

            <div className="space-y-5">
              {reasons.map((reason, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-xl shrink-0 group-hover:bg-[#1a3a6b] group-hover:border-[#1a3a6b] transition-all duration-200">
                    <span className="group-hover:grayscale group-hover:brightness-200 transition-all">
                      {reason.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a3a6b] mb-1">{reason.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
