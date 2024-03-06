const List = (props) => {
    const {persons} = props;
    return (
        <>
            {persons.map((pers, i) => {
                return (<p key={i}>{pers.name}'s Number: {pers.number}</p>)
            })}
        </>
    );
}

export default List;