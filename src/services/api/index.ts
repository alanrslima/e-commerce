import axios, { AxiosInstance } from "axios";

export function createApi(ctx = undefined): AxiosInstance {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      //   "Access-Control-Allow-Origin": "*",
    },
  });
}

export function setupApiClient(ctx = undefined): AxiosInstance {
  const apiInstance = createApi(ctx);

  // Include interceptors if necessary [...]

  return apiInstance;
}

export const api = setupApiClient();
