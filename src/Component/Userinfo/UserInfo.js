import React, {useState, useEffect, useContext} from 'react';
import { useTable } from 'react-table';

import TopBar from "../TopBar";
import { FiPhoneCall ,IoReceiptOutline , AiOutlineRight , AiOutlineLeft} from "react-icons/all";
import {moneyFormat} from "../../Common/componennt/HelperFunction/HelperFuction";
import HighHeadline from "../HighHeadline";
import Under_page from "../Under_page";
import Usertablebtn from "./Usertablebtn";
import BorderTemplate from ".././BorderTemplate";

import Table1 from "./table/Table1";
import Table2 from "./table/Table2";

//import contexs
import DataContext from "./context/UserInfoContext";
import api, {baseURL} from "../../Common/api/SearchApi";
import Loading from "../Loading";
import CommonTable from "../SearchUser/table/common table";
import {useSelector} from "react-redux";


 const UserInfo = (props) => {

     let eachData = useSelector(state => state.UserInfo.eachData);

     const [userStatistic, setUserStatistic] = useState([
         {
             header: "مجموع ساعات رزرو شده",
             subHeader: eachData.original.sum_seance,
             classes: "border-r5-Charade",
             Cell: function Cell(cell) {
                 console.log(cell.value)
                 return (
                     cell.value !== null ? eachData.original.sum_seance
                         : "______"
                 )
             }
         },


         {
             header: "پرداختی در محل در ماه",
             // subHeader:moneyFormat(26512585),
             subHeader: "_____",
             classes: "border-r5-Charade"
         },
         {
             header: "پرداختی آنلاین در ماه",
             // subHeader:moneyFormat(2555023),
             subHeader: "_____",
             classes: "border-r5-Charade"
         },

         {
             header: "ساعت رزرو شده در ماه",
             subHeader: eachData.original.sum_seance_in_month,
             classes: "border-r5-Charade",
             Cell: function Cell(cell) {
                 console.log(cell.value)
                 return (
                     cell.value !== null ? eachData.original.sum_seance
                         : "______"
                 )
             }
         },


         {
             header: "مقدار بدهکاری",
             // subHeader:moneyFormat(251255023),
             subHeader: "_____",
             classes: "border-r5-Burning-Orange"
         },
         {
             header: "مبلغ کل پرداخت شده",
             // subHeader:moneyFormat(5123511),
             subHeader: "_____",

             classes: "border-r5-Charade"
         },

     ]);

     const Info= ([
         {
             header: eachData.original.name,
             classes: "Fs-16"
         },
         {
             header: "بازیکن",
             classes: "Fs-16"
         },
         {
             header: "۰۹۱۱۲۵۸۷۲۳۱",
             classes: "Fs-16"
         },
     ]);

     const [listfilters, setlistfilters] = useState([
         {
             header: "تمام شده",
             classes: "bg-White-Smoke"
         },
         {
             header: "لغو شده",
             classes: "bg-White-Smoke"
         },
         {
             header: "فعال",
             classes: "bg-White-Smoke"
         },
         {
             header: "در محل",
             classes: "bg-White-Smoke"
         },
         {
             header: "آنلاین",
             classes: "bg-White-Smoke"
         },
         {
             header: "پرداخت نشده",
             classes: "bg-White-Smoke"
         },
         {
             header: "فیلترها:",
             classes: "rtl"
         }
     ]);

    return (


            <div className='w-100 flex-center flex-column'>
                {/*menu Top*/}
                {/*<TopBar />*/}
                <div className="flex-center flex-column col-11 br-16  mt-32 bg-white p-s16-m32-lg48-xl48 "   >
                    {/************************************************ Sec 1 ************************************************/}
                    <BorderTemplate class={"mt-26 br-14 p-24"}>

                        <div className="d-flex h-100 " >

                            <div className="row m-0  justify-content-between">
                                {
                                    userStatistic.map((item,index)=>
                                        <div className={[" w-50 d-flex flex-column br-5 justify-content-around pr-10 mt-2" ,item.classes].join(" ")} key={index}>
                                            <span className="c-silver-sand Fs-14 text-right ">{item.header}</span>
                                            <span className="c-Charade Fs-16 text-right" dir='rtl'>{item.subHeader}</span>
                                        </div>
                                    )
                                }
                            </div>

                            <div className="d-flex flex-column align-items-center justify-content-around h-75 w-40" >



                                <div className="flex-center boxShadow04 br-50 overflow-hidden mx-auto my-auto SearchUserImgSize" >
                                    <img src={eachData.original.image!==null? `${baseURL}`+eachData.original.image :'/Assets/Img/man-avatar.svg'} className="object-fit-cover w-100 h-100"  alt="user-pic"/>
                                </div>

                                {
                                    Info.map((item,index)=>
                                        <p className={["c-Masala mb-0 " ,item.classes].join(" ")} key={index}>{item.header}</p>
                                    )
                                }

                                <div className="d-flex w-75 justify-content-around H-30">
                                    <div className=" flex-center c-Charade border2-Charade br-6 W-70">
                                            <span className="Fs-12 text-bold">
                                                تسویه <IoReceiptOutline className="c-Charade Fs-12"/>
                                            </span>
                                    </div>
                                    <div className="  flex-center c-Charade border2-Charade br-6 W-70">
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

                        <Table1/>

                    </BorderTemplate>


                    {/************************************************ Sec 3 ************************************************/}


                    <BorderTemplate class={"mt-26 br-14 p-24"}  id={"sec3"} >

                        {/************************ Sec 3 1 ************************/}

                        <div className=" d-flex flex-row justify-content-between ">

                            <div className=" d-flex flex-row "  >
                                <span className="bg-Cultured d-flex align-items-center c-Spanish-Gray Fs-14 "><AiOutlineLeft className="Fs-16 d-flex align-items-end W-20"/>۱۳۹۹/۱۱/۱ - ۱۳۹۹/۱۲/۱<AiOutlineRight className="Fs-16 W-20"/></span>
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



                        {
                            eachData.original.reserved_plan_in_month
                                ===0? <div className="flex-center H-200"><span>اخیرا رزروی برای کاربر ثبت نشده!</span></div>
                                : <Table2 />
                        }



                        {/*<Under_page/>*/}

                    </BorderTemplate>

                </div>
            </div>

    );
};

export default UserInfo;