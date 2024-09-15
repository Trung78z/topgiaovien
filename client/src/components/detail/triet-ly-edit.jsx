// export default function TrietLyGiaoDuc({ props, handleChange }) {
//   return (
//     <>
//       <div className="container flex max-h-[320] flex-wrap items-center px-0 sm:max-h-[320px] sm:flex-nowrap sm:gap-x-10">
//         <div className="img relative w-full sm:w-1/2">
//           <label
//             htmlFor=""
//             className="absolute top-0 flex w-full -translate-y-14 flex-col sm:flex-row"
//           >
//             <span>Link giới thiệu giáo viên: </span>
//             <input
//               id="linkPhilosophy"
//               type="text"
//               className="editText flex-1"
//               onChange={handleChange}
//             />
//           </label>
//           <iframe
//             className="h-full min-h-60 w-full rounded-xl sm:max-h-[350px] sm:min-h-[350px]"
//             src={`https://youtube.com/embed/${props?.linkPhilosophy}?autoplay=1&mute=1`}
//             title="YouTube video player"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowfullscreen
//           ></iframe>
//         </div>
//         <div className="content w-full space-y-4 sm:w-1/2">
//           <h2 className="text-center text-[28px] font-semibold sm:text-left">
//             Triết lý giáo dục
//           </h2>
//           <div className="space-y-4">
//             <textarea
//               id="philosophy"
//               className="rich-text content-scroll editText h-full max-h-[320px] min-h-[320px] w-full px-2 text-justify"
//               value={props?.philosophy}
//               onChange={handleChange}
//             ></textarea>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
