import GroupInput from "./GroupInput";

const WorkExperience = ({
    changeWorkExperience,
    addWorkExperience,
    removeWorkExperience,
    workExpList,
}) => {
    return (
        <section>
            <label>
                <h2>Work Experience</h2>
            </label>
            <div className="cv-form-work-experience">
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
            </div>
        </section>
    );
};

export default WorkExperience;
