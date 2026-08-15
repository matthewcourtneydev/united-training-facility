import Container from "@/components/ui/Container";
import { coaches } from "@/data/coaches";
import Image from "next/image";

const featuredCoaches = coaches.filter((coach) => coach.credentials.length > 0);

const upcomingCoaches = coaches.filter(
  (coach) => coach.credentials.length === 0
);

export default function CoachesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[520px] overflow-hidden border-b border-white/10 bg-black sm:min-h-[600px] lg:min-h-[680px]">
        <img
          src="/images/ncaa-arena.jpg"
          alt="NCAA Division I Wrestling Championships arena"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Overall image treatment */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Dark field behind headline */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/5" />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

        <Container className="relative flex min-h-[520px] items-center py-20 sm:min-h-[600px] sm:py-24 lg:min-h-[680px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
              Our Coaches
            </p>

            <h1 className="mt-4 font-[var(--font-oswald)] text-5xl font-bold uppercase leading-[0.95] text-white sm:text-6xl lg:text-8xl">
              Experience That
              <br />
              Elevates the Room.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              United brings together accomplished wrestlers and coaches
              committed to developing the next generation of athletes on and off
              the mat.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured coaches */}
      <section className="bg-neutral-100 py-20 text-black sm:py-24">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
              Featured Coaches
            </p>

            <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
              Proven at the Highest Levels.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
              Championship experience, collegiate wrestling, and years of
              coaching come together in one room.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredCoaches.map((coach, index) => (
              <article
                key={coach.slug}
                className="group overflow-hidden border border-black/10 bg-white shadow-[0_10px_24px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(0,0,0,0.12)]"
              >
                {/* Coach photo */}
                <div className="relative aspect-[5/4] overflow-hidden bg-[#080b10]">
                  {/* United blue / black background */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(20,95,194,0.42)_0%,rgba(10,45,90,0.28)_30%,rgba(5,12,22,0.85)_65%,#050505_100%)]" />

                  {/* Soft blue glow */}
                  <div className="absolute left-1/2 top-1/2 h-[70%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary-bright)]/15 blur-3xl" />

                  {/* Coach headshot */}
                  <Image
                    src={coach.image}
                    alt={`${coach.name} - United Training Facility coach`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="z-10 object-contain object-center transition-transform duration-500 group-hover:scale-[1.015]"
                  />

                  {/* Blend bottom into card */}
                  <div className="absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-black/30 to-transparent" />

                </div>

                {/* Coach details */}
                <div className="p-7 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--primary-bright)]">
                    {coach.role}
                  </p>

                  <h2 className="mt-2 font-[var(--font-oswald)] text-3xl font-bold uppercase leading-tight sm:text-4xl">
                    {coach.name}
                  </h2>

                  <div className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {coach.credentials.map((credential) => (
                      <p
                        key={credential}
                        className="border-l-2 border-[var(--primary-bright)] pl-4 text-sm leading-6 text-neutral-600"
                      >
                        {credential}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Coaching standard */}
      <section className="relative overflow-hidden bg-[var(--primary)] py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_45%,rgba(255,255,255,0.10),transparent_38%)]" />

        <div className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 font-[var(--font-oswald)] text-[14rem] font-bold uppercase leading-none text-white/[0.03] lg:block">
          United
        </div>

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/60">
                One Room
              </p>

              <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
                Championship Experience.
                <br />
                United Purpose.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-white/80">
              Different backgrounds and experiences come together with one goal:
              helping every athlete in the room get better.
            </p>
          </div>
        </Container>
      </section>

      {/* Additional coaches */}
      <section className="bg-neutral-100 py-20 text-black sm:py-24">
        <Container>
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
              More United Coaches
            </p>

            <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase sm:text-5xl">
              More Profiles Coming Soon.
            </h2>
          </div>

          <div className="grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {upcomingCoaches.map((coach, index) => (
              <article
                key={coach.slug}
                className="border-b border-r border-black/10 bg-white p-7 sm:p-8"
              >
                <p className="font-[var(--font-oswald)] text-4xl font-bold text-neutral-200">
                  {String(featuredCoaches.length + index + 1).padStart(2, "0")}
                </p>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-[var(--primary-bright)]">
                  United Coach
                </p>

                <h3 className="mt-3 font-[var(--font-oswald)] text-2xl font-bold uppercase">
                  {coach.name}
                </h3>

                <p className="mt-5 text-sm uppercase tracking-[0.14em] text-neutral-400">
                  Coach profile coming soon.
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
