import { client } from "@/lib/strapi";

export const getHomePageContent = async () => {
  try {
    const response = await client.single('homepage').find({
      populate: {
        hero: {
          populate: '*'
        }
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching the home page content:", error);
    throw new Error("Error fetching the home page content");
  }
}