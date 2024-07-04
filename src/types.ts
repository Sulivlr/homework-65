export interface ApiPage {
  title: string;
  content: string;
}

export interface Mode extends ApiPage {
  id: string;
}

export interface ApiPages {
  [id: string]: ApiPage
}


