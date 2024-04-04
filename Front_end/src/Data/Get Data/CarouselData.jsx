export const getCarouselSlides = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/get/carousel/slides",
      { method: "GET" }
    );
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(error);
  }
};
