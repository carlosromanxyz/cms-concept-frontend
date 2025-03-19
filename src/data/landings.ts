import { Datum } from "@/interfaces/strapi/landing";
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

export const getLandingContentBySlug = async (slug: string, isDraftMode: boolean): Promise<Datum> => {
  try {
    const { data } = await client.collection('landings').find({
      status: isDraftMode ? "draft" : "published",
      filters: { slug: { $eq: slug } },
      populate: {
        content: {
          populate: '*',
        },
      },
    });

    return {
      id: data[0].id,
      title: data[0].title,
      slug: data[0].slug,
      publishedAt: data[0].publishedAt,
      content: data[0].content,
    } as Datum;
  } catch (error) {
    console.error("Error fetching landing content:", error);
    throw new Error("Error fetching landing content");
  }
}