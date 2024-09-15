-- DropForeignKey
ALTER TABLE `application` DROP FOREIGN KEY `application_applicationCategoryId_fkey`;

-- DropForeignKey
ALTER TABLE `application` DROP FOREIGN KEY `application_applicationSubCategoryId_fkey`;

-- DropForeignKey
ALTER TABLE `applicationsubcategory` DROP FOREIGN KEY `applicationSubCategory_applicationCategoryId_fkey`;

-- DropForeignKey
ALTER TABLE `carecourse` DROP FOREIGN KEY `careCourse_courseId_fkey`;

-- DropForeignKey
ALTER TABLE `carecourse` DROP FOREIGN KEY `careCourse_teacherId_fkey`;

-- DropForeignKey
ALTER TABLE `certificate` DROP FOREIGN KEY `certificate_teacherId_fkey`;

-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `comment_parentId_fkey`;

-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `comment_teacherId_fkey`;

-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `comment_userId_fkey`;

-- DropForeignKey
ALTER TABLE `commentlike` DROP FOREIGN KEY `commentLike_commentId_fkey`;

-- DropForeignKey
ALTER TABLE `commentlike` DROP FOREIGN KEY `commentLike_userId_fkey`;

-- DropForeignKey
ALTER TABLE `course` DROP FOREIGN KEY `course_courseCategoryId_fkey`;

-- DropForeignKey
ALTER TABLE `course` DROP FOREIGN KEY `course_courseSubCategoryId_fkey`;

-- DropForeignKey
ALTER TABLE `course` DROP FOREIGN KEY `course_locationId_fkey`;

-- DropForeignKey
ALTER TABLE `coursesubcategory` DROP FOREIGN KEY `courseSubCategory_courseCategoryId_fkey`;

-- DropForeignKey
ALTER TABLE `education` DROP FOREIGN KEY `education_teacherId_fkey`;

-- DropForeignKey
ALTER TABLE `experience` DROP FOREIGN KEY `experience_teacherId_fkey`;

-- DropForeignKey
ALTER TABLE `imagemoment` DROP FOREIGN KEY `imageMoment_teacherId_fkey`;

-- DropForeignKey
ALTER TABLE `jobapply` DROP FOREIGN KEY `jobApply_applicationId_fkey`;

-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `post_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `post_subcategoryId_fkey`;

-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `post_userId_fkey`;

-- DropForeignKey
ALTER TABLE `routedetail` DROP FOREIGN KEY `routeDetail_courseId_fkey`;

-- DropForeignKey
ALTER TABLE `share` DROP FOREIGN KEY `share_teacherId_fkey`;

-- DropForeignKey
ALTER TABLE `subcategory` DROP FOREIGN KEY `subcategory_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `teacher` DROP FOREIGN KEY `teacher_courseCategoryId_fkey`;

-- DropForeignKey
ALTER TABLE `teacher` DROP FOREIGN KEY `teacher_locationId_fkey`;

-- DropForeignKey
ALTER TABLE `teacher` DROP FOREIGN KEY `teacher_userId_fkey`;

-- DropForeignKey
ALTER TABLE `teacherforte` DROP FOREIGN KEY `teacherForte_teacherId_fkey`;

-- DropForeignKey
ALTER TABLE `teachernotify` DROP FOREIGN KEY `teacherNotify_teacherId_fkey`;

-- DropForeignKey
ALTER TABLE `timeline` DROP FOREIGN KEY `timeLine_timeId_fkey`;

-- DropForeignKey
ALTER TABLE `userreset` DROP FOREIGN KEY `userReset_userId_fkey`;

-- AddForeignKey
ALTER TABLE `courseSubCategory` ADD CONSTRAINT `courseSubCategory_courseCategoryId_fkey` FOREIGN KEY (`courseCategoryId`) REFERENCES `courseCategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course` ADD CONSTRAINT `course_courseCategoryId_fkey` FOREIGN KEY (`courseCategoryId`) REFERENCES `courseCategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course` ADD CONSTRAINT `course_courseSubCategoryId_fkey` FOREIGN KEY (`courseSubCategoryId`) REFERENCES `courseSubCategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course` ADD CONSTRAINT `course_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `location`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `routeDetail` ADD CONSTRAINT `routeDetail_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `course`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `timeLine` ADD CONSTRAINT `timeLine_timeId_fkey` FOREIGN KEY (`timeId`) REFERENCES `time`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `careCourse` ADD CONSTRAINT `careCourse_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `course`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `careCourse` ADD CONSTRAINT `careCourse_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `teacher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `share` ADD CONSTRAINT `share_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `teacher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subcategory` ADD CONSTRAINT `subcategory_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `post_subcategoryId_fkey` FOREIGN KEY (`subcategoryId`) REFERENCES `subcategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `post_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `post_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `applicationSubCategory` ADD CONSTRAINT `applicationSubCategory_applicationCategoryId_fkey` FOREIGN KEY (`applicationCategoryId`) REFERENCES `applicationCategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `application` ADD CONSTRAINT `application_applicationSubCategoryId_fkey` FOREIGN KEY (`applicationSubCategoryId`) REFERENCES `applicationSubCategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `application` ADD CONSTRAINT `application_applicationCategoryId_fkey` FOREIGN KEY (`applicationCategoryId`) REFERENCES `applicationCategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jobApply` ADD CONSTRAINT `jobApply_applicationId_fkey` FOREIGN KEY (`applicationId`) REFERENCES `application`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `teacher` ADD CONSTRAINT `teacher_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `teacher` ADD CONSTRAINT `teacher_courseCategoryId_fkey` FOREIGN KEY (`courseCategoryId`) REFERENCES `courseCategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `teacher` ADD CONSTRAINT `teacher_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `location`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `teacherForte` ADD CONSTRAINT `teacherForte_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `teacher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `teacherNotify` ADD CONSTRAINT `teacherNotify_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `teacher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `education` ADD CONSTRAINT `education_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `teacher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `comment_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `teacher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `comment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `comment_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `comment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commentLike` ADD CONSTRAINT `commentLike_commentId_fkey` FOREIGN KEY (`commentId`) REFERENCES `comment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commentLike` ADD CONSTRAINT `commentLike_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `certificate` ADD CONSTRAINT `certificate_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `teacher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `experience` ADD CONSTRAINT `experience_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `teacher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `imageMoment` ADD CONSTRAINT `imageMoment_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `teacher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userReset` ADD CONSTRAINT `userReset_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
