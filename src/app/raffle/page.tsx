import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/motion/Reveal";
import Container from "@/components/ui/Container";
import RaffleCountdown from "./RaffleCountdown";
import RaffleOrderForm from "./RaffleOrderForm";

import { raffleEvent, rafflePrizes, raffleDetails } from "@/data/raffle";

import { assetPath } from "@/lib/assetPath";

export const metadata: Metadata = {
  title: "Kickoff Party & Raffle",
  description:
    "Join United Training Facility for our November 1 kickoff party and community raffle in Sayre, Pennsylvania. Explore prizes and support United wrestlers.",
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export default function RafflePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-black py-24 text-white sm:py-28 lg:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_45%,rgba(20,95,194,0.2),transparent_40%)]" />

        {/* Eagle watermark */}
        <div className="pointer-events-none absolute right-[1%] top-1/2 hidden h-[320px] w-[420px] -translate-y-1/2 md:block lg:right-[5%] lg:h-[480px] lg:w-[580px]">
          <Image
            src={assetPath("/images/logo-no-text.png")}
            alt=""
            fill
            sizes="(min-width: 1024px) 580px, 420px"
            className="object-contain opacity-[0.1] brightness-110"
          />
        </div>

        <Container className="relative z-10">
          <Reveal delay={0.08}>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
              United Training Facility Presents
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <h1 className="mt-5 max-w-5xl font-[var(--font-oswald)] text-5xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-8xl">
              One Club.
              <br />
              One Community.
              <br />
              <span className="text-[var(--primary-bright)]">One United.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400 sm:text-xl">
              Join us for the United Kickoff Party & Raffle. An afternoon
              bringing our wrestling families and community together to support
              the next generation of United athletes.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#prizes"
                className="bg-[var(--primary)] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                Raffle Details →
              </a>

              <a
                href="#event-details"
                className="border border-white/30 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition duration-300 hover:border-white hover:bg-white/10"
              >
                Event Details
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Countdown */}
      <section className="relative overflow-hidden bg-[var(--primary)] py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_55%)]" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/60">
                The Countdown Is On
              </p>

              <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase sm:text-5xl lg:text-6xl">
                Until We Come Together.
              </h2>
            </div>

            <RaffleCountdown />
          </div>
        </Container>
      </section>

      {/* Fundraiser introduction */}
      <section className="bg-neutral-100 py-20 text-black sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
                More Than a Raffle
              </p>

              <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
                Supporting the
                <br />
                United Family.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-neutral-600">
                {raffleEvent.description}
              </p>

              <p className="mt-5 text-base leading-7 text-neutral-500">
                {raffleEvent.fundraisingPurpose}
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-px bg-black/10 sm:grid-cols-3">
            <div className="bg-white p-8 text-center">
              <p className="font-[var(--font-oswald)] text-5xl font-bold text-[var(--primary)]">
                {formatCurrency(raffleDetails.ticketPrice)}
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                Per Ticket
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <p className="font-[var(--font-oswald)] text-5xl font-bold text-[var(--primary)]">
                {raffleDetails.prizeCount}
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                Prize Drawings
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <p className="font-[var(--font-oswald)] text-5xl font-bold text-[var(--primary)]">
                $2,000+
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                Advertised Prize Value
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Prize showcase */}
      <section
        id="prizes"
        className="relative overflow-hidden bg-[linear-gradient(135deg,#061b3e_0%,#103e80_50%,#071e43_100%)] py-20 text-white sm:py-24"
      >
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(45,135,255,0.22),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_90%,rgba(0,0,0,0.28),transparent_45%)]" />

        <Container className="relative z-10">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#8fc5ff]">
              The Raffle
            </p>

            <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
              Six Prizes.
              <br />
              Six Chances to Win.
            </h2>

            <p className="mt-5 text-base leading-7 text-blue-100/75 sm:text-lg">
              Explore the prize packages donated in support of United Training
              Facility. Choose the drawing you want to enter.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rafflePrizes.map((prize) => (
              <article
                key={prize.id}
                className="group flex flex-col border border-blue-200/15 bg-[#061a38]/80 p-7 shadow-[0_12px_35px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:border-[#8fc5ff]/60 hover:bg-[#0a2853] hover:shadow-[0_18px_45px_rgba(0,0,0,0.22)] sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="font-[var(--font-oswald)] text-5xl font-bold leading-none text-blue-300/25 transition-colors duration-300 group-hover:text-[#8fc5ff]">
                    {String(prize.id).padStart(2, "0")}
                  </p>

                  <span className="border border-blue-200/20 bg-blue-400/[0.08] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-blue-100">
                    {formatCurrency(prize.value)} Value
                  </span>
                </div>

                <div className="mt-10 h-[2px] w-12 bg-[#60a5fa] transition-all duration-300 group-hover:w-20" />

                <h3 className="mt-6 font-[var(--font-oswald)] text-2xl font-bold uppercase leading-tight text-white sm:text-3xl">
                  {prize.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-blue-100/70">
                  {prize.description}
                </p>

                {prize.contents.length > 0 && (
                  <ul className="mt-6 space-y-3 border-t border-blue-200/15 pt-6">
                    {prize.contents.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-blue-100/75"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#60a5fa]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto pt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8fc5ff]">
                    Prize Drawing #{prize.id}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Event details */}
      <section
        id="event-details"
        className="relative overflow-hidden bg-black py-20 text-white sm:py-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(20,95,194,0.15),transparent_40%)]" />

        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
                Save the Date
              </p>

              <h2 className="mt-4 font-[var(--font-oswald)] text-5xl font-bold uppercase leading-[0.95] sm:text-6xl">
                The United
                <br />
                Kickoff Party.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-neutral-400">
                Come together with the United wrestling community for an
                afternoon supporting the club and celebrating the athletes who
                make it special.
              </p>
            </div>

            <div className="border-y border-white/10">
              <div className="border-b border-white/10 py-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary-bright)]">
                  Date
                </p>

                <p className="mt-2 font-[var(--font-oswald)] text-3xl font-bold uppercase">
                  Sunday, November 1, 2026
                </p>
              </div>

              <div className="border-b border-white/10 py-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary-bright)]">
                  Time
                </p>

                <p className="mt-2 font-[var(--font-oswald)] text-3xl font-bold uppercase">
                  {raffleEvent.startTime} – {raffleEvent.endTime}
                </p>
              </div>

              <div className="py-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary-bright)]">
                  Location
                </p>

                <p className="mt-2 font-[var(--font-oswald)] text-3xl font-bold uppercase">
                  {raffleEvent.venue}
                </p>

                <p className="mt-2 text-sm text-neutral-400">
                  {raffleEvent.address}, {raffleEvent.city}, {raffleEvent.state}
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=117+S+Elmer+Avenue+Sayre+PA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex border-b border-[var(--primary-bright)] pb-1 text-sm font-bold uppercase tracking-[0.14em] text-[var(--primary-bright)] transition hover:text-white"
                >
                  Get Directions ↗
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing raffle CTA */}
      <section className="relative overflow-hidden bg-[var(--primary)] py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_50%)]" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/60">
              Support the United Family
            </p>

            <h2 className="mt-5 font-[var(--font-oswald)] text-5xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
              Every Ticket.
              <br />
              Every Wrestler.
              <br />
              <span className="text-white/70">One United.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Your support helps United Training Facility provide discounted
              gear for our wrestlers. Select your prize drawings, send your
              payment to Coach Courtney, and receive a confirmation text once
              your entries are recorded.
            </p>

            <a
              href="#raffle-order"
              className="mt-9 inline-flex bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition duration-300 hover:-translate-y-0.5 hover:bg-neutral-200"
            >
              Select Your Raffle Tickets →
            </a>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-white/60">
              $10 Per Ticket · Six Prize Drawings
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
