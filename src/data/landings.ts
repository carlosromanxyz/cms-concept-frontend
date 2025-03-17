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
    const { data } = await client.collection('landings').find({
      filters: { slug: { $eq: slug } },
      populate: {
        content: {
          populate: '*',
        },
      },
    });

    return data
  } catch (error) {
    console.error("Error fetching landing content:", error);
    throw new Error("Error fetching landing content");
  }
}