const Experience = ({ cv, skill }) => {
    let summary = cv.workExperience.professionalSummary;
    let skillList = cv.workExperience.skills;

    return (
        <>
            <h2>Professional Summary</h2>
            <p className="cv-preview-professional-summary">{summary}</p>
            <h2>Skills</h2>
            <ul className="cv-preview-skills">
                {skillList.map((s) => (
                    <li key={s.id}>{s.name}</li>
                ))}
                <li>{skill.name}</li>
            </ul>
        </>
    );
};

export default Experience;
