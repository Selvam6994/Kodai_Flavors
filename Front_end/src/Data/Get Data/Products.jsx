import { Product_Base_Url } from "../../../global";


// get products data
export const getProductData = async () => {
  const response = await fetch(
    `${Product_Base_Url}/api/get/product`,
    {
      method: "GET",
    }
  );
  const jsonData = await response.json();
  return jsonData;
};
