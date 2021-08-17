import React, {useState, useEffect, useContext} from 'react';
// import component
import Userinfo from "./Userinfo";
import ModalUser from "../Modal/ModalUser";
import Modal from 'react-bootstrap/Modal'
import DataContext from "./context/UsertablebtnContext";

const Usertablebtn = (props) => {

    const [showModal, setshowModal] = useState(false);

    let value={
        showModal
    }
    return (
        <DataContext.Provider value={value}>
            <div className="w-100 d-flex justify-content-center">
                <div onClick={() => setshowModal(true)} className={props.classParent}
                     style={{width: "80px", height: "30px", cursor: "pointer"}}>
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