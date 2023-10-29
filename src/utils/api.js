import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        // "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY || "YOUR_API_KEY",
        "X-RapidAPI-Key" : "c36c8b7bd0mshbaf4bfa6d41a5e1p187c95jsndea2f2fc1ced",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};