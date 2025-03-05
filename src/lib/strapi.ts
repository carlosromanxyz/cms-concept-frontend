import { strapi } from '@strapi/client';

export const client = strapi({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`
})