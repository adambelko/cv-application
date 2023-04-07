const Skills = ({ cv }) => {
    return (
        <section className="preview-skills">
            <h2>Skills</h2>
            <ul>
                {cv.skills.map((s) => (
                    <li key={s.id}>{s.name}</li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
