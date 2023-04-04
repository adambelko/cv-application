const General = ({ cv }) => {
    return (
        <>
            <div className="cv-preview-inner-header">
                {cv.generalInfo.fullName}
            </div>
            <div className="cv-preview-sub-header">
                {"Email: "}
                {cv.generalInfo.email} {" | "}
                {"Phone: "}
                {cv.generalInfo.phone} {" | "}
                {"Address: "}
                {cv.generalInfo.address}
            </div>
        </>
    );
};

export default General;
