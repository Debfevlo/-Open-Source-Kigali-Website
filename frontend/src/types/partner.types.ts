export type PartnerCategory = "all" | "university" | "government" | "company" | "ngo";

export interface Partner {
  id:          number;
  name:        string;
  shortName:   string;
  category:    PartnerCategory;
  description: string;
  website:     string;
  logo?:       string;
  initials:    string;
  bg:          string;
  since:       string;
  collab:      string;
  featured:    boolean;
}