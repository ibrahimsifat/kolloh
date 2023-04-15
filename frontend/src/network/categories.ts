import Axios from "./Axios";

export const getCategories = async () => {
  try {
    const response = await Axios.get("categories?populate=*");
    return response.data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
