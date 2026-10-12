/** Content and design types used by the template. */
export type SectionKey = "about" | "projects" | "experience" | "skills" | "education" | "services" | "testimonials" | "highlights" | "gallery" | "stats" | "contact";

export interface Palette { id: string; name: string; bg: string; fg: string; accent: string; muted: string; surface: string }
export interface FontPairing { id: string; name: string; display: string; text: string; mono?: string }

/** Which sections the template shows, and its colour and type options. */
export interface TemplateDefinition { id: string; name: string; sections?: SectionKey[]; palettes?: Palette[]; fonts?: FontPairing[] }

type Item<T> = Partial<T>;
export interface StandardContent {
  name?: string; professional_title?: string; tagline?: string; summary?: string[];
  email?: string; phone?: string; location?: string; availability?: string;
  avatar?: string; cover?: string; website?: string; github?: string; linkedin?: string; instagram?: string;
  skills?: string[];
  projects?: Item<{ title: string; description: string; client: string; year: string; role: string; category: string; image: string; technologies: string[]; live_url: string; github: string }>[];
  experience?: Item<{ job_title: string; company: string; location: string; start_date: string; end_date: string; description: string; technologies: string[]; website: string }>[];
  education?: Item<{ school: string; degree: string; start_date: string; end_date: string; description: string }>[];
  services?: Item<{ title: string; description: string; price: string }>[];
  testimonials?: Item<{ quote: string; name: string; role: string }>[];
  highlights?: Item<{ title: string; detail: string; year: string; url: string }>[];
  gallery?: Item<{ image: string; caption: string; year: string }>[];
  stats?: Item<{ value: string; label: string }>[];
  links?: Item<{ label: string; url: string }>[];
  design?: { palette?: string; font?: string; accent?: string; hidden?: SectionKey[]; labels?: Partial<Record<SectionKey, string>> };
}
