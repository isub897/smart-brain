import React from "react";

const ImageArea = ({uploadedUrl}) => {
    return (
        <div className="image-area mb5 mt3">
            <img 
                id="image2detect"
                alt="" 
                width='500px'
                height='auto'
                src={uploadedUrl} ></img>
        </div>
    )
}

export default ImageArea;

// https://images.complex.com/complex/images/c_fill,g_center,w_1200/fl_lossy,pg_1/gz5vrdattwlkwhh6wlf4/will-smithoff

// https://th.bing.com/th/id/R.426608a863b81e8d858bb7dea6cba2cc?rik=%2bqRJEb9JiZUqAQ&pid=ImgRaw&r=0