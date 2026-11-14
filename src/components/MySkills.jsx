
import { useState } from 'react';
import { Brain, Plus, X } from 'lucide-react';

function MySkills() {
    const [skills, setSkills] = useState([
        'Python',
        'SQL',
        'HTML',
        'CSS'
    ]);

    const [newSkill, setNewSkill] = useState('');

    function addSkill() {
        const skill = newSkill.trim();

        if (skill === '') return;

        if (skills.some(item => item.toLowerCase() === skill.toLowerCase())) {
            alert('This skill already exists!');
            return;
        }

        setSkills([...skills, skill]);
        setNewSkill('');
    }

    function removeSkill(skillToRemove) {
        setSkills(skills.filter(skill => skill !== skillToRemove));
    }

    return (
        <div className="skills-page">

            <header className="skills-header">
                <div>
                    <h1>My Skills</h1>
                    <p>Manage your skills and improve your career.</p>
                </div>
                <Brain size={35} color="#7965e8" />
            </header>

            <div className="skills-summary">
                <h2>{skills.length}</h2>
                <p>Total Skills Added</p>
            </div>

            <div className="skills-add-box">
                <h3>Add a New Skill</h3>

                <div className="skills-input-row">
                    <input
                        type="text"
                        placeholder="Example: JavaScript"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') addSkill();
                        }}
                    />

                    <button onClick={addSkill}>
                        <Plus size={18} />
                        Add Skill
                    </button>
                </div>
            </div>

            <div className="skills-list-box">
                <h3>My Current Skills</h3>

                <div className="skills-list">
                    {skills.map((skill) => (
                        <div className="skill-item" key={skill}>
                            <span>{skill}</span>

                            <button
                                onClick={() => removeSkill(skill)}
                                title="Remove skill"
                            >
                                <X size={17} />
                            </button>
                        </div>
                    ))}
                </div>

                {skills.length === 0 && (
                    <p>No skills added yet. Add your first skill!</p>
                )}
            </div>

        </div>
    );
}

export default MySkills;
