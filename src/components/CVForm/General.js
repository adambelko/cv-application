const GeneralInfo = ({ onChangeGeneral }) => {
    return (
        <section>
            <h2>General Information</h2>
            {/* Full name */}
            <label htmlFor="input--fullName"></label>
            <input
                onChange={onChangeGeneral}
                type="text"
                id="input--fullName"
                placeholder="Full name"
                name="fullName"
            />
            {/* Email */}
            <label htmlFor="input--email"></label>
            <input
                onChange={onChangeGeneral}
                type="text"
                id="input--email"
                placeholder="Email"
                name="email"
            />
            {/* Phone */}
            <label htmlFor="input--phone"></label>
            <input
                onChange={onChangeGeneral}
                type="number"
                id="input--phone"
                placeholder="Phone"
                name="phone"
            />
            {/* Address */}
            <label htmlFor="input--address"></label>
            <input
                onChange={onChangeGeneral}
                type="text"
                id="input--address"
                placeholder="Address"
                name="address"
            />
        </section>
    );
};

export default GeneralInfo;
