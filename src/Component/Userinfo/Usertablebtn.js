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
    const toggleModal=()=>setshowModal(!showModal)



    const Datamodal=(e , index="hi")=>console.log(index)



    let value={
        showModal,
        toggleModal
    }

    return (
        <DataContext.Provider value={value} >

                <div className="w-100 d-flex justify-content-center" id="modal_dialog">
                    <div onClick={(e , index) => (
                        setshowModal(true),
                            Datamodal(e ,index)
                    )} className={["W-80 H-30 cursor-pointer" ,props.classParent].join(" ")}>
                        <span className={props.classChild}>{props.text}</span>
                    </div>
                </div>
                <ModalUser>
                    <Userinfo/>
                </ModalUser>

        </DataContext.Provider>
    )
}

export default Usertablebtn;