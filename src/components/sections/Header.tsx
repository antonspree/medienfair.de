"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { LogoIcon } from "@/components/icons/LogoIcon";
import { ChevronDown } from "@/components/icons/ChevronDown";
import { Button } from "@/components/ui/Button";
import { LeistungenMegaMenu } from "@/components/sections/LeistungenMegaMenu";
import { cn } from "@/lib/cn";

const navItems = [
  { label: "Leistungen", href: "/#leistungen", hasDropdown: true },
  { label: "Beispiele", href: "/beispiele" },
  { label: "Wissen", href: "/wissen" },
];

/** Inter Medium (500) – explizit auch auf <button>, damit die Stärke greift */
const headerNavItemClass =
  "font-sans text-sm font-medium leading-none text-[#BBBCC3] hover:text-white";

export function Header() {
  const [open, setOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!leistungenOpen) return;
    const onPointerDown = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setLeistungenOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLeistungenOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [leistungenOpen]);

  const closeMega = () => setLeistungenOpen(false);

  return (
    <header className="sticky top-0 z-50 flex flex-col items-center px-4 pt-6 pb-4 sm:pt-8">
      <div ref={headerRef} className="relative w-full max-w-[540px]">
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex h-[52px] w-full shrink-0 items-center gap-2 rounded-[20px] bg-[#141414] pl-4 pr-3"
        >
          <Link href="/" className="shrink-0" aria-label="Medienfair Startseite">
            <LogoIcon />
          </Link>
          <div className="flex flex-1 items-center">
            <ul className="hidden items-start md:flex">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.hasDropdown ? (
                    <button
                      type="button"
                      aria-expanded={leistungenOpen}
                      aria-haspopup="true"
                      onClick={() => setLeistungenOpen((v) => !v)}
                      className={cn(
                        "flex items-center gap-0.5 px-2 py-1",
                        headerNavItemClass,
                        leistungenOpen && "text-white",
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        stroke={leistungenOpen ? "#FFFFFF" : "#BBBCC3"}
                        className={cn(
                          "transition-transform duration-200",
                          leistungenOpen && "rotate-180",
                        )}
                      />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className={cn("flex items-center gap-0.5 px-2 py-1", headerNavItemClass)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <a
            href="#"
            className={cn("hidden px-2 md:inline", headerNavItemClass)}
          >
            Login
          </a>
          <Button
            variant="nav"
            size="sm"
            href="/kontakt"
            className="hidden sm:inline-flex"
          >
            Analyse anfragen
          </Button>
          <button
            type="button"
            aria-label="Menü"
            className="flex size-8 items-center justify-center rounded-lg text-[#BBBCC3] md:hidden"
            onClick={() => {
              setOpen((v) => !v);
              setLeistungenOpen(false);
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
              {open ? (
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </motion.nav>

        <AnimatePresence>
          {leistungenOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[calc(100%+8px)] left-0 z-50 hidden w-full rounded-[20px] bg-[#141414] p-2 shadow-[0_8px_32px_rgba(0,0,0,0.24)] md:block"
            >
              <LeistungenMegaMenu onNavigate={closeMega} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 w-full max-w-[540px] overflow-hidden rounded-2xl bg-[#141414] px-4 py-3 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setMobileLeistungenOpen((v) => !v)}
                        className={cn(
                          "flex w-full items-center justify-between rounded-lg px-2 py-2 hover:bg-white/5",
                          headerNavItemClass,
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          stroke="#BBBCC3"
                          className={cn(
                            "transition-transform duration-200",
                            mobileLeistungenOpen && "rotate-180",
                          )}
                        />
                      </button>
                      {mobileLeistungenOpen && (
                        <LeistungenMegaMenu
                          onNavigate={() => {
                            setOpen(false);
                            setMobileLeistungenOpen(false);
                          }}
                          className="mt-2 mb-1"
                        />
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-lg px-2 py-2 hover:bg-white/5",
                        headerNavItemClass,
                      )}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className={cn("block rounded-lg px-2 py-2", headerNavItemClass)}
                >
                  Login
                </a>
              </li>
              <li className="pt-2">
                <Button variant="nav" size="sm" href="/kontakt" className="w-full">
                  Analyse anfragen
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
