import {
  loginFailure,
  loginRequest,
  loginSuccess,
} from "@/features/auth/authSlice";
import { authRefreshToken } from "@/services/authService";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function LayoutTop() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(loginRequest());
    const fetch = async () => {
      try {
        const res = await authRefreshToken();

        if (res.success === false) {
          dispatch(loginFailure(res.msg));

          return navigate("/dang-nhap");
        } else {
          if (res.msg.role !== "admin") {
            dispatch(loginFailure(res.msg));
            return navigate("/dang-nhap");
          }
          navigate("/");
          sessionStorage.setItem("accessToken", res.msg.accessToken);
          dispatch(loginSuccess(res.msg));
        }
      } catch (error) {
        dispatch(loginFailure(error.message));
        console.log(error);
        navigate("/dang-nhap");
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
