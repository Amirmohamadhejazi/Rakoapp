import React from 'react';


// import {UseSideAnimate} from "../../Common/componennt/Hooks/UseSideAnimate/UseSideAnimate";

const BorderTemplate = (props) => {
    return (
        <div className="w-100 mt-26 br-14 border1-Silver-Sand p-24" id={props.id}>
                {props.children}

        </div>
    )


}


export default BorderTemplate;