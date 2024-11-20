import { apiClient } from "./config";

export const apiGetPins = async () => await apiClient.get("/pins");

export const apiCreatePins = async (payload) => apiClient.post("/pins", payload);

export const apiGetPin = async (id) => await apiClient.get(`/pins/${id}`);

export const apiGetPinsByCategory = async (category) => await apiClient.get(`/pins?filter=${JSON.stringify({ category })}`);