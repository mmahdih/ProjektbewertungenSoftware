export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  avatarUrl?: string;
  roleName: string;
}

export interface AddUser {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    role: number;
}
