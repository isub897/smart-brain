import React from "react";

const CountMessage = () => {
    return(
        <div className="CountMessage">
            <header className="greeting f3 pa3 ma0">
                    <p className="ba ma0 pa3">
                        {`Hello Ivan, your current upload Count is...`}
                    </p>
                    <p className="f1 ba ma0">
                        5
                    </p>
            </header>
        </div>
    )
}

export default CountMessage;