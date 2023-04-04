const Experience = ({ cv }) => {
    const skills = cv.experience.skills;
    return (
        <>
            <h2>Professional Summary</h2>
            <p className="cv-preview-summary">{cv.experience.summary}</p>
            <h2>Skills</h2>
            <ul className="cv-preview-skills">
                {skills.map((s) => (
                    <li key={s.id}>{s.skill}</li>
                ))}
            </ul>
        </>
    );
};

export default Experience;
