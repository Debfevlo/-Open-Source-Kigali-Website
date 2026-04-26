import { useState } from "react";
import { NavLink } from "react-router";
import {
  Search,
  BookOpen,
  Play,
  Wrench,
  FileCode,
  Newspaper,
  Layout,
  Clock,
  ArrowUpRight,
  ExternalLink,
  Github,
  Star,
  ChevronRight,
  Rss,
  Terminal,
  Globe,
  Youtube,
  PenLine,
} from "lucide-react";
import EyebrowLabel from "../UI/EyebrowLable";


// ─── Types

type ResourceType     = "tutorial" | "guide" | "tool" | "template" | "article" | "video";
type DifficultyLevel  = "beginner" | "intermediate" | "advanced";
type ResourceCategory = "all" | "git" | "javascript" | "python" | "open-source" | "design" | "career";

interface Resource {
  id:          number;
  type:        ResourceType;
  category:    ResourceCategory;
  title:       string;
  description: string;
  author:      string;
  authorRole:  string;
  readTime:    string;
  difficulty:  DifficultyLevel;
  tags:        string[];
  link:        string;
  featured:    boolean;
  date:        string;
  views:       number;
}

interface ExternalTool {
  name:        string;
  description: string;
  link:        string;
  icon:        React.ReactNode;
  category:    string;
  free:        boolean;
}

// ─── Data 

const TYPE_META: Record<ResourceType, {
  label:   string;
  icon:    React.ReactNode;
  bg:      string;
  text:    string;
  border:  string;
}> = {
  tutorial: {
    label:  "Tutorial",
    icon:   <BookOpen  size={13} />,
    bg:     "bg-blue-100",
    text:   "text-blue-700",
    border: "border-blue-200",
  },
  guide: {
    label:  "Guide",
    icon:   <Newspaper size={13} />,
    bg:     "bg-violet-100",
    text:   "text-violet-700",
    border: "border-violet-200",
  },
  tool: {
    label:  "Tool",
    icon:   <Wrench    size={13} />,
    bg:     "bg-orange-100",
    text:   "text-orange-700",
    border: "border-orange-200",
  },
  template: {
    label:  "Template",
    icon:   <Layout    size={13} />,
    bg:     "bg-teal-100",
    text:   "text-teal-700",
    border: "border-teal-200",
  },
  article: {
    label:  "Article",
    icon:   <PenLine   size={13} />,
    bg:     "bg-rose-100",
    text:   "text-rose-700",
    border: "border-rose-200",
  },
  video: {
    label:  "Video",
    icon:   <Play      size={13} />,
    bg:     "bg-red-100",
    text:   "text-red-600",
    border: "border-red-200",
  },
};

const DIFFICULTY_META: Record<DifficultyLevel, { label: string; color: string }> = {
  beginner:     { label: "Beginner",     color: "text-emerald-600" },
  intermediate: { label: "Intermediate", color: "text-amber-600"   },
  advanced:     { label: "Advanced",     color: "text-red-500"     },
};

const TYPE_FILTERS: { key: ResourceType | "all"; label: string }[] = [
  { key: "all",      label: "All"       },
  { key: "tutorial", label: "Tutorials" },
  { key: "guide",    label: "Guides"    },
  { key: "tool",     label: "Tools"     },
  { key: "template", label: "Templates" },
  { key: "article",  label: "Articles"  },
  { key: "video",    label: "Videos"    },
];

const CATEGORY_FILTERS: { key: ResourceCategory; label: string }[] = [
  { key: "all",          label: "All topics"   },
  { key: "git",          label: "Git & GitHub" },
  { key: "javascript",   label: "JavaScript"   },
  { key: "python",       label: "Python"       },
  { key: "open-source",  label: "Open Source"  },
  { key: "design",       label: "Design"       },
  { key: "career",       label: "Career"       },
];

const resources: Resource[] = [
  {
    id:          1,
    type:        "tutorial",
    category:    "git",
    title:       "Your First Pull Request: A Complete Walkthrough",
    description: "Everything you need to go from zero to merged PR — forking, branching, committing, and opening a pull request against an OSK project. Written for absolute beginners.",
    author:      "Didas Mbarushimana",
    authorRole:  "Community Lead",
    readTime:    "12 min read",
    difficulty:  "beginner",
    tags:        ["git", "github", "open source", "beginner"],
    link:        "#",
    featured:    true,
    date:        "July 2025",
    views:       1240,
  },
  {
    id:          2,
    type:        "guide",
    category:    "open-source",
    title:       "How to Read Someone Else's Codebase",
    description: "Jumping into an unfamiliar project is intimidating. This guide breaks down a repeatable system for understanding code you didn't write — fast.",
    author:      "Tech Lead",
    authorRole:  "OSK Maintainer",
    readTime:    "8 min read",
    difficulty:  "intermediate",
    tags:        ["codebase", "reading code", "open source"],
    link:        "#",
    featured:    false,
    date:        "June 2025",
    views:       876,
  },
  {
    id:          3,
    type:        "video",
    category:    "git",
    title:       "Git Rebase vs Merge — Explained Simply",
    description: "A recorded OSK Wednesday session covering one of the most confusing Git concepts. Live examples, real project history, no hand-waving.",
    author:      "Jean-Paul H.",
    authorRole:  "OSK Contributor",
    readTime:    "28 min watch",
    difficulty:  "intermediate",
    tags:        ["git", "rebase", "merge", "version control"],
    link:        "#",
    featured:    false,
    date:        "June 2025",
    views:       653,
  },
  {
    id:          4,
    type:        "template",
    category:    "open-source",
    title:       "OSK Project README Template",
    description: "A battle-tested README structure used across all OSK projects. Includes setup instructions, contribution guide, code of conduct, and roadmap sections.",
    author:      "Solange Mukamana",
    authorRole:  "Technical Writer",
    readTime:    "5 min setup",
    difficulty:  "beginner",
    tags:        ["readme", "documentation", "template"],
    link:        "#",
    featured:    false,
    date:        "May 2025",
    views:       990,
  },
  {
    id:          5,
    type:        "tutorial",
    category:    "javascript",
    title:       "Building a REST API with Node.js and Express",
    description: "A ground-up tutorial for the EduTrack Rwanda backend. Covers routing, middleware, database connections, and environment variables. Real code from a real OSK project.",
    author:      "Emile Nshimyimana",
    authorRole:  "Backend Engineer",
    readTime:    "20 min read",
    difficulty:  "intermediate",
    tags:        ["node.js", "express", "api", "javascript"],
    link:        "#",
    featured:    false,
    date:        "May 2025",
    views:       721,
  },
  {
    id:          6,
    type:        "article",
    category:    "career",
    title:       "How Open Source Changed My Career — And How It Can Change Yours",
    description: "Amina Uwase went from student to Andela engineer partly through OSK. Here she breaks down exactly how open source contribution accelerated her career trajectory.",
    author:      "Amina Uwase",
    authorRole:  "Software Developer, Andela",
    readTime:    "6 min read",
    difficulty:  "beginner",
    tags:        ["career", "open source", "story", "job hunting"],
    link:        "#",
    featured:    false,
    date:        "April 2025",
    views:       1830,
  },
  {
    id:          7,
    type:        "guide",
    category:    "design",
    title:       "Contributing to Open Source as a Designer",
    description: "Most design contribution guides are written by engineers. This one isn't. Clarisse walks through the entire design contribution workflow from Figma to merged PR.",
    author:      "Clarisse Iradukunda",
    authorRole:  "UI/UX Designer",
    readTime:    "10 min read",
    difficulty:  "beginner",
    tags:        ["design", "figma", "contribution", "ux"],
    link:        "#",
    featured:    false,
    date:        "April 2025",
    views:       541,
  },
  {
    id:          8,
    type:        "tutorial",
    category:    "python",
    title:       "Django for Beginners — Build Your First Model and View",
    description: "Used in the EduTrack Rwanda sessions. Covers Django project setup, models, views, URL routing, and the admin panel — all from scratch.",
    author:      "Tech Lead",
    authorRole:  "OSK Maintainer",
    readTime:    "25 min read",
    difficulty:  "beginner",
    tags:        ["python", "django", "backend", "web"],
    link:        "#",
    featured:    false,
    date:        "March 2025",
    views:       488,
  },
  {
    id:          9,
    type:        "template",
    category:    "open-source",
    title:       "GitHub Issue & PR Templates for OSK Projects",
    description: "Copy-paste templates for bug reports, feature requests, and pull request descriptions. Standardises how contributors communicate across all OSK repositories.",
    author:      "Solange Mukamana",
    authorRole:  "Technical Writer",
    readTime:    "2 min setup",
    difficulty:  "beginner",
    tags:        ["github", "templates", "issues", "prs"],
    link:        "#",
    featured:    false,
    date:        "March 2025",
    views:       392,
  },
];

const externalTools: ExternalTool[] = [
  {
    name:        "GitHub",
    description: "Where all OSK projects live. Your profile here is your most important portfolio.",
    link:        "https://github.com",
    icon:        <Github size={18} />,
    category:    "Version control",
    free:        true,
  },
  {
    name:        "VS Code",
    description: "The editor used by most OSK contributors. Extensive extensions, Git built-in.",
    link:        "https://code.visualstudio.com",
    icon:        <FileCode size={18} />,
    category:    "Editor",
    free:        true,
  },
  {
    name:        "Figma",
    description: "Design tool for OSK's UI/UX contributors. Free for individuals.",
    link:        "https://figma.com",
    icon:        <Layout size={18} />,
    category:    "Design",
    free:        true,
  },
  {
    name:        "Vercel",
    description: "Where most OSK frontend projects are deployed. One-click from GitHub.",
    link:        "https://vercel.com",
    icon:        <Globe size={18} />,
    category:    "Deployment",
    free:        true,
  },
  {
    name:        "Postman",
    description: "API testing tool used during AfyaConnect and EduTrack Rwanda development.",
    link:        "https://postman.com",
    icon:        <Terminal size={18} />,
    category:    "API Testing",
    free:        true,
  },
  {
    name:        "YouTube — OSK Sessions",
    description: "Recorded Wednesday sessions. Full replays of every technical session we've run.",
    link:        "https://youtube.com",
    icon:        <Youtube size={18} />,
    category:    "Videos",
    free:        true,
  },
];

// ─── Sub-components 

const TypeBadge = ({ type }: { type: ResourceType }) => {
  const meta = TYPE_META[type];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${meta.bg} ${meta.text} ${meta.border}`}>
      {meta.icon}
      {meta.label}
    </span>
  );
};

const AuthorAvatar = ({ name, size = "sm" }: { name: string; size?: "sm" | "md" }) => {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  const colors   = ["bg-blue-500","bg-violet-500","bg-emerald-500","bg-orange-500","bg-rose-500","bg-teal-500"];
  const color    = colors[name.charCodeAt(0) % colors.length];
  const sz       = size === "sm" ? "w-7 h-7 text-xs" : "w-10 h-10 text-sm";
  return (
    <div className={`${sz} rounded-full ${color} flex items-center justify-center text-white font-bold flex-shrink-0`}>
      {initials}
    </div>
  );
};

// ─── Featured Card ─────────────────────────────────────────────────────────────

const FeaturedResourceCard = ({ resource }: { resource: Resource }) => (
  <div className="bg-brand-950 rounded-2xl overflow-hidden border border-brand-950 mb-8">
    <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">

      {/* Left label column */}
      <div className="md:col-span-1 flex md:flex-col gap-3 md:gap-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-950 border border-brand-300 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-300" />
          <span className="text-brand-300 text-xs font-bold uppercase tracking-wider">Featured</span>
        </div>
        <div className="hidden md:block border-t border-brand-50 pt-4 space-y-3">
          <div className="flex items-center gap-2 text-brand-50 text-sm">
            <Clock size={16} />
            {resource.readTime}
          </div>
          <div className={`text-sm font-bold ${DIFFICULTY_META[resource.difficulty].color}`}>
            {DIFFICULTY_META[resource.difficulty].label}
          </div>
          <div className="flex items-center gap-1.5 text-brand-50 text-xs">
            <Star size={14} />
            {resource.views.toLocaleString()} views
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="md:col-span-3">
        <TypeBadge type={resource.type} />
        <h2 className="text-2xl sm:text-3xl font-black text-brand-50 leading-tight mt-4 mb-3">
          {resource.title}
        </h2>
        <p className="text-brand-100 text-base leading-relaxed mb-6">
          {resource.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {resource.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-full text-brand-50 text-xs font-mono border border-brand-400">
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <AuthorAvatar name={resource.author} size="md" />
          <div>
            <p className="text-white text-sm font-bold">{resource.author}</p>
            <p className="text-brand-50 text-xs">{resource.authorRole} · {resource.date}</p>
          </div>
        </div>
      </div>

      {/* CTA column */}
      <div className="md:col-span-1 flex md:flex-col gap-3 items-start md:items-stretch">
        <a
          href={resource.link}
          className="flex items-center justify-center gap-2 px-5 py-3 bg-primary-colour hover:bg-brand-700 text-white text-sm font-bold rounded-xl transition-colors duration-200"
        >
          Read now <ArrowUpRight size={14} />
        </a>
        <a
          href={resource.link}
          className="flex items-center justify-center gap-2 px-5 py-3 border border-primary-colour text-brand-50 hover:text-primary-colour hover:border-brand-700 text-sm font-semibold rounded-xl transition-colors duration-200"
        >
          Save for later
        </a>
      </div>
    </div>
  </div>
);

// ─── Resource Card ─────────────────────────────────────────────────────────────

const ResourceCard = ({ resource }: { resource: Resource }) => (
  <a
    href={resource.link}
    className="group bg-brand-white rounded-2xl border border-brand-300 p-5 flex flex-col hover:border-brand-600 hover:shadow-md transition-all duration-200"
  >
    {/* Top row */}
    <div className="flex items-center justify-between mb-4">
      <TypeBadge type={resource.type} />
      <span className={`text-xs font-bold ${DIFFICULTY_META[resource.difficulty].color}`}>
        {DIFFICULTY_META[resource.difficulty].label}
      </span>
    </div>

    {/* Title */}
    <h3 className="text-base font-black text-brand-950 leading-snug mb-2 group-hover:text-primary-colour transition-colors duration-200">
      {resource.title}
    </h3>

    {/* Description */}
    <p className="text-text-body text-sm leading-relaxed mb-4 flex-1">
      {resource.description}
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-1.5 mb-4">
      {resource.tags.slice(0, 3).map((tag) => (
        <span key={tag} className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-500 text-sm font-mono">
          #{tag}
        </span>
      ))}
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between pt-3 border-t border-stone-100">
      <div className="flex items-center gap-2">
        <AuthorAvatar name={resource.author} />
        <div>
          <p className="text-stone-700 text-xs font-semibold">{resource.author}</p>
          <p className="text-stone-400 text-xs">{resource.date}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 text-stone-400 text-xs">
        <span className="flex items-center gap-1">
          <Clock size={11} /> {resource.readTime}
        </span>
        <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
      </div>
    </div>
  </a>
);

// ─── Page ──────────────────────────────────────────────────────────────────────

const Resources = () => {
  const [activeType,     setActiveType]     = useState<ResourceType | "all">("all");
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>("all");
  const [searchQuery,    setSearchQuery]    = useState("");

  const featured    = resources.find((r) => r.featured)!;
  const nonFeatured = resources.filter((r) => !r.featured);

  const filtered = nonFeatured.filter((r) => {
    const matchType     = activeType     === "all" || r.type     === activeType;
    const matchCategory = activeCategory === "all" || r.category === activeCategory;
    const q             = searchQuery.toLowerCase();
    const matchSearch   = !q
      || r.title.toLowerCase().includes(q)
      || r.description.toLowerCase().includes(q)
      || r.tags.some((t) => t.toLowerCase().includes(q))
      || r.author.toLowerCase().includes(q);
    return matchType && matchCategory && matchSearch;
  });

  return (
    <>
    

      {/* HERO */}
      <section className="pt-32 pb-16 px-6 md:px-20 bg-stone-50 relative overflow-hidden " style={{ background: "linear-gradient(150deg, #f0f4ff 0%, #ffffff 60%)" }}>
        {/* Warm dot texture */}
        
        {/* Emerald glow */}
        <div className="absolute w-80 h-80 rounded-full -top-16 -left-16 pointer-events-none" style={{ background: "#dbeafe", filter: "blur(60px)", opacity: 0.5 }} />
        <div className="absolute w-60 h-60 rounded-full top-10 right-10 pointer-events-none"  style={{ background: "#ede9fe", filter: "blur(50px)", opacity: 0.4 }} />

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl mb-10">
            <EyebrowLabel text="OSK Library" align="left"/>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-950 leading-none tracking-tight mb-5">
              Everything you need
              <br />
              <span className="text-primary-colour">to start contributing.</span>
            </h1>

            <p className="text-text-body text-base md:text-lg leading-relaxed max-w-xl">
              Tutorials, guides, templates, tools, and recorded sessions — all written
              by OSK contributors, for OSK contributors. Practical. Rwanda-specific. Free.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative max-w-xl">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-diabled" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tutorials, guides, tools..."
              className="w-full pl-11 pr-4 py-3.5 bg-white border border-stone-200 rounded-2xl text-text-body text-base placeholder:text-text-body focus:outline-none focus:border-primary-colour focus:ring-2 focus:ring-emerald-100 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs font-semibold"
              >
                clear
              </button>
            )}
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-stone-200 justify-center ">
            {[
              { n: resources.length, label: "resources" },
              { n: resources.filter((r) => r.type === "tutorial").length, label: "tutorials" },
              { n: resources.filter((r) => r.type === "video").length, label: "video sessions" },
              { n: resources.reduce((a, r) => a + r.views, 0).toLocaleString(), label: "total views" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-1.5">
                <span className="text-2xl font-black text-primary-colour">{s.n}</span>
                <span className="text-text-body text-lg">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED  */}
      <section className="px-6 md:px-20 py-10 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <FeaturedResourceCard resource={featured} />
        </div>
      </section>

      {/*FILTER + GRID */}
      <section className="px-6 md:px-20 py-12 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto">

          {/* Filter bar */}
          <div className="flex flex-col gap-4 mb-10">
            {/* Type tabs */}
            <div className="flex gap-0 overflow-x-auto border-b border-stone-200">
              {TYPE_FILTERS.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveType(f.key as ResourceType | "all")}
                  className={`px-4 py-2.5 text-sm font-bold whitespace-nowrap border-b-2 transition-colors duration-200 -mb-px ${
                    activeType === f.key
                      ? "border-primary-colour text-primary-colour"
                      : "border-transparent text-brand-300 hover:text-primary-colour"
                  }`}
                >
                  {f.label}
                  {f.key !== "all" && (
                    <span className="ml-1.5 text-xs text-brand-300 font-normal">
                      ({resources.filter((r) => r.type === f.key).length})
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Category pills + result count */}
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex flex-wrap gap-2">
                {CATEGORY_FILTERS.map((f) => (
                  <button
                    key={f.key}
                    onClick={() => setActiveCategory(f.key)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors duration-200 ${
                      activeCategory === f.key
                        ? "bg-primary-colour text-white"
                        : "bg-brand-50 text-brand-300 hover:bg-primary-colour hover:text-white"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
              <p className="text-text-body text-base">
                {filtered.length} resource{filtered.length !== 1 ? "s" : ""}
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>
          </div>

          {/* Resource grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((r) => <ResourceCard key={r.id} resource={r} />)}
            </div>
          ) : (
            <div className="text-center py-24">
              <BookOpen size={36} className="mx-auto mb-4 text-stone-300" />
              <p className="font-bold text-stone-500 mb-1">No resources found.</p>
              <p className="text-stone-400 text-sm">Try a different search term or clear your filters.</p>
              <button
                onClick={() => { setActiveType("all"); setActiveCategory("all"); setSearchQuery(""); }}
                className="mt-5 px-5 py-2.5 rounded-full border border-stone-300 text-sm font-semibold text-stone-600 hover:bg-stone-100 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* EXTERNAL TOOLS */}
      <section className="px-6 md:px-20 py-20 bg-brand-50 border-t border-brand-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
            <EyebrowLabel text="Curated tools" align="left"/>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-950 leading-tight">
                The tools every
                <br />
                OSK contributor uses.
              </h2>
            </div>
            <p className="text-text-body text-base max-w-xs md:text-right leading-relaxed">
              Hand-picked by maintainers. Everything here is free and battle-tested across OSK projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {externalTools.map((tool) => (
              <a
                key={tool.name}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border border-brand-200 p-5 flex items-start gap-4 hover:border-brand-400 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-text-body shrink-0 group-hover:bg-brand-50 group-hover:text-primary-colour transition-colors">
                  {tool.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-black text-brand-950 text-sm">{tool.name}</p>
                    <ExternalLink size={12} className="text-brand-200 group-hover:text-brand-600 transition-colors shrink-0" />
                  </div>
                  <p className="text-text-body text-xs leading-relaxed mb-2">{tool.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-brand-50 text-brand-600 text-xs font-medium">
                      {tool.category}
                    </span>
                    {tool.free && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-brand-600 text-xs font-bold border border-emerald-100">
                        Free
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING PATHS */}
      <section className="px-6 md:px-20 py-20 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <EyebrowLabel text="Where to start" align="left"/>

            <h2 className="text-2xl sm:text-3xl font-black text-brand-950">
              Not sure what to read first?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Path 1 */}
            <div className="rounded-2xl border-2 border-blue-100 bg-blue-50 p-7">
              <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white mb-5">
                <Terminal size={18} />
              </div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                Path 1 — Developers
              </p>
              <h3 className="text-lg font-black text-brand-950 mb-3 leading-snug">
                New to open source?
                <br />Start here.
              </h3>
              <ol className="space-y-2 mb-6">
                {[
                  "Your First Pull Request: A Complete Walkthrough",
                  "How to Read Someone Else's Codebase",
                  "Git Rebase vs Merge — Explained Simply",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-body">
                    <span className="w-5 h-5 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center text-sm font-black shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
              <button
                onClick={() => { setActiveType("tutorial"); setActiveCategory("git"); }}
                className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors hover:cursor-pointer"
              >
                Start this path <ChevronRight size={13} />
              </button>
            </div>

            {/* Path 2 */}
            <div className="rounded-2xl border-2 border-violet-100 bg-violet-50 p-7">
              <div className="w-10 h-10 rounded-xl bg-violet-500 flex items-center justify-center text-white mb-5">
                <Layout size={18} />
              </div>
              <p className="text-xs font-bold text-violet-600 uppercase tracking-wider mb-2">
                Path 2 — Designers
              </p>
              <h3 className="text-lg font-black text-brand-950 mb-3 leading-snug">
                Never opened a PR?
                <br />That's okay.
              </h3>
              <ol className="space-y-2 mb-6">
                {[
                  "Contributing to Open Source as a Designer",
                  "Your First Pull Request: A Complete Walkthrough",
                  "OSK Project README Template",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-body">
                    <span className="w-5 h-5 rounded-full bg-violet-200 text-violet-700 flex items-center justify-center text-sm font-black shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
              <button
                onClick={() => { setActiveType("all"); setActiveCategory("design"); }}
                className="text-sm font-bold text-violet-600 hover:text-violet-800 flex items-center gap-1 transition-colors hover:cursor-pointer"
              >
                Start this path <ChevronRight size={13} />
              </button>
            </div>

            {/* Path 3 */}
            <div className="rounded-2xl border-2 border-emerald-100 bg-emerald-50 p-7">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white mb-5">
                <Rss size={18} />
              </div>
              <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">
                Path 3 — Writers
              </p>
              <h3 className="text-lg font-black text-brand-950 mb-3 leading-snug">
                Words are code too.
                <br />Start writing.
              </h3>
              <ol className="space-y-2 mb-6">
                {[
                  "OSK Project README Template",
                  "GitHub Issue & PR Templates for OSK Projects",
                  "How Open Source Changed My Career",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-body">
                    <span className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center text-sm font-black shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
              <button
                onClick={() => { setActiveType("all"); setActiveCategory("career"); }}
                className="text-xs font-bold text-emerald-600 hover:text-emerald-800 flex items-center gap-1 transition-colors hover:cursor-pointer"
              >
                Start this path <ChevronRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SUBMIT A RESOURCE */}
      <section className="px-6 md:px-20 py-20 bg-background-colour relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
            backgroundSize:  "28px 28px",
          }}
        />
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-14">
          <div className="max-w-xl">
            <EyebrowLabel text="Open to submissions" align="left"/>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-5">
              Built something useful?
              <br />
              <span className="text-primary-colour">Teach the community.</span>
            </h2>
            <p className="text-stone-400 text-base leading-relaxed">
              The best resources on this page were written by OSK contributors — not
              staff. If you've learned something the hard way, write it up and share it.
              A good tutorial saves the next ten people your pain.
            </p>
          </div>

          {/* Submission card */}
          <div className="bg-white rounded-2xl p-7 min-w-72 shrink-0 w-full lg:w-auto max-w-sm">
            <h3 className="text-lg font-black text-stone-900 mb-2">Submit a resource</h3>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              Tutorials, guides, templates, recorded sessions — anything that helps someone contribute better.
            </p>

            <div className="space-y-3 mb-6">
              {[
                { icon: <BookOpen size={14} />, label: "Write a tutorial or guide" },
                { icon: <Layout   size={14} />, label: "Share a template or starter" },
                { icon: <Play     size={14} />, label: "Submit a recorded session" },
                { icon: <Wrench   size={14} />, label: "Recommend a tool" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-base text-brand-950">
                  <div className="w-7 h-7 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                    {item.icon}
                  </div>
                  {item.label}
                </div>
              ))}
            </div>

            <a
              href="mailto:opensourcekigali@gmail.com?subject=Resource Submission"
              className="flex items-center justify-center gap-2 w-full py-3 bg-primary-colour hover:bg-brand-700 text-white text-base font-bold rounded-xl transition-colors"
            >
              Submit via email <ArrowUpRight size={14} />
            </a>

            <NavLink
              to="/community"
              className="flex items-center justify-center gap-2 w-full py-3 mt-2 border border-stone-200 text-text-body hover:text-stone-800 hover:border-text-body text-sm font-semibold rounded-xl transition-colors"
            >
              Or post in #resources on Discord
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;