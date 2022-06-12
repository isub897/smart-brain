import React from "react";
import brain from './brain.png'
import Tilt from 'react-tilt';
import './Logo.css';

const Logo = () => {
    return(
        <div className="Logo">
            <Tilt className="Til ma3 shadow-5 br3" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pv4 br3 pointer">
                    <img alt="logo" src={brain} /> 
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;