

const EventsUse = () => {

    const handleClick = () => {
        alert('You clicked me!')
    }

    const handleLog = (a,b) => {
        console.log(a+b);
    }


    return (
        <>
            <br/>
            <button onClick={handleClick}>Click Me</button>
            <br/>
            <br/>
            <button onClick={() => handleLog(2,2)}>I log 4</button>
        </>
    )
}

export default EventsUse