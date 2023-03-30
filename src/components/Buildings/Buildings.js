import React from 'react'
import { TbBulb } from "react-icons/tb";
import { IoDiamondOutline } from "react-icons/io5";
import { TbSpeakerphone } from "react-icons/tb";
import { TfiUser } from "react-icons/tfi";
import './Buildings.css';
const Buildings = () => {
    return (
        <div className='Buildings-continer'>
            <div className='Buildings-content'>
                <h1>Building a Legacy of Success</h1>
            </div>
            <div className='Buildings-sec'>
                <div className='sec-one'>
                    <i className='Buildings-icon-one'><TbBulb/></i>
                    <h2>STRATEGY</h2>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur
                    </p>
                    <a href="#">MORE</a>
                </div>
                <div className='sec-two'>
                    <i className='Buildings-icon-two'><TbSpeakerphone/></i>
                    <h2>RESULTS</h2>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur
                    </p>
                    <a href="#">MORE</a>
                </div>
                <div className='sec-three'>
                    <i className='Buildings-icon-three'><IoDiamondOutline/></i>
                    <h2>EXPERTISE</h2>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur
                    </p>
                    <a href="#">MORE</a>
                </div>
                <div className='sec-four'>
                    <i className='Buildings-icon-four'><TfiUser/></i>
                    <h2>SUPPORT</h2>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur
                    </p>
                    <a href="#">MORE</a>
                </div>
            </div>
        </div>
    );
}

export default Buildings;