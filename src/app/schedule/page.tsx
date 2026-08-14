import Link from "next/link";

import Container from "@/components/ui/Container";
import { weeklySchedule } from "@/data/schedule";

const upcomingEvents = [
  {
    month: "Aug",
    day: "16",
    title: "Sunday Practice",
    time: "5:00–6:45 PM",
    location: "United Training Facility",
  },
  {
    month: "Aug",
    day: "17",
    title: "Monday Practice",
    time: "6:00–7:45 PM",
    location: "United Training Facility",
  },
  {
    month: "Aug",
    day: "19",
    title: "Wednesday Practice",
    time: "6:00–7:45 PM",
    location: "United Training Facility",
  },
];

export default function SchedulePage() {
  return (
    <>
      <section className="border-b border-white/10 bg-black py-20 sm:py-28">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
            Train With Us
          </p>

          <h1 className="mt-4 max-w-5xl font-[var(--font-oswald)] text-5xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-8xl">
            Show Up.
            <br />
            Put In the Work.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400 sm:text-xl">
            All regular practices are held at United Training Facility in
            Athens, Pennsylvania.
          </p>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-neutral-950 py-24 sm:py-32">
        <Container>
          <div className="mb-14">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
              Weekly Training
            </p>

            <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase sm:text-5xl">
              Regular Practice Schedule
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {weeklySchedule.map((practice) => (
              <article
                key={practice.day}
                className="grid gap-6 py-9 md:grid-cols-[0.7fr_0.7fr_1.3fr] md:items-center"
              >
                <h3 className="font-[var(--font-oswald)] text-3xl font-bold uppercase sm:text-4xl">
                  {practice.day}
                </h3>

                <p className="text-lg font-semibold text-white">
                  {practice.time}
                </p>

                <p className="text-sm leading-7 text-neutral-400">
                  {practice.groups.join(" • ")}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-black py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
                Coming Soon
              </p>

              <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-tight sm:text-5xl">
                Saturday Strength & Conditioning
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-neutral-300">
                Strength circuits, cardio, and athletic development sessions
                designed to complement wrestling training.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-neutral-950 py-24 sm:py-32">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
                United Calendar
              </p>

              <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase sm:text-5xl">
                Upcoming at United
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-400">
                Check here for practices, special events, camps, clinics, and
                schedule changes.
              </p>
            </div>
          </div>

          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {upcomingEvents.map((event) => (
              <article
                key={`${event.month}-${event.day}-${event.title}`}
                className="grid gap-6 py-8 sm:grid-cols-[100px_1fr_auto] sm:items-center"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary-bright)]">
                    {event.month}
                  </p>

                  <p className="font-[var(--font-oswald)] text-4xl font-bold">
                    {event.day}
                  </p>
                </div>

                <div>
                  <h3 className="font-[var(--font-oswald)] text-2xl font-bold uppercase">
                    {event.title}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-500">
                    {event.location}
                  </p>
                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-300">
                  {event.time}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm leading-6 text-neutral-500">
            Calendar events will update automatically from the United Training
            Facility Google Calendar.
          </p>
        </Container>
      </section>

      <section className="bg-[var(--primary)] py-20 sm:py-24">
        <Container>
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
              className="w-fit bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-neutral-200"
            >
              Get Directions ↗
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}