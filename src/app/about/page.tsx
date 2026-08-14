import Container from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-black py-20 sm:py-28">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
            About United
          </p>

          <h1 className="mt-4 max-w-5xl font-[var(--font-oswald)] text-5xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-8xl">
            United by Wrestling.
            <br />
            Built for More.
          </h1>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-neutral-950 py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
                Our Mission
              </p>

              <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase sm:text-5xl">
                Excellence On and Off the Mat.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-neutral-300">
              <p>
                United Training Facility exists to unite wrestlers from across
                our region in pursuit of excellence on and off the mat.
              </p>

              <p>
                Through disciplined training, positive coaching, and a culture
                built on respect, accountability, and continuous growth, we
                strive to develop confident athletes and outstanding people.
                Wrestling is our vehicle, but character is our destination.
              </p>

              <p>
                Every practice is an opportunity to improve not only as a
                competitor, but as a teammate, leader, and person.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-black py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
                Our Vision
              </p>

              <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase sm:text-5xl">
                Building a Lasting Legacy.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-neutral-300">
              <p>
                To become the premier wrestling training environment in the
                Northern Tier of Pennsylvania and Southern Tier of New York,
                where athletes of every background come together to elevate one
                another.
              </p>

              <p>
                We envision a community known not only for producing
                exceptional wrestlers, but for developing exceptional people.
                Our legacy will not be measured solely by championships, but by
                the character, leadership, and relationships our athletes carry
                with them long after they leave the mat.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-neutral-950 py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
                Our Story
              </p>

              <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase sm:text-5xl">
                Our Story Is Still Being Written.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-neutral-400">
                More about the history and founding of United Training Facility
                is coming soon.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-black py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
                Where We Train
              </p>

              <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase sm:text-5xl">
                Athens, Pennsylvania.
              </h2>
            </div>

            <div>
              <address className="text-xl not-italic leading-8 text-white">
                United Training Facility
                <br />
                310 S Main St
                <br />
                Athens, PA 18810
              </address>

              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-400">
                Located in the heart of the Northern Tier, United brings
                wrestlers together from across the Pennsylvania and New York
                border region.
              </p>

              <p className="mt-4 text-sm text-neutral-500">
                Parking is available behind the building.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=310+S+Main+St+Athens+PA+18810"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex border-b border-white pb-1 text-sm font-bold uppercase tracking-[0.16em] transition hover:border-[var(--primary-bright)] hover:text-[var(--primary-bright)]"
              >
                Get Directions ↗
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[var(--primary)] py-28 sm:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

        <Container className="relative">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/60">
              Our Belief
            </p>

            <p className="mt-8 font-[var(--font-oswald)] text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl">
              Wrestling is an individual sport strengthened by community.
            </p>

            <div className="mx-auto my-10 h-px w-24 bg-white/30" />

            <p className="font-[var(--font-oswald)] text-4xl font-bold uppercase leading-tight sm:text-5xl lg:text-7xl">
              Different Schools.
              <br />
              Different Backgrounds.
              <br />
              One Room.
              <br />
              One Purpose.
              <br />
              United.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}