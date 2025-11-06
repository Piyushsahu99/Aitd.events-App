
import React, { createContext, useContext, useState } from 'react';

export const ToastContext = createContext<any>(null);

export const useToast = () => {
    return useContext(ToastContext);
};

export const ToastProvider: React.FC = ({ children }) => {
    const [toast, setToast] = useState(null);

    const value = {
        toast,
        setToast,
    };

    return (
        <ToastContext.Provider value={value}>
            {children}
        </ToastContext.Provider>
    );
};
