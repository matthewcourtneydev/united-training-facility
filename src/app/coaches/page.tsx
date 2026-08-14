import Container from "@/components/ui/Container";
import { coaches } from "@/data/coaches";

export default function CoachesPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-black py-20 sm:py-28">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
            Our Coaches
          </p>

          <h1 className="mt-4 max-w-5xl font-[var(--font-oswald)] text-5xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-8xl">
            Experience That
            <br />
            Elevates the Room.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400 sm:text-xl">
            United brings together accomplished wrestlers and coaches committed
            to developing the next generation of athletes on and off the mat.
          </p>
        </Container>
      </section>

      <section className="bg-neutral-950 py-24 sm:py-32">
        <Container>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {coaches.map((coach, index) => {
              const hasCredentials = coach.credentials.length > 0;

              return (
                <article
                  key={coach.slug}
                  className="grid gap-8 py-12 sm:py-16 lg:grid-cols-[120px_0.7fr_1.3fr] lg:gap-12"
                >
                  <p className="font-[var(--font-oswald)] text-5xl font-bold leading-none text-white/10">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--primary-bright)]">
                      United Coach
                    </p>

                    <h2 className="mt-3 font-[var(--font-oswald)] text-3xl font-bold uppercase sm:text-4xl">
                      {coach.name}
                    </h2>
                  </div>

                  <div>
                    {hasCredentials ? (
                      <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                        {coach.credentials.map((credential) => (
                          <li
                            key={credential}
                            className="border-l border-[var(--primary-bright)] pl-4 text-sm leading-6 text-neutral-400"
                          >
                            {credential}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm uppercase tracking-[0.16em] text-neutral-600">
                        Coach profile coming soon.
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--primary)] py-24 sm:py-28">
        <Container>
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/60">
              One Room
            </p>

            <h2 className="mt-5 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl">
              Championship Experience.
              <br />
              United Purpose.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Different backgrounds and experiences come together with one goal:
              helping every athlete in the room get better.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}