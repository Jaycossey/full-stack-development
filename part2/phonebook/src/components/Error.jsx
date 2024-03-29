const Error = (props) => {
    const {message} = props;

    if(!message) {
        return null;
    } else {
        return (
            <div className="error">
                {message}
            </div>
        )
    }
}

export default Error;