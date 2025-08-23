import { useEffect, useMemo } from "react";
import { useState } from "react";

export default function FilterableList ()
{
    const [searchInput, setSearchInput] = useState("");
    const [items, setItems] = useState([]);

    useEffect(() => 
    {
        const fetchData = async () => 
        {
            try
            {
                await new Promise(resolve => setTimeout(resolve, 2000))
                
                const data = 
                [
                    {
                        name: "Pablo",
                        lastname: "Nungaray",
                        id: 1
                    },
                    {
                        name: "Pamela",
                        lastname: "Cuevas",
                        id: 2
                    },
                    {
                        name: "Diego",
                        lastname: "Miguel",
                        id: 3
                    },
                    {
                        name: "Bryan",
                        lastname: "Vargas",
                        id: 4
                    }
                ]
                setItems(data);
            } 
            catch (error) 
            {
                console.error(error);
            }
        };

        fetchData();

        return () => console.log("Desmontando componente");

    }, [])

    const filteredItems = useMemo(() => 
    {
        return items.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()) || item.lastname.toLowerCase().includes(searchInput.toLowerCase()));
    }, [items, searchInput]);

    return (
        <div>
            <h1>Lista filtrable de nombres</h1>
            <input 
                type="text"
                placeholder = "Busca un nombre"
                value = {searchInput}
                onChange = {(e) => setSearchInput(e.target.value)}
            />
            
            <ul>
                {filteredItems.map(item => (
                    <li>
                        <p>{item.name} {item.lastname}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}