import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
    const {good, neutral, bad, all, average, posPerc} = props.stats;
    
    if (all > 0) return (
        <>
            <h3>Statistics:</h3>
            <table>
                <tbody>
                    <StatisticLine text={`Good: `} value={good} /> 
                    <StatisticLine text={`Neutral: `} value={neutral} /> 
                    <StatisticLine text={`Bad: `} value={bad} /> 
                    <StatisticLine text={`All: `} value={all} /> 
                    <StatisticLine text={`Average: `} value={average} /> 
                    <StatisticLine text={`Percentage: `} value={posPerc} /> 
                </tbody>
            </table>
        </>
    );

    return (
        <>
            <h3>Statistics:</h3>
            No Stats available
        </>
    );
}

export default Statistics;