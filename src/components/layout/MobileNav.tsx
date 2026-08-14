"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "The United Way", href: "/united-way" },
  { label: "Coaches", href: "/coaches" },
  { label: "Schedule", href: "/schedule" },
  { label: "Contact", href: "/contact" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white transition hover:border-white/40"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-white/10 bg-black">
          <nav className="flex flex-col px-5 py-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-white/10 py-4 font-[var(--font-oswald)] text-xl font-semibold uppercase tracking-wide text-neutral-200 transition last:border-b-0 hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/join-the-room"
              onClick={closeMenu}
              className="mt-6 bg-white px-5 py-3.5 text-center text-sm font-bold uppercase tracking-[0.16em] text-black"
            >
              Join the Room
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}