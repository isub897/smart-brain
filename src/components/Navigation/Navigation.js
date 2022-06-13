import React from "react";
import './Navigation.css'

const Navigation = ({onRouteChange}) => {
    return(
        <div className="Navigation pa3">
            <div 
                onClick={()=> onRouteChange('signin')}
                className="nav-box f3 link dim black-90 pointer shadow-5 pa2 br2">
                Navigation
            </div>
        </div>
    )
}

export default Navigation;