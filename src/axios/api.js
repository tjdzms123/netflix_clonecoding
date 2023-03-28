import axios from "axios";

export const instance = axios.create({
    baseURL: "http://52.78.166.176:3000",
});