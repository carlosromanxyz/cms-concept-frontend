export interface ILanding {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  id:          number;
  documentId:  string;
  title:       string;
  slug:        string;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  content:     Content[];
}

export interface Content {
  __component:          string;
  id:                   number;
  items?:               FluffyItem[];
  item?:                PurpleItem[];
  displayUF?:           boolean;
  displayIPSA?:         boolean;
  displayCurrentDolar?: boolean;
}

export interface PurpleItem {
  id:      number;
  text:    Text[];
  heading: string;
}

export interface Text {
  type:     string;
  children: Child[];
}

export interface Child {
  type: string;
  text: string;
}

export interface FluffyItem {
  id:      number;
  name:    string;
  content: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page:      number;
  pageSize:  number;
  pageCount: number;
  total:     number;
}
