const Course = (props) => {
    console.log(props.course.parts);
    const parts = props.course.parts;

    let total = parts.reduce((s, p) => {
        return s + p.exercises;
    }, 0);

    return (
        <>
        <h1>{props.course.name}</h1>
            
            {parts.map((part) => {
                return (<p key={part.key}>{part.name} {part.exercises}</p>)
            })}

        <p>Total Exercises: {total}</p>
        </>
    );
}

export default Course;