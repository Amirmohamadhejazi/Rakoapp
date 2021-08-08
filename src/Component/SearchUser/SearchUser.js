import React, {useContext} from 'react';
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


import Table from "./table/Table"
import Varify from "../Userinfo/Varify";

// import {UseSideAnimate} from "../../Common/componennt/Hooks/UseSideAnimate/UseSideAnimate";

const SearchUser = (props) => {

    const ProfImg = <div className="flex-center boxShadow04 br-50 overflow-hidden " style={{width: "50px" , height: "50px"}}>
                        <img src='/Assets/Img/SearchUser/tennis profile.jpg' className="object-fit-cover" width="100%" height="100%" alt="user-pic"/>
                    </div>;

    const btn = <Varify classParent={"border1-Charade br-4 flex-center " } classChild={"Fs-10 c-Charade"} text={'تسویه بدهی'}/>;

    const columns_table1 = React.useMemo(
        () => [
            {
                Header: 'تصویر',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'نام و نام خانوادگی',
                accessor: 'col2',
            },
            {
                Header: 'ساعت رزرو در ماه',
                accessor: 'col3', // accessor is the "key" in the data
            },
            {
                Header: 'مبلغ کل بدهی',
                accessor: 'col4',
            },
            {
                Header: 'عملیات',
                accessor: 'col5',
            },
        ],
        []
    )

    const Data_table1 = React.useMemo(
        () => [
            {
                col1: ProfImg,
                col2: 'هوشنگ مرادی لنکرانی',
                col3: '۵۰',
                col4: '۲،۵۵۵،۳۰۰ تومان',
                col5: btn,
            },
            {
                col1: ProfImg,
                col2: 'هوشنگ مرادی لنکرانی',
                col3: '۵۰',
                col4: '۲،۵۵۵،۳۰۰ تومان',
                col5: btn,

            },
            {
                col1: ProfImg,
                col2: 'هوشنگ مرادی لنکرانی',
                col3: '۵۰',
                col4: '۲،۵۵۵،۳۰۰ تومان',
                col5: btn,
            },
        ],
        []
    )

    return (
        <Data_Context.Provider value={{
            Data_table1,
            columns_table1,


        }}>

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

                        <Table/>

                    </BorderTemplate>


                </div>
            </div>
        </Data_Context.Provider>
    )


}


export default SearchUser;