import { configDotenv } from "dotenv";
import { transporter } from "../configs/mail";
configDotenv();

export const sendForgetPasswordEmail = async (email: string, token: string) => {
  const resetLink = `${process.env.WEB_HOST}/change-new-password?token=${token}`;
  return await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: email,
    subject: "Đặt lại mật khẩu của bạn",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <div style="background-color: #f8f9fa; padding: 20px; text-align: center;">
          <img src="https://taphoazalo.com/favicon.ico" alt="Your Logo" style="width: 100px; height: auto;"/>
        </div>
        <div style="padding: 20px;">
          <h2 style="color: #333;">Xin chào,</h2>
          <p>Chúng tôi đã nhận được yêu cầu đặt lại mật khẩu từ bạn. Vui lòng nhấp vào liên kết sau để đặt lại mật khẩu của bạn:</p>
          <div style="text-align: center; margin: 20px 0;">
            <a href="${resetLink}" style="background-color: #007bff; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Đặt lại mật khẩu</a>
          </div>
          <p>Nếu bạn không yêu cầu đặt lại mật khẩu, vui lòng bỏ qua email này. Liên kết này sẽ hết hạn sau 1 giờ.</p>
          <p>Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!</p>
          <p>Trân trọng,</p>
          <p><strong>Đội ngũ hỗ trợ</strong></p>
      <p>Email: <a href="mailto:shoptaphoazalo@gmail.com">shoptaphoazalo@gmail.com</a></p>
          <div style="text-align: center; margin-top: 20px;">
            <a href="https://facebook.com/yourpage" style="margin: 0 10px;"><img src="https://yourdomain.com/facebook-icon.png" alt="Facebook" style="width: 24px; height: 24px;"/></a>
            <a href="https://twitter.com/yourpage" style="margin: 0 10px;"><img src="https://yourdomain.com/twitter-icon.png" alt="Twitter" style="width: 24px; height: 24px;"/></a>
            <a href="https://instagram.com/yourpage" style="margin: 0 10px;"><img src="https://yourdomain.com/instagram-icon.png" alt="Instagram" style="width: 24px; height: 24px;"/></a>
          </div>
        </div>
        <div style="background-color: #f8f9fa; padding: 20px; text-align: center;">
          <p style="font-size: 12px; color: #666;">Bạn nhận được email này vì bạn đã yêu cầu đặt lại mật khẩu trên <a href="https://yourdomain.com">yourdomain.com</a>. Nếu bạn không muốn nhận email này nữa, vui lòng <a href="https://yourdomain.com/unsubscribe">hủy đăng ký</a>.</p>
        </div>
      </div>
    `,
  });
};
export const sendPasswordResetEmail = (
  recipientEmail: string,
  resetToken: string,
  userName?: string
) => {
  const resetLink = `${process.env.WEB_HOST}/xac-thuc?token=${resetToken}`;

  const mailOptions = {
    from: "topgiaovien@gmail.com",
    to: recipientEmail,
    subject: "Yêu cầu đặt lại mật khẩu",
    html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #4CAF50;">Yêu cầu đặt lại mật khẩu</h2>
      <p>Chào ${userName},</p>
      <p>Chúng tôi nhận được yêu cầu đặt lại mật khẩu cho tài khoản của bạn. Nếu bạn không yêu cầu thay đổi mật khẩu, vui lòng bỏ qua email này.</p>
      <p>Để đặt lại mật khẩu của bạn, vui lòng nhấp vào liên kết dưới đây:</p>
      <a href="${resetLink}" style="display: inline-block; padding: 10px 20px; margin-top: 10px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">Đặt lại mật khẩu</a>
      <p style="margin-top: 20px;">Liên kết này sẽ hết hạn trong 30 phút.</p>
      <p>Cảm ơn bạn,</p>
      <p>Đội ngũ hỗ trợ của chúng tôi</p>
    </div>
  `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Lỗi khi gửi email:", error);
    } else {
      console.log("Email đã được gửi:", info.response);
    }
  });
};
// Hàm gửi email
export const sendEmailNotification = (
  studentName: string,
  courseName: string,
  languageCare: string,
  studentPhone: string,
  timeCare: string[],
  teacherEmail?: string,
  teacherFullName?: string,
  teacherPhone?: string,
  courseTitle?: string,
  courseContent?: string,
  courseCategory?: string,
  courseSubCategory?: string
) => {
  const courseInfoHtml = courseTitle
    ? `
    <h3 style="color: #4CAF50; margin-top: 20px;">Thông tin khóa học</h3>
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;">
          <strong>Tiêu đề khóa học:</strong>
        </td>
        <td style="padding: 8px; border: 1px solid #ddd;">
          ${courseTitle}
        </td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;">
          <strong>Nội dung khóa học:</strong>
        </td>
        <td style="padding: 8px; border: 1px solid #ddd;">
          ${courseContent || "N/A"}
        </td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;">
          <strong>Ngôn ngữ khóa học:</strong>
        </td>
        <td style="padding: 8px; border: 1px solid #ddd;">
          ${courseCategory || "N/A"}
        </td>
      </tr><tr>
        <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;">
          <strong>Danh mục khóa học:</strong>
        </td>
        <td style="padding: 8px; border: 1px solid #ddd;">
          ${courseSubCategory || "N/A"}
        </td>
      </tr>
    </table>
  `
    : "";
  const teacherInfoHtml = teacherFullName
    ? `
    <h3 style="color: #4CAF50; margin-top: 20px;">Thông tin giảng viên</h3>
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;">
          <strong>Tên giảng viên:</strong>
        </td>
        <td style="padding: 8px; border: 1px solid #ddd;">
          ${teacherFullName}
        </td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;">
          <strong>Email giảng viên:</strong>
        </td>
        <td style="padding: 8px; border: 1px solid #ddd;">
          ${teacherEmail || "N/A"}
        </td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;">
          <strong>Số điện thoại giảng viên:</strong>
        </td>
        <td style="padding: 8px; border: 1px solid #ddd;">
          ${teacherPhone || "N/A"}
        </td>
      </tr>
    </table>
  `
    : "";
  const dataZ =
    teacherEmail !== "" || courseTitle !== ""
      ? ""
      : `
<tr>
  <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;">
    <strong>Ngôn ngữ quan tâm:</strong>
  </td>
  <td style="padding: 8px; border: 1px solid #ddd;">
    ${languageCare}
  </td>
</tr>
 <tr>
  <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;">
    <strong>Khóa học quan tâm:</strong>
  </td>
  <td style="padding: 8px; border: 1px solid #ddd;">
    ${courseName}
  </td>
</tr>
`;
  const mailOptions = {
    from: "topgiaovien@gmail.com",
    to: "trungpyy@gmail.com,topgiaovien@gmail.com",
    subject: "Thông báo có người quan tâm khóa học",
    html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #4CAF50;">Thông tin học viên quan tâm khóa học</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;">
            <strong>Tên học viên:</strong>
          </td>
          <td style="padding: 8px; border: 1px solid #ddd;">
            ${studentName}
          </td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;">
            <strong>Số điện thoại:</strong>
          </td>
          <td style="padding: 8px; border: 1px solid #ddd;">
            ${studentPhone}
          </td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;">
            <strong>Thời gian quan tâm:</strong>
          </td>
          <td style="padding: 8px; border: 1px solid #ddd;">
            <ul style="list-style-type: disc; padding-left: 20px;">
              ${timeCare.map((time) => `<li>${time}</li>`).join("")}
            </ul>
          </td>
        </tr>
      </table>      
      ${teacherInfoHtml}
      ${courseInfoHtml}
      ${dataZ}
      <p style="margin-top: 20px;">Vui lòng liên hệ với học viên để xác nhận thông tin và hỗ trợ thêm.</p>
    </div>
  `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Lỗi khi gửi email: ", error);
    } else {
      console.log("Email đã được gửi: " + info.response);
    }
  });
};

export const sendApplicationNotification = (
  applicantName: string,
  position: string,
  applicantPhone: string,
  applicantEmail: string,
  applicationDate: string,
  file: string,
  dataApplication?: string
) => {
  const mailOptions = {
    from: "topgiaovien@gmail.com",
    to: "trungpyy@gmail.com,topgiaovien@gmail.com",
    subject: "Thông báo có ứng viên nộp hồ sơ",
    html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #4CAF50;">Thông tin ứng viên nộp hồ sơ</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;">
            <strong>Tên ứng viên:</strong>
          </td>
          <td style="padding: 8px; border: 1px solid #ddd;">
            ${applicantName}
          </td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;">
            <strong>Vị trí ứng tuyển:</strong>
          </td>
          <td style="padding: 8px; border: 1px solid #ddd;">
            ${position}
          </td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;">
            <strong>Số điện thoại:</strong>
          </td>
          <td style="padding: 8px; border: 1px solid #ddd;">
            ${applicantPhone}
          </td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;">
            <strong>Email ứng viên:</strong>
          </td>
          <td style="padding: 8px; border: 1px solid #ddd;">
            ${applicantEmail}
          </td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;">
            <strong>Ngày nộp hồ sơ:</strong>
          </td>
          <td style="padding: 8px; border: 1px solid #ddd;">
            ${applicationDate}
          </td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;">
            <strong>Tệp đính kèm:</strong>
          </td>
          <td style="padding: 8px; border: 1px solid #ddd;">
         <a href="${process.env.SERVER_HOST}/api/file/cv/${file}" target="_blank">Xem hồ sơ</a>
          </td>
        </tr>
          <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;">
            <strong>Bài viết tuyển dụng:</strong>
          </td>
          <td style="padding: 8px; border: 1px solid #ddd;">
         <a href="${process.env.WEB_HOST}/tuyen-dung/${dataApplication}" target="_blank">Xem bài viết tuyển dụng</a>
          </td>
        </tr>
      </table>
      <p style="margin-top: 20px;">Vui lòng kiểm tra hồ sơ ứng viên và tiếp tục quy trình tuyển dụng.</p>
    </div>
  `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Lỗi khi gửi email: ", error);
    } else {
      console.log("Email đã được gửi: " + info.response);
    }
  });
};
