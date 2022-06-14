import React from "react";

const CountMessage = ({user}) => {
    return(
        <div className="CountMessage">
            <header className="greeting f3 pa3 ma0">
                    <p className="ma0 pa3">
                        {`Hello ${user.name}, your current upload Count is...`}
                    </p>
                    <p className="f1 ma0">
                        {user.entries}
                    </p>
            </header>
        </div>
    )
}

export default CountMessage;