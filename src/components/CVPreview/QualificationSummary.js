const QualificationSummary = ({ cv }) => {
    return (
        <>
            <h2>Summary of Qualification</h2>
            <ul className="cv-preview-qualification-summary">
                {cv.qualificationSummary.map((s) => (
                    <li key={s.id}>{s.name}</li>
                ))}
            </ul>
        </>
    );
};

export default QualificationSummary;
