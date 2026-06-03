import Link from "next/link";
import { LogoIcon } from "@/components/icons/LogoIcon";
import { serviceLinks } from "@/lib/service-links";

const companyLinks = ["Für wen", "Ablauf", "Wissen", "Über uns"];
const legalLinks = ["Impressum", "Datenschutz", "Cookie-Hinweise"];

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-12">
      <div className="mx-auto grid w-full max-w-5xl gap-10 px-5 sm:grid-cols-[1fr_1.2fr] sm:gap-8">
        <div className="flex flex-col gap-4">
          <Link href="/" aria-label="Medienfair Startseite">
            <LogoIcon className="w-[25px]" variant="dark" />
          </Link>
          <p className="max-w-[288px] text-sm font-medium text-[#999999]">
            Planbare Kunden- und Vertriebspartnergewinnung für Finanzberater –
            mit Website, SEO und Meta Ads.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-[#999999]">Bereit</span>
            <span className="relative flex items-center justify-center">
              <span className="size-2 shrink-0 rounded-full bg-[#33C758]" />
              <span className="absolute size-2.5 rounded-full bg-[#33C758] opacity-[0.02]" />
            </span>
          </div>
          <p className="text-sm font-medium text-[#999999]">
            © 2026 Medienfair GmbH
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3">
          <div>
            <p className="text-sm font-medium text-[#181925]">Unternehmen</p>
            <ul className="mt-1 flex flex-col gap-1">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm font-medium text-[#999999] hover:text-[#181925]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-[#181925]">Leistungen</p>
            <ul className="mt-1 flex flex-col gap-1">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-[#999999] hover:text-[#181925]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-sm font-medium text-[#181925]">Rechtliches</p>
            <ul className="mt-1 flex flex-col gap-1">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm font-medium text-[#999999] hover:text-[#181925]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
