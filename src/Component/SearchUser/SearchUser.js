import React, {useState , useContext , useEffect} from 'react';
import DataContext from "../Userinfo/context/DataContext";
import TopBar from "../TopBar";
import BorderTemplate from "../BorderTemplate";
import HighHeadline from "../HighHeadline";
import Under_page from "../Under_page";

//import contexs
import Data_Context from "./context/DataContext";

// icon
import {BiSearch, GiMachineGun} from "react-icons/all";

// btn
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import SplitButton from 'react-bootstrap/SplitButton'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

// import axios
import SearchApi from "../../Common/api/SearchApi";

// import componnet
import Table from "./table/Table"
import Varify from "../Userinfo/Varify";
import data from "bootstrap/js/src/dom/data";
// const [dispatch] = React.useReducer(countReducer)

const SearchUser = (props) => {

    let [loading, setloading] = useState(true)
    let [ApiData, setApiData] = useState(false)


    async function asyncCall(){
        console.log("calling")
        await SearchApi.get(`/club_owner/reserved_mng/top_users?club_id=5`, {
            headers: {
                authorization: 'Token 9915e8b5f140baa3b79c213bbda1060a57d43797',
                'Content-Type': 'application/json'
            },
        })
            .then (response=>{
                setApiData(response.data.data.top_users);
                setloading(false)
            })
    }

    asyncCall()


// useEffect(()=>{
//
//     // if (ApiData===false){
//     //     setloading( true);
//     // }else {
//     //     setloading(false);
//     // }
//
//
// },[])

    // console.log(ApiData)


    const ProfImg = <div className="flex-center boxShadow04 br-50 overflow-hidden " style={{width: "50px" , height: "50px"}}>
                        <img src='/Assets/Img/SearchUser/tennis profile.jpg' className="object-fit-cover" width="100%" height="100%" alt="user-pic"/>
                    </div>;

    const btn = <Varify classParent={"border1-Charade br-4 flex-center " } classChild={"Fs-10 c-Charade"} text={"تسویه بدهی"}/>;

    const columns_table = React.useMemo(
        () => [
            {
                Header: 'تصویر',
                accessor: 'image', // accessor is the "key" in the data
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


        ],
        []
    )

    const Data_table = React.useMemo(
        () => ApiData,
        []
    )

    // const Data_table1 = React.useMemo(
    //     () => [
    //         {
    //             image: ProfImg,
    //             name: 'هوشنگ مرادی لنکرانی',
    //             sum_seance_in_week: '۵۰',
    //             sum_seance_in_month: '۲،۵۵۵،۳۰۰ تومان',
    //             sum_seance: btn,
    //         },
    //         {
    //             image: ProfImg,
    //             name: 'هوشنگ مرادی لنکرانی',
    //             sum_seance_in_week: '۵۰',
    //             sum_seance_in_month: '۲،۵۵۵،۳۰۰ تومان',
    //             sum_seance: btn,
    //
    //         },
    //         {
    //             image: ProfImg,
    //             name: 'هوشنگ مرادی لنکرانی',
    //             sum_seance_in_week: '۵۰',
    //             sum_seance_in_month: '۲،۵۵۵،۳۰۰ تومان',
    //             sum_seance: btn,
    //         },
    //     ],
    //     []
    // )

    let value={
        Data_table,
        columns_table,
    };

    return (
        <Data_Context.Provider value={value}>

            <div className='w-100 flex-center flex-column'>
                {/*menu Top*/}
                <TopBar/>

                <div className="flex-center flex-column col-11 br-16  mt-32 bg-white p-s16-m32-lg48-xl48 "  id="SearchUser" >
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
                                ? <div>loading...</div>
                                // اگر غلط بود این
                                :  <Table/>
                        }
                    </BorderTemplate>


                </div>
            </div>
        </Data_Context.Provider>
    )


}


export default SearchUser;