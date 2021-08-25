
import {useDispatch, useSelector } from 'react-redux'

import { Show} from "../../Common/ReduxFolder/Action/Modal";

//component

import ModalUser from "../../Component/Modal/ModalUser";
import DataContext from "../../Component/Userinfo/context/UsertablebtnContext";
import React, {useReducer} from "react";
import Userinfo from "../../Component/Userinfo/Userinfo";
import TopBar from "../../Component/TopBar";


const Usertablebtn = (props) => {

    const dispatch = useDispatch();

    return (
            <>
                <div className="w-100 d-flex justify-content-center" id="modal_dialog">
                    <div onClick={() => dispatch(Show(true))} className={["W-80 H-30 cursor-pointer", props.classParent].join(" ")}>
                        <span className={props.classChild}>{props.text}</span>
                    </div>
                </div>
                <ModalUser>

                    <TopBar/>

                    {/*<Userinfo id={props.id}/>*/}


                </ModalUser>

            </>
    )
}

export default Usertablebtn;