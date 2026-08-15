import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import Container from "@/components/ui/Container";
import { coaches } from "@/data/coaches";

const featuredCoaches = coaches.filter((coach) => coach.featured);

export default function CoachesPreview() {
  return (
    <section className="bg-neutral-100 py-14 text-black sm:py-16 lg:py-18">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.5fr_1.5fr] lg:items-center lg:gap-10">
          <div className="max-w-xs">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
              Our Coaches
            </p>

            <h2 className="mt-4 font-[var(--font-oswald)] text-3xl font-bold uppercase leading-[1.02] sm:text-4xl lg:text-[2.65rem]">
              Proven Experience.
              <br />
              Shared With the Room.
            </h2>

            <p className="mt-5 text-sm leading-6 text-neutral-600 sm:text-base">
              United brings together coaches with championship-level experience
              who are committed to helping athletes grow on and off the mat.
            </p>

            <Link
              href="/coaches"
              className="mt-7 inline-flex border-b border-[var(--primary-bright)] pb-1 text-sm font-bold uppercase tracking-[0.16em] text-[var(--primary-bright)] transition hover:text-[var(--primary)]"
            >
              Meet All Coaches →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
            {featuredCoaches.map((coach) => (
              <article
                key={coach.slug}
                className="group relative aspect-[3/5] overflow-hidden border border-black/5 bg-neutral-950 shadow-[0_10px_24px_rgba(0,0,0,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(0,0,0,0.16)]"
              >
                {/* Coach image */}
                <Image
                  src={assetPath(coach.image)}
                  alt={`${coach.name} - United Training Facility coach`}
                  fill
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 40vw, 80vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
                />

                {/* Dark gradient behind text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                {/* Coach details */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary-bright)] sm:text-xs">
                    {coach.role}
                  </p>

                  <h3 className="mt-2 font-[var(--font-oswald)] text-xl font-bold uppercase leading-tight text-white sm:text-2xl">
                    {coach.name}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
