const WorkExperience = ({ cv }) => {
    return (
        <section>
            <h2>Work Experience</h2>
            <ul className="preview-work-experience">
                {cv.workExperience.map((s) => (
                    <li key={s.id}>
                        {s.position}
                        {s.addInfo}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default WorkExperience;
