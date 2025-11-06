
import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    return (
        <header className="glass-effect p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold gradient-text">AITD Events</h1>
            <button onClick={onMenuClick} className="text-text-main hover:text-primary">
                <Menu size={24} />
            </button>
        </header>
    );
};

export default Header;
