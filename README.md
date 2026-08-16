# United Training Facility

Official website for **United Training Facility**, a wrestling training facility located in Athens, Pennsylvania.

**Live Site:** [unitedtrainingfacility.com](https://unitedtrainingfacility.com)

> **One Room. One Purpose. United.**

---

## About the Project

The United Training Facility website provides athletes and families with information about the facility, coaching staff, training schedule, memberships, events, and the principles behind the United program.

The site was designed and developed as a custom Next.js application with a responsive interface, Google Calendar integration, and external registration through PushPress.

---

## Tech Stack

- [Next.js](https://nextjs.org/)
- React
- TypeScript
- Tailwind CSS
- Google Calendar / iCal
- PushPress
- GitHub Pages
- GitHub Actions

---

## Features

### Responsive Design

The site is fully responsive and designed for desktop, tablet, and mobile devices.

### Google Calendar Integration

The schedule page pulls upcoming events directly from the United Training Facility Google Calendar.

This allows coaches to manage events through Google Calendar without needing to edit or redeploy the website.

Calendar data is retrieved from the configured iCal feed.

### Automatic Schedule Alerts

Calendar events can also trigger a site-wide announcement banner for important schedule changes.

Supported alert prefixes include:

```text
CANCELLED -
DELAYED -
NOTICE -
```

For example:

```text
CANCELLED - Youth Practice
```

A cancellation alert displays the affected event along with its scheduled date and time.

Delay alerts can provide the original and updated practice times.

Alerts are automatically removed when they are no longer applicable.

### Membership Registration

Membership options are displayed on the **Join the Room** page.

Registration and payment are handled securely through PushPress using external registration links.

### The United Way

The United Way page outlines the 12 Fundamentals that define the expectations and culture of United Training Facility.

The facility focuses on one Fundamental each month and connects those principles to wrestling and life outside the room.

---

## Pages

The site currently includes:

- Home
- About
- The United Way
- Coaches
- Schedule
- Contact
- Join the Room

---

## Project Structure

Key project directories include:

```text
src/
├── app/
├── components/
│   ├── layout/
│   ├── motion/
│   └── ui/
├── data/
└── lib/
```

### `app`

Contains the site's Next.js routes and pages.

### `components`

Reusable site components including navigation, layout elements, motion effects, alerts, and UI components.

### `data`

Structured site content including:

- Coaches
- Memberships
- Weekly schedule
- United Way Fundamentals

### `lib`

Shared utilities and integrations, including:

- Google Calendar integration
- Asset path handling

---

## Environment Variables

The Google Calendar integration requires:

```env
GOOGLE_CALENDAR_ICAL_URL=
```

This should contain the iCal URL for the United Training Facility Google Calendar.

Do not commit private environment values to the repository.

For local development, store environment variables in:

```text
.env.local
```

---

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

## Production Build

Create a production build with:

```bash
npm run build
```

The project is configured for deployment to GitHub Pages through GitHub Actions.

Production is available at:

**https://unitedtrainingfacility.com**

---

## Content Updates

Most routine site content can be updated without modifying page layouts.

Structured content is stored in the `src/data` directory.

This includes information such as:

- Coach information
- Coach credentials
- Membership options
- Membership registration links
- Weekly practice schedule
- United Way Fundamentals

Google Calendar events and schedule alerts should be managed directly through the United Training Facility Google Calendar.

---

## Remaining Content

The core website is complete.

A small number of final content items may still need to be added or updated as they become available, including:

- Final registration / PushPress links
- Additional coach information
- Additional coach photos
- Final copy or facility information where applicable

---

## Deployment

The website is hosted using **GitHub Pages** and deployed through **GitHub Actions**.

The custom domain is:

```text
unitedtrainingfacility.com
```

DNS is managed separately through the domain provider.

HTTPS is enabled for the production site.

---

## Developer

Designed and developed by **Matthew Courtney**.

---

© United Training Facility