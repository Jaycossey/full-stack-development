const List = (props) => {
    const {persons, onClick} = props;
    return (
        <>
            {persons.map((pers, i) => {
                return (
                    <div  key={pers.id}>
                        <p>{pers.name}'s Number: {pers.number}</p>
                        <button onClick={() => onClick(pers.id)} type="button">Delete</button>
                    </div>
                    )
            })}
        </>
    );
}

export default List;