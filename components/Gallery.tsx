"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/1000052587.jpg", alt: "Biznis Cargo transport 1" },
  { src: "/1000052593.jpg", alt: "Biznis Cargo transport 2" },
  { src: "/1000052595.jpg", alt: "Biznis Cargo transport 3" },
  { src: "/1000052607.jpg", alt: "Biznis Cargo transport 4" },
  { src: "/1000052609.jpg", alt: "Biznis Cargo transport 5" },
  { src: "/1000052633.jpg", alt: "Biznis Cargo transport 6" },
  { src: "/1000052635.jpg", alt: "Biznis Cargo transport 7" },
  { src: "/1000052639.jpg", alt: "Biznis Cargo transport 8" },
  { src: "/1000052643.jpg", alt: "Biznis Cargo transport 9" },
  { src: "/1000052682.jpg", alt: "Biznis Cargo transport 10" },
  { src: "/1000052688.jpg", alt: "Biznis Cargo transport 11" },
  { src: "/1000052694.jpg", alt: "Biznis Cargo transport 12" },
  { src: "/1000052789.jpg", alt: "Biznis Cargo transport 13" },
];

export default function Gallery() {
  return (
    <section id="galerija" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block text-[#f97316] font-semibold text-sm tracking-widest uppercase mb-3">
            Naši vozni park partneri
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a6b] mb-5">
            Galerija
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Sarađujemo sa proverenim prevoznicima koji raspolažu modernim i
            pouzdanim voznim parkom.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid rounded-xl overflow-hidden group relative shadow-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08, ease: "easeOut" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={300}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#1a3a6b]/0 group-hover:bg-[#1a3a6b]/30 transition-colors duration-300 rounded-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
