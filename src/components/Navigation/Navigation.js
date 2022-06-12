import React from "react";

const Navigation = ({onRouteChange}) => {
    return(
        <div className="Navigation tr pa3">
            <div 
                onClick={()=> onRouteChange('signin')}
                className="f3 link dim black-90 pointer">
                Navigation
            </div>
        </div>
    )
}

export default Navigation;