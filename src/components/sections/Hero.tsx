import Link from "next/link";

import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,95,194,0.18),transparent_35%)]" />

      <Container className="relative flex min-h-[72vh] items-center py-24 sm:py-28 lg:min-h-[78vh]">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-neutral-400">
            United Training Facility
          </p>

          <h1 className="font-[var(--font-oswald)] text-6xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            One Room.
            <br />
            One Purpose.
            <br />
            <span className="text-[var(--primary-bright)]">United.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300 sm:text-xl">
            A wrestling training environment built around disciplined training,
            positive coaching, accountability, and continuous growth.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/join-the-room"
              className="bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-neutral-200"
            >
              Join the Room
            </Link>

            <Link
              href="/schedule"
              className="border border-white/30 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}