import SingleInput from "./SingleInput";

const Skills = ({ changeSkill, addSkill, removeSkill, skillList }) => {
    return (
        <section>
            <label htmlFor="skills">
                <h2>Skills</h2>
            </label>
            <div className="cv-form-skills">
                {skillList.map((skill) => (
                    <SingleInput
                        id={skill.id}
                        key={skill.id}
                        name={skill.name}
                        change={changeSkill}
                        remove={removeSkill}
                    />
                ))}
                <button onClick={addSkill} type="button">
                    Add
                </button>
            </div>
        </section>
    );
};

export default Skills;
