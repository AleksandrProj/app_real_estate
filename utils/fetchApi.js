import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchAPI = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      "X-RapidAPI-Key": "728c9c67a9mshfcd4dea6e539bffp1735d2jsn58cb4c40f62c",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};
