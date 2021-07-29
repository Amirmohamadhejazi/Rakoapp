import React, {useState, useEffect} from 'react';

import TopBar from "../TopBar";

import { FiPhoneCall ,IoReceiptOutline , AiOutlineRight , AiOutlineLeft} from "react-icons/all";
import {moneyFormat} from "../../Common/componennt/HelperFunction/HelperFuction";
import HighHeadline from "../HighHeadline";


// import {UseSideAnimate} from "../../Common/componennt/Hooks/UseSideAnimate/UseSideAnimate";

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
    const [WeeklyBooking_h, setWeeklyBooking_h] = useState([
        {header:"کل هفته",
            classes:"Fs-14"
        },
        {header:"جمعه",
            classes:"Fs-14"
        },
        {header:"پنجشنبه",
            classes:"Fs-14"
        },
        {header:"چهارشنبه",
            classes:"Fs-14"
        },
        {header:"سه ‌شنبه",
            classes:"Fs-14"
        },
        {header:"دو‌شنبه",
            classes:"Fs-14"
        },
        {header:"یک‌شنبه",
            classes:"Fs-14"
        },
        {header:"‌شنبه",
            classes:"Fs-14"
        },
    ]);

    const [WeeklyBooking_b, setWeeklyBooking_b] = useState([
        {header:"۱۲۴ ساعت",
            classes:"Fs-14 rtl fw-200"
        },
        {header:"۴۳",
            classes:"Fs-14"
        },
        {header:"۴۳",
            classes:"Fs-14"
        },
        {header:"۴۳",
            classes:"Fs-14"
        },
        {header:"۴۳",
            classes:"Fs-14"
        },
        {header:"۴۳",
            classes:"Fs-14"
        },
        {header:"۴۳",
            classes:"Fs-14"
        },
        {header:"۴۳",
            classes:"Fs-14"
        }
    ]);

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
    const [listfilters_b, setlistfilters_b] = useState([
        {header:"عملیات",
            // classes:"text-center"
        },
        {header:"وضعیت پرداخت",
            // classes:"text-right"
        },
        {header:"وضعیت رزرو",
            // classes:"text-right"
        },
        {header:"ساعت پایان",
            // classes:"text-right"
        },
        {header:"ساعت شروع",
            // classes:"text-right"
        },
        {header: "تاریخ",
            // classes:"text-right"
        }
    ]);
    const [listfilters_1, setlistfilters_1] = useState([
        {header:"آنلاین",
            // classes:"text-center"
        },
        {header:"فعال",
            // classes:"text-center"
        },
        {header:"۱۶:۰۰",
            // classes:"text-center"
        },
        {header:"۱۴:۰۰",
            // classes:"text-center"
        },
        {header:"۹۹/۱۱/۵",
            // classes:"text-right"
        },

    ]);



    useEffect(() => {
        // Update the document title using the browser API
        // return //for componentDidMount
    }, []);

    return (
        <div className='w-100  d-flex flex-center flex-column'>
            {/*menu Top*/}
            <TopBar/>

            <div className="  flex-center flex-column col-11 br-16  mt-32 bg-white p-s16-m32-lg48-xl48 "   >

                <div className="  p-2 br-16  border1-Silver-Sand w-100"  >
                {/************************************************ Sec 1 ************************************************/}
                    <div className=" d-flex justify-content-end   h-100 " >

                        <div className=" row m-0   justify-content-between   "   >
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

                            <div className="bg-white  flex-center boxShadow04 br-50 overflow-hidden " style={{width: "10vw" , height: "10vw"}}>
                                <img src='/Assets/Img/Userinfo/user.png' className="object-fit-cover" width="100%" height="100%" alt="user-pic"/>
                            </div>

                            {
                                UserInfo.map((item,index)=>

                                        <p className={["c-Masala text-center mb-0 " ,item.classes].join(" ")} key={index}>{item.header}</p>

                                )
                            }

                            <div className="d-flex w-75 justify-content-around" style={{height:"28px"}}>

                                <div className="bg-white flex-center c-Charade border2-Charade br-6 h-100   " style={{width: "72px",  }}>
                                    <span className="Fs-12 text-bold "  >
                                        تسویه <IoReceiptOutline className="c-Charade Fs-12"/>
                                    </span>
                                </div>
                                <div className="bg-white  flex-center c-Charade border2-Charade br-6 h-100   " style={{width: "72px"  }}>
                                    <span className="Fs-12 text-bold " >
                                        تماس <FiPhoneCall className="c-Charade Fs-12"/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/************************************************ Sec 2 ************************************************/}
                {/*//Todo:change  inline style br-15 border*/}

                <div className="w-100    mt-26 br-14 border1-Silver-Sand p-24" id="sec2">

                            <HighHeadline text={"رزرو هفته"}/>
                            <table className="table c-Dark-Puce mt-20 w-100">
                                <thead>
                                <tr>
                                    {
                                        WeeklyBooking_h.map((item,index)=>
                                            <td  className={[" " ,item.classes].join(" ")} key={index}>
                                                {item.header}
                                            </td>
                                        )
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    {
                                        WeeklyBooking_b.map((item,index)=>
                                            <td className={["fw-bold c-Dark-Puce " ,item.classes].join(" ")} key={index}>
                                                {item.header}
                                            </td>
                                        )
                                    }
                                </tr>
                                </tbody>
                            </table>
                </div>


                {/************************************************ Sec 3 ************************************************/}

                <div className="w-100 mt-26 br-14 border1-Silver-Sand p-24" id="sec3">

                    {/************************ Sec 3 1 ************************/}

                    <div className=" d-flex flex-row justify-content-between ">

                        <div className=" d-flex flex-row "  >
                            <span className="bg-Cultured d-flex align-items-center c-Spanish-Gray Fs-14 "><AiOutlineLeft className="Fs-16 d-flex align-items-end " style={{width:"20px"}} />۱۳۹۹/۱۱/۱ - ۱۳۹۹/۱۲/۱<AiOutlineRight className="Fs-16 " style={{width:"20px"}} /></span>
                            <span className="d-flex align-items-center c-Mountain-Mist Fs-14 pl-20" dir="rtl">فیلتر براساس تاریخ:</span>
                        </div>

                        <div className="w-25 d-flex justify-content-end">
                            <span className=" c-Charade Fs-16 fw-bold">لیست رزرو ها</span>
                        </div>

                    </div>

                    <hr className="mt-30 mb-30"/>

                    {/************************ Sec 3 2 ************************/}

                    <div className="w-100 d-flex justify-content-end">
                        <div className=" d-flex  flex-row justify-content-between w-85" >

                            {
                                listfilters.map((item,index)=>
                                    <span className={[" c-Gray-sand Fs-14  " ,item.classes].join(" ")} key={index}> {item.header}</span>
                                )
                            }

                        </div>
                    </div>

                    <div className="d-flex align-items-start mt-40">
                        <div className="w-95 d-flex justify-content-between" >
                            {
                                listfilters_b.map((item,index)=>
                                    <span className={["Fs-12  c-Mountain-Mist",item.classes].join(" ")} key={index}> {item.header}</span>
                                )
                            }
                        </div>
                    </div>

                    <hr/>

                    {/************************ Sec 3 3 ************************/}

                    <div className="d-flex align-items-center ">
                        <div className="w-95 d-flex justify-content-between " >
                            <div className="br-4 border1-Silver-Sand d-flex align-items-center justify-content-center" style={{width:"80px" , height:"30px"}}>
                                <span className="Fs-10">پرداخت شد</span>
                            </div>
                            {
                                listfilters_1.map((item,index)=>
                                    <span className={["Fs-16  c-Masala",item.classes].join(" ")} key={index}> {item.header}</span>
                                )
                            }
                        </div>

                    </div>


                    <hr/>




                </div>

                </div>
        </div>
    );
};

export default Userinfo;