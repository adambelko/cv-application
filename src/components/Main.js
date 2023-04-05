import { useState } from "react";
import uniqid from "uniqid";
import CVForm from "./CVForm/CVForm";
import CVPreview from "./CVPreview/CVPreview";
import { emptyCV } from "./utils/emptyCV";

const Main = () => {
    const [cv, setCV] = useState(emptyCV);
    const [skill, setSkill] = useState({ id: "", name: "" });
    const [skills, setSkills] = useState([]);

    const handleChangeGeneral = (e) => {
        setCV({
            ...cv,
            generalInfo: { ...cv.generalInfo, [e.target.name]: e.target.value },
        });
    };

    const handleChangeSkill = (e) => {
        setSkill({ id: uniqid(), name: e.target.value });
    };

    const handleChangeExistingSkill = (e, id) => {
        // find object - skill, that match with the id like example below
        const test = skills.map((s) => {
            if (s.id === id) return (s.name = e.target.value);
        });

        // And need to change "name" value inside of it,
        // then update setSkills() and setCV()

        // setCV({
        //     ...cv,
        //     workExperience: {
        //         ...cv.workExperience,
        //         skills: updatedSkills,
        //     },
        // });
    };

    const addSkill = (e) => {
        const updatedSkills = [...skills, skill];
        setSkills(updatedSkills);
        setCV({
            ...cv,
            workExperience: {
                ...cv.workExperience,
                skills: updatedSkills,
            },
        });
        setSkill({ id: "", name: "" });
    };

    const removeSkill = (id) => {
        const updatedSkills = skills.filter((s) => s.id !== id);
        setSkills(updatedSkills);
        setCV({
            ...cv,
            workExperience: {
                ...cv.workExperience,
                skills: updatedSkills,
            },
        });
    };

    return (
        <main>
            <div className="main__cv-wrapper">
                <CVForm
                    onChangeGeneral={handleChangeGeneral}
                    onChangeSkill={handleChangeSkill}
                    onChangeExistingSkill={handleChangeExistingSkill}
                    onClickAddSkill={addSkill}
                    handleRemoveSkill={removeSkill}
                    skill={skill}
                    cv={cv}
                />
                <CVPreview cv={cv} skill={skill} />
            </div>
        </main>
    );
};

export default Main;
