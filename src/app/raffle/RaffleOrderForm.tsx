"use client";

import { useMemo, useState } from "react";

import { rafflePrizes, raffleEvent } from "@/data/raffle";

const VENMO_USERNAME = "Brian-Courtney928";
const VENMO_URL = `https://venmo.com/u/${VENMO_USERNAME}`;

export default function RaffleOrderForm() {
  const [quantities, setQuantities] = useState<number[]>(
    rafflePrizes.map(() => 0)
  );

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [wrestler, setWrestler] = useState("");

  const [copied, setCopied] = useState(false);

  const ticketCount = quantities.reduce(
    (total, quantity) => total + quantity,
    0
  );

  const total = ticketCount * raffleEvent.ticketPrice;

  const selections = useMemo(
    () =>
      rafflePrizes
        .map((prize, index) => ({
          prize,
          quantity: quantities[index],
        }))
        .filter((item) => item.quantity > 0),
    [quantities]
  );

  const memo = useMemo(() => {
    const selectedPrizes = selections
      .map(({ prize, quantity }) => `#${prize.id}x${quantity}`)
      .join(", ");

    return [
      name.trim(),
      phone.trim(),
      selectedPrizes,
      `Wrestler: ${wrestler.trim() || "None"}`,
    ].join(" | ");
  }, [name, phone, wrestler, selections]);

  const validPhone = phone.replace(/\D/g, "").length === 10;

  const canProceed = ticketCount > 0 && name.trim().length >= 2 && validPhone;

  function updateQuantity(index: number, change: number) {
    setQuantities((current) =>
      current.map((quantity, i) =>
        i === index ? Math.max(0, Math.min(99, quantity + change)) : quantity
      )
    );

    setCopied(false);
  }

  async function copyMemo() {
    if (!canProceed) return;

    try {
      await navigator.clipboard.writeText(memo);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
      {/* Ticket selection */}
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
          Step 01 — Select Your Tickets
        </p>

        <h3 className="mt-4 font-[var(--font-oswald)] text-3xl font-bold uppercase sm:text-4xl">
          Choose Your Drawings.
        </h3>

        <p className="mt-4 text-sm leading-7 text-neutral-600">
          Each ticket costs ${raffleEvent.ticketPrice}. Choose how many entries
          you want for each prize drawing.
        </p>

        <div className="mt-8 border-t border-black/10">
          {rafflePrizes.map((prize, index) => (
            <div
              key={prize.id}
              className="flex items-center justify-between gap-4 border-b border-black/10 py-5"
            >
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--primary-bright)]">
                  Prize {String(prize.id).padStart(2, "0")}
                </p>

                <h4 className="mt-1 font-[var(--font-oswald)] text-lg font-bold uppercase leading-tight sm:text-xl">
                  {prize.title}
                </h4>

                <p className="mt-1 text-xs text-neutral-500">
                  ${prize.value} prize value
                </p>
              </div>

              <div className="flex shrink-0 items-center border border-black/15">
                <button
                  type="button"
                  onClick={() => updateQuantity(index, -1)}
                  disabled={quantities[index] === 0}
                  aria-label={`Remove one ticket for prize ${prize.id}`}
                  className="flex h-10 w-10 items-center justify-center text-lg font-bold transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  −
                </button>

                <span className="flex h-10 w-9 items-center justify-center border-x border-black/15 text-sm font-bold tabular-nums">
                  {quantities[index]}
                </span>

                <button
                  type="button"
                  onClick={() => updateQuantity(index, 1)}
                  disabled={quantities[index] >= 99}
                  aria-label={`Add one ticket for prize ${prize.id}`}
                  className="flex h-10 w-10 items-center justify-center text-lg font-bold transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact and payment */}
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--primary-bright)]">
          Step 02 — Your Information
        </p>

        <h3 className="mt-4 font-[var(--font-oswald)] text-3xl font-bold uppercase sm:text-4xl">
          Complete Your Order.
        </h3>

        <p className="mt-4 text-sm leading-7 text-neutral-600">
          Brian will use your phone number to confirm your raffle entries after
          verifying payment.
        </p>

        <div className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="raffle-name"
              className="mb-2 block text-xs font-bold uppercase tracking-[0.14em]"
            >
              Full Name *
            </label>

            <input
              id="raffle-name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                setCopied(false);
              }}
              placeholder="John Smith"
              maxLength={80}
              className="w-full border border-black/15 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-[var(--primary)]"
            />
          </div>

          <div>
            <label
              htmlFor="raffle-phone"
              className="mb-2 block text-xs font-bold uppercase tracking-[0.14em]"
            >
              Cell Phone Number *
            </label>

            <input
              id="raffle-phone"
              type="tel"
              autoComplete="tel"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
                setCopied(false);
              }}
              placeholder="570-555-1234"
              maxLength={20}
              className="w-full border border-black/15 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-[var(--primary)]"
            />

            <p className="mt-2 text-xs text-neutral-500">
              Used for payment confirmation and winner notification.
            </p>
          </div>

          <div>
            <label
              htmlFor="raffle-wrestler"
              className="mb-2 block text-xs font-bold uppercase tracking-[0.14em]"
            >
              Wrestler You're Supporting (Optional)
            </label>

            <input
              id="raffle-wrestler"
              type="text"
              value={wrestler}
              onChange={(event) => {
                setWrestler(event.target.value);
                setCopied(false);
              }}
              placeholder="Wrestler's full name"
              maxLength={80}
              className="w-full border border-black/15 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-[var(--primary)]"
            />
          </div>
        </div>

        {/* Order summary */}
        <div className="mt-8 border border-black/10 bg-white p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
            Your Order Summary
          </p>

          {selections.length > 0 ? (
            <div className="mt-5 space-y-3">
              {selections.map(({ prize, quantity }) => (
                <div
                  key={prize.id}
                  className="flex justify-between gap-4 text-sm"
                >
                  <span className="text-neutral-600">
                    Prize {prize.id} × {quantity}
                  </span>

                  <span className="font-bold">
                    ${quantity * raffleEvent.ticketPrice}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-5 text-sm text-neutral-500">
              Select at least one raffle ticket to begin.
            </p>
          )}

          <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">
                {ticketCount} {ticketCount === 1 ? "Ticket" : "Tickets"}
              </p>

              <p className="mt-1 font-[var(--font-oswald)] text-2xl font-bold uppercase">
                Total
              </p>
            </div>

            <p className="font-[var(--font-oswald)] text-4xl font-bold text-[var(--primary)]">
              ${total}
            </p>
          </div>
        </div>

        {/* Venmo instructions */}
        <div className="mt-6 bg-[#102e55] p-6 text-white sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            Step 03 — Send Payment
          </p>

          <h4 className="mt-3 font-[var(--font-oswald)] text-3xl font-bold uppercase">
            Pay With Venmo.
          </h4>

          <p className="mt-4 text-sm leading-7 text-white/75">
            Send your total payment to Coach Courtney at:
          </p>

          <p className="mt-3 break-all font-[var(--font-oswald)] text-2xl font-bold text-white">
            @{VENMO_USERNAME}
          </p>

          <div className="mt-6 border border-white/20 bg-white/10 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">
              Your Payment Memo
            </p>

            {canProceed ? (
              <p className="mt-3 break-words text-sm leading-7 text-white">
                {memo}
              </p>
            ) : (
              <p className="mt-3 text-sm leading-7 text-white/60">
                Select tickets and enter your name and phone number to generate
                your payment memo.
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={copyMemo}
            disabled={!canProceed}
            className="mt-5 w-full bg-white px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#102e55] transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {copied ? "Memo Copied ✓" : "Copy Payment Memo"}
          </button>

          <a
            href={VENMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!canProceed}
            onClick={(event) => {
              if (!canProceed) event.preventDefault();
            }}
            className={`mt-3 flex w-full items-center justify-center px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.14em] transition ${
              canProceed
                ? "bg-[var(--primary-bright)] text-white hover:brightness-110"
                : "pointer-events-none bg-white/10 text-white/40"
            }`}
          >
            Open Coach Courtney's Venmo ↗
          </a>

          <p className="mt-5 text-xs leading-6 text-white/65">
            Copy your memo before opening Venmo. Enter the displayed total
            manually and paste the memo into the payment note.
          </p>

          <p className="mt-3 text-xs leading-6 text-white/65">
            Your entries are not automatically recorded by this website. Brian
            will verify your payment, record your selected entries, and send a
            confirmation text.
          </p>
        </div>
      </div>
    </div>
  );
}
