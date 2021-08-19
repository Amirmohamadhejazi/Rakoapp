import React, {useContext, useEffect, useState} from 'react';
import { BsChatDots, IoClose, IoSettingsOutline} from "react-icons/all";
import DataContext from "../Component/Userinfo/context/UsertablebtnContext";
import api from "../Common/api/SearchApi";

const IconHeader=(props)=>{
    return(
        <div className={["  d-flex justify-content-end ", props.parentClass].join(" ")}>
            <div className={[" flex-center boxShadow circle-icon-header ", props.childClass?props.childClass:"bg-white"].join(" ")} >
                {
                    props.children
                }
             </div>
        </div>
    )
}

const TopBar = (props) => {
    return (
        <div className='col-11 d-flex justify-content-between align-items-center   mt-32'>
            <div className="  flex-center h-100 ps-4" >

                <IconHeader>
                    <IoSettingsOutline className=" Fs-s25-m34-lg34-xl34  c-silver-sand"    />
                </IconHeader>

                <IconHeader parentClass="mx-3">
                    <BsChatDots className="  Fs-s25-m34-lg34-xl34   c-silver-sand"  />
                </IconHeader>

                <div className="  d-flex justify-content-start align-items-center h-100">

                    <div className="bg-white d-flex justify-content-center boxShadow04 h-s40-m50-lg60-xl-60 br-16 w-top-bar">
                        <span className="c-silver-sand Fs-16 d-flex align-items-center  fw-bold"  >زمین سالاردره</span>
                    </div>
                </div>

            </div>


            <IconHeader parentClass="mr-auto  align-items-center h-100 cursor-pointer"  childClass='bg-Iron' >
                <IoClose className=" Fs-s25-m34-lg34-xl34 c-Charade " />
            </IconHeader>


        </div>
    );
};

export default TopBar;