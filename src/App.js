import React from 'react'
import User from './components/User'
import Password from './components/Password';
import Cart from './components/Cart';


const userInfoList = [
    {
        name: 'Butcher',
        age: 24,
        skills: 'Hack & Slash'

    },
    {
        name: 'James',
        age: 44,
        skills: 'MI6 Agent'

    },
    {
        name: 'Malory',
        age: 54,
        skills: 'CIA'

    },
];



function App() {
    return (
        <>

            {/* This is how props are used. To access in main
        component- User, just do props.name */}
            <User
                name='React Basics'
                age={23}
                skills={["C++", "Flutter", "Google Cloud"]}>
                <p>The children prop is a special prop in React that holds whatever you include between those tags.</p>
            </User>

            {/* This is how maps are used. */}
            {userInfoList.map(user => (

                <ul key={Math.random() * 10}>
                    <li>
                        {user.name}
                    </li>
                    <li>
                        {user.age}
                    </li>
                    <li>
                        {user.skills}
                    </li>
                </ul>

            ))}

            {/*To use conditional operators like if-else */}
            <Password isValid={true}/>

            {/*To use conditional operators && */}
            <Cart/>
        </>
    )
}

export default App