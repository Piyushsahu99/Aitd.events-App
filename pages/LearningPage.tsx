
import React from 'react';

const LearningPage: React.FC = () => {
    // Mock data for demonstration
    const courses = [
        { id: 1, title: 'Introduction to React', description: 'Learn the fundamentals of React.', category: 'Beginner' },
        { id: 2, title: 'Advanced TypeScript', description: 'Master TypeScript for large-scale applications.', category: 'Intermediate' },
        { id: 3, title: 'UI/UX Design Principles', description: 'Understand the core principles of modern design.', category: 'Beginner' },
        { id: 4, title: 'Node.js for a RESTful API', description: 'Build a production-ready API with Node.js.', category: 'Advanced' },
    ];

    return (
        <div className="animate-fade-in-up">
            <h1 className="text-3xl font-bold mb-6 gradient-text">Learning Hub</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map(course => (
                    <div key={course.id} className="glass-effect p-6 rounded-lg primary-glow">
                        <span className="inline-block bg-secondary text-white text-xs font-semibold px-2 py-1 rounded-full mb-2">
                            {course.category}
                        </span>
                        <h2 className="text-xl font-semibold mb-2 text-text-main">{course.title}</h2>
                        <p className="text-text-light mb-4">{course.description}</p>
                        <button className="bg-primary text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
                            Start Learning
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LearningPage;
