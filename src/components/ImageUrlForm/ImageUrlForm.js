import React from "react";
import './ImageUrlForm.css'

const ImageUrlForm = ({urlFailure, onSubmit, onInputChange}) => {
    return(
        <div className="ImageUrlForm">
            <main className="pa4 black-80">
            <form className="measure center">
                <div className="mt3">
                    <input 
                        onChange={onInputChange}
                        className="pv2 input-reset ba br2 w-70" 
                        type="text" 
                        placeholder="Enter your Image URL here"/>
                    <input 
                        onClick={onSubmit}
                        className="submit b pv2 input-reset ba b--white br2 white w-30 pointer dib shadow-5" 
                        type="button" 
                        value="Submit"/>
                </div>
                {urlFailure
                    ? <div className="error gold b pt2 tl">Please enter a vaild URL address.</div>
                    : <div></div>
                }
            </form>
            </main>
        </div>
    )
}

export default ImageUrlForm;