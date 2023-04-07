import General from "./General";
import Skills from "./Skills";
import QualificationSummary from "./QualificationSummary";
import WorkExperience from "./WorkExperience";

const CVPreview = ({ cv }) => {
    return (
        <div className="main__cv--preview">
            <General cv={cv} />
            <div className="preview-wrapper">
                <Skills cv={cv} />
                <QualificationSummary cv={cv} />
            </div>
            <WorkExperience cv={cv} />
        </div>
    );
};

export default CVPreview;
