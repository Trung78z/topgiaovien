import { Button } from "@/components/ui/button";
import { Input } from "@headlessui/react";
import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import { Helmet } from "react-helmet";
export default function LoginPage() {
  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Topgiaovien | Đăng nhập</title>
        <link rel="canonical" href="http://localhost:3000/dang-nhap" />
      </Helmet>
      <div className="flex flex-col space-y-5">
        <h1 className="text-center text-xl font-medium">Đăng nhập</h1>
        <Input
          className="w-[300px] rounded-[8px] border px-3 py-2.5"
          placeholder="Email hoặc số điện thoại"
        />
        <Input
          className="w-[300px] rounded-[8px] border px-3 py-2.5"
          placeholder="Mật khẩu"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2 px-2">
            <Input type="checkbox" id="saveInfo" className="py-0" />
            <label htmlFor="saveInfo" className="cursor-pointer">
              Lưu thông tin
            </label>
          </div>
          <Link to="/">Quên mật khẩu?</Link>
        </div>
        <Button
          className="block h-8 border-blue-900 bg-blue-900 px-1 py-1 text-white hover:bg-blue-900/90 hover:text-white"
          variant="outline"
        >
          Đăng nhập
        </Button>
        <div className="h-3"></div>
        <div className="relative">
          <p className="line-container text-center">hoặc</p>
        </div>
        <div className="w-full space-y-2 pt-8">
          <div>
            {" "}
            <GoogleLogin
              size="large"
              width="300px"
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
          <div>
            {" "}
            <FacebookLogin
              appId="873424277963451"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
              icon="fa-facebook"
              cssClass="px-2 w-full bg-blue-600 text-white font-medium py-2 rounded-sm "
            />
          </div>
        </div>
        <div className="text-center">
          <h4>
            Chưa có tài khoản?{" "}
            <Link to="/dang-ki" className="text-blue-500 hover:text-blue-600">
              Đăng kí
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}
