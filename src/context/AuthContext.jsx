import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "nova_fake_auth_token";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(
    () => localStorage.getItem(STORAGE_KEY) || "",
  );
  const [user, setUser] = useState(() => {
    const savedToken = localStorage.getItem(STORAGE_KEY);
    return savedToken ? { name: "NOVA User", email: "demo@nova.com" } : null;
  });

  useEffect(() => {
    if (token) {
      localStorage.setItem(STORAGE_KEY, token);
      setUser({ name: "NOVA User", email: "demo@nova.com" });
    } else {
      localStorage.removeItem(STORAGE_KEY);
      setUser(null);
    }
  }, [token]);

  const login = (email, password) => {
    if (!email || !password) {
      return { success: false, message: "Email and password are required." };
    }

    const fakeToken = `fake-token-${btoa(`${email}:${password}`)}`;
    setToken(fakeToken);
    return { success: true, message: "Login successful!" };
  };

  const signup = (name, email, password) => {
    if (!name || !email || !password) {
      return { success: false, message: "Please fill in all fields." };
    }

    const fakeToken = `fake-token-${btoa(`${name}:${email}:${password}`)}`;
    setToken(fakeToken);
    return { success: true, message: "Account created successfully!" };
  };

  const logout = () => {
    setToken("");
  };

  const value = useMemo(
    () => ({
      token,
      user,
      isAuthenticated: Boolean(token),
      login,
      signup,
      logout,
    }),
    [token, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export default AuthContext;
