import General from "./General";
import Skills from "./Skills";

const CVPreview = ({ cv }) => {
    return (
        <div className="main__cv--preview">
            <General cv={cv} />
            <Skills cv={cv} />
        </div>
    );
};

export default CVPreview;
