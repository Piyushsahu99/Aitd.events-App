
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BottomNavBar from './components/BottomNavBar';
import SplashScreen from './components/SplashScreen';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { useAuth } from './components/auth/AuthContext';
import HamburgerMenu from './components/HamburgerMenu';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';
import LearningPage from './pages/LearningPage';
import AnnouncementsPage from './pages/AnnouncementsPage';

const AppContent: React.FC = () => {
    const { user, isAuthenticated, isLoading: isAuthLoading } = useAuth();
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const checkReminders = () => {
            if (!user) return;
            const remindersStr = localStorage.getItem(`event-reminders_${user.id}`);
            if (!remindersStr) return;

            const reminders = JSON.parse(remindersStr);
            const now = Date.now();
            let needsUpdate = false;

            for (const eventId in reminders) {
                const reminder = reminders[eventId];
                if (reminder.notified) continue;

                const eventTime = new Date(reminder.eventTime).getTime();
                const reminderTime = eventTime - reminder.minutesBefore * 60 * 1000;

                if (now >= reminderTime && now - reminderTime < 60 * 1000) { // Fire if due within the last minute
                    if (Notification.permission === 'granted') {
                        new Notification(reminder.eventTitle, {
                            body: `This event is starting in ${reminder.minutesBefore} minutes!`,
                            icon: '/vite.svg',
                        });
                        reminder.notified = true;
                        needsUpdate = true;
                    }
                }
            }
            if (needsUpdate) {
                localStorage.setItem(`event-reminders_${user.id}`, JSON.stringify(reminders));
            }
        };

        const intervalId = setInterval(checkReminders, 30000); // Check every 30 seconds

        return () => clearInterval(intervalId);
    }, [user]);

    if (isAuthLoading) {
        return <SplashScreen />;
    }

    return (
        <div className="flex h-screen font-sans text-gray-800 dark:text-gray-200">
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header onMenuClick={() => setMenuOpen(true)} />
                <main className={`flex-1 overflow-x-hidden overflow-y-auto p-4 pb-20`}>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignUpPage />} />

                        <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
                        <Route path="/learning" element={<ProtectedRoute><LearningPage /></ProtectedRoute>} />
                        <Route path="/announcements" element={<ProtectedRoute><AnnouncementsPage /></ProtectedRoute>} />

                        {/* Remove chat page route, now a modal */}
                        <Route path="/chat" element={<ProtectedRoute><NotFoundPage /></ProtectedRoute>} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
            </div>
            <BottomNavBar />
            <HamburgerMenu isOpen={isMenuOpen} setIsOpen={setMenuOpen} />
        </div>
    );
};

export default AppContent;
