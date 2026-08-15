import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { assetPath } from "@/lib/assetPath";
import Container from "@/components/ui/Container";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-black py-20 sm:py-28 lg:py-32">
        {/* Blue atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_45%,rgba(20,95,194,0.18),transparent_32%)]" />

        {/* Large decorative word */}
        <div className="pointer-events-none absolute right-[4%] top-1/2 hidden -translate-y-1/2 font-[var(--font-oswald)] text-[15rem] font-bold uppercase leading-none text-white/[0.025] lg:block">
          United
        </div>

        {/* Eagle watermark */}
        <div className="pointer-events-none absolute right-[8%] top-1/2 hidden h-[320px] w-[400px] -translate-y-1/2 opacity-[0.07] lg:block">
          <Image
            src="/images/logo-no-text.png"
            alt=""
            fill
            sizes="400px"
            className="object-contain"
          />
        </div>

        <Container className="relative z-10">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
            Contact United
          </p>

          <h1 className="mt-4 max-w-5xl font-[var(--font-oswald)] text-5xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-8xl">
            Have Questions?
            <br />
            Get In Touch.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400 sm:text-xl">
            Questions about training, memberships, financial assistance, or
            getting started? Reach out to United Training Facility.
          </p>
        </Container>
      </section>

      {/* Main contact section */}
      <section className="bg-neutral-100 py-20 text-black sm:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* Location */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
                Visit United
              </p>

              <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
                Find the Room.
              </h2>

              <address className="mt-8 text-xl not-italic leading-8 text-black">
                <span className="font-semibold">United Training Facility</span>
                <br />
                310 S Main St
                <br />
                Athens, PA 18810
              </address>

              <p className="mt-5 text-sm leading-6 text-neutral-500">
                Parking is available behind the building.
              </p>

              <Link
                href="https://www.google.com/maps/search/?api=1&query=310+S+Main+St+Athens+PA+18810"
                target="_blank"
                className="mt-7 inline-flex border-b border-[var(--primary-bright)] pb-1 text-sm font-bold uppercase tracking-[0.16em] text-[var(--primary-bright)] transition hover:text-[var(--primary)]"
              >
                Get Directions ↗
              </Link>
            </div>

            {/* Contact info */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
                Contact Information
              </p>

              <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
                Connect With United.
              </h2>

              <div className="mt-10 border-t border-black/10">
                {/* General */}
                <div className="grid gap-5 border-b border-black/10 py-7 sm:grid-cols-[180px_1fr]">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                    General Inquiries
                  </p>

                  <div>
                    <p className="text-lg font-semibold text-black">
                      United Training Facility
                    </p>

                    <p className="mt-2 text-sm leading-6 text-neutral-500">
                      Contact information coming soon.
                    </p>
                  </div>
                </div>

                {/* Financial assistance */}
                <div className="grid gap-5 border-b border-black/10 py-7 sm:grid-cols-[180px_1fr]">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                    Financial Assistance
                  </p>

                  <div>
                    <p className="text-lg font-semibold text-black">
                      Grace Courtney
                    </p>

                    <p className="mt-2 text-sm leading-6 text-neutral-500">
                      Contact information coming soon.
                    </p>
                  </div>
                </div>
                {/* Social */}
                <div className="grid gap-5 border-b border-black/10 py-7 sm:grid-cols-[180px_1fr]">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                    Social Media
                  </p>

                  <div>
                    <p className="text-lg font-semibold text-black">
                      Follow United
                    </p>

                    <p className="mt-2 text-sm leading-6 text-neutral-500">
                      Follow along for training updates, events, results, and
                      everything happening in the room.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link
                        href="https://www.instagram.com/unitedtrainingfacility?igsh=MXdlb2R1Z2pqYTJmcg==&igsi=MXdlb2R1Z2pqYTJmcg=="
                        target="_blank"
                        aria-label="Instagram"
                        className="flex h-11 w-11 items-center justify-center border border-black/15 text-black transition hover:border-[var(--primary-bright)] hover:bg-[var(--primary-bright)] hover:text-white"
                      >
                        <FaInstagram className="h-5 w-5" />
                      </Link>

                      <Link
                        href="https://www.facebook.com/p/United-Training-Facility-100092605913030/"
                        target="_blank"
                        aria-label="Facebook"
                        className="flex h-11 w-11 items-center justify-center border border-black/15 text-black transition hover:border-[var(--primary-bright)] hover:bg-[var(--primary-bright)] hover:text-white"
                      >
                        <FaFacebookF className="h-5 w-5" />
                      </Link>

                      <Link
                        href="https://www.tiktok.com/@united.training.facility?_r=1&_t=ZP-98ueayII3CR"
                        target="_blank"
                        aria-label="TikTok"
                        className="flex h-11 w-11 items-center justify-center border border-black/15 text-black transition hover:border-[var(--primary-bright)] hover:bg-[var(--primary-bright)] hover:text-white"
                      >
                        <FaTiktok className="h-5 w-5" />
                      </Link>

                      {/* <Link
        href="#"
        target="_blank"
        aria-label="X"
        className="flex h-11 w-11 items-center justify-center border border-black/15 text-black transition hover:border-[var(--primary-bright)] hover:bg-[var(--primary-bright)] hover:text-white"
      >
        <FaXTwitter className="h-5 w-5" />
      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Support strip */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0d0d0d_0%,#171717_55%,#0d0d0d_100%)] py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(20,95,194,0.15),transparent_35%)]" />

        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
                Not Sure Where to Start?
              </p>

              <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-[0.98] sm:text-5xl">
                We&apos;ll Help You Find Your Place.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-neutral-400">
              Whether you have questions about training level, membership,
              scheduling, or financial assistance, reach out and we&apos;ll
              point you in the right direction.
            </p>
          </div>
        </Container>
      </section>

      {/* Join CTA */}
      <section className="relative overflow-hidden bg-[var(--primary)] py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.10),transparent_40%)]" />

        <Container className="relative">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/60">
                Ready to Train?
              </p>

              <h2 className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
                Find Your Place
                <br className="hidden sm:block" /> In the Room.
              </h2>

              <p className="mt-5 text-lg text-white/70">
                One Room. One Purpose. United.
              </p>
            </div>

            <Link
              href="/join-the-room"
              className="w-fit bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-neutral-200"
            >
              Join the Room
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
