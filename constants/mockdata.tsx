export type User = {
  id: number;
  name: string;
  password: string;
};

export const users: User[] = [
  {
    id: 1,
    name: "admin",
    password: "123456",
  },
  {
    id: 2,
    name: "gui",
    password: "senha123",
  },
  {
    id: 3,
    name: "usuario",
    password: "abc123",
  },
];