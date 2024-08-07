import { Button } from "@/components/ui/button";
import { Input } from "@headlessui/react";
import { GoogleLogin } from "@react-oauth/google";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Topgiaovien | Đăng kí</title>
        <link rel="canonical" href="http://localhost:3000/dang-ki" />
      </Helmet>
      <div className="flex min-h-[80vh] items-center justify-center">
        <div className="flex flex-col space-y-4">
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
          </div>
          <div className="text-center">
            <h4>
              Bạn đã có tài khoản?
              <Link
                to="/dang-nhap"
                className="text-blue-500 hover:text-blue-600"
              >
                Đăng nhập
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
