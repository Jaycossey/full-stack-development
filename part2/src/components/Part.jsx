const Part = (props) => {
    console.log("Props in Part:", props);
    const { part } = props;

    return (
        <p>{part.name} {part.exercises}</p>
    );
}

export default Part;