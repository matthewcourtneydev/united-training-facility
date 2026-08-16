import Link from "next/link";

import Container from "@/components/ui/Container";
import DesktopNav from "@/components/layout/DesktopNav";
import Logo from "@/components/layout/Logo";
import MobileNav from "@/components/layout/MobileNav";

export default function Header() {
  return (
    <header className="border-b border-white/10 bg-black/95 backdrop-blur-md">
      <Container className="relative flex h-20 items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          <DesktopNav />

          <Link
            href="/join-the-room"
            className="bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-[0.14em] text-black transition hover:bg-neutral-200"
          >
            Join the Room
          </Link>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}