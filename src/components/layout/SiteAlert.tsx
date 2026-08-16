import { getSiteAlert } from "@/lib/googleCalendar";

export default async function SiteAlert() {
  const alert = await getSiteAlert();

  if (!alert) {
    return null;
  }

  const label =
    alert.type === "cancelled"
      ? "Practice Cancelled"
      : alert.type === "delayed"
        ? "Schedule Delay"
        : "United Notice";

  return (
<div className="border-b border-white/10 bg-[var(--primary)] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-2.5 text-center sm:flex-row sm:items-center sm:justify-center sm:gap-3 sm:px-8 sm:py-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 sm:text-xs">
          {label}
        </p>

        <span className="hidden text-white/30 sm:inline">•</span>

        <p className="text-xs font-bold uppercase tracking-[0.08em] sm:text-sm">
          {alert.message}
        </p>
      </div>
    </div>
  );
}