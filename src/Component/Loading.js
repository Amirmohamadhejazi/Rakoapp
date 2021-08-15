import React from 'react';


const Loading = (props) => {
    return (
        <div className="w-100 d-flex justify-content-center">
                <div style={{width:"80px" , height:"80px"}}>
                    <img src='/Assets/Img/loading.svg' className="w-100 h-100 object-fit-cover" alt="img-loading"/>
                </div>
        </div>

    )
}

export default Loading;