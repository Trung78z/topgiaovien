import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="flex min-h-[90vh] w-full flex-col items-center justify-around gap-y-4">
        <h1 className="font-kumbh card h-max rounded-lg border-2 border-primary-500 p-4 text-center text-[36px] font-semibold text-primary-500">
          Chào mừng bạn đến với bảng điều khiển của
          <span className="text-yellow-400">Top</span>GiaoVien
        </h1>
        <ul className="flex list-none flex-col items-center gap-6">
          <li className="w-full space-y-4 rounded-lg border-2 border-primary-500 p-4 xl:w-[60%]">
            <div className="flex items-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
                  fill="#13296A"
                />
                <path
                  d="M17.08 14.1499C14.29 12.2899 9.73996 12.2899 6.92996 14.1499C5.65996 14.9999 4.95996 16.1499 4.95996 17.3799C4.95996 18.6099 5.65996 19.7499 6.91996 20.5899C8.31996 21.5299 10.16 21.9999 12 21.9999C13.84 21.9999 15.68 21.5299 17.08 20.5899C18.34 19.7399 19.04 18.5999 19.04 17.3599C19.03 16.1299 18.34 14.9899 17.08 14.1499ZM14 18.1299H12.75V19.3799C12.75 19.7899 12.41 20.1299 12 20.1299C11.59 20.1299 11.25 19.7899 11.25 19.3799V18.1299H9.99996C9.58996 18.1299 9.24996 17.7899 9.24996 17.3799C9.24996 16.9699 9.58996 16.6299 9.99996 16.6299H11.25V15.3799C11.25 14.9699 11.59 14.6299 12 14.6299C12.41 14.6299 12.75 14.9699 12.75 15.3799V16.6299H14C14.41 16.6299 14.75 16.9699 14.75 17.3799C14.75 17.7899 14.41 18.1299 14 18.1299Z"
                  fill="#13296A"
                />
              </svg>
              <Link to="/tai-khoan">
                <h2 className="text-[24px] font-medium">
                  Thêm quản trị viên khác
                </h2>
              </Link>
            </div>
            <p className="pl-9">
              Tạo nội dung khóa học phong phú và các sản phẩm huấn luyện cho học
              viên của bạn. Khi bạn cung cấp cho họ gói giá, chúng sẽ xuất hiện
              trên trang web của bạn!
            </p>
          </li>
          <li className="w-full space-y-4 rounded-lg border-2 border-primary-500 p-4 xl:w-[60%]">
            <div className="flex items-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.37 2.15009L21.37 5.75006C21.72 5.89006 22 6.31006 22 6.68006V10.0001C22 10.5501 21.55 11.0001 21 11.0001H3C2.45 11.0001 2 10.5501 2 10.0001V6.68006C2 6.31006 2.28 5.89006 2.63 5.75006L11.63 2.15009C11.83 2.07009 12.17 2.07009 12.37 2.15009Z"
                  stroke="#13296A"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 22H2V19C2 18.45 2.45 18 3 18H21C21.55 18 22 18.45 22 19V22Z"
                  stroke="#13296A"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 18V11"
                  stroke="#13296A"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 18V11"
                  stroke="#13296A"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18V11"
                  stroke="#13296A"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 18V11"
                  stroke="#13296A"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 18V11"
                  stroke="#13296A"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 22H23"
                  stroke="#13296A"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Link to="/khoa-hoc/them">
                <h2 className="text-[24px] font-medium">Thêm khóa học</h2>
              </Link>
            </div>
            <p className="pl-9">
              Tạo nội dung khóa học phong phú và các sản phẩm huấn luyện cho học
              viên của bạn. Khi bạn cung cấp cho họ gói giá, chúng sẽ xuất hiện
              trên trang web của bạn!
            </p>
          </li>
          <li className="w-full space-y-4 rounded-lg border-2 border-primary-500 p-4 xl:w-[60%]">
            <div className="flex items-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <rect width="36" height="36" rx="8" fill="#EFF3FA" />
                <path
                  d="M16.0495 8.53004L10.0295 12.46C8.09953 13.72 8.09953 16.54 10.0295 17.8L16.0495 21.73C17.1295 22.44 18.9095 22.44 19.9895 21.73L25.9795 17.8C27.8995 16.54 27.8995 13.73 25.9795 12.47L19.9895 8.54004C18.9095 7.82004 17.1295 7.82004 16.0495 8.53004Z"
                  stroke="#13296A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.6301 19.0801L11.6201 23.7701C11.6201 25.0401 12.6001 26.4001 13.8001 26.8001L16.9901 27.8601C17.5401 28.0401 18.4501 28.0401 19.0101 27.8601L22.2001 26.8001C23.4001 26.4001 24.3801 25.0401 24.3801 23.7701V19.1301"
                  stroke="#13296A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.4004 21V15"
                  stroke="#13296A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Link to="/giao-vien/them">
                <h2 className="text-[24px] font-medium">Thêm giáo viên</h2>
              </Link>
            </div>
            <p className="pl-9">
              Tạo nội dung khóa học phong phú và các sản phẩm huấn luyện cho học
              viên của bạn. Khi bạn cung cấp cho họ gói giá, chúng sẽ xuất hiện
              trên trang web của bạn!
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
