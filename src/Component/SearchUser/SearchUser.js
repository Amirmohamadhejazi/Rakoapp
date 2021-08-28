import React, {useState, useContext, useEffect, useReducer} from 'react';

import {useDispatch, useSelector } from 'react-redux'

import {SetLoading } from "../../Common/ReduxFolder/Action/SearchUser/loading";
import {SetApiData } from "../../Common/ReduxFolder/Action/SearchUser/ApiData";

// *********************** import axios
import api, {baseURL} from "../../Common/api/SearchApi";

// *********************** import Reducer
import SearchUserReducer from "./context/Reducer/SearchUserReducer";

// *********************** import Library
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import SplitButton from 'react-bootstrap/SplitButton'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useTable, useRowSelect } from 'react-table'

// *********************** import componnet
import CommonTable from "./table/common table"
import Usertablebtn from "../UserInfo/Usertablebtn";
import data from "bootstrap/js/src/dom/data";
import Loading from "./../Loading";
import TopBar from "../TopBar";
import BorderTemplate from "../BorderTemplate";
import HighHeadline from "../HighHeadline";
import Under_page from "../Under_page";
// *********************** import icon
import {BiSearch, GiMachineGun} from "react-icons/all";

// *********************** redux Action reducer

const SearchUser = (props) => {


    // const loading = useSelector(state => state.SearchUser.loading);
    const loading = useSelector(state => state.loading.loading);
    const ApiData = useSelector(state => state.ApiData.DataSearchUser);

    const Dispatch = useDispatch();

    useEffect(()=>{

        async function asyncCall(){

            await api.get(`/club_owner/reserved_mng/top_users?club_id=5`).then (response=>{
                    Dispatch(SetApiData(response.data.data.top_users))
                    Dispatch(SetLoading(false))
                })
        }

        asyncCall()
    },[])





    return (
            <div className='w-100 flex-center flex-column'>
                {/*menu Top*/}
                <TopBar/>
                <div className="flex-center flex-column col-11 br-16 mt-32 bg-white p-s16-m32-lg48-xl48 "  id="SearchUser" >
                    {/************************************************ Sec 1 ************************************************/}
                    <BorderTemplate class={"br-14 p-24"}>

                        <HighHeadline text={"جستجوی کاربر"} />

                        <div className="w-100 flex-center flex-row H-60" >

                                <div className=" bg-dark flex-center mr-20 W-60 H-60" style={{borderRadius:"10px"}}>
                                    <BiSearch className="Fs-40 text-white"/>
                                </div>

                                <Dropdown as={ButtonGroup} className="border1-Gray-sand h-100 c-Gray-sand W-120" style={{borderRadius: "10px 0 0 10px"}}>

                                    <Dropdown.Toggle split id="dropdown-split-basic" className="Fs-16 c-Gray-sand rtl" style={{ borderRadius: "  0 0 10px 10px"}} >
                                        مربی
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="Fs-16 c-Gray-sand rtl">
                                        <Dropdown.Item>مربی</Dropdown.Item>
                                        <Dropdown.Item> بازیکن </Dropdown.Item>
                                    </Dropdown.Menu>

                                </Dropdown>

                                <input type="text" className="border1-Gray-sand h-100 p-16 W-300" style={{ borderRadius: "0 10px 10px 0"}} />
                        </div>

                    </BorderTemplate>

                    <BorderTemplate class={"mt-26 br-14 p-24"}>

                        <HighHeadline text={"مربیان با بیشترین بدهی"} />

                        {
                            loading
                                ? <Loading/>
                                : <CommonTable/>
                        }



                    </BorderTemplate>
                </div>
            </div>



    )


}

export default SearchUser;