import React, {useState, useEffect} from 'react';

import TopBar from "../TopBar";

import { FiPhoneCall ,IoReceiptOutline} from "react-icons/all";
import {moneyFormat} from "../../Common/componennt/HelperFunction/HelperFuction";


// import {UseSideAnimate} from "../../Common/componennt/Hooks/UseSideAnimate/UseSideAnimate";

const Userinfo = (props) => {
    // let { mode,state,ChangePage}= UseSideAnimate()

    // **********************sec 1-1
    const [userStatistic, setUserStatistic] = useState([
        {header:"ساعت رزرو شده در ماه",
            subHeader:"۱۲۲ ساعت",
            classes:"b-c-Charade"
        },
        {header:"پرداختی آنلاین در ماه",
            subHeader:moneyFormat(2555023),
            classes:"b-c-Charade"
        },
        {header:"مبلغ کل پرداخت شده",
            subHeader:moneyFormat(5123511),
            classes:"b-c-Charade"
        },
        {header:"مجموع ساعات رزرو شده",
            subHeader:"۵۶۴ ساعت",
            classes:"b-c-Charade"
        },
        {header:"پرداختی در مخل در ماه",
            subHeader:moneyFormat(26512585),
            classes:"b-c-Charade"
        },
        {header:"مقدار بدهکاری",
            subHeader:moneyFormat(251255023),
            classes:"b-c-Burning-Orange"
        },

    ]);


    // **********************sec 1-2
    const [UserInfo, setUserInfo] = useState([
        {header:" هوشنگ مرادی لنکرانی",
            classes:"Fs-24"
        },
        {header:"بازیکن",
            classes:"Fs-22"
        },
        {header:"۰۹۱۱۲۵۸۷۲۳۱",
            classes:"Fs-22"
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

            <div className="bg-white  flex-center flex-column col-11 br-36 " style={{  height:"50vw" }} >
                <div className=" col-11 br-14  b-c-Silver-Sand " style={{  height:"39vw" }}>
                 {/************************ Sec 1 ************************/}
                    <div className=" d-flex justify-content-end align-items-center h-100 " >
                        {/*//Todo:wrong style width and alignContent*/}
                        <div className=" d-flex flex-column justify-content-between Fs-22 flex-wrap-reverse  " style={{width:"280" , height:"260px" , alignContent: "around"}} >
                            {
                                userStatistic.map((item,index)=>
                                    <div className={[" w-100 d-flex flex-column br-5 br-list align-items-end pr-10" ,item.classes].join(" ")} key={index}>
                                        <span className="c-silver-sand ">{item.header}</span>
                                        {/*//Todo:change  direction is attribute html tag */}
                                        {/*<span className="c-Charade " dir='rtl'>{item.subHeader}</span>*/}
                                        <span className="c-Charade " style={{direction: "rtl"}}>{item.subHeader}</span>
                                    </div>
                                )
                            }
                        </div>

                        <div className="d-flex flex-column align-items-center justify-content-around h-75" style={{ width:"330px"}}>

                            <div className="bg-white flex-center boxShadow br-50 overflow-hidden " style={{width: "9vw" , height: "9vw"}}>
                                <img src='/Assets/Img/Userinfo/user.png' className="object-fit-cover" width="100%" height="100%" alt="user-pic"/>
                            </div>

                            {
                                UserInfo.map((item,index)=>
                                    <div className={[" w-100 flex-center " ,item.classes].join(" ")} key={index}>
                                        <span className="c-Masala Fs-24 ">{item.header}</span>
                                    </div>
                                )
                            }

                            <div className="d-flex w-75 justify-content-around" style={{height:"4vw"}}>

                                <div className="bg-white flex-center c-Charade b-c-Charade br-6 h-100 b-2 " style={{width: "100px",  }}>
                                    <span className="Fs-16 text-bold "  >
                                        تسویه <IoReceiptOutline className="c-Charade Fs-18"/>
                                    </span>
                                </div>
                                <div className="bg-white flex-center c-Charade b-c-Charade br-6 h-100 b-2 " style={{width: "100px"  }}>
                                    <span className="Fs-16 text-bold " >
                                        تماس <FiPhoneCall className="c-Charade Fs-18"/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/************************ Sec 2 ************************/}
                {/*//Todo:change  inline style br-15 border*/}

                <div className=" col-11 d-flex flex-column flex-center mt-26 " style={{borderRadius: "15px", border: "1px solid #c6c6c6", fontFamily: "IRANYekan"}}>
                        <div className="col-11 ">
                            <span className="c-Charade d-flex justify-content-end  Fs-24 ">رزرو هفته</span>
                        </div>
                </div>

            </div>

        </div>
    );
};

export default Userinfo;