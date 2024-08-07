import { Link } from "react-router-dom";
export default function LogoTopTeacher() {
  return (
    <Link to="/" className="flex-shrink-0">
      <img
        src="/Logo.svg"
        width={4}
        height={4}
        className="h-full w-52 rounded-lg"
        alt="Logo top giáo viên"
        loading="lazy"
      ></img>
    </Link>
  );
}
