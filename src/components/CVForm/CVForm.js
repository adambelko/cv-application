import GeneralInfo from "./General";
import Skills from "./Skills";
import QualificationSummary from "./QualificationSummary.js";

const CVForm = ({
    handleChangeGeneral,
    handleChangeSkill,
    handleAddSkill,
    handleRemoveSkill,
    handleChangeQualification,
    handleAddQualification,
    handleRemoveQualification,
    cv,
}) => {
    return (
        <form className="main__cv--form">
            <GeneralInfo changeGeneral={handleChangeGeneral} />
            <Skills
                changeSkill={handleChangeSkill}
                addSkill={handleAddSkill}
                removeSkill={handleRemoveSkill}
                skillList={cv.skills}
            />
            <QualificationSummary
                changeQualification={handleChangeQualification}
                addQualification={handleAddQualification}
                removeQualification={handleRemoveQualification}
                qualificationList={cv.qualificationSummary}
            />
        </form>
    );
};

export default CVForm;
