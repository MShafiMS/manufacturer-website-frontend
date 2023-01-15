import axios from "axios";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";

const primaryAxios = axios.create({
  baseURL: "https://manufacturer-website-g1e2.onrender.com/",
});

// request interceptor
primaryAxios.interceptors.request.use(
  function (config) {
    if (!config.headers.authorization) {
      config.headers.authorization = `Bearer ${localStorage.getItem(
        "accessToken"
      )}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// response interceptor
primaryAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 403 || error.response.status === 401) {
      signOut(auth);
      localStorage.removeItem("accessToken");
    }
    return Promise.reject(error);
  }
);

export default primaryAxios;
