import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>HomePage</h1>
            <h2>dashboard</h2>
            <Link to={"/"}>Home</Link>
            <p></p>
            <Link to={"/about"}>about</Link>
            
        </div>
    );
}

export default HomePage;
