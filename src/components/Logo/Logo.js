import React from "react";
import brain from './brain.png'
import Tilt from 'react-tilt';

const Logo = () => {
    return(
        <div className="Logo ba">
            <Tilt className="Til ma3" options={{ max : 50 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner pa2 pointer">
                    <img alt="logo" src={brain} /> 
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;