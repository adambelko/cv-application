import SkillInput from "./SkillInput";

const Skills = ({ changeSkill, addSkill, removeSkill, skillList }) => {
    return (
        <section>
            <label htmlFor="skills">
                <h2>Skills</h2>
            </label>
            <div className="cv-form-skills">
                {skillList.map((skill) => (
                    <SkillInput
                        id={skill.id}
                        key={skill.id}
                        name={skill.name}
                        changeSkill={changeSkill}
                        removeSkill={removeSkill}
                    />
                ))}
                <button
                    onClick={addSkill}
                    className="cv-form-add-skill"
                    type="button"
                >
                    Add
                </button>
            </div>
        </section>
    );
};

export default Skills;
