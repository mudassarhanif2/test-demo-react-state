import React, { useState } from 'react';
import './Room.css'

function Room() {
    //const state = useState(true);
    //console.log("state =", state)
    const [isLit, setLit] = useState(true);
    let [age, setAge] = useState(29);
    //let Hello = 'Hello '+isLit+'World';
    //let Hello = `Hello ${isLit} World`;
    //const brightness = isLit? 'lit': 'dark';
    return (
    //<div className="room dark">
    //<div className={"room "+ (isLit? 'lit': 'dark')}>
    //<div className={`room ${brightness}`}>
    <div className={`room ${isLit? 'lit': 'dark'}`}>
        This Room is {isLit? 'lit': 'dark'}
        <br />
        Age:{age}
        <br />
        <button onClick={()=> setLit(!isLit)}>Toggle Lit</button>
        <br />
        <button onClick={()=> setAge(++age)}>Increase Age</button>
        
    </div>
    );
}

export default Room;
