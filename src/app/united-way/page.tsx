import Image from "next/image";

import Reveal from "@/components/motion/Reveal";
import Container from "@/components/ui/Container";
import { fundamentals } from "@/data/fundamentals";
import { assetPath } from "@/lib/assetPath";

export default function UnitedWayPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-black py-20 sm:py-28 lg:py-32">
        {/* Blue atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_45%,rgba(20,95,194,0.18),transparent_30%)]" />

        {/* Giant 12 */}
        <div className="pointer-events-none absolute right-[4%] top-1/2 z-[1] hidden -translate-y-1/2 font-[var(--font-oswald)] text-[14rem] font-bold leading-none text-white/[0.035] md:block lg:right-[8%] lg:text-[24rem] lg:text-white/[0.04]">
          <div className="animate-[watermarkFade_1.1s_ease-out_both]">12</div>
        </div>

        {/* Eagle watermark */}
        <div className="pointer-events-none absolute right-[1%] top-[56%] z-[2] hidden h-[260px] w-[340px] -translate-y-1/2 md:block lg:right-[4%] lg:top-[55%] lg:h-[380px] lg:w-[500px]">
          <div className="relative h-full w-full animate-[watermarkFade_1.25s_ease-out_both]">
            <Image
              src={assetPath("/images/logo-no-text.png")}
              alt=""
              fill
              sizes="(min-width: 1024px) 500px, 340px"
              className="scale-[1.15] object-contain opacity-[0.11] brightness-110 lg:scale-[1.25] lg:opacity-[0.14]"
            />
          </div>
        </div>

        <Container className="relative z-10">
          <Reveal delay={0.08}>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
              The United Way
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <h1 className="mt-4 max-w-5xl font-[var(--font-oswald)] text-5xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-8xl">
              How We Train.
              <br />
              How We Compete.
              <br />
              <span className="text-[var(--primary-bright)]">How We Live.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400 sm:text-xl">
              The United Way is more than a list of values. These principles
              define how we train, how we treat one another, and the kind of
              people we strive to become.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Weekly fundamental */}
      <section className="relative overflow-hidden bg-[var(--primary)] py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(255,255,255,0.10),transparent_40%)]" />

        {/* Decorative United word */}
        <div className="pointer-events-none absolute -right-6 top-1/2 hidden -translate-y-1/2 font-[var(--font-oswald)] text-[9rem] font-bold uppercase leading-none text-white/[0.02] md:block lg:-right-8 lg:text-[13rem] lg:text-white/[0.025]">
          United
        </div>

        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/60">
                Built Through Practice
              </p>

              <h2 className="mt-4 font-[var(--font-oswald)] text-5xl font-bold uppercase leading-[0.95] sm:text-6xl">
                One Fundamental.
                <br />
                Every Month.
              </h2>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-white/80">
              Each month, we focus on one fundamental by discussing what it
              means, how it applies to wrestling, and how we can carry it into
              our lives beyond the mat.
            </p>
          </div>
        </Container>
      </section>

      {/* Wrestling photo */}
      <section className="relative h-[360px] overflow-hidden sm:h-[460px] lg:h-[540px]">
        <Image
          src={assetPath("/images/united-hero-image.jpg")}
          alt="Wrestlers competing during a match"
          fill
          sizes="100vw"
          className="object-cover object-center transition-transform duration-[1400ms] ease-out hover:scale-[1.015]"
        />

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

        <Container className="relative z-10 flex h-full items-end pb-10 sm:pb-14">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
              The Standard
            </p>

            <p className="mt-3 font-[var(--font-oswald)] text-3xl font-bold uppercase leading-[0.98] text-white sm:text-4xl lg:text-5xl">
              Built in Practice.
              <br />
              Proven in Competition.
            </p>
          </div>
        </Container>
      </section>

      {/* Fundamentals */}
      <section className="bg-neutral-100 py-20 text-black sm:py-24">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
              The 12 Fundamentals
            </p>

            <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
              The Standard We Carry.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
              These principles shape the way we approach wrestling, our
              teammates, and everything beyond the room.
            </p>
          </div>

          <div className="grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {fundamentals.map((fundamental) => (
              <article
                key={fundamental.number}
                className="group min-h-[260px] border-b border-r border-black/10 bg-white p-7 transition duration-300 hover:-translate-y-0.5 hover:bg-neutral-50 hover:shadow-[0_12px_26px_rgba(0,0,0,0.07)] sm:p-8"
              >
                <p className="font-[var(--font-oswald)] text-5xl font-bold leading-none text-neutral-300 transition-colors duration-300 group-hover:text-[var(--primary-bright)]">
                  {fundamental.number}
                </p>

                <div className="mt-5 h-[2px] w-10 bg-neutral-200 transition-colors duration-300 group-hover:bg-[var(--primary-bright)]" />

                <h3 className="mt-6 font-[var(--font-oswald)] text-2xl font-bold uppercase leading-tight text-neutral-700 transition-colors duration-300 group-hover:text-black sm:text-3xl">
                  {fundamental.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-500 transition-colors duration-300 group-hover:text-neutral-700">
                  {fundamental.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing statement */}
      <section className="relative overflow-hidden bg-[var(--primary)] py-24 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_45%)]" />

        {/* Eagle watermark */}
        <div className="pointer-events-none absolute right-[2%] top-1/2 z-[1] hidden h-[240px] w-[320px] -translate-y-1/2 md:block lg:right-[5%] lg:h-[360px] lg:w-[460px]">
          <Image
            src={assetPath("/images/logo-no-text.png")}
            alt=""
            fill
            sizes="(min-width: 1024px) 460px, 320px"
            className="scale-[1.1] object-contain opacity-[0.06] brightness-110 lg:scale-[1.2] lg:opacity-[0.08]"
          />
        </div>

        <Container className="relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/60">
              The United Standard
            </p>

            <h2 className="mt-6 font-[var(--font-oswald)] text-5xl font-bold uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              12 Fundamentals.
              <br />
              One Standard.
            </h2>

            <div className="mx-auto my-10 h-px w-24 bg-white/30" />

            <p className="font-[var(--font-oswald)] text-3xl font-bold uppercase text-white sm:text-4xl">
              One Room. One Purpose. United.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
