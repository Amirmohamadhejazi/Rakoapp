import React, {useState, useEffect} from 'react';

import TopBar from "../TopBar";



// import {UseSideAnimate} from "../../Common/componennt/Hooks/UseSideAnimate/UseSideAnimate";

const Userinfo = (props) => {
    // let { mode,state,ChangePage}= UseSideAnimate()

    const [userStatistic, setUserStatistic] = useState([
        {header:"مجموع ساعات رزرو شده",
            subHeader:"۵۶۴ ساعت",
            classes:"b-c-Charade"
        },
        {header:"پرداختی در مخل در ماه",
            subHeader:"۲،۵۵۵،۳۰۰ تومان",
            classes:"b-c-Charade"
        },
        {header:"مقدار بدهکاری",
            subHeader:"۲،۵۵۵،۳۰۰ تومان",
            classes:"b-c-Burning-Orange"
        },

    ]);
    useEffect(() => {
        // Update the document title using the browser API
        // return //for componentDidMount
    }, []);

    return (
        <div className='w-100  d-flex flex-center flex-column ' >
            {/*menu Top*/}
            <TopBar/>

            <div className="bg-white flex-center flex-column col-11 " style={{borderRadius:"35px" , height:"50vw" }} >
                <div className=" col-11 flex-center " style={{ borderRadius:"15px" , height:"35vw" ,border:"1px solid #c6c6c6" ,  fontFamily: "IRANYekan" }}>

                    <div className="col-11 d-flex align-items-center  flex-row h-100 " >

                        <div className="col-4 d-flex flex-column h-75 justify-content-between Fs-22  "   >
                            {
                                userStatistic.map((item,index)=>
                                    <div className={["w-100 d-flex flex-column br-list  align-items-end pr-20" ,item.classes].join(" ")} key={index}>
                                        <span className="c-silver-sand ">{item.header}</span>
                                        <span className="c-Charade " style={{direction: "rtl"}}>{item.subHeader}</span>
                                    </div>

                                )
                            }




                        </div>



                        <div className="col-4 d-flex flex-column h-75 justify-content-between Fs-22  "   >

                            <div className="w-100 d-flex flex-column br-list b-c-Charade align-items-end pr-20"  >
                                <span className="c-silver-sand ">ساعت رزرو شده در ماه</span>
                                <span className="c-Charade " style={{direction: "rtl"}}>۱۲۲ ساعت</span>
                            </div>

                            <div className="w-100 d-flex flex-column br-list b-c-Charade align-items-end pr-20"   >
                                <span className="c-silver-sand ">پرداختی آنلاین در ماه</span>
                                <span className="c-Charade" style={{direction: "rtl"}}>۲،۵۵۵،۳۰۰ تومان</span>
                            </div>

                            <div className="w-100 d-flex flex-column br-list b-c-Charade align-items-end pr-20" >
                                <span className="c-silver-sand ">مبلغ کل پرداخت شده</span>
                                <span className="c-Charade " style={{direction: "rtl"}}> ۵،۰۱۱،۶۰۰ تومان</span>
                            </div>
                        </div>


                        <div className="col-4 d-flex flex-column align-items-center justify-content-around h-75 ">

                            <div className="bg-white flex-center boxShadow br-50" style={{width: "9vw" , height: "9vw"}}>
                                <img src='/Assets/Img/Userinfo/Pic-user.png' width="100%" height="100%" alt="user-pic"/>
                            </div>
                            <span className="c-Masala Fs-24 " style={{fontWeight: "400"}}>
                                    نیما مشهدی محمدرضا
                            </span>

                            <span className="c-Masala Fs-24  " style={{fontWeight: "700"}}>
                                بازیکن
                            </span>
                            <div className="bg-white flex-center c-Charade b-c-Charade " style={{width: "22vw", height: "7vw", border: "2px solid", borderRadius: "5px"}}>
                                <span className="Fs-24 text-bold " style={{fontFamily: "IRANYekan",}}>
                                    تسویه کل بدهی
                                </span>
                            </div>



                        </div>

                    </div>

                </div>


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