import { createContext, useState, useContext, useEffect, type ReactNode } from "react";
import Cookies from "js-cookie";
import axios from "axios";

type UserType = {
  id?: number;
  name: string;
  type: string;
  username?: string;
};

type LoginResponse = {
  token: string;
  username?: string;
  name?: string | any;
  type?: string | any;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: UserType | null;
  login: (res: LoginResponse) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);

  const decodePayloadFromToken = (token: string) => {
    try {
      const base64Payload = token.split(".")[1];
      if (!base64Payload) return null;
      const padded = base64Payload.padEnd(base64Payload.length + (4 - (base64Payload.length % 4)) % 4, "=");
      const payloadJson = atob(padded);
      return JSON.parse(payloadJson);
    } catch (e) {
      console.warn("Falha ao decodificar token:", e);
      return null;
    }
  };

  const login = (res: LoginResponse) => {
    if (!res?.token) return;

    // set cookie: secure only on https
    Cookies.set("token", res.token, {
      secure: window.location.protocol === "https:",
      sameSite: "strict",
      expires: 1, // 1 dia
      path: "/",
    });

    axios.defaults.headers.common["Authorization"] = `Bearer ${res.token}`;

    const userData: UserType = {
      username: res.username ?? undefined,
      name: res.name ?? undefined,
      type: res.type ?? undefined,
    };
    if (!userData.name || !userData.type) {
      const payload = decodePayloadFromToken(res.token);
      if (payload) {
        userData.name = userData.name ?? payload.name;
        userData.type = userData.type ?? payload.type;
        userData.id = payload.id ?? payload.userId ?? undefined;
      }
    }

    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    Cookies.remove("token");
    delete axios.defaults.headers.common["Authorization"];
    setIsAuthenticated(false);
    setUser(null);
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const payload = decodePayloadFromToken(token);
      if (payload) {
        const userData: UserType = {
          id: payload.id,
          name: payload.name,
          type: payload.type,
          username: payload.username ?? undefined,
        };
        setUser(userData);
        setIsAuthenticated(true);
        return;
      }
      Cookies.remove("token");
      delete axios.defaults.headers.common["Authorization"];
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook de acesso prático
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return context;
};