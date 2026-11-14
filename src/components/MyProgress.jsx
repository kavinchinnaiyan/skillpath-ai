
import {
    UserRound,
    Mail,
    GraduationCap,
    MapPin,
    Briefcase,
    Edit3,
    Award
} from 'lucide-react';

function MyProfile() {

    return (
        <div className="profile-page">

            <div className="profile-header">
                <div>
                    <h1>My Profile</h1>
                    <p>Manage your personal information and career details.</p>
                </div>

                <button className="profile-edit-btn">
                    <Edit3 size={17} />
                    Edit Profile
                </button>
            </div>

            <div className="profile-card">

                <div className="profile-top">
                    <div className="profile-avatar">
                        <UserRound size={45} />
                    </div>

                    <div>
                        <h2>Kavin C</h2>
                        <p>M.Sc. Artificial Intelligence and Data Science</p>
                        <span className="profile-status">
                            Student
                        </span>
                    </div>
                </div>

                <hr />

                <h3>Personal Information</h3>

                <div className="profile-details">

                    <div className="profile-detail">
                        <Mail />
                        <div>
                            <small>Email Address</small>
                            <p>Add your email address</p>
                        </div>
                    </div>

                    <div className="profile-detail">
                        <GraduationCap />
                        <div>
                            <small>Education</small>
                            <p>M.Sc. AI and Data Science</p>
                        </div>
                    </div>

                    <div className="profile-detail">
                        <MapPin />
                        <div>
                            <small>College</small>
                            <p>Rathinam Deemed to be University</p>
                        </div>
                    </div>

                    <div className="profile-detail">
                        <Briefcase />
                        <div>
                            <small>Career Goal</small>
                            <p>Full Stack Developer</p>
                        </div>
                    </div>

                </div>

                <hr />

                <h3>My Interests</h3>

                <div className="profile-interests">
                    <span>Artificial Intelligence</span>
                    <span>Machine Learning</span>
                    <span>Data Science</span>
                    <span>Web Development</span>
                    <span>UI/UX Design</span>
                </div>

                <hr />

                <div className="profile-achievement">
                    <Award size={25} />
                    <div>
                        <h3>Learning Journey</h3>
                        <p>Keep learning and building your skills with SkillPath AI.</p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default MyProfile;
