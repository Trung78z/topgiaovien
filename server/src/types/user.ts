export interface user {
  id: number;
  email: string;
  username: string | null;
  password: string;
  role: roleUser;
  createdAt?: Date;
  updatedAt?: Date;
}

export enum roleUser {
  user = "user",
  student = "student",
  teacher = "teacher",
  admin = "admin",
}

export interface UserPayload {
  id: string;
  role: string;
  image: string;
}
