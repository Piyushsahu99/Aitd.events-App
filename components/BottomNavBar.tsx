
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Bell } from 'lucide-react'; // Assuming lucide-react for icons

const BottomNavBar: React.FC = () => {
    console.log('Rendering BottomNavBar');
    const navItems = [
        { path: '/', label: 'Home', icon: <Home size={24} /> },
        { path: '/learning', label: 'Learning', icon: <BookOpen size={24} /> },
        { path: '/announcements', label: 'Announcements', icon: <Bell size={24} /> },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 glass-effect p-2 flex justify-around">
            {navItems.map(item => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                        `flex flex-col items-center justify-center w-full text-center p-2 rounded-lg transition-colors ${
                            isActive ? 'text-primary' : 'text-text-light'
                        }`
                    }
                >
                    {item.icon}
                    <span className="text-xs">{item.label}</span>
                </NavLink>
            ))}
        </nav>
    );
};

export default BottomNavBar;
