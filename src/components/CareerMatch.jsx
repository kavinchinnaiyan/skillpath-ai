
import {
    Target,
    BriefcaseBusiness,
    TrendingUp,
    CheckCircle2,
    AlertCircle,
    Sparkles
} from 'lucide-react';

function CareerMatch() {

    const careers = [
        {
            title: 'Full Stack Developer',
            percentage: 75,
            available: ['Python', 'SQL', 'HTML', 'CSS'],
            missing: ['JavaScript', 'React', 'Node.js'],
            description: 'Build complete websites and web applications.'
        },
        {
            title: 'Data Analyst',
            percentage: 85,
            available: ['Python', 'SQL'],
            missing: ['Power BI', 'Excel', 'Statistics'],
            description: 'Analyze data and discover useful insights.'
        },
        {
            title: 'Python Developer',
            percentage: 90,
            available: ['Python', 'SQL'],
            missing: ['Django', 'REST API', 'Git'],
            description: 'Develop applications using Python programming.'
        }
    ];

    return (
        <div className="career-page">

            <header className="career-header">
                <div>
                    <h1>Career Match</h1>
                    <p>Discover careers that match your skills.</p>
                </div>
                <Target size={38} color="#7965e8" />
            </header>

            <section className="career-banner">
                <Sparkles size={30} />
                <div>
                    <h2>Your Career Opportunities</h2>
                    <p>
                        Explore career paths and identify the skills
                        you need to learn.
                    </p>
                </div>
            </section>

            <h2 className="career-section-title">
                Recommended Careers
            </h2>

            <div className="career-grid">

                {careers.map((career) => (
                    <div className="career-card" key={career.title}>

                        <div className="career-card-heading">
                            <BriefcaseBusiness size={25} color="#7965e8" />
                            <span>Career Recommendation</span>
                        </div>

                        <h2>{career.title}</h2>
                        <p>{career.description}</p>

                        <div className="match-info">
                            <span>Skill Match</span>
                            <strong>{career.percentage}%</strong>
                        </div>

                        <div className="career-progress">
                            <div
                                className="career-progress-fill"
                                style={{ width: `${career.percentage}%` }}
                            ></div>
                        </div>

                        <div className="career-skills">
                            <h4>
                                <CheckCircle2 size={17} color="green" />
                                Your Existing Skills
                            </h4>

                            <div className="career-tags">
                                {career.available.map((skill) => (
                                    <span className="available-tag" key={skill}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="career-skills">
                            <h4>
                                <AlertCircle size={17} color="#e49a32" />
                                Skills to Improve
                            </h4>

                            <div className="career-tags">
                                {career.missing.map((skill) => (
                                    <span className="missing-tag" key={skill}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}

            </div>

            <div className="career-tip">
                <TrendingUp size={23} />
                <div>
                    <h3>AI Career Tip</h3>
                    <p>
                        Focus on learning the missing skills to improve
                        your career readiness.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default CareerMatch;
