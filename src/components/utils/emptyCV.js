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
    workExperience: [],
    education: [],
};
