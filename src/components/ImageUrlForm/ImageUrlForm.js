import React from "react";
import './ImageUrlForm.css'

const ImageUrlForm = () => {
    return(
        <div className="ImageUrlForm">
            <main className="pa4 black-80">
            <form className="measure center">
                <div className="mt3">
                    <input 
                        className="pv2 input-reset ba br2 w-70" 
                        type="email" 
                        name="email-address shadow-5"  
                        id="email-address"
                        placeholder="Enter your Image URL here"/>
                    <input className="submit b pv2 input-reset ba b--white br2 white w-30 pointer dib shadow-5" type="submit" value="Submit"/>
                </div>
            </form>
            </main>
        </div>
    )
}

export default ImageUrlForm;