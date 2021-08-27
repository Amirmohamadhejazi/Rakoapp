import {useDispatch, useSelector} from 'react-redux'

import {Hide, Show} from "../../Common/ReduxFolder/Action/Modal";

import {SetDataRow} from "../../Common/ReduxFolder/Action/Userinfo/Userinfo";

//component
import {useState, useEffect} from 'react';

import ModalUser from "../../Component/Modal/ModalUser";
import DataContext from "../../Component/Userinfo/context/UsertablebtnContext";
import React, {useReducer} from "react";
import Userinfo from "../../Component/Userinfo/Userinfo";
import TopBar from "../../Component/TopBar";
import {SetApiData} from "../../Common/ReduxFolder/Action/SearchUser/ApiData";

// props.id
// bayad ba dispach dataye har satr ro bfrestam redox badesh dakhel user info bekhonamesh


const Usertablebtn = (props) => {

    const DataRow = useSelector(state => state.Userinfo.DataRowTable);
    console.log(DataRow)


    const dispatch = useDispatch();

    return (
        <>
            <div className="w-100 d-flex justify-content-center" id="modal_dialog">
                <div onClick={() => {
                    dispatch(Show(true))
                    // dispatch(SetDataRow(props.id))
                }}
                     className={["W-80 H-30 cursor-pointer", props.classParent].join(" ")}>
                    <span className={props.classChild}>{props.text}</span>
                </div>
            </div>
            <ModalUser>
                <Userinfo/>
            </ModalUser>
        </>
    )
}

export default Usertablebtn;