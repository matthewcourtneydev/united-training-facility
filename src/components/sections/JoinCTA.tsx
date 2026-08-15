import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import Container from "@/components/ui/Container";

export default function JoinCta() {
  return (
    <section className="relative overflow-hidden bg-[var(--primary)] text-white">
      {/* Subtle background watermark */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src={assetPath("/images/logo-no-text.png")}
          alt=""
          width={700}
          height={700}
          className="absolute right-[8%] top-1/2 hidden w-[520px] -translate-y-1/2 opacity-[0.06] lg:block"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.08),transparent_45%)]" />
      </div>

      <Container className="relative py-14 sm:py-16 lg:py-18">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/70">
                Join the Room
              </p>

              <span className="hidden h-px w-12 bg-white/40 sm:block" />
            </div>

            <h2 className="mt-4 max-w-xl font-[var(--font-oswald)] text-4xl font-bold uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
              Different Schools.
              <br />
              Different Backgrounds.
              <br />
              One Room.
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-lg lg:justify-self-end">
            <p className="text-base leading-7 text-white/80">
              Whether you&apos;re stepping onto the mat for the first time or
              preparing for your next championship season, there&apos;s a place
              for you at United.
            </p>

            <p className="mt-5 font-bold uppercase tracking-[0.04em] text-white">
              One Room. One Purpose. United.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/join-the-room"
                className="inline-flex items-center justify-center bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-black transition hover:bg-neutral-200"
              >
                View Memberships
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/40 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Contact United
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
