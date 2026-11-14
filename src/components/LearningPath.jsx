
import {
    BookOpen,
    Clock,
    PlayCircle,
    CheckCircle2,
    Sparkles
} from 'lucide-react';
import { useState } from 'react';

function LearningPath() {

    const [courses, setCourses] = useState([
        {
            title: 'JavaScript Fundamentals',
            category: 'Programming',
            duration: '3 Weeks',
            level: 'Beginner',
            progress: 0
        },
        {
            title: 'React JS Development',
            category: 'Web Development',
            duration: '4 Weeks',
            level: 'Intermediate',
            progress: 0
        },
        {
            title: 'Node.js and Express',
            category: 'Backend Development',
            duration: '3 Weeks',
            level: 'Intermediate',
            progress: 0
        },
        {
            title: 'MySQL Database',
            category: 'Database',
            duration: '2 Weeks',
            level: 'Beginner',
            progress: 100
        }
    ]);

    const updateProgress = (selectedIndex) => {
        setCourses(previousCourses =>
            previousCourses.map((course, index) =>
                index === selectedIndex
                    ? { ...course, progress: Math.min(course.progress + 25, 100) }
                    : course
            )
        );
    };

    const completedCount = courses.filter(
        course => course.progress === 100
    ).length;

    return (
        <div className="learning-page">

            <header className="learning-header">
                <div>
                    <h1>My Learning Path</h1>
                    <p>Your personalized roadmap to achieve your career goal.</p>
                </div>
                <BookOpen size={38} color="#7965e8" />
            </header>

            <section className="learning-banner">
                <Sparkles size={30} />
                <div>
                    <h2>Your Goal: Full Stack Developer</h2>
                    <p>Follow this learning roadmap to build your skills.</p>
                </div>
            </section>

            <div className="learning-title">
                <h2>Recommended Courses</h2>
                <p>{completedCount} of {courses.length} courses completed</p>
            </div>

            <div className="learning-grid">

                {courses.map((course, index) => (
                    <div className="learning-card" key={course.title}>

                        <div className="course-number">
                            COURSE {index + 1}
                        </div>

                        <h3>{course.title}</h3>
                        <p>{course.category}</p>

                        <div className="course-details">
                            <span><Clock size={15} /> {course.duration}</span>
                            <span>{course.level}</span>
                        </div>

                        <div className="course-progress-info">
                            <span>Progress</span>
                            <strong>{course.progress}%</strong>
                        </div>

                        <div className="learning-progress">
                            <div
                                className="learning-progress-fill"
                                style={{ width: `${course.progress}%` }}
                            ></div>
                        </div>

                        {course.progress === 100 ? (
                            <button className="completed-button" disabled>
                                <CheckCircle2 size={17} />
                                Completed
                            </button>
                        ) : (
                            <button
                                className="start-button"
                                onClick={() => updateProgress(index)}
                            >
                                <PlayCircle size={17} />
                                {course.progress === 0 ? 'Start Learning' : 'Continue Learning'}
                            </button>
                        )}

                    </div>
                ))}

            </div>

        </div>
    );
}

export default LearningPath;
