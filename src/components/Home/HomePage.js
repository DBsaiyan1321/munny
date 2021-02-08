import React from "react"; 
import Nav from "../Nav/Nav";

const HomePage = props => { 
    console.log(props.state);
    console.log(props.risk);
    return (
        <>
            <Nav />
            <div>
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
            </div>
        </>
    )
};

export default HomePage;