const GroupInput = ({ position, addInfo, id, change, remove }) => {
    return (
        <>
            <input
                value={position}
                name="position"
                id={id}
                type="text"
                placeholder="Position"
                onChange={change}
            />
            <input
                value={addInfo}
                name="addInfo"
                id={id}
                type="text"
                placeholder="Additional Information"
                onChange={change}
            />
            <button type="button" onClick={() => remove(id)}>
                Delete
            </button>
        </>
    );
};

export default GroupInput;
