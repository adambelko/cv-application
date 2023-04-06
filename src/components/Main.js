import { useState } from "react";
import uniqid from "uniqid";
import CVForm from "./CVForm/CVForm";
import CVPreview from "./CVPreview/CVPreview";
import { emptyCV } from "./utils/emptyCV";

const Main = () => {
    const [cv, setCV] = useState(emptyCV);

    const handleChangeGeneral = (e) => {
        setCV({
            ...cv,
            generalInfo: { ...cv.generalInfo, [e.target.name]: e.target.value },
        });
    };

    const handleChangeSkill = (e, id) => {
        setCV({
            ...cv,
            skills: cv.skills.map((skill) =>
                skill.id === id ? { ...skill, name: e.target.value } : skill
            ),
        });
    };

    const handleAddSkill = (e) => {
        const id = uniqid();
        setCV({ ...cv, skills: [...cv.skills, { id: id, name: "" }] });
    };

    const handleRemoveSkill = (id) => {
        setCV({ ...cv, skills: cv.skills.filter((skill) => skill.id !== id) });
    };

    return (
        <main>
            <div className="main__cv-wrapper">
                <CVForm
                    handleChangeGeneral={handleChangeGeneral}
                    handleChangeSkill={handleChangeSkill}
                    handleAddSkill={handleAddSkill}
                    handleRemoveSkill={handleRemoveSkill}
                    cv={cv}
                />
                {console.log(cv)}
                <CVPreview cv={cv} />
            </div>
        </main>
    );
};

export default Main;
