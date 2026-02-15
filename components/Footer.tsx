import Image from "next/image";
import { CONTACT } from "@/lib/constants";

const navLinks = [
  { label: "Početna", href: "#hero" },
  { label: "Usluge", href: "#usluge" },
  { label: "Zašto mi", href: "#zasto-mi" },
  { label: "Kako radimo", href: "#kako-radimo" },
  { label: "Galerija", href: "#galerija" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-white">
      {/* Top CTA strip */}
      <div className="bg-[#f97316]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-bold text-lg text-center sm:text-left">
            Vaš transport je naša odgovornost.
          </p>
          <div className="flex gap-4">
            <a
              href={`tel:${CONTACT.phone1.replace(/-/g, "")}`}
              className="bg-white text-[#f97316] font-bold px-6 py-2.5 rounded-lg hover:bg-orange-50 transition-colors text-sm"
            >
              {CONTACT.phone1}
            </a>
            <a
              href="#kontakt"
              className="bg-[#1a3a6b] text-white font-bold px-6 py-2.5 rounded-lg hover:bg-[#122a52] transition-colors text-sm"
            >
              Pošaljite upit
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="Biznis Cargo DOO"
              width={160}
              height={48}
              className="h-28 w-auto object-contain mb-5 invert"
            />
            <p className="text-gray-400 leading-relaxed text-sm mb-6">
              Logistička kompanija specijalizovana za organizaciju drumskog prevoza robe u domaćem
              saobraćaju. Brzo, sigurno i ekonomično.
            </p>
            <p className="text-[#f97316] font-semibold text-sm">
              BIZNIS CARGO DOO – logistika bez brige.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-xs">
              Navigacija
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#f97316] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#f97316] inline-block" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-xs">Kontakt</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-[#f97316] mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-[#f97316] mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <a
                    href={`tel:${CONTACT.phone1.replace(/-/g, "")}`}
                    className="hover:text-[#f97316] transition-colors block"
                  >
                    {CONTACT.phone1}
                  </a>
                  <a
                    href={`tel:${CONTACT.phone2.replace(/-/g, "")}`}
                    className="hover:text-[#f97316] transition-colors block"
                  >
                    {CONTACT.phone2}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-[#f97316] mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-[#f97316] transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-[#f97316] mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
                  />
                </svg>
                <span>{CONTACT.website}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-600">
          <span>© {year} BIZNIS CARGO DOO. Sva prava zadržana.</span>
          <a
            href="https://manikamwebsolutions.com/sr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#f97316] transition-colors"
          >
            Izrada sajta: <span className="text-gray-400 font-medium">Manikam Web Solutions</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
