import { apiCallPost, apiCallGet } from "./axios";





export const register = (data) => {
    return (dispatch) =>
      new Promise((resolve, reject) => {
        apiCallPost(APIURL.REGISTER, data, {}, true, true)
          .then(async (result) => {
            ////console.log('resultLogin', result)
            resolve(result);
          })
          .catch((error) => {
            reject(error);
          });
      });
  };