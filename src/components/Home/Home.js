import React from 'react'
import './Home.css';

const Home = () => {
    return (
        <div className='Home-continer'>
            <div className='Home-content'>
                <h1>Engineers & Contractors</h1>
                <p>
                    Vitae turpis massa sed elementum tempus egestas sed sed.
                    Blandit massa enim nec dui nunc mattis enim.
                </p>
            </div>
            <div className='Home-button'>
                <button type="">Buling</button>
                <button type="">Commercial</button>
                <button type="">Transportation</button>
                <button type="">Industrial</button>
            </div>
        </div>
    );
}

export default Home;