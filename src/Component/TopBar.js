import React, {useState, useEffect} from 'react';
import { BsChatDots, IoClose, IoSettingsOutline} from "react-icons/all";

const IconHeader=(props)=>{
    return(
        <div className={["  d-flex justify-content-end ", props.parentClass].join(" ")}>
            <div className={[" flex-center boxShadow  circle-60px ", props.childClass?props.childClass:"bg-white"].join(" ")} >
                {
                    props.children
                }
             </div>
        </div>
    )
}


const TopBar = (props) => {

    // const [count, setCount] = useState(1);
    useEffect(() => {
        // Update the document title using the browser API
        // return //for componentDidMount
    }, []);

    return (
        <div className='col-11 d-flex justify-content-between align-items-center   ' style={{ height:"14vw"}}>
            <div className="  flex-center h-100 ps-4" >

                <IconHeader>
                    <IoSettingsOutline className="Fs-34  c-silver-sand"    />
                </IconHeader>

                <IconHeader parentClass="mx-3">
                    <BsChatDots className=" Fs-34  c-silver-sand"  />
                </IconHeader>

                <div className="  d-flex justify-content-start align-items-center h-100">
                     {/*Todo:change  responsive width*/}
                    <div className="bg-white d-flex justify-content-center boxShadow04 h-6vw br-16 w-top-bar">
                        <span className="c-silver-sand Fs-16 d-flex align-items-center  fw-bold"  >زمین سالاردره</span>
                    </div>
                </div>

            </div>


            <IconHeader parentClass="mr-auto  align-items-center h-100" childClass='bg-Iron' >
                <IoClose className="Fs-40 c-Charade" />
            </IconHeader>

        </div>
    );
};

export default TopBar;