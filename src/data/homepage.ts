import { client } from "@/lib/strapi";

export const getHomePageContent = async ( isDraftMode: boolean = false ) => {
  try {
    const response = await client.single("homepage").find({
      status: isDraftMode ? "draft" : "published",
      populate: {
        hero: {
          populate: "*",
        },
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching the home page content:", error);
    throw new Error("Error fetching the home page content");
  }
};
