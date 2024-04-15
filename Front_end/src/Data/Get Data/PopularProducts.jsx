
import { Product_Base_Url } from "../../../global";


// get popular products data from api
export const getPopularProductData = async () => {
  const response = await fetch(`${Product_Base_Url}/api/get/popular/products`, {
    method: "GET",
  });
  const jsonData = await response.json();
  return jsonData;
};
