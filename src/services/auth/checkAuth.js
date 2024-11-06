import apiConfig from "../../config.json";
import httpService from "../httpService";

const apiEndpoint = `${apiConfig.apiURL}/api/auth/check_auth`;

export function checkUserAuth() {
  
  return httpService.get(apiEndpoint, {
    withCredentials: true,
    headers: {
      "Cache-Control": "no-store,no-cache, must-revalidate,proxy-validate",
    },
  });
}
