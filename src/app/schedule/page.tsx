import Image from "next/image";
import Link from "next/link";

import HeroImageMotion from "@/components/motion/HeroImageMotion";
import Reveal from "@/components/motion/Reveal";
import Container from "@/components/ui/Container";
import { weeklySchedule } from "@/data/schedule";
import { assetPath } from "@/lib/assetPath";
import { getUpcomingCalendarEvents } from "@/lib/googleCalendar";

const TIME_ZONE = "America/New_York";

function formatMonth(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    timeZone: TIME_ZONE,
  }).format(date);
}

function formatDay(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    timeZone: TIME_ZONE,
  }).format(date);
}

function formatWeekday(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: TIME_ZONE,
  }).format(date);
}

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: TIME_ZONE,
  }).format(date);
}

function formatEventTime(start: Date, end: Date, allDay: boolean) {
  if (allDay) {
    return "All Day";
  }

  return `${formatTime(start)}–${formatTime(end)}`;
}

export default async function SchedulePage() {
  const upcomingEvents = await getUpcomingCalendarEvents(8);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[500px] overflow-hidden border-b border-white/10 bg-black sm:min-h-[560px] lg:min-h-[620px]">
        {/* Animated hero image */}
        <HeroImageMotion>
          <Image
            src={assetPath("/images/andy-rendos-double.png")}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </HeroImageMotion>

        {/* Left-side readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-transparent" />

        {/* Subtle bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

        {/* Hero content */}
        <Container className="relative z-10 flex min-h-[500px] items-center sm:min-h-[560px] lg:min-h-[620px]">
          <div className="max-w-3xl py-20">
            <Reveal delay={0.08}>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
                Train With Us
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <h1 className="mt-4 font-[var(--font-oswald)] text-5xl font-bold uppercase leading-[0.95] text-white sm:text-6xl lg:text-8xl">
                Show Up.
                <br />
                Put In the Work.
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                All regular practices are held at United Training Facility in
                Athens, Pennsylvania.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Weekly schedule */}
      <section className="bg-neutral-100 py-20 text-black sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
                Weekly Training
              </p>

              <h2 className="mt-4 max-w-xl font-[var(--font-oswald)] text-4xl font-bold uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
                Regular Practice Schedule
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-neutral-600 sm:text-lg">
                Consistent training, focused coaching, and one room committed
                to getting better.
              </p>
            </div>

            <div className="border-y border-black/10">
              {weeklySchedule.map((practice) => (
                <article
                  key={practice.day}
                  className="grid gap-4 border-b border-black/10 py-7 last:border-b-0 md:grid-cols-[0.7fr_0.7fr_1.4fr] md:items-center"
                >
                  <h3 className="font-[var(--font-oswald)] text-3xl font-bold uppercase">
                    {practice.day}
                  </h3>

                  <p className="text-base font-bold text-black">
                    {practice.time}
                  </p>

                  <p className="text-sm leading-6 text-neutral-600">
                    {practice.groups.join(" • ")}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Live calendar */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0d0d0d_0%,#171717_55%,#0d0d0d_100%)] py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(20,95,194,0.15),transparent_35%)]" />

        <div className="pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 font-[var(--font-oswald)] text-[13rem] font-bold uppercase leading-none text-white/[0.02] lg:block">
          United
        </div>

        <Container className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
                United Calendar
              </p>

              <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
                Upcoming
                <br />
                at United
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-neutral-400 sm:text-lg">
                Practices, camps, clinics, special events, and schedule changes
                are pulled directly from the United Training Facility calendar.
              </p>
            </div>

            <div>
              {upcomingEvents.length > 0 ? (
                <div className="border-y border-white/10">
                  {upcomingEvents.map((event) => (
                    <article
                      key={event.id}
                      className="group grid gap-5 border-b border-white/10 py-6 last:border-b-0 sm:grid-cols-[90px_1fr_auto] sm:items-center"
                    >
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary-bright)]">
                          {formatMonth(event.start)}
                        </p>

                        <p className="font-[var(--font-oswald)] text-5xl font-bold leading-none text-white/20 transition-colors duration-300 group-hover:text-[var(--primary-bright)]">
                          {formatDay(event.start)}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">
                          {formatWeekday(event.start)}
                        </p>

                        <h3 className="mt-1 font-[var(--font-oswald)] text-2xl font-bold uppercase sm:text-3xl">
                          {event.title}
                        </h3>

                        {event.location && (
                          <p className="mt-2 text-sm text-neutral-500">
                            {event.location}
                          </p>
                        )}
                      </div>

                      <p className="text-sm font-bold uppercase tracking-[0.1em] text-neutral-300">
                        {formatEventTime(
                          event.start,
                          event.end,
                          event.allDay,
                        )}
                      </p>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="border-y border-white/10 py-10">
                  <p className="text-lg text-neutral-400">
                    No upcoming calendar events are currently scheduled.
                  </p>
                </div>
              )}

              <p className="mt-6 text-sm leading-6 text-neutral-500">
                Schedule updates are pulled automatically from the United
                Training Facility Google Calendar.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Location */}
      <section className="relative overflow-hidden bg-[var(--primary)] py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(255,255,255,0.08),transparent_40%)]" />

        <Container className="relative z-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/60">
                Location
              </p>

              <h2 className="mt-3 font-[var(--font-oswald)] text-3xl font-bold uppercase sm:text-4xl">
                310 S Main St • Athens, PA 18810
              </h2>

              <p className="mt-3 text-sm text-white/70">
                Parking is available behind the building.
              </p>
            </div>

            <Link
              href="https://www.google.com/maps/search/?api=1&query=310+S+Main+St+Athens+PA+18810"
              target="_blank"
              className="w-fit bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-black transition duration-300 hover:-translate-y-0.5 hover:bg-neutral-200"
            >
              Get Directions ↗
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}