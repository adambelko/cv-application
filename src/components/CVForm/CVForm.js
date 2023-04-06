import GeneralInfo from "./General";
import Skills from "./Skills";

const CVForm = ({
    handleChangeGeneral,
    handleChangeSkill,
    handleAddSkill,
    handleRemoveSkill,
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
        </form>
    );
};

export default CVForm;
