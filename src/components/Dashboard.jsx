
import {
    Bell,
    Brain,
    BookOpen,
    Target,
    Sparkles
} from 'lucide-react';

function Dashboard() {
    return (
        <div className="dashboard">

            <header className="topbar">
                <div>
                    <h2>Dashboard</h2>
                    <p>Track your learning journey</p>
                </div>

                <div className="profile-area">
                    <Bell size={21} />
                    <div className="avatar">K</div>
                    <span>Kavin</span>
                </div>
            </header>

            <section className="welcome">
                <div>
                    <p>WELCOME BACK 👋</p>
                    <h1>Hey, Kavin!</h1>
                    <p>Ready to achieve your career goals?</p>
                </div>
                <Sparkles size={55} />
            </section>

            <section className="stats-grid">

                <div className="stat-card">
                    <Brain />
                    <p>Total Skills</p>
                    <h2>8</h2>
                    <small>Skills added to profile</small>
                </div>

                <div className="stat-card">
                    <BookOpen />
                    <p>Courses Completed</p>
                    <h2>4</h2>
                    <small>Keep learning!</small>
                </div>

                <div className="stat-card">
                    <Target />
                    <p>Learning Progress</p>
                    <h2>65%</h2>
                    <small>Overall progress</small>
                </div>

            </section>

            <section className="panel">
                <h3>My Career Goal</h3>
                <h2>Full Stack Developer</h2>
                <p>Your target career path</p>
                <div className="progress-track">
                    <div className="progress-fill"></div>
                </div>
                <strong>65% Completed</strong>
            </section>

            <section className="panel recommendation">
                <Sparkles />
                <h3>AI Learning Recommendation</h3>
                <p>
                    Improve your JavaScript skills to move closer
                    to your Full Stack Developer career goal.
                </p>
            </section>

        </div>
    );
}

export default Dashboard;
