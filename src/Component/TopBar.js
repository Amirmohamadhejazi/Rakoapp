import React, {useState, useEffect} from 'react';

import { IoSettingsOutline } from 'react-icons/io5';
import { BsChatDots } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';
import { GrClose } from 'react-icons/gr';
import { IoClose } from 'react-icons/io5';

// import {UseSideAnimate} from "../../Common/componennt/Hooks/UseSideAnimate/UseSideAnimate";

const TopBar = (props) => {
    // let { mode,state,ChangePage}= UseSideAnimate()

    // const [count, setCount] = useState(1);
    useEffect(() => {
        // Update the document title using the browser API
        // return //for componentDidMount
    }, []);

    return (
        <div className='col-11 d-flex justify-content-center   ' style={{ height:"14vw"}}>
            <div className="col-7 d-flex flex-row justify-content-center align-items-center h-100" >
                <div className="col-3 d-flex justify-content-end">
                    <div className="bg-white flex-center boxShadow br-50" style={{width: "6vw" , height: "6vw"}}>
                        <IoSettingsOutline className="Fs-40 c-silver-sand" />
                    </div>
                </div>

                <div className="col-2 d-flex justify-content-center " style={{marginRight:"1vw" , marginLeft:"1vw"}}>
                    <div className="bg-white flex-center boxShadow br-50" style={{width: "6vw" , height: "6vw"}}>
                        <BsChatDots className="Fs-40 c-silver-sand" />
                    </div>
                </div>

                <div className="col-7 d-flex justify-content-start align-items-center h-100">
                    <div className="bg-white d-flex justify-content-center boxShadow" style={{width: "19vw" , height: "6vw" , borderRadius:"16px"}}>
                        <span className="c-silver-sand Fs-28 d-flex align-items-center " style={{    fontFamily: "IRANYekan"}} >زمین سالاردره</span>
                    </div>
                </div>

            </div>

            <div className="col-5 d-flex justify-content-end align-items-center h-100">
                <div className="bg-Iron flex-center  br-50 boxShadow" style={{width: "6vw" , height: "6vw"}}>
                    <IoClose className="Fs-40 c-Charade" />
                </div>
            </div>
        </div>
    );
};

export default TopBar;