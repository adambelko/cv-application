const WorkExperience = ({ cv }) => {
    return (
        <>
            <h2>Work Experience</h2>
            <ul className="cv-preview-work-experience">
                {cv.workExperience.map((s) => (
                    <li key={s.id}>
                        {s.position}
                        {s.addInfo}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default WorkExperience;
