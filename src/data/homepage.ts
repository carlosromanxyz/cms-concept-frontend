import { strapi } from "@/lib/strapi";

export const getHomePageContent = async () => {
  try {
    const response = await strapi.find('homepage', {
      populate: "*", // Retrieve all fields
    });
    return response;
  } catch (error) {
    console.error("Error fetching the home page content:", error);
    return null;
  }
}