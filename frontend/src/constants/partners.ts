import type { Partner } from "@/types";

// Partner logos — copy your uploaded images to src/assets/partners/
import ictChamber        from '@/assets/partners/ICT.png'
import digitalTransform  from '@/assets/partners/DTCR.png'
import giz               from '@/assets/partners/GIZ.png'
import millionCoders     from '@/assets/partners/RC.png'
import rwandaGovt        from '@/assets/partners/MINICT.png'

export const PARTNERS: Partner[] = [
  {
    id:          1,
    name:        "ICT Chamber",
    shortName:   "ICT",
    category:    "company",
    description:
      "Rwanda's ICT industry association, representing the private sector in digital innovation and policy.",
    website:     "https://ictchamber.rw",
    logo:        ictChamber,
    initials:    "ICT",
    bg:          "#f59e0b",
    since:       "2024",
    collab:      "Industry connections, policy alignment, member network access",
    featured:    true,
  },
  {
    id:          2,
    name:        "Digital Transformation Center Rwanda",
    shortName:   "DTC",
    category:    "government",
    description:
      "Rwanda's Digital Transformation Center drives the adoption of digital solutions across government and the private sector.",
    website:     "https://dtc.rw",
    logo:        digitalTransform,
    initials:    "DTC",
    bg:          "#1e1b6e",
    since:       "2025",
    collab:      "Digital infrastructure, government project collaboration",
    featured:    true,
  },
  {
    id:          3,
    name:        "GIZ German Cooperation",
    shortName:   "GIZ",
    category:    "ngo",
    description:
      "Deutsche Gesellschaft für Internationale Zusammenarbeit supports digital skills development across Africa.",
    website:     "https://giz.de",
    logo:        giz,
    initials:    "GIZ",
    bg:          "#cc0000",
    since:       "2025",
    collab:      "Funding support, international network, digital skills programs",
    featured:    false,
  },
  {
    id:          4,
    name:        "1 Million Rwandan Coders",
    shortName:   "1MRC",
    category:    "government",
    description:
      "A national initiative to train one million Rwandans in coding and digital skills.",
    website:     "https://1millioncoders.rw",
    logo:        millionCoders,
    initials:    "1M",
    bg:          "#1e3a8a",
    since:       "2024",
    collab:      "Shared learning curriculum, contributor pipeline, national reach",
    featured:    false,
  },
  {
    id:          5,
    name:        "Republic of Rwanda",
    shortName:   "GoR",
    category:    "government",
    description:
      "The Government of Rwanda supports OSK as part of its Smart Rwanda and Vision 2050 digital transformation agenda.",
    website:     "https://gov.rw",
    logo:        rwandaGovt,
    initials:    "GoR",
    bg:          "#166534",
    since:       "2025",
    collab:      "Official recognition, Smart Rwanda alignment, policy support",
    featured:    true,
  },
];

// Only partners that have a real logo image — used by the marquee
export const MARQUEE_PARTNERS = PARTNERS.filter((p) => Boolean(p.logo));