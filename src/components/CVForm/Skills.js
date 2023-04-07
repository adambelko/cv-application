import SingleInput from "./SingleInput";

const Skills = ({ changeSkill, addSkill, removeSkill, skillList }) => {
    return (
        <section className="form-skills">
            <label htmlFor="skills">
                <h2>Skills</h2>
            </label>
            {skillList.map((skill) => (
                <SingleInput
                    id={skill.id}
                    key={skill.id}
                    name={skill.name}
                    placeholder={"Skill"}
                    change={changeSkill}
                    remove={removeSkill}
                />
            ))}
            <button onClick={addSkill} type="button">
                Add
            </button>
        </section>
    );
};

export default Skills;
