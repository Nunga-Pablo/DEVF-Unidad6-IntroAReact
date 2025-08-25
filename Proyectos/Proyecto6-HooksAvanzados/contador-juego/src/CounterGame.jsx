import { useReducer, useRef, useCallback, useEffect, useState } from "react";

// Función para recuperar el estado inicial desde localStorage (si existe)
const getInitialState = () => {
    const storedHistory = localStorage.getItem("counterHistory");
    const storedCount = localStorage.getItem("counterValue");

    return {
        count: storedCount ? parseInt(storedCount, 10) : 0,
        history: storedHistory ? JSON.parse(storedHistory) : []
    };
};

function reducer(state, action) {
    switch (action.type) {
        case "increment": {
            const value = action.payload || 1;
            const newCount = state.count + value;
            return {
                count: newCount,
                history: [...state.history, `+${value} (Nuevo valor: ${newCount})`]
            };
        }
        case "decrement": {
            const newCount = state.count - 1;
            return {
                count: newCount,
                history: [...state.history, `-1 (Nuevo valor: ${newCount})`]
            };
        }
        case "undo": {
            if (state.history.length === 0) return state;

            const lastAction = state.history[state.history.length - 1];
            let newCount = state.count;

            const match = lastAction.match(/^([+-])(\d+)/);
            if (match) {
                const operator = match[1];
                const value = parseInt(match[2], 10);
                newCount = operator === "+" ? newCount - value : newCount + value;
            }

            return {
                count: newCount,
                history: state.history.slice(0, -1)
            };
        }
        case "reset":
            return { count: 0, history: [] };
        default:
            return state;
    }
}

function CounterGame() {
    const [state, dispatch] = useReducer(reducer, undefined, getInitialState);
    const [incrementAmount, setIncrementAmount] = useState(1);
    const incrementBtnRef = useRef(null);

    // Guardar en localStorage cada vez que cambie el estado
    useEffect(() => {
        localStorage.setItem("counterHistory", JSON.stringify(state.history));
        localStorage.setItem("counterValue", state.count.toString());
    }, [state.history, state.count]);

    const handleIncrement = useCallback(() => {
        const value = parseInt(incrementAmount, 10) || 0;
        dispatch({ type: "increment", payload: value });
    }, [incrementAmount]);

    const handleDecrement = useCallback(() => {
        dispatch({ type: "decrement" });
    }, []);

    const handleUndo = useCallback(() => {
        dispatch({ type: "undo" });
    }, []);

    const handleReset = useCallback(() => {
        dispatch({ type: "reset" });
    }, []);

    useEffect(() => {
        incrementBtnRef.current?.focus();
    }, []);

    return (
        <div>
            <h2>Contador: {state.count}</h2>

            <label>
                Incrementar por:
                <input
                    type="number"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                    style={{ width: "60px", marginLeft: "10px" }}
                />
            </label>

            <div style={{ marginTop: "10px" }}>
                <button ref={incrementBtnRef} onClick={handleIncrement}>+</button>
                <button onClick={handleDecrement}>-</button>
                <button onClick={handleUndo} disabled={state.history.length === 0}>Deshacer</button>
                <button onClick={handleReset}>Reiniciar</button>
            </div>

            <h3>Historial de cambios:</h3>
            <ul>
                {state.history.map((entry, index) => (
                    <li key={index}>{entry}</li>
                ))}
            </ul>
        </div>
    );
}

export default CounterGame;