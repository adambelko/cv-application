import GeneralInfo from "./General";

const CVForm = ({ handleChangeGeneral }) => {
    return (
        <>
            <form className="main__cv--form">
                <GeneralInfo handleChangeGeneral={handleChangeGeneral} />
            </form>
        </>
    );
};

export default CVForm;
