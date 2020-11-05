import axios from "axios";
import { THEGAMESDB_URL_BASE, THEGAMESDB_API_KEY } from "../config/thegamesdb";

export const getGamesDBGamesFetch = async () => {
  return fetch(
    THEGAMESDB_URL_BASE +
      "v1/Games/ByPlatformID" +
      THEGAMESDB_API_KEY +
      "&id=3",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  // .then((response) => response.json())
  // .then((data) => console.log("fetch thegamesdb", data))
  // .catch((err) => {
  //   console.log(err);
  // });
};

export const getGamesDBGamesAxios = async () => {
  const url =
    THEGAMESDB_URL_BASE +
    "v1/Games/ByPlatformID" +
    THEGAMESDB_API_KEY +
    "&id=3";
  return axios(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  // .then((res) => {
  //   console.log("axios thegamesdb", res.data);
  // })
  // .catch((error) => {
  //   console.log("Error!", error);
  // });
};
