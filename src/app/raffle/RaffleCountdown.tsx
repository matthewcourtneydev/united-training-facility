
"use client";

import { useEffect, useState } from "react";

import { raffleEvent } from "@/data/raffle";

const EVENT_START = new Date(raffleEvent.countdownTarget).getTime();
const EVENT_END = new Date("2026-11-01T16:00:00-05:00").getTime();

type TimeRemaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeRemaining(now: number): TimeRemaining {
  const difference = Math.max(0, EVENT_START - now);

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function RaffleCountdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setNow(Date.now());

    update();

    const interval = window.setInterval(update, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const units = getTimeRemaining(now ?? EVENT_START);

  const countdownItems = [
    { label: "Days", value: units.days },
    { label: "Hours", value: units.hours },
    { label: "Minutes", value: units.minutes },
    { label: "Seconds", value: units.seconds },
  ];

  if (now !== null && now >= EVENT_END) {
    return (
      <div className="border border-white/20 bg-white/10 px-6 py-10 text-center">
        <p className="font-[var(--font-oswald)] text-3xl font-bold uppercase text-white sm:text-4xl">
          Thank You, United Family.
        </p>

        <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
          Thank you to everyone who supported our kickoff party and raffle.
        </p>
      </div>
    );
  }

  if (now !== null && now >= EVENT_START) {
    return (
      <div className="border border-white/20 bg-white/10 px-6 py-10 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/60">
          The Wait Is Over
        </p>

        <p className="mt-4 font-[var(--font-oswald)] text-4xl font-bold uppercase text-white sm:text-5xl">
          It's Kickoff Day!
        </p>

        <p className="mt-4 text-base text-white/80">
          Join us at The Elks in Sayre, PA, from 12–4 PM.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
        {countdownItems.map((item) => (
          <div
            key={item.label}
            className="border border-white/20 bg-white/10 px-2 py-5 text-center backdrop-blur-sm sm:px-5 sm:py-8"
          >
            <p className="font-[var(--font-oswald)] text-4xl font-bold leading-none tabular-nums text-white sm:text-6xl lg:text-7xl">
              {String(item.value).padStart(2, "0")}
            </p>

            <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.12em] text-white/60 sm:text-xs sm:tracking-[0.22em]">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-xs font-bold uppercase tracking-[0.16em] text-white/60 sm:text-sm">
        Sunday, November 1 · 12:00 PM Eastern
      </p>
    </div>
  );
}
