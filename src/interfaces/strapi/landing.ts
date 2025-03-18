import { IDynamicZoneBlock } from "./dynamic-zone";

export interface ILanding {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  content: IDynamicZoneBlock[];
}
