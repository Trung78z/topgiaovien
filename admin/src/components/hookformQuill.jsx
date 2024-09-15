import { Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export default function QuillEditorHookForm({
  id,
  name,
  control,
  setValue,
  watch,
}) {
  const modules = {
    toolbar: [
      [
        {
          header: [2, 3, 4, 5, 6, false],
        },
      ],
      [
        {
          color: [
            "#FFFFFF",
            "#000000",
            "#2B346F",
            "#ff0000",
            "#ffff00",
            "#0066ff",
          ],
        },
      ],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
  };

  const formats = [
    "header",
    "color",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "link",
  ];

  return (
    <>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={watch(id)}
        onChange={(e) => setValue(id, e)} // Gọi hàm khi nội dung editor thay đổi
      />
      {/* <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <ReactQuill
            id={id}
            modules={modules}
            formats={formats}
            {...field}
            theme="snow"
          />
        )}
      /> */}
    </>
  );
}
