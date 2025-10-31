
import React from 'react';

export interface NavLink {
    path: string;
    label: string;
    icon?: React.ReactNode; 
}

export const NAV_LINKS: NavLink[] = [];
