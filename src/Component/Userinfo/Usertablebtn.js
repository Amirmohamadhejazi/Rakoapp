import React, {useState, useEffect, useContext} from 'react';
// import component
import Userinfo from "./Userinfo";
import ModalUser from "../Modal/ModalUser";
import Modal from 'react-bootstrap/Modal'
import DataContext from "./context/UsertablebtnContext";

import { IoClose} from "react-icons/all";
import api from "../../Common/api/SearchApi";

const Usertablebtn = (props) => {

    const [showModal, setshowModal] = useState(false);




//     function ShowHandler(data) {
//
//         // useEffect(
//         //     setshowModal(data)
//         // ,[])


    let value={
        showModal
    }

    return (
        <DataContext.Provider value={value} >

                <div className="w-100 d-flex justify-content-center">
                    <div onClick={() => setshowModal(true)} className={props.classParent}
                         style={{width: "80px", height: "30px", cursor: "pointer"}}>
                        <span className={props.classChild}>{props.text}</span>
                    </div>
                    {/*<div onClick={ShowHandler(true)} className={props.classParent}*/}
                    {/*     style={{width: "80px", height: "30px", cursor: "pointer"}}>*/}
                    {/*    <span className={props.classChild}>{props.text}</span>*/}
                    {/*</div>*/}
                </div>
                <ModalUser>

                    <Userinfo/>

                    <div className="w-100 d-flex justify-content-end bg-white">
                        {/*<div className="br-50 flex-center bg-dark cursor-pointer mr-40 mb-40" style={{width:"50px" , height:"50px"}} onClick={ShowHandler(false)} >*/}
                        <div className="br-50 flex-center bg-dark cursor-pointer mr-40 mb-40" style={{width:"50px" , height:"50px"}} onClick={() => setshowModal(false)} >
                            <IoClose className="Fs-30 text-white"/>
                        </div>
                    </div>

                </ModalUser>

        </DataContext.Provider>
    )
}

export default Usertablebtn;