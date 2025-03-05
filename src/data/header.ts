import { client } from "@/lib/strapi";

export const getHeaderContent = async () => {
  try {
    const response = await client.single('header').find({
      populate: {
        logo: {
          populate: 'image'
        },
        navigation: {
          populate: '*'
        },
        cta: {
          populate: '*'
        }
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching the header content:", error);
    throw new Error("Error fetching the header content");
  }
};
