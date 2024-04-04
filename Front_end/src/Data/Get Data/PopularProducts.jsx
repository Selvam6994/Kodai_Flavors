
// get popular products data from api
export const getPopularProductData = async () => {
  const response = await fetch(
    "http://localhost:3000/api//get/popular/products",
    { method: "GET" }
  );
  const jsonData = await response.json();
  return jsonData;
};

