import { useContext } from "react";
import { Data1, Data2 } from "./UseContextComponent";


const ContextComponent = () => {

    const name = useContext(Data1);
    const age = useContext(Data2);


    return (
        <>
            <h1>
                My name is {name}, I am {age} years old.
            </h1>

        </>
    )
}

export default ContextComponent