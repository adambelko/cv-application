const SingleInput = ({ name, id, change, remove }) => {
    return (
        <>
            <input value={name} type="text" onChange={(e) => change(e, id)} />
            <button onClick={() => remove(id)}>Delete</button>
        </>
    );
};

export default SingleInput;
