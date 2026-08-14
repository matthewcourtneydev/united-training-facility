import Link from "next/link";

import Container from "@/components/ui/Container";

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-black py-20 sm:py-28">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
            Contact United
          </p>

          <h1 className="mt-4 max-w-5xl font-[var(--font-oswald)] text-5xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-8xl">
            Have Questions?
            <br />
            Get in Touch.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400 sm:text-xl">
            Questions about training, memberships, financial assistance, or
            getting started? Reach out to United Training Facility.
          </p>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-neutral-950 py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
                Visit United
              </p>

              <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase sm:text-5xl">
                Find the Room.
              </h2>

              <address className="mt-8 text-xl not-italic leading-9 text-white">
                United Training Facility
                <br />
                310 S Main St
                <br />
                Athens, PA 18810
              </address>

              <p className="mt-5 text-sm text-neutral-500">
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

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
                Contact Information
              </p>

              <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase sm:text-5xl">
                Connect With United.
              </h2>

              <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
                <div className="py-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                    General Inquiries
                  </p>

                  <p className="mt-3 text-neutral-400">
                    Contact information coming soon.
                  </p>
                </div>

                <div className="py-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                    Financial Assistance
                  </p>

                  <p className="mt-3 text-neutral-300">
                    Grace Courtney
                  </p>

                  <p className="mt-2 text-sm text-neutral-500">
                    Contact information coming soon.
                  </p>
                </div>

                <div className="py-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                    Social Media
                  </p>

                  <p className="mt-3 text-neutral-400">
                    Social links coming soon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--primary)] py-24 sm:py-28">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/60">
                Ready to Train?
              </p>

              <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-tight sm:text-5xl">
                Find Your Place in the Room.
              </h2>

              <p className="mt-5 text-lg text-white/75">
                One Room. One Purpose. United.
              </p>
            </div>

            <Link
              href="/join-the-room"
              className="w-fit bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-neutral-200"
            >
              Join the Room
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}