import React from 'react';


// import {UseSideAnimate} from "../../Common/componennt/Hooks/UseSideAnimate/UseSideAnimate";

const BorderTemplate = (props) => {
    return (
        <div className={["w-100   border1-Silver-Sand " ,props.class].join(" ")} id={props.id}>
            {/*mt-26 br-14 p-24 معمولی ها*/}
            {/*p-2 br-8  h-100 این استاتیک*/}
                {props.children}

        </div>
    )


}


export default BorderTemplate;