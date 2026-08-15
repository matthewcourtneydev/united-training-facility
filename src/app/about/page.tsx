import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[520px] overflow-hidden border-b border-white/10 bg-black sm:min-h-[620px] lg:min-h-[680px]">
        {/* Mobile hero image */}
        <Image
          src="/images/aj-single.jpg"
          alt="Wrestlers competing"
          fill
          priority
          sizes="(max-width: 767px) 100vw"
          className="object-cover object-center md:hidden"
        />

        {/* Desktop / tablet hero image */}
        <Image
          src="/images/aj-wrestling.png"
          alt="AJ Burkhart competing in collegiate wrestling"
          fill
          priority
          sizes="(min-width: 768px) 100vw"
          className="hidden scale-[1.06] object-cover object-right md:block md:translate-x-[6%]"
        />

        {/* Mobile darkening */}
        <div className="absolute inset-0 bg-black/35 md:hidden" />

        {/* Mobile left readability fade */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.84)_55%,rgba(0,0,0,0.38)_100%)] md:hidden" />

        {/* Desktop left readability fade */}
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.98)_24%,rgba(0,0,0,0.84)_48%,rgba(0,0,0,0.30)_72%,rgba(0,0,0,0.08)_100%)] md:block" />

        {/* Subtle blue atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_45%,rgba(20,95,194,0.12),transparent_38%)]" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black/45 sm:h-28" />

        <Container className="relative z-10 flex min-h-[520px] items-center py-16 sm:min-h-[620px] sm:py-24 lg:min-h-[680px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
              About United
            </p>

            <h1 className="mt-5 max-w-[320px] font-[var(--font-oswald)] text-5xl font-bold uppercase leading-[0.92] tracking-tight text-white sm:max-w-none sm:text-6xl md:text-7xl lg:text-[5.75rem]">
              United by Wrestling.
              <br />
              Built for More.
            </h1>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="bg-neutral-100 py-20 text-black sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
                Our Mission
              </p>

              <h2 className="mt-4 max-w-xl font-[var(--font-oswald)] text-4xl font-bold uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
                Excellence On and Off the Mat.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-neutral-700 sm:text-lg">
              <p className="text-xl font-semibold leading-8 text-black sm:text-2xl">
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

      {/* Vision */}
      <section className="relative overflow-hidden bg-[var(--primary)] py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_45%,rgba(255,255,255,0.10),transparent_38%)]" />

        <div className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 font-[var(--font-oswald)] text-[14rem] font-bold uppercase leading-none text-white/[0.035] lg:block">
          United
        </div>

        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/60">
                Our Vision
              </p>

              <h2 className="mt-4 max-w-xl font-[var(--font-oswald)] text-4xl font-bold uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
                Building a Lasting Legacy.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-white/75 sm:text-lg">
              <p className="text-xl font-semibold leading-8 text-white sm:text-2xl">
                To become the premier wrestling training environment in the
                Northern Tier of Pennsylvania and Southern Tier of New York.
              </p>

              <p>
                We envision a community where athletes of every background come
                together to elevate one another.
              </p>

              <p>
                Our legacy will not be measured solely by championships, but by
                the character, leadership, and relationships our athletes carry
                with them long after they leave the mat.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="bg-neutral-100 py-20 text-black sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
                Our Story
              </p>

              <h2 className="mt-4 max-w-xl font-[var(--font-oswald)] text-4xl font-bold uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
                Built Here.
                <br />
                Built Together.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-neutral-700 sm:text-lg">
              <p>
                United Training Facility was founded in 2023 by Dave and Jamie
                Patrick with a simple mission: to build great wrestlers and
                great people.
              </p>

              <p>
                Born out of the Northern Tier&apos;s rich wrestling tradition,
                United was created to give local athletes a place to train,
                learn, and grow without having to travel hours outside the area
                for quality instruction and training partners.
              </p>

              <p>
                What started in a small facility in Ulster, PA quickly grew
                beyond the space. As the United community continued to expand,
                the facility moved to its current home in downtown Athens, PA,
                providing more room and new opportunities for athletes of all
                ages and experience levels.
              </p>

              <p>
                Today, United is more than a wrestling facility. It is a
                community built around development, character, hard work, and
                togetherness — with the belief that the lessons learned on the
                mat should help shape better people off of it.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Location */}
      <section className="bg-[linear-gradient(135deg,#111_0%,#181818_50%,#101010_100%)] py-20 text-white sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
                Where We Train
              </p>

              <h2 className="mt-4 max-w-xl font-[var(--font-oswald)] text-4xl font-bold uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
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

              <Link
                href="https://www.google.com/maps/search/?api=1&query=310+S+Main+St+Athens+PA+18810"
                target="_blank"
                className="mt-8 inline-flex border-b border-[var(--primary-bright)] pb-1 text-sm font-bold uppercase tracking-[0.16em] text-[var(--primary-bright)] transition hover:text-white"
              >
                Get Directions ↗
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Belief */}
      <section className="relative overflow-hidden bg-[var(--primary)] py-24 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_45%)]" />

        <Container className="relative">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/60">
              Our Belief
            </p>



            <p className="mt-8 font-[var(--font-oswald)] text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
              Wrestling is an individual sport strengthened by community.
            </p>

            <div className="mx-auto my-10 h-px w-24 bg-white/30" />

            <p className="font-[var(--font-oswald)] text-4xl font-bold uppercase leading-[0.98] text-white sm:text-5xl lg:text-7xl">
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