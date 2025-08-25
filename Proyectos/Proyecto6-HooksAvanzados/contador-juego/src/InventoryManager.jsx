import { useReducer, useRef, useCallback, useState, useEffect } from "react";

// Recuperar productos desde localStorage al cargar
const getInitialState = () => 
{
    const storedProducts = localStorage.getItem("inventoryProducts");
    return {
        products: storedProducts ? JSON.parse(storedProducts) : []
    };
};

function reducer(state, action) 
{
    switch (action.type) 
    {
        case "add":
            return {
                products: [...state.products, 
                {
                    id: Date.now(),
                    name: action.name,
                    quantity: 1
                }]
            };
        case "increment":
            return {
                products: state.products.map(p =>
                    p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
                )
            };
        case "decrement":
            return {
                products: state.products.map(p =>
                    p.id === action.id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
                )
            };
        case "remove":
            return {
                products: state.products.filter(p => p.id !== action.id)
            };
        case "clear":
            return { products: [] }; // 👈 Vaciar inventario
        default:
            return state;
    }
}

function InventoryManager() 
{
    const [state, dispatch] = useReducer(reducer, undefined, getInitialState);
    const [searchTerm, setSearchTerm] = useState("");
    const inputRef = useRef(null);

    const handleIncrement = useCallback((id) => 
    {
        dispatch({ type: "increment", id });
    }, []);

    const handleDecrement = useCallback((id) => 
    {
        dispatch({ type: "decrement", id });
    }, []);

    const handleAddProduct = () => 
    {
        const value = inputRef.current.value.trim();
        if (value !== "") {
            dispatch({ type: "add", name: value });
            inputRef.current.value = "";
        }
    };

    const handleClearInventory = () => 
    {
        dispatch({ type: "clear" });
        localStorage.removeItem("inventoryProducts"); 
    };

    useEffect(() => 
    {
        localStorage.setItem("inventoryProducts", JSON.stringify(state.products));
    }, [state.products]);

    const filteredProducts = state.products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2>Gestor de Inventario</h2>

            {/* Buscador */}
            <input
                type="text"
                placeholder="Buscar producto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: "1rem", display: "block" }}
            />

            {/* Agregar producto */}
            <input ref={inputRef} type="text" placeholder="Nombre del producto" />
            <button onClick={handleAddProduct}>Agregar Producto</button>

            {/* Vaciar inventario */}
            <button onClick={handleClearInventory} style={{ marginLeft: "10px", color: "red" }}>
                Vaciar Inventario
            </button>

            {/* Lista de productos */}
            <ul>
                {filteredProducts.map((product) => 
                (
                    <li key={product.id}>
                        {product.name} - Cantidad: {product.quantity}
                        <button onClick={() => handleIncrement(product.id)}>+</button>
                        <button onClick={() => handleDecrement(product.id)}>-</button>
                        <button onClick={() => dispatch({ type: "remove", id: product.id })}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default InventoryManager;
