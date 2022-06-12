import React from "react";
import './ImageUrlForm.css'

const ImageUrlForm = () => {
    return(
        <div className="ImageUrlForm">
            <main class="pa4 black-80">
            <form class="measure center">
                <div class="mt3">
                    <input 
                        class="pv2 input-reset ba br2 w-70" 
                        type="email" 
                        name="email-address shadow-5"  
                        id="email-address"
                        placeholder="Enter your Image URL here"/>
                    <input class="submit b pv2 input-reset ba b--white br2 white w-30 pointer dib shadow-5" type="submit" value="Submit"/>
                </div>
            </form>
            </main>
        </div>
    )
}

export default ImageUrlForm;