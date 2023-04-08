import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import uniqid from "uniqid";
import CVForm from "./CVForm/CVForm";
import CVPreview from "./CVPreview/CVPreview";
import { emptyCV } from "./utils/emptyCV";

const Main = () => {
    const [cv, setCV] = useState(emptyCV);
    const cvPreviewRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => cvPreviewRef.current,
    });

    const handleChangeGeneral = (e) => {
        setCV({
            ...cv,
            generalInfo: { ...cv.generalInfo, [e.target.name]: e.target.value },
        });
    };

    // Skills
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

    // Qualification
    const handleChangeQualification = (e, id) => {
        setCV({
            ...cv,
            qualificationSummary: cv.qualificationSummary.map((q) =>
                q.id === id ? { ...q, name: e.target.value } : q
            ),
        });
    };

    const handleAddQualification = (e) => {
        const id = uniqid();
        setCV({
            ...cv,
            qualificationSummary: [
                ...cv.qualificationSummary,
                { id: id, name: "" },
            ],
        });
    };

    const handleRemoveQualification = (id) => {
        setCV({
            ...cv,
            qualificationSummary: cv.qualificationSummary.filter(
                (q) => q.id !== id
            ),
        });
    };

    // Work Experience
    const handleChangeWorkExperience = (e) => {
        const { name, id } = e.target;
        setCV({
            ...cv,
            workExperience: cv.workExperience.map((exp) =>
                exp.id === id ? { ...exp, [name]: e.target.value } : exp
            ),
        });
    };

    const handleAddWorkExperience = () => {
        setCV({
            ...cv,
            workExperience: [
                ...cv.workExperience,
                { id: uniqid(), position: "", addInfo: "" },
            ],
        });
    };

    const handleRemoveWorkExperience = (id) => {
        setCV({
            ...cv,
            workExperience: cv.workExperience.filter((exp) => exp.id !== id),
        });
    };

    const handleResetForm = () => setCV(emptyCV);

    return (
        <main>
            <div className="main__cv-wrapper">
                <CVForm
                    handleChangeGeneral={handleChangeGeneral}
                    handleChangeSkill={handleChangeSkill}
                    handleAddSkill={handleAddSkill}
                    handleRemoveSkill={handleRemoveSkill}
                    handleChangeQualification={handleChangeQualification}
                    handleAddQualification={handleAddQualification}
                    handleRemoveQualification={handleRemoveQualification}
                    handleChangeWorkExperience={handleChangeWorkExperience}
                    handleAddWorkExperience={handleAddWorkExperience}
                    handleRemoveWorkExperience={handleRemoveWorkExperience}
                    handleResetForm={handleResetForm}
                    handlePrint={handlePrint}
                    cv={cv}
                />
                <CVPreview cv={cv} ref={cvPreviewRef} />
            </div>
        </main>
    );
};

export default Main;
