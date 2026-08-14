import Container from "@/components/ui/Container";
import { fundamentals } from "@/data/fundamentals";


export default function UnitedWayPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-black py-20 sm:py-28">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
            The United Way
          </p>

          <h1 className="mt-4 max-w-5xl font-[var(--font-oswald)] text-5xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-8xl">
            How We Train.
            <br />
            How We Compete.
            <br />
            How We Live.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400 sm:text-xl">
            The United Way is more than a list of values. These principles
            define how we train, how we treat one another, and the kind of
            people we strive to become.
          </p>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-neutral-950 py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
                Built Through Practice
              </p>

              <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-tight sm:text-5xl">
                One Fundamental.
                <br />
                Every Week.
              </h2>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-neutral-300">
              Each week, we focus on one Fundamental by discussing what it
              means, how it applies to wrestling, and how we can carry it into
              our lives beyond the mat.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-black">
        <Container>
          <div className="divide-y divide-white/10 border-x border-white/10">
            {fundamentals.map((fundamental) => (
              <article
                key={fundamental.number}
                className="group grid gap-6 px-6 py-12 transition-colors hover:bg-neutral-950 sm:px-10 sm:py-16 md:grid-cols-[120px_1fr] lg:grid-cols-[180px_1fr]"
              >
                <p className="font-[var(--font-oswald)] text-6xl font-bold leading-none text-white/10 transition-colors group-hover:text-[var(--primary-bright)] sm:text-7xl">
                  {fundamental.number}
                </p>

                <div>
                  <h2 className="font-[var(--font-oswald)] text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl">
                    {fundamental.title}
                  </h2>

                  <p className="mt-4 text-lg leading-8 text-neutral-400">
                    {fundamental.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[var(--primary)] py-28 sm:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_45%)]" />

        <Container className="relative">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/60">
              The United Standard
            </p>

            <h2 className="mt-6 font-[var(--font-oswald)] text-5xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
              12 Fundamentals.
              <br />
              One Standard.
            </h2>

            <div className="mx-auto my-10 h-px w-24 bg-white/30" />

            <p className="font-[var(--font-oswald)] text-3xl font-bold uppercase sm:text-4xl">
              One Room. One Purpose. United.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}