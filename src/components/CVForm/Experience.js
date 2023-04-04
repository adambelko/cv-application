const Experience = ({
    onChangeSummary,
    onChangeSkill,
    onClickAddSkill,
    handleRemoveSkill,
    skill,
    cv,
}) => {
    // let skillsList = [];
    const {
        experience: { skills: skillsList },
    } = cv;

    return (
        <section>
            <label htmlFor="summary">
                <h2>Professional Summary</h2>
            </label>
            <textarea
                onChange={onChangeSummary}
                name="summary"
                id="summary"
                rows="4"
            ></textarea>
            <label htmlFor="skills">
                <h2>Skills</h2>
            </label>
            {console.log(skillsList)}
            <div className="cv-form-skills">
                {/* Dynamically created skills */}
                {skillsList.map((skill) => (
                    <ul key={skill.id}>
                        <input
                            type="text"
                            value={skill.skill}
                            onChange={onChangeSkill}
                        />
                        <button onClick={() => handleRemoveSkill(skill.id)}>
                            Remove
                        </button>
                    </ul>
                ))}
                {/* Input and button for adding a skill */}
                <input
                    onChange={onChangeSkill}
                    value={skill}
                    type="text"
                    name="skills"
                    id="skills"
                />
                <button onClick={onClickAddSkill} className="cv-form-add-skill">
                    Add
                </button>
            </div>
        </section>
    );
};

export default Experience;
