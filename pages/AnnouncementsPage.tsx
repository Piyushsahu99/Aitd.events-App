
import React from 'react';

const AnnouncementsPage: React.FC = () => {
    // Mock data for demonstration
    const announcements = [
        { id: 1, title: 'New "React Advanced" course available!', date: '2025-11-06', content: 'We are excited to announce a new course on advanced React concepts. Check it out in the Learning Hub!' },
        { id: 2, title: 'Community Hackathon next weekend.', date: '2025-11-05', content: 'Get ready for our biggest hackathon yet! Prizes include a new laptop and a cash prize.' },
        { id: 3, title: 'Guest Speaker: Sarah Drasner', date: '2025-11-04', content: 'Join us for a talk on the future of web animations with Sarah Drasner.' },
        { id: 4, title: 'New mentorship program launched.', date: '2025-11-03', content: 'We are launching a new mentorship program to connect students with industry professionals.' },
    ];

    return (
        <div className="animate-fade-in-up">
            <h1 className="text-3xl font-bold mb-6 gradient-text">Community Announcements</h1>

            <div className="space-y-6">
                {announcements.map(announcement => (
                    <div key={announcement.id} className="glass-effect p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-2 text-text-main">{announcement.title}</h2>
                        <p className="text-text-light mb-4">{announcement.content}</p>
                        <p className="text-sm text-text-light">{announcement.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnnouncementsPage;
