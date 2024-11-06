import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/get");
    console.log(response.data.data);
    return response.data;
    } catch (error) {
    throw error;
  }
};

export const getUserById = async (id: string) => {
  try {
    const response = await axios.get(`https://dummyjson.com/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
