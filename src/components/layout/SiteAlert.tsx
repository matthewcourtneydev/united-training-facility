import { getSiteAlert } from "@/lib/googleCalendar";

const TIME_ZONE = "America/New_York";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(date);
}

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

export default async function SiteAlert() {
  const alert = await getSiteAlert();

  if (!alert) {
    return null;
  }

  const date = formatDate(alert.start);
  const startTime = formatTime(alert.start);
  const endTime = formatTime(alert.end);

  const label =
    alert.type === "cancelled"
      ? "Practice Cancelled"
      : alert.type === "delayed"
        ? "Schedule Delay"
        : "United Notice";

  let details = alert.message;

  if (alert.type === "cancelled") {
    details = `${alert.message} • ${date} • ${startTime}–${endTime}`;
  }

  if (alert.type === "delayed") {
    details = alert.originalStart
      ? `${alert.message} • ${date} • ${alert.originalStart} → ${startTime}`
      : `${alert.message} • ${date} • New Time: ${startTime}`;
  }

  return (
    <div className="relative z-[60] border-b border-white/10 bg-[var(--primary)] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-2.5 text-center sm:flex-row sm:items-center sm:justify-center sm:gap-3 sm:px-8 sm:py-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 sm:text-xs">
          {label}
        </p>

        <span className="hidden text-white/30 sm:inline">•</span>

        <p className="text-xs font-bold uppercase tracking-[0.08em] sm:text-sm">
          {details}
        </p>
      </div>
    </div>
  );
}