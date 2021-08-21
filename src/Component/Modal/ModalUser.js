import React, {useContext, useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal'

import DataContext from "./../Userinfo/context/UsertablebtnContext";
import api from "../../Common/api/SearchApi";

const ModalUser = (props) => {
    const dataContext = useContext(DataContext)

    // useEffect(()=>{
    //
    //     async function asyncCall(){
    //
    //         await api.get(`club_owner/reserved_mng/club_coaches?club_id=5`).then (response=>{
    //             console.log(response)
    //             // setApiData(response.data.data.top_users);
    //             // setloading(false)
    //         })
    //     }
    //
    //     asyncCall()
    // },[])

    return (
                <Modal  className="p-0" id="ModalTableBtn" show={dataContext.showModal}  >

                    {props.children}

                </Modal>
    );
};

export default ModalUser;