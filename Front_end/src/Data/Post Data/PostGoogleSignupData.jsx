import Cookies from "js-cookie";
import { User_Base_Url } from "../../../global";

export const googleSinupData = async () => {
  const token = Cookies.get("gAuth");
  if (token != undefined) {
    try {
      const userData = await fetch(`${User_Base_Url}/user/social/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ googleToken: token }),
      });
      if (userData.status === 200) {
        return await userData.json();
      }
    } catch (error) {
      console.log(error);
    }
  }
};
