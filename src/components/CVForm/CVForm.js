import GeneralInfo from "./General";
import Skills from "./Skills";
import QualificationSummary from "./QualificationSummary.js";
import WorkExperience from "./WorkExperience";

const CVForm = ({
    handleChangeGeneral,
    handleChangeSkill,
    handleAddSkill,
    handleRemoveSkill,
    handleChangeQualification,
    handleAddQualification,
    handleRemoveQualification,
    handleChangeWorkExperience,
    handleAddWorkExperience,
    handleRemoveWorkExperience,
    handleResetForm,
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
            <WorkExperience
                changeWorkExperience={handleChangeWorkExperience}
                addWorkExperience={handleAddWorkExperience}
                removeWorkExperience={handleRemoveWorkExperience}
                workExpList={cv.workExperience}
            />
            <div className="form-button-wrapper">
                <button className="form-reset-btn" onClick={handleResetForm}>
                    Reset Form
                </button>
                <button className="form-download-btn">Download PDF</button>
            </div>
        </form>
    );
};

export default CVForm;
