




import React, { useState, useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BottomNavBar from './components/BottomNavBar';
import SplashScreen from './components/SplashScreen';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { useAuth } from './components/auth/AuthContext';
import HamburgerMenu from './components/HamburgerMenu';
import FloatingActionButton from './components/FloatingActionButton';
import AiChatModal from './components/AiChatModal';
import OnboardingTour from './components/OnboardingTour';
import { useToast } from './components/toast/ToastContext';
import RewardToast from './components/RewardToast';

import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import ReelsPage from './pages/ReelsPage';
import ProfilePage from './pages/ProfilePage';
import WalletPage from './pages/WalletPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';
import NotificationsPage from './pages/NotificationsPage';
import FaqPage from './pages/FaqPage';
import ReferAndEarnPage from './pages/ReferAndEarnPage';
import EarningTasksPage from './pages/EarningTasksPage';
import ToolsPage from './pages/ToolsPage';
import HackathonsPage from './pages/HackathonsPage';
import WorkshopsPage from './pages/WorkshopsPage';
import CompetitionsPage from './pages/CompetitionsPage';
import MentorshipPage from './pages/MentorshipPage';
import EditProfilePage from './pages/EditProfilePage';
import AiResumeBuilderPage from './pages/AiResumeBuilderPage';
import AiImageEditorPage from './pages/AiImageEditorPage';
import AiInterviewCoachPage from './pages/AiInterviewCoachPage';
import ProjectShowcasePage from './pages/ProjectShowcasePage';
import TasksPage from './pages/TasksPage';
import PostTaskPage from './pages/PostTaskPage';
import TaskDetailPage from './pages/TaskDetailPage';

const App: React.FC = () => {
    const { user, isAuthenticated, isLoading: isAuthLoading } = useAuth();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isChatOpen, setChatOpen] = useState(false);
    const { toast } = useToast();

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
                {isAuthenticated && <Header onMenuClick={() => setMenuOpen(true)} />}
                <main className={`flex-1 overflow-x-hidden overflow-y-auto p-4 ${isAuthenticated ? 'pb-20' : ''}`}>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignUpPage />} />
                        
                        <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
                        <Route path="/events" element={<ProtectedRoute><EventsPage /></ProtectedRoute>} />
                        <Route path="/reels" element={<ProtectedRoute><ReelsPage /></ProtectedRoute>} />
                        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
                        <Route path="/profile/edit" element={<ProtectedRoute><EditProfilePage /></ProtectedRoute>} />
                        <Route path="/wallet" element={<ProtectedRoute><WalletPage /></ProtectedRoute>} />
                        <Route path="/notifications" element={<ProtectedRoute><NotificationsPage /></ProtectedRoute>} />
                        <Route path="/faq" element={<ProtectedRoute><FaqPage /></ProtectedRoute>} />
                        <Route path="/refer" element={<ProtectedRoute><ReferAndEarnPage /></ProtectedRoute>} />
                        <Route path="/earning-tasks" element={<ProtectedRoute><EarningTasksPage /></ProtectedRoute>} />
                        <Route path="/tasks" element={<ProtectedRoute><TasksPage /></ProtectedRoute>} />
                        <Route path="/tasks/post" element={<ProtectedRoute><PostTaskPage /></ProtectedRoute>} />
                        <Route path="/tasks/:taskId" element={<ProtectedRoute><TaskDetailPage /></ProtectedRoute>} />
                        <Route path="/tools" element={<ProtectedRoute><ToolsPage /></ProtectedRoute>} />
                        <Route path="/hackathons" element={<ProtectedRoute><HackathonsPage /></ProtectedRoute>} />
                        <Route path="/workshops" element={<ProtectedRoute><WorkshopsPage /></ProtectedRoute>} />
                        <Route path="/competitions" element={<ProtectedRoute><CompetitionsPage /></ProtectedRoute>} />
                        <Route path="/mentorship" element={<ProtectedRoute><MentorshipPage /></ProtectedRoute>} />
                        <Route path="/tools/resume-builder" element={<ProtectedRoute><AiResumeBuilderPage /></ProtectedRoute>} />
                        <Route path="/tools/image-editor" element={<ProtectedRoute><AiImageEditorPage /></ProtectedRoute>} />
                        <Route path="/tools/interview-coach" element={<ProtectedRoute><AiInterviewCoachPage /></ProtectedRoute>} />
                        <Route path="/tools/project-showcase" element={<ProtectedRoute><ProjectShowcasePage /></ProtectedRoute>} />
                        
                        {/* Remove chat page route, now a modal */}
                        <Route path="/chat" element={<ProtectedRoute><NotFoundPage /></ProtectedRoute>} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
            </div>
            {isAuthenticated && (
                <>
                    <BottomNavBar />
                    <HamburgerMenu isOpen={isMenuOpen} setIsOpen={setMenuOpen} />
                    <FloatingActionButton onClick={() => setChatOpen(true)} />
                    <AiChatModal isOpen={isChatOpen} setIsOpen={setChatOpen} />
                    <OnboardingTour />
                </>
            )}
            {toast && <RewardToast message={toast.message} points={toast.points} />}
        </div>
    );
};

export default App;