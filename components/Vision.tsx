"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const bullets = [
  { label: "Mikro preduzeća", desc: "Prilagođene usluge" },
  { label: "Mala preduzeća", desc: "Ekonomična rešenja" },
  { label: "Srednja preduzeća", desc: "Skalabilna logistika" },
  { label: "Srbija", desc: "Sve relacije" },
];

export default function Vision() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8faff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-[#1a3a6b] to-[#2352a0] rounded-3xl overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f97316] rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Text side */}
            <motion.div
              className="p-10 sm:p-14 lg:p-16 flex flex-col justify-center"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="inline-block text-[#f97316] font-semibold text-sm tracking-widest uppercase mb-4">
                Naša misija i vizija
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                Logistika bez brige – to je naš cilj
              </h2>
              <p className="text-blue-200 text-lg leading-relaxed mb-6">
                Naša misija je da mikro, malim i srednjim preduzećima obezbedimo siguran, brz i
                ekonomski efikasan transport – bez potrebe da imaju sopstveni vozni park.
              </p>
              <p className="text-blue-200 text-lg leading-relaxed mb-10">
                Cilj nam je da postanemo pouzdan logistički partner kompanijama širom Srbije, kroz
                profesionalan pristup, digitalizaciju procesa i stalno unapređenje organizacije
                transporta.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {bullets.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                  >
                    <div className="w-2 h-2 rounded-full bg-[#f97316] mt-2 shrink-0" />
                    <div>
                      <div className="text-white font-semibold text-sm">{item.label}</div>
                      <div className="text-blue-300 text-xs">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image side */}
            <motion.div
              className="relative min-h-80 lg:min-h-0"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                src="/1763.jpg"
                alt="Biznis Cargo vizija"
                fill
                className="object-cover lg:rounded-r-3xl opacity-60 lg:opacity-60"
              />
              <div className="absolute inset-0 " />

              {/* Quote overlay */}
              <div className="absolute inset-0 flex items-end justify-center pb-10 px-8">
                <motion.blockquote
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                >
                  <p className="text-2xl font-bold text-white leading-snug">
                    &ldquo;BIZNIS CARGO DOO – logistika bez brige.&rdquo;
                  </p>
                </motion.blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
