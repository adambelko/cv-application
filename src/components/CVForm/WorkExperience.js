import GroupInput from "./GroupInput";

const WorkExperience = ({
    changeWorkExperience,
    addWorkExperience,
    removeWorkExperience,
    workExpList,
}) => {
    return (
        <section className="form-work-experience">
            <label>
                <h2>Work Experience</h2>
            </label>
            {workExpList.map((exp) => (
                <GroupInput
                    id={exp.id}
                    key={exp.id}
                    position={exp.position}
                    addInfo={exp.addInfo}
                    change={changeWorkExperience}
                    remove={removeWorkExperience}
                />
            ))}
            <button onClick={addWorkExperience} type="button">
                Add
            </button>
        </section>
    );
};

export default WorkExperience;
