import { IHeader } from "@/interface/header";
import { strapi } from "@/lib/strapi";
import { StrapiResponse } from "strapi-sdk-js";

export const getHeaderContent = async (): Promise<StrapiResponse<IHeader>> => {
  try {
    const response: StrapiResponse<IHeader> = await strapi.find('header', {
      populate: ['logo.image', 'navigation', 'cta'],
    });
    return response;
  } catch (error) {
    console.error("Error fetching the header content:", error);
    throw new Error("Error fetching the header content");
  }
};
