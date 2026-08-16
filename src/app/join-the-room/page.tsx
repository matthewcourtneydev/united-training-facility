import Link from "next/link";

import Reveal from "@/components/motion/Reveal";
import Container from "@/components/ui/Container";
import { memberships } from "@/data/memberships";

export default function JoinTheRoomPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-black py-20 sm:py-28 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(20,95,194,0.16),transparent_35%)]" />

        <div className="pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 font-[var(--font-oswald)] text-[14rem] font-bold uppercase leading-none text-white/[0.025] lg:block">
          United
        </div>

        <Container className="relative z-10">
          <Reveal delay={0.08}>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
              Join the Room
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <h1 className="mt-4 max-w-5xl font-[var(--font-oswald)] text-5xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-8xl">
              There&apos;s a Place
              <br />
              for You Here.
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400 sm:text-xl">
              Whether you&apos;re just beginning your wrestling journey or
              looking to take your wrestling to the next level, there&apos;s a
              place for you at United.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Memberships */}
      <section className="bg-neutral-100 py-20 text-black sm:py-24">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
              Membership
            </p>

            <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
              Choose Your Membership
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
              Choose the membership that fits your athlete. Registration and
              payment are completed securely through PushPress.
            </p>
          </div>

          <div className="grid border-l border-t border-black/10 md:grid-cols-2">
            {memberships.map((membership) => {
              const hasRegistrationUrl =
                membership.registrationUrl.trim() !== "";

              return (
                <article
                  key={membership.name}
                  className="group flex flex-col border-b border-r border-black/10 bg-white p-7 transition duration-300 hover:-translate-y-0.5 hover:bg-neutral-50 hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)] sm:p-9"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--primary-bright)]">
                      United Membership
                    </p>

                    <h3 className="mt-4 font-[var(--font-oswald)] text-3xl font-bold uppercase leading-tight sm:text-4xl">
                      {membership.name}
                    </h3>

                    <div className="mt-6 flex items-end gap-2">
                      <p className="font-[var(--font-oswald)] text-5xl font-bold leading-none text-[var(--primary-bright)] sm:text-6xl">
                        {membership.price}
                      </p>

                      <p className="pb-1 text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                        {membership.billing}
                      </p>
                    </div>
                  </div>

                  <div className="my-7 h-px bg-black/10" />

                  <ul className="space-y-4">
                    {membership.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex gap-3 text-sm leading-6 text-neutral-600"
                      >
                        <span className="mt-[11px] h-px w-4 shrink-0 bg-[var(--primary-bright)]" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    {hasRegistrationUrl ? (
                      <Link
                        href={membership.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center bg-[var(--primary-bright)] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.14)]"
                      >
                        Join Now ↗
                      </Link>
                    ) : (
                      <div className="flex w-full items-center justify-center border border-black/10 bg-neutral-50 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-neutral-400">
                        Registration Coming Soon
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-6 text-sm leading-6 text-neutral-500">
            Registration opens in PushPress, where membership information,
            waivers, and payment are completed securely.
          </p>
        </Container>
      </section>

      {/* Free trial */}
      <section className="bg-[var(--primary)] py-14 text-white sm:py-16">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/60">
                New to United?
              </p>

              <h2 className="mt-3 font-[var(--font-oswald)] text-4xl font-bold uppercase sm:text-5xl">
                Your First Session Is Free.
              </h2>

              <p className="mt-4 max-w-xl text-lg text-white/75">
                Come experience the room before choosing a membership.
              </p>
            </div>

            <Link
              href="https://unitedtf.pushpress.com/landing/plans/plan_d538f50b939a48/eyJzdGFydF9kYXRlIjoiMDkvMDEvMjAyNiJ9/login"
              className="w-fit bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-black transition duration-300 hover:-translate-y-0.5 hover:bg-neutral-200"
            >
              Claim Your Free Trial
            </Link>
          </div>
        </Container>
      </section>

      {/* Financial assistance */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0d0d0d_0%,#171717_55%,#0d0d0d_100%)] py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_50%,rgba(20,95,194,0.14),transparent_35%)]" />

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
                Financial Assistance
              </p>

              <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
                Opportunity for
                <br />
                Every Athlete.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-8 text-neutral-300">
                We believe every athlete who wants to grow should have an
                opportunity to be part of the United room.
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-400">
                Need a scholarship or financial assistance? Please reach out to
                Grace Courtney to discuss available options.
              </p>

              <a
                href="mailto:gracekcourtney27@gmail.com"
                className="mt-8 inline-flex border-b border-white/50 pb-1 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-white"
              >
                Email Grace →
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-[var(--primary)] py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_45%)]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 font-[var(--font-oswald)] text-[14rem] font-bold uppercase leading-none text-white/[0.025] lg:block">
          United
        </div>

        <Container className="relative">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/60">
              United Training Facility
            </p>

            <h2 className="mt-6 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-[0.95] sm:text-5xl lg:text-7xl">
              Different Schools.
              <br />
              Different Backgrounds.
              <br />
              One Room.
            </h2>

            <p className="mt-8 font-[var(--font-oswald)] text-2xl font-bold uppercase sm:text-3xl">
              One Room. One Purpose. United.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}