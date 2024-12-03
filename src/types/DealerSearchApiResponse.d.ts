export interface Pagination {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
}

export interface FilterLink {
  slug: string;
  name: string;
}

export interface Dealer {
  id: number;
  title: string;
  strasse: string;
  plz: number;
  ort: string;
  entfernung: number | null;
  webseite: string | null;
  eMail: string | null;
  telefon: string | null;
  aktionsteilnehmer: boolean;
  logo: string | null;
  slug: string;
  oeffnungszeiten_heute: string | null;
  financing: boolean;
  tireTypes: string[];
}

export interface SEO {
  titel: string;
  description: string;
  keywords: string;
  robots: string;
  canonical: string;
  og: {
    titel: string;
    image: string;
  };
}

export interface AdditionalContent {
  title: string;
  text: string;
}

export interface ContentItem {
  type: string;
  size?: number;
  anchor?: string | null;
  icon?: string | null;
  title?: string | null;
  subtext?: string | null;
  text?: string | null;
  attentionHeadline?: string | null;
  attentionText?: string | null;
  attentionImage?: string | null;
}

export interface DealerSearchApiResponse {
  pagination: Pagination;
  filterLinks: FilterLink[];
  data: Dealer[];
  seo: SEO;
  additionalContent: AdditionalContent;
  content: ContentItem[];
}
