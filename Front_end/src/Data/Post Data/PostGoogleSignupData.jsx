import Cookies from "js-cookie";
// import dotenv from "dotenv";

// dotenv.config();

export const googleSinupData = async () => {
  const token = Cookies.get("gAuth");
  if (token != undefined) {
    try {
      const userData = await fetch("http://localhost:3001/user/social/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ googleToken: token }),
      });
      if (userData.status == 200) {
        return await userData.json();
      }
    } catch (error) {
      console.log(error);
    }
  }
};
