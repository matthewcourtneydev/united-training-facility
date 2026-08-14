import Link from "next/link";

import Container from "@/components/ui/Container";
import { memberships } from "@/data/memberships";

export default function JoinTheRoomPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-black py-20 sm:py-28">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
            Join the Room
          </p>

          <h1 className="mt-4 max-w-5xl font-[var(--font-oswald)] text-5xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-8xl">
            There&apos;s a Place
            <br />
            for You Here.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400 sm:text-xl">
            Whether you&apos;re just beginning your wrestling journey or
            looking to take your wrestling to the next level, there&apos;s a
            place for you at United.
          </p>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-neutral-950 py-24 sm:py-32">
        <Container>
          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
              Membership
            </p>

            <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase sm:text-5xl">
              Choose Your Membership
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2">
            {memberships.map((membership) => (
              <article
                key={membership.name}
                className="flex flex-col bg-black p-8 sm:p-10"
              >
                <h3 className="font-[var(--font-oswald)] text-3xl font-bold uppercase">
                  {membership.name}
                </h3>

                <div className="mt-7 flex items-end gap-2">
                  <span className="font-[var(--font-oswald)] text-6xl font-bold">
                    ${membership.price}
                  </span>

                  <span className="pb-2 text-sm uppercase tracking-[0.14em] text-neutral-500">
                    / {membership.period}
                  </span>
                </div>

                <div className="my-8 h-px bg-white/10" />

                <ul className="flex-1 space-y-4">
                  {membership.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm leading-6 text-neutral-300"
                    >
                      <span className="text-[var(--primary-bright)]">—</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  disabled
                  className="mt-10 w-full cursor-not-allowed border border-white/20 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-neutral-500"
                >
                  Registration Coming Soon
                </button>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm leading-6 text-neutral-500">
            Registration buttons will connect directly to the appropriate
            United membership in PushPress.
          </p>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-black py-24 sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
                Financial Assistance
              </p>

              <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-tight sm:text-5xl">
                Opportunity for Every Athlete.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-neutral-300">
                We believe every athlete who wants to grow should have an
                opportunity to be part of the United room.
              </p>

              <p className="mt-6 text-lg leading-8 text-neutral-400">
                Need a scholarship or financial assistance? Please reach out to
                Grace Courtney to discuss available options.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex border-b border-white pb-1 text-sm font-bold uppercase tracking-[0.16em] transition hover:border-[var(--primary-bright)] hover:text-[var(--primary-bright)]"
              >
                Contact United →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[var(--primary)] py-28 sm:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_45%)]" />

        <Container className="relative">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/60">
              United Training Facility
            </p>

            <h2 className="mt-6 font-[var(--font-oswald)] text-5xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
              Different Schools.
              <br />
              Different Backgrounds.
              <br />
              One Room.
            </h2>

            <p className="mt-8 font-[var(--font-oswald)] text-2xl font-bold uppercase tracking-wide sm:text-3xl">
              One Room. One Purpose. United.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}