import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";

const footerNav = [
  { label: "About", href: "/about" },
  { label: "The United Way", href: "/united-way" },
  { label: "Coaches", href: "/coaches" },
  { label: "Schedule", href: "/schedule" },
  { label: "Join the Room", href: "/join-the-room" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black">
      <Container>
        <div className="grid gap-12 border-b border-white/10 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <Link
              href="/"
              aria-label="United Training Facility home"
              className="inline-block"
            >
              <Image
                src="/images/white-text.png"
                alt="United Training Facility"
                width={320}
                height={120}
                className="h-auto w-64"
              />
            </Link>

            <p className="mt-6 font-[var(--font-oswald)] text-xl font-bold uppercase tracking-wide">
              One Room. One Purpose. United.
            </p>

            <p className="mt-4 max-w-md text-sm leading-7 text-neutral-500">
              United Training Facility brings wrestlers together from across
              the Northern Tier of Pennsylvania and Southern Tier of New York
              to grow as athletes, teammates, leaders, and people.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-neutral-500">
              Explore
            </p>

            <nav className="mt-6 flex flex-col items-start gap-4">
              {footerNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-neutral-300 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-neutral-500">
              Find Us
            </p>

            <address className="mt-6 text-sm not-italic leading-7 text-neutral-300">
              United Training Facility
              <br />
              310 S Main St
              <br />
              Athens, PA 18810
            </address>

            <p className="mt-5 text-sm text-neutral-500">
              Parking available behind the building.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=310+S+Main+St+Athens+PA+18810"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex border-b border-white/40 pb-1 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:border-[var(--primary-bright)] hover:text-[var(--primary-bright)]"
            >
              Get Directions ↗
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-6 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} United Training Facility. All rights
            reserved.
          </p>

          <p>One Room. One Purpose. United.</p>
        </div>
      </Container>
    </footer>
  );
}