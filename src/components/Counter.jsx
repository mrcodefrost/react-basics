import { useState } from "react";

const Counter = () => {

    // Updating numbers
    const [count, setCount] = useState(0);

    const increment = () => { setCount(count + 1); };
    const decrement = () => { setCount(count - 1); };

    // Updating strings
    const [username, setUsername] = useState('String');

    const updateString = () => { setUsername('Updated String') };

    // Updating arrays 
    const [friends, setFriends] = useState(['Almara', 'Carter', 'Jack']);

    const addFriend = () => setFriends([...friends, "Louis"]); // using spread operator here since copy of friends is not created
    const removeFriend = () => setFriends(friends.filter((f) => f !== 'Jack')); // filter and map automatically creates the copy of friends
    const updateFriend = () => setFriends(friends.map((f) => (f === "Louis" ? "Louis Phillipe" : f)));

    // Updating objects
    const [movie, setMovie] = useState(
        {
            title: "Equalizer",
            ratings: 7,
        }
    );

    const changeRating = () => {
        const copyMovie = {
            ...movie, // ... is used to pass the copy of movie ( required )
            ratings: 5,
        };
        setMovie(copyMovie);

        // shorter way to write same thing
        setMovie({ ...movie, ratings: 3 });
    };

    // Updating array of objects
    const [movies, setMovies] = useState([
        { id: 1, title: 'Superman', ratings: 7 },
        { id: 2, title: 'Wolverine', ratings: 4 },
    ]);

    const updateMovieRating = () => {
        setMovies(
            movies.map((movie) => (movie.title === 'Wolverine' ? { ...movie, ratings: 2 } : movie))
        );
    }

    return (
        <>

            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>

            <h1>{username}</h1>
            <button onClick={updateString}>Update String</button>
            <br />

            {friends.map((f) => (
                <li key={Math.random()}>
                    {f}
                </li>
            ))}

            <button onClick={addFriend}>Add Louis</button>
            <button onClick={removeFriend}>Remove Jack</button>
            <button onClick={updateFriend}>Update Louis</button>
            <br />

            <h1>{movie.title}</h1>
            <p>Ratings: {movie.ratings}</p>
            <button onClick={changeRating}>Change rating</button>
            <br />
            <br />


            {
                movies.map((movie => (
                    <li key={Math.random()}>
                        {movie.title} : {movie.ratings}

                    </li>
                )))
            }
            <br />
            <button onClick={updateMovieRating}>Update Wolverine ratings</button>
            <br />


        </>
    )
}

export default Counter