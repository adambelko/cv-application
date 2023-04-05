import Experience from "./Experience";
import General from "./General";

const CVPreview = ({ cv, skill }) => {
    return (
        <div className="main__cv--preview">
            <General cv={cv} />
            <Experience cv={cv} skill={skill} />
        </div>
    );
};

export default CVPreview;
