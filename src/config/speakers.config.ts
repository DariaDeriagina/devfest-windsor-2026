import type { Speaker } from "../types/speaker";

// TODO: imageUrl fields use random placeholder photos (randomuser.me) so the
// section can be previewed before real headshots are ready. Swap these for the
// actual speaker photos before launch.
export const FEATURED_SPEAKERS: Speaker[] = [
  {
    name: "Nathen Harvey",
    role: "DORA Lead",
    company: "Google Cloud",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    imageAlt: "Nathen Harvey",
    linkedinUrl: "https://www.linkedin.com/in/nathenharvey/",
    accentColor: "blue",
  },
  {
    name: "Amanda J Kendal-Brown",
    role: "Senior Front-End Engineer",
    company: "Capital One",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    imageAlt: "Amanda J Kendal-Brown",
    linkedinUrl: "https://www.linkedin.com/",
    accentColor: "green",
  },
  {
    name: "Ramandeep Arora",
    role: "Embedded Software Engineer",
    company: "Stanley Black & Decker",
    imageUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    imageAlt: "Ramandeep Arora",
    linkedinUrl: "https://www.linkedin.com/",
    accentColor: "red",
  },
  {
    name: "Brandon Wagner",
    role: "Software Engineer",
    company: "Oxide Computer Company",
    imageUrl: "https://randomuser.me/api/portraits/men/76.jpg",
    imageAlt: "Brandon Wagner",
    linkedinUrl: "https://www.linkedin.com/",
    accentColor: "gold",
  },
];
