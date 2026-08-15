import ical from "node-ical";

export type CalendarEvent = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  location?: string;
  description?: string;
  allDay: boolean;
};

/**
 * node-ical can return some text properties either as:
 *
 * "Some text"
 *
 * or:
 *
 * {
 *   val: "Some text",
 *   params: {...}
 * }
 *
 * This converts either form into a normal string.
 */
function getTextValue(value: unknown): string | undefined {
  if (typeof value === "string") {
    return value;
  }

  if (
    value &&
    typeof value === "object" &&
    "val" in value
  ) {
    const val = (value as { val?: unknown }).val;

    if (typeof val === "string") {
      return val;
    }
  }

  return undefined;
}

export async function getUpcomingCalendarEvents(
  limit = 6,
): Promise<CalendarEvent[]> {
  const calendarUrl = process.env.GOOGLE_CALENDAR_ICAL_URL;

  if (!calendarUrl) {
    console.warn("GOOGLE_CALENDAR_ICAL_URL is not configured.");
    return [];
  }

  try {
    const response = await fetch(calendarUrl, {
      next: {
        revalidate: 300,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Google Calendar request failed with status ${response.status}`,
      );
    }

    const calendarText = await response.text();
    const calendar = ical.sync.parseICS(calendarText);

    const now = new Date();

    const events: CalendarEvent[] = Object.values(calendar)
      .flatMap((entry): CalendarEvent[] => {
        if (!entry || entry.type !== "VEVENT") {
          return [];
        }

        const start = entry.start;
        const end = entry.end;

        if (!(start instanceof Date) || !(end instanceof Date)) {
          return [];
        }

        const title = getTextValue(entry.summary) ?? "United Event";
        const location = getTextValue(entry.location);
        const description = getTextValue(entry.description);
        const uid = getTextValue(entry.uid);

        return [
          {
            id: uid ?? `${title}-${start.toISOString()}`,
            title,
            start,
            end,
            location,
            description,
            allDay: entry.datetype === "date",
          },
        ];
      })
      .filter((event) => event.end >= now)
      .sort((a, b) => a.start.getTime() - b.start.getTime())
      .slice(0, limit);

    return events;
  } catch (error) {
    console.error("Unable to load Google Calendar:", error);
    return [];
  }
}