import axios from "axios";

export const createUserFunction = async (data: any) => {
  try {
    const response = await axios.post("http://localhost:5567/user", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return true;
  } catch (error: any) {
    console.error("Erro no login:", error);
    if (error.response) {
      console.log("Status HTTP:", error.response.status);
      return false;
    }
    return false;
  }
};