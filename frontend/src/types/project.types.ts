export type ProjectStatus   = "active" | "seeking" | "maintenance" | "new";
export type ProjectCategory = "all" | "platform" | "health" | "education" | "maps" | "tools";
export type DifficultyLevel = "beginner" | "intermediate" | "advanced";
export type IssueLabel      = "good first issue" | "help wanted" | "bug" | "enhancement";

export interface ProjectStats {
  contributors: number;
  prs:          number;
  openIssues:   number;
  stars:        number;
  forks:        number;
}

export interface Issue {
  id:          number;
  title:       string;
  label:       IssueLabel;
  project:     string;
  projectSlug: string;
  difficulty:  DifficultyLevel;
  link:        string;
}

export interface Projects {
  id:           number;
  slug:         string;
  status:       ProjectStatus;
  category:     ProjectCategory;
  image:        string;
  title:        string;
  tagline:      string;
  description:  string;
  techStack:    string[];
  stats:        ProjectStats;
  featured:     boolean;
  language:     string;
  langColor:    string;
  lastActivity: string;
  maintainer:   string;
  repoUrl:      string;
  liveUrl?:     string;
  createdAt:    string;
}