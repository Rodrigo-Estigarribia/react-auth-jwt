import { createContext } from "react";

interface AuthContextType {
  user: string | null;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
});

export default AuthContext;
