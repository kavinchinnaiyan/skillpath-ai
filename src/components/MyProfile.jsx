
import { useState } from 'react';
import {
    UserRound, Mail, GraduationCap, MapPin,
    Briefcase, Edit3, Award, Brain, Target,
    BookOpen, X, Save, CheckCircle, Sparkles
} from 'lucide-react';

function MyProfile() {

    const [editing, setEditing] = useState(false);
    const [saved, setSaved] = useState(false);

    const [profile, setProfile] = useState({
        name: 'Kavin C',
        email: 'kavin@example.com',
        course: 'M.Sc. Artificial Intelligence and Data Science',
        college: 'Rathinam Deemed to be University',
        location: 'Coimbatore, Tamil Nadu',
        career: 'Full Stack Developer',
        bio: 'Passionate learner interested in AI, technology and creative problem solving.',
        skills: 'Python, SQL, HTML, CSS',
        interests: 'Artificial Intelligence, Machine Learning, Web Development, UI/UX Design'
    });

    const [formData, setFormData] = useState(profile);

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleEdit() {
        setFormData(profile);
        setEditing(true);
        setSaved(false);
    }

    function handleSave(e) {
        e.preventDefault();
        setProfile(formData);
        setEditing(false);
        setSaved(true);
    }

    const skills = profile.skills.split(',').map(s => s.trim()).filter(Boolean);
    const interests = profile.interests.split(',').map(s => s.trim()).filter(Boolean);

    return (
        <div className="profile-page">

            <div className="profile-header">
                <div>
                    <span className="profile-eyebrow">
                        <Sparkles size={15} /> YOUR PERSONAL SPACE
                    </span>
                    <h1>My Profile</h1>
                    <p>Build your identity. Shape your future.</p>
                </div>

                <button className="profile-edit-btn" onClick={handleEdit}>
                    <Edit3 size={17} />
                    Edit Profile
                </button>
            </div>

            {saved && (
                <div className="profile-success">
                    <CheckCircle size={18} />
                    Profile updated successfully!
                </div>
            )}

            <div className="profile-hero">
                <div className="profile-hero-decoration"></div>

                <div className="profile-hero-content">
                    <div className="profile-avatar">
                        {profile.name.trim().charAt(0).toUpperCase()}
                    </div>

                    <div className="profile-hero-info">
                        <span className="profile-member-badge">
                            <Sparkles size={13} /> SKILLPATH LEARNER
                        </span>
                        <h2>{profile.name}</h2>
                        <p>{profile.course}</p>
                        <div className="profile-location">
                            <MapPin size={15} />
                            {profile.location}
                        </div>
                    </div>

                    <div className="profile-hero-status">
                        <span className="profile-status-dot"></span>
                        Active Learner
                    </div>
                </div>
            </div>

            <div className="profile-stats">

                <div className="profile-stat-card">
                    <div className="profile-stat-icon purple">
                        <Brain size={22} />
                    </div>
                    <div>
                        <h3>{skills.length}</h3>
                        <p>Skills Listed</p>
                    </div>
                </div>

                <div className="profile-stat-card">
                    <div className="profile-stat-icon blue">
                        <Target size={22} />
                    </div>
                    <div>
                        <h3>01</h3>
                        <p>Career Goal</p>
                    </div>
                </div>

                <div className="profile-stat-card">
                    <div className="profile-stat-icon orange">
                        <BookOpen size={22} />
                    </div>
                    <div>
                        <h3>{interests.length}</h3>
                        <p>Interests</p>
                    </div>
                </div>

            </div>

            <div className="profile-content-grid">

                <section className="profile-panel">
                    <div className="profile-panel-heading">
                        <div>
                            <h3>Personal Information</h3>
                            <p>Your basic profile details</p>
                        </div>
                        <UserRound size={22} />
                    </div>

                    <div className="profile-information">

                        <div className="profile-information-item">
                            <Mail />
                            <div>
                                <small>Email Address</small>
                                <p>{profile.email}</p>
                            </div>
                        </div>

                        <div className="profile-information-item">
                            <GraduationCap />
                            <div>
                                <small>Education</small>
                                <p>{profile.course}</p>
                            </div>
                        </div>

                        <div className="profile-information-item">
                            <MapPin />
                            <div>
                                <small>College</small>
                                <p>{profile.college}</p>
                            </div>
                        </div>

                        <div className="profile-information-item">
                            <Briefcase />
                            <div>
                                <small>Career Goal</small>
                                <p>{profile.career}</p>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="profile-panel">
                    <div className="profile-panel-heading">
                        <div>
                            <h3>About Me</h3>
                            <p>A little introduction</p>
                        </div>
                        <Sparkles size={22} />
                    </div>

                    <p className="profile-bio">{profile.bio}</p>

                    <div className="profile-career-box">
                        <Target size={23} />
                        <div>
                            <small>MY DREAM CAREER</small>
                            <h3>{profile.career}</h3>
                        </div>
                    </div>
                </section>

            </div>

            <section className="profile-panel profile-bottom-panel">

                <div className="profile-panel-heading">
                    <div>
                        <h3>Skills & Interests</h3>
                        <p>Your technology interests and abilities</p>
                    </div>
                    <Award size={22} />
                </div>

                <h4>My Skills</h4>
                <div className="profile-tags">
                    {skills.map((skill, index) => (
                        <span key={index}>{skill}</span>
                    ))}
                    {skills.length === 0 && <p>No skills added yet.</p>}
                </div>

                <h4 className="profile-interest-heading">Areas of Interest</h4>
                <div className="profile-tags interest-tags">
                    {interests.map((interest, index) => (
                        <span key={index}>{interest}</span>
                    ))}
                    {interests.length === 0 && <p>No interests added yet.</p>}
                </div>

            </section>

            {editing && (
                <div className="profile-modal-overlay">
                    <div className="profile-modal">

                        <div className="profile-modal-header">
                            <div>
                                <h2>Edit Your Profile</h2>
                                <p>Update your personal and career details.</p>
                            </div>
                            <button
                                type="button"
                                className="profile-close-btn"
                                onClick={() => setEditing(false)}
                            >
                                <X />
                            </button>
                        </div>

                        <form onSubmit={handleSave}>

                            <div className="profile-form-grid">

                                <label>
                                    Full Name
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>

                                <label>
                                    Email Address
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>

                                <label>
                                    Course
                                    <input
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                    />
                                </label>

                                <label>
                                    College
                                    <input
                                        name="college"
                                        value={formData.college}
                                        onChange={handleChange}
                                    />
                                </label>

                                <label>
                                    Location
                                    <input
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                    />
                                </label>

                                <label>
                                    Career Goal
                                    <input
                                        name="career"
                                        value={formData.career}
                                        onChange={handleChange}
                                    />
                                </label>

                                <label className="profile-full-width">
                                    About Me
                                    <textarea
                                        name="bio"
                                        value={formData.bio}
                                        onChange={handleChange}
                                        rows="3"
                                    />
                                </label>

                                <label className="profile-full-width">
                                    Skills (separate with commas)
                                    <textarea
                                        name="skills"
                                        value={formData.skills}
                                        onChange={handleChange}
                                        rows="2"
                                    />
                                </label>

                                <label className="profile-full-width">
                                    Interests (separate with commas)
                                    <textarea
                                        name="interests"
                                        value={formData.interests}
                                        onChange={handleChange}
                                        rows="2"
                                    />
                                </label>

                            </div>

                            <div className="profile-modal-actions">
                                <button
                                    type="button"
                                    className="profile-cancel-btn"
                                    onClick={() => setEditing(false)}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="profile-save-btn"
                                >
                                    <Save size={17} />
                                    Save Changes
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            )}

        </div>
    );
}

export default MyProfile;
