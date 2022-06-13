import React from "react";
import './Navigation.css'

const Navigation = ({route, onRouteChange}) => {
    return(
        <div className="Navigation pa3">
            <div 
                onClick={
                    route === "signin"
                        ? ()=> onRouteChange('register')
                        : ()=> onRouteChange('signin')
                }
                className="nav-box f3 link dim black-90 pointer shadow-5 ph3 pv2 br2">
                {route === "signin"
                    ? `Register`
                    : (route === "register"
                        ? `< Go Back`
                        : `< Sign Out`
                    )
                }
            </div>
        </div>
    )
}

export default Navigation;