import Link from "next/link";

import Container from "@/components/ui/Container";

export default function JoinCTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--primary)] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

      <Container className="relative">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/70">
            Join the Room
          </p>

          <h2 className="mt-4 font-[var(--font-oswald)] text-5xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
            Different Schools.
            <br />
            Different Backgrounds.
            <br />
            One Room.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            Whether you&apos;re stepping onto the mat for the first time or
            preparing for your next championship season, there&apos;s a place
            for you at United.
          </p>

          <p className="mt-8 font-[var(--font-oswald)] text-2xl font-bold uppercase tracking-wide text-white">
            One Room. One Purpose. United.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/join-the-room"
              className="bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-neutral-200"
            >
              View Memberships
            </Link>

            <Link
              href="/contact"
              className="border border-white/50 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-black"
            >
              Contact United
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}