
import Link from "next/link";
import { ArrowRight, Ticket } from "lucide-react";

const RAFFLE_END = new Date("2026-11-01T16:00:00-05:00");

export default function RaffleBanner() {
  if (Date.now() >= RAFFLE_END.getTime()) {
    return null;
  }

  return (
    <div className="relative border-b border-white/10 bg-[#123d7a] text-white">
      <Link
        href="/raffle"
        aria-label="Click here to get your United raffle tickets"
        className="group block transition-colors duration-300 hover:bg-white/[0.08]"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-3 sm:gap-4 sm:px-8">
          <Ticket
            size={18}
            strokeWidth={2}
            className="hidden shrink-0 text-white/80 sm:block"
            aria-hidden="true"
          />

          {/* Mobile */}
          <div className="flex items-center gap-2 sm:hidden">
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.08em]">
              United Kickoff & Raffle
              <span className="ml-2 text-[#9dccff]">
                — Details Here
              </span>
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:flex">
            <p className="text-xs font-bold uppercase tracking-[0.12em] lg:text-sm">
              United Kickoff & Raffle
            </p>

            <span className="text-white/35">•</span>

            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/75">
              November 1
            </p>

            <span className="text-white/35">•</span>

            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/75">
              $10 Per Ticket
            </p>

            <span className="hidden text-white/35 lg:inline">•</span>

            <p className="font-bold uppercase tracking-[0.1em] text-[#9dccff] sm:text-xs lg:text-sm">
              Click Here for Details
            </p>
          </div>

          <ArrowRight
            size={17}
            strokeWidth={2.5}
            className="shrink-0 text-[#9dccff] transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </div>
      </Link>
    </div>
  );
}
