const SingleInput = ({ name, placeholder, id, change, remove }) => {
    return (
        <div className="form-single-input">
            <input
                value={name}
                type="text"
                placeholder={placeholder}
                onChange={(e) => change(e, id)}
            />
            <button onClick={() => remove(id)}>Delete</button>
        </div>
    );
};

export default SingleInput;
