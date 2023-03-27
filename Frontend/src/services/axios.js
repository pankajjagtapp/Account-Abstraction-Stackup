import axios from "axios";
import { loader } from "../redux/ReduxSlice";
// import { handleTokenExpiry } from "./UserService";
import { RESPONSES } from "../redux/Constants.tsx";
import  {storeInstance}  from "../App.tsx";
import { API_HOST, SECRET_KEY } from "../constant.tsx";
import * as CryptoJS from 'crypto-js';
// import { CommonService } from "./CommonServices";
import { toaster } from "../component/common/Toast/Toast";

axios.defaults.baseURL = API_HOST;

//For handling requests when JWT Token expires
let failedQueue = [];
const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  })
  failedQueue = [];
}

axios.interceptors.request.use(
(config) => {
    let token = storeInstance.getState().user.userDetails.token || ""
    config.headers["Authorization"] = token
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
  },
  (error) => {
    // storeInstance.dispatch(loader(false));
    return error;
  }
);
// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    // storeInstance.dispatch(loader(false));
    return response;
  },
  (error) => {
  
    storeInstance.dispatch(loader(false));
    const originalRequest = error.config;
    failedQueue.push(originalRequest);
    // CommonService.handleJWTExpiry(error)
    if (error.response.status === 403) {
      processQueue(error, null);
    }

    return error;
  }
);

function formatUrl(url, params) {
  let network = localStorage.getItem("network");
  if (!network) network = 'eth';
  network = network.toUpperCase();
  params =
    params && Object.keys(params).length > 0
      ? `?${new URLSearchParams(params).toString()}`
      : ``;
  return `${url}${params}`;
}

function handleSuccess(res) {
  if (res.status === RESPONSES.SUCCESS || res.status === RESPONSES.CREATED) {
    if (res.data.error && res.data.message) {
      toaster.error(res.data.message)
    } else if (!res.data.error && res.data.message) {
      toaster.success(res.data.message);
    }
  }
  else if (res.response.status === RESPONSES.BADREQUEST) {
    res.response?.data?.message && toaster.error(res.response.data.message);
  }
  else if (res.response.status === RESPONSES.UN_AUTHORIZED) {
    res.response?.data?.message && toaster.error(res.response.data.message);
  }
  else {
    res?.data?.message && toaster.error(res.data.message);
  }
};

export const apiCallPost = (
  url,
  data,
  params = {},
  showtoaster = false,
  showLoader = true
) =>
  new Promise(async (resolve) => {
    showLoader && storeInstance.dispatch(loader(true));
    // let ciphertext = await CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
    axios
    .post(formatUrl(url, params))
    .then((res) => {
      showLoader && storeInstance.dispatch(loader(false));
      showtoaster && handleSuccess(res);
        resolve(res.data);
      })
      .catch((error) => {
        showLoader && storeInstance.dispatch(loader(false));
        resolve(null);
      });
  });

export const apiCallPostFormData = (
  url,
  data,
  params = {},
  showtoaster = false,
  showLoader = true
) =>
  new Promise(async (resolve) => {
    // console.log(url,data,"This is the post form data ")
    showLoader && storeInstance.dispatch(loader(true));
    //let ciphertext = await CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
    axios
      .post(formatUrl(url, params), data)
      .then((res) => {
        showLoader && storeInstance.dispatch(loader(false));
        showtoaster && handleSuccess(res);
        resolve(res.data);
      })
      .catch((error) => {
        showLoader && storeInstance.dispatch(loader(false));
        resolve(null);
      });
  });

export const apiCallGet = (
  url,
  params = {},
  showtoaster = false,
  showLoader = true
) =>

  new Promise((resolve) => {
    axios
      .get(formatUrl(url, params))
      .then((res) => {
        showtoaster && handleSuccess(res);

        resolve(res.data);
      })
      .catch((error) => {
        resolve(null);
      });
  });

export const apiCallPut = (
  url,
  data,
  params = {},
  showtoaster = false,
  showLoader = true
) =>
  new Promise(async (resolve) => {
    showLoader && storeInstance.dispatch(loader(true));
    let ciphertext = await CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
    axios
      .put(formatUrl(url, params), { data: ciphertext })
      .then((res) => {
        showLoader && storeInstance.dispatch(loader(false));
        showtoaster && handleSuccess(res);
        resolve(res.data);
      })
      .catch((error) => {
        showLoader && storeInstance.dispatch(loader(false));
        resolve(null);
      });
  });

export const apiCallPatch = (
  url,
  data,
  params = {},
  showtoaster = false,
  showLoader = true
) =>
  new Promise(async (resolve) => {
    showLoader && storeInstance.dispatch(loader(true));
    let ciphertext = await CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
    axios
      .patch(formatUrl(url, params), { data: ciphertext })
      .then((res) => {
        showLoader && storeInstance.dispatch(loader(false));
        showtoaster && handleSuccess(res);
        resolve(res.data);
      })
      .catch((error) => {
        showLoader && storeInstance.dispatch(loader(false));
        resolve(null);
      });
  });

export const apiCallDelete = (
  url,
  params = {},
  showtoaster = false,
  showLoader = true
) =>
  new Promise((resolve) => {
    showLoader && storeInstance.dispatch(loader(true));
    axios
      .delete(formatUrl(url, params))
      .then((res) => {
        showLoader && storeInstance.dispatch(loader(false));
        showtoaster && handleSuccess(res);
        resolve(res.data);
      })
      .catch((error) => {
        showLoader && storeInstance.dispatch(loader(false));
        resolve(null);
      });
  });