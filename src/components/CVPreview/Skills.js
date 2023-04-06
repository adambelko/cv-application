const Skills = ({ cv }) => {
    return (
        <>
            <h2>Skills</h2>
            <ul className="cv-preview-skills">
                {cv.skills.map((s) => (
                    <li key={s.id}>{s.name}</li>
                ))}
            </ul>
        </>
    );
};

export default Skills;
