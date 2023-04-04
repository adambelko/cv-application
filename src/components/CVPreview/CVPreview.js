import Experience from "./Experience";
import General from "./General";

const CVPreview = ({ cv }) => {
    return (
        <div className="main__cv--preview">
            <General cv={cv} />
            <Experience cv={cv} />
        </div>
    );
};

export default CVPreview;
