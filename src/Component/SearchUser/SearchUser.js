import React, {useState , useContext , useEffect} from 'react';
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

// import componnet
import CommonTable from "./table/common table"
import Usertablebtn from "../Userinfo/Usertablebtn";
import data from "bootstrap/js/src/dom/data";
import Loading from "./../Loading";
// const [dispatch] = React.useReducer(countReducer)

const SearchUser = (props) => {

    let [loading, setloading] = useState(true)
    let [ApiData, setApiData] = useState(false)



    useEffect(()=>{

        async function asyncCall(){

            await api.get(`/club_owner/reserved_mng/top_users?club_id=5`).then (response=>{
                    console.log(response.data.data.top_users)
                    setApiData(response.data.data.top_users);
                    setloading(false)
                })
        }

        asyncCall()
    },[])





    const columns_table =  [
            {
                Header: 'تصویر',
                accessor: 'image', // accessor is the "key" in the data,
                Cell: function Cell(cell) {
                    return (
                        <div className="flex-center boxShadow04 br-50 overflow-hidden mx-auto my-auto SearchUserImgSize" >
                            <img src={cell.value!==null?`${baseURL}${cell.value}`:'/Assets/Img/man-avatar.svg'} className="object-fit-cover" width="100%" height="100%" alt="user-pic"/>
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
                        <Usertablebtn classParent={"border1-Charade br-4 flex-center " } classChild={"Fs-10 c-Charade"} text={"تسویه بدهی"}/>

                )}
             },
        ]




let value ={
    Data_table:ApiData,
    columns_table,
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

                        <div className="w-100  flex-center flex-row  " style={{  height:"60px"}} >

                                <div className=" bg-dark flex-center mr-20" style={{width:"60px" , height:"60px" , borderRadius:"10px"}}>
                                    <BiSearch className="Fs-40 text-white"/>
                                </div>

                                <Dropdown as={ButtonGroup} className="border1-Gray-sand h-100 c-Gray-sand" style={{width:"120px" ,borderRadius: "10px 0 0 10px"}}>

                                    <Dropdown.Toggle split id="dropdown-split-basic" className="Fs-16 c-Gray-sand rtl" style={{ borderRadius: "  0 0 10px 10px"}} >
                                        مربی
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="Fs-16 c-Gray-sand rtl">
                                        <Dropdown.Item>مربی</Dropdown.Item>
                                        <Dropdown.Item> بازیکن </Dropdown.Item>
                                    </Dropdown.Menu>

                                </Dropdown>

                                <input type="text" className="border1-Gray-sand h-100 p-16" style={{width:"300px" , borderRadius: "0 10px 10px 0"}} />
                        </div>

                    </BorderTemplate>

                    <BorderTemplate class={"mt-26 br-14 p-24"}>

                        <HighHeadline text={"مربیان با بیشترین بدهی"} />

                        {
                            loading
                                // اگر درست بود این
                                ? <Loading/>
                                // اگر غلط بود این
                                : <CommonTable/>
                        }
                    </BorderTemplate>


                </div>
            </div>
        </Data_Context.Provider>
    )


}


export default SearchUser;