import React from "react"; 

const HomePage = props => { 
    console.log(props.state);
    console.log(props.risk);
    return (
        <>
            <button onClick={() => props.setRiskLevel(1)}>1</button>
            <button onClick={() => props.setRiskLevel(2)}>2</button>
            <button onClick={() => props.setRiskLevel(3)}>3</button>
            <button onClick={() => props.setRiskLevel(4)}>4</button>
            <button onClick={() => props.setRiskLevel(5)}>5</button>
            <button onClick={() => props.setRiskLevel(6)}>6</button>
            <button onClick={() => props.setRiskLevel(7)}>7</button>
            <button onClick={() => props.setRiskLevel(8)}>8</button>
            <button onClick={() => props.setRiskLevel(9)}>9</button>
            <button onClick={() => props.setRiskLevel(10)}>10</button>
        </>
    )
};

export default HomePage;