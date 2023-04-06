import uniqid from "uniqid";

export const emptyCV = {
    generalInfo: {
        fullName: "",
        email: "",
        phone: "",
        address: "",
        professionalSummary: "",
    },
    skills: [{ id: uniqid(), name: "" }],
    qualificationSummary: [{ id: uniqid(), name: "" }],
    workExperience: [{ id: uniqid(), position: "", addInfo: "" }],
};
