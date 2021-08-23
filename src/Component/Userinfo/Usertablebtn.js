import React, {useState, useEffect, useContext, useReducer} from 'react';
// import component
import Userinfo from "./Userinfo";
import ModalUser from "../Modal/ModalUser";
import Modal from 'react-bootstrap/Modal'
import DataContext from "./context/UsertablebtnContext";

import { IoClose} from "react-icons/all";
import api, {baseURL} from "../../Common/api/SearchApi";

// import Reducer
import UsertablebtnReducer from "./context/Reducer/UsertablebtnReducer";

const Usertablebtn = (props) => {



    const [state , dispatch] = useReducer(UsertablebtnReducer , {

        ShowModal:false
    })

    const [showModal, setshowModal] = useState(false);
    let ShowHidden=state.ShowModal;
    const toggleModal=()=>dispatch({type: "toggleModal" , payload:{data:ShowHidden} })





    let value={
        ShowModal:state.ShowModal,
        toggleModal
    }

    return (
        <DataContext.Provider value={value} >

                <div className="w-100 d-flex justify-content-center" id="modal_dialog">
                    <div onClick={() => dispatch({type: "ShowModal"})}  className={["W-80 H-30 cursor-pointer" ,props.classParent].join(" ")}>
                        <span className={props.classChild}>{props.text}</span>
                    </div>
                </div>
                <ModalUser>
                    <Userinfo id={props.id}/>
                </ModalUser>

        </DataContext.Provider>
    )
}

export default Usertablebtn;