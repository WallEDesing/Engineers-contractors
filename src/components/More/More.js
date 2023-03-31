import React from 'react'
import './More.css';
const More = () => {
    return (
        <div className='More-continer'>
            <div className='More-content-left-side'>
                <p>
                    We are one of the largest construction and development companies in the world,
                    and we want to improve society and the future through our efforts and expertise.
                </p>
            </div>
            <div className='More-content-right-side' >
                <p>
                    Etiam et nunc scelerisque, venenatis turpis quis, tempor nunc.
                    Nunc in bibendum arcu. Nulla sed velit imperdiet ex sollicitudin scelerisque. Maecenas et ligula enim. Integer pretium, metus ac fringilla congue, mauris diam faucibus leo, quis ornare enim.
                    Sed porttitor consequat massa, in volutpat dui tristique non.
                    In rhoncus tortor fermentum
                </p>
                <button className='More-content-right-side-button' type="button">MORE</button>
            </div>
        </div>
    );
}

export default More;