import { useState } from "react"

const Form = () => {

    const [username, setUsername] = useState("");

    const handleChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`You typed: ${username}`);
        setUsername("");
    };



  return (
    <>
    <h1>Form Demo</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleChange} />
        <br/>
        <br/>
        <button>Submit</button>
    </form>
    </>
  )
}

export default Form