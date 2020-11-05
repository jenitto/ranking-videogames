import axios from "axios";
import {
  RAWG_API_KEY,
  RAWG_BASE_URL,
  RAWG_ENDPOINTS,
} from "../config/rawg-config";

// To reverse sort add '-released' to the field:
// Example: getGamesByPlatforms(id, { ordering: "metacritic-released" })
// To get multiple id, separate with commas:
// Example: getGamesByPlatforms('1,2,3', { ordering: "metacritic-released" })

const global_params = { key: RAWG_API_KEY };

export const getRawgGamesFetch = async () => {
  return fetch(RAWG_BASE_URL, {
    method: "GET",
  });
};

export const getGames = async (params) => {
  return axios(RAWG_BASE_URL + RAWG_ENDPOINTS.GAMES, {
    method: "GET",
    params: { ...global_params, ...params },
  });
};

export const getGamesByPlatforms = async (platforms, params) => {
  return axios(RAWG_BASE_URL + RAWG_ENDPOINTS.GAMES, {
    method: "GET",
    params: {
      ...global_params,
      platforms,
      ...params,
    },
  });
};

export const getGame = async (id) => {
  return axios(RAWG_BASE_URL + RAWG_ENDPOINTS.GAMES + `/${id}`, {
    method: "GET",
    params: { ...global_params },
  });
};

export const getPlatforms = async (params) => {
  return axios(RAWG_BASE_URL + RAWG_ENDPOINTS.PLATFORMS, {
    method: "GET",
    params: { ...global_params, ...params },
  });
};

export const getPlatform = async (id) => {
  return axios(RAWG_BASE_URL + RAWG_ENDPOINTS.PLATFORMS + `/${id}`, {
    method: "GET",
    params: { ...global_params },
  });
};

export const getParentPlatforms = async (params) => {
  return axios(RAWG_BASE_URL + RAWG_ENDPOINTS.PARENT_PLATFORMS, {
    method: "GET",
    params: { ...global_params, ordering: "name", params },
  });
};

export const getGenres = async () => {
  return axios(RAWG_BASE_URL + RAWG_ENDPOINTS.GENRES, {
    method: "GET",
    params: { ...global_params },
  });
};
