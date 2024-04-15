import { Product_Base_Url } from "../../../global";


  export const getCategories = async()=>{
    try {
      const response = await fetch(`${Product_Base_Url}/api/get/category`,{method:"GET"})
      const jsonData = await response.json()
      return jsonData
    } catch (error) {
      console.log(error)
    }
  }