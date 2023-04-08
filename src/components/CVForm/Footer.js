const Footer = ({ resetForm, print }) => {
    return (
        <div className="form-button-wrapper">
            <button
                className="form-reset-btn"
                type="button"
                onClick={resetForm}
            >
                Reset Form
            </button>
            <button className="form-download-btn" type="button" onClick={print}>
                Download PDF
            </button>
        </div>
    );
};

export default Footer;
