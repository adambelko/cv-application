const Experience = ({
    onChangeSkill,
    onChangeExistingSkill,
    onClickAddSkill,
    handleRemoveSkill,
    skill,
    cv,
}) => {
    const skillList = cv.workExperience.skills;

    return (
        <section>
            <label htmlFor="skills">
                <h2>Skills</h2>
            </label>
            <div className="cv-form-skills">
                <ul>
                    {skillList.map((s) => (
                        <li key={s.id}>
                            <input
                                type="text"
                                value={s.name}
                                onChange={(e) => onChangeExistingSkill(e, s.id)}
                            />
                            <button onClick={() => handleRemoveSkill(s.id)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Input and button for adding new skill */}
                <input
                    onChange={onChangeSkill}
                    value={skill.name}
                    type="text"
                    name="skills"
                    id="skills"
                />
                <button
                    onClick={onClickAddSkill}
                    className="cv-form-add-skill"
                    type="button"
                >
                    Add
                </button>
            </div>
        </section>
    );
};

export default Experience;
