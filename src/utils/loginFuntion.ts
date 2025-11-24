import axios from "axios";

export const loginFunction = async (data: any) => {
  try {
    const response = await axios.post("http://localhost:5567/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Erro no login:", error);
    if (error.response) {
      console.log("Status HTTP:", error.response.status);
      return false;
    }
    return false;
  }
};