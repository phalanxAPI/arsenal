export enum UserRole {
  ADMIN = "ADMIN",
  VIEWER = "VIEWER",
}

export type User = {
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  avatar?: string;
  clerkId: string;
  role: UserRole;
};
