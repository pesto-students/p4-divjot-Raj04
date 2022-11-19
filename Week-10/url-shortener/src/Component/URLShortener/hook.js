import axios from "axios";

export const useShortenURL = async (url, setShortenURL) => {
  try {
    const response = await axios.get(
      `https://api.shrtco.de/v2/shorten?url=${url}`
    );
    setShortenURL(response.data.result.short_link);
    return response;
  } catch (error) {
    setShortenURL(error.response.data.error);
  }
};
