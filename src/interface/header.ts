export interface IHeader {
  data: {
    logo: {
      url: string;
      alternativeText: string;
    };
    navigation: {
      id: number;
      text: string;
      slug: string;
    }[];
    cta: {
      buttonText: string;
      buttonLink: string;
    }
  }
}