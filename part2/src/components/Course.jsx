const Course = (props) => {
    console.log(props.course.parts);
    const parts = props.course.parts;
    return (
        <>
        <h1>{props.course.name}</h1>
            {parts.map((part) => {
                return (<p>{part.name} {part.exercises}</p>)
            })}
        </>
    );
}

export default Course;