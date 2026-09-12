import Link from "next/link";

import Container from "@/components/ui/Container";
import { weeklySchedule } from "@/data/schedule";
import { getUpcomingCalendarEvents } from "@/lib/googleCalendar";

export const dynamic = "force-dynamic";

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

export default async function SchedulePreview() {
  const upcomingEvents = await getUpcomingCalendarEvents(3);

  return (
    <section className="border-y border-white/10 bg-[linear-gradient(135deg,#111_0%,#181818_50%,#101010_100%)] py-20 sm:py-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-0">
          <div className="lg:pr-14">
            <div className="flex items-center gap-3">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
                Train With Us
              </p>

              <span className="hidden h-px w-10 bg-white/30 sm:block" />
            </div>

            <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-tight sm:text-5xl">
              Weekly Schedule
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
              All practices are held at United Training Facility, 310 S Main St,
              Athens, Pennsylvania.
            </p>

            <div className="mt-8 border-t border-white/10">
              {weeklySchedule.map((practice) => (
                <div
                  key={practice.day}
                  className="grid gap-3 border-b border-white/10 py-5 sm:grid-cols-[1fr_auto] sm:items-center"
                >
                  <div>
                    <p className="font-[var(--font-oswald)] text-2xl font-bold uppercase text-white">
                      {practice.day}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-neutral-500">
                      {practice.groups.join(" • ")}
                    </p>
                  </div>

                  <p className="text-sm font-bold uppercase tracking-[0.08em] text-white">
                    {practice.time}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/schedule"
              className="mt-8 inline-flex border-b border-[var(--primary-bright)] pb-1 text-sm font-bold uppercase tracking-[0.16em] text-[var(--primary-bright)] transition hover:text-white"
            >
              View Full Schedule →
            </Link>
          </div>

          <div className="border-white/10 lg:border-l lg:pl-14">
            <div className="flex items-center gap-3">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-neutral-400">
                Calendar
              </p>

              <span className="hidden h-px w-10 bg-white/30 sm:block" />
            </div>

            <h3 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-tight sm:text-5xl">
              Upcoming at United
            </h3>

            <div className="mt-8 border-t border-white/10">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => (
                  <article
                    key={event.id}
                    className="grid grid-cols-[70px_1fr] gap-5 border-b border-white/10 py-5"
                  >
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary-bright)]">
                        {formatMonth(event.start)}
                      </p>

                      <p className="font-[var(--font-oswald)] text-3xl font-bold leading-none text-[var(--primary-bright)]">
                        {formatDay(event.start)}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-[var(--font-oswald)] text-xl font-bold uppercase text-white">
                        {event.title}
                      </h4>

                      <p className="mt-1 text-sm text-neutral-500">
                        {formatEventTime(
                          event.start,
                          event.end,
                          event.allDay,
                        )}
                      </p>

                      {event.location && (
                        <p className="mt-1 text-xs text-neutral-600">
                          {event.location}
                        </p>
                      )}
                    </div>
                  </article>
                ))
              ) : (
                <div className="border-b border-white/10 py-6">
                  <p className="text-sm text-neutral-500">
                    No upcoming calendar events are currently scheduled.
                  </p>
                </div>
              )}
            </div>

            <Link
              href="/schedule"
              className="mt-8 inline-flex border-b border-[var(--primary-bright)] pb-1 text-sm font-bold uppercase tracking-[0.16em] text-[var(--primary-bright)] transition hover:text-white"
            >
              View Calendar →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}