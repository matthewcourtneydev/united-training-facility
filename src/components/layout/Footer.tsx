import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import { navigation } from "@/data/navigation";
import Container from "@/components/ui/Container";
import {
    FaFacebookF,
    FaInstagram,
    FaTiktok,
    FaXTwitter,
  } from "react-icons/fa6";

const footerNav = [
  ...navigation,
  { label: "Join the Room", href: "/join-the-room" },
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
                src={assetPath("/images/blue-text.png")}
                alt="United Training Facility"
                width={320}
                height={120}
                className="h-auto w-64"
              />
            </Link>

            <p className="mt-6 font-bold uppercase text-white">
  One Room. One Purpose. United.
</p>

<div className="mt-5 flex items-center gap-3">
  <Link
    href="https://www.instagram.com/unitedtrainingfacility?igsh=MXdlb2R1Z2pqYTJmcg==&igsi=MXdlb2R1Z2pqYTJmcg=="
    target="_blank"
    aria-label="Instagram"
    className="flex h-10 w-10 items-center justify-center border border-white/15 text-neutral-400 transition hover:border-[var(--primary-bright)] hover:bg-[var(--primary-bright)] hover:text-white"
  >
    <FaInstagram className="h-4 w-4" />
  </Link>

  <Link
    href="https://www.facebook.com/p/United-Training-Facility-100092605913030/"
    target="_blank"
    aria-label="Facebook"
    className="flex h-10 w-10 items-center justify-center border border-white/15 text-neutral-400 transition hover:border-[var(--primary-bright)] hover:bg-[var(--primary-bright)] hover:text-white"
  >
    <FaFacebookF className="h-4 w-4" />
  </Link>

  <Link
    href="https://www.tiktok.com/@united.training.facility?_r=1&_t=ZP-98ueayII3CR"
    target="_blank"
    aria-label="TikTok"
    className="flex h-10 w-10 items-center justify-center border border-white/15 text-neutral-400 transition hover:border-[var(--primary-bright)] hover:bg-[var(--primary-bright)] hover:text-white"
  >
    <FaTiktok className="h-4 w-4" />
  </Link>

  {/* <Link
    href="#"
    target="_blank"
    aria-label="X"
    className="flex h-10 w-10 items-center justify-center border border-white/15 text-neutral-400 transition hover:border-[var(--primary-bright)] hover:bg-[var(--primary-bright)] hover:text-white"
  >
    <FaXTwitter className="h-4 w-4" />
  </Link> */}
</div>

            <p className="mt-4 max-w-md text-sm leading-7 text-neutral-500">
              United Training Facility brings wrestlers together from across the
              Northern Tier of Pennsylvania and Southern Tier of New York to
              grow as athletes, teammates, leaders, and people.
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
