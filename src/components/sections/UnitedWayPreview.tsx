import Link from "next/link";

import Container from "@/components/ui/Container";
import { fundamentals } from "@/data/fundamentals";

const featuredFundamentals = fundamentals.slice(0, 4);

export default function UnitedWayPreview() {
  return (
    <section className="bg-neutral-100 py-24 text-black sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
            The United Way
          </p>

          <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-tight sm:text-5xl">
            More Than Wrestling.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
            The United Way defines how we train, how we treat one another, and
            the kind of people we strive to become.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredFundamentals.map((fundamental) => (
            <article
              key={fundamental.number}
              className="group flex min-h-[300px] flex-col border border-black/5 bg-white p-7 shadow-[0_12px_30px_rgba(0,0,0,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.15)]"
            >
              <p className="font-[var(--font-oswald)] text-4xl font-bold text-[var(--primary-bright)]">
                {fundamental.number}
              </p>

              <div className="mt-3 h-[2px] w-10 bg-[var(--primary-bright)]" />

              <h3 className="mt-6 font-[var(--font-oswald)] text-2xl font-bold uppercase leading-tight text-black">
                {fundamental.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-neutral-600">
                {fundamental.description}
              </p>

              <span className="mt-auto pt-8 text-xl text-[var(--primary-bright)] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/united-way"
            className="inline-flex border-b border-[var(--primary-bright)] pb-1 text-sm font-bold uppercase tracking-[0.16em] text-[var(--primary-bright)] transition hover:text-[var(--primary)]"
          >
            Explore All 12 Fundamentals →
          </Link>
        </div>
      </Container>
    </section>
  );
}