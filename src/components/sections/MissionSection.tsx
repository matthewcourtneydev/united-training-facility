import Link from "next/link";

import Container from "@/components/ui/Container";

export default function MissionSection() {
  return (
    <section className="border-b border-white/10 bg-neutral-950 py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
              Who We Are
            </p>

            <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-tight sm:text-5xl">
              United by
              <br />
              Wrestling.
            </h2>
          </div>

          <div>
            <p className="font-[var(--font-oswald)] text-2xl leading-relaxed text-white sm:text-3xl">
              United Training Facility exists to unite wrestlers from across
              our region in pursuit of excellence on and off the mat.
            </p>

            <p className="mt-7 max-w-3xl text-base leading-8 text-neutral-400 sm:text-lg">
              Through disciplined training, positive coaching, and a culture
              built on respect, accountability, and continuous growth, we
              strive to develop confident athletes and outstanding people.
              Wrestling is our vehicle, but character is our destination.
            </p>

            <Link
              href="/about"
              className="mt-9 inline-flex border-b border-white pb-1 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-[var(--primary-bright)] hover:text-[var(--primary-bright)]"
            >
              Learn About United →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}