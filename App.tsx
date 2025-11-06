
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthContext';
import { ToastProvider } from './components/toast/ToastContext';
import AppContent from './AppContent';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <ToastProvider>
                    <AppContent />
                </ToastProvider>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;
