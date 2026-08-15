import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src={assetPath("/images/united-home-hero.png")}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />

        {/* Darkens the entire photo */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Fades photo into black behind the copy */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/10" />

        {/* Fades bottom into the next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

        {/* United blue atmospheric glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(20,95,194,0.16),transparent_40%)]" />
      </div>

      {/* Hero content */}
      <Container className="relative z-10 flex min-h-[72vh] items-center py-24 sm:py-28 lg:min-h-[78vh]">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-neutral-400">
            United Training Facility
          </p>

          <h1 className="font-[var(--font-oswald)] text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            One Room.
            <br />
            One Purpose.
            <br />
            <span className="text-[var(--primary-bright)]">United.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300 sm:text-xl">
            A wrestling training environment built around disciplined training,
            positive coaching, accountability, and continuous growth.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/join-the-room"
              className="bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-neutral-200"
            >
              Join the Room
            </Link>

            <Link
              href="/schedule"
              className="border border-white/30 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}