// 1. Import createContext from react
import { createContext } from "react";
import ContextComponent from "./ContextComponent";

// 2. Create instance of createContenxt
export const Data1 = createContext();
export const Data2 = createContext();

const UseContextComponent = () => {

    const name = "Use context : Name";
    const age = "Use context : Age";

    return (

        // 3. Wrap the component with Provider component
        <>
            <Data1.Provider value={name}>

                <Data2.Provider value={age}>

                    <ContextComponent />

                </Data2.Provider>


            </Data1.Provider>


        </>
    )
}

export default UseContextComponent