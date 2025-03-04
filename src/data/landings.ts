import { strapi } from "@/lib/strapi";

export const getAllLandings = async () => {
  try {
    const response = await strapi.find('landings');
    return response;
  } catch (error) {
    console.error("Error fetching landing page:", error);
    return null;
  }
};