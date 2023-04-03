import { useState } from "react";
import CVForm from "./CVForm/CVForm";
import CVPreview from "./CVPreview/CVPreview";

const Main = () => {
    const generalInfo = {
        fullName: "",
        email: "",
        phone: "",
        address: "",
    };
    const [general, setGeneral] = useState(generalInfo);

    const handleChangeGeneral = (e) => {
        setGeneral({ ...general, [e.target.name]: e.target.value });
    };

    return (
        <main>
            <div className="main__cv-wrapper">
                <CVForm handleChangeGeneral={handleChangeGeneral} />
                <CVPreview general={general} />
            </div>
        </main>
    );
};

export default Main;
