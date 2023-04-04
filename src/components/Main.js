import { useState } from "react";
import uniqid from "uniqid";
import CVForm from "./CVForm/CVForm";
import CVPreview from "./CVPreview/CVPreview";
import { emptyCV } from "./utils/emptyCV";

const Main = () => {
    const [cv, setCV] = useState(emptyCV);
    const [skill, setSkill] = useState("");
    const [skills, setSkills] = useState([]);

    const handleChangeGeneral = (e) => {
        setCV({
            ...cv,
            generalInfo: { ...cv.generalInfo, [e.target.name]: e.target.value },
        });
    };

    const handleChangeSummary = (e) => {
        setCV({
            ...cv,
            experience: { ...cv.experience, summary: e.target.value },
        });
    };

    const handleChangeSkill = (e) => {
        setSkill(e.target.value);
    };

    const addSkill = (e) => {
        e.preventDefault();
        const updatedSkills = [...skills, { id: uniqid(), skill: skill }];
        setSkills(updatedSkills);
        setCV({
            ...cv,
            experience: {
                ...cv.experience,
                skills: updatedSkills,
            },
        });
        setSkill("");
    };

    const handleRemoveSkill = (id) => {
        const updatedSkills = [skills.filter((s) => s.id !== id)];
        setSkill(updatedSkills);
        setCV({
            ...cv,
            experience: {
                ...cv.experience,
                skills: updatedSkills,
            },
        });
    };

    return (
        <main>
            <div className="main__cv-wrapper">
                <CVForm
                    onChangeGeneral={handleChangeGeneral}
                    onChangeSummary={handleChangeSummary}
                    onChangeSkill={handleChangeSkill}
                    onClickAddSkill={addSkill}
                    handleRemoveSkill={handleRemoveSkill}
                    skill={skill}
                    cv={cv}
                />
                <CVPreview cv={cv} />
            </div>
        </main>
    );
};

export default Main;
