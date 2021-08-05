import React, {useState, useEffect} from 'react';
import { useTable } from 'react-table';


import HighHeadline from "../HighHeadline";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/all";
import Varify from "../Userinfo/Varify";
import BorderTemplate from ".././BorderTemplate";
import Table from "./table/Table";
import InventoryInformation from "./InventoryInformation";



// import {UseSideAnimate} from "../../Common/componennt/Hooks/UseSideAnimate/UseSideAnimate";

const Statistic = (props) => {

    const [userStatic, setuserStatic] = useState([

        {header:"موجودی هفته",

            // *************************************** part 1

            TitlePart1:"پرداختی آنلاین",
            SubtitlePart1:"۱،۴۰۰،۰۰۰تومان",

            TitlePart1_class: " c-silver-sand  ",
            SubtitlePart1_class:" c-Charade  ",


            // *************************************** part 2

            TitlePart2:"تعداد رزروها",
            SubtitlePart2:"۳۴",

            TitlePart2_class: " c-silver-sand ",
            SubtitlePart2_class:"c-Charade ",


            // *************************************** part 3

            TitlePart3:"میزان بدهی",
            SubtitlePart3:"۱،۴۰۰،۰۰۰تومان",

            TitlePart3_class: " c-silver-sand ",
            SubtitlePart3_class:"c-Charade   ",


            // *************************************** part 4

            TitlePart4:"پرداختی در محل",
            SubtitlePart4:"۱،۴۰۰،۰۰۰تومان",

            TitlePart4_class: "c-silver-sand",
            SubtitlePart4_class:" c-Charade     ",

            // *************************************** part 5

            TitlePart5:"۱،۴۰۰،۰۰۰تومان",
            SubtitlePart5:"میزان درآمد حاصله",

            TitlePart5_class: "c-Charade ",
            SubtitlePart5_class:" c-silver-sand   ",


        },

        {header:"موجودی روز",

            // *************************************** part 1

            TitlePart1:"پرداختی آنلاین",
            SubtitlePart1:"۱،۴۰۰،۰۰۰تومان",

            TitlePart1_class: " c-silver-sand  ",
            SubtitlePart1_class:" c-Charade  ",


            // *************************************** part 2

            TitlePart2:"تعداد رزروها",
            SubtitlePart2:"۳۴",

            TitlePart2_class: " c-silver-sand ",
            SubtitlePart2_class:"c-Charade ",


            // *************************************** part 3

            TitlePart3:"میزان بدهی",
            SubtitlePart3:"۱،۴۰۰،۰۰۰تومان",

            TitlePart3_class: " c-silver-sand ",
            SubtitlePart3_class:"c-Charade   ",


            // *************************************** part 4

            TitlePart4:"پرداختی در محل",
            SubtitlePart4:"۱،۴۰۰،۰۰۰تومان",

            TitlePart4_class: "c-silver-sand",
            SubtitlePart4_class:" c-Charade     ",

            // *************************************** part 5

            TitlePart5:"۱،۴۰۰،۰۰۰تومان",
            SubtitlePart5:"میزان درآمد حاصله",

            TitlePart5_class: "c-Charade ",
            SubtitlePart5_class:" c-silver-sand   ",


        },

        {header:"موجودی کل",

            // *************************************** part 1

            TitlePart1:"پرداختی آنلاین",
            SubtitlePart1:"۱،۴۰۰،۰۰۰تومان",

            TitlePart1_class: " c-silver-sand  ",
            SubtitlePart1_class:" c-Charade  ",


            // *************************************** part 2

            TitlePart2:"تعداد رزروها",
            SubtitlePart2:"۳۴",

            TitlePart2_class: " c-silver-sand ",
            SubtitlePart2_class:"c-Charade ",


            // *************************************** part 3

            TitlePart3:"میزان بدهی",
            SubtitlePart3:"۱،۴۰۰،۰۰۰تومان",

            TitlePart3_class: " c-silver-sand ",
            SubtitlePart3_class:"c-Charade   ",


            // *************************************** part 4

            TitlePart4:"پرداختی در محل",
            SubtitlePart4:"۱،۴۰۰،۰۰۰تومان",

            TitlePart4_class: "c-silver-sand",
            SubtitlePart4_class:" c-Charade     ",

            // *************************************** part 5

            TitlePart5:"۱،۴۰۰،۰۰۰تومان",
            SubtitlePart5:"میزان درآمد حاصله",

            TitlePart5_class: "c-Charade ",
            SubtitlePart5_class:" c-silver-sand   ",


        },

        {header:"موجودی ماه",

            // *************************************** part 1

            TitlePart1:"پرداختی آنلاین",
            SubtitlePart1:"۱،۴۰۰،۰۰۰تومان",

            TitlePart1_class: " c-silver-sand  ",
            SubtitlePart1_class:" c-Charade  ",


            // *************************************** part 2

            TitlePart2:"تعداد رزروها",
            SubtitlePart2:"۳۴",

            TitlePart2_class: " c-silver-sand ",
            SubtitlePart2_class:"c-Charade ",


            // *************************************** part 3

            TitlePart3:"میزان بدهی",
            SubtitlePart3:"۱،۴۰۰،۰۰۰تومان",

            TitlePart3_class: " c-silver-sand ",
            SubtitlePart3_class:"c-Charade   ",


            // *************************************** part 4

            TitlePart4:"پرداختی در محل",
            SubtitlePart4:"۱،۴۰۰،۰۰۰تومان",

            TitlePart4_class: "c-silver-sand",
            SubtitlePart4_class:" c-Charade     ",

            // *************************************** part 5

            TitlePart5:"۱،۴۰۰،۰۰۰تومان",
            SubtitlePart5:"میزان درآمد حاصله",

            TitlePart5_class: "c-Charade ",
            SubtitlePart5_class:" c-silver-sand   ",


        },

    ]);

    // ************************************************ sec 3 table Start ************************************************

    const Data_table = React.useMemo(
        () => [
            {
                col1: '۱۲ ساعت',
                col2: '۸ ساعت',
                col3: '۴ ساعت',
                col4: '۹ ساعت',
                col5: '۶ ساعت',
                col6: '۸ ساعت',
                col7: '۱۴ ساعت',
            },
            {
                col1: '۱،۲۳۴،۰۰۰',
                col2: '۵۶۸،۰۰۰',
                col3: '۲،۵۵۵،۳۰۰',
                col4: '۳۰۰،۰۰۰',
                col5: '۱۰،۳۲۴،۵۵۵',
                col6: '۴۵۶،۰۰۰',
                col7: '۴،۵۰۰،۰۰۰',

            },

        ],
        []
    )

    const columns_table = React.useMemo(
        () => [
            {
                Header: 'شنبه',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'یکشنبه',
                accessor: 'col2',
            },
            {
                Header: 'دوشنبه',
                accessor: 'col3', // accessor is the "key" in the data
            },
            {
                Header: 'سه شنبه',
                accessor: 'col4',
            },
            {
                Header: 'چهارشنبه',
                accessor: 'col5', // accessor is the "key" in the data
            }
            ,
            {
                Header: 'پنجشنبه',
                accessor: 'col6',
            },
            {
                Header: 'جمعه',
                accessor: 'col7',
            },
        ],
        []
    )

    //************************************************ sec 3 table End ************************************************

    useEffect(() => {
        // Update the document title using the browser API
        // return //for componentDidMount
    }, []);

    return (
        <div className='w-100 flex-column d-flex flex-center ' id="statistic">

            <div className="  flex-center flex-column col-11 br-16  mt-32 bg-white p-s16-m32-lg48-xl48 ">


                <div className=" overflow-hidden p-0">

                        <InventoryInformation data={userStatic}/>

                </div>

                    <BorderTemplate class={"mt-26 br-14 p-24"}>

                    <div className="w-100 d-flex flex-row justify-content-between">

                        <span className=" bg-Cultured d-flex align-items-center c-Spanish-Gray Fs-14 "><AiOutlineLeft className="Fs-16 d-flex align-items-end " style={{width:"20px"}} />۱۳۹۹/۱۱/۱ - ۱۳۹۹/۱۲/۱<AiOutlineRight className="Fs-16 " style={{width:"20px"}} /></span>

                        <div className=" d-flex flex-row justify-content-end">
                            <span className=" c-Charade Fs-14 fw-light">(بر حسب تومان)</span>
                            <span className=" c-Charade Fs-16 fw-bold">مدیریت مالی هفتگی</span>

                        </div>
                    </div>

                    <hr className="mt-20 mb-20" style={{width: "100%"}}/>

                        <Table data={Data_table} columns={columns_table}  />

                    </BorderTemplate>


                <BorderTemplate class={"mt-26 br-14 p-24"}>

                    <div className="w-100 d-flex justify-content-between">

                        <span className=" bg-Cultured d-flex align-items-center c-Spanish-Gray Fs-14 "><AiOutlineLeft className="Fs-16 d-flex align-items-end " style={{width: "20px"}}/>شنبه ۱۴ بهمن<AiOutlineRight className="Fs-16 " style={{width: "20px"}}/></span>
                        <span className=" c-Charade Fs-16 fw-bold">لیست رزرو ها</span>

                    </div>

                    <hr className="mt-20 mb-20 " style={{width: "100%"}}/>


                    <div className="w-100 flex-center" style={{height:"300px"}}>
                        <h1>Nemodar</h1>
                    </div>

                </BorderTemplate>
            </div>
        </div>
    );
};

export default Statistic;