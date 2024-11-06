import { toast } from "react-toastify";
import { loginUser } from "../../services/auth/login";
import { checkUserAuth } from "../../services/auth/checkAuth";

export const LoginUser = (data) => {
  return async (dispatch) => {
    try {
      const response = await loginUser(data);

      if (response?.data?.success) {
        const user = response.data.user;
        const isAuthenticated = response.data.success;
        dispatch({
          type: "LOGIN_USER",
          user: user,
          isAuthenticated: isAuthenticated,
          isLoading: false,
        });

        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);

      toast.error("Network error: Unable to reach the server.");
    }
  };
};

export const CheckUserAuth = () => {
  return async (dispatch) => {
    try {
      const response = await checkUserAuth();
      console.log(response);
      
      const user = response.data.user;
      const isAuthenticated = response.data.success;
      if (response?.data?.success) {
        dispatch({
          type: "CHECK_AUTH",
          user: user,
          isAuthenticated: isAuthenticated,
          isLoading: false,
        });
      } else {
        dispatch({
          type: "CHECK_AUTH",
          user: null,
          isAuthenticated: isAuthenticated,
          isLoading: false,
        });

      }
    } catch (error) {
      console.log("error");
      console.log(error);
      toast.error("Network error: Unable to reach the server.");
    }
  };
};
