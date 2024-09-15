import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function QuillEditor({ form, setForm }) {
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
  const handleChange = (data) => {
    setForm((prevForm) => ({
      ...prevForm,
      content: data,
    }));
  };

  return (
    <>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={form.content}
        onChange={handleChange}
      />
    </>
  );
}

export default QuillEditor;
