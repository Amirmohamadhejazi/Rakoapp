import {useDispatch, useSelector} from 'react-redux'

import {Hide, Show} from "../../Common/ReduxFolder/Action/Modal";

import {GetUserEachInfo} from "../../Common/ReduxFolder/Action/Userinfo/UserInfo";

// component

import {useState, useEffect} from 'react';

import ModalUser from "../../Component/Modal/ModalUser";
import DataContext from "../../Component/UserInfo/context/UsertablebtnContext";
import React, {useReducer} from "react";
import UserInfo from "./UserInfo";
import TopBar from "../../Component/TopBar";
import {SetApiData} from "../../Common/ReduxFolder/Action/SearchUser/ApiData";

const Usertablebtn = (props) => {


    const dispatch = useDispatch();

    return (
        <>

            <div className="w-100 d-flex justify-content-center" id="modal_dialog">
                <div onClick={() => {
                    dispatch(Show(true))
                    dispatch(GetUserEachInfo(props.dataRows))
                }}
                     className={["W-80 H-30 cursor-pointer", props.classParent].join(" ")}>
                    <span className={props.classChild}>{props.text}</span>
                </div>
            </div>
            <ModalUser>
                <TopBar/>
                <UserInfo />
            </ModalUser>
        </>
    )
}

export default Usertablebtn;