import {
  loginFailure,
  loginRequest,
  loginSuccess,
} from "@/features/auth/authSlice";
import { authRefreshToken } from "@/services/authService";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

export default function LayoutTop() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginRequest());
    const fetch = async () => {
      try {
        const res = await authRefreshToken();
        if (res.success === false) {
          return dispatch(loginFailure(res.msg));
        }
        sessionStorage.setItem("accessToken", res.msg.accessToken);
        dispatch(loginSuccess(res.msg));
      } catch (error) {
        dispatch(loginFailure(error.message));
        console.log(error);
      }
    };
    fetch();
  }, [dispatch]);

  return (
    <div>
      <Outlet />
    </div>
  );
}
