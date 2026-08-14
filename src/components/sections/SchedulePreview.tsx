import Link from "next/link";
import { weeklySchedule } from "@/data/schedule";
import Container from "@/components/ui/Container";

const upcomingEvents = [
  {
    date: "Aug 16",
    title: "Sunday Practice",
    time: "5:00–6:45 PM",
  },
  {
    date: "Aug 17",
    title: "Monday Practice",
    time: "6:00–7:45 PM",
  },
  {
    date: "Aug 19",
    title: "Wednesday Practice",
    time: "6:00–7:45 PM",
  },
];

export default function SchedulePreview() {
  return (
    <section className="border-b border-white/10 bg-neutral-950 py-24 sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
              Train With Us
            </p>

            <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl">
              Weekly Schedule
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-400">
              All practices are held at United Training Facility, 310 S Main St,
              Athens, Pennsylvania.
            </p>

            <div className="mt-10 border-y border-white/10">
              {weeklySchedule.map((practice) => (
                <div
                  key={practice.day}
                  className="grid grid-cols-[1fr_auto] gap-6 border-b border-white/10 py-6 last:border-b-0"
                >
                  <div>
                    <p className="font-[var(--font-oswald)] text-2xl font-bold uppercase">
                      {practice.day}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-neutral-500">
                      {practice.groups.join(" • ")}
                    </p>
                  </div>

                  <p className="self-center text-sm font-semibold uppercase tracking-[0.12em] text-neutral-300 sm:text-base">
                    {practice.time}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/schedule"
              className="mt-10 inline-flex border-b border-white pb-1 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-[var(--primary-bright)] hover:text-[var(--primary-bright)]"
            >
              View Full Schedule →
            </Link>
          </div>

          <div>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-neutral-500">
                  Calendar
                </p>

                <h3 className="mt-3 font-[var(--font-oswald)] text-3xl font-bold uppercase sm:text-4xl">
                  Upcoming at United
                </h3>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10">
              {upcomingEvents.map((event) => (
                <article
                  key={`${event.date}-${event.title}`}
                  className="grid gap-4 border-b border-white/10 py-7 sm:grid-cols-[110px_1fr]"
                >
                  <p className="font-[var(--font-oswald)] text-xl font-bold uppercase text-[var(--primary-bright)]">
                    {event.date}
                  </p>

                  <div>
                    <h4 className="font-[var(--font-oswald)] text-2xl font-bold uppercase">
                      {event.title}
                    </h4>

                    <p className="mt-2 text-sm uppercase tracking-[0.12em] text-neutral-500">
                      {event.time}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-6 text-sm leading-6 text-neutral-500">
              Upcoming events will be pulled automatically from the United
              Training Facility Google Calendar.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
