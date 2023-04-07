const General = ({ cv }) => {
    return (
        <>
            <div className="preview-full-name">{cv.generalInfo.fullName}</div>
            <div className="preview-details">
                {"Email: "}
                {cv.generalInfo.email} {" | "}
                {"Phone: "}
                {cv.generalInfo.phone} {" | "}
                {"Address: "}
                {cv.generalInfo.address}
            </div>
            <h2>Professional Summary</h2>
            <p className="preview-professional-summary">
                {cv.generalInfo.professionalSummary}
            </p>
        </>
    );
};

export default General;
