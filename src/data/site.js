// ──────────────────────────────────────────────────────────────
// SITE CONFIG — edit this file to change site-wide things.
// The navigation menu lives here ONCE and appears on every page.
// ──────────────────────────────────────────────────────────────

export const site = {
  name: "Francisco Moguel",
  tagline: "Computer Science & Machine Learning · Marathoner · Photographer",
  // Used for SEO and the GitHub Pages deploy.
  url: "https://fjmoguel.github.io",
};

// The navigation bar. Add, remove, or reorder items here and every
// page updates automatically. `href` values starting with "/" are
// internal pages; "/#about" jumps to a section on the home page.
export const nav = [
  { label: "Home",        href: "/" },
  { label: "About",       href: "/#about" },
  { label: "Work",        href: "/work-experience" },
  { label: "ML Projects", href: "/assignments" },
  { label: "Python",      href: "/projects" },
  { label: "React",       href: "/react-projects" },
  { label: "Running",     href: "/running" },
  { label: "Photography", href: "/photography" },
  { label: "Music",       href: "/music" },
  { label: "Contact",     href: "/contact" },
];

// Contact details — used on the Contact page and in the footer.
export const contact = {
  emailUniversity: "fjmoguel@bu.edu",
  emailPersonal: "francisco.moguel28@gmail.com",
};

// Social / external profiles. Used in the footer and Contact page.
export const socials = [
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/franciscomoguel" },
  { label: "GitHub",    href: "https://github.com/fjmoguel" },
  { label: "Instagram", href: "https://www.instagram.com/pacomoguel_" },
  { label: "Strava",    href: "https://www.strava.com/athletes/francisco_moguel" },
];
