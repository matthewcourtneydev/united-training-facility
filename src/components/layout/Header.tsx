import Link from "next/link";

import DesktopNav from "@/components/layout/DesktopNav";
import Logo from "@/components/layout/Logo";
import Container from "@/components/ui/Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <div className="flex items-center gap-8">
          <DesktopNav />

          <Link
            href="/join-the-room"
            className="hidden bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-[0.14em] text-black transition hover:bg-neutral-200 md:inline-flex"
          >
            Join the Room
          </Link>
        </div>
      </Container>
    </header>
  );
}