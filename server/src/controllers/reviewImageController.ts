import { Response, Request } from "express";
import * as reviewImageService from "../services/reviewIamgeService";

export const getReviewImages = async (req: Request, res: Response) => {
  try {
    const data = await reviewImageService.getImageService();
    res.status(200).json({ success: true, msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const editReviewImage = async (req: Request, res: Response) => {
  const { type } = req.body;
  const filename = req.file?.filename;
  const image = filename ? filename : "";
  try {
    // Lấy dữ liệu hiện tại từ cơ sở dữ liệu
    const data = await reviewImageService.getImageService();

    if (!data) {
      return res.status(404).json({ error: "Data not found" });
    }

    const updatedImage: {
      image1?: string;
      image2?: string;
      image3?: string;
      image4?: string;
      student1?: string;
      student2?: string;
      student3?: string;
      student4?: string;
      student5?: string;
    } = {};
    switch (type) {
      case "image1":
        updatedImage.image1 = image;
        break;
      case "image2":
        updatedImage.image2 = image;
        break;
      case "image3":
        updatedImage.image3 = image;
        break;
      case "image4":
        updatedImage.image4 = image;
        break;
      case "student1":
        updatedImage.student1 = image;
        break;
      case "student2":
        updatedImage.student2 = image;
        break;
      case "student3":
        updatedImage.student3 = image;
        break;
      case "student4":
        updatedImage.student4 = image;
        break;
      case "student5":
        updatedImage.student5 = image;
        break;
      default:
        return res.status(400).json({ error: "Invalid type provided" });
    }

    // Gọi service để cập nhật ảnh tương ứng
    await reviewImageService.editImageService(
      updatedImage.image1 || data.image1,
      updatedImage.image2 || data.image2,
      updatedImage.image3 || data.image3,
      updatedImage.image4 || data.image4,
      updatedImage.student1 || data.student1,
      updatedImage.student2 || data.student2,
      updatedImage.student3 || data.student3,
      updatedImage.student4 || data.student4,
      updatedImage.student5 || data.student5
    );

    // Trả về kết quả sau khi cập nhật
    res.status(200).json({ success: true, msg: image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
