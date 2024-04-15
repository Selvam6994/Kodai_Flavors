import { Product_Base_Url } from "../../../global";

export const getCarouselSlides = async () => {
  try {
    const response = await fetch(
      `${Product_Base_Url}/api/get/carousel/slides`,
      { method: "GET" }
    );
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(error);
  }
};
