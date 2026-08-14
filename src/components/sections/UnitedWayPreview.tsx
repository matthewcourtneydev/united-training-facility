import Link from "next/link";
import { fundamentals } from "@/data/fundamentals";
import Container from "@/components/ui/Container";

const featuredFundamentals = fundamentals.filter((fundamental) =>
  ["01", "05", "09", "11"].includes(fundamental.number),
);

export default function UnitedWayPreview() {
  return (
    <section className="border-b border-white/10 bg-black py-24 sm:py-32">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
            The United Way
          </p>

          <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl">
            More Than Wrestling.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            The United Way defines how we train, how we treat one another, and
            the kind of people we strive to become.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
        {featuredFundamentals.map((fundamental) => (
            <article
              key={fundamental.number}
              className="bg-black p-8 transition hover:bg-neutral-950 sm:p-10"
            >
              <p className="font-[var(--font-oswald)] text-5xl font-bold text-white/15">
                {fundamental.number}
              </p>

              <h3 className="mt-6 font-[var(--font-oswald)] text-2xl font-bold uppercase">
                {fundamental.title}
              </h3>

              <p className="mt-3 text-base leading-7 text-neutral-400">
                {fundamental.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/united-way"
            className="inline-flex border-b border-white pb-1 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-[var(--primary-bright)] hover:text-[var(--primary-bright)]"
          >
            Explore All 12 Fundamentals →
          </Link>
        </div>
      </Container>
    </section>
  );
}