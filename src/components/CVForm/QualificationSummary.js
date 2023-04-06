import SingleInput from "./SingleInput";

const QualificationSummary = ({
    changeQualification,
    addQualification,
    removeQualification,
    qualificationList,
}) => {
    return (
        <section>
            <label>
                <h2>Summary of Qualification</h2>
            </label>
            <div className="cv-form-qualification-summary">
                {qualificationList.map((qualification) => (
                    <SingleInput
                        id={qualification.id}
                        key={qualification.id}
                        name={qualification.name}
                        change={changeQualification}
                        remove={removeQualification}
                    />
                ))}
                <button onClick={addQualification} type="button">
                    Add
                </button>
            </div>
        </section>
    );
};

export default QualificationSummary;
