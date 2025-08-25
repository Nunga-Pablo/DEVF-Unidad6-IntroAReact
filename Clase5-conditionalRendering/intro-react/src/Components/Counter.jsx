import React from "react";
import '../css/Counter.css'

export default function Counter({counter, setCounter}){

    function handleSubstracButton(){
        if(counter <= 0){
            return;
        }
        setCounter(counter - 1)
    }

    function handleAddingButton(){
        setCounter(counter + 1)
    }


    return(
        <div className="counter-container">
            <button onClick={() => {handleSubstracButton()}}>-</button>
            <h1>{counter}</h1>
            <button onClick={() => handleAddingButton()}>+</button>
        </div>
    )
}