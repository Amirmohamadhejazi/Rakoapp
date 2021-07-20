import React, {useState, useEffect} from 'react';

import TopBar from "../TopBar";

import { FiPhoneCall ,IoReceiptOutline} from "react-icons/all";
import {moneyFormat} from "../../Common/componennt/HelperFunction/HelperFuction";
import HighHeadline from "../HighHeadline";


// import {UseSideAnimate} from "../../Common/componennt/Hooks/UseSideAnimate/UseSideAnimate";

const Userinfo = (props) => {
    // let { mode,state,ChangePage}= UseSideAnimate()

    // **********************sec 1-1
    const [userStatistic, setUserStatistic] = useState([
        {header:"ساعت رزرو شده در ماه",
            subHeader:"۱۲۲ ساعت",
            classes:"border-r5-Charade "
        },
        {header:"پرداختی آنلاین در ماه",
            subHeader:moneyFormat(2555023),
            classes:"border-r5-Charade"
        },
        {header:"مبلغ کل پرداخت شده",
            subHeader:moneyFormat(5123511),
            classes:"border-r5-Charade"
        },
        {header:"مجموع ساعات رزرو شده",
            subHeader:"۵۶۴ ساعت",
            classes:"border-r5-Charade"
        },
        {header:"پرداختی در مخل در ماه",
            subHeader:moneyFormat(26512585),
            classes:"border-r5-Charade"
        },
        {header:"مقدار بدهکاری",
            subHeader:moneyFormat(251255023),
            classes:"border-r5-Burning-Orange"
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

    useEffect(() => {
        // Update the document title using the browser API
        // return //for componentDidMount
    }, []);

    return (
        <div className='w-100  d-flex flex-center flex-column'>
            {/*menu Top*/}
            <TopBar/>

            <div className="  flex-center flex-column col-11 br-36 " style={{  height:"70vw" }} >

                <div className=" col-11 br-14  border1-Silver-Sand" style={{  height:"39vw" }}>
                 {/************************ Sec 1 ************************/}
                    <div className=" d-flex justify-content-end align-items-center h-100 " >
                        {/*//Todo:wrong style width and alignContent*/}
                        <div className=" d-flex flex-column justify-content-between flex-wrap-reverse " style={{width:"280" , height:"160px"}} >
                            {
                                userStatistic.map((item,index)=>
                                    <div className={[" w-100 d-flex flex-column br-5 align-items-end pr-10" ,item.classes].join(" ")} key={index}>
                                        <span className="c-silver-sand Fs-14 ">{item.header}</span>
                                        <span className="c-Charade Fs-16" dir='rtl'>{item.subHeader}</span>
                                    </div>
                                )
                            }
                        </div>

                        <div className="d-flex flex-column align-items-center justify-content-around h-75" style={{ width:"250px"}}>

                            <div className="bg-white  flex-center boxShadow04 br-50 overflow-hidden " style={{width: "10vw" , height: "10vw"}}>
                                <img src='/Assets/Img/Userinfo/user.png' className="object-fit-cover" width="100%" height="100%" alt="user-pic"/>
                            </div>

                            {
                                UserInfo.map((item,index)=>
                                    <div className={[" w-100  flex-center " ,item.classes].join(" ")} key={index}>
                                        <span className="c-Masala ">{item.header}</span>
                                    </div>
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

                {/************************ Sec 2 ************************/}
                {/*//Todo:change  inline style br-15 border*/}

                <div className="col-11 d-flex flex-column flex-center mt-26 br-14 border1-Silver-Sand" id="sec2">
                        <div className="col-11 mt-26" id="High-headline">
                            <HighHeadline text={"رزرو هفته"}/>
                            <table className="table c-Dark-Puce mt-20">
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
                </div>

            </div>
        </div>
    );
};

export default Userinfo;