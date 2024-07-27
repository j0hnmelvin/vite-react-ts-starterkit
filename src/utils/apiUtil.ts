// const apiUtil = async (url: RequestInfo | URL, options?: RequestInit) => {
//   const response = await fetch(url, options);
//   return response;
// };

// export default apiUtil;

import axios, { AxiosError } from "axios";
import { API_METHOD, DATA, JSON_TYPE, PARAMS } from "../constants/apiConstants";
import { ApiOptions } from "../types/apiOptions.types";

const apiUtil = async (options: ApiOptions) => {
  const genericHeaders = async () => ({
    "Content-Type": JSON_TYPE,
  });

  const dataOrParams = [API_METHOD.GET].includes(options.method as string)
    ? PARAMS
    : DATA;

  options.onInitial?.();

  axios
    .request({
      url: options.url,
      method: options.method || API_METHOD.GET,
      headers: { ...(await genericHeaders()), ...options.headers },
      [dataOrParams]: options.data,
    })
    .then(({ data }) => {
      return options.onSuccess?.(data);
    })
    .catch((error: AxiosError) => {
      options.onFailure?.(error);
    })
    .finally(() => {
      options.onFinal?.();
    });
};

export default apiUtil;
