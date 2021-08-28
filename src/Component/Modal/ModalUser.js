// import React, {useContext, useEffect, useState} from 'react';
// import Modal from 'react-bootstrap/Modal'
//
// import DataContext from "./../Userinfo/context/UsertablebtnContext";
// import api from "../../Common/api/SearchApi";
// import {useSelector} from "react-redux";
//
// const ModalUser = (props) => {
//     const dataContext = useContext(DataContext)
//
//     // let ModalData = useSelector(state => state.ModalSearchUser.Modal);
//
//     return (
//                 <Modal  className="p-0" id="ModalTableBtn" show={dataContext.ShowModal}   >
//
//                     {props.children}
//
//                 </Modal>
//     );
// };
//
// export default ModalUser;

import React, {useContext, useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal'

// import DataContext from "./../Userinfo/context/UsertablebtnContext";
// import api from "../../Common/api/SearchApi";
import {useSelector} from "react-redux";

const ModalUser = (props) => {

    // const DataRow = useSelector(state => state.ApiData.DataSearchUser[props.id.index]);
    //
    // useEffect(()=>{
    //     console.log(DataRow)
    // },[DataRow])



    const ModalSearchUser = useSelector(state => state.ModalSearchUser.Modal);
    return (
        <Modal  className="p-0" id="ModalTableBtn" show={ModalSearchUser}   >

            {props.children}

        </Modal>
    );
};

export default ModalUser;