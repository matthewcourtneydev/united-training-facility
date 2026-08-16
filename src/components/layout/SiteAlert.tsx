import { getSiteAlert } from "@/lib/googleCalendar";

export default async function SiteAlert() {
  const alert = await getSiteAlert();

  if (!alert) {
    return null;
  }

  const label =
    alert.type === "cancelled"
      ? "Schedule Update"
      : alert.type === "delayed"
        ? "Schedule Delay"
        : "United Notice";

  return (
    <div className="relative z-[60] border-b border-white/10 bg-[var(--primary)] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3 sm:flex-row sm:items-center sm:justify-center sm:gap-3 sm:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">
          {label}
        </p>

        <span className="hidden text-white/30 sm:inline">•</span>

        <p className="text-sm font-bold uppercase tracking-[0.08em]">
          {alert.message}
        </p>
      </div>
    </div>
  );
}