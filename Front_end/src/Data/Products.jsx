// get products data
export const getProductData = async () => {
  const response = await fetch("http://localhost:3000/api/get/product", {
    method: "GET",
  });
  const jsonData = await response.json();
  return jsonData;
};
