import React, {useState, useContext, useEffect, useReducer} from 'react';
import DataContext from "../Userinfo/context/UserInfoContext";
import TopBar from "../TopBar";
import BorderTemplate from "../BorderTemplate";
import HighHeadline from "../HighHeadline";
import Under_page from "../Under_page";

//import contexs
import Data_Context from "./context/SearchUserContext";

// icon
import {BiSearch, GiMachineGun} from "react-icons/all";

// btn
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import SplitButton from 'react-bootstrap/SplitButton'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

// import axios
import api, {baseURL} from "../../Common/api/SearchApi";

// import Reducer
import SearchUserReducer from "./context/Reducer/SearchUserReducer";

// import componnet
import CommonTable from "./table/common table"
import Usertablebtn from "../Userinfo/Usertablebtn";
import data from "bootstrap/js/src/dom/data";
import Loading from "./../Loading";
import { useTable, useRowSelect } from 'react-table'


const SearchUser = (props) => {

    const [state , dispatch] = useReducer(SearchUserReducer , {
        columns_table :  [
            {
                Header: 'تصویر',
                accessor: 'image', // accessor is the "key" in the data,
                Cell: function Cell(cell) {
                    return (
                        <div className="flex-center boxShadow04 br-50 overflow-hidden mx-auto my-auto SearchUserImgSize" >
                            <img src={cell.value!==null?`${baseURL}${cell.value}`:'/Assets/Img/man-avatar.svg'} className="object-fit-cover w-100 h-100"  alt="user-pic"/>
                        </div>
                    )}
            },
            {
                Header: 'نام و نام خانوادگی',
                accessor: 'name',
            },
            {
                Header: 'ساعت رزرو در هفته',
                accessor: 'sum_seance_in_week', // accessor is the "key" in the data
            },
            {
                Header: 'ساعت رزرو در ماه',
                accessor: 'sum_seance_in_month', // accessor is the "key" in the data
            },
            {
                Header: 'مبلغ کل بدهی',
                accessor: 'sum_seance',
            },
            {
                Header: 'اکشن',
                Cell: function Cell(cell) {
                    return (
                        <Usertablebtn classParent={"border1-Charade br-4 flex-center " } id={cell.row} classChild={"Fs-10 c-Charade"} text={"تسویه بدهی"}/>
                    )}


            },




        ],

        loading : true,

        ApiData:false
    })



    useEffect(()=>{
        console.log(state)
    },[state])

    // let [ApiData, setApiData] = useState(false)

    useEffect(()=>{

        async function asyncCall(){

            await api.get(`/club_owner/reserved_mng/top_users?club_id=5`).then (response=>{
                    dispatch({ type: "setApiData" , payload:{data:response.data.data.top_users} });
                    // setApiData(response.data.data.top_users);
                    dispatch({ type: "setLoading"  });
                })
        }

        asyncCall()
    },[])



    let value ={
    Data_table:state.ApiData,
    columns_table:state.columns_table,
}



    return (
        <Data_Context.Provider value={value}>

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
                            state.loading
                                ? <Loading/>
                                : <CommonTable/>
                        }
                    </BorderTemplate>
                </div>
            </div>
        </Data_Context.Provider>
    )


}


export default SearchUser;