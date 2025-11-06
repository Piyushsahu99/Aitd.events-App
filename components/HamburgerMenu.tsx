
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Bell, X } from 'lucide-react';

interface HamburgerMenuProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, setIsOpen }) => {
    const navItems = [
        { path: '/', label: 'Home', icon: <Home size={24} /> },
        { path: '/learning', label: 'Learning', icon: <BookOpen size={24} /> },
        { path: '/announcements', label: 'Announcements', icon: <Bell size={24} /> },
    ];

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50">
            <div
                className="absolute inset-0 bg-black opacity-50"
                onClick={() => setIsOpen(false)}
            ></div>
            <div className="relative glass-effect w-64 h-full p-4 animate-slide-in-right">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-text-light hover:text-primary"
                >
                    <X size={24} />
                </button>
                <nav className="mt-12">
                    {navItems.map(item => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center p-2 rounded-lg transition-colors mb-2 ${
                                    isActive ? 'text-primary bg-light-card dark:bg-dark-card' : 'text-text-light'
                                }`
                            }
                        >
                            {item.icon}
                            <span className="ml-4">{item.label}</span>
                        </NavLink>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default HamburgerMenu;
