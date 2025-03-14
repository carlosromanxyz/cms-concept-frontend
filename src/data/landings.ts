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

export const getLandingContentBySlug = async (slug: string) => {
  try {
    const landing = await client.collection('landings').find({
      filters: { slug: { $eq: slug } },
      populate: {
        content: {
          populate: '*', // Carga todos los datos dentro de content, incluyendo bloques
        },
      },
    });
    return landing;
  } catch (error) {
    console.error("Error fetching landing content:", error);
    return null;
  }
}