import { API_URL } from "@/services/apiService";
import { createLikeComment } from "@/services/likeComment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { FaUserAlt } from "react-icons/fa";
export default function CardDanhGia({ props }) {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(props);
  }, [props]);

  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const handleLikePost = async () => {
    setLoading(true);
    try {
      const res = await createLikeComment({ commentId: data.id });

      if (res.success === false) {
        setLoading(false);
        return Swal.fire({
          icon: "error",
          html: res.msg,
          showConfirmButton: false,
          timer: 1500,
        });
      }

      const hasLiked = data.commentLike.some((like) => like.userId === user.id);

      const updatedCommentLike = hasLiked
        ? data.commentLike.filter((like) => like.userId !== user.id)
        : [...data.commentLike, { userId: user.id }];

      setData((prev) => ({
        ...prev,
        commentLike: updatedCommentLike,
        _count: {
          commentLike: updatedCommentLike.length,
        },
      }));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response.status === 401) {
        return Swal.fire({
          icon: "info",
          title: "Đăng nhập để like bài viết!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      return Swal.fire({
        icon: "error",
        title: "Đã có lỗi xảy ra!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <>
      <div className="relative grid max-h-60 w-full grid-cols-1 gap-6 rounded-md border p-2 sm:grid-cols-2 sm:gap-10">
        <div className="col-span-1 grid-cols-1">
          <div className="flex w-max items-center gap-x-2">
            {data?.user?.image ? (
              <img
                loading="lazy"
                src={`${API_URL}/api/file/user/${data?.user?.image}`}
                width={44}
                height={44}
                className="max-h-12 min-h-12 min-w-12 max-w-12 rounded-full object-cover"
                alt={`Xếp hạng đánh giá của ${data?.user?.fullName}`}
              />
            ) : (
              <FaUserAlt className="h-11 w-11" />
            )}

            <div className="space-y-1">
              <h4>{data?.user?.fullName || "Ẩn danh"}</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="96"
                height="16"
                viewBox="0 0 96 16"
                fill="none"
              >
                {[...Array(5)].map((_, i) => (
                  <path
                    key={i}
                    d={`M${i * 20 + 8} 0L${i * 20 + 9.7961} 5.52786H${i * 20 + 15.6085}L${i * 20 + 10.9062} 8.94427L${i * 20 + 12.7023} 14.4721L${i * 20 + 8} 11.0557L${i * 20 + 3.29772} 14.4721L${i * 20 + 5.09383} 8.94427L${i * 20 + 0.391548} 5.52786H${i * 20 + 6.20389}L${i * 20 + 8} 0Z`}
                    fill={i < data.level ? "#FFDC3A" : "#E0E0E0"} // Sao đầy đủ hoặc sao trống
                  />
                ))}
              </svg>
            </div>
          </div>
          <p>{data?.content}</p>
          <ul className="flex items-center justify-between">
            <li className="flex items-center gap-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M14.1174 6.40536C13.8201 5.99203 13.1994 5.50005 11.9361 5.50005H9.83211V3.84205C9.83211 3.00472 9.41607 2.22739 8.7194 1.76205C8.3214 1.49672 7.83211 1.4287 7.37744 1.57537C6.92144 1.72203 6.56405 2.06271 6.39006 2.53004L4.97144 6.83338H3.00073C2.17407 6.83338 1.50073 7.50605 1.50073 8.33338V13C1.50073 13.8274 2.17407 14.5 3.00073 14.5H10.6034C12.2674 14.5 12.6748 13.6914 12.9754 12.7907L14.3081 8.7907C14.6194 7.8547 14.5514 7.00736 14.1174 6.40536ZM2.50008 13V8.33338C2.50008 8.05738 2.72475 7.83338 3.00008 7.83338H4.33341V13.5H3.00008C2.72475 13.5 2.50008 13.276 2.50008 13ZM13.3581 8.47405L12.0254 12.474C11.7887 13.1854 11.6401 13.5 10.6028 13.5H5.33341V7.83338C5.54941 7.83338 5.74012 7.69471 5.80745 7.49004L7.33211 2.86272C7.39278 2.70205 7.5201 2.58006 7.68343 2.52739C7.84676 2.47406 8.0214 2.49938 8.16406 2.59404C8.58206 2.87271 8.83138 3.33938 8.83138 3.84205V6.00005C8.83138 6.27605 9.05538 6.50005 9.33138 6.50005H11.9354C12.3994 6.50005 13.0141 6.58471 13.3061 6.99004C13.5434 7.31937 13.5634 7.86072 13.3581 8.47405Z"
                  fill="#555F6D"
                />
              </svg>
              <button disabled={loading} onClick={handleLikePost}>
                <span>
                  {data?._count?.commentLike > 0
                    ? data?._count?.commentLike
                    : ""}
                </span>
                Hữu ích
              </button>
            </li>
            <li className="flex items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2.57121 14.4998C2.47454 14.4998 2.38066 14.4985 2.28866 14.4952C1.95532 14.4872 1.66324 14.2738 1.54924 13.9518C1.43457 13.6278 1.52931 13.2752 1.78931 13.0539C2.41064 12.5525 2.6592 11.9979 2.7592 11.6172C1.93453 10.6312 1.49927 9.38649 1.49927 8.00049C1.49927 4.56515 4.1726 2.1665 7.99927 2.1665C11.8259 2.1665 14.4993 4.56582 14.4993 8.00049C14.4993 11.4352 11.8259 13.8345 7.99927 13.8345C7.20793 13.8345 6.44924 13.7271 5.73657 13.5151C4.82791 14.3065 3.57587 14.4998 2.57121 14.4998ZM2.3186 13.4952C2.31994 13.4952 2.32118 13.4952 2.32251 13.4952C2.32051 13.4959 2.31927 13.4959 2.3186 13.4952ZM7.99992 3.1665C4.76192 3.1665 2.49992 5.15449 2.49992 8.00049C2.49992 9.22449 2.90324 10.3085 3.66724 11.1352C3.77057 11.2472 3.81786 11.4005 3.79386 11.5518C3.68186 12.2658 3.32999 12.9412 2.78866 13.4952C3.56199 13.4672 4.60194 13.2892 5.24194 12.6065C5.37594 12.4625 5.58327 12.4112 5.76994 12.4758C6.45994 12.7145 7.20992 12.8352 7.99992 12.8352C11.2379 12.8352 13.4999 10.8471 13.4999 8.00114C13.4999 5.15514 11.2379 3.1665 7.99992 3.1665Z"
                  fill="#555F6D"
                />
              </svg>
              Bình luận
            </li>
            <li className="flex items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M12 2.1665H4C2.388 2.1665 1.5 3.0545 1.5 4.6665V11.3332C1.5 12.9452 2.388 13.8332 4 13.8332H12C13.612 13.8332 14.5 12.9452 14.5 11.3332V4.6665C14.5 3.0545 13.612 2.1665 12 2.1665ZM4 3.1665H12C13.0513 3.1665 13.5 3.61517 13.5 4.6665V8.79248L10.8267 6.11979C10.3867 5.67912 9.61334 5.67912 9.17334 6.11979L6 9.29248L5.49333 8.78646C5.05333 8.34579 4.28001 8.34579 3.84001 8.78646L2.5 10.1265V4.6665C2.5 3.61517 2.94867 3.1665 4 3.1665ZM12 12.8332H4C3.01867 12.8332 2.56798 12.4358 2.51131 11.5285L4.54663 9.49316C4.6313 9.40916 4.7013 9.40916 4.78597 9.49316L5.41203 10.1191C5.72336 10.4311 6.27602 10.4305 6.58602 10.1191L9.87931 6.82585C9.96398 6.74185 10.034 6.74185 10.1187 6.82585L13.4987 10.2059V11.3332C13.5 12.3845 13.0513 12.8332 12 12.8332ZM4.5 5.99984C4.5 5.53984 4.87333 5.1665 5.33333 5.1665C5.79333 5.1665 6.16667 5.53984 6.16667 5.99984C6.16667 6.45984 5.79333 6.83317 5.33333 6.83317C4.87333 6.83317 4.5 6.45984 4.5 5.99984Z"
                  fill="#555F6D"
                />
              </svg>
              Hình ảnh
            </li>
          </ul>
        </div>
        {data.image && (
          <div className="col-span-1">
            <img
              loading="lazy"
              src={`${API_URL}/api/file/share/${data?.image}`}
              alt="Top giáo viên"
              className="min-h-full min-w-full rounded-md object-contain sm:max-h-32 sm:min-h-32"
            />
          </div>
        )}
      </div>
    </>
  );
}
