import { useEffect, useState } from "react"

// Primarily used for fetching data
const UseEffectComponent = () => {

    const [count, setCount] = useState(0);

    // 1. Renders for the first time
    // 2. Renders every time component is re-rendered
    // 3. Dependency List - if empty = called once, if set to count = called when count changes, if 

    useEffect(() => {
        console.log(`Hey from useEffect ${count}`);
        document.title = `React Basics - ${count}`;
    }, [count]);


    // Hitting API with useEffect

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {

            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();

            if (data && data.length) {
                setData(data);
            }
        }

        getData();
    }, []);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Click Me</button>

            <h1>API RESULTS</h1>

            <ul>
                {
                    data.map(result => (
                        <li key={Math.random()}>
                            {result.title}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default UseEffectComponent