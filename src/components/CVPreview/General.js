const General = ({ general }) => {
    return (
        <>
            <div className="cv-preview-inner-header">{general.fullName}</div>
            <div className="cv-preview-sub-header">
                {"Email: "}
                {general.email} {" | "}
                {"Phone: "}
                {general.phone} {" | "}
                {"Address: "}
                {general.address}
            </div>
        </>
    );
};

export default General;
