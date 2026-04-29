import type { Projects, Issue } from "@/types";

// Update these import paths to match where your images actually live
import youth  from "@/assets/images/Youth meetup.jpg";
import people from '@/assets/images/People.jpeg'
import smart  from "@/assets/images/smart devices.jpg";
import map    from "@/assets/images/Map.jpg";

export const PROJECTS: Projects[] = [
  {
    id:           1,
    slug:         "kigali-community-hub",
    status:       "active",
    category:     "platform",
    image:        youth,
    title:        "Kigali Community Hub",
    tagline:      "The front door for Kigali's tech scene.",
    description:
      "An open-source platform that helps tech communities in Kigali showcase events, projects, and opportunities in one place.",
    techStack:    ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    stats:        { contributors: 18, prs: 94, openIssues: 12, stars: 43, forks: 11 },
    featured:     true,
    language:     "TypeScript",
    langColor:    "#3178c6",
    lastActivity: "2 hours ago",
    maintainer:   "DD",
    repoUrl:      "https://github.com/opensourcekigali/kigali-community-hub",
    createdAt:    "2024-10-01",
  },
  {
    id:           2,
    slug:         "edutrack-rwanda",
    status:       "seeking",
    category:     "education",
    image:        people,
    title:        "EduTrack Rwanda",
    tagline:      "Attendance & performance tracking for Rwandan schools.",
    description:
      "A student performance and attendance tracking system designed for schools across Rwanda. Built offline-first.",
    techStack:    ["React", "Python", "Django", "SQLite", "PWA"],
    stats:        { contributors: 9, prs: 41, openIssues: 8, stars: 27, forks: 6 },
    featured:     false,
    language:     "Python",
    langColor:    "#3572A5",
    lastActivity: "1 day ago",
    maintainer:   "JH",
    repoUrl:      "https://github.com/opensourcekigali/edutrack-rwanda",
    createdAt:    "2024-11-15",
  },
  {
    id:           3,
    slug:         "afyaconnect",
    status:       "active",
    category:     "health",
    image:        smart,
    title:        "AfyaConnect",
    tagline:      "Verified health resources, one tap away.",
    description:
      "An open-source health information portal connecting communities with verified health resources. Supports English, French, and Kinyarwanda.",
    techStack:    ["Next.js", "Supabase", "Tailwind CSS", "i18n"],
    stats:        { contributors: 14, prs: 67, openIssues: 5, stars: 38, forks: 9 },
    featured:     false,
    language:     "JavaScript",
    langColor:    "#f1e05a",
    lastActivity: "3 hours ago",
    maintainer:   "AU",
    repoUrl:      "https://github.com/opensourcekigali/afyaconnect",
    createdAt:    "2025-01-10",
  },
  {
    id:           4,
    slug:         "openrwanda-map",
    status:       "new",
    category:     "maps",
    image:        map,
    title:        "OpenRwanda Map",
    tagline:      "Mapping Rwanda's tech ecosystem, together.",
    description:
      "A collaborative mapping project that highlights tech hubs, coworking spaces, and innovation centers across Rwanda.",
    techStack:    ["Leaflet.js", "React", "OpenStreetMap", "GeoJSON"],
    stats:        { contributors: 6, prs: 18, openIssues: 14, stars: 19, forks: 4 },
    featured:     false,
    language:     "JavaScript",
    langColor:    "#f1e05a",
    lastActivity: "5 days ago",
    maintainer:   "EN",
    repoUrl:      "https://github.com/opensourcekigali/openrwanda-map",
    createdAt:    "2025-03-01",
  },
];

export const GOOD_FIRST_ISSUES: Issue[] = [
  {
    id:          1,
    title:       "Add dark mode toggle to the navbar",
    label:       "good first issue",
    project:     "Kigali Community Hub",
    projectSlug: "kigali-community-hub",
    difficulty:  "beginner",
    link:        "https://github.com/opensourcekigali/kigali-community-hub/issues/1",
  },
  {
    id:          2,
    title:       "Translate onboarding copy to Kinyarwanda",
    label:       "good first issue",
    project:     "AfyaConnect",
    projectSlug: "afyaconnect",
    difficulty:  "beginner",
    link:        "https://github.com/opensourcekigali/afyaconnect/issues/2",
  },
  {
    id:          3,
    title:       "Fix attendance export to CSV — wrong headers",
    label:       "bug",
    project:     "EduTrack Rwanda",
    projectSlug: "edutrack-rwanda",
    difficulty:  "beginner",
    link:        "https://github.com/opensourcekigali/edutrack-rwanda/issues/3",
  },
  {
    id:          4,
    title:       "Add marker clustering to the map view",
    label:       "help wanted",
    project:     "OpenRwanda Map",
    projectSlug: "openrwanda-map",
    difficulty:  "intermediate",
    link:        "https://github.com/opensourcekigali/openrwanda-map/issues/4",
  },
];