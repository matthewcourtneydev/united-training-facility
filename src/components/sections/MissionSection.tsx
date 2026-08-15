import Link from "next/link";

import Container from "@/components/ui/Container";

export default function MissionSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[var(--primary)] py-20 sm:py-24">
      {/* Soft highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_35%,rgba(255,255,255,0.10),transparent_38%)]" />

      {/* Secondary blue atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(20,95,194,0.18),transparent_35%)]" />

      {/* Large decorative word */}
      <div className="pointer-events-none absolute -right-4 top-1/2 hidden -translate-y-1/2 font-[var(--font-oswald)] text-[13rem] font-bold uppercase leading-none text-white/[0.025] lg:block">
        United
      </div>

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/60">
              Who We Are
            </p>

            <h2 className="mt-4 font-[var(--font-oswald)] text-5xl font-bold uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              United by
              <br />
              Wrestling.
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-xl font-semibold leading-8 text-white sm:text-2xl">
              United Training Facility exists to unite wrestlers from across
              our region in pursuit of excellence on and off the mat.
            </p>

            <p className="mt-7 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
              Through disciplined training, positive coaching, and a culture
              built on respect, accountability, and continuous growth, we
              strive to develop confident athletes and outstanding people.
              Wrestling is our vehicle, but character is our destination.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex border-b border-white/60 pb-1 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-white"
            >
              Learn About United →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}