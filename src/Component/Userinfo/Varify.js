import React from 'react';



// import {UseSideAnimate} from "../../Common/componennt/Hooks/UseSideAnimate/UseSideAnimate";

const Varify = (props) => {
    return (

        <div className="w-100 d-flex justify-content-center">
            <div className={props.classParent} style={{width: "80px", height: "30px"}}>
                <span className={props.classChild}>{props.text}</span>
            </div>
        </div>

  )


}


export default Varify;