import Experience from "./Experience";
import GeneralInfo from "./General";

const CVForm = ({
    onChangeGeneral,
    onChangeSummary,
    onChangeSkill,
    onClickAddSkill,
    handleRemoveSkill,
    skill,
    cv,
}) => {
    return (
        <form className="main__cv--form">
            <GeneralInfo onChangeGeneral={onChangeGeneral} />
            <Experience
                onChangeSummary={onChangeSummary}
                onChangeSkill={onChangeSkill}
                onClickAddSkill={onClickAddSkill}
                handleRemoveSkill={handleRemoveSkill}
                skill={skill}
                cv={cv}
            />
        </form>
    );
};

export default CVForm;
