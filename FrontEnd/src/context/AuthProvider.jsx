import React, { createContext, useState, useContext } from "react";

// Create the context
export const AuthContext = createContext();

// AuthProvider component
export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");

  // Create state for the authenticated user
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  // Return the AuthContext provider with the value
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for using the AuthContext
export const useAuth = () => useContext(AuthContext);
