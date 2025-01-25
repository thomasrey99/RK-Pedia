"use server"
import { urlFormat } from "./urlFormat";

export const fetchData = async (url, query = []) => {
  try {
    const urlFetch = await urlFormat(url, query);
    const res = await (await fetch(urlFetch)).json();
    return {
      error: false,
      message: "Data successfully obtained!",
      body: res,
    };
  } catch (error) {
    return{
        error:true,
        message:error.message,
        body:null
    }
  }
};
