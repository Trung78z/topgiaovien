import { Link } from "react-router-dom";
export default function LogoTopTeacher() {
  return (
    <Link to="/" className="flex-shrink-0">
      <img
        loading="lazy"
        src="/Logo.svg"
        width={11}
        height={11}
        className="h-full w-52 rounded-lg"
        alt="Logo top giáo viên"
      ></img>
    </Link>
  );
}
