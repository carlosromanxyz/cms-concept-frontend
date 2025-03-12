import { client } from "@/lib/strapi";

export const getAllLandings = async () => {
  try {
    const response = await client.collection('landings');
    return response;
  } catch (error) {
    console.error("Error fetching landing page:", error);
    return null;
  }
};