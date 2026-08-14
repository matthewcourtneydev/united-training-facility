import Link from "next/link";
import { coaches } from "@/data/coaches";
import Container from "@/components/ui/Container";

const featuredCoaches = coaches.filter((coach) => coach.credentials.length > 0);

export default function CoachesPreview() {
  return (
    <section className="border-b border-white/10 bg-black py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
              Our Coaches
            </p>

            <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl">
              Proven Experience.
              <br />
              Shared With The Room.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
              United brings together coaches with championship-level experience
              who are committed to helping athletes grow on and off the mat.
            </p>
          </div>

          <Link
            href="/coaches"
            className="inline-flex w-fit border-b border-white pb-1 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-[var(--primary-bright)] hover:text-[var(--primary-bright)]"
          >
            Meet All Coaches →
          </Link>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
          {featuredCoaches.map((coach) => (
            <article
              key={coach.name}
              className="bg-black p-8 transition hover:bg-neutral-950 sm:p-10"
            >
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-neutral-600">
                United Coach
              </p>

              <h3 className="mt-4 font-[var(--font-oswald)] text-3xl font-bold uppercase">
                {coach.name}
              </h3>

              <ul className="mt-7 space-y-3">
                {coach.credentials.map((credential) => (
                  <li
                    key={credential}
                    className="border-l border-[var(--primary-bright)] pl-4 text-sm leading-6 text-neutral-400"
                  >
                    {credential}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
