import { v4 as uuidv4 } from "uuid";
import prisma from "../configs/db";

export async function generateUniqueShortUuidTeacher() {
  let isUnique = false;
  let shortUuid;

  while (!isUnique) {
    shortUuid = uuidv4().slice(0, 7);
    const existingRecord = await prisma.teacher.findUnique({
      where: { id: shortUuid },
    });

    if (!existingRecord) {
      isUnique = true;
    }
  }

  return shortUuid as string;
}
