
import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext<any>(null);

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState({ id: 1, name: 'Test User' });
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const value = {
        user,
        isAuthenticated,
        isLoading,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
