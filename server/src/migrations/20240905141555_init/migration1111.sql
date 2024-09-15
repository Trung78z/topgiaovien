-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: topgiaovien
-- ------------------------------------------------------
-- Server version	9.0.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('0f430898-f740-4d9c-b2d3-e3b2c03b173d','1d75307f9889fae5260c6ae58e61467e474dd1db438a03294109937db5e96165','2024-09-05 15:45:01.119','20240905154457_init',NULL,NULL,'2024-09-05 15:44:59.529',1),('4526fef4-59c9-44a0-a128-5662df430690','586c299744303fd41e07f2e7e417edbf40279bf55e15c1b9da543612b399848c','2024-09-05 14:49:53.439','20240905144950_init',NULL,NULL,'2024-09-05 14:49:53.355',1),('5932f274-8ad0-415b-b0b1-e5206ef37379','aee4f95b82cdb2610c172db9ceb7875685127c970db8b22f85920ff579b1d05b','2024-09-05 13:41:23.842','20240905134121_init',NULL,NULL,'2024-09-05 13:41:23.455',1),('5a8a3119-80f1-4c0e-a8a5-2851b55006a7','3a13c5220e5374f0ecdb9f956b2668fd9bba2dfc33453c69220e46fa7d1df039','2024-09-05 13:55:23.585','A0_init','',NULL,'2024-09-05 13:55:23.585',0),('6ba9b163-8bc9-459b-9b34-e69551c67d1e','3a0e62b97221f88e9c36ddbcaeb5ac59534b95b35537f0980a4f6084fd253288','2024-09-05 15:07:48.344','20240905150745_init',NULL,NULL,'2024-09-05 15:07:48.285',1),('753d9ad0-54a1-4948-a16b-19a325395ce3','6231ec60f07045b873ecbcba7000b147a20c8ee9b8f41ad55c201e715a4b9a2c','2024-08-27 22:55:54.775','20240827225129_init',NULL,NULL,'2024-08-27 22:55:53.800',1),('f6fc39a2-90ae-4022-a420-db1b2466a01e','16c5fc1c891697da80852ceed57ef3b1bcd954c4aef78e9941cd3374d87129b8','2024-09-09 07:49:37.383','20240909074935_init',NULL,NULL,'2024-09-09 07:49:37.348',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `application`
--

DROP TABLE IF EXISTS `application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `application` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `responsibilities` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `requirements` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `benefits` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `recruitmentProcess` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `location` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `salary` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `position` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `jobType` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `jobRole` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `applicationDeadline` datetime(3) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `applicationSubCategoryId` int DEFAULT NULL,
  `applicationCategoryId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `application_slug_key` (`slug`),
  KEY `application_applicationSubCategoryId_fkey` (`applicationSubCategoryId`),
  KEY `application_applicationCategoryId_fkey` (`applicationCategoryId`),
  CONSTRAINT `application_applicationCategoryId_fkey` FOREIGN KEY (`applicationCategoryId`) REFERENCES `applicationcategory` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `application_applicationSubCategoryId_fkey` FOREIGN KEY (`applicationSubCategoryId`) REFERENCES `applicationsubcategory` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `application`
--

LOCK TABLES `application` WRITE;
/*!40000 ALTER TABLE `application` DISABLE KEYS */;
INSERT INTO `application` VALUES (1,'IELTS Trainer','teacher-ielts-trainer','<p>1/ Giảng dạy lớp IELTS Academic và General:</p><ul><li>Sỉ số Học viên: Lớp nhóm dưới 12 Học viên &amp; lớp kèm riêng.</li><li>Hình thức lớp: Offline hoặc online.</li><li>Lịch lớp 2-3 buổi/ tuần</li><li>Ưu tiên nhận lớp tại chi nhánh Thầy/ Cô thuận tiện di chuyển</li></ul><p>2/ Các công tác chuyên môn khác theo nguyện vọng phát triển và thế mạnh của cá nhân Thầy Cô, được tính theo thù lao làm việc riêng.</p>','<p>1/ Chuyên môn/ kinh nghiệm:</p><ul><li>Chuyên ngành Sư phạm Anh hoặc chuyên ngành khác có chứng chỉ giảng dạy TESOL/ CELTA.</li><li>IELTS từ 7.5 trở lên, trong đó kỹ năng Writing từ 7.0 trở lên.</li><li>Kinh nghiệm ít nhất 02 năm giảng dạy IELTS Academic và IELTS General với các hình thức nhóm &amp; kèm riêng.</li></ul><p>2/ Kỹ năng: Thiết kế bài giảng có tích hợp công nghệ và phù hợp với từng đối tượng học viên, linh hoạt trong việc giảng bài.</p><p>3/ Con người: Nghiêm túc, có trách nhiệm và có tâm với công tác giảng dạy.</p>','<p>1/ Thù lao theo bậc chuyên môn và tính chất lớp giảng dạy (Thu nhập trung bình 15.000.000đ – 30.000.000đ). Cơ chế thưởng hiệu quả theo chính sách nội bộ hiện hành.</p><p>2/ Chính sách học phí riêng biệt dành cho người thân khi tham gia khóa học tại Công ty.</p><p>3/ Đào tạo nội bộ, đào tạo với đối tác BC, IDP.</p><p>4/ Định hướng phát triển theo thế mạnh cá nhân (chuyên môn, content, học thuật, quản lý).</p>','<p>1/ Ứng viên gửi thông tin ứng tuyển (CV, bắt buộc đính kèm bằng IELTS và các bằng cấp chuyên môn).</p><p>2/ Tham gia demo chuyên môn cùng Phòng Đào tạo.</p><p>3/ Nhận 2-3 lớp giảng dạy trong thời gian 02 tháng thử việc.</p>','540/24 Cách Mạng Tháng 08, Phường 11, Quận 3, HCM','230.000 VNĐ - 450.000 VNĐ/ giờ','Giáo viên','Part-time','Trainer','2024-09-30 00:00:00.000','2024-08-27 22:55:59.883','2024-08-29 07:32:33.463',1,1),(2,'IELTS Nâng cao','teacher-ielts-advance','<p>1/ Giảng dạy lớp IELTS Academic và General:</p><ul><li>Sỉ số Học viên: Lớp nhóm dưới 12 Học viên &amp; lớp kèm riêng.</li><li>Hình thức lớp: Offline hoặc online.</li><li>Lịch lớp 3 buổi/ tuần (thứ 2,4,6 và thứ 3,5,7).</li><li>Ưu tiên nhận lớp tại chi nhánh Thầy/ Cô thuận tiện di chuyển</li></ul><p>2/ Các công tác chuyên môn khác theo nguyện vọng phát triển và thế mạnh của cá nhân Thầy Cô, được tính theo thù lao làm việc riê</p>','<p>1/ Chuyên môn/ kinh nghiệm:</p><ul><li>Chuyên ngành Sư phạm Anh hoặc chuyên ngành khác có chứng chỉ giảng dạy TESOL/ CELTA.</li><li>IELTS từ 8.0 trở lên, trong đó kỹ năng Writing từ 7.5 trở lên.</li><li>Kinh nghiệm ít nhất 02 năm giảng dạy IELTS Academic và IELTS General với các hình thức nhóm &amp; kèm riêng.</li></ul><p>2/ Kỹ năng: Thiết kế bài giảng có tích hợp công nghệ và phù hợp với từng đối tượng học viên, linh hoạt trong việc giảng bài.</p><p>3/ Con người: Nghiêm túc, có trách nhiệm và có tâm với công tác giảng d</p>','<p>1/ Thù lao theo bậc chuyên môn và tính chất lớp giảng dạy: 230.000 VNĐ – 450.000 VNĐ/ giờ/&nbsp;(Thu nhập trung bình 20.000.000đ – 40.000.000đ). Cơ chế thưởng hiệu quả theo chính sách nội bộ hiện hành.</p><p>2/ Chính sách học phí riêng biệt dành cho người thân khi tham gia khóa học tại Công ty.</p><p>3/ Đào tạo nội bộ, đào tạo với đối tác BC, IDP.</p><p>4/ Định hướng phát triển theo thế mạnh cá nhân (chuyên môn, content, học thuật, quản</p>','<p>1/ Ứng viên gửi thông tin ứng tuyển (CV, bắt buộc đính kèm bằng IELTS và các bằng cấp chuyên môn).</p><p>2/ Tham gia demo chuyên môn cùng Phòng Đào tạo.</p><p>3/ Nhận 2-3 lớp giảng dạy trong thời gian 02 tháng thử việc.</p>','Quận Phú Nhuận, Quận Gò Vấp, Quận 10, Quận Tân Phú','230.000 VNĐ - 450.000 VNĐ/ giờ','Giáo viên','Part-time','Trainer','2024-08-31 00:00:00.000','2024-08-27 22:55:59.888','2024-08-28 04:20:58.373',1,1),(3,'Toiec Nâng cao','teacher-toeic-advance','<p>1/ Giảng dạy lớp IELTS Academic và General:</p><ul><li>Sỉ số Học viên: Lớp nhóm dưới 12 Học viên &amp; lớp kèm riêng.</li><li>Hình thức lớp: Offline hoặc online.</li><li>Lịch lớp 3 buổi/ tuần (thứ 2,4,6 và thứ 3,5,7).</li><li>Ưu tiên nhận lớp tại chi nhánh Thầy/ Cô thuận tiện di chuyển</li></ul><p>2/ Các công tác chuyên môn khác theo nguyện vọng phát triển và thế mạnh của cá nhân Thầy Cô, được tính theo thù lao làm việc riêng.</p>','<p>1/ Chuyên môn/ kinh nghiệm:</p><ul><li>Chuyên ngành Sư phạm Anh hoặc chuyên ngành khác có chứng chỉ giảng dạy TESOL/ CELTA.</li><li>IELTS từ 8.0 trở lên, trong đó kỹ năng Writing từ 7.5 trở lên.</li><li>Kinh nghiệm ít nhất 02 năm giảng dạy IELTS Academic và IELTS General với các hình thức nhóm &amp; kèm riêng.</li></ul><p>2/ Kỹ năng: Thiết kế bài giảng có tích hợp công nghệ và phù hợp với từng đối tượng học viên, linh hoạt trong việc giảng bài.</p><p>3/ Con người: Nghiêm túc, có trách nhiệm và có tâm với công tác giảng dạy.</p>','<p>1/ Thù lao theo bậc chuyên môn và tính chất lớp giảng dạy: 230.000 VNĐ – 450.000 VNĐ/ giờ/&nbsp;(Thu nhập trung bình 20.000.000đ – 40.000.000đ). Cơ chế thưởng hiệu quả theo chính sách nội bộ hiện hành.</p><p>2/ Chính sách học phí riêng biệt dành cho người thân khi tham gia khóa học tại Công ty.</p><p>3/ Đào tạo nội bộ, đào tạo với đối tác BC, IDP.</p><p>4/ Định hướng phát triển theo thế mạnh cá nhân (chuyên môn, content, học thuật, quản lý).</p>','<p>1/ Ứng viên gửi thông tin ứng tuyển (CV, bắt buộc đính kèm bằng IELTS và các bằng cấp chuyên môn).</p><p>2/ Tham gia demo chuyên môn cùng Phòng Đào tạo.</p><p>3/ Nhận 2-3 lớp giảng dạy trong thời gian 02 tháng thử việc.</p>','Quận Phú Nhuận, Quận Gò Vấp, Quận 10, Quận Tân Phú','230.000 VNĐ - 450.000 VNĐ/ giờ','Giáo viên','Part-time','Trainer','2024-08-31 00:00:00.000','2024-08-27 22:55:59.892','2024-08-27 22:55:59.892',1,1);
/*!40000 ALTER TABLE `application` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `applicationcategory`
--

DROP TABLE IF EXISTS `applicationcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `applicationcategory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applicationcategory`
--

LOCK TABLES `applicationcategory` WRITE;
/*!40000 ALTER TABLE `applicationcategory` DISABLE KEYS */;
INSERT INTO `applicationcategory` VALUES (1,'teacher'),(2,'Khác');
/*!40000 ALTER TABLE `applicationcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `applicationsubcategory`
--

DROP TABLE IF EXISTS `applicationsubcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `applicationsubcategory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `applicationCategoryId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `applicationSubCategory_applicationCategoryId_fkey` (`applicationCategoryId`),
  CONSTRAINT `applicationSubCategory_applicationCategoryId_fkey` FOREIGN KEY (`applicationCategoryId`) REFERENCES `applicationcategory` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applicationsubcategory`
--

LOCK TABLES `applicationsubcategory` WRITE;
/*!40000 ALTER TABLE `applicationsubcategory` DISABLE KEYS */;
INSERT INTO `applicationsubcategory` VALUES (1,'Tiếng anh',1),(2,'Tiếng Trung',1),(3,'Nhân viên',2),(4,'Nhân viên part time',2);
/*!40000 ALTER TABLE `applicationsubcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banner`
--

DROP TABLE IF EXISTS `banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banner` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `alt` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banner`
--

LOCK TABLES `banner` WRITE;
/*!40000 ALTER TABLE `banner` DISABLE KEYS */;
INSERT INTO `banner` VALUES (1,'banner-1723704403050-54885800.jpg',NULL,'2024-08-25 21:10:46.228','2024-08-25 21:10:46.228'),(5,'banner-1724643151581-889165174.jpg','Học theo cách của bạn cùng topgiaovien.vn','2024-08-26 03:32:31.661','2024-08-26 03:32:31.661'),(7,'banner-1724643232389-895539870.jpg','Tieng anh co ban topgiaovien','2024-08-26 03:33:52.415','2024-08-26 03:33:52.415');
/*!40000 ALTER TABLE `banner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carecourse`
--

DROP TABLE IF EXISTS `carecourse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carecourse` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullName` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `time` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `courseCare` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `courseId` int DEFAULT NULL,
  `teacherId` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `languageCare` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `careCourse_courseId_fkey` (`courseId`),
  KEY `careCourse_teacherId_fkey` (`teacherId`),
  CONSTRAINT `careCourse_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `course` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `careCourse_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `teacher` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carecourse`
--

LOCK TABLES `carecourse` WRITE;
/*!40000 ALTER TABLE `carecourse` DISABLE KEYS */;
INSERT INTO `carecourse` VALUES (1,'Trung Thành','0909984822','[{\"id\":1,\"time\":\"14h - 15h\",\"active\":true},{\"id\":1,\"time\":\"15h - 16h\",\"active\":true}]','Toeic Reading & Listening','2024-08-28 05:31:10.277','2024-08-28 05:31:10.277',NULL,NULL,NULL),(2,'Trung Thành','0886506127','[{\"id\":1,\"time\":\"14h - 15h\",\"active\":true},{\"id\":2,\"time\":\"9h - 10h\",\"active\":true}]',NULL,'2024-09-07 04:23:12.036','2024-09-07 04:23:12.036',61,NULL,NULL);
/*!40000 ALTER TABLE `carecourse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(3000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Tin tức','<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\'><path d=\'M13.0769 11.75H9.9231C8.8911 11.75 8.25 12.391 8.25 13.423V15.577C8.25 16.609 8.8911 17.25 9.9231 17.25H13.0769C14.1089 17.25 14.75 16.609 14.75 15.577V13.423C14.75 12.391 14.1089 11.75 13.0769 11.75ZM13.25 15.577C13.25 15.67 13.238 15.72 13.241 15.732C13.22 15.739 13.1699 15.751 13.0769 15.751H9.9231C9.8411 15.751 9.7919 15.742 9.7749 15.742C9.7719 15.742 9.77004 15.742 9.76904 15.742C9.76204 15.72 9.75 15.67 9.75 15.577V13.423C9.75 13.33 9.76203 13.28 9.75903 13.268C9.78003 13.261 9.8301 13.249 9.9231 13.249H13.0769C13.1729 13.249 13.223 13.26 13.231 13.258C13.238 13.28 13.25 13.33 13.25 13.423V15.577ZM19.75 13C19.75 13.414 19.414 13.75 19 13.75H17C16.586 13.75 16.25 13.414 16.25 13C16.25 12.586 16.586 12.25 17 12.25H19C19.414 12.25 19.75 12.586 19.75 13ZM19.75 16C19.75 16.414 19.414 16.75 19 16.75H17C16.586 16.75 16.25 16.414 16.25 16C16.25 15.586 16.586 15.25 17 15.25H19C19.414 15.25 19.75 15.586 19.75 16ZM19.75 9C19.75 9.414 19.414 9.75 19 9.75H9C8.586 9.75 8.25 9.414 8.25 9C8.25 8.586 8.586 8.25 9 8.25H19C19.414 8.25 19.75 8.586 19.75 9ZM19 4.25H9C6.582 4.25 5.25 5.582 5.25 8V8.25H4C2.483 8.25 1.25 9.484 1.25 11V18C1.25 19.516 2.483 20.75 4 20.75H19C21.418 20.75 22.75 19.418 22.75 17V8C22.75 5.582 21.418 4.25 19 4.25ZM5.25 18C5.25 18.689 4.689 19.25 4 19.25C3.311 19.25 2.75 18.689 2.75 18V11C2.75 10.311 3.311 9.75 4 9.75H5.25V18ZM21.25 17C21.25 18.577 20.577 19.25 19 19.25H6.44897C6.64097 18.875 6.75 18.45 6.75 18V8C6.75 6.423 7.423 5.75 9 5.75H19C20.577 5.75 21.25 6.423 21.25 8V17Z\' fill=\'#333333\'/></svg>'),(2,'Chương trình ưu đãi','<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\'><path d=\'M2 6C2 5.448 2.448 5 3 5H21C21.552 5 22 5.448 22 6C22 6.552 21.552 7 21 7H3C2.448 7 2 6.552 2 6ZM21 11H3C2.448 11 2 11.448 2 12C2 12.552 2.448 13 3 13H21C21.552 13 22 12.552 22 12C22 11.448 21.552 11 21 11ZM21 17H3C2.448 17 2 17.448 2 18C2 18.552 2.448 19 3 19H21C21.552 19 22 18.552 22 18C22 17.448 21.552 17 21 17Z\' fill=\'#333333\'/></svg>'),(3,'Chia sẻ tài liệu','<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\'><path d=\'M21.0359 4.18235C21.0349 4.18235 21.0349 4.18238 21.0339 4.18138C19.3329 3.37438 17.446 3.09136 15.425 3.33836C13.971 3.51736 12.741 4.34831 12 5.51231C11.258 4.34931 10.029 3.51736 8.57397 3.33836C6.55097 3.09136 4.66706 3.37438 2.96606 4.18138C2.96606 4.18138 2.96609 4.18138 2.96509 4.18138C2.53109 4.38738 2.25 4.83429 2.25 5.32029V18.3253C2.25 18.7193 2.4299 19.0804 2.7439 19.3174C3.0569 19.5544 3.4711 19.6313 3.8501 19.5223C6.7591 18.6963 9.21501 19.0464 11.583 20.6234C11.593 20.6304 11.605 20.6323 11.615 20.6383C11.626 20.6443 11.634 20.6544 11.646 20.6604C11.657 20.6664 11.6699 20.6633 11.6809 20.6693C11.7819 20.7173 11.889 20.7494 11.999 20.7494C12.109 20.7494 12.2159 20.7173 12.3169 20.6693C12. 279 20.6643 12.3411 20.6664 12.3521 20.6604C12.3631 20.6544 12.3721 20.6453 12.3821 20.6383C12.3921 20.6323 12.4041 20.6304 12.4141 20.6234C14.7791 19.0464 17.236 18.6963 20.147 19.5223C20.525 19.6293 20.9399 19.5544 21.2529 19.3174C21.5669 19.0804 21.7471 18.7183 21.7471 18.3253V5.32029C21.7501 4.83629 21.4699 4.38935 21.0359 4.18235ZM6.73389 17.5943C5.77289 17.5943 4.78 17.7283 3.75 17.9963V5.47129C5.169 4.82929 6.68811 4.61737 8.39111 4.82737C10.0211 5.02737 11.25 6.41731 11.25 8.05931V18.6903C9.815 17.9583 8.31789 17.5943 6.73389 17.5943ZM20.25 17.9963C17.524 17.2873 15.057 17.5133 12.75 18.6903V8.05931C12.75 6.41631 13.9789 5.02737 15.6079 4.82737C16.0299 4.77537 16.441 4.74937 16.842 4.74937C18.057 4.74937 19.182 4.98829 20.249 5.47129V17.9963H20.25Z\' fill=\'#333333\'/></svg>'),(4,'Thông báo mở lớp','<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\'><path d=\'M20.9441 5.28406L18.7161 3.05603C18.1951 2.53603 17.5441 2.249 16.7681 2.25C16.0321 2.251 15.341 2.53906 14.823 3.06006L2.46899 15.471C2.32799 15.6119 2.25 15.802 2.25 16V21C2.25 21.414 2.586 21.75 3 21.75H8C8.198 21.75 8.38905 21.671 8.52905 21.532L20.9399 9.177C21.4609 8.658 21.749 7.96706 21.75 7.23206C21.751 6.49606 21.4651 5.80406 20.9441 5.28406ZM7.68994 20.25H3.75V16.3101L12.7429 7.276L16.7251 11.257L7.68994 20.25ZM19.8821 8.11402L17.7881 10.199L13.801 6.21302L15.886 4.11804C16.122 3.88104 16.436 3.751 16.771 3.75H16.772C17.106 3.75 17.42 3.87997 17.657 4.11597L19.885 6.344C20.121 6.581 20.251 6.89498 20.251 7.22998C20.25 7.56398 20.1191 7.87802 19.8821 8.11402Z\' fill=\'#333333\'/></svg>');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `certificate`
--

DROP TABLE IF EXISTS `certificate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `certificate` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `teacherId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `certificate_teacherId_fkey` (`teacherId`),
  CONSTRAINT `certificate_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `teacher` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certificate`
--

LOCK TABLES `certificate` WRITE;
/*!40000 ALTER TABLE `certificate` DISABLE KEYS */;
INSERT INTO `certificate` VALUES (1,'8.0 IELTS Overall','4a815d1'),(5,'IELTS 7.5 (Speaking 7.0)','c1f5578'),(6,'TOEIC 915 và IC3','c1f5578'),(7,'IELTS 8.0 (Speaking: 9.0)','04cd771'),(8,'Chứng chỉ TESOL','04cd771'),(9,'IELTS 8.0 (Listening, Reading: 9.0)','7d29e21'),(10,'TOEIC 960','7d29e21'),(12,'Chứng chỉ TESOL','ef40688'),(13,'IELTS 8.0','56406fe'),(14,'Bằng TESOL','a57de5b'),(15,'IELTS 7.0','a57de5b'),(16,'Bằng HSK 5','41d7a88'),(17,'Chứng chỉ TESOL 120 hours','a56c0d1'),(18,'IELTS 7.0','ef40688'),(19,'IELTS 7.5 (Reading 8.5)','9e41ab8'),(26,'HSK3','9e41ab8'),(27,'HSK 5 ','9a3f8fe'),(29,'HSK 5 ','d17cc0c'),(30,'7.5 IELTS Overall ','a56c0d1'),(31,'HSK 6','de29046'),(32,'HSK 6 ','38985cf'),(33,'IELTS 7.0',NULL),(34,'Chứng chỉ TESOL',NULL),(35,'IELTS 7.0',NULL),(36,'Chứng chỉ TESOL',NULL),(37,'IELTS 7.0',NULL),(38,'Chứng chỉ TESOL',NULL);
/*!40000 ALTER TABLE `certificate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `teacherId` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `userId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parentId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comment_teacherId_fkey` (`teacherId`),
  KEY `comment_userId_fkey` (`userId`),
  KEY `comment_parentId_fkey` (`parentId`),
  CONSTRAINT `comment_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `comment` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `comment_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `teacher` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `comment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commentlike`
--

DROP TABLE IF EXISTS `commentlike`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `commentlike` (
  `id` int NOT NULL AUTO_INCREMENT,
  `commentId` int DEFAULT NULL,
  `userId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `commentLike_commentId_userId_key` (`commentId`,`userId`),
  KEY `commentLike_userId_fkey` (`userId`),
  CONSTRAINT `commentLike_commentId_fkey` FOREIGN KEY (`commentId`) REFERENCES `comment` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `commentLike_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commentlike`
--

LOCK TABLES `commentlike` WRITE;
/*!40000 ALTER TABLE `commentlike` DISABLE KEYS */;
/*!40000 ALTER TABLE `commentlike` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `urlChoice` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'DM2ChbGOjKE',
  `slug` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `review` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `goal` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `satisfied` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `differentTitle1` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `differentContent1` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `differentTitle2` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `differentContent2` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `differentTitle3` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `differentContent3` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reviewCourseTitle1` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reviewCourseImage1` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reviewCourseTitle2` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reviewCourseImage2` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reviewCourseTitle3` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reviewCourseImage3` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reviewCourseTitle4` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reviewCourseImage4` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkChat` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `courseCategoryId` int DEFAULT NULL,
  `courseSubCategoryId` int DEFAULT NULL,
  `locationId` int DEFAULT NULL,
  `typeLearn` enum('Online','Offline','All') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'All',
  PRIMARY KEY (`id`),
  UNIQUE KEY `course_slug_key` (`slug`),
  KEY `course_courseCategoryId_fkey` (`courseCategoryId`),
  KEY `course_courseSubCategoryId_fkey` (`courseSubCategoryId`),
  KEY `course_locationId_fkey` (`locationId`),
  CONSTRAINT `course_courseCategoryId_fkey` FOREIGN KEY (`courseCategoryId`) REFERENCES `coursecategory` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `course_courseSubCategoryId_fkey` FOREIGN KEY (`courseSubCategoryId`) REFERENCES `coursesubcategory` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `course_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `location` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (48,'TOEIC PREMIUM (0 - 800+)','','tieng-anh-toeic-premium-0-800','Cam kết đầu ra - đạt mục tiêu mong muốn\r\nLớp Premium 4-6 học viên/ lớp - Khai giảng thường xuyên\r\nTặng toàn bộ giáo trình trong khóa trị giá đến 300k\r\nKho tài liệu học tập cập nhật mới liên tục','course-1724989956786-31430667.jpg','1000','95','98','Lớp học quá đông và khó đảm bảo được chất lượng','Bạn từng thấy nhiều lớp học TOEIC với số lượng từ 20 – 30 học viên và giáo viên không đủ thời gian để quan tâm, tương tác đến từng bạn.','Cấp gấp bằng TOEIC trong thời gian ngắn','Tự học TOEIC thường khiến bạn dễ mất định hướng do không có phương pháp học tập hiệu quả hay một người thầy chuyên môn để trao đổi, sửa lỗi và hướng dẫn cho bạn.','Chương trình học không phù hợp với trình độ của bản thân','Học nhóm không hiệu quả, bạn cần một lộ trình học được thiết kế chuyên biệt với phương pháp học TOEIC dành riêng cho nhu cầu và trình độ cá nhân của mình.','Chấm chữa bài và luyện tập trực tiếp với giáo viên','course-1725007173358-667210618.jpg','Thi thử không giới hạn số lần','course-1725007181239-351426649.jpg','Vô số tài liệu học tập từ giáo viên và trung tâm','course-1725007241708-445728839.jpg','30 khóa học đã mở và nhận về đánh giá tích cực từ học viên','course-1725008726803-448781602.jpg',NULL,'2024-08-29 14:03:22.836','2024-09-06 07:53:46.444',1,1,1,'All'),(50,'TOEIC KÈM 1VS1 OR 1VS2','','toeic-toeic-kem-1vs1-or-1vs2','Chỉ giáo viên và học viên – Tiết kiệm GẤP 2 thời gian học TOEIC','course-1724990317964-390826886.jpg','1000','95','98','Lớp học quá đông và khó đảm bảo được chất lượng','Bạn từng thấy nhiều lớp học TOEIC với số lượng từ 20 – 30 học viên và giáo viên không đủ thời gian để quan tâm, tương tác đến từng bạn.','Cấp gấp bằng TOEIC trong thời gian ngắn','Tự học TOEIC thường khiến bạn dễ mất định hướng do không có phương pháp học tập hiệu quả hay một người thầy chuyên môn để trao đổi, sửa lỗi và hướng dẫn cho bạn.','Chương trình học không phù hợp với trình độ của bản thân','Học nhóm không hiệu quả, bạn cần một lộ trình học được thiết kế chuyên biệt với phương pháp học TOEIC dành riêng cho nhu cầu và trình độ cá nhân của mình.','1 kèm 1 với giáo viên - Chắc chắn điểm đầu ra','course-1725007426593-586895974.jpg','Linh hoạt thời gian học và hình thức học theo lịch trình bản thân','course-1725007436326-990813946.jpg','Cá nhân hóa lộ trình học và tăng khả năng phát triển bản thân','course-1725007452876-335317283.jpg','Đánh giá tích cực từ học viên','course-1725007469862-788923071.jpg',NULL,'2024-08-29 14:13:47.372','2024-08-30 09:06:33.318',1,1,1,'All'),(53,'GIAO TIẾP PREMIUM','','tieng-anh-giao-tiep-giao-tiep-premium','Nâng cao khả năng ngôn ngữ của bạn\r\nLớp Premium 4-6 học viên/ lớp - Khai giảng thường xuyên\r\nTặng toàn bộ giáo trình trong khóa trị giá đến 300k\r\nKho tài liệu học tập cập nhật mới liên tục\r\n','course-1724989999337-157116454.jpg','1000','95','98','Lớp học quá đông và khó đảm bảo được chất lượng','Bạn từng thấy nhiều lớp học giao tiếp với số lượng từ 20 – 30 học viên và giáo viên không đủ thời gian để quan tâm, tương tác đến từng bạn.','Cần học gấp giao tiếp để có thể sử dụng trong công việc','Tự học giao tiếp thường khiến bạn dễ mất định hướng do không có phương pháp học tập hiệu quả hay một người thầy chuyên môn để trao đổi, sửa lỗi và hướng dẫn cho bạn.','Chương trình học không phù hợp với trình độ của bản thân','Học nhóm không hiệu quả, bạn cần một lộ trình học được thiết kế chuyên biệt với phương pháp học giao tiếp dành riêng cho nhu cầu và trình độ cá nhân của mình.','Học đúng vào kĩ năng giao tiếp, không học lệch trọng tâm','course-1725002875657-115536280.jpg','Bài học theo tình huống thực tế áp dụng ngay vào thực tiễn','course-1725003829011-363290169.jpg','Lộ trình học tập rõ ràng - theo chuẩn châu âu CEFR Levels','course-1725003837334-475530360.jpg','Học viên có thể giao tiếp tốt lên ngay sau khóa học','course-1725002953153-524260630.jpg',NULL,'2024-08-29 14:19:19.913','2024-08-30 09:17:44.569',1,2,1,'All'),(55,'GIAO TIẾP 1VS1 OR 1VS2','','tieng-anh-giao-tiep-giao-tiep-1vs1-or-1vs2','Chỉ giáo viên và học viên – Tiết kiệm GẤP 2 thời gian học giao tiếp','course-1724990334655-274855244.jpg','1000','95','98','Lớp học quá đông và khó đảm bảo được chất lượng','Bạn từng thấy nhiều lớp học giao tiếp với số lượng từ 20 – 30 học viên và giáo viên không đủ thời gian để quan tâm, tương tác đến từng bạn.','Cần học gấp giao tiếp để có thể sử dụng trong công việc','Tự học giao tiếp thường khiến bạn dễ mất định hướng do không có phương pháp học tập hiệu quả hay một người thầy chuyên môn để trao đổi, sửa lỗi và hướng dẫn cho bạn.','Chương trình học không phù hợp với trình độ của bản thân','Học nhóm không hiệu quả, bạn cần một lộ trình học được thiết kế chuyên biệt với phương pháp học giao tiếp dành riêng cho nhu cầu và trình độ cá nhân của mình.','Học đúng vào kĩ năng giao tiếp, không học lệch trọng tâm','course-1725005025146-409577587.jpg','Bài học theo tình huống thực tế áp dụng ngay vào thực tiễn','course-1725004642800-331376281.jpg','Lộ trình học tập rõ ràng - theo chuẩn châu âu CEFR Levels','course-1725004666010-219354402.jpg','Học viên có thể giao tiếp tốt lên ngay sau khóa học','course-1725004677440-511680952.jpg',NULL,'2024-08-29 14:20:36.327','2024-09-05 04:11:45.529',1,2,1,'All'),(58,'IELTS PREMIUM (0 - 7.5+)','','ielts-academic-ielts-premium-0-75','Cam kết tăng ít nhất 1.0-1.5 band score sau 1 khóa học\r\nLớp Premium 4-6 học viên/ lớp - Khai giảng thường xuyên\r\nTặng toàn bộ giáo trình trong khóa trị giá đến 300k\r\nKho tài liệu học tập cập nhật mới liên tục\r\nĐạt aim hoàn học phí lên đến 100%','course-1724987579715-350848489.jpg','1000','95','98','Lớp học quá đông và khó đảm bảo được chất lượng','Bạn từng thấy nhiều lớp học IELTS với số lượng từ 20 – 30 học viên và giáo viên không đủ thời gian để quan tâm, tương tác đến từng bạn.','Cấp gấp bằng IELTS trong thời gian ngắn','Tự học IELTS thường khiến bạn dễ mất định hướng do không có phương pháp học tập hiệu quả hay một người thầy chuyên môn để trao đổi, sửa lỗi và hướng dẫn cho bạn.','Chương trình học không phù hợp với trình độ của bản thân','Học nhóm không hiệu quả, bạn cần một lộ trình học được thiết kế chuyên biệt với phương pháp học IELTS dành riêng cho nhu cầu và trình độ cá nhân của mình.','Chấm chữa bài và luyện tập trực tiếp với giáo viên','course-1724991329862-875473838.jpg','Thi thử không giới hạn số lần','course-1724991403235-239648656.jpg','Vô số tài liệu học tập từ giáo viên và trung tâm','course-1724991379410-447175053.jpg','30 khóa học đã mở và nhận về đánh giá tích cực từ học viên','course-1724991393834-926052118.jpg',NULL,'2024-08-30 02:47:16.380','2024-09-05 04:13:00.061',1,2,1,'All'),(59,'IELTS KÈM 1VS1 OR 1VS2 ','','ielts-academic-ielts-kem-1vs1-or-1vs2','Chỉ giáo viên và học viên – Tiết kiệm GẤP 2 thời gian học IELTS','course-1724999325676-516637139.jpg','1000','95','98','Lớp học quá đông và khó đảm bảo được chất lượng','Bạn từng thấy nhiều lớp học IELTS với số lượng từ 20 – 30 học viên và giáo viên không đủ thời gian để quan tâm, tương tác đến từng bạn.','Cấp gấp bằng IELTS trong thời gian ngắn','Tự học IELTS thường khiến bạn dễ mất định hướng do không có phương pháp học tập hiệu quả hay một người thầy chuyên môn để trao đổi, sửa lỗi và hướng dẫn cho bạn.','Chương trình học không phù hợp với trình độ của bản thân','Học nhóm không hiệu quả, bạn cần một lộ trình học được thiết kế chuyên biệt với phương pháp học IELTS dành riêng cho nhu cầu và trình độ cá nhân của mình.','1 kèm 1 với giáo viên - Chắc chắn điểm đầu ra','course-1724992998453-398731025.jpg','Linh hoạt thời gian học và hình thức học theo lịch trình bản thân','course-1724997930989-139598486.jpg','Cá nhân hóa lộ trình học và tăng khả năng phát triển bản thân','course-1724997939735-305650660.jpg','Đánh giá tích cực từ học viên','course-1724994611965-146861891.jpg',NULL,'2024-08-30 02:48:01.913','2024-09-05 04:16:35.907',1,2,1,'All'),(60,'IELTS GENERAL KÈM 1-1','','ielts-genaral-ielts-general-kem-1-1','Đạt Điểm Số Mong Muốn – Giấc Mơ Không Còn Xa Vời','course-1724987673434-66491706.jpg','1000','95','98','Lớp học quá đông và khó đảm bảo được chất lượng','Bạn từng thấy nhiều lớp học IELTS với số lượng từ 20 – 30 học viên và giáo viên không đủ thời gian để quan tâm, tương tác đến từng bạn.','Cấp gấp bằng IELTS trong thời gian ngắn','Tự học IELTS thường khiến bạn dễ mất định hướng do không có phương pháp học tập hiệu quả hay một người thầy chuyên môn để trao đổi, sửa lỗi và hướng dẫn cho bạn.','Chương trình học không phù hợp với trình độ của bản thân','Học nhóm không hiệu quả, bạn cần một lộ trình học được thiết kế chuyên biệt với phương pháp học IELTS dành riêng cho nhu cầu và trình độ cá nhân của mình.','1 kèm 1 với giáo viên - Chắc chắn điểm đầu ra','course-1725001252623-445964811.jpg','Linh hoạt thời gian học và hình thức học theo lịch trình bản thân','course-1725001133260-886264556.jpg','Cá nhân hóa lộ trình học và tăng khả năng phát triển bản thân','course-1725001240727-877147128.jpg','Đánh giá tích cực từ học viên đã đậu visa và định cư','course-1725001222700-409954181.jpg',NULL,'2024-08-30 03:00:25.429','2024-09-05 04:08:41.890',1,2,1,'All'),(61,'Tiếng Trung Premium','','tieng-trung-tieng-trung-premium','Lộ trình tiếng Trung Toàn Diện từ 0 - HSK6 với cam kết đầu ra\r\nLớp Premium 6-8HV/lớp - Khai giảng thường xuyên\r\nTặng toàn bộ giáo trình trong khóa trị giá đến 300k\r\nKho tài liệu học tập cập nhật mới liên tục\r\nCâu lạc bộ tiếng Trung miễn phí\r\nLớp học trải nghiệm sinh động\r\n\r\n','course-1724994409506-593335086.jpg','1000','95','98','Lớp học quá đông và khó đảm bảo được chất lượng?','Các lớp học tiếng Trung ở nhiều nơi có sĩ số từ 15 – 30 học viên, giáo viên không đủ thời gian để quan tâm và hỗ trợ cho từng bạn.\r\n\r\nLớp học Tiếng Trung Shinee có từ 6 - 8 học viên/lớp nên giáo viên và học viên có tương tác cực kỳ tốt.','TopGV có cam kết đầu ra không?','Cam kết đầu ra cho tất cả các bạn học viên, tất cả các level.','Chương trình học nặng, đi bài quá nhanh hay quá chậm nên không theo kịp.','Lộ trình tại TopGV tinh gọn nhưng hiệu quả, vừa phải không nhanh không chậm để giúp HV có thể nắm bắt bài một cách tốt nhất.','Giáo viên trình độ cao!','course-1724991111436-289619102.jpg','Lớp học nhỏ từ 6 - 8 học viên!','course-1724990872195-644472920.jpg','Cam kết đầu ra!','course-1724990983156-661034985.jpg','Lộ trình tinh gọn, tối ưu & hiệu quả!','course-1724991070915-485780715.jpg',NULL,'2024-08-30 03:27:27.375','2024-09-07 02:32:41.812',2,4,2,'All'),(62,'Tiếng Trung VIP 1.1','','tieng-trung-tieng-trung-vip-11','Lộ trình tiếng Trung Toàn Diện từ 0 - HSK6 với cam kết đầu ra\r\nLớp VIP 1.1: Linh hoạt thời gian & theo sát trình độ\r\nTặng toàn bộ giáo trình trong khóa trị giá đến 300k\r\nKho tài liệu học tập cập nhật mới liên tục\r\nCâu lạc bộ tiếng Trung miễn phí\r\nLớp học trải nghiệm sinh động','course-1725010536723-298855659.jpg','1000','95','98','Lớp học 1.1 thường có chi phí cao!','Nhiều nơi có chi phí 1.1 cao nên dù học viên có nhu cầu cũng khó có thể lựa chọn theo được.\r\n\r\nỞ TopGV, chi phí 1.1 vẫn rất tối ưu để phần lớn mọi người đều dễ lựa chọn hơn.','Khó tìm được giáo viên chất lượng phù hợp!','Ở TopGV, ngoài chuyên môn sẵn có, các giáo viên còn được trải qua 30 - 50 giờ training chương trình đào tạo riêng của dự án.\r\n\r\nCác giáo viên đều có bằng cấp và các chứng chỉ cao, đủ năng lực giảng dạy & hướng dẫn học viên.','Yêu cầu sự tự giác & biết quản lý thời gian.','Ở TopGV, tính tương tác của giáo viên và học viên cực kì tốt. Bầu không khí lớp học, sự động viên khích lệ, hướng dẫn của giáo viên sẽ khiến học viên cảm thấy tốt hơn rất nhiều.','Chấm & sửa bài liên tục, trực tiếp với giáo viên.','course-1725010302009-359503377.jpg','Linh hoạt về thời gian cho học viên.','course-1725010517105-727802932.jpg','Tùy chỉnh lộ trình, theo sát trình độ với học viên.','course-1725010511822-55801044.jpg','Nâng cao & mở rộng theo lĩnh vực chủ đề mà học viên quan tâm.','course-1725010328431-173161866.jpg',NULL,'2024-08-30 08:28:05.895','2024-09-07 02:33:27.087',2,4,2,'All'),(63,'Luyện thi HSK VIP 1.1','DM2ChbGOjKE','tieng-trung-luyen-thi-hsk-vip-11','Lộ trình luyện thi chứng chỉ HSK hiệu quả','course1.png','1000','95','98','Lớp học quá đông và khó đảm bảo được chất lượng','Bạn từng thấy nhiều lớp học IELTS với số lượng từ 15 – 30 học viên và giáo viên không đủ thời gian để quan tâm, tương tác đến từng bạn.','Cấp gấp bằng IELTS trong thời gian ngắn','Tự học IELTS thường khiến bạn dễ mất định hướng do không có phương pháp học tập hiệu quả hay một người thầy chuyên môn để trao đổi, sửa lỗi và hướng dẫn cho bạn.','Chương trình học không phù hợp với trình độ của bản thân','Học nhóm không hiệu quả, bạn cần một lộ trình học được thiết kế chuyên biệt với phương pháp học IELTS dành riêng cho nhu cầu và trình độ cá nhân của mình.','Chấm chữa bài và luyện tập 1 kèm 1 với giáo viên','course1.png','Thi thử không giới hạn số lần','course1.png','Vô số tài liệu học tập từ giảng viên của trung tâm','course1.png','30 khóa học đã mở và nhận về đánh giá tích cực từ học viên','course1.png',NULL,'2024-09-07 03:42:02.416','2024-09-07 03:55:16.171',2,NULL,NULL,'All');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coursecategory`
--

DROP TABLE IF EXISTS `coursecategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coursecategory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coursecategory`
--

LOCK TABLES `coursecategory` WRITE;
/*!40000 ALTER TABLE `coursecategory` DISABLE KEYS */;
INSERT INTO `coursecategory` VALUES (1,'Tiếng Anh'),(2,'Tiếng Trung'),(3,'Khác');
/*!40000 ALTER TABLE `coursecategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coursesubcategory`
--

DROP TABLE IF EXISTS `coursesubcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coursesubcategory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `courseCategoryId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `courseSubCategory_courseCategoryId_fkey` (`courseCategoryId`),
  CONSTRAINT `courseSubCategory_courseCategoryId_fkey` FOREIGN KEY (`courseCategoryId`) REFERENCES `coursecategory` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coursesubcategory`
--

LOCK TABLES `coursesubcategory` WRITE;
/*!40000 ALTER TABLE `coursesubcategory` DISABLE KEYS */;
INSERT INTO `coursesubcategory` VALUES (1,'Ielts Academic',1),(2,'Ielts General',1),(3,'Tiếng Anh Giao Tiếp',1),(4,'Tiếng Trung Toàn Diện',2),(5,'Luyện thi HSK',2),(6,'Toeic',1),(7,'Khác',1);
/*!40000 ALTER TABLE `coursesubcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `education`
--

DROP TABLE IF EXISTS `education`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `education` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `teacherId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `education_teacherId_fkey` (`teacherId`),
  CONSTRAINT `education_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `teacher` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `education`
--

LOCK TABLES `education` WRITE;
/*!40000 ALTER TABLE `education` DISABLE KEYS */;
INSERT INTO `education` VALUES (1,'Cử nhân ĐH Sư Phạm Loại Xuất Sắc','04cd771'),(2,'Cử nhân sư phạm tiếng Trung','38985cf'),(4,'Cử nhân ĐH Tôn Đức Thắng GPA 8.58','4a815d1'),(5,'Cử nhân ĐH RMIT - SGS','56406fe'),(10,'Du Học Sinh Canada','56406fe'),(11,'Cử nhân ĐH Quốc Tế - ĐH Quốc gia TPHCM','7d29e21'),(12,'Cử nhân sư phạm tiếng Trung','9a3f8fe'),(13,'Master trường French Pole','a56c0d1'),(14,'Cử nhân ĐH Kinh tế TPHCM','c1f5578'),(15,'Cử nhân Ngữ văn Trung Quốc','d17cc0c'),(16,'Cử nhân tiếng Trung thương mại','de29046'),(23,'Cử nhân Sư phạm Tiếng Anh loại Xuất sắc, GPA 3.73/4','9e41ab8'),(26,'Cử nhân ngành ngôn ngữ Trung ','41d7a88'),(29,'Cử nhân Đại học Ngoại Thương TP.HCM','ef40688'),(30,'Cử nhân ngôn ngữ Anh','a57de5b'),(31,'Cử nhân ĐH Ngoại Thương TPHCM',NULL),(32,'Cử nhân ĐH Ngoại Thương TPHCM',NULL),(33,'Cử nhân ĐH Ngoại Thương TPHCM',NULL);
/*!40000 ALTER TABLE `education` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experience`
--

DROP TABLE IF EXISTS `experience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experience` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `teacherId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `experience_teacherId_fkey` (`teacherId`),
  CONSTRAINT `experience_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `teacher` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experience`
--

LOCK TABLES `experience` WRITE;
/*!40000 ALTER TABLE `experience` DISABLE KEYS */;
INSERT INTO `experience` VALUES (1,'Trên 2 năm kinh nghiệm dạy IELTS',' 08/2022 - 09/2024','Mình đã có hơn 2 năm kinh nghiệm giảng dạy các lớp luyện thi IELTS, đặc biệt là các lớp dành cho học viên ở cấp độ Advanced, từ 5.0 đến 6.5. Trong quá trình giảng dạy, mình tập trung vào việc giúp học viên củng cố kiến thức nền tảng, cải thiện cả bốn kỹ năng Nghe, Nói, Đọc, Viết một cách toàn diện. Mình cũng chú trọng đến việc nâng cao điểm số cho các bạn từ mức trung bình lên mức khá, giúp các bạn tự tin hơn khi tham gia kỳ thi quốc tế.\nVới những phương pháp giảng dạy linh hoạt, phù hợp với từng đối tượng học viên, mình luôn tìm cách tối ưu hóa kết quả học tập trong thời gian ngắn nhất. Mình cung cấp những chiến lược làm bài hiệu quả, tập trung vào từng kỹ năng cụ thể, và giúp các bạn nhận ra điểm mạnh, điểm yếu của mình để từ đó cải thiện và phát triển tốt hơn. Nhiều học viên sau khi tham gia lớp học của mình đã đạt được mục tiêu điểm số mong muốn và sẵn sàng bước vào những cơ hội học tập, nghề nghiệp mới.','4a815d1'),(5,'Trên 2 năm giảng dạy TA Giao Tiếp cho người mới bắt đầu','05/2022 - 09/2024','Với hơn 2 năm kinh nghiệm giảng dạy các lớp giao tiếp, mình đặc biệt đam mê và chuyên sâu trong việc giảng dạy các lớp giao tiếp ở mọi trình độ. Mình luôn tạo ra một môi trường học tập tích cực và khuyến khích, nơi học viên có thể cảm thấy thoải mái và tự tin khi thực hành tiếng Anh. Bằng cách tập trung vào việc cải thiện kỹ năng giao tiếp và xây dựng sự tự tin, mình giúp học viên dễ dàng áp dụng tiếng Anh trong các tình huống thực tế, từ giao tiếp hàng ngày đến các tình huống chuyên sâu hơn. Mỗi lớp học đều được thiết kế để hỗ trợ và động viên học viên, giúp họ không chỉ đạt được mục tiêu học tập mà còn tận hưởng quá trình học tập một cách vui vẻ và hiệu quả. ','c1f5578'),(6,'3 năm kinh nghiệm dạy IELTS đủ level','07/2021 - 09/2024','Với hơn 3 năm kinh nghiệm giảng dạy các lớp giao tiếp, mình tự hào về việc giúp học viên phát triển kỹ năng Speaking đạt mức 9.0. Sở trường của mình là tạo ra các lớp học giao tiếp phù hợp với mọi trình độ, từ người mới bắt đầu đến học viên đã có nền tảng vững chắc.\nMình luôn chú trọng xây dựng một môi trường học tập thân thiện và khuyến khích, nơi học viên có thể thoải mái thực hành và nâng cao khả năng giao tiếp của mình. Mình tập trung vào việc phát triển kỹ năng nói một cách tự nhiên và hiệu quả, giúp học viên không chỉ nắm vững từ vựng và ngữ pháp mà còn tự tin sử dụng tiếng Anh trong các tình huống thực tế hàng ngày.','04cd771'),(7,'Trên 2 năm kinh nghiệm dạy IELTS đa dạng level','03/2022 - 09/2024','Với hơn 2 năm dạy tiếng Anh, đặc biệt là các lớp kèm IELTS, mình đã giúp rất nhiều học viên chinh phục mục tiêu học tập của mình. Mình chuyên về các lớp luyện thi IELTS, nơi mình sử dụng các phương pháp học linh hoạt và dễ áp dụng để đáp ứng nhu cầu của từng bạn. Mình tập trung vào việc nâng cao kỹ năng nghe, nói, đọc, viết, giúp các bạn không chỉ nắm vững từ vựng và ngữ pháp mà còn tự tin “vượt vũ môn” với điểm số cao. Sự nhiệt huyết và cách giảng dạy của mình đã giúp các học viên đạt được thành công từ giao tiếp cơ bản đến chinh phục IELTS một cách dễ dàng.','7d29e21'),(8,'Trên 3 năm kinh nghiệm giảng dạy các lớp IELTS - sở trường các lớp IELTS level Foundation, lớp dành cho người mới bắt đầu học IELTS.','03/2021 - 09/2024','Specializing in teaching foundational and beginner-level classes, helping students build a solid foundation in all four skills (Listening, Reading, Writing, and Speaking). Proficient in delivering lessons aligned with standard IELTS curriculum, ensuring students are well-prepared for each section of the exam. Skilled at designing lesson plans that focus on essential IELTS strategies and techniques, particularly for students starting from a low level or those who need extra support with the basics.','ef40688'),(9,'4 năm kinh nghiệm dạy IELTS','06/2020 - 09/2024','With over four years of experience in teaching IELTS, I specialize in delivering comprehensive instruction for IELTS Writing, helping students master both Task 1 and Task 2. My expertise lies in guiding students through the nuances of effective essay structure, argument development, and language accuracy. I am proficient in crafting lesson plans that align with the IELTS curriculum, ensuring students are well-prepared for every aspect of the Writing section. My approach includes personalized feedback and targeted exercises to address individual strengths and areas for improvement. In addition to Writing, I provide holistic support across all four skills—Listening, Reading, and Speaking—ensuring a well-rounded preparation for the IELTS exam.','56406fe'),(10,'4 năm kinh nghiệm dạy IELTS',' 07/2020 - 09/2024','Với kinh nghiệm giảng dạy phong phú, tôi đã tổ chức và giảng dạy các lớp IELTS General cho những người có nhu cầu định cư hoặc làm việc ở nước ngoài, tập trung vào việc phát triển toàn diện bốn kỹ năng Đọc, Viết, Nghe, và Nói. Tôi sử dụng các tài liệu học tập uy tín như “Cambridge IELTS” và “Collins Practice Tests for IELTS” để xây dựng các chiến lược làm bài hiệu quả, giúp học viên nhanh chóng đạt được mục tiêu điểm số. Bên cạnh đó, tôi còn có kinh nghiệm giảng dạy khóa Giao tiếp Tiếng Anh cho người lớn từ cơ bản đến trung cấp cao, với các sách như “Face2Face” và “American English File,” tập trung vào kỹ năng Nghe, Nói, và Phát âm trong các tình huống giao tiếp thực tế, giúp học viên tự tin sử dụng tiếng Anh hàng ngày. Ngoài ra, tôi cũng thiết kế và thực hiện các Lớp kèm riêng với chương trình học linh hoạt, tùy chỉnh theo nhu cầu và mục tiêu cụ thể của từng học viên như luyện thi IELTS hay nâng cao kỹ năng giao tiếp, đảm bảo mang lại hiệu quả tối ưu qua sự kèm cặp tận tình và các tài liệu học tập đa dạng.','a57de5b'),(11,'2 năm kinh nghiệm dạy tiếng Trung',' 10/2022 - 09/2024','Với hơn 2 năm kinh nghiệm giảng dạy tiếng Trung, mình đã hướng dẫn học viên từ trình độ cơ bản (HSK0) đến HSK4, bao gồm cả giao tiếp và luyện thi HSK. Sở trường của mình là các lớp luyện thi HSK, nơi mình áp dụng những phương pháp giảng dạy hiệu quả và linh hoạt để giúp học viên đạt được kết quả cao nhất trong kỳ thi. Mình tập trung vào việc xây dựng nền tảng vững chắc cho học viên, từ việc cải thiện kỹ năng ngôn ngữ cơ bản đến chuẩn bị cho các bài thi HSK, đảm bảo mỗi học viên đều có thể tự tin và thành công trong hành trình học tiếng Trung của mình.','41d7a88'),(12,'10 năm kinh nghiệm dạy tiếng Trung','08/2014 - 09/2024','Với hơn 10 năm kinh nghiệm giảng dạy tiếng Trung, mình đã có cơ hội hướng dẫn nhiều học viên ở các trình độ khác nhau, từ những người mới bắt đầu (HSK0) đến HSK4, bao gồm cả giao tiếp và luyện thi. Đặc biệt, mình có sở trường trong việc giảng dạy các lớp giao tiếp, nơi mình tạo ra môi trường học tập cởi mở và thân thiện, giúp học viên tự tin sử dụng tiếng Trung trong các tình huống thực tế. Với phương pháp dạy sáng tạo và linh hoạt, mình không chỉ giúp học viên nắm vững ngữ pháp và từ vựng mà còn phát triển khả năng giao tiếp một cách tự nhiên và hiệu quả.','38985cf'),(13,'15 năm kinh nghiệm dạy tiếng Trung','10/2009 - 08/2024','Với hơn 15 năm kinh nghiệm giảng dạy tiếng Trung, tôi đã tích lũy được nhiều kiến thức và kỹ năng trong việc dạy cả giao tiếp và luyện thi HSK ở mọi cấp độ. Tuy nhiên, điểm mạnh của tôi là các lớp luyện thi HSK, nơi tôi áp dụng các phương pháp giảng dạy tinh tế và hiệu quả để giúp học viên đạt được mục tiêu cao nhất trong kỳ thi.\nTrong suốt sự nghiệp giảng dạy, tôi đã xây dựng và triển khai những chiến lược học tập đặc biệt, phù hợp với nhu cầu và mục tiêu của từng học viên. Tôi chú trọng đến việc phát triển kỹ năng ngôn ngữ toàn diện và chuẩn bị cho học viên không chỉ về mặt lý thuyết mà còn về kỹ năng thực tế, giúp họ tự tin và thành công trong các kỳ thi HSK. Sự tận tâm và kinh nghiệm dày dạn của tôi đã giúp nhiều học viên chinh phục được những thử thách trong việc học tiếng Trung và đạt được những kết quả xuất sắc.','d17cc0c'),(14,'5 năm kinh nghiệm dạy IELTS','02/2019 - 09/2024','Với hơn 5 năm kinh nghiệm giảng dạy tiếng Anh, mình đã có cơ hội làm việc với nhiều học viên trong cả các lớp IELTS và giao tiếp. Tuy nhiên, điểm mạnh của mình là các lớp IELTS Writing, nơi mình đặc biệt chú trọng vào việc phát triển kỹ năng viết của học viên. Mình sử dụng các phương pháp giảng dạy hiệu quả để giúp học viên cải thiện khả năng viết, từ việc xây dựng cấu trúc bài viết đến việc phát triển ý tưởng một cách rõ ràng và mạch lạc. Sự tận tâm và kinh nghiệm dày dạn của mình giúp học viên không chỉ đạt được điểm số cao trong kỳ thi IELTS mà còn nâng cao kỹ năng viết một cách toàn diện và tự tin.','a56c0d1'),(15,'12 năm kinh nghiệm dạy tiếng Trung',' 10/2012 - 09/2024','Với hơn 10 năm kinh nghiệm giảng dạy tiếng Trung, tôi đã hướng dẫn nhiều học viên ở các trình độ khác nhau, từ người mới bắt đầu (HSK0) đến HSK4, tập trung vào cả giao tiếp và luyện thi. Trong suốt quá trình này, tôi đã phát triển và triển khai các phương pháp giảng dạy linh hoạt, phù hợp với nhu cầu cụ thể của từng học viên, đặc biệt là những lớp giao tiếp - lĩnh vực mà tôi có nhiều kinh nghiệm và đam mê. Tôi tập trung vào việc cải thiện kỹ năng nghe và nói, giúp học viên không chỉ nắm vững từ vựng và ngữ pháp mà còn tự tin sử dụng tiếng Trung trong các tình huống thực tế hàng ngày, từ giao tiếp thông thường đến các tình huống chuyên sâu hơn trong môi trường học tập và làm việc. Sự tận tâm và phương pháp giảng dạy hiệu quả đã giúp nhiều học viên đạt được mục tiêu học tập, từ giao tiếp cơ bản đến vượt qua các kỳ thi HSK với kết quả cao.','9a3f8fe'),(16,'4 năm kinh nghiệm dạy tiếng Trung','02/2020 - 09/2024','Với hơn bốn năm kinh nghiệm dạy tiếng Trung, tôi chuyên giảng dạy các lớp HSK từ cấp 0 đến 5, giúp học viên xây dựng nền tảng vững chắc và nâng cao trình độ. Tôi thiết kế các bài học phù hợp với từng cấp độ HSK, tập trung vào phát triển kỹ năng nghe, nói, đọc và viết. Phương pháp giảng dạy của tôi bao gồm phản hồi cá nhân, hoạt động tương tác và bài tập thực tiễn, giúp học viên chuẩn bị tốt cho kỳ thi và tự tin sử dụng tiếng Trung trong nhiều tình huống.','de29046'),(17,'4 năm luyện thi cho học sinh các trường top','Intern at Nguyen Du Secondary school, District 1','Teaching English for teens ranging from 12-15 (From Basic to Upper-Intermediate Level). Marking and providing appropriate feedback on oral and written work. Devising, writing and producing new materials, including audio and visual resources.','9e41ab8'),(22,'Trên 2 năm kinh nghiệm dạy IELTS','Intern at Gia Dinh High School, Binh Thanh District','','9e41ab8'),(24,'2 năm kinh nghiệm dạy IELTS đủ level','TALENT INSTITUTE / 10/2013 - 03/2018','Teaching Communication English for adults (From Basic to Upper-Intermediate Level) Books: Face2Face, Tactics for Listening, American English File, Let\'s talk Planning, preparing and delivering lessons to a range of classes. Concentrating on pronunciation, listening, and speaking skills for daily topic. Marking and providing appropriate feedback on oral and written work. Devising, writing and producing new materials, including audio and visual resources.',NULL),(25,'2 năm kinh nghiệm dạy IELTS đủ level','TALENT INSTITUTE / 10/2013 - 03/2018','Teaching Communication English for adults (From Basic to Upper-Intermediate Level) Books: Face2Face, Tactics for Listening, American English File, Let\'s talk Planning, preparing and delivering lessons to a range of classes. Concentrating on pronunciation, listening, and speaking skills for daily topic. Marking and providing appropriate feedback on oral and written work. Devising, writing and producing new materials, including audio and visual resources.',NULL),(26,'2 năm kinh nghiệm dạy IELTS đủ level','TALENT INSTITUTE / 10/2013 - 03/2018','Teaching Communication English for adults (From Basic to Upper-Intermediate Level) Books: Face2Face, Tactics for Listening, American English File, Let\'s talk Planning, preparing and delivering lessons to a range of classes. Concentrating on pronunciation, listening, and speaking skills for daily topic. Marking and providing appropriate feedback on oral and written work. Devising, writing and producing new materials, including audio and visual resources.',NULL);
/*!40000 ALTER TABLE `experience` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagemoment`
--

DROP TABLE IF EXISTS `imagemoment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagemoment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `teacherId` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `imageMoment_teacherId_fkey` (`teacherId`),
  CONSTRAINT `imageMoment_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `teacher` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagemoment`
--

LOCK TABLES `imagemoment` WRITE;
/*!40000 ALTER TABLE `imagemoment` DISABLE KEYS */;
INSERT INTO `imagemoment` VALUES (1,'moment-1725678935750-314573217.jpg','4a815d1'),(2,'moment-1725678996099-614737136.jpg','4a815d1'),(3,'moment-1725678965997-367790822.jpg','4a815d1'),(4,'moment-1725678975195-41063623.jpg','4a815d1'),(5,'moment-1725679007316-330063405.jpg','4a815d1'),(21,'moment-1725529959970-84079673.jpg','c1f5578'),(22,'moment-1725529836631-856531673.jpg','c1f5578'),(23,'moment-1725529774487-58716204.jpg','c1f5578'),(24,'moment-1725527997658-676021039.jpg','c1f5578'),(25,'moment-1725528237261-511340722.jpg','c1f5578'),(26,'moment-1725529142563-686702886.jpg','04cd771'),(27,'moment-1725528702954-399297813.jpg','04cd771'),(28,'moment-1725529066687-905126674.jpg','04cd771'),(29,'moment-1725529052686-819800282.jpg','04cd771'),(30,'moment-1725528975331-804005658.jpg','04cd771'),(31,'moment-1725530250857-603768425.jpg','7d29e21'),(32,'moment-1725530313718-123502562.jpg','7d29e21'),(33,'moment-1725530297673-66413437.jpg','7d29e21'),(34,'moment-1725530332527-554551067.jpg','7d29e21'),(35,'moment-1725530160025-983340288.jpg','7d29e21'),(36,'moment-1725525756277-824108526.jpg','ef40688'),(37,'moment-1725525765979-862544342.jpg','ef40688'),(38,'moment-1725525773512-628504954.jpg','ef40688'),(39,'moment-1725525792841-126821323.jpg','ef40688'),(40,'moment-1725525799174-597226035.jpg','ef40688'),(41,'moment-1725527050458-717587652.jpg','56406fe'),(42,'moment-1725528954900-127333225.jpg','56406fe'),(43,'moment-1725527068969-875215574.jpg','56406fe'),(44,'moment-1725527073530-862929438.jpg','56406fe'),(45,'moment-1725527076614-858057011.jpg','56406fe'),(46,'moment-1725510166036-618678009.jpg','a57de5b'),(47,'moment-1725526053921-199323267.jpg','a57de5b'),(48,'moment-1725525836764-538784951.jpg','a57de5b'),(49,'moment-1725531270104-985256024.jpg','a57de5b'),(50,'moment-1725531251305-25705302.jpg','a57de5b'),(51,'moment-1725520681237-362665317.jpg','41d7a88'),(52,'moment-1725520517688-393723581.jpg','41d7a88'),(53,'moment-1725520534528-652332494.jpg','41d7a88'),(54,'moment-1725520551900-137837272.jpg','41d7a88'),(55,'moment-1725532032647-116745607.jpg','41d7a88'),(56,'moment-1725530600417-830566866.jpg','38985cf'),(57,'moment-1725530771217-433539446.jpg','38985cf'),(58,'moment-1725530647898-646735847.jpg','38985cf'),(59,'moment-1725530701162-315952158.jpg','38985cf'),(60,'moment-1725530878603-804945203.jpg','38985cf'),(61,'moment-1725525427617-93354035.jpg','d17cc0c'),(62,'moment-1725530979829-384008656.jpg','d17cc0c'),(63,'moment-1725512783845-415222681.jpg','d17cc0c'),(64,'moment-1725530964204-722594380.jpg','d17cc0c'),(65,'moment-1725525482363-964276822.jpg','d17cc0c'),(66,'moment-1725526437210-482735369.jpg','a56c0d1'),(67,'moment-1725526449984-967638343.jpg','a56c0d1'),(68,'moment-1725531135577-22943637.jpg','a56c0d1'),(69,'moment-1725526499766-696919407.jpg','a56c0d1'),(70,'moment-1725531617942-933912668.jpg','a56c0d1'),(71,'moment-1725510960868-847328478.jpg','9a3f8fe'),(72,'moment-1725531212903-414538086.jpg','9a3f8fe'),(73,'moment-1725531096041-293186852.jpg','9a3f8fe'),(74,'moment-1725531183777-847519151.jpg','9a3f8fe'),(75,'moment-1725526761339-992495403.jpg','9a3f8fe'),(76,'moment-1725527747375-199336315.jpg','de29046'),(77,'moment-1725527749784-255267567.jpg','de29046'),(78,'moment-1725527752533-719872450.jpg','de29046'),(79,'moment-1725527756338-871447462.jpg','de29046'),(80,'moment-1725527759003-413268573.jpg','de29046'),(81,'moment-1724079700262-455784078.jpg','9e41ab8'),(82,'moment-1724079702472-364541598.jpg','9e41ab8'),(83,'khoanh-khac-3.png','9e41ab8'),(84,'khoanh-khac-4.png','9e41ab8'),(85,'khoanh-khac-5.png','9e41ab8'),(96,'moment-1724079700262-455784078.jpg',NULL),(97,'moment-1724079702472-364541598.jpg',NULL),(98,'khoanh-khac-3.png',NULL),(99,'khoanh-khac-4.png',NULL),(100,'khoanh-khac-5.png',NULL),(101,'moment-1724079700262-455784078.jpg',NULL),(102,'moment-1724079702472-364541598.jpg',NULL),(103,'khoanh-khac-3.png',NULL),(104,'khoanh-khac-4.png',NULL),(105,'khoanh-khac-5.png',NULL),(106,'moment-1724079700262-455784078.jpg',NULL),(107,'moment-1724079702472-364541598.jpg',NULL),(108,'khoanh-khac-3.png',NULL),(109,'khoanh-khac-4.png',NULL),(110,'khoanh-khac-5.png',NULL);
/*!40000 ALTER TABLE `imagemoment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobapply`
--

DROP TABLE IF EXISTS `jobapply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobapply` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fullName` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `position` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `applicationId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `jobApply_applicationId_fkey` (`applicationId`),
  CONSTRAINT `jobApply_applicationId_fkey` FOREIGN KEY (`applicationId`) REFERENCES `application` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobapply`
--

LOCK TABLES `jobapply` WRITE;
/*!40000 ALTER TABLE `jobapply` DISABLE KEYS */;
INSERT INTO `jobapply` VALUES (1,'trungpyy@gmail.com','Trung Thành','0886506127','Giáo viên','eMB_Terms_and_Conditions (1)-1724830085482.pdf','2024-08-28 07:28:05.504','2024-08-28 07:28:05.504',1);
/*!40000 ALTER TABLE `jobapply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'Quận Bình Thạnh'),(2,'Quận 1'),(3,'Quận 2'),(4,'Quận Gò Vấp');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `subcategoryId` int DEFAULT NULL,
  `categoryId` int DEFAULT NULL,
  `userId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `post_slug_key` (`slug`),
  KEY `post_subcategoryId_fkey` (`subcategoryId`),
  KEY `post_categoryId_fkey` (`categoryId`),
  KEY `post_userId_fkey` (`userId`),
  CONSTRAINT `post_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `post_subcategoryId_fkey` FOREIGN KEY (`subcategoryId`) REFERENCES `subcategory` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `post_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'IELTS UKVI là gì? Hướng dẫn chi tiết về kỳ thi IELTS UKVI và cách đăng ký','tin-tuc-ielts-ukvi-la-gi-huong-dan-chi-tiet-ve-ky-thi-ielts-ukvi-va-cach-dang-ky','<p><strong>IELTS UKVI: Chìa Khóa Mở Ra Cánh Cửa Học Tập và Nghề Nghiệp Tại Vương Quốc Anh</strong></p><p>Vương quốc Anh từ lâu đã là điểm đến lý tưởng với vô vàn cơ hội học tập và phát triển nghề nghiệp. Tuy nhiên, để biến giấc mơ du học và làm việc tại xứ sở sương mù thành hiện thực, bạn cần chứng minh khả năng ngôn ngữ của mình thông qua các chứng chỉ tiếng Anh quốc tế, mà một trong số đó là IELTS UKVI. Vậy IELTS UKVI là gì và vì sao nó lại quan trọng đến vậy? Bài viết này sẽ cung cấp cho bạn những thông tin chi tiết và cần thiết nhất về IELTS UKVI, giúp bạn chuẩn bị tốt nhất cho kỳ thi này.</p><p><strong>IELTS UKVI là gì?</strong></p><p>IELTS UKVI (International English Language Testing System for UK Visas and Immigration) là bài kiểm tra tiếng Anh duy nhất được Cục Thị thực và Di trú Anh (UKVI) công nhận cho các mục đích như học tập, làm việc, định cư hoặc nhập quốc tịch tại Vương quốc Anh. Khác với IELTS thông thường, IELTS UKVI được thiết kế đặc biệt để đáp ứng các yêu cầu về visa và nhập cư của Anh quốc.</p><p><strong>Các Loại Hình Thi IELTS UKVI</strong></p><p>IELTS UKVI có nhiều loại hình, mỗi loại phục vụ một mục đích và đối tượng cụ thể:</p><ul><li><strong>UKVI IELTS Academic</strong>: Dành cho học sinh, sinh viên mong muốn theo học tại các trường đại học, cao đẳng tại Anh.</li><li><strong>UKVI IELTS General Training</strong>: Phù hợp với những ai muốn làm việc hoặc tham gia các khóa đào tạo nghề tại Anh.</li><li><strong>UKVI IELTS Life Skills</strong>: Dành cho những người cần chứng minh khả năng giao tiếp cơ bản bằng tiếng Anh, phục vụ cho việc xin thị thực hoặc định cư.</li></ul><p><strong>Tại sao nên chọn IELTS UKVI?</strong></p><p>Chọn thi IELTS UKVI mang lại nhiều lợi ích thiết thực, đặc biệt đối với những ai muốn học tập, làm việc hoặc định cư tại Vương quốc Anh:</p><ul><li><strong>Đáp ứng yêu cầu visa</strong>: IELTS UKVI là bài kiểm tra duy nhất được UKVI chấp nhận cho mục đích xin visa học tập hoặc làm việc tại Anh.</li><li><strong>Mở rộng cơ hội quốc tế</strong>: Ngoài Vương quốc Anh, IELTS UKVI còn được chấp nhận tại nhiều quốc gia khác như Úc, Canada, New Zealand.</li><li><strong>Cải thiện kỹ năng ngôn ngữ</strong>: Quá trình học và thi IELTS UKVI giúp bạn nâng cao toàn diện các kỹ năng tiếng Anh, từ nghe, nói đến đọc, viết.</li></ul><p><strong>So sánh IELTS UKVI và IELTS thông thường</strong></p><p>Mặc dù cả hai đều là các chứng chỉ tiếng Anh quốc tế, nhưng IELTS UKVI và IELTS thông thường có những khác biệt rõ rệt:</p><p>Đặc điểmIELTS Thông ThườngIELTS UKVIPhạm vi công nhậnĐược công nhận ở hầu hết các quốc giaĐược công nhận tại Anh và một số quốc gia khácMục đích sử dụngHọc tập, làm việc, định cư tại nhiều quốc giaHọc tập, làm việc, định cư tại Vương quốc AnhLệ phíThấp hơnCao hơn</p><p><strong>Nên chọn IELTS UKVI hay IELTS Thông Thường?</strong></p><p>Việc lựa chọn giữa IELTS UKVI và IELTS thông thường phụ thuộc vào mục tiêu của bạn. Nếu bạn dự định học tập, làm việc, hoặc định cư tại Vương quốc Anh, IELTS UKVI là sự lựa chọn bắt buộc. Ngược lại, nếu bạn muốn đi các nước nói tiếng Anh khác như Úc, Canada, IELTS thông thường sẽ là lựa chọn phù hợp và tiết kiệm hơn.</p><p><strong>Đăng ký thi IELTS UKVI ở đâu?</strong></p><p>Bạn có thể đăng ký thi IELTS UKVI tại các tổ chức như IDP và Hội đồng Anh (British Council). Quá trình đăng ký khá đơn giản:</p><ol><li>Truy cập trang đăng ký của IDP hoặc BC.</li><li>Chọn ngày thi phù hợp.</li><li>Điền thông tin cá nhân và hoàn tất thanh toán.</li><li>Xác nhận thông tin qua email sau khi đăng ký thành công.</li></ol><p><strong>Lưu ý khi đăng ký thi IELTS UKVI</strong></p><p>Khi đăng ký thi IELTS UKVI, bạn cần chú ý một số điểm quan trọng như:</p><ul><li><strong>Địa điểm thi</strong>: Chỉ có các địa điểm được UKVI phê duyệt mới được tổ chức thi IELTS UKVI.</li><li><strong>Giám sát nghiêm ngặt</strong>: Do yêu cầu cao của kỳ thi, quá trình giám sát sẽ rất nghiêm ngặt. Bạn cần chuẩn bị kỹ lưỡng cả về tâm lý và kiến thức.</li><li><strong>Lịch thi</strong>: Lịch thi IELTS UKVI thường không trùng với lịch thi IELTS thông thường, nên bạn cần kiểm tra kỹ lịch thi trước khi đăng ký.</li></ul><p><strong>Kết luận</strong></p><ul><li>IELTS UKVI không chỉ là một yêu cầu bắt buộc đối với những ai muốn học tập, làm việc hoặc định cư tại Vương quốc Anh mà còn là chìa khóa mở ra nhiều cơ hội quốc tế. Bằng việc nắm rõ thông tin về IELTS UKVI, bạn sẽ có sự chuẩn bị tốt nhất cho kỳ thi và chinh phục mục tiêu của mình. Hãy để Topgiaovien.vn đồng hành cùng bạn trên con đường chinh phục IELTS UKVI.</li></ul>','post-1724644130304-291901014.jpg','2024-08-27 22:55:59.987','2024-08-27 22:55:59.987',NULL,1,'715s8c-2c45-zzcc54d40fd'),(2,'IELTS là gì? Cập nhật thông tin mới nhất về bài thi IELTS 2024','tin-tuc-ielts-la-gi-cap-nhat-thong-tin-moi-nhat-ve-bai-thi-ielts-2024','<p>IELTS là gì? Tất Tần Tật Những Thông Tin Mới Nhất Về Bài Thi IELTS 2024</p><p>Chứng chỉ tiếng Anh IELTS không chỉ là tấm vé thông hành để mở ra cánh cửa du học mà còn là yếu tố quan trọng được nhiều công ty quốc tế yêu cầu khi tuyển dụng. Tuy nhiên, không phải ai cũng hiểu rõ về IELTS và cách thức để thực hiện bài thi này một cách hiệu quả.</p><p>Bài viết dưới đây sẽ cung cấp cho bạn cái nhìn chi tiết về IELTS là gì, cấu trúc bài thi, cách tính điểm, và những lợi ích mà chứng chỉ IELTS mang lại.</p><h3>1. IELTS là gì?</h3><p>IELTS (International English Language Testing System) là Hệ thống Kiểm tra Tiếng Anh Quốc tế, được thành lập bởi Hội đồng Anh, tổ chức giáo dục IDP của Úc và ESOL thuộc Đại học Cambridge từ năm 1989. Hiện nay, bài thi IELTS đã có mặt tại hơn 150 quốc gia với hơn 1,200 trung tâm tổ chức thi. Hơn 12,000 trường đại học, cao đẳng, cùng nhiều tổ chức và tập đoàn trên toàn thế giới yêu cầu chứng chỉ IELTS để đánh giá trình độ tiếng Anh của ứng viên.</p><h3>2. Học IELTS để làm gì?</h3><p>Sở hữu chứng chỉ IELTS không chỉ giúp bạn đủ điều kiện nhập học tại các trường đại học, cao đẳng ở các quốc gia nói tiếng Anh, mà còn mở ra nhiều cơ hội nghề nghiệp hấp dẫn. Đối với học sinh, IELTS là yêu cầu bắt buộc để du học và có cơ hội nhận học bổng tại những trường đại học danh tiếng. Đối với người đi làm, IELTS giúp bạn nổi bật trong mắt nhà tuyển dụng, gia tăng cơ hội thăng tiến trong sự nghiệp.</p><h3>3. Nên thi IELTS Academic hay IELTS General Training?</h3><p>Bài thi IELTS có hai dạng chính: IELTS Academic và IELTS General Training. IELTS Academic dành cho những ai muốn theo học tại các trường đại học, cao đẳng, hoặc các chương trình đào tạo quốc tế. Trong khi đó, IELTS General Training phù hợp với những ai có nhu cầu xin việc, học nghề, hoặc định cư tại các quốc gia nói tiếng Anh. Mỗi dạng bài thi đều có 4 phần: Nghe, Nói, Đọc, Viết, nhưng nội dung của phần Đọc và Viết sẽ khác nhau tùy thuộc vào mục đích thi.</p><h3>4. Cấu trúc của bài thi IELTS</h3><p>Bài thi IELTS bao gồm 4 kỹ năng: Nghe, Nói, Đọc, và Viết. Dưới đây là mô tả chi tiết từng phần:</p><ul><li><strong>Listening (Nghe)</strong>: Kéo dài 30 phút, gồm 4 phần với các câu hỏi có độ khó tăng dần.</li><li><strong>Speaking (Nói)</strong>: Kéo dài từ 11 đến 14 phút, gồm 3 phần: trả lời câu hỏi về bản thân, nói về một chủ đề cụ thể, và thảo luận sâu hơn về chủ đề đã chọn.</li><li><strong>Reading (Đọc)</strong>: Gồm 40 câu hỏi trong 60 phút, với nội dung khác nhau giữa IELTS Academic và General Training.</li><li><strong>Writing (Viết)</strong>: Gồm 2 phần, kéo dài 60 phút. Phần 1 yêu cầu viết đoạn văn mô tả biểu đồ, bảng biểu; phần 2 là bài luận thể hiện quan điểm về một vấn đề.</li></ul><h3>5. Thời gian thi IELTS</h3><p>Bài thi IELTS kéo dài khoảng 3 giờ đồng hồ, bao gồm các phần Nghe, Đọc, và Viết được thi trong cùng một ngày. Phần thi Nói có thể được tổ chức cùng ngày hoặc vào một ngày khác tùy thuộc vào trung tâm thi.</p><h3>6. Những quy định về hủy và đổi ngày thi</h3><p>Việc hủy hoặc đổi ngày thi IELTS cần được thực hiện theo các quy định cụ thể của tổ chức thi, với các điều kiện và lệ phí khác nhau. Nếu bạn cần hủy hoặc đổi ngày thi, hãy liên hệ với trung tâm thi sớm nhất có thể để được hỗ trợ.</p><h3>7. Cách tính điểm bài thi IELTS</h3><p>Điểm IELTS được tính trên thang điểm từ 1.0 đến 9.0, với mỗi kỹ năng được chấm riêng biệt. Điểm trung bình của 4 kỹ năng sẽ là điểm số cuối cùng. Nếu điểm trung bình có phần lẻ là 0.25 hoặc 0.75, sẽ được làm tròn lên 0.5 hoặc 1.0.</p><h3>8. Địa chỉ học IELTS tin cậy</h3><ul><li>Trong môi trường học tiếng Anh ngày càng phát triển, việc lựa chọn một trung tâm luyện thi IELTS uy tín là rất quan trọng. Topgiaovien.vn giới thiệu cho bạn Trung tâm IELTS Vietop – nơi cung cấp các khóa học IELTS với phương pháp giảng dạy hiệu quả và đội ngũ giảng viên giàu kinh nghiệm. Trung tâm Vietop là địa chỉ luyện thi IELTS đáng tin cậy, giúp bạn đạt được mục tiêu học tập và sự nghiệp của mình.</li></ul>','post-1724644448387-909540585.jpg','2024-08-27 22:55:59.991','2024-08-27 22:55:59.991',NULL,1,'715s8c-2c45-zzcc54d40fd'),(3,'Chứng chỉ VSTEP có thời hạn bao lâu? [Update 2024]','tin-tuc-chung-chi-vstep-co-thoi-han-bao-lau-update-2024','<p>Câu hỏi \"Chứng chỉ VSTEP có thời hạn bao lâu?\" luôn là mối quan tâm hàng đầu của những người chuẩn bị thi chứng chỉ này, đặc biệt là các học sinh, sinh viên. Để giúp bạn hiểu rõ hơn về hiệu lực của chứng chỉ VSTEP và cách thức sử dụng, bài viết này sẽ cung cấp những thông tin chi tiết và cập nhật nhất cho năm 2024.</p><p>Hãy cùng mình khám phá các thông tin quan trọng sau đây:</p><ul><li><strong>Chứng chỉ VSTEP là gì?</strong></li><li><strong>Thời hạn sử dụng của chứng chỉ VSTEP là bao lâu?</strong></li><li><strong>Sau khi thi chứng chỉ VSTEP, bao lâu thì có kết quả?</strong></li><li><strong>Lệ phí thi VSTEP hiện nay là bao nhiêu?</strong></li><li><strong>Giải đáp các thắc mắc phổ biến về chứng chỉ VSTEP.</strong></li></ul><p><strong>1. Chứng Chỉ VSTEP Là Gì?</strong></p><p>Chứng chỉ VSTEP (Vietnamese Standardized Test of English Proficiency) là một kỳ thi đánh giá năng lực tiếng Anh theo tiêu chuẩn Việt Nam, được tổ chức bởi Bộ Giáo dục và Đào tạo (GD&amp;ĐT). VSTEP hiện đang được áp dụng rộng rãi trong các kỳ thi đánh giá trình độ tiếng Anh của học sinh, sinh viên, và người lao động tại Việt Nam.</p><p><strong>1.1. Cấu Trúc Bài Thi VSTEP</strong></p><p>Bài thi VSTEP được thiết kế với 4 kỹ năng: Nghe, Nói, Đọc, Viết. Tùy vào mục đích và đối tượng dự thi, bài thi VSTEP có hai dạng chính:</p><ul><li><strong>VSTEP Bậc 2 (A2)</strong>: Dành cho người học ở trình độ cơ bản, với các kỹ năng như Nghe hiểu, Nói, Đọc hiểu và Viết.</li><li><strong>VSTEP Bậc 3-5 (B1, B2, C1)</strong>: Dành cho các đối tượng từ trung cấp đến cao cấp, đánh giá toàn diện các kỹ năng tiếng Anh của thí sinh.</li></ul><p><strong>2. Thời Hạn Sử Dụng Của Chứng Chỉ VSTEP Là Bao Lâu?</strong></p><p>Chứng chỉ VSTEP có một điểm đặc biệt so với nhiều chứng chỉ khác là không ghi rõ thời hạn trên phôi bằng. Theo Công văn 3755/BGDĐT-GDTX, thời hạn của chứng chỉ VSTEP phụ thuộc vào yêu cầu của từng đơn vị, tổ chức sử dụng văn bằng. Điều này có nghĩa là chứng chỉ VSTEP có thể được xem là vô thời hạn, nhưng bạn cần kiểm tra kỹ với cơ quan hoặc tổ chức yêu cầu để biết liệu có cần thi lại hoặc bổ sung chứng chỉ mới sau một thời gian sử dụng.</p><p><strong>3. Thi Chứng Chỉ VSTEP Bao Lâu Có Kết Quả?</strong></p><p>Thời gian để nhận kết quả thi VSTEP thường dao động từ 3 đến 15 ngày sau khi thi, tùy thuộc vào đơn vị tổ chức. Kết quả sẽ được gửi qua email hoặc có thể tra cứu trực tiếp trên website của đơn vị tổ chức thi. Sau khi có kết quả, chứng chỉ sẽ được cấp trong vòng 5 đến 20 ngày.</p><p><strong>4. Lệ Phí Thi VSTEP Là Bao Nhiêu?</strong></p><p>Lệ phí thi VSTEP thường dao động từ 1.200.000 đến 1.800.000 VND, tùy thuộc vào địa điểm tổ chức thi. Dưới đây là mức lệ phí ước tính tại một số trường đại học lớn:</p><ul><li><strong>Đại học Hà Nội</strong>: 500.000 - 1.800.000 VND</li><li><strong>Đại học Sài Gòn</strong>: 1.200.000 - 1.800.000 VND</li><li><strong>Đại học Huế</strong>: 1.800.000 VND</li></ul><p><strong>5. Giải Đáp Các Thắc Mắc Phổ Biến Về Chứng Chỉ VSTEP</strong></p><p>Một số câu hỏi thường gặp về chứng chỉ VSTEP bao gồm:</p><ul><li>Có thể tham gia thi VSTEP bao nhiêu lần?</li><li>Hồ sơ đăng ký thi VSTEP gồm những gì?</li><li>Thi chứng chỉ VSTEP có khó không?</li></ul><p>Nếu bạn có bất kỳ thắc mắc nào, hãy để lại bình luận bên dưới, đội ngũ của chúng tôi tại Topgiaovien.vn luôn sẵn sàng giải đáp.</p><p><strong>Kết Luận</strong></p><ul><li>Chứng chỉ VSTEP là một công cụ quan trọng giúp bạn chứng minh năng lực tiếng Anh, mở ra nhiều cơ hội trong học tập và công việc. Bài viết này hy vọng đã giúp bạn giải đáp thắc mắc về thời hạn sử dụng của chứng chỉ VSTEP và cung cấp thêm nhiều thông tin hữu ích khác. Nếu bạn đang chuẩn bị thi VSTEP, hãy sẵn sàng lên kế hoạch và chinh phục kỳ thi này nhé!</li></ul>','post-1724644611329-841840084.jpg','2024-08-27 22:55:59.994','2024-08-27 22:55:59.994',NULL,1,'715s8c-2c45-zzcc54d40fd');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `routedetail`
--

DROP TABLE IF EXISTS `routedetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `routedetail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `subjectOfStudy` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `goalLearn` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `courseId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `routeDetail_courseId_fkey` (`courseId`),
  CONSTRAINT `routeDetail_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `course` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `routedetail`
--

LOCK TABLES `routedetail` WRITE;
/*!40000 ALTER TABLE `routedetail` DISABLE KEYS */;
INSERT INTO `routedetail` VALUES (1,'IELTS 3.0 - 5.0','100 buổi Đã có nền tảng tiếng Anh khá khá về từ vựng, ngữ pháp Có thường xuyên tiếp xúc với tiếng Anh trong môi trường học tập hoặc công việc ','Nghe hiểu các bài hội thoại và độc thoại với chủ đề thông dụng và một số ít chủ đề học thuật Đọc hiểu các bài đọc với chủ đề thông dụng và một số ít chủ đề học thuật Speaking part 1 trả lời chảy, part 2 nói được đến 2 phút đúng trọng tâm, part 3 trả lời được một số câu theo bố cục Có khả năng kiểm soát ngữ pháp tốt ở mức độ câu đơn và câu phức ghép với độ lỗi sai tầm 30% câu bị lỗi. Hạn chế lỗi sai chính tả (tối đa là 6 lỗi)',NULL),(2,'FOUDATION','0 - 3.0','Lộ trình 1 tháng \nFocus Grammar + vocab Basic Ielts + Listening + Speaking + Reading + Writing basic)					\n					',NULL),(3,'BASIC','3.0 - 5.5','Lộ trình 2 tháng\nTập trung chuyên sâu vào writing Viết thư và viết luận task 2, speaking học chủ điểm câu hỏi Forecast, nâng band ở speaking part 1.  Listening sẽ học để cải thiện kĩ năng, Reading đảm bảo được 18/40 câu đúng 					\n					',NULL),(4,'ADVANCE','5.5 - 6.5+','Lộ trình 2 tháng\nLớp này học theo sách chương trình của Cambridge, học giải đề cường độ cao. Lớp này đánh mạnh hai kỹ năng writing và speaking. Writting sẽ học cách build up idea sao cho mạch lac và viết luận chuyên sâu theo bố cục structure của BC. Speaking học forecast theo quý và ba kĩ năng còn lại học và luyện Bank Test					\n					',NULL),(5,'FOUNDATION 1','Những người mới bắt đầu học tiếng Anh, không có kiến thức căn bản.\nNgười bỏ học tiếng Anh quá lâu và không còn nhớ kiến thức','Nắm vững kiến thức ngữ pháp cơ bản và vận dụng vào hoàn cảnh thực tế, nhất là trong văn nói và văn viết\nNhớ và áp dụng các từ vựng cơ bản\nPhát âm chuẩn, rõ ràng, dễ nghe, tự tin giao tiếp',NULL),(7,'FOUNDATION 2','Những người có nền tảng tiếng Anh cơ bản (tương đương trình độ A1 theo khung CEFR)\nNgười bỏ học tiếng Anh lâu, nhớ được một phần kiến thức nhưng thiếu chính xác','Sử dụng ngữ pháp tốt, có thể viết đoạn văn ngắn với chủ đề thông dụng \nNghe hiểu, có thể nói và trả lời các câu hỏi theo chủ đề thông dụng\nĐọc hiểu đoạn văn ngắn\nPhát triển tư duy suy nghĩ bằng tiếng Anh',NULL),(8,'BASIC 3.0-5.0','Những người chưa tiếp xúc với IELTS hoặc đã tìm hiểu qua nhưng chưa biết cách làm kỹ năng viết\nHọc sinh – sinh viên – người đi làm đang chuẩn bị cho kỳ thi IELTS (tương đương trình độ A2 – B1 theo khung CEFR)','Mở rộng vốn từ vựng, đặc biệt là từ chuyên ngành và học thuật\nCó thể viết task 1 (tối thiểu 150 từ) và task 2 (tối thiểu 250 từ)\nNghe hiểu và nói các chủ đề thông dụng và một số chủ đề học thuật\nĐọc hiểu các bài đọc chủ đề thông dụng và một số chủ đề học thuật\nBiết cách phân loại thông tin và phát triển kỹ năng suy luận logic',NULL),(9,'ADVANCE ','Những đã tiếp xúc với IELTS, có định hướng nộp hồ sơ du học, tuyển thẳng đại học, ứng tuyển công việc\nHọc sinh – sinh viên – người đi làm đang chuẩn bị cho kỳ thi IELTS (tương đương trình độ B2 – C1 theo khung CEFR)','Nghe đúng tối thiểu 26/40 câu trong điều kiện phòng thi\nVốn từ vựng đa dạng, sử dụng cấu trúc đơn giản và phức tạp\nPhát âm khá tốt, có khả năng nói dài, không gây khó hiểu\nĐọc hiểu và đúng tối thiểu 27/40 câu trong điều kiện phòng thi\nViết bài có quan điểm, bố cục rõ ràng, liên kết, phát triển đầy đủ ý',NULL),(10,'IELdsadsa','100 buổi Đã có nền tảng tiếng Anh khá khá về từ vựng, ngữ pháp Có thường xuyên tiếp xúc với tiếng Anh trong môi trường học tập hoặc công việc ','Nghe hiểu các bài hội thoại và độc thoại với chủ đề thông dụng và một số ít chủ đề học thuật Đọc hiểu các bài đọc với chủ đề thông dụng và một số ít chủ đề học thuật Speaking part 1 trả lời chảy, part 2 nói được đến 2 phút đúng trọng tâm, part 3 trả lời được một số câu theo bố cục Có khả năng kiểm soát ngữ pháp tốt ở mức độ câu đơn và câu phức ghép với độ lỗi sai tầm 30% câu bị lỗi. Hạn chế lỗi sai chính tả (tối đa là 6 lỗi)',NULL),(11,'dsadsadsa','100 buổi Đã có nền tảng tiếng Anh khá khá về từ vựng, ngữ pháp Có thường xuyên tiếp xúc với tiếng Anh trong môi trường học tập hoặc công việc ','Nghe hiểu các bài hội thoại và độc thoại với chủ đề thông dụng và một số ít chủ đề học thuật Đọc hiểu các bài đọc với chủ đề thông dụng và một số ít chủ đề học thuật Speaking part 1 trả lời chảy, part 2 nói được đến 2 phút đúng trọng tâm, part 3 trả lời được một số câu theo bố cục Có khả năng kiểm soát ngữ pháp tốt ở mức độ câu đơn và câu phức ghép với độ lỗi sai tầm 30% câu bị lỗi. Hạn chế lỗi sai chính tả (tối đa là 6 lỗi)',NULL),(12,'dsadsadsa','100 buổi Đãsa','Nghdsaời được một số câu theo bố cục Có khả năng kiểm soát ngữ pháp tốt ở mức độ câu đơn và câu phức ghép với độ lỗi sai tầm 30% câu bị lỗi. Hạn chế lỗi sai chính tả (tối đa là 6 lỗi)',NULL),(15,'FOUNDATION 0-3.0','Lộ trình 24 buổi\nFocus Grammar + vocab Basic Ielts + Listening + Speaking + Reading + Writing basic)\n','Sử dụng ngữ pháp tốt, có thể viết đoạn văn ngắn với chủ đề thông dụng\nNghe hiểu, có thể nói và trả lời các câu hỏi theo chủ đề thông dụng\nĐọc hiểu đoạn văn ngắn\nPhát triển tư duy suy nghĩ bằng tiếng Anh',NULL),(16,'NEWBIE 3.0-5.0',' \n Lộ trình 24 buổi\nFocus làm các bài tập form nhỏ và những bài tập dạng ielts từng phần, học phương pháp kĩ năng và barem để học lên ielts sau này, học từ vựng và từ đồng nghĩa, học viết luận từng câu cũng như học speaking những topic đơn giản, Writing task 1 full 4 dạng','Mở rộng vốn từ vựng, đặc biệt là từ chuyên ngành và học thuật\nCó thể viết task 1 (tối thiểu 150 từ) và task 2 (tối thiểu 250 từ)\nNghe hiểu và nói các chủ đề thông dụng và một số chủ đề học thuật\nĐọc hiểu các bài đọc chủ đề thông dụng và một số chủ đề học thuật\nBiết cách phân loại thông tin và phát triển kỹ năng suy luận logic',NULL),(17,'IELTS 3.0 - 5.0','100 buổi Đã có nền tảng tiếng Anh khá khá về từ vựng, ngữ pháp Có thường xuyên tiếp xúc với tiếng Anh trong môi trường học tập hoặc công việc ','Nghe hiểu các bài hội thoại và độc thoại với chủ đề thông dụng và một số ít chủ đề học thuật Đọc hiểu các bài đọc với chủ đề thông dụng và một số ít chủ đề học thuật Speaking part 1 trả lời chảy, part 2 nói được đến 2 phút đúng trọng tâm, part 3 trả lời được một số câu theo bố cục Có khả năng kiểm soát ngữ pháp tốt ở mức độ câu đơn và câu phức ghép với độ lỗi sai tầm 30% câu bị lỗi. Hạn chế lỗi sai chính tả (tối đa là 6 lỗi)',NULL),(18,'IELTS 3.0 - 5.0','100 buổi Đã có nền tảng tiếng Anh khá khá về từ vựng, ngữ pháp Có thường xuyên tiếp xúc với tiếng Anh trong môi trường học tập hoặc công việc ','Nghe hiểu các bài hội thoại và độc thoại với chủ đề thông dụng và một số ít chủ đề học thuật Đọc hiểu các bài đọc với chủ đề thông dụng và một số ít chủ đề học thuật Speaking part 1 trả lời chảy, part 2 nói được đến 2 phút đúng trọng tâm, part 3 trả lời được một số câu theo bố cục Có khả năng kiểm soát ngữ pháp tốt ở mức độ câu đơn và câu phức ghép với độ lỗi sai tầm 30% câu bị lỗi. Hạn chế lỗi sai chính tả (tối đa là 6 lỗi)',NULL),(20,'GRADUATE ','Những người có đầu vào IELTS 5.5+\nĐã ôn luyện IELTS ở level thấp hơn hoặc tương đương 6.0+ nhưng thi chưa đạt kết quả','Nghe hiểu các chủ đề thông dụng và học thuật, đạt tối thiểu 30/40 câu đúng trong điều kiện phòng thi\nỨng dụng từ vựng, ngữ pháp nâng cao để trả lời câu hỏi\nĐọc hiểu các bài đọc với chủ đề thông dụng và học thuật, đạt tối thiểu 30/40 câu đúng trong điều kiện phòng thi\nSử dụng ngữ pháp cực tốt, phát triển ý có độ sâu, thuyết phục',NULL),(21,'FOUDATION 1','Những người mới bắt đầu học tiếng Anh, không có kiến thức căn bản.\nNgười bỏ học tiếng Anh quá lâu và không còn nhớ kiến thức','Nắm vững kiến thức ngữ pháp cơ bản và vận dụng vào hoàn cảnh thực tế, nhất là trong văn nói và văn viết\nNhớ và áp dụng các từ vựng cơ bản\nPhát âm chuẩn, rõ ràng, dễ nghe, tự tin giao tiếp',48),(22,'FOUNDATION 2','Những người có nền tảng tiếng Anh cơ bản (tương đương trình độ A1 theo khung CEFR)\nNgười bỏ học tiếng Anh lâu, nhớ được một phần kiến thức nhưng thiếu chính xác','Sử dụng ngữ pháp tốt, có thể viết đoạn văn ngắn với chủ đề thông dụng\nNghe hiểu, có thể nói và trả lời các câu hỏi theo chủ đề thông dụng\nĐọc hiểu đoạn văn ngắn\nPhát triển tư duy suy nghĩ bằng tiếng Anh',48),(23,'TOEIC 400-650+','Những người chưa biết gì về cấu trúc bài thi TOEIC \nTrình độ tiếng Anh cơ bản tương đương 300+ TOEIC trở lên, cần bồi đắp từ vựng, ngữ pháp','Làm quen và phát triển kỹ năng làm bài theo trọng tâm từng phần\nBổ sung từ vựng, sử dụng ngữ pháp tốt, có thể viết đoạn văn ngắn với chủ đề thông dụng \nNghe hiểu có thể nói và trả lời các câu hỏi theo chủ đề thông dụng\nĐọc hiểu đoạn văn ngắn',48),(24,'IELTS 3.0 - 5.0','100 buổi Đã có nền tảng tiếng Anh khá khá về từ vựng, ngữ pháp Có thường xuyên tiếp xúc với tiếng Anh trong môi trường học tập hoặc công việc ','Nghe hiểu các bài hội thoại và độc thoại với chủ đề thông dụng và một số ít chủ đề học thuật Đọc hiểu các bài đọc với chủ đề thông dụng và một số ít chủ đề học thuật Speaking part 1 trả lời chảy, part 2 nói được đến 2 phút đúng trọng tâm, part 3 trả lời được một số câu theo bố cục Có khả năng kiểm soát ngữ pháp tốt ở mức độ câu đơn và câu phức ghép với độ lỗi sai tầm 30% câu bị lỗi. Hạn chế lỗi sai chính tả (tối đa là 6 lỗi)',NULL),(25,'IELTS 3.0 - 5.0','100 buổi Đã có nền tảng tiếng Anh khá khá về từ vựng, ngữ pháp Có thường xuyên tiếp xúc với tiếng Anh trong môi trường học tập hoặc công việc ','Nghe hiểu các bài hội thoại và độc thoại với chủ đề thông dụng và một số ít chủ đề học thuật Đọc hiểu các bài đọc với chủ đề thông dụng và một số ít chủ đề học thuật Speaking part 1 trả lời chảy, part 2 nói được đến 2 phút đúng trọng tâm, part 3 trả lời được một số câu theo bố cục Có khả năng kiểm soát ngữ pháp tốt ở mức độ câu đơn và câu phức ghép với độ lỗi sai tầm 30% câu bị lỗi. Hạn chế lỗi sai chính tả (tối đa là 6 lỗi)',NULL),(26,'IELTS 3.0 - 5.0','100 buổi Đã có nền tảng tiếng Anh khá khá về từ vựng, ngữ pháp Có thường xuyên tiếp xúc với tiếng Anh trong môi trường học tập hoặc công việc ','Nghe hiểu các bài hội thoại và độc thoại với chủ đề thông dụng và một số ít chủ đề học thuật Đọc hiểu các bài đọc với chủ đề thông dụng và một số ít chủ đề học thuật Speaking part 1 trả lời chảy, part 2 nói được đến 2 phút đúng trọng tâm, part 3 trả lời được một số câu theo bố cục Có khả năng kiểm soát ngữ pháp tốt ở mức độ câu đơn và câu phức ghép với độ lỗi sai tầm 30% câu bị lỗi. Hạn chế lỗi sai chính tả (tối đa là 6 lỗi)',NULL),(27,'IELTS 3.0 - 5.0','100 buổi Đã có nền tảng tiếng Anh khá khá về từ vựng, ngữ pháp Có thường xuyên tiếp xúc với tiếng Anh trong môi trường học tập hoặc công việc ','Nghe hiểu các bài hội thoại và độc thoại với chủ đề thông dụng và một số ít chủ đề học thuật Đọc hiểu các bài đọc với chủ đề thông dụng và một số ít chủ đề học thuật Speaking part 1 trả lời chảy, part 2 nói được đến 2 phút đúng trọng tâm, part 3 trả lời được một số câu theo bố cục Có khả năng kiểm soát ngữ pháp tốt ở mức độ câu đơn và câu phức ghép với độ lỗi sai tầm 30% câu bị lỗi. Hạn chế lỗi sai chính tả (tối đa là 6 lỗi)',NULL),(28,'IELTS 3.0 - 5.0','100 buổi Đã có nền tảng tiếng Anh khá khá về từ vựng, ngữ pháp Có thường xuyên tiếp xúc với tiếng Anh trong môi trường học tập hoặc công việc ','Nghe hiểu các bài hội thoại và độc thoại với chủ đề thông dụng và một số ít chủ đề học thuật Đọc hiểu các bài đọc với chủ đề thông dụng và một số ít chủ đề học thuật Speaking part 1 trả lời chảy, part 2 nói được đến 2 phút đúng trọng tâm, part 3 trả lời được một số câu theo bố cục Có khả năng kiểm soát ngữ pháp tốt ở mức độ câu đơn và câu phức ghép với độ lỗi sai tầm 30% câu bị lỗi. Hạn chế lỗi sai chính tả (tối đa là 6 lỗi)',NULL),(29,'IELTS 3.0 - 5.0','100 buổi Đã có nền tảng tiếng Anh khá khá về từ vựng, ngữ pháp Có thường xuyên tiếp xúc với tiếng Anh trong môi trường học tập hoặc công việc ','Nghe hiểu các bài hội thoại và độc thoại với chủ đề thông dụng và một số ít chủ đề học thuật Đọc hiểu các bài đọc với chủ đề thông dụng và một số ít chủ đề học thuật Speaking part 1 trả lời chảy, part 2 nói được đến 2 phút đúng trọng tâm, part 3 trả lời được một số câu theo bố cục Có khả năng kiểm soát ngữ pháp tốt ở mức độ câu đơn và câu phức ghép với độ lỗi sai tầm 30% câu bị lỗi. Hạn chế lỗi sai chính tả (tối đa là 6 lỗi)',NULL),(30,'IELTS 3.0 - 5.0','100 buổi Đã có nền tảng tiếng Anh khá khá về từ vựng, ngữ pháp Có thường xuyên tiếp xúc với tiếng Anh trong môi trường học tập hoặc công việc ','Nghe hiểu các bài hội thoại và độc thoại với chủ đề thông dụng và một số ít chủ đề học thuật Đọc hiểu các bài đọc với chủ đề thông dụng và một số ít chủ đề học thuật Speaking part 1 trả lời chảy, part 2 nói được đến 2 phút đúng trọng tâm, part 3 trả lời được một số câu theo bố cục Có khả năng kiểm soát ngữ pháp tốt ở mức độ câu đơn và câu phức ghép với độ lỗi sai tầm 30% câu bị lỗi. Hạn chế lỗi sai chính tả (tối đa là 6 lỗi)',NULL),(31,'IELTS 3.0 - 5.0','100 buổi Đã có nền tảng tiếng Anh khá khá về từ vựng, ngữ pháp Có thường xuyên tiếp xúc với tiếng Anh trong môi trường học tập hoặc công việc ','Nghe hiểu các bài hội thoại và độc thoại với chủ đề thông dụng và một số ít chủ đề học thuật Đọc hiểu các bài đọc với chủ đề thông dụng và một số ít chủ đề học thuật Speaking part 1 trả lời chảy, part 2 nói được đến 2 phút đúng trọng tâm, part 3 trả lời được một số câu theo bố cục Có khả năng kiểm soát ngữ pháp tốt ở mức độ câu đơn và câu phức ghép với độ lỗi sai tầm 30% câu bị lỗi. Hạn chế lỗi sai chính tả (tối đa là 6 lỗi)',NULL),(32,'IELTS 3.0 - 5.0','100 buổi Đã có nền tảng tiếng Anh khá khá về từ vựng, ngữ pháp Có thường xuyên tiếp xúc với tiếng Anh trong môi trường học tập hoặc công việc ','Nghe hiểu các bài hội thoại và độc thoại với chủ đề thông dụng và một số ít chủ đề học thuật Đọc hiểu các bài đọc với chủ đề thông dụng và một số ít chủ đề học thuật Speaking part 1 trả lời chảy, part 2 nói được đến 2 phút đúng trọng tâm, part 3 trả lời được một số câu theo bố cục Có khả năng kiểm soát ngữ pháp tốt ở mức độ câu đơn và câu phức ghép với độ lỗi sai tầm 30% câu bị lỗi. Hạn chế lỗi sai chính tả (tối đa là 6 lỗi)',NULL),(33,'IELTS 3.0 - 5.0','100 buổi Đã có nền tảng tiếng Anh khá khá về từ vựng, ngữ pháp Có thường xuyên tiếp xúc với tiếng Anh trong môi trường học tập hoặc công việc ','Nghe hiểu các bài hội thoại và độc thoại với chủ đề thông dụng và một số ít chủ đề học thuật Đọc hiểu các bài đọc với chủ đề thông dụng và một số ít chủ đề học thuật Speaking part 1 trả lời chảy, part 2 nói được đến 2 phút đúng trọng tâm, part 3 trả lời được một số câu theo bố cục Có khả năng kiểm soát ngữ pháp tốt ở mức độ câu đơn và câu phức ghép với độ lỗi sai tầm 30% câu bị lỗi. Hạn chế lỗi sai chính tả (tối đa là 6 lỗi)',NULL),(34,'FOUNDATION 1','Những người mới bắt đầu học tiếng Anh, không có kiến thức căn bản.\nNgười bỏ học tiếng Anh quá lâu và không còn nhớ kiến thức','Nắm vững kiến thức ngữ pháp cơ bản và vận dụng vào hoàn cảnh thực tế, nhất là trong văn nói và văn viết\nNhớ và áp dụng các từ vựng cơ bản\nPhát âm chuẩn, rõ ràng, dễ nghe, tự tin giao tiếp',58),(35,'FOUNDATION 2','Những người có nền tảng tiếng Anh cơ bản (tương đương trình độ A1 theo khung CEFR)\nNgười bỏ học tiếng Anh lâu, nhớ được một phần kiến thức nhưng thiếu chính xác','Sử dụng ngữ pháp tốt, có thể viết đoạn văn ngắn với chủ đề thông dụng \nNghe hiểu, có thể nói và trả lời các câu hỏi theo chủ đề thông dụng\nĐọc hiểu đoạn văn ngắn\nPhát triển tư duy suy nghĩ bằng tiếng Anh',58),(36,'NEWBIE 3.0-5.0','Những người chưa tiếp xúc với IELTS hoặc đã tìm hiểu qua nhưng chưa biết cách làm kỹ năng viết\n Học sinh – sinh viên – người đi làm đang chuẩn bị cho kỳ thi IELTS (tương đương trình độ A2 – B1 theo khung CEFR)','Mở rộng vốn từ vựng, đặc biệt là từ chuyên ngành và học thuật\nCó thể viết Task 1 (tối thiểu 150 từ) và Task 2 (tối thiểu 250 từ) \nNghe hiểu và nói các chủ đề thông dụng và một số chủ đề học thuật\nĐọc hiểu các bài đọc chủ đề thông dụng và một số chủ đề học thuật\nBiết cách phân loại thông tin và phát triển kỹ năng suy luận logic',58),(37,'ADVANCE 5.0-6.0','Những đã tiếp xúc với IELTS, có định hướng nộp hồ sơ du học, tuyển thẳng đại học, ứng tuyển công việc\n Học sinh – sinh viên – người đi làm đang chuẩn bị cho kỳ thi IELTS (tương đương trình độ B2 – C1 theo khung CEFR)','Nghe đúng tối thiểu 26/40 câu trong điều kiện phòng thi\nVốn từ vựng đa dạng, sử dụng cấu trúc đơn giản và phức tạp\nPhát âm khá tốt, có khả năng nói dài, không gây khó hiểu\nĐọc hiểu và đúng tối thiểu 27/40 câu trong điều kiện phòng thi\nViết bài có quan điểm, bố cục rõ ràng, liên kết, phát triển đầy đủ ý ',58),(38,'GRADUATE 6.0-7.5','Những người có đầu vào IELTS 5.5+\nĐã ôn luyện IELTS ở level thấp hơn hoặc tương đương 6.0+ nhưng thi chưa đạt kết quả\n','Nghe hiểu các chủ đề thông dụng và học thuật, đạt tối thiểu 30/40 câu đúng trong điều kiện phòng thi\nỨng dụng từ vựng, ngữ pháp nâng cao để trả lời câu hỏi\nĐọc hiểu các bài đọc với chủ đề thông dụng và học thuật, đạt tối thiểu 30/40 câu đúng trong điều kiện phòng thi\nSử dụng ngữ pháp cực tốt, phát triển ý có độ sâu, thuyết phục',58),(39,'0 - HSK2','Người mới bắt đầu tìm hiểu tiếng Trung.\nNgười chưa từng học tiếng Trung.\n','Nắm nhanh & vững chắc kỹ năng căn bản: từ vựng, ngữ pháp, phát âm, viết chữ...\nXây dựng nền tảng vững vàng ngay từ đầu.\nHọc theo giáo trình được biên soạn và cập nhật mới nhất.\nNắm được 500 từ vựng.\nBiết giao tiếp ứng dụng sơ cấp.\nTrình độ HSK2.',61),(40,'HSK2-HSK3','Người đã hoàn thành xong trình độ HSK2 mọi giáo trình & muốn nâng cao trình độ lên HSK3.','Rèn luyện & nâng cao 4 kỹ năng: Nghe, Nói, Đọc, Viết. Tập trung phản xạ giao tiếp, giúp khả năng giao tiếp được linh hoạt và nâng cao hơn. \nHọc theo giáo trình biên soạn và giáo trình chuẩn HSK.\nNắm được 700 từ vựng.\nBiết giao tiếp ứng dụng sơ cấp.\nTrình độ HSK3.',61),(41,'HSK3-HSK4','Người đã hoàn thành xong trình độ HSK3 mọi giáo trình & muốn nâng cao trình độ lên HSK4.','Rèn luyện & nâng cao 4 kỹ năng chuyên sâu: Nghe, Nói, Đọc, Viết. \nCó thể thi lấy chứng chỉ HSK4 phục vụ việc xin học bổng, du học, làm việc trình độ Thạc Sỹ. \nHọc theo giáo trình chuẩn HSK. \nNắm được 1200 từ vựng. \nTrình độ HSK4.',61),(42,'HSK4-HSK5','Người đã hoàn thành xong trình độ HSK4 mọi giáo trình & muốn nâng cao trình độ lên HSK5.','Trình độ cao cấp. \nLưu loát khi sử dụng ngôn ngữ trong công việc và giao tiếp. \nCó thể thi lấy chứng chỉ HSK5 phục vụ việc xin học bổng, du học, làm việc trình độ Thạc Sỹ. \nNắm được 2500 từ vựng.\nTrình độ HSK5.',61),(43,'HSK5-HSK6','Người đã hoàn thành xong trình độ HSK5 mọi giáo trình & muốn nâng cao trình độ lên HSK6.','HSK 6 là cấp độ khó nhất trong hệ thống 6 cấp của kỳ thi năng lực Hán Ngữ. Trình độ này tương được với chuẩn đầu ra bằng Tiến sĩ của các trường Đại học ở Trung Quốc. Nếu bạn đạt cấp độ HSK 6, khả năng giao tiếp và sử dụng thuật ngữ của bạn gần như tương đương với người Trung Quốc.',61),(44,'FOUNDATION','Những người mới bắt đầu học tiếng Anh, không có kiến thức căn bản\nNhững người bỏ học tiếng Anh lâu, nhớ được 1 phần kiến thức','Lộ trình 24 buổi đạt mục tiêu tương đương trình độ A2 – B1 theo khung CEFR\nFocus Grammar + Vocab Basic IELTS + Listening + Speaking + Reading + Writing Basic\nSử dụng ngữ pháp tốt, có thể viết đoạn văn ngắn với chủ đề thông dụng\nNghe hiểu, có thể nói và trả lời các câu hỏi theo chủ đề thông dụng\nĐọc hiểu đoạn văn ngắn\nPhát triển tư duy suy nghĩ bằng tiếng Anh',59),(45,'NEWBIE 3.0 - 5.0','Những người chưa tiếp xúc với IELTS hoặc đã tìm hiểu qua nhưng chưa biết cách làm kỹ năng viết\nHọc sinh – sinh viên – người đi làm đang chuẩn bị cho kỳ thi IELTS (tương đương trình độ A2 – B1 theo khung CEFR)','Lộ trình 24 buổi focus làm các bài tập form nhỏ và những bài tập dạng IELTS từng phần, học phương pháp kĩ năng và Barem để học lên IELTS sau này, học từ vựng và từ đồng nghĩa, học viết luận từng câu cũng như học nói Speaking những Topic đơn giản, Writing Task 1 full 4 dạng		\nCó thể viết Task 1 (tối thiểu 150 từ) và Task 2 (tối thiểu 250 từ)\nNghe hiểu, đọc hiểu và nói các chủ đề thông dụng và một số chủ đề học thuật\nBiết cách phân loại thông tin và phát triển kỹ năng suy luận logic.		\n					',59),(46,'ADVANCE 5.0 - 6.0','Những đã tiếp xúc với IELTS, có định hướng nộp hồ sơ du học, tuyển thẳng đại học, ứng tuyển công việc\nHọc sinh – sinh viên – người đi làm đang chuẩn bị cho kỳ thi IELTS (tương đương trình độ B2 – C1 theo khung CEFR)','Lộ trình 24 buổi học theo sách chương trình của Cambridge, học giải đề cường độ cao. Lớp này đánh mạnh hai kỹ năng writing và speaking. Writting sẽ học cách build up idea sao cho mạch lac và viết luận chuyên sâu theo bố cục structure của BC. Speaking học forecast theo quý và ba kĩ năng còn lại học và luyện Bank Test		\nNghe đúng tối thiểu 26/40 câu trong điều kiện phòng thi\nĐọc hiểu và đúng tối thiểu 27/40 câu trong điều kiện phòng thi\nViết bài có quan điểm, bố cục rõ ràng, liên kết, phát triển đầy đủ ý.		\n					',59),(47,'GRADUATE 6.0 - 7.5','Những người có đầu vào IELTS 5.5+\nĐã ôn luyện IELTS ở level thấp hơn hoặc tương đương 6.0+ nhưng thi chưa đạt kết quả','Lộ trình 24 buổi sẽ học và trao dồi từ vựng band cao, Idioms và học toàn diện kĩ năng Writing đa khía cạnh Topics, học Brainstorm Writing Task 2 chuyên sâu và nâng cấp kĩ năng trong 2 Skills Listening + Reading 8.0+\nNghe hiểu, đọc hiểu các chủ đề thông dụng và học thuật, đạt tối thiểu 30/40 câu đúng trong điều kiện phòng thi\nỨng dụng từ vựng, ngữ pháp nâng cao để trả lời câu hỏi, phát triển ý có độ sâu.			\n			\n					',59),(48,'FOUNDATION','Những người mới bắt đầu học tiếng Anh, không có kiến thức căn bản\nNhững người bỏ học tiếng Anh lâu, nhớ được 1 phần kiến thức','Lộ trình 12 buổi\nFocus Grammar + Vocab Basic IELTS + Listening + Speaking + Reading + Writing Basic\n					',60),(49,'BASIC 3.0 - 5.5+','Những người chưa tiếp xúc với IELTS hoặc đã tìm hiểu qua nhưng chưa biết cách làm kỹ năng viết\nHọc sinh – sinh viên – người đi làm đang chuẩn bị cho kỳ thi IELTS (tương đương trình độ A2 – B1 theo khung CEFR)','Lộ trình 24 buổi, tập trung chuyên sâu vào Writing viết thư và viết luận Task 2, Speaking học chủ điểm câu hỏi Forecast, nâng Band ở Speaking Part 1.  Listening học để cải thiện kĩ năng, Reading đảm bảo được 18/40 câu đúng.			\n					',60),(50,'ADVANCE 5.5 - 6.5+','Những đã tiếp xúc với IELTS, có định hướng nộp hồ sơ du học, tuyển thẳng đại học, ứng tuyển công việc\nHọc sinh – sinh viên – người đi làm đang chuẩn bị cho kỳ thi IELTS (tương đương trình độ B2 – C1 theo khung CEFR)','Lộ trình 24 buổi học theo sách chương trình của Cambridge, học giải đề cường độ cao. Lớp này đánh mạnh hai kỹ năng Writing và Speaking. Writting sẽ học cách build up idea sao cho mạch lạc và viết luận chuyên sâu theo bố cục structure của BC. Speaking học Forecast theo quý và ba kĩ năng còn lại học và luyện Bank Test.					\n					',60),(52,'GIAO TIẾP SƠ CẤP','Những người mới bắt đầu học tiếng Anh, không có kiến thức căn bản.\nNgười bỏ học tiếng Anh quá lâu và không còn nhớ kiến thức','Nắm vững kiến thức ngữ pháp cơ bản và vận dụng vào hoàn cảnh thực tế,\nNhớ và áp dụng các từ vựng cơ bản\nPhát âm chuẩn, rõ ràng, dễ nghe, tự tin giao tiếp',53),(53,'GIAO TIẾP TRUNG CẤP','Những người có nền tảng tiếng Anh cơ bản (tương đương trình đọ A1 theo khung CEFR) \nGặp khó khăn, phản xạ kém khi giao tiếp bằng tiếng Anh','Có thể giao tiếp bằng tiếng Anh\nCải thiện phát âm, kỹ năng nói\nPhản xạ tốt khi giao tiếp',53),(54,'GIAO TIẾP TĂNG CƯỜNG','Cho người có nền tảng tiếng Anh ổn \nCó thể giao tiếp bằng tiếng Anh nhưng chưa lưu loát, thiếu tự nhiên.','Phát âm chuẩn\nGiao tiếp lưu loát tự nhiên, có ngữ điệu, nhấn nhá\nTư duy tiếng Anh linh hoạt, phản xạ nhanh',53),(55,'GIAO TIẾP SƠ CẤP','Những người mới bắt đầu học tiếng Anh, không có kiến thức căn bản.\nNgười bỏ học tiếng Anh quá lâu và không còn nhớ kiến thức','Có lộ trình riêng cá nhân hóa riêng biệt và chủ động được thời gian\nDạy theo giáo trình bài bản dựa trên chương trình chuẩn của Cambridge và cam kết chỉ cần học 2-3 khoá sẽ giao tiếp nhanh nhạy, phản xạ bén, có vốn từ vựng dư dả\nPhát âm chuẩn, rõ ràng, dễ nghe, tự tin giao tiếp',55),(56,'GIAO TIẾP TRUNG CẤP','Những người có nền tảng tiếng Anh cơ bản (tương đương trình đọ A1 theo khung CEFR)\nGặp khó khăn, phản xạ kém khi giao tiếp bằng tiếng Anh','Có lộ trình riêng cá nhân hóa riêng biệt và chủ động được thời gian\nDạy theo giáo trình bài bản dựa trên chương trình chuẩn của Cambridge và cam kết chỉ cần học 2-3 khoá sẽ giao tiếp nhanh nhạy, phản xạ bén, có vốn từ vựng phong phú \nPhản xạ tốt khi giao tiếp',55),(57,'GIAO TIẾP TĂNG CƯỜNG','Cho người có nền tảng tiếng Anh ổn\nCó thể giao tiếp bằng tiếng Anh nhưng chưa lưu loát, thiếu tự nhiên.','Có lộ trình riêng cá nhân hóa riêng biệt và chủ động được thời gian\nDạy theo giáo trình bài bản dựa trên chương trình chuẩn của Cambridge và cam kết chỉ cần học 2-3 khoá sẽ giao tiếp nhanh nhạy, phản xạ bén, có vốn từ vựng phong phú \nTư duy tiếng Anh linh hoạt, phản xạ nhanh',55),(58,'0 - HSK2','Người mới bắt đầu tìm hiểu tiếng Trung và có nhu cầu riêng về thời gian và chủ đề, lĩnh vực quan tâm.\n','Nắm nhanh & vững chắc kỹ năng căn bản: từ vựng, ngữ pháp, phát âm, viết chữ...\nXây dựng nền tảng vững vàng ngay từ đầu.\nHọc theo giáo trình được biên soạn và cập nhật mới nhất.\nNắm được 500 từ vựng.\nBiết giao tiếp ứng dụng sơ cấp.\nTrình độ HSK2.',62),(59,'TOEIC 600-800+','Trình độ tiếng Anh cơ bản tương đương 500+ TOEIC trở lên, cần nâng cao từ vựng\nThường xuyên mắc bẫy khi làm đề hoặc mắc 1 bẫy lặp đi lặp lại','Nắm được kỹ năng làm bài và mẹo để chinh phục điểm cao\nBổ sung từ vựng, ngữ pháp nâng cao, phát triển ý có độ sâu, thuyết phục\nNghe hiểu thông qua các đoạn hội thoại, thông báo có độ dài và độ phức tạp tăng dần\nPhát âm, ngữ điệu tốt, tự tin khi giao tiếp\nNắm được phương pháp đọc hiểu cũng như các kỹ năng làm bài cần thiết',48),(60,'HSK2 - HSK3','Người đã có trình độ HSK2 và có nhu cầu riêng về thời gian và chủ đề, lĩnh vực quan tâm.\n','Rèn luyện & nâng cao 4 kỹ năng: Nghe, Nói, Đọc, Viết. Tập trung phản xạ giao tiếp, giúp khả năng giao tiếp được linh hoạt và nâng cao hơn.\nHọc theo giáo trình biên soạn và giáo trình chuẩn HSK.\nNắm được 700 từ vựng.\nBiết giao tiếp ứng dụng sơ cấp.\nTrình độ HSK3.',62),(61,'HSK3 - HSK4','Người đã có trình độ HSK3 và có nhu cầu riêng về thời gian và chủ đề, lĩnh vực quan tâm.\n','Rèn luyện & nâng cao 4 kỹ năng chuyên sâu: Nghe, Nói, Đọc, Viết.\nCó thể thi lấy chứng chỉ HSK4 phục vụ việc xin học bổng, du học, làm việc trình độ Thạc sĩ.\nHọc theo giáo trình chuẩn HSK.\nNắm được 1200 từ vựng.\nTrình độ HSK4.',62),(62,'HSK4 - HSK5','Người đã có trình độ HSK4 và có nhu cầu riêng về thời gian và chủ đề, lĩnh vực quan tâm.\n','Trình độ cao cấp.\nLưu loát khi sử dụng ngôn ngữ trong công việc và giao tiếp.\nCó thể thi lấy chứng chỉ HSK5 phục vụ việc xin học bổng, du học, làm việc trình độ Thạc sĩ.\nNắm được 2500 từ vựng.\nTrình độ HSK5.\n',62),(63,'FOUNDATION','Những người mới bắt đầu học tiếng Anh, không có kiến thức căn bản.\nNgười bỏ học tiếng Anh quá lâu và không còn nhớ kiến thức','Lộ trình 36 buổi focus Grammar + vocab Basic TOEIC + Listening + Speaking chủ điểm giao tiếp 100% bằng tiếng anh  + Reading			\nSử dụng ngữ pháp tốt, có thể viết đoạn văn ngắn với chủ đề thông dụng\nNghe hiểu, có thể nói và trả lời các câu hỏi theo chủ đề thông dụng\nĐọc hiểu đoạn văn ngắn\nPhát triển tư duy suy nghĩ bằng tiếng Anh		\n					',50),(64,'TOEIC 400 - 650+','Những người chưa biết gì về cấu trúc bài thi TOEIC \nTrình độ tiếng Anh cơ bản tương đương 300+ TOEIC trở lên, cần bồi đắp từ vựng, ngữ pháp','Tăng tốc luyện tập với format theo từng Part của bài thi \nGiải thích đáp án chi tiết cho từng câu hỏi, giúp thí sinh luyện đề hiệu quả\nCung cấp hơn 300 từ vựng hay gặp nhất theo từng Part phù hợp với trình độ\nĐánh giá được năng lực và mức điểm dự kiến thông qua các bài kiểm tra sử dụng học liệu chính thống từ ETS, từ đó lên kế hoạch lấp đầy \"lỗ hổng\" kiến thức',50),(65,'TOEIC 600 - 800+','Trình độ tiếng Anh cơ bản tương đương 500+ TOEIC trở lên, cần nâng cao từ vựng\nThường xuyên mắc bẫy khi làm đề hoặc mắc 1 bẫy lặp đi lặp lại','Luyện đề thi thử độc quyền từ ETS, độ khó tương đương thi thật\nLàm quen với giọng đọc, tốc độ đọc y hệt bài thi thật\nBổ sung từ vựng, ngữ pháp nâng cao, phát triển ý có độ sâu, thuyết phục\nDự đoán gần chính xác mức điểm của thí sinh\nRèn luyện áp lực phòng thi, vững tâm lí trước khi thi chính thức',50),(66,'HSK5 - HSK6','Người đã có trình độ HSK5 và có nhu cầu riêng về thời gian và chủ đề, lĩnh vực quan tâm.\n','HSK 6 là cấp độ khó nhất trong hệ thống 6 cấp của kỳ thi năng lực Hán Ngữ. Trình độ này tương được với chuẩn đầu ra bằng Tiến sĩ của các trường Đại học ở Trung Quốc. Nếu bạn đạt cấp độ HSK 6, khả năng giao tiếp và sử dụng thuật ngữ của bạn gần như tương đương với người Trung Quốc.',62),(67,'0 - HSK2','Người muốn lấy chứng chỉ HSK2 phục vụ cho nhu cầu học tập, công việc & đời sống.','',63),(68,'HSK3','Người muốn lấy chứng chỉ HSK3 phục vụ cho nhu cầu học tập, công việc & đời sống.','',63),(69,'HSK4','Người muốn lấy chứng chỉ HSK4 phục vụ cho nhu cầu học tập, công việc & đời sống.','',63),(70,'HSK5','Người muốn lấy chứng chỉ HSK5 phục vụ cho nhu cầu học tập, công việc & đời sống.','',63),(71,'HSK6','Người muốn lấy chứng chỉ HSK6 phục vụ cho nhu cầu học tập, công việc & đời sống.','',63);
/*!40000 ALTER TABLE `routedetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `share`
--

DROP TABLE IF EXISTS `share`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `share` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fullName` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `teacherId` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `share_teacherId_fkey` (`teacherId`),
  CONSTRAINT `share_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `teacher` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `share`
--

LOCK TABLES `share` WRITE;
/*!40000 ALTER TABLE `share` DISABLE KEYS */;
INSERT INTO `share` VALUES (1,'Hi everyone, mình là Tâm . Mình đã tốt nghiệp Đại học và hiện đang đi làm. Vừa qua, mình đã hoàn thành khóa học 50 buổi tại trung tâm IELTS Topgiaovien và đạt được kết quả Overall 7.0. Đây là thành quả mà mình rất tự hào. Khi quyết định học IELTS, mình muốn nâng cao khả năng tiếng Anh để hỗ trợ cho công việc hiện tại và các mục tiêu trong tương lai. Mình đã tìm hiểu rất kỹ trước khi chọn Topgiaovien, và điều mình hài lòng nhất là sự chuyên nghiệp và tận tâm của đội ngũ giáo viên, đặc biệt là cô Uyên.','imageUser-1724640568619-981556198.jpg','Tam Nguyen','share-1724640568614-849731064.jpg','https://www.facebook.com/share/p/CVDhWQARsNzieLLn/',1,'2024-08-26 02:49:28.633','2024-08-26 02:49:28.633',NULL),(2,'\"Trải qua những buổi học với cô Uyên tại Topgiaovien, mình không chỉ nắm vững cách làm bài thi IELTS mà còn nhận được sự động viên tinh thần lớn lao. Cô Uyên luôn biết cách tạo ra môi trường học tập vừa nghiêm túc vừa thoải mái, giúp mình tự tin hơn trong việc sử dụng tiếng Anh. Những lời khuyên quý giá từ cô không chỉ giúp mình cải thiện kỹ năng Speaking mà còn nâng cao khả năng phản xạ ngôn ngữ. Nhờ sự hướng dẫn tận tình của cô, mình đã vượt qua kỳ thi với điểm Speaking 7.0, một kết quả mà trước đây mình chưa bao giờ dám mơ tới.\"','imageUser-1724640775190-963437691.jpg','Nguyễn Thị Hoa','share-1724640775187-75921797.jpg','https://www.facebook.com/share/p/dnxk4AniMUQkTAhV/',1,'2024-08-26 02:52:55.195','2024-08-26 02:52:55.195',NULL),(3,'Mình là Trúc Anh, sinh viên năm cuối đang chuẩn bị ra trường nên cần bằng IELTS để xét tốt nghiệp. Lúc trước bạn mình có học ở đây và khen nhiều nên mình quyết định học thử. Ở Topgiaovien mình có thể lựa chọn giáo viên mình thích và phù hợp với bản thân để theo học. Học phí cũng phải chăng, phù hợp với điều kiện của mình. Và mình vô cùng hài lòng khi quyết định theo học tại đây. Giáo viên ở đây rất nhiệt tình, lúc nào cũng quan tâm hỏi han xem mình có hiểu bài không, nếu không hiểu thì mình sẽ được giảng lại luôn, bài làm của mình đều được giáo viên chấm và sửa rất chi tiết. Nhờ vậy mà sau thời gian học ở Topgiaovien, dù một đứa học chậm như mình cũng tiến bộ rất nhanh. Mình thật sự biết ơn Topgiaovien vì đã luôn hỗ trợ mình từ lúc bắt đầu học cho đến tận lúc thi và mình đã đạt được kết quả ngoài mong đợi. ??','imageUser-1724640899404-701200550.jpg','Hồng Ngọc','share-1724640899404-806021234.jpg','https://www.facebook.com/share/p/yy2ndBsWJ3tUHpa9/',1,'2024-08-26 02:54:59.410','2024-08-26 02:54:59.410',NULL),(4,'Hello mọi người, mình là Tường San hiện đang là sinh viên năm 3 và vừa hoàn thành đợt thi IELTS vào tháng 7 vừa rồi và đạt được 5.5 ?. Mình rất vui khi quyết định chọn Topgiaovien để học IELTS. Trước khi đến đây, mình đã thử qua vài trung tâm nhưng không cảm thấy hài lòng cho lắm. Thật may mắn khi một người bạn giới thiệu mình đến Topgiaovien và mình đăng ký học tại chi nhánh Bình Thạnh, gần nơi mình sống. Khi mới bắt đầu, điểm đầu vào của mình chỉ là 4.0. Thầy cô ở đây cực kỳ nhiệt tình và dễ mến?. ','imageUser-1724640964403-57221792.jpg','San Tuong','share-1724640964402-564853302.jpg','https://www.facebook.com/share/p/cU83ibnwXxy213SN/',1,'2024-08-26 02:56:04.406','2024-08-26 02:56:04.406',NULL),(5,'\"Chào mọi người, mình là Thuỳ Dương! Mới thi IELTS xong và đạt điểm 7.5, cảm ơn thầy Tâm và cô Hà Phương ở Topgiaovien cực kỳ nhiều! \r\nThầy Tâm đã giúp mình “hack” kỹ năng Writing với các phương pháp siêu hiệu quả, còn cô Hà Phương thì dạy mình tất cả các kỹ năng còn lại. Nhờ sự hỗ trợ của các thầy cô, mình đã biết cách hệ thống hóa kiến thức, nắm rõ format và tiêu chí bài thi, và phát triển đồng bộ các kỹ năng.','imageUser-1724641071602-287993526.jpg','Nguyễn Dương','share-1724641071601-545914899.jpg','https://www.facebook.com/share/p/YqT82m2JjCQByCWN/',1,'2024-08-26 02:57:51.608','2024-08-26 02:57:51.608',NULL),(6,'Mình là Nguyên - học viên lớp giao tiếp Advance của Topgiaovien\r\nXuất phát điểm của mình là từ mất gốc đi lên, mình không còn nhớ gì về cách phát âm kể cả những từ đơn giản nhất. Trong lúc gần như tuyệt vọng vì phỏng vấn nhiều nơi đều rớt với lí do là trình độ giao tiếp tiếng Anh không tốt thì rất may mình đã được chị gái giới thiệu cho lớp học giao tiếp bên Topgiaovien','imageUser-1724641233010-757982189.jpg','Nguyen Van','share-1724641233005-997426538.jpg','https://www.facebook.com/share/p/3HkCEKEd8ynqgnx4/',1,'2024-08-26 03:00:33.016','2024-08-26 03:00:33.016',NULL);
/*!40000 ALTER TABLE `share` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategory`
--

DROP TABLE IF EXISTS `subcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subcategory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoryId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `subcategory_categoryId_fkey` (`categoryId`),
  CONSTRAINT `subcategory_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategory`
--

LOCK TABLES `subcategory` WRITE;
/*!40000 ALTER TABLE `subcategory` DISABLE KEYS */;
INSERT INTO `subcategory` VALUES (1,'TOEIC',1),(2,'IELTS',1),(3,'TOEIC',2),(4,'IELTS',2),(5,'TOEIC',3),(6,'IELTS',3),(7,'TOEIC',4),(8,'IELTS',4);
/*!40000 ALTER TABLE `subcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacher` (
  `id` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `philosophy` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkPhilosophy` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `commitment` varchar(600) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `position` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `specialty` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photoUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ca` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'IETLS Overall',
  `levelCa` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT '8.0',
  `exp` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT '4',
  `optionExp` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'Giảng dạy tiếng Anh',
  `caIELTS` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `caTOEIC` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `caTOEFL` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `caOther` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkChat` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `voucher` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT '20',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `userId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `courseCategoryId` int DEFAULT NULL,
  `slogan` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `courseSubCategoryId` int DEFAULT NULL,
  `photoUrl2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `imagePhilosophy` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `locationId` int DEFAULT NULL,
  `typeLearn` enum('Online','Offline','All') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'All',
  PRIMARY KEY (`id`),
  UNIQUE KEY `teacher_id_key` (`id`),
  UNIQUE KEY `teacher_userId_key` (`userId`),
  KEY `teacher_courseCategoryId_fkey` (`courseCategoryId`),
  KEY `teacher_courseSubCategoryId_fkey` (`courseSubCategoryId`),
  KEY `teacher_locationId_fkey` (`locationId`),
  CONSTRAINT `teacher_courseCategoryId_fkey` FOREIGN KEY (`courseCategoryId`) REFERENCES `coursecategory` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `teacher_courseSubCategoryId_fkey` FOREIGN KEY (`courseSubCategoryId`) REFERENCES `coursesubcategory` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `teacher_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `location` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `teacher_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher`
--

LOCK TABLES `teacher` WRITE;
/*!40000 ALTER TABLE `teacher` DISABLE KEYS */;
INSERT INTO `teacher` VALUES ('04cd771','Lê Nhật Lam','le-nhat-lam','Giáo dục không chỉ là việc dạy ngôn ngữ, mà còn là một hành trình khám phá và kết nối với các nền văn hóa phong phú. Để học sinh không chỉ học ngôn ngữ mà còn thấu hiểu bối cảnh và giá trị của nó, giáo viên nên đưa vào giảng dạy các yếu tố văn hóa từ các quốc gia nói tiếng Anh. Điều này không chỉ giúp học sinh nắm vững ngôn ngữ một cách tự nhiên hơn mà còn mở ra cánh cửa đến với những trải nghiệm văn hóa đa dạng và thú vị. Bằng cách giới thiệu văn hóa, phong tục, và các đặc trưng xã hội của các quốc gia đó, giáo viên giúp học sinh xây dựng sự đồng cảm và hiểu biết sâu sắc hơn, tạo nên một môi trường học tập phong phú và kết nối hơn với thế giới xung quanh.','6YOGiAxrqyw','Luôn nhiệt tình trong giảng dạy đảm bảo chất lượng và nội dung cho học viên như đã cung cấp ban đầu.\r\nChấm và sửa bài theo đúng lịch, không trễ hẹn với học viên.\r\nTương tác với học viên trước và cả sau buổi học.\r\nKhông vắng lịch dạy mà không có lý do chính đáng.','Giáo viên Tiếng Anh ','null','MR LAM.JPEG','IETLS Overall','8.5','3','Giảng dạy tiếng Anh','caIELTS-1725530743236-283719316.jpg',NULL,NULL,NULL,NULL,'20','2024-08-27 22:56:00.070','2024-09-07 06:00:38.539','9f9a17c5-e75f-4c7b-9408-44b404b7d197',1,'Học ngoại ngữ là hành trình khám phá văn hóa đa dạng.',1,NULL,NULL,1,'All'),('38985cf','Thái Chấn Thanh','thai-chan-thanh','Khơi dậy niềm yêu thích ngôn ngữ thông qua các hoạt động sáng tạo là một cách hiệu quả để thu hút và truyền cảm hứng cho học sinh. Những trò chơi vui nhộn, dự án nghệ thuật độc đáo, và các buổi thảo luận sôi nổi không chỉ giúp biến việc học thành một trải nghiệm đầy thú vị mà còn khuyến khích học sinh khám phá ngôn ngữ một cách tự nhiên và sinh động hơn. Những hoạt động này không chỉ phát triển kỹ năng ngôn ngữ một cách toàn diện, từ việc cải thiện khả năng nghe, nói, đọc, viết, mà còn kích thích sự sáng tạo, khơi gợi đam mê học tập và tăng cường sự tự tin trong việc sử dụng ngôn ngữ mới. Khi học sinh cảm thấy hứng thú và có động lực, việc học trở thành niềm vui và sự tiến bộ sẽ đến một cách tự nhiên hơn.','Lo4_K4relMg','Luôn nhiệt tình trong giảng dạy đảm bảo chất lượng và nội dung cho học viên như đã cung cấp ban đầu.\r\nChấm và sửa bài theo đúng lịch, không trễ hẹn với học viên.\r\nTương tác với học viên trước và cả sau buổi học.\r\nKhông vắng lịch dạy mà không có lý do chính đáng.','Giáo viên tiếng Trung ','Sở trường các lớp tiếng Trung từ 0-HSK4','MR SHIN.JPEG','HSK ','6','10 ','Giảng dạy tiếng Trung ',NULL,NULL,NULL,NULL,NULL,'20','2024-08-27 22:56:00.084','2024-09-07 01:40:13.187','4eafb91d-55d5-4e43-a13d-b2473021740b',2,'Khơi dậy niềm yêu thích ngôn ngữ thông qua các hoạt động sáng tạo. ',4,NULL,NULL,1,'All'),('41d7a88','Đổng Thuý Vy','dong-thuy-vy','Xây dựng mối quan hệ tích cực và tin tưởng với học sinh chính là chìa khóa để tạo ra một môi trường học tập hiệu quả. Khi mình tạo ra một không gian học tập thân thiện và cởi mở, học sinh sẽ cảm thấy an toàn để bày tỏ suy nghĩ của mình và tham gia một cách tích cực vào các hoạt động học tập.\r\n','null','Luôn nhiệt tình trong giảng dạy đảm bảo chất lượng và nội dung cho học viên như đã cung cấp ban đầu.\r\nChấm và sửa bài theo đúng lịch, không trễ hẹn với học viên.','Giáo viên Tiếng Trung ','Sở trường các lớp tiếng Trung từ 0-HSK4','MS VY.JPEG','HSK','5','2','Giảng dạy tiếng Trung ',NULL,NULL,NULL,'',NULL,'20','2024-08-27 22:56:00.095','2024-09-09 07:10:43.540','15ac8f4c-6156-489f-8b1f-e788004306bb',2,'Xây dựng mối quan hệ tích cực, tin tưởng với học sinh.',4,'imageTeacher2-1725865817623-922054333.jpg','imageTeacher2-1725562870022-478006119.jpg',1,'All'),('4a815d1','Đoàn Hà Phương','doan-ha-phuong','Đam mê ngôn ngữ không chỉ là phương tiện để giao tiếp, mà còn là cầu nối để hiểu sâu sắc hơn về thế giới xung quanh chúng ta. Khi chúng ta học ngôn ngữ, chúng ta không chỉ nắm bắt được lời nói mà còn tiếp cận được những giá trị văn hóa, lịch sử, và tư duy của những con người đến từ những nền văn minh khác nhau. Mỗi ngôn ngữ là một cánh cửa mở ra tri thức mới, giúp chúng ta tiếp cận những cơ hội quý giá trong học tập, công việc, và cuộc sống. Sự đam mê này khuyến khích chúng ta khám phá tiềm năng vô hạn của bản thân, rèn luyện các kỹ năng cần thiết, và sẵn sàng đối mặt với những thách thức trong một thế giới ngày càng đa dạng, đầy thay đổi và hội nhập toàn cầu. Chính tình yêu với ngôn ngữ giúp chúng ta trở nên linh hoạt, thấu hiểu và tự tin hơn trên con đường phát triển của chính mình.\r\n','null','Luôn nhiệt tình trong giảng dạy đảm bảo chất lượng và nội dung cho học viên như đã cung cấp ban đầu.\r\nChấm và sửa bài theo đúng lịch, không trễ hẹn với học viên.\r\nTương tác với học viên trước và cả sau buổi học.\r\nKhông vắng lịch dạy mà không có lý do chính đáng.','Giáo viên Tiếng Anh ','Sở trường các lớp IELTS đủ level, Toeic','imageTeacher-1725679013334-567211907.jpg','IETLS Overall','8.0','2','Giảng dạy tiếng Anh','caIELTS-1725679231977-288057381.jpg',NULL,NULL,NULL,NULL,'20','2024-08-27 22:56:00.105','2024-09-07 04:10:35.016','f04bbc57-3e22-447e-9b76-f41f1ed3659c',1,'Đam mê ngôn ngữ, đam mê tương lai',1,'imageTeacher2-1725679013341-668003849.jpg',NULL,1,'All'),('56406fe','Nguyễn Lê Nhật Khanh','nguyen-le-nhat-khanh','Học sinh là trung tâm của lớp học, nơi giáo viên đóng vai trò quan trọng trong việc khơi dậy niềm đam mê và khám phá tiềm năng của từng cá nhân. Bằng cách cá nhân hóa phương pháp giảng dạy, giáo viên không chỉ tạo ra một môi trường học tập thân thiện và khuyến khích, mà còn giúp học sinh cảm thấy được tôn trọng và lắng nghe. Khi học sinh cảm thấy được quan tâm và hỗ trợ đúng cách, họ sẽ trở nên tự tin hơn trong việc tham gia và thể hiện ý kiến của mình. Sự tự tin này không chỉ thúc đẩy sự tích cực trong học tập mà còn tạo nên một lớp học sáng tạo và năng động, nơi mỗi học sinh đều có cơ hội phát huy tối đa khả năng và tiềm năng của mình, từ đó thúc đẩy sự phát triển toàn diện và bền vững.','Lo4_K4relMg','Luôn nhiệt tình trong giảng dạy đảm bảo chất lượng và nội dung cho học viên như đã cung cấp ban đầu.\r\nChấm và sửa bài theo đúng lịch, không trễ hẹn với học viên.\r\nTương tác với học viên trước và cả sau buổi học.\r\nKhông vắng lịch dạy mà không có lý do chính đáng.','Giáo viên tiếng Anh ','Sở trường các lớp IELTS mọi level, IELTS Intensive','MS KHANH.JPEG','IETLS Overall','8.0','4','Giảng dạy tiếng Anh','caIELTS-1725527178040-551641194.jpg',NULL,NULL,NULL,NULL,'20','2024-08-27 22:56:00.115','2024-09-05 09:36:01.807','f3753c8e-69dc-4078-8cf4-619607f62fe1',1,'Học sinh là trung tâm của lớp học.',1,NULL,NULL,1,'All'),('7d29e21','Trần Thu Hằng','tran-thu-hang','Mình luôn đặt sự sáng tạo và tư duy độc lập của học sinh lên hàng đầu. Mình tin rằng giáo viên không chỉ là người truyền đạt kiến thức mà còn cần tạo ra một môi trường học tập vui vẻ, nơi học sinh cảm thấy tự do thể hiện ý tưởng và khám phá bản thân. Khi khuyến khích sự sáng tạo, mình muốn học sinh không chỉ yêu thích môn học mà còn phát triển tư duy phản biện, tự tin bày tỏ ý kiến riêng và trở thành những người học chủ động.\r\n\r\nTrong lớp học, mình thường cố gắng tạo ra nhiều cơ hội để học sinh tham gia vào các hoạt động thực tế và sáng tạo, như thảo luận nhóm, làm dự án, hoặc các bài tập mở rộng. Điều này giúp các em tìm thấy niềm vui trong việc học và kết nối với thế giới xung quanh một cách tự nhiên. Mình tin rằng khi các em được khuyến khích suy nghĩ ngoài khuôn khổ, các em sẽ học được cách giải quyết vấn đề linh hoạt hơn và sáng tạo hơn trong mọi tình huống.','StW-1AVU7z8','Luôn nhiệt tình trong giảng dạy đảm bảo chất lượng và nội dung cho học viên như đã cung cấp ban đầu.\r\nChấm và sửa bài theo đúng lịch, không trễ hẹn với học viên.\r\nTương tác với học viên trước và cả sau buổi học.\r\nKhông vắng lịch dạy mà không có lý do chính đáng.','Giáo viên tiếng Anh ','Sở trường dạy IELTS và TOEIC','MS HẰNG.JPEG','IETLS Overall','8.0','2','Giảng dạy tiếng Anh','caIELTS-1725530510319-515135296.jpg',NULL,NULL,NULL,NULL,'20','2024-08-27 22:56:00.125','2024-09-07 01:48:08.856','8838082d-c9c1-4ae3-b57a-1f61b9e5330b',1,'Học ngoại ngữ không chỉ là học ngôn ngữ, mà còn là học sống .',1,NULL,NULL,1,'All'),('9a3f8fe','Vũ Thị Mai','vu-thi-mai','Không chỉ đơn thuần là việc giảng dạy, mà còn là hành trình gắn kết giữa giáo viên và học sinh. Sự đồng hành này thể hiện sự quan tâm và hỗ trợ tận tâm, giúp học sinh vượt qua khó khăn và khám phá tiềm năng của bản thân. Khi giáo viên luôn sát cánh bên học viên, họ sẽ cảm thấy an toàn và tự tin hơn trong việc tiếp thu kiến thức, đồng thời khơi dậy niềm đam mê học hỏi. Sự đồng hành chân thành là chìa khóa mở ra cánh cửa thành công cho từng học sinh, giúp họ không chỉ tiến bộ trong học tập mà còn phát triển về mặt kỹ năng và tư duy. Mối quan hệ tích cực giữa giáo viên và học sinh còn tạo ra một môi trường học tập đầy cảm hứng, nơi mọi người đều cảm thấy được lắng nghe và đánh giá cao.','Lo4_K4relMg','Luôn nhiệt tình trong giảng dạy đảm bảo chất lượng và nội dung cho học viên như đã cung cấp ban đầu.\r\nChấm và sửa bài theo đúng lịch, không trễ hẹn với học viên.\r\nTương tác với học viên trước và cả sau buổi học.\r\nKhông vắng lịch dạy mà không có lý do chính đáng.','Giáo viên tiếng Trung ','Sở trường các lớp tiếng Trung từ 0-HSK5 và các lớp giao tiếp','MRS MAI.jpg','HSK ','6','12','Giảng dạy tiếng Trung ',NULL,NULL,NULL,'caOther-1725531498446-335547529.jpg',NULL,'20','2024-08-27 22:56:00.135','2024-09-05 10:18:18.464','6a912077-b240-4a7c-a4b5-b60ce95e8810',2,'Đồng hành cùng học sinh trong từng bước tiến bộ.',4,NULL,NULL,1,'All'),('9e41ab8','Nguyễn Giáng Ngọc','nguyen-giang-ngoc','Mình luôn có một cái quan niệm là mình phải \"Be the change you want to see in the world\" nghĩa là mình phải trở thanh cái sự thay đổi mà mình muốn thấy trên thế giới nàyĐã từng nghe học sinh tâm sự với mình là đó giờ các bạn học tiếng Anh trong trường, học IELTS trong trường các bạn toàn là được cô giáo thấy giáo giải thích tại sao phải dùng keyword này, match key word này lại với keyword trong bài như thế nào và các bạn cảm thấy là khi mà thầy cô giảng như vậy các bạn cảm thấy bất lực lắm. Bởi vì các bạn không hiểu, các bạn cứ cảm giác như sao mình ngu quá, mình không biết làm sao để match như thầy cô, như các bạn khác. Rồi các bạn mới nói với mình là nhờ học ở DOL mà các bạn có thể đọc hiểu hoặc là viết được một câu hoặc một đoạn văn hoặc là biết cách để nghĩ ra ý tưởng, phát triển... Đã từng nghe học sinh tâm sự với mình là đó giờ các bạn học tiếng Anh trong trường, học IELTS trong trường các bạn toàn là được cô giáo thấy giáo giải thích tại sao phải dùng keyword này, match key word này lại với keyword trong bài như thế nào và các bạn cảm thấy là khi mà thầy cô giảng như vậy các bạn cảm thấy bất lực lắm. Bởi vì các bạn không hiểu, các bạn cứ cảm giác như sao mình ngu quá, mình không biết làm sao để match như thầy cô, như các bạn khác. Rồi các bạn mới nói với mình là nhờ học ở DOL mà các bạn có thể đọc hiểu hoặc là viết được một câu hoặc một đoạn văn hoặc là biết cách để nghĩ ra ý tưởng, phát triển...','Lo4_K4relMg','Luôn nhiệt tình trong giảng dạy đảm bảo chất lượng và nội dung cho học viên như đã cung cấp ban đầu.\r\nChấm và sửa bài theo đúng lịch, không trễ hẹn với học viên.\r\nTương tác với học viên trước và cả sau buổi học.\r\nKhông vắng lịch dạy mà không có lý do chính đáng.','Giáo viên Tiếng Anh ','Sở trường các lớp tiếng Trung từ 0-HSK4','imageTeacher-1725006810985-587048321.jpg','IETLS Overall','7.5','2','Giảng dạy tiếng Anh',NULL,NULL,NULL,NULL,NULL,'20','2024-08-29 10:14:57.692','2024-09-07 01:46:11.094','3b5e4693-5bf8-42d0-9f9f-067bcc1680a0',1,'null',1,NULL,NULL,1,'All'),('a56c0d1','Lưu Kiến Tâm','luu-kien-tam','Tiếng Anh là một ngôn ngữ sống động, và học qua thực hành là cách hiệu quả nhất để nắm bắt ngôn ngữ này. Mình tin rằng việc giao tiếp thông qua các hoạt động thực tế, trò chơi, và dự án sáng tạo không chỉ giúp học sinh tiếp thu nhanh chóng mà còn biến việc học thành một trải nghiệm thú vị. Những tình huống giao tiếp thực tế như nhập vai, thảo luận nhóm hay thuyết trình giúp học sinh rèn luyện kỹ năng ngôn ngữ trong môi trường gần gũi, xây dựng sự tự tin và cải thiện kỹ năng nghe, nói, đọc, viết một cách toàn diện. Những trải nghiệm này tạo ra nền tảng vững chắc, giúp học sinh sử dụng tiếng Anh một cách tự nhiên và linh hoạt hơn. \r\n','33zOxNKCo0g','Luôn nhiệt tình trong giảng dạy đảm bảo chất lượng và nội dung cho học viên như đã cung cấp ban đầu.\r\nChấm và sửa bài theo đúng lịch, không trễ hẹn với học viên.\r\nTương tác với học viên trước và cả sau buổi học.\r\nKhông vắng lịch dạy mà không có lý do chính đáng.','Giáo viên Tiếng Anh ','Sở trường các lớp IELTS mọi level','MR TÂM.jpeg','IETLS Overall','7.5','5','Giảng dạy tiếng Anh',NULL,NULL,NULL,NULL,NULL,'20','2024-08-27 22:56:00.146','2024-09-07 01:44:56.943','30e0b400-818e-4824-ba0d-dda67291f5b4',1,'Mỗi ngày một câu, tiến bộ từng giờ.',1,NULL,NULL,1,'All'),('a57de5b','Nguyễn Minh Mẫn','nguyen-minh-man','Mình luôn tin rằng học tập suốt đời là chìa khóa thành công khi học tiếng Anh. Mình khuyến khích học sinh phát triển thói quen này, giúp họ nhận ra rằng việc học ngôn ngữ không chỉ dừng lại trong lớp học hay qua các kỳ thi mà là một hành trình liên tục. Mỗi ngày đều có thể là cơ hội để học điều mới – từ cuộc hội thoại, sách báo, phim ảnh đến trải nghiệm văn hóa. Khi học sinh nhận ra rằng việc học là một quá trình không ngừng, họ sẽ có thêm động lực, sẵn sàng khám phá và phát triển khả năng ngôn ngữ của mình một cách tự nhiên và hứng khởi.','Lo4_K4relMg','Luôn nhiệt tình trong giảng dạy đảm bảo chất lượng và nội dung cho học viên như đã cung cấp ban đầu.\r\nChấm và sửa bài theo đúng lịch, không trễ hẹn với học viên.\r\nTương tác với học viên trước và cả sau buổi học.\r\nKhông vắng lịch dạy mà không có lý do chính đáng.','Giáo viên tiếng Anh ','Sở trường các lớp IELTS General, Giao tiếp và lớp kèm','MR MẪN.jpg','IETLS Overall','7.0','4','Giảng dạy tiếng Anh','caIELTS-1725531931592-585394047.jpg',NULL,NULL,NULL,NULL,'20','2024-08-27 22:56:00.160','2024-09-05 10:25:31.607','2c667d19-76f5-41a8-838b-9711ef0b8a83',1,'Giúp học sinh xây dựng nền tảng vững chắc để học tập suốt đời.',1,NULL,NULL,1,'All'),('c1f5578','Đỗ Tường Phương Uyên','do-tuong-phuong-uyen','Để tạo ra một môi trường học tập tích cực, lớp học cần trở thành một không gian thân thiện, thoải mái và đầy động lực. Khi học sinh cảm thấy được chào đón và khuyến khích, họ sẽ tự tin hơn trong việc giao tiếp bằng tiếng Anh và tích cực tham gia vào các hoạt động học tập. Môi trường tích cực không chỉ giúp họ hứng thú mà còn thúc đẩy sự sáng tạo, phát triển tư duy phản biện và khả năng học hỏi một cách sâu sắc hơn.\r\n\r\nĐây là nơi mà mỗi học sinh đều được hỗ trợ và khích lệ, tạo cơ hội để họ thoải mái chia sẻ ý kiến, thử thách bản thân và vượt qua những rào cản trong việc học. Việc xây dựng một không gian như vậy sẽ giúp học sinh không chỉ đạt được mục tiêu học tập mà còn phát triển sự tự tin, khả năng làm việc nhóm và sự gắn kết trong cộng đồng học tập.\r\n','DZR7oXfuWzM','Luôn nhiệt tình trong giảng dạy đảm bảo chất lượng và nội dung cho học viên như đã cung cấp ban đầu.\r\nChấm và sửa bài theo đúng lịch, không trễ hẹn với học viên.\r\nTương tác với học viên trước và cả sau buổi học.\r\nKhông vắng lịch dạy mà không có lý do chính đáng.','Giáo viên Tiếng Anh ','Sở trường Các lớp giao tiếp','MS UYÊN.JPEG','IETLS Overall','7.5','2','Giảng dạy tiếng Anh','caIELTS-1725530685073-218909762.jpg',NULL,NULL,NULL,NULL,'20','2024-08-27 22:56:00.169','2024-09-05 10:04:45.090','9f9a17c5-e754b7d197',1,'Ngôn ngữ là cầu nối mọi con người',1,NULL,NULL,1,'All'),('d17cc0c','Trần Kim Hoàng','tran-kim-hoang','Việc liên kết ngôn ngữ với văn hóa không chỉ giúp chúng ta có cái nhìn toàn diện về thế giới, mà còn mở ra những cơ hội khám phá sâu sắc hơn về chính bản thân và các nền văn hóa khác. Ngôn ngữ không chỉ là một công cụ giao tiếp đơn thuần, mà còn là kho tàng chứa đựng các giá trị, phong tục và bản sắc của một dân tộc. Khi chúng ta hiểu biết về văn hóa, chúng ta có thể thấu hiểu những sắc thái ý nghĩa và sự tinh tế trong ngôn ngữ, điều này giúp tạo ra sự đồng cảm và tôn trọng giữa các nền văn hóa khác nhau. Sự kết hợp này không chỉ làm phong phú thêm trải nghiệm cá nhân mà còn nâng cao khả năng giao tiếp và kết nối chân thành với thế giới xung quanh, từ đó tạo ra những mối quan hệ sâu sắc và ý nghĩa hơn trong cuộc sống hàng ngày.','Lo4_K4relMg','Luôn nhiệt tình trong giảng dạy đảm bảo chất lượng và nội dung cho học viên như đã cung cấp ban đầu.\r\nChấm và sửa bài theo đúng lịch, không trễ hẹn với học viên.\r\nTương tác với học viên trước và cả sau buổi học.\r\nKhông vắng lịch dạy mà không có lý do chính đáng.','Giáo viên tiếng Trung ','Sở trường các lớp tiếng Trung mọi level','MR HOÀNG.JPEG','HSK','6','15','Giảng dạy tiếng Trung ',NULL,NULL,NULL,'caOther-1725532025329-663155058.jpg',NULL,'20','2024-08-27 22:56:00.178','2024-09-07 01:38:56.603','2a7c2486-51ce-422a-9c0a-f0cc93563ddf',2,'Kết hợp kiến thức văn hóa với ngôn ngữ để hiểu sâu sắc hơn.',4,NULL,NULL,1,'All'),('de29046','Trần Cao Đạt','tran-cao-dat','Khuyến khích sự sáng tạo và tư duy độc lập là yếu tố vô cùng quan trọng trong sự phát triển toàn diện của học sinh. Khi học sinh được tạo điều kiện tự do khám phá và giải quyết vấn đề, họ không chỉ trở nên tự tin hơn trong việc bày tỏ quan điểm cá nhân mà còn rèn luyện tư duy phản biện một cách hiệu quả. Một môi trường học tập cởi mở và hỗ trợ giúp học sinh phát huy khả năng sáng tạo của mình, đồng thời phát triển kỹ năng tư duy độc lập, cho phép họ tìm ra giải pháp mới và thích ứng với các tình huống khác nhau.\r\n\r\nSự tự do trong việc khám phá và giải quyết vấn đề không chỉ giúp học sinh hình thành những ý tưởng độc đáo mà còn trang bị cho họ khả năng đối mặt với thách thức và thay đổi. Tư duy độc lập và sáng tạo là chìa khóa giúp học sinh không chỉ thành công trong học tập mà còn góp phần tích cực vào sự phát triển của xã hội.','Lo4_K4relMg','Luôn nhiệt tình trong giảng dạy đảm bảo chất lượng và nội dung cho học viên như đã cung cấp ban đầu.\r\nChấm và sửa bài theo đúng lịch, không trễ hẹn với học viên.\r\nTương tác với học viên trước và cả sau buổi học.\r\nKhông vắng lịch dạy mà không có lý do chính đáng.','Giáo viên tiếng Trung ','Sở trường các lớp tiếng Trung từ 0-HSK5','MR ĐẠT.JPEG','HSK','6','4','Giảng dạy tiếng Trung','caIELTS-1725527833104-108092985.jpg',NULL,NULL,NULL,NULL,'20','2024-08-27 22:56:00.186','2024-09-07 01:41:04.642','d213572b-f190-40da-9027-69faeb17202c',2,'Khuyến khích sự sáng tạo và tư duy độc lập.',4,NULL,NULL,1,'All'),('ef40688','Võ Nguyễn Cẩm Nhung','vo-nguyen-cam-nhung','Học một ngôn ngữ mới không chỉ đơn giản là việc ghi nhớ từ vựng hay ngữ pháp, mà còn là cơ hội để khám phá thế giới và các nền văn hóa khác nhau. Mỗi buổi học là một trải nghiệm mới, giúp học sinh hiểu thêm về lối sống, tư duy của con người từ nhiều quốc gia, từ đó mở rộng tầm nhìn và nhận thức.\r\n\r\nKhi học sinh tiếp cận việc học như một cuộc phiêu lưu, họ sẽ dễ dàng cảm nhận được niềm vui và sự hào hứng trong từng bài học. Ngôn ngữ không chỉ là công cụ giao tiếp, mà còn là chìa khóa mở ra những cơ hội khám phá và trải nghiệm thú vị, mang lại những điều bất ngờ từ thế giới rộng lớn ngoài kia.','Lo4_K4relMg','Luôn nhiệt tình trong giảng dạy đảm bảo chất lượng và nội dung cho học viên như đã cung cấp ban đầu.\r\nChấm và sửa bài theo đúng lịch, không trễ hẹn với học viên.\r\nTương tác với học viên trước và cả sau buổi học.\r\nKhông vắng lịch dạy mà không có lý do chính đáng.','Giáo viên tiếng Anh ','Sở trường các lớp mất gốc','MS NHUNG.JPEG','IETLS Overall','7.0','3','Giảng dạy tiếng Anh','caIELTS-1725525435875-637941946.jpg',NULL,NULL,NULL,NULL,'20','2024-08-27 22:56:00.198','2024-09-05 08:51:29.590','c03919e2-0974-43a0-8fd6-ebb3cfd84eee',1,'Tận hưởng hành trình chinh phục ngôn ngữ mới.',1,NULL,NULL,1,'All');
/*!40000 ALTER TABLE `teacher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacherforte`
--

DROP TABLE IF EXISTS `teacherforte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacherforte` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `teacherId` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `teacherForte_teacherId_fkey` (`teacherId`),
  CONSTRAINT `teacherForte_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `teacher` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacherforte`
--

LOCK TABLES `teacherforte` WRITE;
/*!40000 ALTER TABLE `teacherforte` DISABLE KEYS */;
INSERT INTO `teacherforte` VALUES (1,'IELTS nâng cao','04cd771'),(2,'Giao tiếp','04cd771'),(3,'Lớp kèm ','04cd771'),(4,'0 - HSK 4 ','38985cf'),(5,'Giao tiếp','38985cf'),(6,'Luyện thi HSK ','38985cf'),(7,' 0 - HSK5','41d7a88'),(8,'Giao tiếp','41d7a88'),(9,'Luyện thi HSK ','41d7a88'),(10,'IELTS nâng cao','4a815d1'),(11,'Giao tiếp','4a815d1'),(12,'Mọi level ','4a815d1'),(13,'IELTS mọi level','56406fe'),(14,'IELTS Writing','56406fe'),(15,'TOEIC mọi level','56406fe'),(16,'Lớp kèm IELTS ','7d29e21'),(17,'Giao tiếp','7d29e21'),(18,'TOEIC mọi level ','7d29e21'),(19,'0 - HSK 5','9a3f8fe'),(20,'Lớp giao tiếp','9a3f8fe'),(21,'Luyện thi HSK ','9a3f8fe'),(22,'IELTS nâng cao','a56c0d1'),(23,'Giao tiếp','a56c0d1'),(24,'IELTS Writing ','a56c0d1'),(25,'IELTS General ','a57de5b'),(26,'Giao tiếp','a57de5b'),(27,'Lớp kèm ','a57de5b'),(28,'IELTS ','c1f5578'),(29,'Giao tiếp','c1f5578'),(30,'TOEIC mọi level ','c1f5578'),(31,'Mọi level ','d17cc0c'),(32,'Giao tiếp','d17cc0c'),(33,'Luyện thi HSK','d17cc0c'),(34,'Các lớp giao tiếp','de29046'),(35,'0 - HSK5','de29046'),(36,'Luyện thi HSK','de29046'),(37,'TOEIC Foundation','ef40688'),(38,'IELTS Foundation','ef40688'),(39,'Giao tiếp cơ bản','ef40688'),(40,'IELTS nâng cao','9e41ab8'),(41,'Reading effortlessly method','9e41ab8'),(42,'TOEIC','9e41ab8'),(43,'IELTS nâng cao',NULL),(44,'Giao tiếp',NULL),(45,'TOEIC',NULL),(46,'IELTS nâng cao',NULL),(47,'Giao tiếp',NULL),(48,'TOEIC',NULL),(49,'IELTS nâng cao',NULL),(50,'Giao tiếp',NULL),(51,'TOEIC',NULL),(52,'IELTS nâng cao',NULL),(53,'Giao tiếp',NULL),(54,'TOEIC',NULL),(55,'IELTS nâng cao',NULL),(56,'Giao tiếp',NULL),(57,'TOEIC',NULL);
/*!40000 ALTER TABLE `teacherforte` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teachernotify`
--

DROP TABLE IF EXISTS `teachernotify`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teachernotify` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `teacherId` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `teacherNotify_teacherId_fkey` (`teacherId`),
  CONSTRAINT `teacherNotify_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `teacher` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachernotify`
--

LOCK TABLES `teachernotify` WRITE;
/*!40000 ALTER TABLE `teachernotify` DISABLE KEYS */;
INSERT INTO `teachernotify` VALUES (1,'Khai giảng khóa IELTS cấp tốc','Khai giảng lớp IELTS tháng 9 ','4a815d1'),(5,'Khai giảng khóa IELTS cấp tốc ','Khai giảng khóa IELTS tháng 9','c1f5578'),(6,'Khai giảng khóa IELTS cấp tốc','Khai giảng lớp IELTS tháng 9 ','7d29e21'),(7,'Yes. It adheres to the WAI-ARIA design pattern.','Khai giảng khóa IELTS cấp tốc','ef40688'),(8,'Khai giảng khóa IELTS cấp tốc','Khai giảng lớp IELTS tháng 9 ','56406fe'),(10,'Khai giảng khóa tiếng Trung sơ cấp ','Khai giảng khóa tiếng Trung trung cấp ','41d7a88'),(13,'Yes. It adheres to the WAI-ARIA design pattern.','Khai giảng khóa IELTS tháng 9','a56c0d1'),(14,'Khai giảng khóa tiếng Trung sơ cấp ','Khai giảng khóa tiếng Trung sơ cấp ','9a3f8fe'),(15,'','Khai giảng khóa tiếng Trung trung cấp ','de29046'),(19,'Khai giảng lớp tiếng Trung trung cấp ','Khai giảng khóa tiếng Trung trung cấp ','d17cc0c'),(22,'Khai giảng lớp IELTS tháng 9 ','Khai giảng khóa IELTS cấp tốc','a57de5b'),(23,'','Khai giảng khóa tiếng Trung sơ cấp ','38985cf');
/*!40000 ALTER TABLE `teachernotify` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `time`
--

DROP TABLE IF EXISTS `time`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `time` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `time`
--

LOCK TABLES `time` WRITE;
/*!40000 ALTER TABLE `time` DISABLE KEYS */;
INSERT INTO `time` VALUES (1,'Trưa'),(2,'Sáng'),(3,'Chiều');
/*!40000 ALTER TABLE `time` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timeline`
--

DROP TABLE IF EXISTS `timeline`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `timeline` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `timeId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `timeLine_timeId_fkey` (`timeId`),
  CONSTRAINT `timeLine_timeId_fkey` FOREIGN KEY (`timeId`) REFERENCES `time` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timeline`
--

LOCK TABLES `timeline` WRITE;
/*!40000 ALTER TABLE `timeline` DISABLE KEYS */;
INSERT INTO `timeline` VALUES (1,'9h - 10h',2),(2,'10h - 11h',2),(3,'11h - 12h',2),(4,'14h - 15h',1),(5,'15h - 16h',1),(6,'16h - 17h',1),(7,'19h - 20h',3),(8,'20h - 21h',3),(9,'21h - 22h',3);
/*!40000 ALTER TABLE `timeline` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fullName` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` enum('user','student','teacher','admin') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_email_phone_key` (`email`,`phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('15ac8f4c-6156-489f-8b1f-e788004306bb','dongthuyvy@gmail.com','0886506127','Nữ','$2b$10$jx0TdGpoOYHRuUn0QmREqeFJmg/g7ZbfP78qOkH3J3DtKMFSVu9aG','Đổng Thuý Vy','imageUser-1724683446540-19197831.jpg','teacher','2024-08-27 22:55:59.909','2024-09-09 07:10:43.540'),('2a7c2486-51ce-422a-9c0a-f0cc93563ddf','trankimhoang@gmail.com','090 998 48 22','Nam','$2b$10$jx0TdGpoOYHRuUn0QmREqeFJmg/g7ZbfP78qOkH3J3DtKMFSVu9aG','Trần Kim Hoàng','detail-giao-vien.png','teacher','2024-08-27 22:55:59.914','2024-09-07 01:38:32.253'),('2c667d19-76f5-41a8-838b-9711ef0b8a83','nguyenminhman@gmail.com','090 998 48 22','Nam','$2b$10$jx0TdGpoOYHRuUn0QmREqeFJmg/g7ZbfP78qOkH3J3DtKMFSVu9aG','Nguyễn Minh Mẫn','detail-giao-vien.png','teacher','2024-08-27 22:55:59.917','2024-09-05 10:24:43.729'),('30e0b400-818e-4824-ba0d-dda67291f5b4','luukientam@gmail.com','0936688327','Nam','$2b$10$jx0TdGpoOYHRuUn0QmREqeFJmg/g7ZbfP78qOkH3J3DtKMFSVu9aG','Lưu Kiến Tâm','detail-giao-vien.png','teacher','2024-08-27 22:55:59.920','2024-09-07 01:44:45.767'),('38d621b2-081c-44a3-b4cd-3bff74a6ee41','phanquangchieu@gmail.com','0963244822','Nam','$2b$10$jx0TdGpoOYHRuUn0QmREqeFJmg/g7ZbfP78qOkH3J3DtKMFSVu9aG','CEO ',NULL,'admin','2024-08-27 22:55:59.923','2024-08-27 22:55:59.923'),('39a4445d-6bad-4c02-8d48-8e08232c128c','vuongho098@gmail.com','',NULL,'$2b$10$pkbmiIgddL8FIfyBT.P12uramxXDy8X7jm3vVV1A4.mN4MACBBaHa','Vương Hồ Hoàng (Wolf)','Vương Hồ Hoàng (Wolf)1725506478521-599080734.jpg','user','2024-09-05 03:21:18.592','2024-09-05 03:21:18.592'),('3b5e4693-5bf8-42d0-9f9f-067bcc1680a0','nguyengiangngoc2002@gmail.com','0982611427','Nữ','$2b$10$nd5221L6445jrQ07Ag/EGeT1sAghlq5Wf55lcrEnY6W4533Ruu/ZW','Nguyễn Giáng Ngọc','imageUser-1724998274056-128923895.jpg','teacher','2024-08-29 10:13:02.149','2024-09-07 01:45:12.304'),('4212ad9c-17a1-4388-8278-bdc5819c148d','tramy@gmail.com','0332819051','Nữ','$2b$10$ZhW5AqbJrjiaCPZEjW1tf.Zp2RnwBi7pwNDmT1.ayhKVC76Yr.VbK','Trà My ','','admin','2024-08-29 13:20:58.242','2024-08-29 13:20:58.242'),('4eafb91d-55d5-4e43-a13d-b2473021740b','thaichanthan@gmail.com','00000000000','Nam','$2b$10$jx0TdGpoOYHRuUn0QmREqeFJmg/g7ZbfP78qOkH3J3DtKMFSVu9aG','Thái Chấn Thanh','detail-giao-vien.png','teacher','2024-08-27 22:55:59.926','2024-09-07 01:40:02.991'),('6a912077-b240-4a7c-a4b5-b60ce95e8810','vuthimai@gmail.com','090 998 48 22','Nữ','$2b$10$jx0TdGpoOYHRuUn0QmREqeFJmg/g7ZbfP78qOkH3J3DtKMFSVu9aG','Vũ Thị Mai','detail-giao-vien.png','teacher','2024-08-27 22:55:59.930','2024-09-05 10:07:57.411'),('715s8c-2c45-zzcc54d40fd','topgiaovien@gmail.com','0395251176','nam','$2b$10$jx0TdGpoOYHRuUn0QmREqeFJmg/g7ZbfP78qOkH3J3DtKMFSVu9aG','Top Giáo Viên','imageUser-1724644067721-808249534.jpg','admin','2024-08-27 22:55:59.933','2024-08-27 22:55:59.933'),('835540582018734','trungpyyy@gmail.com','0886506127','nam','$2b$10$jx0TdGpoOYHRuUn0QmREqeFJmg/g7ZbfP78qOkH3J3DtKMFSVu9aG','Nguyễn Thành Trung','Nguyễn Thành Trung1724681664217-933932002.jpg','user','2024-08-27 22:55:59.937','2024-08-27 22:55:59.937'),('841d3168-e598-4bf3-96fa-c84f8cf25080',NULL,'0909984822',NULL,'$2b$10$jx0TdGpoOYHRuUn0QmREqeFJmg/g7ZbfP78qOkH3J3DtKMFSVu9aG',NULL,NULL,'user','2024-08-27 22:55:59.940','2024-08-27 22:55:59.940'),('8838082d-c9c1-4ae3-b57a-1f61b9e5330b','tranthuhang@gmail.com','090 998 48 22','Nữ','$2b$10$jx0TdGpoOYHRuUn0QmREqeFJmg/g7ZbfP78qOkH3J3DtKMFSVu9aG','Trần Thu Hằng','detail-giao-vien.png','teacher','2024-08-27 22:55:59.943','2024-09-07 01:47:20.295'),('9f9a17c5-e754b7d197','dotuongphuonguyen@gmail.com','090 998 48 22','Nữ','$2b$10$jx0TdGpoOYHRuUn0QmREqeFJmg/g7ZbfP78qOkH3J3DtKMFSVu9aG','Đỗ Tường Phương Uyên','detail-giao-vien.png','teacher','2024-08-27 22:55:59.946','2024-09-05 09:43:42.329'),('9f9a17c5-e75f-4c7b-9408-44b404b7d197','lenhatlam@gmail.com','090 998 48 22','Nam','$2b$10$jx0TdGpoOYHRuUn0QmREqeFJmg/g7ZbfP78qOkH3J3DtKMFSVu9aG','Lê Nhật Lam','detail-giao-vien.png','teacher','2024-08-27 22:55:59.949','2024-09-07 06:00:38.539'),('b0538ef0-294b-427b-99df-b2c4bb91b568','trungpyy@gmail.com','0886506127','nam','$2b$10$jx0TdGpoOYHRuUn0QmREqeFJmg/g7ZbfP78qOkH3J3DtKMFSVu9aG','Trung Thành','Trung Thành1724681745650-997952736.jpg','user','2024-08-27 22:55:59.951','2024-08-27 22:55:59.951'),('c03919e2-0974-43a0-8fd6-ebb3cfd84eee','vonguyencamnhung@gmail.com','0000000000','Nữ','$2b$10$jx0TdGpoOYHRuUn0QmREqeFJmg/g7ZbfP78qOkH3J3DtKMFSVu9aG','Võ Nguyễn Cẩm Nhung','detail-giao-vien.png','teacher','2024-08-27 22:55:59.954','2024-09-05 08:37:32.298'),('d213572b-f190-40da-9027-69faeb17202c','trancaodat@gmail.com','0000000000','Nam','$2b$10$jx0TdGpoOYHRuUn0QmREqeFJmg/g7ZbfP78qOkH3J3DtKMFSVu9aG','Trần Cao Đạt','detail-giao-vien.png','teacher','2024-08-27 22:55:59.957','2024-09-07 01:40:27.455'),('d973e7a0-379b-411a-bcd9-4aae528bdb43','nguyenhoangy@gmail.com','0933777940','Nữ','$2b$10$Gz7xBHO1l9Biwxedu1rZ.e5PaKmalrrL.RQPsMv.DQkGzK2e/TjIC','Nguyen Thi Hoang Y','','admin','2024-08-29 09:50:14.671','2024-08-29 09:50:14.671'),('f04bbc57-3e22-447e-9b76-f41f1ed3659c','doanhaphuong@gmail.com','0395251179','Nữ','$2b$10$ebokGThuKaW6SGVDEoYtB.khOoIcaApLPz.USY2n70/HE3yQkcPlG','Đoàn Hà Phương','','teacher','2024-09-07 02:59:35.506','2024-09-07 04:10:35.016'),('f3753c8e-69dc-4078-8cf4-619607f62fe1','nguyenlenhatkhanh@gmail.com','0898192633','Nữ','$2b$10$jx0TdGpoOYHRuUn0QmREqeFJmg/g7ZbfP78qOkH3J3DtKMFSVu9aG','Nguyễn Lê Nhật Khanh','detail-giao-vien.png','teacher','2024-08-27 22:55:59.960','2024-09-05 09:33:06.718');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userreset`
--

DROP TABLE IF EXISTS `userreset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userreset` (
  `id` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiresAt` datetime(3) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `teacherId` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userReset_token_key` (`token`),
  KEY `userReset_userId_idx` (`userId`),
  CONSTRAINT `userReset_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userreset`
--

LOCK TABLES `userreset` WRITE;
/*!40000 ALTER TABLE `userreset` DISABLE KEYS */;
/*!40000 ALTER TABLE `userreset` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video`
--

DROP TABLE IF EXISTS `video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `video` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video`
--

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` VALUES (2,'review-1725969654415-835083870.jpg','https://www.youtube.com/watch?time_continue=2&v=74O2fU75GCg&embeds_referring_euri=https%3A%2F%2Fwww.ieltsvietop.vn%2F','2024-09-10 12:00:54.426','2024-09-10 12:00:54.426'),(3,'review-1725969688623-692274408.jpg','https://www.youtube.com/watch?v=gBXWzj_A6Gw','2024-09-10 12:01:28.629','2024-09-10 12:01:28.629'),(4,'review-1725969710068-957964965.jpg','https://www.youtube.com/watch?v=6KwGOAR3VKc&t=1s','2024-09-10 12:01:50.075','2024-09-10 12:01:50.075'),(5,'review-1725969886217-207255535.jpg','https://www.youtube.com/watch?v=78isYC2T_8I&t=1s','2024-09-10 12:04:46.226','2024-09-10 12:04:46.226'),(6,'review-1725969911853-862963451.jpg','https://www.youtube.com/watch?v=78isYC2T_8I','2024-09-10 12:05:11.858','2024-09-10 12:05:11.858'),(7,'review-1725969951617-260925492.jpg','https://www.youtube.com/watch?v=k8O1YHLKfu8','2024-09-10 12:05:51.623','2024-09-10 12:05:51.623');
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zingnews`
--

DROP TABLE IF EXISTS `zingnews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `zingnews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `zingNews_title_key` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zingnews`
--

LOCK TABLES `zingnews` WRITE;
/*!40000 ALTER TABLE `zingnews` DISABLE KEYS */;
INSERT INTO `zingnews` VALUES (3,'Hành trình từ IELTS 5.5 lên 8.0 của nữ C&B Manager 35 tuổi','Chị Đàm Kỳ Nhi (TP HCM) đã kiên trì vượt qua nhiều khó khăn khi vừa học vừa làm để đạt IELTS 8.0 sau 3,5 tháng. Mặc dù luôn được đồng nghiệp nhận xét là người phụ nữ tài giỏi và nhanh nhạy trong...','review-1725970063345-325307703.jpg','https://vnexpress.net/hanh-trinh-tu-ielts-5-5-len-8-0-cua-nu-c-amp-b-manager-35-tuoi-3987069.html','2024-09-10 12:07:43.355','2024-09-10 12:07:43.355'),(4,'Phụ huynh cần gì để sẵn sàng cho con du học ngay từ bậc THPT?','Cho con du học ngay từ bậc THPT luôn là sự lựa chọn khó khăn. Nếu phụ huynh không chuẩn bị kỹ càng về mọi mặt, cho con du học sớm chẳng khác nào “đem cây non ra trước...','review-1725970088007-144301320.jpg','https://giadinh.suckhoedoisong.vn/phu-huynh-can-gi-de-san-sang-cho-con-du-hoc-ngay-tu-bac-thpt-172200925095308422.htm','2024-09-10 12:08:08.016','2024-09-10 12:08:08.016'),(5,'Hành trình chinh phục IELTS 6.5 chỉ trong 1 tháng của bạn Trần Lê Phương','(PLO)- Do cần IELTS 6.0 để xét tuyển vào trường đại học nên Trần Lê Phương (học sinh lớp 12, Hà Nội) đã bắt tay vào công cuộc chinh phục IELTS trong vòng 1 tháng. Trước đó do không ôn tập nhiều nên em...','review-1725970104817-97730211.jpg','https://plo.vn/hanh-trinh-chinh-phuc-ielts-65-chi-trong-1-thang-cua-ban-tran-le-phuong-post700299.html','2024-09-10 12:08:24.828','2024-09-10 12:08:24.828');
/*!40000 ALTER TABLE `zingnews` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-10 20:39:46
