import React from "react";
import General from "./General";
import Skills from "./Skills";
import QualificationSummary from "./QualificationSummary";
import WorkExperience from "./WorkExperience";

const CVPreview = React.forwardRef(({ cv }, ref) => {
    return (
        <div className="main__cv--preview" ref={ref}>
            <General cv={cv} />
            <div className="preview-wrapper">
                <Skills cv={cv} />
                <QualificationSummary cv={cv} />
            </div>
            <WorkExperience cv={cv} />
        </div>
    );
});

export default CVPreview;
