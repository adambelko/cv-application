const QualificationSummary = ({ cv }) => {
    return (
        <section className="preview-qualification-summary">
            <h2>Summary of Qualification</h2>
            <ul>
                {cv.qualificationSummary.map((s) => (
                    <li key={s.id}>{s.name}</li>
                ))}
            </ul>
        </section>
    );
};

export default QualificationSummary;
