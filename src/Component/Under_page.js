import React, {useState} from 'react';

 import { HiOutlineChevronDoubleRight , HiOutlineChevronDoubleLeft, HiOutlineChevronRight, HiOutlineChevronLeft} from "react-icons/all";

// import {UseSideAnimate} from "../../Common/componennt/Hooks/UseSideAnimate/UseSideAnimate";

const Under_page = (props) => {


    // **********************sec 1-2
    const [listUnderpage, setlistUnderpage] = useState([
        {header:"1",
            classes_div:"bg-Anti-Flash-White",
            classes_text:"c-Quartz"},
        {header:"2",
            classes_div:"bg-white",
            classes_text:"c-Anti-Flash-White"},
        {header:"3",
            classes_div:"bg-white",
            classes_text:"c-Anti-Flash-White"},
    ]);
    return (
        <div className="w-100 d-flex justify-content-center align-items-center pt-20 pb-20">
            <HiOutlineChevronDoubleLeft className="Fs-26 c-Anti-Flash-White"/>
            <HiOutlineChevronLeft className="Fs-26 c-Anti-Flash-White"/>
            {/********************************* icon left page*/}

            {
                listUnderpage.map((item,index)=>
                    <div  className={["circle-icon-footer  d-flex justify-content-center align-items-center" ,item.classes_div].join(" ")} key={index}>
                        <span className={["Fs-28" ,item.classes_text].join(" ")} key={index}> {item.header} </span>
                    </div>
                )
            }
            {/********************************* icon right page*/}
            <HiOutlineChevronRight className="Fs-26 c-silver-sand"/>
            <HiOutlineChevronDoubleRight className="Fs-26 c-silver-sand"/>

        </div>

    )


}


export default Under_page;