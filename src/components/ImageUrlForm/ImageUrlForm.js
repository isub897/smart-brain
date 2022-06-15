import React from "react";
import './ImageUrlForm.css'

const ImageUrlForm = ({urlFailure, onSubmit, onInputChange}) => {

    const onKeyPress = (event) => {
        if(event.code === "Enter") {
            onSubmit();
        }  
    }

    return(
        <div className="ImageUrlForm">
            <main className="pa4 black-80">
            <div className="measure center">
                <div className="mt3">
                    <input 
                        onKeyDown={onKeyPress}
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
                    ? <div className="error gold pt2 tl f6">Please enter a vaild URL address.</div>
                    : <div></div>
                }
            </div>
            </main>
        </div>
    )
}

export default ImageUrlForm;