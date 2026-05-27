// ──────────────────────────────────────────────────────────────
// RUNNING — marathons and races shown on /running
// To add a race: copy a { } block. Set `upcoming: true` for races
// not yet run. `photo` and `logo` point to files in /public/images
// or /public/logos. `facts` is a list of label/value rows.
// ──────────────────────────────────────────────────────────────

export const runningLinks = [
  { label: "My Strava Profile", href: "https://www.strava.com/athletes/francisco_moguel" },
  { label: "MBTA Run for Mental Health Awareness", href: "https://www.instagram.com/p/C_qpfcJPzhJ/" },
];

export const marathons = [
  {
    name: "New York City Marathon",
    photo: "/images/IMG_1156 2.JPG",
    logo: "/logos/ivhn4q7u49fa1.jpg",
    facts: [
      { label: "Date", value: "Nov 6, 2022" },
      { label: "Finish Time", value: "4:49:06" },
    ],
  },
  {
    name: "Boston Marathon",
    photo: "/images/IMG_2764 2.JPG",
    logo: "/logos/2023_Boston_Marathon_logo.png",
    facts: [
      { label: "Date", value: "Apr 17, 2023" },
      { label: "Finish Time", value: "4:15:01" },
    ],
  },
  {
    name: "London Marathon",
    photo: "/images/IMG_8333 2.JPG",
    logo: "/logos/Untitledtcs-london-marathon-logo.png",
    facts: [
      { label: "Date", value: "Apr 21, 2024" },
      { label: "Finish Time", value: "4:31:46" },
    ],
  },
  {
    name: "Chicago Marathon",
    photo: "/images/IMG_0208.JPG",
    logo: "/logos/KdgxWKUj_400x400.jpg",
    facts: [
      { label: "Date", value: "Oct 13, 2024" },
      { label: "Finish Time", value: "3:46:08" },
    ],
  },
  {
    name: "MBTA Run",
    photo: "/images/F7ABFCD7-4A0E-4850-9107-B4B42E4B9222.JPG",
    logo: null,
    facts: [
      { label: "Date", value: "Sep 2024" },
      { label: "Distance", value: "130 km" },
      { label: "Duration", value: "8 days" },
      { label: "Pace", value: "5:54 min/km" },
      { label: "Total Running Time", value: "12:48:27" },
      { label: "Note", value: "First person to ever complete this run" },
    ],
  },
  {
    name: "Tokyo Marathon",
    photo: "/images/IMG_2048_VSCO.jpg",
    logo: "/images/2025_Tokyo_Marathon_logo.jpg",
    facts: [
      { label: "Date", value: "Mar 4, 2025" },
      { label: "Finish Time", value: "3:41:06" },
    ],
  },
  {
    name: "Mexico City Half Marathon",
    photo: "/images/IMG_3883.JPG",
    logo: "/logos/SPTMCAR1738120017_logo.webp",
    facts: [
      { label: "Date", value: "Jul 13, 2025" },
      { label: "Finish Time", value: "1:39:51" },
    ],
  },
  {
    name: "Berlin Marathon",
    upcoming: true,
    photo: null,
    logo: "/logos/images_berlin.png",
    facts: [
      { label: "Next Race", value: "Sep 2025" },
    ],
  },
];
