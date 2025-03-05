import { client } from "@/lib/strapi";

export const getHomePageContent = async () => {
  try {
    const response = await client.single('homepage');
    return response;
  } catch (error) {
    console.error("Error fetching the home page content:", error);
    return null;
  }
}