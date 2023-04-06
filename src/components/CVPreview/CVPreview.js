import General from "./General";
import Skills from "./Skills";
import QualificationSummary from "./QualificationSummary";

const CVPreview = ({ cv }) => {
    return (
        <div className="main__cv--preview">
            <General cv={cv} />
            <Skills cv={cv} />
            <QualificationSummary cv={cv} />
        </div>
    );
};

export default CVPreview;
