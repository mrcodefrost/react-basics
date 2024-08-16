import { useRef } from "react"


const UseRefComponent = () => {

    const inputElement = useRef(null);

    const focusInput = () => {
        inputElement.current.focus();
        inputElement.current.value = "Focus";
    }

    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={() => focusInput()}>Focus and write focus</button>
        </>
    )
}
export default UseRefComponent