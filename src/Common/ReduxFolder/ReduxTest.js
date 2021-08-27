// import {useDispatch, useSelector } from 'react-redux'
//
// import Loading from "../../Component/Loading";
//
// import {SetLoading } from "./Action/SearchUser";
//
//
// const ReduxTest = (props) => {
//
//     const loading = useSelector(state => state.SearchUser.loading);
//
//
//     const dispatch = useDispatch();
//     // اکشن رو توی کامپوننت فراخونی میکنی توی ریدیوسر باید تابعش رو بنویسی
//
//     return (
//
//             <div className='w-100 flex-center flex-column'>
//
//                 <div className="flex-center flex-column col-11 br-16 mt-32 bg-white p-s16-m32-lg48-xl48 "
//                      id="SearchUser">
//                     {/************************************************ Sec 1 ************************************************/}
//                         <button onClick={() => dispatch(SetLoading(false))}>
//                             click
//                         </button>
//                         {
//                             loading
//                                 ? <Loading/>
//                                 : <span>test</span>
//                         }
//                 </div>
//             </div>
//     );
// };
//
// export default ReduxTest;


import Loading from "../../Component/Loading";

import {useDispatch, useSelector } from 'react-redux'

import { Show , Hide} from "./Action/Modal";

//component

import ModalUser from "../../Component/Modal/ModalUser";
import DataContext from "../../Component/Userinfo/context/UsertablebtnContext";
import React, {useReducer} from "react";
import Userinfo from "../../Component/Userinfo/Userinfo";
import TopBar from "../../Component/TopBar";


const ReduxTest = (props) => {

    const ModalSearchUser = useSelector(state => state.ModalSearchUser.Modal);


    const dispatch = useDispatch();
    // اکشن رو توی کامپوننت فراخونی میکنی توی ریدیوسر باید تابعش رو بنویسی

    // console.log(ModalSearchUser)

    return (

        <div>
            <div className="w-100 d-flex justify-content-center" id="modal_dialog">
                <button onClick={() => dispatch(Show(true))}>
                    click
                </button>
            </div>
            <ModalUser>
                <TopBar/>

            </ModalUser>
        </div>
        // <div className='w-100 flex-center flex-column'>
        //
        //     <div className="flex-center flex-column col-11 br-16 mt-32 bg-white p-s16-m32-lg48-xl48 "
        //          id="SearchUser">
        //         {/************************************************ Sec 1 ************************************************/}
        //         <button onClick={() => dispatch(SetLoading(false))}>
        //             click
        //         </button>
        //         {
        //             loading
        //                 ? <Loading/>
        //                 : <span>test</span>
        //         }
        //     </div>
        // </div>
    );
};

export default ReduxTest;