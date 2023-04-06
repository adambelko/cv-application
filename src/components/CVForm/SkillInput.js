const SkillInput = ({ name, id, changeSkill, removeSkill }) => {
    return (
        <>
            <input
                value={name}
                type="text"
                onChange={(e) => changeSkill(e, id)}
            />
            <button onClick={() => removeSkill(id)}>Delete</button>
        </>
    );
};

export default SkillInput;
