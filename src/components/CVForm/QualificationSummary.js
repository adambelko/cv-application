import SingleInput from "./SingleInput";

const QualificationSummary = ({
    changeQualification,
    addQualification,
    removeQualification,
    qualificationList,
}) => {
    return (
        <section className="form-qualification-summary">
            <label>
                <h2>Summary of Qualification</h2>
            </label>
            {qualificationList.map((qualification) => (
                <SingleInput
                    id={qualification.id}
                    key={qualification.id}
                    name={qualification.name}
                    placeholder={"Qualification"}
                    change={changeQualification}
                    remove={removeQualification}
                />
            ))}
            <button onClick={addQualification} type="button">
                Add
            </button>
        </section>
    );
};

export default QualificationSummary;
