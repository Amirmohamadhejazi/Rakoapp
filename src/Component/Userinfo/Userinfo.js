import React, {useState, useEffect} from 'react';
import { useTable } from 'react-table';

import TopBar from "../TopBar";

import { FiPhoneCall ,IoReceiptOutline , AiOutlineRight , AiOutlineLeft} from "react-icons/all";
import {moneyFormat} from "../../Common/componennt/HelperFunction/HelperFuction";
import HighHeadline from "../HighHeadline";
import Under_page from "../Under_page";
import Varify from "./Varify";
import BorderTemplate from ".././BorderTemplate";

import Table1 from "./table/Table1";
import Table2 from "./table/Table2";

//import contexs
import DataContext from "./context/DataContext";


const Userinfo = (props) => {
    // let { mode,state,ChangePage}= UseSideAnimate()

    // **********************sec 1-1
    const [userStatistic, setUserStatistic] = useState([

        {header:"مجموع ساعات رزرو شده",
            subHeader:"۵۶۴ ساعت",
            classes:"border-r5-Charade"
        },

        {header:"پرداختی در مخل در ماه",
            subHeader:moneyFormat(26512585),
            classes:"border-r5-Charade"
        },
        {header:"پرداختی آنلاین در ماه",
            subHeader:moneyFormat(2555023),
            classes:"border-r5-Charade"
        },
        {header:"ساعت رزرو شده در ماه",
            subHeader:"۱۲۲ ساعت",
            classes:"border-r5-Charade "
        },


        {header:"مقدار بدهکاری",
            subHeader:moneyFormat(251255023),
            classes:"border-r5-Burning-Orange"
        },
        {header:"مبلغ کل پرداخت شده",
            subHeader:moneyFormat(5123511),
            classes:"border-r5-Charade"
        },

    ]);

    // **********************sec 1-2
    const [UserInfo, setUserInfo] = useState([
        {header:" هوشنگ مرادی لنکرانی",
            classes:"Fs-16"
        },
        {header:"بازیکن",
            classes:"Fs-16"
        },
        {header:"۰۹۱۱۲۵۸۷۲۳۱",
            classes:"Fs-16"
        },
    ]);

// ********************** sec 2 table

    const Data_table1 = React.useMemo(
        () => [
            {
                col1:  '۱۲ ساعت',
                col2:  '۹ ساعت',
                col3:  '۴ ساعت',
                col4:  '۶ ساعت',
                col5:  '۸ ساعت' ,
                col6:  '۴ ساعت',
                col7:  '۹ ساعت',
                col8:  '۵۲ ساعت',
            }
        ],
        []
    )

    const columns_table1 = React.useMemo(
        () => [

            {
                Header: 'شنبه',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'یک شنبه',
                accessor: 'col2',
            },
            {
                Header: 'دوشنبه',
                accessor: 'col3', // accessor is the "key" in the data
            },
            {
                Header: 'سه‌شنبه',
                accessor: 'col4', // accessor is the "key" in the data
            },
            {
                Header: 'چهارشنبه',
                accessor: 'col5',
            },
            {
                Header: 'پنجشنبه',
                accessor: 'col6', // accessor is the "key" in the data
            }
            ,
            {
                Header: 'جمعه',
                accessor: 'col7',
            },
            {
                Header: 'کل هفته',
                accessor: 'col8',
            },
        ],
        []
    )

    // ********************** sec 3

    const [listfilters, setlistfilters] = useState([
        {header:"تمام شده",
            classes:"bg-White-Smoke"
        },
        {header:"لغو شده",
            classes:"bg-White-Smoke"
        },
        {header:"فعال",
            classes:"bg-White-Smoke"
        },
        {header:"در محل",
            classes:"bg-White-Smoke"
        },
        {header:"آنلاین",
            classes:"bg-White-Smoke"
        },
        {header: "پرداخت نشده",
            classes:"bg-White-Smoke"
        },
        {header: "فیلترها:",
            classes:"rtl"
        }
    ]);

    // ************************************************ sec 3 table Start ************************************************


    const Data_table2 = React.useMemo(
        () => [
            {
                col1: '۹۹/۱۱/۵',
                col2: '۱۴:۰۰',
                col3: '۱۶:۰۰',
                col4: 'فعال',
                col5:  'آنلاین' ,
                col6:<Varify classParent={"border1-Charade br-4 flex-center " } classChild={"Fs-10 c-Charade"} text={"پرداخت شد"}/>,

            },
            {
                col1: '۹۹/۱۱/۴',
                col2: '۱۴:۰۰',
                col3: '۱۶:۰۰',
                col4: 'لغو شده',
                col5: '-',
                col6:<Varify classParent={"border-AthensGray br-4 flex-center " } classChild={"Fs-10 c-AthensGray"} text={"پرداخت نشد"}/>,

            },
            {
                col1: '۹۹/۱۱/۴',
                col2: '۱۴:۰۰',
                col3: '۱۶:۰۰',
                col4: 'تمام شده',
                col5: 'آفلاین',
                col6:<Varify classParent={"border1-Charade br-4 flex-center " } classChild={"Fs-10 c-Charade"} text={"پرداخت شد"}/>,
            },
        ],
        []
    )

    const columns_table2 = React.useMemo(
        () => [
            {
                Header: 'تاریخ',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'ساعت شروع',
                accessor: 'col2',
            },
            {
                Header: 'ساعت پایان',
                accessor: 'col3', // accessor is the "key" in the data
            },
            {
                Header: 'وضعیت رزرو',
                accessor: 'col4',
            },
            {
                Header: 'وضعیت پرداخت',
                accessor: 'col5', // accessor is the "key" in the data
            }
            ,
            {
                Header: 'عملیات',
                accessor: 'col6',
            },
        ],
        []
    )

    //************************************************ sec 3 table End ************************************************


console.log(Data_table1)
    return (
        <DataContext.Provider value={{
            Data_table1,
            columns_table1,


            Data_table2,
            columns_table2
        }}>

            <div className='w-100 flex-center flex-column'>
                {/*menu Top*/}
                <TopBar/>

                <div className="flex-center flex-column col-11 br-16  mt-32 bg-white p-s16-m32-lg48-xl48 "   >
                    {/************************************************ Sec 1 ************************************************/}
                    <BorderTemplate class={"mt-26 br-14 p-24"}>

                        <div className=" d-flex justify-content-end   h-100 " >

                            <div className=" row m-0  justify-content-between">
                                {
                                    userStatistic.map((item,index)=>
                                        <div className={[" w-50 d-flex flex-column br-5 justify-content-around pr-10 mt-2" ,item.classes].join(" ")} key={index}>
                                            <span className="c-silver-sand Fs-14 text-right ">{item.header}</span>
                                            <span className="c-Charade Fs-16 text-right" dir='rtl'>{item.subHeader}</span>
                                        </div>
                                    )
                                }
                            </div>

                            <div className="d-flex flex-column align-items-center justify-content-around h-75" style={{ width:"40%"}}>

                                <div className="flex-center boxShadow04 br-50 overflow-hidden " style={{width: "10vw" , height: "10vw"}}>
                                    <img src='/Assets/Img/Userinfo/user.png' className="object-fit-cover" width="100%" height="100%" alt="user-pic"/>
                                </div>

                                {
                                    UserInfo.map((item,index)=>
                                        <p className={["c-Masala text-center mb-0 " ,item.classes].join(" ")} key={index}>{item.header}</p>
                                    )
                                }

                                <div className="d-flex w-75 justify-content-around" style={{height:"28px"}}>
                                    <div className=" flex-center c-Charade border2-Charade br-6" style={{width: "72px"}}>
                                            <span className="Fs-12 text-bold">
                                                تسویه <IoReceiptOutline className="c-Charade Fs-12"/>
                                            </span>
                                    </div>
                                    <div className="  flex-center c-Charade border2-Charade br-6" style={{width: "72px"}}>
                                            <span className="Fs-12 text-bold">
                                                تماس <FiPhoneCall className="c-Charade Fs-12"/>
                                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </BorderTemplate>

                    {/************************************************ Sec 2 ************************************************/}


                    <BorderTemplate class={"mt-26 br-14 p-24"} id={"sec2"} >

                        <HighHeadline text={"رزرو هفته"}/>

                        <Table1 />

                    </BorderTemplate>


                    {/************************************************ Sec 3 ************************************************/}


                    <BorderTemplate class={"mt-26 br-14 p-24"}  id={"sec3"} >

                        {/************************ Sec 3 1 ************************/}

                        <div className=" d-flex flex-row justify-content-between ">

                            <div className=" d-flex flex-row "  >
                                <span className="bg-Cultured d-flex align-items-center c-Spanish-Gray Fs-14 "><AiOutlineLeft className="Fs-16 d-flex align-items-end " style={{width:"20px"}} />۱۳۹۹/۱۱/۱ - ۱۳۹۹/۱۲/۱<AiOutlineRight className="Fs-16 " style={{width:"20px"}} /></span>
                                <span className="d-flex align-items-center c-Mountain-Mist Fs-14 pl-20" dir="rtl">فیلتر براساس تاریخ:</span>
                            </div>

                            <div className="w-25 d-flex justify-content-end">
                                <span className=" c-Charade Fs-16  fw-bold">لیست رزرو ها</span>
                            </div>

                        </div>

                        <hr className="mt-30 mb-30"/>

                        {/************************ Sec 3 2 ************************/}

                        <div className="w-100 d-flex justify-content-end">
                            <div className="d-flex flex-row justify-content-between w-85" >

                                {
                                    listfilters.map((item,index)=>
                                        <span className={[" c-Gray-sand Fs-14  " ,item.classes].join(" ")} key={index}> {item.header}</span>
                                    )
                                }

                            </div>
                        </div>

                        <hr/>

                        <Table2 />

                        <Under_page/>

                    </BorderTemplate>





                </div>
            </div>
        </DataContext.Provider>

    );
};

export default Userinfo;