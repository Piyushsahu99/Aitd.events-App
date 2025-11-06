
import React from 'react';

const HomePage: React.FC = () => {
    // Mock data for demonstration
    const dailyEvents = [
        { id: 1, title: 'Daily Standup', time: '9:00 AM' },
        { id: 2, title: 'React Workshop', time: '11:00 AM' },
        { id: 3, title: 'Guest Speaker: Evan You', time: '2:00 PM' },
    ];

    const announcements = [
        { id: 1, title: 'New "React Advanced" course available!', date: '2025-11-06' },
        { id: 2, title: 'Community Hackathon next weekend.', date: '2025-11-05' },
    ];

    return (
        <div className="animate-fade-in-up">
            <h1 className="text-3xl font-bold mb-6 gradient-text">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Daily Events Section */}
                <div className="glass-effect p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-text-main">Today's Events</h2>
                    <div className="space-y-4">
                        {dailyEvents.map(event => (
                            <div key={event.id} className="p-4 rounded-md bg-light-card dark:bg-dark-card shadow-md">
                                <h3 className="font-bold text-lg">{event.title}</h3>
                                <p className="text-text-light">{event.time}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Community Announcements Section */}
                <div className="glass-effect p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-text-main">Announcements</h2>
                    <div className="space-y-4">
                        {announcements.map(announcement => (
                            <div key={announcement.id} className="p-4 rounded-md bg-light-card dark:bg-dark-card shadow-md">
                                <h3 className="font-bold text-lg">{announcement.title}</h3>
                                <p className="text-text-light">{announcement.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
