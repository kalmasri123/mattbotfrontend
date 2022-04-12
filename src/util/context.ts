import React from "react";
interface User {
  avatar: string;
  username: string;
  userId: string;
}
export const UserContext = React.createContext<User | null>(null);
