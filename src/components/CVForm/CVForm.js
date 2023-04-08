import GeneralInfo from "./General";
import Skills from "./Skills";
import QualificationSummary from "./QualificationSummary.js";
import WorkExperience from "./WorkExperience";
import Footer from "./Footer";

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
    handlePrint,
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
            <Footer resetForm={handleResetForm} print={handlePrint} />
        </form>
    );
};

export default CVForm;
