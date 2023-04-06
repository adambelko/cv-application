const GeneralInfo = ({ changeGeneral }) => {
    return (
        <section>
            <h2>General Information</h2>
            {/* Full name */}
            <label htmlFor="input--fullName"></label>
            <input
                onChange={changeGeneral}
                type="text"
                id="input--fullName"
                placeholder="Full name"
                name="fullName"
            />
            {/* Email */}
            <label htmlFor="input--email"></label>
            <input
                onChange={changeGeneral}
                type="text"
                id="input--email"
                placeholder="Email"
                name="email"
            />
            {/* Phone */}
            <label htmlFor="input--phone"></label>
            <input
                onChange={changeGeneral}
                type="number"
                id="input--phone"
                placeholder="Phone"
                name="phone"
            />
            {/* Address */}
            <label htmlFor="input--address"></label>
            <input
                onChange={changeGeneral}
                type="text"
                id="input--address"
                placeholder="Address"
                name="address"
            />
            {/* Professional Summary */}
            <label htmlFor="input--professional-summary"></label>
            <textarea
                onChange={changeGeneral}
                id="input--professional-summary"
                rows="4"
                placeholder="Proffesional Summary"
                name="professionalSummary"
            ></textarea>
        </section>
    );
};

export default GeneralInfo;
