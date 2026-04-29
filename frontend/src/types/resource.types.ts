export type ResourceType     = "tutorial" | "guide" | "tool" | "template" | "article" | "video";
export type ResourceCategory = "all" | "git" | "javascript" | "python" | "open-source" | "design" | "career";

export interface Resource {
  id:          number;
  slug:        string;
  type:        ResourceType;
  category:    ResourceCategory;
  title:       string;
  description: string;
  author:      string;
  authorRole:  string;
  readTime:    string;
  difficulty:  "beginner" | "intermediate" | "advanced";
  tags:        string[];
  link:        string;
  featured:    boolean;
  date:        string;
  views:       number;
  coverImage?: string;
}

export type TeamRole =
  | "community-lead"
  | "operations-lead"
  | "tech-lead"
  | "maintainer"
  | "community-manager"
  | "content-lead"
  | "content-creator"
  | "moderator"
  | "events-lead"
  | "partnerships-lead"
  | "contributor";

export interface SocialLinks {
  github?:   string;
  twitter?:  string;
  linkedin?: string;
  website?:  string;
}

export interface TeamMember {
  id:       number;
  name:     string;
  role:     TeamRole;
  label:    string;
  bio:      string;
  initials: string;
  avatarBg: string;
  avatar?:  string;
  links:    SocialLinks;
  featured: boolean;
  handles:  string[];
}

export interface NavLink {
  name:      string;
  path:      string;
  external?: boolean;
}

export interface NavDropdown {
  name:  string;
  items: NavLink[];
}

export type ContactCategory =
  | "general"
  | "partnership"
  | "project"
  | "press"
  | "support";

export interface ContactFormState {
  name:     string;
  email:    string;
  category: ContactCategory;
  subject:  string;
  message:  string;
}

export type FormStatus = "idle" | "submitting" | "success" | "error";